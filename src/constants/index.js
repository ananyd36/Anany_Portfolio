import {
    mfit,
    mobile,
    creator,
    pytorch,
    web,
    crewai,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    Python,
    UF,
    docker,
    UHG,
    auriga,
    Openai,
    SmireAI,
    Coras,
    scradit,
    Redactor,
    IRA,
    patent,
    emogen,
    headstarter,
    aven,
    tradeMCP,
    infocepts,
    Oelrich,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "AI Engineer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: creator ,
    },
    {
      title: "AI Agent Developer",
      icon: creator ,
    },
  ];
  
  const technologies = [
    {
      name: "Generative AI",
      icon: Openai,
    },
    {
      name: "Artificial Intelligence",
      icon: crewai,
    },
    {
      name: "Pytorch",
      icon: pytorch,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },

    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Github",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "AI Research Fellow",
      company_name: "University of Florida",
      icon: UF,
      iconBg: "#383E56",
      date: "February 2025 - Present",
      points: [
        "Engineered an SLM on Jetson Orin, with a model footprint of 96MBs, exported using ONNX runtime and TensorRT",
        "Optimized training/inference by KV Cache, mixed precision training, flash attention achieving 70T/s with 2.44ms TTFT",
        "Engineered a volatility-aware TCN + attention model to hyper-locally forecast PM2.5 air quality across 5+ years of data",
        "Built an Edge ML pipeline on ESP32-S3 via a compressed DL model(Pytorch to C byte array) with a Huber loss of 0.26."
      ],
    },
    {
      title: "AI Engineer Intern",
      company_name: "Oelrich Construction",
      icon: Oelrich,
      iconBg: "#E6DEDD",
      date: "Aug 2025 - April 2026",
      points: [
        "Built a RAG system on Azure, with hybrid search (semantic+BM25), reranking, query expansion for retrieval accuracy",
        "Created ingestion pipelines to sync Azure VM (F: Drive) data into embedded vectorized records into Azure PostgreSQL",
        "Designed an LLM evaluation framework using DeepEval, integrating unit tests, LLM-as-a-Judge scoring, and A/B testing",
        "Achieved .74 Recall@Top10, .78 NDCG@Top10 with an F1 Score of .82 across all failure mode in DeepEval evaluation"
      ],
    },
    {
      title: "Software Engineer - Data & AI",
      company_name: "United Health Group",
      icon: UHG,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Aug 2024",
      points: [
        "Engineered a RAG system with Azure Blob Storage as knowledge base and Azure AI Search for indexing and retrieval",
        "Improved retrieval Recall@10 by 12% via semantic chunking for logical data partitioning, query rewriting and re-ranking",
        "Designed Power BI business KPI dashboards using Oracle SQL in DirectQuery with push-based data refresh",
        "Automated 1.5K+ biweekly financial reports using SSIS/SSRS with data validation and reconciliation workflows",
        "Architected end to end ETL pipelines using IBM WTX, Oracle SQL to process 10M+ monthly claims on UNIX AIX servers"
      ],
    },
        {
      title: "Data Engineer",
      company_name: "Infocepts",
      icon: infocepts,
      iconBg: "#383E56",
      date: "March 2021 - Jan 2022",
      points: [
        "Optimized PySpark ETL using partition pruning and columnar formats, processing 5TB+ data with 20% faster runtime.",
        "Built custom Lambda functions with S3 triggers to ingest and preprocess data from 20+ client sources into EMR",
        "Designed 5+ Airflow DAGs for incremental data loads, cutting ingestion latency by 40% and 99% SLA adherence",
      ],
    },
    {
      title: "Machine Learning Engineer Intern",
      company_name: "MFIT Technologies",
      icon: mfit,
      iconBg: "#383E56",
      date: "July 2020 - Nov 2020",
      points: [
        "Developed an OCR/NLP enabled financial data system with 85% field-extraction accuracy for transaction monitoring ",
        "Engineered document extraction system supporting 10+ formats using hybrid NER and layout-aware frameworks",
        "Built dynamic Conditional Random Field  plus Spatial model to parse financial statements across 4 major banks",
      ],
    },
    {
      title: "Python Developer Intern",
      company_name: "Auriga IT Consulting Pvt. Ltd.",
      icon: auriga,
      iconBg: "#E6DEDD",
      date: "Dec 2018 - Jan 2019",
      points: [
          "Trained on learning key aspects of Python Programming Language",
          "Trained on Backend Frameworks like Django/Flask/FastAPI",
          "Developed and Deployed an end to end web application for E-Commerce Client."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Anany is fantastic. He is an exceptionally hard worker and a very bright individual. I had the pleasure of working with him over the course of a year, and I strongly recommend him to any future employers.",
      name: "Ashely Oelrich Barnes",
      designation: "Leadership",
      company: "Oelrich Construction",
    },
    {
      testimonial:
        "His commitment to develop and deliver are top-notch. He is a great asset to any team.",
      name: "Nikhil Jain",
      designation: "Director - Software Engineering",
      company: "United Health Group - Optum",
    },

    {
      testimonial:
        "I have worked with Anany for about three years and found him to be a quite dependable resource. Apart from his excellent technical and communication skills, Anany also has a keen eye for nuances that make him excel in complex organizational environmental / team dynamics. Excellent team player and is a real asset to any company that he works for. ",
      name: "Rajat Kaushik",
      designation: "Principal Software Engineer",
      company: "United Health Group - Optum",
    },
  ];
  
  const projects = [
    {
      name: "Aven Insights",
      description:
        "Developed an AI customer support app for Aven with chat and voice functionality using Next.js, Gemini API, and RAG over a chunked knowledge base. Integrated a VAPI-powered voice agent and calendar scheduling. Solved challenges like inconsistent data, voice integration, and fallback handling for missing context.",
      tags: [
        {
          name: "Aven Insights",
          color: "blue-text-gradient",
        },
        {
          name: "AI Agent",
          color: "green-text-gradient",
        },
        {
           name: "Next.js",
           color: "green-text-gradient",
       },
       {
        name: "RAG",
        color: "green-text-gradient",
      },
      {
       name: "VAPI",
        color: "green-text-gradient",
      },
      ],
      image: aven,
      source_code_link: "https://github.com/ananyd36/aven_insights_ai",
    },
    {
      name: "Custom Trading MCP Server",
      description:
        "Built an AI trading agent using a custom MCP (Model Context Protocol) server with Next.js, integrated with Zerodha’s Kite API. The system enables natural language-based trading, portfolio management, and real-time market analysis through tools like GitHub Copilot, minimizing manual effort and emotional decision-making.",
      tags: [
        {
          name: "Trade_MCP",
          color: "blue-text-gradient",
        },
        {
          name: "AI Agent",
          color: "green-text-gradient",
        },
        {
           name: "Next.js",
           color: "green-text-gradient",
       },
       {
        name: "MCP Server",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      ],
      image: tradeMCP,
      source_code_link: "https://github.com/ananyd36/trade-mcp",
    },
    {
      name: "CROWDSAFE - PATENT",
      description:
        "Developed a YOLOv5-based multimodal PPE and mask detection system with high-risk crowd detection, leveraging Python, Flask, OpenCV, Darknet, and Docker scalability. Delivered real-time alerts and optimized performance using transfer learning and mAP evaluation.",
      tags: [
        {
          name: "CROWDSAFE",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        },
        {
           name: "Flask",
           color: "green-text-gradient",
       },
       {
        name: "Docker",
        color: "green-text-gradient",
      },
      ],
      image: patent,
      source_code_link: "https://drive.google.com/drive/folders/1sS_KjACTDM9SKFZyf6LJItVUhxTW_sr6?usp=sharing",
    },
    {
      name: "EMOGEN",
      description:
        "Fine-tuned OpenAI’s Whisper model for multilingual speech translation and transcription. Developed a CLIP-conditioned, fine-tuned Stable Diffusion model for generating contextually relevant images. Integrated HumeAI’s Emotion Detection API to infuse emotional context from speech into the image generation process.",
      tags: [
        {
          name: "EMOGEN",
          color: "blue-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "green-text-gradient",
        },
        {
           name: "Generative AI",
           color: "green-text-gradient",
       },
       {
        name: "Jupyter Notebook",
        color: "green-text-gradient",
      },
      ],
      image: emogen,
      source_code_link: "https://github.com/UF-EGN6217-Spring25/project-3-ananyd36",
    },
    {
      name: "SMIRE",
      description:
        "SMIRE AI is an AI-powered medical assistant that provides users with health-related functionalities such as appointment booking, clinic/doctor search, medical news updates, Consulatation services, and managing their medicine/reports/dosages. The system will leverage AI/ML models for intelligent responses and automation. Users will be able to log their dosage and track their progress. They will also be able to upload their reports and extract insights in real time.",
      tags: [
        {
          name: "SMIRE",
          color: "blue-text-gradient",
        },
        {
          name: "LLMs",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: SmireAI,
      source_code_link: "https://github.com/ananyd36/SMIRE",
    },
    {
      name: "CORAS",
      description:
        "The Context-Based Intelligent Knowledge Retrieval System (CORAS) represents a sophisticated technological solution designed to address the complex challenges of extracting meaningful information from vast, unstructured document repositories. By leveraging advanced Retrieval-Augmented Generation (RAG) architecture, CORAS provides an innovative approach to intelligent knowledge retrieval across diverse document types like audio/video/text.",
      tags: [
        {
          name: "CORAS",
          color: "blue-text-gradient",
        },
        {
          name: "LLMs",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: Coras,
      source_code_link: "https://github.com/ananyd36/CORAS",
    },
    
    {
      name: "RESILITREE",
      description:
        "RESILITREE is a disaster preparedness app that predicts treefall risk using image-based analysis and species-specific insights. It suggests preventive measures to stabilize trees and protect homes. The app also features an interactive Hurricane Relief Chatbot that provides real-time, context-aware guidance before, during, and after disasters, helping users stay safe and prepared.",
      tags: [
        {
          name: "RESILITREE",
          color: "blue-text-gradient",
        },
        {
          name: "Watson AI",
          color: "green-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },

        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: Redactor,
      source_code_link: "https://github.com/ananyd36/ResiliTree",
    },
    {
      name: "KISSAN",
      description:
        "KISSAN is a farmer-assistance platform that recommends optimal crops based on demographics and climate data. We built a recommendation engine using annotated crop data and integrated a chatbot for user interaction. Successfully presented at the Smart India Hackathon, showcasing teamwork and technical expertise. Tech Stack: Python, Keras, Flask, K-Means Clustering.",
      tags: [
        {
          name: "KISSAN",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
           name: "Pandas",
           color: "green-text-gradient",
       },
       {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      ],
      image: IRA,
      source_code_link: "https://github.com/ananyd36/sih-20",
    },
    {
      name: "SCRADIT",
      description:
        "Scradit, a platform to sell scrap in bulk and get online orders from nearby locations in real-time while maintaining full visibility of the market prices. Scradit is a full scrap management app solution covering the entire buying/selling pipeline, with an admin panel for step validation. Utilized Flutter, Dart, and Azure Cloud technologies.",
      tags: [
        {
          name: "SCRADIT",
          color: "blue-text-gradient",
        },
        {
          name: "Flutter",
          color: "green-text-gradient",
        },
        {
          name: "Azure",
          color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
    },

      ],
      image: scradit,
      source_code_link: "https://scradit.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };