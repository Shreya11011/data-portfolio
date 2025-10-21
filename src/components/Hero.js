import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const roles = [
    'Data Engineer',
    'ML Engineer',
    'Software Engineer',
    'Data Platform Engineer',
    'ML Infrastructure Engineer'
  ];
  const currentRole = useTypewriter(roles);

  return (
    <section id="home" className="hero-section" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="hero-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(1px)'
      }}></div>
      
      <div className="hero-content" style={{
        textAlign: 'center',
        color: '#1e3a8a',
        zIndex: 1,
        maxWidth: '800px',
        padding: '0 2rem'
      }}>
        <h2 className="hero-greeting" style={{
          fontSize: '1.5rem',
          fontWeight: '300',
          marginBottom: '1rem',
          opacity: '0.8',
          color: '#1e3a8a'
        }}>
          Hello! I am
        </h2>
        
        <h1 className="hero-name" style={{
          fontSize: '4.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Shreya
        </h1>
        
        <div className="hero-role" style={{
          fontSize: '2rem',
          fontWeight: '500',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1e3a8a'
        }}>
          <span>
            {currentRole}
            <span className="typewriter-cursor">|</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;