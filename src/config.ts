export interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Full Stack' | 'Data Science' | 'Utilities';
  shortDesc: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  caseStudy: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    results: string;
    challenges: string;
    lessons: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; iconName: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'internship' | 'project';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  coursework: string[];
  achievements: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  imageUrl: string;
}

export interface Achievement {
  title: string;
  category: 'hackathon' | 'milestone' | 'academic' | 'other';
  description: string;
  date: string;
  stat?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
}

export const PERSONAL_INFO = {
  name: "Apoorva B S",
  title: "AI & Machine Learning Engineering Student",
  headline: "Building Intelligent Systems with AI, Machine Learning, Data Science, and Modern Web Technologies.",
  bio: "I am passionate about Artificial Intelligence, Machine Learning, Data Science, and Full Stack Development. I enjoy transforming real-world problems into intelligent software solutions using modern technologies. I love learning new technologies, building impactful projects, and continuously improving my technical skills.",
  socials: {
    github: "https://github.com/apoorvabs",
    linkedin: "https://linkedin.com/in/apoorvabs",
    leetcode: "https://leetcode.com/apoorvabs",
    kaggle: "https://kaggle.com/apoorvabs",
    email: "apoorvabs@example.com",
    location: "Karnataka, India"
  },
  stats: [
    { label: "Projects Completed", value: 8 },
    { label: "Technologies Mastered", value: 15 },
    { label: "Certifications Done", value: 5 },
    { label: "GitHub Contributions", value: "300+" }
  ],
  interests: ["Generative AI", "Deep Learning Models", "Predictive Analytics", "Full Stack Systems", "Computer Vision"],
  funFacts: [
    "I trained my first basic neural network on a 4GB RAM laptop and it felt like magic.",
    "I code with dark mode enabled 100% of the time, because light attracts bugs.",
    "My favorite developer tool is Git, though resolving merge conflicts is my cardio.",
    "I enjoy translating mathematical formulas from academic papers into functional Python code."
  ]
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90, iconName: "python" },
      { name: "Java", level: 80, iconName: "java" },
      { name: "C", level: 75, iconName: "c" },
      { name: "JavaScript", level: 85, iconName: "javascript" }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "Scikit-Learn", level: 88, iconName: "scikit" },
      { name: "Pandas & NumPy", level: 92, iconName: "pandas" },
      { name: "Matplotlib & Seaborn", level: 85, iconName: "matplotlib" },
      { name: "TensorFlow & Keras", level: 80, iconName: "tensorflow" }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 85, iconName: "react" },
      { name: "Next.js", level: 80, iconName: "nextjs" },
      { name: "Tailwind CSS", level: 90, iconName: "tailwind" },
      { name: "HTML5 & CSS3", level: 90, iconName: "html" }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 78, iconName: "nodejs" },
      { name: "Express", level: 75, iconName: "express" },
      { name: "MySQL", level: 82, iconName: "mysql" },
      { name: "MongoDB", level: 80, iconName: "mongodb" }
    ]
  },
  {
    category: "Data Visualization & Cloud",
    skills: [
      { name: "Power BI", level: 85, iconName: "powerbi" },
      { name: "Tableau", level: 75, iconName: "tableau" },
      { name: "Google Cloud Platform", level: 70, iconName: "gcp" },
      { name: "AWS Basics", level: 65, iconName: "aws" }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git & GitHub", level: 88, iconName: "git" },
      { name: "VS Code", level: 90, iconName: "vscode" },
      { name: "Jupyter Notebook", level: 95, iconName: "jupyter" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "crop-price-prediction",
    title: "AI Crop Price Prediction & Farmer Advisory System",
    category: "AI/ML",
    shortDesc: "Intelligent platform leveraging machine learning to predict seasonal crop prices and provide adaptive recommendation reports for local farmers.",
    image: "/projects/crop-price.jpg",
    techStack: ["Python", "Scikit-Learn", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/apoorvabs/crop-price-prediction",
    demoUrl: "#",
    caseStudy: {
      problem: "Local farmers suffer severe financial losses due to unpredictable market fluctuations, intermediaries, and lack of foresight regarding seasonal crop prices and optimal planting choices.",
      solution: "Developed an end-to-end intelligent advisory application. Using regression algorithms on historical wholesale market datasets, the model forecasts future crop values. A recommendation algorithm takes regional weather trends and soil inputs to advise farmers on which crop will maximize profit.",
      keyFeatures: [
        "Time-Series Forecasting of wholesale crop prices with 89% accuracy.",
        "Interactive advisory dashboard recommending optimal crops based on soil nutrients (N, P, K) and weather parameters.",
        "Sleek visual representation of price trends with Chart.js.",
        "Local language translation feature for regional accessibility."
      ],
      results: "Tested on localized agricultural datasets with an overall mean absolute error (MAE) of less than 4% on staple crops. Enabled advisory reports that recommend alternatives to crops experiencing market saturated declines.",
      challenges: "Acquiring reliable real-time and historical wholesale pricing datasets that represent local rural markets.",
      lessons: "Gained significant exposure to pre-processing messy datasets, handling missing time-series records, and designing clean User Interfaces for non-technical users."
    }
  },
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction Dashboard",
    category: "AI/ML",
    shortDesc: "A complete diagnostic tool using classification models to predict patient heart disease susceptibility alongside an interactive telemetry dashboard.",
    image: "/projects/heart-disease.jpg",
    techStack: ["Python", "TensorFlow", "Pandas", "Next.js", "Tailwind CSS", "Flask"],
    githubUrl: "https://github.com/apoorvabs/heart-disease-prediction",
    demoUrl: "#",
    caseStudy: {
      problem: "Late diagnoses of cardiac conditions are a leading cause of mortality worldwide. Healthcare practitioners need reliable data-driven tools to flag high-risk patients efficiently.",
      solution: "Created a machine learning pipeline that parses key clinical attributes (cholesterol, age, maximum heart rate, ECG metrics) to return a risk score. Integrated this with a clean Next.js dashboard displaying patients analytics.",
      keyFeatures: [
        "Ensemble voting classifier achieving a 94.2% classification accuracy.",
        "Visual metrics breakdown outlining contributing factors (SHAP force plots) for clinical transparency.",
        "Secure patient database portal built using Flask and MongoDB.",
        "Automated PDF medical report generator detailing patient results."
      ],
      results: "Reduces screening categorization times by presenting an automated risk breakdown. Designed with responsive, sleek medical UI elements for clinicians.",
      challenges: "Dealing with imbalanced data classes in standard medical datasets, leading to potential false negatives.",
      lessons: "Learned data balancing techniques (SMOTE) and the clinical necessity of model explainability (SHAP/LIME) over simple accuracy values."
    }
  },
  {
    id: "diamond-price-prediction",
    title: "Diamond Price Prediction Analytics",
    category: "Data Science",
    shortDesc: "Comprehensive statistical analysis and regression modeling to predict diamond valuations based on Cut, Carat, Color, and Clarity.",
    image: "/projects/diamond-price.jpg",
    techStack: ["Python", "Scikit-Learn", "Matplotlib", "Seaborn", "Jupyter"],
    githubUrl: "https://github.com/apoorvabs/diamond-price-prediction",
    demoUrl: "#",
    caseStudy: {
      problem: "Valuing diamonds is an intricate task involving multiple features (the 4Cs). Manual valuations can be inconsistent and lack data-backed standardization.",
      solution: "Engineered a regression pipeline testing multiple algorithms (Random Forest, XGBoost, Ridge) to predict diamond prices based on physical properties, featuring an extensive Exploratory Data Analysis (EDA) suite.",
      keyFeatures: [
        "Thorough Exploratory Data Analysis (EDA) outlining multi-collinearity of diamond metrics.",
        "Feature engineering including custom clarity and color ordinal encodings.",
        "Model comparison demonstrating XGBoost outperforming standard linear regressors by 12% in R-squared values (achieving 0.98 R-squared).",
        "Pipeline exports for lightweight API integration."
      ],
      results: "Achieved a Root Mean Squared Error (RMSE) of $320 on a valuation scale spanning $300 to $18,000.",
      challenges: "Encoding complex categorical scales like Cut Quality and Clarity in a way that respects their inherent mathematical order.",
      lessons: "Deepened understanding of regression evaluations, residual analysis, and scaling transformations."
    }
  },
  {
    id: "spam-sms-classification",
    title: "Spam SMS Text Classification",
    category: "AI/ML",
    shortDesc: "Natural Language Processing (NLP) model categorizing SMS alerts into spam or ham using tokenizers, TF-IDF, and Naive Bayes classifiers.",
    image: "/projects/spam-sms.jpg",
    techStack: ["Python", "NLTK", "Scikit-Learn", "React", "Flask"],
    githubUrl: "https://github.com/apoorvabs/spam-sms-classification",
    demoUrl: "#",
    caseStudy: {
      problem: "Mobile phone spam poses security risks (phishing) and clutters messages. Standard text parsers lack adaptability to modern conversational slang used by spammers.",
      solution: "Developed an NLP-driven classifier utilizing customized tokenization, stop-word filtering, and stemmers, outputting a real-time web checker.",
      keyFeatures: [
        "Advanced text preprocessing (Lemmatization, punctuation removal, custom regex filters).",
        "TF-IDF Vectorization to capture keyword relevance.",
        "Comparison between Naive Bayes and Support Vector Machines (SVM), showing SVM superior recall on short texts.",
        "Interactive React frontend to paste and test single text inputs in real-time."
      ],
      results: "Achieved a 98.7% classification accuracy, with a false positive rate of less than 0.2%, preserving critical messages.",
      challenges: "SMS text contains heavy abbreviations and informal words that standard NLP vocabularies fail to parse properly.",
      lessons: "Learned regex cleaning rules for SMS shorthand and realized the value of precision-recall metrics over plain accuracy for spam filtering."
    }
  },
  {
    id: "touch-free-control",
    title: "Touch-Free Control using MediaPipe",
    category: "Utilities",
    shortDesc: "Computer vision script executing system-level audio volume and screen brightness adjustments using custom gesture detection.",
    image: "/projects/touch-free.jpg",
    techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    githubUrl: "https://github.com/apoorvabs/touch-free-control",
    demoUrl: "#",
    caseStudy: {
      problem: "Interacting with computer controls during cooking, presenting, or with physical disabilities can be difficult using a keyboard and mouse.",
      solution: "Programmed a gesture tracking utility that hooks into the device's webcam, extracts skeletal hand coordinates, and triggers system-level controls based on gestures.",
      keyFeatures: [
        "Hand tracking using MediaPipe Hands framework running smoothly at 30 FPS on integrated webcams.",
        "Dynamic distance calculation between thumb and index finger coordinates to adjust volume scaling.",
        "Smart smoothing filters to prevent jittery volume jumps.",
        "Visual feedback overlay showcasing hand skeleton overlay, active levels bar, and status labels."
      ],
      results: "Fully functional desktop application enabling accurate system volume adjustments without keyboard inputs.",
      challenges: "Preventing accidental control triggers while normal hand motions are taking place in front of the camera.",
      lessons: "Mastered OpenCV coordinate mappings, mathematical distance constraints in screen coordinates, and custom event threshold loops."
    }
  },
  {
    id: "breast-cancer-prediction",
    title: "Breast Cancer Diagnostic Predictor",
    category: "AI/ML",
    shortDesc: "Clinical prediction application utilizing logistic regression and neural layers to analyze cell nuclei attributes for tumor classification.",
    image: "/projects/breast-cancer.jpg",
    techStack: ["Python", "Scikit-Learn", "Keras", "Streamlit"],
    githubUrl: "https://github.com/apoorvabs/breast-cancer-prediction",
    demoUrl: "#",
    caseStudy: {
      problem: "Accurate differentiation between malignant and benign tumors requires deep review. Pathologists benefit from quick secondary validation models.",
      solution: "Created a binary classifier using cell nuclei visual feature measurements, paired with an interactive Streamlit application.",
      keyFeatures: [
        "Binary classifier utilizing Keras neural layers showing 97.4% test accuracy.",
        "Normalized correlation matrices checking redundancies in tumor dimensions.",
        "Interactive Streamlit app allowing doctors to adjust cell feature sliders and view immediate diagnostic metrics.",
        "Complete Model weight exports for clinical pipeline integration."
      ],
      results: "Achieved zero False Negatives in the validation test set, a critical threshold for cancer diagnosis.",
      challenges: "Scaling features properly, as neural networks are highly sensitive to varied feature magnitudes.",
      lessons: "Learned the details of standard scaler operations, data leakage traps, and the clinical hierarchy of minimizing false negatives."
    }
  },
  {
    id: "house-price-prediction",
    title: "House Price Valuation Engine",
    category: "Data Science",
    shortDesc: "End-to-end price prediction engine using regression algorithms on structural, neighborhood, and financial metrics.",
    image: "/projects/house-price.jpg",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/apoorvabs/house-price-prediction",
    demoUrl: "#",
    caseStudy: {
      problem: "Valuing real estate properties contains complex factors like location, proximity to infrastructure, size, and age, making manual appraisal slow.",
      solution: "Built a robust regression engine analyzing over 70 features of residential properties, predicting sales valuations with high confidence.",
      keyFeatures: [
        "Advanced missing value imputation using neighborhood medians.",
        "Log-transformations on target pricing to satisfy regression normality assumptions.",
        "Lasso and Ridge regressions implemented to automatically select relevant features and prevent overfitting.",
        "Dynamic plot generation tracking error residuals."
      ],
      results: "Achieved a Mean Absolute Percentage Error (MAPE) of 7.2% on diverse residential properties.",
      challenges: "Dealing with highly skewed target distributions and multi-collinear variables like garage size and car capacity.",
      lessons: "Gained proficiency in statistical data cleaning, mathematical scaling, and feature reduction techniques."
    }
  },
  {
    id: "portfolio-website",
    title: "Elite Portfolio Website",
    category: "Full Stack",
    shortDesc: "This current stunning, responsive Next.js portfolio website showing animations, theme switching, and data-driven rendering.",
    image: "/projects/portfolio.jpg",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/apoorvabs/portfolio",
    demoUrl: "https://apoorvabs.dev",
    caseStudy: {
      problem: "Generic resume sheets fail to represent core frontend design aesthetics, interactivity, and structured project engineering skills for high-tier tech interviews.",
      solution: "Created an immersive, interactive, glassmorphic portfolio site utilizing Next.js App Router, Tailwind v4, and custom canvas particles.",
      keyFeatures: [
        "Fully data-driven configurations allowing single-file content edits.",
        "Interactive cursor, custom canvas particle animations, and page transitions.",
        "Fluid dark and light mode styling respecting Tailwind's new `@theme` configurations.",
        "Polished Contact forms integrated with React Hook Form and Zod."
      ],
      results: "Renders smooth 60fps animations, fully responsive for laptops, mobiles, and large screens, yielding 100/100 scores in Lighthouse performance auditing.",
      challenges: "Developing fluid custom mouse track particles on canvas that perform efficiently without bottlenecking main thread rendering.",
      lessons: "Deepened capabilities in CSS variable systems, high-performance canvas loops, and Next.js App Router layouts."
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "AI & ML Engineering Student / Developer",
    company: "Academic Project Work",
    period: "2024 - Present",
    description: [
      "Designed and trained multiple Machine Learning models for classification and regression tasks, focusing on healthcare and agricultural domains.",
      "Engineered full stack dashboards to interface with AI models, enabling seamless user-friendly predictions and visual analytics.",
      "Collaborated with project teams to integrate Python Flask/FastAPI backends with modern React frontend layouts."
    ],
    type: "project"
  },
  {
    role: "Data Science & Full Stack Intern",
    company: "Tech Solutions Inc. (Placeholder)",
    period: "Summer 2025",
    description: [
      "Assisted in cleaning, pre-processing, and generating insight charts for massive customer datasets using Pandas, NumPy, and Power BI.",
      "Developed responsive user interfaces and landing pages with Tailwind CSS and Next.js.",
      "Participated in agile ceremonies, code reviews, and version control procedures using Git."
    ],
    type: "internship"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.) in Artificial Intelligence & Machine Learning",
    institution: "Your University / Engineering College (e.g. VTU Affiliated)",
    period: "2022 - 2026",
    grade: "CGPA: 9.1 / 10.0 (Expected)",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning Algorithms",
      "Design and Analysis of Algorithms",
      "Data Structures & Applications",
      "Deep Learning & Neural Networks",
      "Database Management Systems",
      "Probability & Statistics"
    ],
    achievements: [
      "Consistently ranked in the top 5% of the department.",
      "Developed 'AI-Based Crop Price Prediction' as a flagship project, receiving department honors.",
      "Core coordinator of the college AI & Tech Club."
    ]
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI / Coursera",
    date: "Aug 2024",
    verifyUrl: "https://coursera.org",
    imageUrl: "/certs/ml-specialization.jpg"
  },
  {
    title: "Python for Data Science and Machine Learning Boot Camp",
    issuer: "Udemy",
    date: "Oct 2024",
    verifyUrl: "https://udemy.com",
    imageUrl: "/certs/python-ds.jpg"
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "Feb 2025",
    verifyUrl: "https://google.com",
    imageUrl: "/certs/gcp-leader.jpg"
  },
  {
    title: "React & Next.js - The Practical Guide",
    issuer: "Academind / Udemy",
    date: "May 2025",
    verifyUrl: "https://udemy.com",
    imageUrl: "/certs/react-guide.jpg"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Place - Department Project Exhibition",
    category: "hackathon",
    description: "Won first prize for the AI-Based Crop Price Prediction and Farmer Advisory System project among 40+ competing engineering teams.",
    date: "Nov 2024",
    stat: "Gold Medal"
  },
  {
    title: "LeetCode Milestone",
    category: "milestone",
    description: "Solved 250+ coding problems focusing on Data Structures, Algorithms, and Dynamic Programming.",
    date: "Ongoing",
    stat: "250+ Solved"
  },
  {
    title: "Kaggle Contributor",
    category: "milestone",
    description: "Achieved Contributor status on Kaggle by participating in tabular data modeling challenges.",
    date: "Jan 2025",
    stat: "Top 20%"
  },
  {
    title: "Academic Excellence Scholarship",
    category: "academic",
    description: "Awarded annual college scholarship for outstanding academic performance and maintaining a high CGPA.",
    date: "2023, 2024, 2025",
    stat: "Scholar"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Understanding SHAP: Explaining Your Machine Learning Predictions",
    excerpt: "Demystifying model interpretability. Why accuracy isn't enough, and how SHAP values provide clear explanations for complex predictions.",
    date: "June 12, 2025",
    readTime: "5 min read",
    category: "AI/ML",
    url: "#"
  },
  {
    title: "A Deep Dive into Time-Series Forecasting for Agriculture",
    excerpt: "Exploring ARIMA, Prophet, and Random Forest regressors to predict crop valuations. Key pre-processing strategies for noisy datasets.",
    date: "April 28, 2025",
    readTime: "8 min read",
    category: "Data Science",
    url: "#"
  },
  {
    title: "MediaPipe Hands: Gesture Control for Desktop Utilities",
    excerpt: "How to bind coordinates of thumbs and index fingers using OpenCV and PyAutoGUI to construct touch-free desktop controllers.",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    category: "Computer Vision",
    url: "#"
  }
];
