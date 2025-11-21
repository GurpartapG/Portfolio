const projectsData = [
  {
    id: 1,
    title: "Mental Health in Tech — Analytics Dashboard",
    subtitle: "Full EDA + Statistical Analysis + Power BI Dashboard",
    description:
      "A global mental-health analysis project containing full data cleaning, feature engineering, univariate/bivariate/multivariate analysis, statistical testing, and a 4-page interactive Power BI dashboard exploring mental-health trends in the tech industry.",
    bullets: [
      "Cleaned 1,259 survey responses and engineered 20+ analytical features",
      "Statistical tests including Chi-Square, Cramer’s V, correlation analysis",
      "Built a 4-page Power BI dashboard with demographics, culture, benefits & awareness insights",
      "Created a custom RiskScore metric combining multiple behavioral and demographic signals"
    ],
    tech: [
      "Power BI",
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Seaborn"
    ],
    github: "https://github.com/GurpartapG/mental-health-tech-survey-dashboard",
    demo: "https://github.com/GurpartapG/mental-health-tech-survey-dashboard/blob/d08630bc68ebacaa955be7af656fa664be57bfc5/report.pdf"
  },
  {
    id: 2,
    title: "Flight Delay ETL Pipeline",
    subtitle: "Python ETL + SQLite + Data Engineering",
    description:
      "A modular ETL pipeline that extracts, transforms, and loads US flight delay data into a relational database for analysis. Designed with production-style logging, indexing, SQL queries, and reusable transformation logic.",
    bullets: [
      "Built modular ETL (extract → transform → load → orchestrate)",
      "Engineered features such as total delay, airline performance, and airport trends",
      "Created normalized SQLite schema with indexed tables for efficient querying",
      "Produced SQL insights including worst airports, best airlines, and monthly trends"
    ],
    tech: ["Python", "Pandas", "SQLite", "SQL", "Logging", "ETL Architecture"],
    github: "https://github.com/GurpartapG/flight-delay-etl",
    demo: ""
  },
  {
    id: 3,
    title: "Toronto Airbnb Price Prediction",
    subtitle: "ML Pipeline + XGBoost Regression",
    description:
      "A machine-learning pipeline predicting nightly Airbnb prices using 21K+ listings from InsideAirbnb. Includes EDA, cleaning, feature engineering, model comparison, and explainability.",
    bullets: [
      "Processed 80+ features including geographic, host, review, and availability metrics",
      "Engineered advanced features: host tenure, availability ratios, review recency",
      "Compared multiple ML models — XGBoost achieved R² = 0.77",
      "Identified top price drivers using feature importance analysis"
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Jupyter"],
    github: "https://github.com/GurpartapG/price-predictor-airbnb-toronto",
    demo: ""
  }
];

export default projectsData;
