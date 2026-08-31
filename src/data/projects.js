export const categories = [
  "All",
  "Machine Learning",
  "Data Science",
  "AI",
  "Data Analytics",
  "Power BI",
  "NLP",
  "Computer Vision",
];

export const currentlyBuilding = [
  {
    id: "autonomous-ai-agents",
    title: "Autonomous Multi-Agent Workflow Orchestrator",
    status: "In Progress",
    description:
      "Developing an autonomous multi-agent reasoning framework using LangGraph and FastAPI for automated research synthesis, workflow orchestration, and tool-augmented reasoning.",
    problem: "Orchestrating complex multi-step reasoning workflows with autonomous AI agents and tool execution.",
    techStack: ["Python", "LangGraph", "FastAPI", "RAG", "ChromaDB", "LLMs"],
    github: "https://github.com/yogant18",
  },
];

export const projects = [
  {
    id: "ai-video-assistant",
    title: "AI Video Assistant",
    category: "AI",
    shortDescription:
      "Transcription and summarization tool for YouTube videos/audio with multilingual support and RAG-based interactive Q&A.",
    description:
      "Engineered an AI application that transcribes video/audio streams (supporting English and Hindi/Hinglish), extracts structured meeting action items and decisions, and powers an interactive RAG conversational interface via ChromaDB and Mistral AI, served with a Streamlit UI.",
    image: "/images/projects/project2.jpg",
    techStack: ["AI", "NLP", "Python", "Mistral AI", "LangChain", "RAG", "Streamlit"],
    links: {
      github: "https://github.com/yogant18/AI-Video-Assistant-",
    },
    featured: true,
  },
  {
    id: "vendor-invoice",
    title: "Vendor Invoice Intelligence System",
    category: "Machine Learning",
    shortDescription:
      "End-to-end ML system predicting freight costs and detecting high-risk vendor invoices with interactive Streamlit analytics.",
    description:
      "Developed a production-grade machine learning solution for finance analytics. Implemented dual regression and classification models (Random Forest, Logistic Regression) to predict freight costs and detect fraudulent/high-risk invoices from historical transaction data.",
    image: "/images/projects/project4.jpg",
    techStack: ["Machine Learning", "Data Science", "Python", "Scikit-learn", "SQL", "Streamlit"],
    links: {
      github: "https://github.com/yogant18/Vendor-Invoice-Intelligence-System",
    },
    featured: true,
  },
  {
    id: "telco-churn",
    title: "Telco Customer Churn ML Platform",
    category: "Machine Learning",
    shortDescription:
      "Full machine learning solution for telecom churn prediction with automated data pipelines, containerized FastAPI backend, and AWS deployment.",
    description:
      "Built and shipped an end-to-end churn prediction service for telecom customers — covering exploratory data analysis, feature engineering, model training, containerized FastAPI model serving, and an interactive Streamlit dashboard on AWS.",
    image: "/images/projects/project1.jpg",
    techStack: ["Machine Learning", "Data Science", "Python", "Scikit-learn", "FastAPI", "Docker", "AWS", "Streamlit"],
    links: {
      github: "https://github.com/yogant18/Telco-Customer-Churn-ML",
    },
    featured: true,
  },
  {
    id: "careerreach-ai",
    title: "CareerReach AI",
    category: "AI",
    shortDescription:
      "LLM platform that parses company career pages and generates personalized outreach emails using semantic vector search.",
    description:
      "Developed CareerReach AI to extract job postings directly from company career pages and generate tailored cold emails using RAG, LangChain, and Groq LLMs. Implemented vector search to match candidate portfolio strengths with specific job requirements.",
    image: "/images/projects/project3.jpg",
    techStack: ["AI", "NLP", "Python", "LangChain", "Groq", "Vector DB", "RAG"],
    links: {
      github: "https://github.com/yogant18/CareerReach-AI-",
    },
    featured: true,
  },
  {
    id: "automated-resume-screening",
    title: "Automated Resume Screening System",
    category: "NLP",
    shortDescription:
      "NLP-driven candidate ranking and resume evaluation system providing automated match scoring and improvement feedback.",
    description:
      "Built an automated resume screening system that parses and ranks candidate resumes against job descriptions using NLP techniques. Evaluates candidate strengths, computes match scores, and provides structured feedback on areas of improvement.",
    image: "/images/projects/project2.jpg",
    techStack: ["NLP", "Machine Learning", "Python", "JavaScript", "Text Analytics"],
    links: {
      github: "https://github.com/yogant18/Automated-Resume-Screening-",
    },
    featured: false,
  },
  {
    id: "credit-card-dashboard",
    title: "Credit Card Financial Dashboard Using Power BI",
    category: "Power BI",
    shortDescription:
      "Interactive Power BI financial intelligence dashboard connecting to SQL for weekly transaction and customer spending insights.",
    description:
      "Designed a dynamic Power BI financial analytics dashboard connected to an SQL database. Tracks weekly customer spending patterns, credit limits, delinquency rates, and transaction trends to provide actionable business intelligence for financial decision-making.",
    image: "/images/projects/project4.jpg",
    techStack: ["Power BI", "Data Analytics", "SQL", "DAX", "Business Intelligence"],
    links: {
      github: "https://github.com/yogant18/Credit-Card-Financial-Dashboard-Using-Power-Bi---Business-Intelligence-Data-",
    },
    featured: false,
  },
  {
    id: "madhav-store-powerbi",
    title: "Madhav Store E-Commerce Data Analysis",
    category: "Power BI",
    shortDescription:
      "Interactive Power BI dashboard tracking online e-commerce sales, profit margins, and regional customer trends across India.",
    description:
      "Created an interactive Power BI sales dashboard for an Indian e-commerce business. Analyzed multi-state customer orders, category-wise profit margins, payment mode distributions, and customer acquisition metrics to drive revenue optimization.",
    image: "/images/projects/project3.jpg",
    techStack: ["Power BI", "Data Analytics", "Data Visualization", "Dashboard Development"],
    links: {
      github: "https://github.com/yogant18/Madhav-Store-E-Commerce-Data-Analysis-with-PowerBi-Project",
    },
    featured: false,
  },
  {
    id: "zero-shot-classification",
    title: "Zero-Shot Learning With Image Classification",
    category: "Computer Vision",
    shortDescription:
      "Computer vision pipeline implementing zero-shot image classification on unseen visual classes without dedicated training samples.",
    description:
      "Implemented a Zero-Shot Learning pipeline for computer vision tasks using PyTorch. Leveraged semantic attribute representations and visual feature embeddings to accurately classify unseen object categories without direct fine-tuning.",
    image: "/images/projects/project1.jpg",
    techStack: ["Computer Vision", "Machine Learning", "Python", "PyTorch", "Deep Learning"],
    links: {
      github: "https://github.com/yogant18/Zero-Shot-Learning-With-Image-Classification",
    },
    featured: false,
  },
  {
    id: "student-mental-health-bot",
    title: "Student AI Mental Health Companion Chatbot",
    category: "AI",
    shortDescription:
      "Empathetic conversational AI assistant designed to support student mental well-being powered by Google Gemini and Streamlit.",
    description:
      "Developed a Streamlit-powered conversational AI companion using Google Gemini API. Provides supportive, empathetic dialogue, guided stress-relief exercises, and mental health resource recommendations for university students.",
    image: "/images/projects/project2.jpg",
    techStack: ["AI", "NLP", "Python", "Google Gemini", "Streamlit", "Conversational AI"],
    links: {
      github: "https://github.com/yogant18/Student-AI-Mental-Health-Companion-Chatbot",
    },
    featured: false,
  },
  {
    id: "vois-netflix-analysis",
    title: "VOIS AICTE Major Project: Netflix Content Trends Analysis",
    category: "Data Science",
    shortDescription:
      "Comprehensive exploratory data analysis of Netflix content (2008–2021) uncovering strategic trends in genres, ratings, and international expansion.",
    description:
      "Conducted in-depth Exploratory Data Analysis (EDA) on Netflix's global catalog (2008–2021). Utilized Python, Pandas, and Seaborn to analyze content distribution across countries, runtime shifts, genre evolution, and strategic shifts toward original programming.",
    image: "/images/projects/project4.jpg",
    techStack: ["Data Science", "Data Analytics", "Python", "Pandas", "Seaborn", "EDA"],
    links: {
      github: "https://github.com/yogant18/VOIS_AICTE_MajorProject_YogantPatil",
    },
    featured: false,
  },
  {
    id: "vois-airbnb-analysis",
    title: "VOIS AICTE Project: Airbnb Booking Data Analysis",
    category: "Data Analytics",
    shortDescription:
      "Exploratory data analysis of Airbnb listings and customer booking behavior identifying pricing factors and host performance drivers.",
    description:
      "Performed detailed statistical and exploratory analysis on Airbnb rental datasets using Python, Pandas, and Matplotlib. Uncovered key drivers of listing price variations, neighborhood occupancy patterns, review score correlations, and host performance metrics.",
    image: "/images/projects/project3.jpg",
    techStack: ["Data Analytics", "Data Science", "Python", "Pandas", "Matplotlib", "Statistical Analysis"],
    links: {
      github: "https://github.com/yogant18/VOIS_AICTE_Oct2025_YogantPatil",
    },
    featured: false,
  },
  {
    id: "diwali-sales-analysis",
    title: "Python for Diwali Sales Analysis",
    category: "Data Analytics",
    shortDescription:
      "Retail analytics project evaluating customer demographics, purchasing patterns, and product category revenues during Diwali.",
    description:
      "Analyzed customer demographic and purchasing data from festive Diwali sales. Leveraged Pandas and Seaborn for data cleaning, aggregation, and visual storytelling to identify high-spending customer cohorts, top-selling product categories, and regional revenue distribution.",
    image: "/images/projects/project1.jpg",
    techStack: ["Data Analytics", "Python", "Pandas", "Seaborn", "EDA", "Data Cleaning"],
    links: {
      github: "https://github.com/yogant18/Python-for-Diwali-Sales-Analysis",
    },
    featured: false,
  },
  {
    id: "flytbase-outbound",
    title: "Outbound Account Intelligence — Latin America Mining Campaign",
    category: "Data Analytics",
    shortDescription:
      "🏆 Hackathon Project: Outbound account intelligence platform analyzing enterprise mining prospects in Latin America with interactive dashboard.",
    description:
      "Developed as a competitive Hackathon Project for FlytBase: Created an outbound account intelligence and campaign platform targeting enterprise mining operations across Latin America. Analyzed regional mining sector data, structured account intelligence workflows, and deployed an interactive web application with live demonstrations.",
    image: "/images/projects/project2.jpg",
    techStack: ["Hackathon", "Data Analytics", "JavaScript", "HTML/CSS", "API Integration", "Web Systems"],
    links: {
      github: "https://github.com/yogant18/flytbase-outbound",
      demo: "https://yogant18.github.io/flytbase-outbound/",
    },
    featured: true,
  },
];
