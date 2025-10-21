import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certificationContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const certificationCardStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(37, 99, 235, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    transition: 'all 0.3s ease'
  };

  const certificationImageStyle = {
    flexShrink: 0
  };

  const certImgStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '0.75rem',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    border: '2px solid rgba(37, 99, 235, 0.1)'
  };

  const certificationInfoStyle = {
    flexGrow: 1
  };

  const certificationHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '0.75rem'
  };

  const certificationTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1e3a8a',
    margin: '0 0 0.25rem 0'
  };

  const certificationDateStyle = {
    color: '#64748b',
    fontSize: '1rem',
    margin: '0'
  };

  const credlyLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(37, 99, 235, 0.1)',
    border: '1px solid rgba(37, 99, 235, 0.2)',
    borderRadius: '8px',
    padding: '0.4rem 0.8rem',
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  };

  const sectionStyle = {
    padding: '4rem 2rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <section style={sectionStyle}>
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Certifications
        </h2>
        
        <div style={certificationContainerStyle}>
          <div 
            style={certificationCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={certificationImageStyle}>
              <img 
                src="/certificate.png" 
                alt="AWS Cloud Practitioner Certificate" 
                style={certImgStyle}
              />
            </div>
            
            <div style={certificationInfoStyle}>
              <div style={certificationHeaderStyle}>
                <div>
                  <h3 style={certificationTitleStyle}>
                    AWS Certified Cloud Practitioner (CLF-C02)
                  </h3>
                  <p style={certificationDateStyle}>February 2025</p>
                </div>
                
                <a 
                  href="https://www.credly.com/badges/53ccbb2a-dd86-4637-a0e8-0874db9ee34c/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={credlyLinkStyle}
                  title="View on Credly"
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
                  <ExternalLink size={16} />
                  Verify on Credly
                </a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16a34a' }}>
                <Award size={18} />
                <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>Verified Digital Badge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;