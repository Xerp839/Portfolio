export const profile = {
  name: 'Anish Patil',
  role: 'AI Engineer',
  location: 'Mumbai, India',
  email: 'apanishpatil839@gmail.com',
  phone: '+91-9833944247',
  github: 'https://github.com/Xerp839/',
  linkedin: 'https://www.linkedin.com/in/anish-patil-81b6042ab/',
  summary:
    'AI Engineer with 1+ year of production experience building LLM agents, multi-LLM chatbots and backend pipelines with FastAPI, LangChain and LangGraph. I cut latency by 40–50% across LLM and NLP services, reached 100% consistent execution in tool-calling agents, and delivered event-driven automation and GitOps deployments (Kubernetes, ArgoCD) for enterprise clients.',
}

export const roles = [
  'LLM Agents',
  'Multi-LLM Chatbots',
  'FastAPI Backends',
  'GitOps & Kubernetes',
]

export const focusAreas = [
  { title: 'LLM Agents', text: 'Tool-calling agents and multi-LLM chatbots with tight prompts and reliable execution.' },
  { title: 'AI Security', text: 'PII classification, trace ingestion and real-time policy checks for enterprise clients.' },
  { title: 'DevOps & GitOps', text: 'Docker, Kubernetes and ArgoCD pipelines with secure, repeatable deployments.' },
  { title: 'Automation', text: 'Event-driven workflows across Gmail, Slack, ATS and social platforms.' },
]

export const skills = [
  {
    title: 'LLM & AI',
    items: ['LangChain', 'LangGraph', 'RAG', 'Vector Search', 'Tool Calling', 'Multi-LLM Orchestration', 'Prompt Engineering', 'Hallucination Mitigation', 'Ollama', 'NLP (Presidio)'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'JavaScript', 'REST APIs', 'Microservices', 'Event-Driven Architecture', 'MongoDB', 'MySQL'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'ArgoCD', 'GitOps', 'HashiCorp Vault', 'VM Deployment', 'Cron', 'Git', 'Postman'],
  },
  {
    title: 'Integrations',
    items: ['Gmail API', 'YouTube API', 'Slack', 'ElevenLabs', 'Higgsfield', 'Loxo ATS', 'Instagram'],
  },
]

export const experience = {
  title: 'AI Engineer',
  company: 'Quantal',
  period: 'Jul 2025 – Present',
  groups: [
    {
      name: 'LLM Agents & Chatbots',
      points: [
        { lead: 'Multi-LLM Chatbot', text: 'Re-architected a multi-LLM chatbot from frontend-orchestrated to backend-orchestrated. Optimized prompts and query execution flows, reducing latency by ~40% and significantly improving response accuracy.' },
        { lead: 'AI Restaurant Assistant (LangChain & FastAPI)', text: 'Engineered an AI agent with custom tool-calling for order creation and operational checks, such as verifying restaurant hours to block invalid orders.' },
        { lead: 'Prompt Optimization & Hallucination Mitigation', text: 'Reduced system prompt context size by 50% and isolated complex logic into modular tools. Strict system prompts resulted in 100% consistent and reliable order execution.' },
      ],
    },
    {
      name: 'AI Security & Observability Platform (Enterprise Client)',
      points: [
        { lead: 'Google Trace Connector', text: 'Designed and built end-to-end connector microservices (discovery + primary) integrated with the portal backend for automated agent discovery via user credentials and scheduled trace ingestion.' },
        { lead: 'PII Classifier Optimization', text: 'Fixed a bottleneck where a Presidio NLP model loaded on every request. Cached it at startup and restructured the prompt, cutting processing from 16–18s to 8–12s (~50%).' },
        { lead: 'Inline Decision Engine Integration', text: 'Integrated a Rust-based decision engine with the AI agent layer for real-time pre- and post-response PII and policy checks, including API-key auth for query interception and response filtering in production.' },
      ],
    },
    {
      name: 'DevOps & GitOps',
      points: [
        { lead: 'Automated Deployments', text: 'Led end-to-end ArgoCD implementation to move infrastructure to GitOps, eliminating manual kubectl rollouts and client-machine access for deployments.' },
        { lead: 'Containerization & Security', text: 'Containerized and secured 26 Docker images, resolving failing pods and reducing vulnerability scores. Refactored install scripts with consistent image tags and secure Vault setups.' },
      ],
    },
  ],
}

