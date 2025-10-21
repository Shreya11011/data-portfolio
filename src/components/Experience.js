import React from 'react';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "COHAP Outreach Corporation",
      tag: "",
      role: "Lead Engineer",
      duration: "May 2025 - Present",
      location: "Tomball, TX",
      logo: "/cohap.jpg",
      points: [
          "Architected production-grade ML recommendation engine with 99.9% availability, processing 10,000+ daily user interactions using real-time feature engineering and collaborative filtering",
          "Designed and implemented scalable data pipelines using Python, Apache Airflow, and SQL for ETL workflows, improving data processing efficiency by 70%",
          "Built ML infrastructure components including model evaluation frameworks, A/B testing systems, and automated deployment pipelines with monitoring for quality and latency"
        ]
    },
    {
      company: "LTIMindtree",
      tag: "",
      role: "Senior Data Engineer",
      duration: "August 2021 – April 2023",
      location: "Client: ServiceNow",
      logo: "/lti.jpeg",
            points:  [
              "Executed enterprise data migration from SAP HANA to Snowflake, designing comprehensive ETL workflows and validation frameworks ensuring 100% data integrity across millions of ServiceNow records",
              "Built distributed ML pipelines using Apache Spark and Databricks for large-scale data processing, feature engineering, and model training, processing millions of records daily with 99.5% uptime",
              "Developed real-time recommendation systems using collaborative filtering, achieving 35% increase in user engagement and 94% production accuracy"
            ]
    },
    {
      company: "RunShaw Technologies",
      tag: "",
      role: "Software Developer Intern",
      duration: "March 2021 - April 2021",
      location: "MERN Stack, Financial Data Analytics",
      logo: "/runshaw.jpeg",
      points: [
        "Built real-time data processing pipelines for user behavior analytics, implementing Python-based ETL workflows for recommendation systems",
        "Developed scalable data models for interaction tracking, improving conversion rates by 25% through intelligent user matching and data-driven insights"
      ]

    }
  ];

  const sectionStyle = {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  };

  const experienceCardStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    padding: '2.5rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(37, 99, 235, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem'
  };

  const logoStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '0.5rem',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    border: '2px solid rgba(37, 99, 235, 0.1)'
  };

  const companyHeaderStyle = {
    textAlign: 'center',
    marginBottom: '1.5rem'
  };

  const companyNameContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '0.25rem'
  };

  const companyNameStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#1e3a8a',
    margin: '0'
  };

  const linkButtonStyle = {
    width: '28px',
    height: '28px',
    background: 'rgba(37, 99, 235, 0.1)',
    border: '1px solid rgba(37, 99, 235, 0.2)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2563eb',
    textDecoration: 'none',
    transition: 'all 0.2s ease'
  };

  const tagStyle = {
    color: '#2563eb',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  const roleStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#374151',
    margin: '0.5rem 0'
  };

  const durationStyle = {
    color: '#64748b',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  const dividerStyle = {
    width: '60px',
    height: '3px',
    background: '#2563eb',
    margin: '1.5rem auto',
    borderRadius: '2px'
  };

  const pointsContainerStyle = {
    flex: '1'
  };

  const pointStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#374151',
    marginBottom: '1rem',
    textAlign: 'left'
  };

  return (
    <section id="experience" style={sectionStyle}>
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Experience
        </h2>
        
        <div style={containerStyle}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              style={experienceCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={logoContainerStyle}>
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  style={logoStyle}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              <div style={companyHeaderStyle}>
                <div style={companyNameContainerStyle}>
                  <h3 style={companyNameStyle}>
                    {exp.company} <span style={tagStyle}>{exp.tag}</span>
                  </h3>
                  {exp.company === "LTIMindtree" && (
                    <a 
                      href="https://www.youtube.com/watch?v=FbZRROb-e4w"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkButtonStyle}
                      title="View Snowflake Case Study"
                      onMouseEnter={(e) => {
                        e.target.style.background = '#2563eb';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(37, 99, 235, 0.1)';
                        e.target.style.color = '#2563eb';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <h4 style={roleStyle}>{exp.role}</h4>
                <p style={durationStyle}>{exp.duration}</p>
              </div>
              
              <div style={dividerStyle}></div>
              
              <div style={pointsContainerStyle}>
                {exp.points.map((point, pointIndex) => (
                  <p key={pointIndex} style={pointStyle}>
                    • {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;