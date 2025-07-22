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
      title: "Software Engineering Fellow",
      company_name: "HeadstarterAI",
      icon: headstarter,
      iconBg: "#383E56",
      date: "June 2025 - Present",
      points: [
        "Building 14+ machine learning, ai-engineering and full-stack projects in fast-paced software team environments ",
        "Developing 5+ neural networks in Python, 11 apps in Typescript on AWS/Vercel with dev and production environments",
        "Implemented llm-chaning, hyperparameter tuning, fine tuning on 10+ LLM models controlling for latency & accuracy",
        "Coached by Google Machine Learning, Google Kubernetes, Two Sigma, Tesla, Figma and Citadel Engineers",
        "Aiming at implementing 321+ commits on github with 7-day deadlines getting a Career Capital increase of 60% from start date",
      ],
    },
    {
      title: "Machine Learning Engineer Research Fellow",
      company_name: "University of Florida",
      icon: UF,
      iconBg: "#383E56",
      date: "February 2025 - Present",
      points: [
        "Design and curate curriculums for children focused on applied AI explainability.",
        "Develop and implement AI learning initiatives for kindergarten to 12th-grade students on edge devices.",
        "Train AI models and deploy them using Edge Impulse and IoT devices.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "United Heatlh Group",
      icon: UHG,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Aug 2024",
      points: [
        "Spearheaded development of multi-modal RAG agents for real-time interaction with enterprise data and live knowledge article uploads. This increased efficiency of every stakeholder by almost 40%.",
        "Developed POCs for OCR and NLP models to address business challenges like real time claim receipt validation and accurate information extraction to improve operational efficiency. This reduced the time and cost taken to adjudicate claims automatically by about 20%.",
        "Built Power BI dashboards for real-time visualization of business performance and KPI tracking.",
        "Reporting and Analytics: Spearheaded the development of approximately 1.5K reports biweekly through scheduler automation, covering key financial metrics for business continuity using MS BI (SSRS, SSIS, Power BI). Enhanced and maintained the Reporting UI interface on Angular and .NET for ad-hoc reporting.",
        "ETL: Developed end-to-end ETL flow maps on IBM WTX to process over 10 million claims monthly. Deployed workflows on UNIX AIX Servers using shell scripts and utilized IBM messaging queues for rapid data transmission.",
        "Achievements: Received 5 Bravo! awards in 2.5 years for performance recognition.",
      ],
    },
    {
      title: "Machine Learning Engineer Intern",
      company_name: "MFIT Technologies",
      icon: mfit,
      iconBg: "#383E56",
      date: "July 2020 - Nov 2020",
      points: [
        "Worked on Data Extraction from Bank statements and other documents to automate the financial monitoring of accounts and Transactions using Natural Language Processing.",
        "Created and annotated data by performing OCR, applying NER and POS tagging. Trained sequential machine learning model using CRF(Conditional Randon Fields).",      ],
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
        "His commitment to develop and deliver are top-notch. He is a great asset to any team.",
      name: "Nikhil Jain",
      designation: "Director - Software Engineering",
      company: "United Health Group - Optum",
    },

    {
      testimonial:
        "I have worked with Anany for about three years and found him to be a quite dependable resource. Apart from his excellent technical and communication skills, Anany also has a keen eye for nuances that make him excel in complex organizational environmental / team dynamics. Excellent team player and is a real asset to any company that he works for. ",
      name: "Rajat Kaushik",
      designation: "Software Engineering Manager",
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