export const projects = [
  {
    title: 'Multi-LLM Chatbot',
    tag: 'LLM · Backend',
    metric: '~40% faster',
    text: 'Moved orchestration from the frontend to the backend and tuned prompts and query flows for lower latency and better answers.',
    tech: ['Python', 'FastAPI', 'Multi-LLM'],
  },
  {
    title: 'AI Restaurant Assistant',
    tag: 'Agent',
    metric: '100% consistent',
    text: 'Tool-calling agent that creates orders and runs operational checks (e.g. opening hours) to block invalid orders.',
    tech: ['LangChain', 'FastAPI', 'Tool Calling'],
  },
  {
    title: 'AI Security & Observability',
    tag: 'Enterprise',
    metric: '~50% faster PII',
    text: 'Google trace connectors, a cached Presidio PII classifier, and a Rust inline decision engine for real-time policy checks.',
    tech: ['Microservices', 'Presidio', 'Rust engine'],
  },
  {
    title: 'GitOps with ArgoCD',
    tag: 'DevOps',
    metric: '26 images secured',
    text: 'Moved infra to GitOps on Kubernetes, removed manual rollouts, and hardened containers with Vault-based secrets.',
    tech: ['Kubernetes', 'ArgoCD', 'Docker', 'Vault'],
  },
  {
    title: 'Recruitment Automation',
    tag: 'Automation',
    metric: '15+ hrs/week saved',
    text: 'Parses candidate emails from Gmail, maps them to jobs in Loxo ATS, and posts daily Slack summaries and failure alerts.',
    tech: ['Gmail API', 'Loxo ATS', 'Slack'],
  },
  {
    title: 'AI Podcast Video Automation',
    tag: 'Automation',
    metric: 'Event-driven',
    text: 'Turns trending topics into Instagram videos with ElevenLabs and Higgsfield, approval emails, VM hosting and a monitoring dashboard.',
    tech: ['YouTube API', 'ElevenLabs', 'Higgsfield', 'Instagram'],
  },
]

export const education = [
  { degree: 'B.E. Computer Engineering', school: 'Terna Engineering College, India', period: '2021 – 2025' },
  { degree: 'HSC (Class XII)', school: 'S.B.J School, India', period: '2020 – 2021' },
  { degree: 'CBSE (Class X)', school: 'Arya Gurukul School, India', period: '2018 – 2019' },
]

export const chatFlow = [
  {
    q: 'How much experience do you have?',
    a: 'Anish has 1+ year of production experience as an AI Engineer at Quantal (since Jul 2025), after finishing his B.E. in Computer Engineering from Terna Engineering College in 2025.',
  },
  {
    q: 'What kind of projects have you worked on?',
    a: 'LLM agents and multi-LLM chatbots, an AI security & observability platform for an enterprise client, GitOps deployments with ArgoCD on Kubernetes, a recruitment automation pipeline, and an AI podcast video automation system.',
  },
  {
    q: 'Give me a quick summary',
    a: 'AI Engineer who builds LLM agents and backend pipelines with FastAPI, LangChain and LangGraph. Cut latency by 40–50% across LLM and NLP services, hit 100% consistent tool-calling execution, and shipped event-driven automation and GitOps deployments.',
  },
  {
    q: 'What are your key achievements?',
    a: '~40% lower chatbot latency, ~50% faster PII classification (16–18s → 8–12s), 50% smaller system prompts, 26 Docker images containerized and secured, and 15+ hours/week of manual data entry eliminated.',
  },
  {
    q: 'What is your tech stack?',
    a: 'Python, FastAPI, Flask, LangChain, LangGraph, RAG, Ollama, Docker, Kubernetes, ArgoCD, HashiCorp Vault, MongoDB and MySQL — plus integrations like Gmail, Slack, YouTube and ElevenLabs.',
  },
]
