let radarChart = null;
let benchmarkChart = null;
let agentChart = null;
let contextChart = null;
let priceChart = null;

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    try {
        await loadData();
        initTabs();
        renderAll();
        updateUpdateStatus();
    } catch (error) {
        console.error('初始化失败:', error);
        document.getElementById('updateBadge').textContent = '❌ 数据加载失败';
    }
}

async function loadData() {
    const response = await fetch('assets/js/data.js');
    if (!response.ok) throw new Error('无法加载数据');
}

function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}

function renderAll() {
    renderRanking();
    renderRadarChart();
    renderBenchmarkTable();
    renderAgentTable();
    renderMultimodalGrid();
    renderContextTable();
    renderPriceCards();
    renderSceneGrid();
}

function updateUpdateStatus() {
    const badge = document.getElementById('updateBadge');
    const lastUpdate = document.getElementById('lastUpdate');
    badge.textContent = '✅ 数据已加载';
    badge.className = 'update-badge success';
    lastUpdate.textContent = `最后更新: ${LLM_DATA.lastUpdated}`;
}

function renderRanking() {
    const grid = document.getElementById('rankingGrid');
    const sortedModels = Object.values(LLM_DATA.models)
        .sort((a, b) => a.tier - b.tier || 
            (Object.values(b.benchmarks)[0] - Object.values(a.benchmarks)[0]));

    grid.innerHTML = sortedModels.map(model => {
        const tierLabels = ['🥇 第一梯队', '🥈 第二梯队', '🥉 第三梯队'];
        const tierColors = ['#ffd700', '#c0c0c0', '#cd7f32'];
        const overallScore = Math.round(
            Object.values(model.benchmarks).reduce((a, b) => a + b, 0) / 
            Object.values(model.benchmarks).length
        );
        
        return `
            <div class="ranking-card" style="border-left: 4px solid ${tierColors[model.tier-1]}">
                <div class="ranking-header">
                    <span class="tier-label" style="background: ${tierColors[model.tier-1]}">${tierLabels[model.tier-1]}</span>
                    <span class="overall-score">综合 ${overallScore}%</span>
                </div>
                <h3 style="color: ${model.colors.primary}">${model.name}</h3>
                <p class="developer">${model.developer}</p>
                <p class="comment">${model.summary.comment}</p>
                <div class="pros-cons">
                    <span class="pro">✓ ${model.summary.pros}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;

    const topModels = ['GPT-5.5', 'Claude Opus 4.7', 'Gemini 3.1 Pro', 'DeepSeek V4-Pro'];
    const labels = ['综合知识', '代码能力', '数学推理', 'Agent能力', '多模态', '长上下文', '性价比'];
    
    const datasets = topModels.map((modelKey, index) => {
        const model = LLM_DATA.models[modelKey];
        const colors = ['#10a37f', '#d4a574', '#4285f4', '#0066cc'];
        return {
            label: model.name,
            data: [
                model.benchmarks.mmlu,
                model.benchmarks["swe-bench-verified"],
                model.benchmarks.aime,
                model.agent.toolAccuracy,
                (model.multimodal.native ? 90 : 60),
                parseInt(model.context.window) / 20000,
                100 - (model.price.output / model.price.output * 30)
            ],
            borderColor: colors[index],
            backgroundColor: colors[index] + '20',
            borderWidth: 2,
            pointBackgroundColor: colors[index]
        };
    });

    if (radarChart) radarChart.destroy();
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: { labels, datasets },
        options: {
            responsive: true,
            scales: {
                r: { min: 0, max: 100 }
            },
            plugins: { legend: { position: 'bottom' } }
        }
    });
}

function renderBenchmarkTable() {
    const container = document.getElementById('benchmarkTable');
    if (!container) return;

    const benchmarkKeys = ['mmlu', 'swe-bench-verified', 'gpqa', 'aime', 'livecode'];
    
    let html = `<table><thead><tr><th>模型</th>`;
    benchmarkKeys.forEach(key => {
        html += `<th>${LLM_DATA.benchmarkNames[key]}</th>`;
    });
    html += `</tr></thead><tbody>`;

    Object.values(LLM_DATA.models).forEach(model => {
        html += `<tr><td class="model-cell" style="border-left: 3px solid ${model.colors.primary}">${model.name}</td>`;
        benchmarkKeys.forEach(key => {
            const value = model.benchmarks[key];
            const color = value >= 90 ? '#00ff88' : value >= 80 ? '#ffd700' : '#ff6b6b';
            html += `<td style="color: ${color}; font-weight: bold;">${value}%</td>`;
        });
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderAgentTable() {
    const container = document.getElementById('agentTable');
    if (!container) return;

    let html = `<table><thead><tr>
        <th>模型</th>
        <th>工具调用准确率</th>
        <th>Terminal-Bench</th>
        <th>OSWorld</th>
        <th>上下文窗口</th>
        <th>多工具协作</th>
        <th>错误恢复</th>
    </tr></thead><tbody>`;

    Object.values(LLM_DATA.models).forEach(model => {
        html += `<tr>
            <td class="model-cell" style="border-left: 3px solid ${model.colors.primary}">${model.name}</td>
            <td style="color: ${model.agent.toolAccuracy >= 90 ? '#00ff88' : '#ffd700'}">${model.agent.toolAccuracy}%</td>
            <td>${model.agent.terminalBench}%</td>
            <td>${typeof model.agent.osWorld === 'number' ? model.agent.osWorld + '%' : model.agent.osWorld}</td>
            <td><strong>${model.context.window}</strong></td>
            <td>${model.agent.multiTool ? '✅' : '❌'}</td>
            <td>${model.agent.errorRecovery}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderMultimodalGrid() {
    const grid = document.getElementById('multimodalGrid');
    if (!grid) return;

    grid.innerHTML = Object.values(LLM_DATA.models).map(model => `
        <div class="multimodal-card" style="border-top: 4px solid ${model.colors.primary}">
            <h3>${model.name}</h3>
            <div class="mm-tags">
                <span class="tag ${model.multimodal.text === '最强' ? 'tag-excellent' : 'tag-good'}">文本: ${model.multimodal.text}</span>
                <span class="tag ${model.multimodal.image === '极强' ? 'tag-excellent' : 'tag-good'}">图像: ${model.multimodal.image}</span>
                <span class="tag ${model.multimodal.video === '最强' || model.multimodal.video === '支持' ? 'tag-excellent' : 'tag-poor'}">视频: ${model.multimodal.video}</span>
                <span class="tag ${model.multimodal.audio === '支持' ? 'tag-excellent' : 'tag-poor'}">音频: ${model.multimodal.audio}</span>
                <span class="tag ${model.multimodal.native ? 'tag-excellent' : 'tag-average'}">原生多模态: ${model.multimodal.native ? '✅' : '❌'}</span>
            </div>
        </div>
    `).join('');
}

function renderContextTable() {
    const container = document.getElementById('contextTable');
    if (!container) return;

    let html = `<table><thead><tr>
        <th>模型</th>
        <th>上下文窗口</th>
        <th>100K检索</th>
        <th>500K检索</th>
        <th>1M检索</th>
        <th>长上下文保持</th>
        <th>RAG优化</th>
    </tr></thead><tbody>`;

    Object.values(LLM_DATA.models).forEach(model => {
        html += `<tr>
            <td class="model-cell" style="border-left: 3px solid ${model.colors.primary}">${model.name}</td>
            <td><strong style="color: ${model.colors.primary}">${model.context.window}</strong></td>
            <td>${model.context.retrieval100k}</td>
            <td>${model.context.retrieval500k}</td>
            <td>${model.context.retrieval1m}</td>
            <td>${model.context.longContext}</td>
            <td>${model.context.rag}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderPriceCards() {
    const container = document.getElementById('priceCards');
    if (!container) return;

    const sortedModels = Object.values(LLM_DATA.models)
        .sort((a, b) => a.price.output - b.price.output);

    container.innerHTML = sortedModels.map(model => `
        <div class="price-card" style="border-left: 4px solid ${model.colors.primary}">
            <h3>${model.name}</h3>
            <div class="price-row">
                <span class="label">输入:</span>
                <span class="value">${model.price.currency === 'USD' ? '$' : '¥'}${model.price.input}/M</span>
            </div>
            <div class="price-row">
                <span class="label">输出:</span>
                <span class="value highlight">${model.price.currency === 'USD' ? '$' : '¥'}${model.price.output}/M</span>
            </div>
        </div>
    `).join('');
}

function renderSceneGrid() {
    const grid = document.getElementById('sceneGrid');
    if (!grid) return;

    grid.innerHTML = LLM_DATA.sceneRecommendations.map(scene => `
        <div class="scene-card">
            <h4>${scene.scene}</h4>
            <p>${scene.desc}</p>
            <p class="recommend">→ ${scene.models.join(' / ')}</p>
        </div>
    `).join('');
}