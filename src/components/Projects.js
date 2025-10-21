import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Instagram ML Pipeline with Automated Deployment",
      technologies: ["Apache Airflow", "Spark", "Python", "TensorFlow", "Kubernetes", "Docker"],
      description: "Built end-to-end ML pipeline with 99.5% uptime for real-time sentiment analysis and trend detection. Designed scalable ETL workflows with data governance policies and comprehensive monitoring. Implemented auto-scaling infrastructure with Kubernetes, model deployment pipelines, and data processing systems handling millions of records daily with automated debugging and data quality validation.",
      category: "Data Engineering & ML Infrastructure",
      github: "https://github.com/shreyaw333/ml-pipeline-for-sma/",
      demo: "https://ml-pipeline-for-sma.vercel.app/",
      image: "/instagram.jpeg"
    },
    {
      title: "Reddit Real-Time Data Pipeline & Analytics Platform",
      technologies: ["Apache Airflow", "AWS", "Spark", "Python", "SQL", "PostgreSQL"],
      description: "Built production-grade data pipeline automating data extraction and transformation for real-time trend detection. Designed comprehensive ETL workflows with data modeling, SQL optimization, and distributed data processing. Implemented data warehouse architecture with automated monitoring, data governance policies, and interactive visualization dashboards for large-scale analytics workloads.",
      category: "Data Engineering & ETL Pipelines",
      github: "https://github.com/shreyaw333/Reddit_Data_Analysis/",
      demo: "https://reddit-data-analysis.vercel.app/",
      image: "/reddit.png"
    },
    {
      title: "Pinterest ML Recommendation Engine with Data Integration",
      technologies: ["Python", "PostgreSQL", "AWS SageMaker", "Apache Kafka", "SQL"],
      description: "Architected scalable recommendation system using collaborative filtering with real-time data pipelines. Built data integration workflows processing structured and unstructured data sources. Implemented distributed database design, SQL optimization, and real-time streaming with Apache Kafka. Achieved 50% improvement in latency through optimized ETL patterns and data modeling, processing millions of records daily.",
      category: "Data Integration & ML Systems",
      github: "https://github.com/shreyaw333/pinterest-analytics/",
      demo: "https://pinterest-analytics.vercel.app/",
      image: "/pinterest.png"
    },
    {
      title: "ML-Powered Ad Targeting & Revenue Optimization",
      technologies: ["Python", "Apache Kafka", "Spark", "SQL", "TensorFlow"],
      description: "Built data pipeline combining real-time feature engineering with large-scale data processing for ML-powered ad optimization. Designed ETL workflows for structured and unstructured data sources with comprehensive data governance. Implemented model evaluation pipelines and feature engineering frameworks, improving CTR by 35% and revenue by 28% through optimized data architecture and ML infrastructure.",
      category: "Data Pipelines & ML Infrastructure",
      github: "https://github.com/shreyaw333/ad-targeting-revenue-optimization/",
      demo: "https://ad-targeting-revenue-optimization.vercel.app/",
      image: "/target.png"
    },
    {
      title: "LLM-Powered Financial Insights Bot",
      technologies: ["Python", "OpenAI GPT API", "FastAPI", "PostgreSQL", "Redis", "React"],
      description: "Built AI-powered financial analysis assistant integrating GPT-4 with market data APIs and financial databases. Implemented ETL workflows for real-time data processing and context-aware insights generation. Designed scalable data architecture with automated report generation, reducing analyst research time by 50% and improving decision-making accuracy through optimized data pipelines and ML infrastructure.",
      category: "Data Engineering & ML Applications",
      github: "https://github.com/shreyaw333/llm-financial-insights-bot",
      demo: "https://llm-financial-insights-bot.vercel.app/",
      image: "/financial.png"
    }
  ];

  return (
    <section id="projects" className="section bg-blue-light">
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Projects
        </h2>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    flexShrink: 0
                  }}
                />
                
                <div style={{ flex: 1 }}>
                  <div className="project-header">
                    <span className="project-category">
                      {project.category}
                    </span>
                    
                    <div className="project-links">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        title="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        title="View Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;