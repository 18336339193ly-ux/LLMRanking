const LLM_DATA = {
    lastUpdated: "2026-04-28",
    version: "1.0.0",
    models: {
        "GPT-5.5": {
            name: "GPT-5.5",
            developer: "OpenAI",
            tier: 1,
            benchmarks: {
                mmlu: 92.8,
                "swe-bench-verified": 75.1,
                "swe-bench-pro": 82,
                gpqa: 92.8,
                "arc-agi": 75.1,
                aime: 96,
                livecode: 85
            },
            agent: {
                toolAccuracy: 94,
                terminalBench: 77.3,
                osWorld: 75,
                context: "1M",
                multiTool: true,
                errorRecovery: "强"
            },
            multimodal: {
                text: "最强",
                image: "极强",
                video: "支持",
                audio: "支持",
                native: true,
                ocr: "极强"
            },
            context: {
                window: "1M",
                retrieval100k: "强",
                retrieval500k: "中",
                retrieval1m: "待验证",
                longContext: "良好",
                rag: "优秀"
            },
            price: {
                input: 5.00,
                output: 30.00,
                currency: "USD"
            },
            summary: {
                comment: "全能旗舰，综合最强",
                pros: "多模态、Agent、计算机操控",
                cons: "价格最贵"
            },
            colors: { primary: "#10a37f", secondary: "#1a7f64" }
        },
        "Claude Opus 4.7": {
            name: "Claude Opus 4.7",
            developer: "Anthropic",
            tier: 1,
            benchmarks: {
                mmlu: 89.7,
                "swe-bench-verified": 80.8,
                "swe-bench-pro": 64.3,
                gpqa: 91.3,
                "arc-agi": 65.4,
                aime: 95,
                livecode: 88
            },
            agent: {
                toolAccuracy: 91,
                terminalBench: 69.9,
                osWorld: "Beta",
                context: "200K/1M Beta",
                multiTool: true,
                errorRecovery: "强"
            },
            multimodal: {
                text: "最强",
                image: "3.75MP",
                video: "弱",
                audio: "不支持",
                native: "部分",
                ocr: "强"
            },
            context: {
                window: "200K/1M Beta",
                retrieval100k: "极强",
                retrieval500k: "强",
                retrieval1m: "97.2%",
                longContext: "优秀",
                rag: "优秀"
            },
            price: {
                input: 5.00,
                output: 25.00,
                currency: "USD"
            },
            summary: {
                comment: "编程与写作双料冠军",
                pros: "SWE-bench第一、文本质量高",
                cons: "价格高、无原生视频"
            },
            colors: { primary: "#d4a574", secondary: "#b8956a" }
        },
        "Gemini 3.1 Pro": {
            name: "Gemini 3.1 Pro",
            developer: "Google",
            tier: 1,
            benchmarks: {
                mmlu: 91,
                "swe-bench-verified": 80.6,
                "swe-bench-pro": 54.2,
                gpqa: 94.3,
                "arc-agi": 77.1,
                aime: 92,
                livecode: 82
            },
            agent: {
                toolAccuracy: 89,
                terminalBench: 68.5,
                osWorld: 65,
                context: "2M",
                multiTool: true,
                errorRecovery: "中"
            },
            multimodal: {
                text: "最强",
                image: "极强",
                video: "最强",
                audio: "支持",
                native: true,
                ocr: "极强"
            },
            context: {
                window: "2M",
                retrieval100k: "极强",
                retrieval500k: "极强",
                retrieval1m: "强",
                longContext: "最优",
                rag: "优秀"
            },
            price: {
                input: 2.00,
                output: 12.00,
                currency: "USD"
            },
            summary: {
                comment: "多模态+超长上下文性价比之王",
                pros: "2M上下文、视频理解、价格适中",
                cons: "SWE-bench Pro较弱"
            },
            colors: { primary: "#4285f4", secondary: "#2b6de5" }
        },
        "DeepSeek V4-Pro": {
            name: "DeepSeek V4-Pro",
            developer: "深度求索",
            tier: 2,
            benchmarks: {
                mmlu: 90.1,
                "swe-bench-verified": 80.6,
                "swe-bench-pro": 85,
                gpqa: 90.1,
                "arc-agi": 70,
                aime: 99.4,
                livecode: 93.5
            },
            agent: {
                toolAccuracy: 87,
                terminalBench: 65,
                osWorld: false,
                context: "1M",
                multiTool: true,
                errorRecovery: "中"
            },
            multimodal: {
                text: "最强",
                image: "支持",
                video: "弱",
                audio: "不支持",
                native: "部分",
                ocr: "强"
            },
            context: {
                window: "1M",
                retrieval100k: "强",
                retrieval500k: "强",
                retrieval1m: "强",
                longContext: "优秀",
                rag: "优秀"
            },
            price: {
                input: 1.74,
                output: 3.48,
                currency: "USD"
            },
            summary: {
                comment: "数学/代码开源性价比天花板",
                pros: "AIME 99.4%、价格极低",
                cons: "多模态能力弱"
            },
            colors: { primary: "#0066cc", secondary: "#0052a3" }
        },
        "GLM-5.1": {
            name: "GLM-5.1",
            developer: "智谱AI",
            tier: 2,
            benchmarks: {
                mmlu: 88,
                "swe-bench-verified": 78,
                "swe-bench-pro": 70,
                gpqa: 88,
                "arc-agi": 65,
                aime: 96,
                livecode: 90
            },
            agent: {
                toolAccuracy: 88,
                terminalBench: 62,
                osWorld: false,
                context: "128K",
                multiTool: true,
                errorRecovery: "中"
            },
            multimodal: {
                text: "强",
                image: "支持",
                video: "弱",
                audio: "支持",
                native: true,
                ocr: "强"
            },
            context: {
                window: "128K",
                retrieval100k: "强",
                retrieval500k: "中",
                retrieval1m: "弱",
                longContext: "一般",
                rag: "良好"
            },
            price: {
                input: 1.26,
                output: 3.96,
                currency: "CNY"
            },
            summary: {
                comment: "Agent能力最强的国产开源",
                pros: "SWE-bench Pro 70%、国产算力适配",
                cons: "国际知名度较低"
            },
            colors: { primary: "#00d1b2", secondary: "#00b89c" }
        },
        "Kimi K2.6": {
            name: "Kimi K2.6",
            developer: "月之暗面",
            tier: 2,
            benchmarks: {
                mmlu: 86,
                "swe-bench-verified": 80.2,
                "swe-bench-pro": 58,
                gpqa: 87.6,
                "arc-agi": 62,
                aime: 93,
                livecode: 82
            },
            agent: {
                toolAccuracy: 86,
                terminalBench: 60,
                osWorld: false,
                context: "1M",
                multiTool: true,
                errorRecovery: "中"
            },
            multimodal: {
                text: "强",
                image: "支持",
                video: "支持",
                audio: "支持",
                native: true,
                ocr: "强"
            },
            context: {
                window: "1M",
                retrieval100k: "极强",
                retrieval500k: "强",
                retrieval1m: "强",
                longContext: "优秀",
                rag: "优秀"
            },
            price: {
                input: 0.60,
                output: 2.50,
                currency: "USD"
            },
            summary: {
                comment: "长文本处理专家",
                pros: "1M上下文、中文友好",
                cons: "编程能力中等"
            },
            colors: { primary: "#9333ea", secondary: "#7c3aed" }
        },
        "Qwen3.6-Plus": {
            name: "Qwen3.6-Plus",
            developer: "阿里云",
            tier: 3,
            benchmarks: {
                mmlu: 85,
                "swe-bench-verified": 77,
                "swe-bench-pro": 55,
                gpqa: 85,
                "arc-agi": 60,
                aime: 94,
                livecode: 80
            },
            agent: {
                toolAccuracy: 85,
                terminalBench: 58,
                osWorld: false,
                context: "128K",
                multiTool: true,
                errorRecovery: "中"
            },
            multimodal: {
                text: "强",
                image: "强",
                video: "弱",
                audio: "支持",
                native: true,
                ocr: "强"
            },
            context: {
                window: "128K",
                retrieval100k: "强",
                retrieval500k: "中",
                retrieval1m: "弱",
                longContext: "一般",
                rag: "良好"
            },
            price: {
                input: 0.30,
                output: 1.20,
                currency: "USD"
            },
            summary: {
                comment: "编程能力国产第一",
                pros: "Code Arena全球前三、开源生态好",
                cons: "长上下文较弱"
            },
            colors: { primary: "#ff6b35", secondary: "#e55a2b" }
        },
        "豆包 Seed 2.0 Pro": {
            name: "豆包 Seed 2.0 Pro",
            developer: "字节跳动",
            tier: 3,
            benchmarks: {
                mmlu: 83,
                "swe-bench-verified": 72,
                "swe-bench-pro": 50,
                gpqa: 82,
                "arc-agi": 58,
                aime: 88,
                livecode: 75
            },
            agent: {
                toolAccuracy: 82,
                terminalBench: 55,
                osWorld: false,
                context: "256K",
                multiTool: true,
                errorRecovery: "中"
            },
            multimodal: {
                text: "强",
                image: "极强",
                video: "支持",
                audio: "支持",
                native: true,
                ocr: "强"
            },
            context: {
                window: "256K",
                retrieval100k: "强",
                retrieval500k: "中",
                retrieval1m: "弱",
                longContext: "良好",
                rag: "良好"
            },
            price: {
                input: 0.50,
                output: 2.00,
                currency: "CNY"
            },
            summary: {
                comment: "C端体验最佳多模态",
                pros: "交互流畅、字节生态",
                cons: "高端场景稍弱"
            },
            colors: { primary: "#fe3939", secondary: "#dc2626" }
        },
        "文心一言 5.0": {
            name: "文心一言 5.0",
            developer: "百度",
            tier: 3,
            benchmarks: {
                mmlu: 82,
                "swe-bench-verified": 70,
                "swe-bench-pro": 48,
                gpqa: 80,
                "arc-agi": 55,
                aime: 85,
                livecode: 72
            },
            agent: {
                toolAccuracy: 80,
                terminalBench: 52,
                osWorld: false,
                context: "128K",
                multiTool: true,
                errorRecovery: "中"
            },
            multimodal: {
                text: "强",
                image: "强",
                video: "支持",
                audio: "支持",
                native: true,
                ocr: "强"
            },
            context: {
                window: "128K",
                retrieval100k: "强",
                retrieval500k: "中",
                retrieval1m: "弱",
                longContext: "一般",
                rag: "良好"
            },
            price: {
                input: 0.80,
                output: 3.00,
                currency: "CNY"
            },
            summary: {
                comment: "中文理解最精准",
                pros: "中文语义、合规最强",
                cons: "国际基准稍弱"
            },
            colors: { primary: "#293688", secondary: "#1e2761" }
        }
    },
    benchmarkNames: {
        mmlu: "MMLU-Pro (综合知识)",
        "swe-bench-verified": "SWE-bench Verified (代码修复)",
        "swe-bench-pro": "SWE-bench Pro (真实GitHub)",
        gpqa: "GPQA Diamond (博士级推理)",
        "arc-agi": "ARC-AGI-2 (抽象推理)",
        aime: "AIME 2026 (数学竞赛)",
        livecode: "LiveCodeBench (动态编程)"
    },
    sceneRecommendations: [
        { scene: "🏢 企业级复杂开发", desc: "需要最高代码质量、大型代码库理解", models: ["Claude Opus 4.7", "GPT-5.4"] },
        { scene: "🧮 数学/科研/算法研究", desc: "高精度数学推理、奥赛级别、科学计算", models: ["DeepSeek V4-Pro", "GPT-5.5"] },
        { scene: "📄 超长文档分析", desc: "合同/论文/书籍精读、百万字上下文处理", models: ["Gemini 3.1 Pro", "Kimi K2.6"] },
        { scene: "🎥 多模态内容分析", desc: "视频理解、图像分析、音频处理", models: ["Gemini 3.1 Pro", "GPT-5.5"] },
        { scene: "🔧 Agent/自动化流程", desc: "多工具调用、自主任务执行、DevOps自动化", models: ["GPT-5.4", "Claude Opus 4.7"] },
        { scene: "💰 成本敏感型项目", desc: "高频调用、高并发、中小团队", models: ["DeepSeek V4-Pro", "Qwen3.6-Plus"] },
        { scene: "🇨🇳 中文本土化场景", desc: "中文创作、政务文档、中文语义理解", models: ["文心一言 5.0", "Kimi K2.6"] },
        { scene: "🔒 开源私有化部署", desc: "数据隐私、企业内网、定制微调", models: ["DeepSeek V4-Pro", "GLM-5.1"] },
        { scene: "🎬 短视频/C端内容创作", desc: "社交媒体、内容创作、创意文案", models: ["豆包 Seed 2.0 Pro", "GPT-5.5"] },
        { scene: "🏛️ 政务/金融合规场景", desc: "合规要求高、安全性优先、中文理解精准", models: ["文心一言 5.0", "GLM-5.1"] }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LLM_DATA;
}