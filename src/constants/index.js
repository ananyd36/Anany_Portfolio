import {
    mfit,
    mobile,
    backend,
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
    ISRO,
    Openai,
    CG,
    PP,
    ADS,
    SKK,
    MunchMates,
    FileTransfer,
    Redactor,
    IRA,
    UnRedactor,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Graduate Research Assistant",
      company_name: "University of Florida",
      icon: UF,
      iconBg: "#383E56",
      date: "February 2025 - Present",
      points: [
        "Design and Curate curriculums for childrens for AI explainability",
        "Design and Develop AI Learning intiatives for K-12",
        "Train AI models and deploy using edge impulse.",
        "Participating and showcasing research papers in AI conferences across US",
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
        "Create designs, concepts, and sample layouts based on knowledge of layout principles and esthetic design concepts.",
        "Impressed with my commitment and Ideas, the contract was extended to grade 3 for an additional 6 books.",
        "Emphasized Inclusive and Diverse Character Representation: One of my primary focuses in my work is ensuring that the content I create is representative and inclusive. By featuring diverse characters in the materials, I contribute to fostering a sense of belonging and understanding among the students.",
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
        "His commitment to code and design skills are top-notch. He is a great asset to any team.",
      name: "Nikhil Jain",
      designation: "Director - Software Engineering",
      company: "United Health Group - Optum",
    },

    {
      testimonial:
        "I have worked with Anany for two years and found him to be a quite dependable resource. Apart from his excellent technical and communication skills, Anany also has a keen eye for nuances that make him excel in complex organizational environmental / team dynamics. Excellent team player and is a real asset to any company that he works for. ",
      name: "Rajat Kaushik",
      designation: "Software Engineering Manager",
      company: "United Health Group - Optum",
    },
  ];
  
  const projects = [
    {
      name: "SMIRE",
      description:
        " an engaging and community-driven platform where users can discover, review, and recommend local dining spots, enhancing their culinary experiences through shared insights and recommendations.",
      tags: [
        {
          name: "CORAS",
          color: "blue-text-gradient",
        },
        {
          name: "Wireframes",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: MunchMates,
      source_code_link: "",
    },
    
    {
      name: "RESILITREE",
      description:
        "Developed a Python-based tool to automatically redact sensitive information from text documents, including names and customizable keywords removing sensitive information with 90%+ precision based on user-defined rule. Leveraged NLP (SpaCy) and regular expressions to accurately detect and replace confidential data, ensuring privacy compliance, increasing detection accuracy by 20% and reducing false positives by 35%. Built a full-stack web app using React.js, Node.js, and Express to allow users to upload, process, and visualize redacted documents in real time, including redaction statistics, word frequency insights, and interactive data visualizations.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: Redactor,
      source_code_link: "",
    },
    {
      name: "KISSAN",
      description:
        "This project is a web application that processes incident reports from PDFs, visualizes the data, and provides insights like clustering, bar graphs, pie charts, and statistics. The application is built using Flask and integrates with various Python libraries for data manipulation and visualization.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
           name: "Pandas",
           color: "pink-text-gradient",
       },
      ],
      image: IRA,
      source_code_link: "",
    },
    {
      name: "BIOGENE",
      description:
        "This project implements the Unredactor, a tool designed to predict redacted names from given contexts in text data. It uses machine learning techniques, including feature extraction and classification, to achieve this goal. The core pipeline involves preprocessing data, extracting features, training a model, and making predictions.",
      tags: [
        {
          name: "Model Training & Prediction",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
           name: "Pandas",
           color: "pink-text-gradient",
       },
      ],
      image: UnRedactor,
      source_code_link: "",
    },
    {
      name: "SCRADIT",
      description:
        "Developed a 3D graphics rendering application using OpenGL, emphasizing parallax and normal mapping for realistic textures and light interactions, with features for real-time object manipulation and in-depth exploration of advanced 3D graphics principles.",
      tags: [
        {
          name: "OpenGL",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: CG,
      //source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };