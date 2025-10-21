import React from 'react';
import { Home, User, Briefcase, FolderOpen, Code2, GraduationCap, Mail } from 'lucide-react';

const VerticalNav = () => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About Me' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'techstack', icon: Code2, label: 'Tech Stack' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navStyle = {
    position: 'fixed',
    top: '50%',
    right: '2rem',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '1rem 0.5rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.8)'
  };

  const navButtonsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  };

  const navButtonStyle = {
    width: '48px',
    height: '48px',
    background: 'transparent',
    border: '1px solid rgba(37, 99, 235, 0.2)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#2563eb',
    position: 'relative'
  };

  const tooltipStyle = {
    position: 'absolute',
    right: '60px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#1e3a8a',
    color: 'white',
    padding: '0.5rem 0.75rem',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    pointerEvents: 'none'
  };

  const tooltipArrowStyle = {
    position: 'absolute',
    left: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderLeft: '6px solid #1e3a8a',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent'
  };

  return (
    <nav style={navStyle}>
      <div style={navButtonsStyle}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={navButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateX(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.3)';
              const tooltip = e.currentTarget.querySelector('.tooltip');
              if (tooltip) {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#2563eb';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
              const tooltip = e.currentTarget.querySelector('.tooltip');
              if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
              }
            }}
          >
            <item.icon size={20} />
            <div className="tooltip" style={tooltipStyle}>
              {item.label}
              <div style={tooltipArrowStyle}></div>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default VerticalNav;