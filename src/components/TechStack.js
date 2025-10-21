import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      category: "Data Engineering & Platforms",
      technologies: [
        { name: "Apache Airflow", icon: "/airflow.png" },
        { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
        { name: "PySpark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
        { name: "Snowflake", icon: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Symbol.png" },
        { name: "BigQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Databricks", icon: "/databricks.png" }
      ]
    },
    {
      category: "ML Infrastructure",
      technologies: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "scikit-learn", icon: "/scik.png" },
        { name: "SageMaker", icon: "/aws.png" },
        { name: "LangChain", icon: "/langchain.webp" },
        { name: "LangGraph", icon: "/lang.png" }
      ]
    },
    {
      category: "Programming & Development",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        { name: "AWS", icon: "/aws.png" },
        { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
      ]
    },
    {
      category: "Databases & Streaming",
      technologies: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" }
      ]
    },
    {
      category: "Analytics & Visualization",
      technologies: [
        { name: "Tableau", icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
        { name: "Power BI", icon: "/powerbi.png" },
        { name: "QuickSight", icon: "/aws.png" }
      ]
    }
  ];

  const sectionStyle = {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    minHeight: '100vh'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 1rem'
  };

  const rowStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const categoryHeaderStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#1e3a8a',
    padding: '1.5rem',
    verticalAlign: 'top',
    width: '25%',
    borderRight: '2px solid rgba(37, 99, 235, 0.1)',
    borderRadius: '12px 0 0 12px'
  };

  const contentCellStyle = {
    padding: '1.5rem',
    verticalAlign: 'middle',
    borderRadius: '0 12px 12px 0'
  };

  const skillsTextStyle = {
    color: '#475569',
    fontSize: '0.95rem',
    lineHeight: '1.6'
  };

  const techGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    alignItems: 'center'
  };

  const techItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(37, 99, 235, 0.05)',
    border: '1px solid rgba(37, 99, 235, 0.1)',
    borderRadius: '8px',
    padding: '0.5rem 0.75rem',
    transition: 'all 0.2s ease'
  };

  const techIconStyle = {
    width: '24px',
    height: '24px',
    objectFit: 'contain'
  };

  const techNameStyle = {
    fontWeight: '600',
    color: '#2563eb',
    fontSize: '0.9rem'
  };

  return (
    <section id="techstack" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 className="section-title left-aligned" style={{ marginBottom: '3rem' }}>
          My Tech Stack
        </h2>
        
        <table style={tableStyle}>
          <tbody>
            {techCategories.map((category, index) => (
              <tr 
                key={index} 
                style={rowStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <td style={categoryHeaderStyle}>
                  {category.category}
                </td>
                <td style={contentCellStyle}>
                  {category.skills ? (
                    <div style={skillsTextStyle}>
                      {category.skills}
                    </div>
                  ) : (
                    <div style={techGridStyle}>
                      {category.technologies.map((tech, techIndex) => (
                        <div 
                          key={techIndex} 
                          style={techItemStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(37, 99, 235, 0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            style={techIconStyle}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          <span style={techNameStyle}>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TechStack;