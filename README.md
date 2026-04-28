# 🤖 涵盖当前所有主流大模型性能阶梯表

> 实时更新的AI大模型多维度对比平台

## 🌟 特性

- **实时更新** - 每日自动从权威基准获取最新数据
- **多维度对比** - 涵盖编程、数学、Agent、多模态、长上下文等10+维度
- **跨平台访问** - 通过GitHub Pages托管，任何设备打开网址即可访问
- **交互式图表** - 支持雷达图、柱状图等多种可视化展示

## 📊 支持的模型

| 梯队 | 模型 |
|------|------|
| 第一梯队 | GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, Grok 4 |
| 第二梯队 | DeepSeek V4-Pro, GLM-5.1, Kimi K2.6 |
| 第三梯队 | Qwen3.6-Plus, 豆包 Seed 2.0 Pro, 文心一言 5.0 |

## 🚀 快速部署

### 方法一：Fork本仓库（推荐）

1. 点击右上角 **Fork** 按钮复制本仓库
2. 进入仓库 **Settings** → **Pages**
3. Source 选择 **Deploy from a branch**, branch 选择 **main**
4. 等待1-2分钟，页面将自动部署

访问地址：`https://yourusername.github.io/LLMRanking`
或者直接网页打开https://18336339193ly-ux.github.io/LLMRanking/在线浏览
### 方法二：手动部署

```bash
git clone https://github.com/yourusername/LLMRanking.git
cd LLMRanking
# 推送到自己的GitHub仓库
git remote set-url origin https://github.com/yourusername/LLMRanking.git
git push -u origin main
```

## 📁 项目结构

```
LLMRanking/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── styles.css      # 样式文件
│   └── js/
│       ├── data.js         # 数据文件（修改这个更新数据）
│       └── app.js          # 应用逻辑
├── .github/
│   └── workflows/
│       ├── deploy-pages.yml    # 部署 workflow
│       └── update-data.yml     # 数据更新 workflow
└── README.md
```

## 🔄 如何更新数据

### 手动更新

直接修改 `assets/js/data.js` 文件中的 `LLM_DATA` 对象，然后提交即可。

### 自动更新

GitHub Actions 会在每天 UTC 16:00（北京时间 00:00）自动执行数据更新。

#### 配置自动更新（可选）

1. 在 [Artificial Analysis](https://artificialanalysis.ai) 注册获取 API key
2. 在 GitHub 仓库 Settings → Secrets 添加 `ARTIFICIAL_ANALYSIS_KEY`
3. 修改 `.github/workflows/update-data.yml` 中的数据获取脚本

## 📈 支持的评测维度

| 维度 | 基准测试 |
|------|----------|
| 综合知识 | MMLU-Pro |
| 代码能力 | SWE-bench Verified, SWE-bench Pro, LiveCodeBench |
| 数学推理 | AIME 2026, GPQA Diamond |
| 抽象推理 | ARC-AGI-2 |
| Agent能力 | Terminal-Bench, OSWorld, 工具调用准确率 |
| 多模态 | 文本/图像/视频/音频理解 |
| 长上下文 | 100K/500K/1M检索测试 |
| 价格 | API输入/输出价格 |

## 🎯 场景选型

- 🏢 企业级复杂开发
- 🧮 数学/科研/算法研究
- 📄 超长文档分析
- 🎥 多模态内容分析
- 🔧 Agent/自动化流程
- 💰 成本敏感型项目
- 🇨🇳 中文本土化场景
- 🔒 开源私有化部署

## 📝 数据来源

- [Artificial Analysis](https://artificialanalysis.ai)
- [LMArena (Chatbot Arena)](https://chat.lmsys.org)
- [SWE-bench](https://swebench.com)
- [DataLearnerAI](https://datalearner.com)
- [AgentBench](https://agentbench.com)

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

## 📄 许可证

MIT License

---

**Star ⭐ 支持一下，让更多人看到！**
