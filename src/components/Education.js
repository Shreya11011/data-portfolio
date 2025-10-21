import React from 'react';
import { ExternalLink } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      university: "Purdue University",
      duration: "August 2023 - May 2025",
      gpa: "3.7",
      logo: "/purdue.png",
      coursework: ['Machine Learning Systems', 'Data Analytics', 'Software Engineering', 'Operating Systems'],
      certificateLink: "https://drive.google.com/file/d/1ykl7IL6Ha62MABe3oDMvg1FFZ45_nbkZ/view?usp=sharing"
    },
    {
      degree: "Bachelor of Engineering in Information Science",
      university: "Bangalore Institute of Technology",
      duration: "August 2017 - July 2021",
      gpa: "3.7",
      logo: "/bit.png",
      coursework: ['Data Structures & Algorithms', 'Database Management', 'Computer Networks', 'Object-Oriented Programming', 'AI'],
      certificateLink: "https://drive.google.com/file/d/1gdu6jqx6TNrDtA7hxaDhYmV3pKMhWU4T/view?usp=sharing" 
    }
  ];

  const sectionStyle = {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  };

  const containerStyle = {
    display: 'grid',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  };

  const educationCardStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(37, 99, 235, 0.1)',
    transition: 'all 0.3s ease'
  };

  const educationHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2rem',
    marginBottom: '2rem'
  };

  const logoStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '0.5rem',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    border: '2px solid rgba(37, 99, 235, 0.1)',
    flexShrink: 0
  };

  const educationInfoStyle = {
    flexGrow: 1
  };

  const headerRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  };

  const degreeTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1e3a8a',
    margin: '0 0 0.5rem 0'
  };

  const universityContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const universityNameStyle = {
    fontSize: '1.2rem',
    color: '#2563eb',
    fontWeight: '600',
    margin: '0'
  };

  const linkButtonStyle = {
    background: 'rgba(37, 99, 235, 0.1)',
    border: '1px solid rgba(37, 99, 235, 0.2)',
    borderRadius: '6px',
    padding: '0.3rem 0.6rem',
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '0.8rem',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  };

  const educationDetailsStyle = {
    textAlign: 'right'
  };

  const durationStyle = {
    color: '#64748b',
    margin: '0 0 0.5rem 0'
  };

  const gpaStyle = {
    color: '#16a34a',
    fontWeight: 'bold',
    margin: '0'
  };

  const courseworkSectionStyle = {
    marginTop: '1.5rem'
  };

  const courseworkTitleStyle = {
    color: '#374151',
    fontWeight: '600',
    marginBottom: '0.5rem'
  };

  const courseworkTagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  };

  const courseTagStyle = {
    background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '16px',
    fontSize: '0.85rem',
    fontWeight: '500'
  };

  return (
    <section id="education" style={sectionStyle}>
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Education
        </h2>
        
        <div style={containerStyle}>
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              style={educationCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={educationHeaderStyle}>
                <img 
                  src={edu.logo} 
                  alt={`${edu.university} logo`} 
                  style={logoStyle}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                <div style={educationInfoStyle}>
                  <div style={headerRowStyle}>
                    <div>
                      <h3 style={degreeTitleStyle}>
                        {edu.degree}
                      </h3>
                      <div style={universityContainerStyle}>
                        <p style={universityNameStyle}>
                          {edu.university}
                        </p>
                        <a 
                          href={edu.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={linkButtonStyle}
                          title="View Certificate"
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
                          Degree
                        </a>
                      </div>
                    </div>
                    
                    <div style={educationDetailsStyle}>
                      <p style={durationStyle}>{edu.duration}</p>
                      <p style={gpaStyle}>GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <div style={courseworkSectionStyle}>
                    <h4 style={courseworkTitleStyle}>Relevant Coursework:</h4>
                    <div style={courseworkTagsStyle}>
                      {edu.coursework.map((course) => (
                        <span key={course} style={courseTagStyle}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;