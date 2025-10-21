import React from 'react';

const AboutMe = () => (
  <section id="about" className="section bg-blue-light">
    <div className="section-content">
      <h2 className="section-title left-aligned">
        About Me
      </h2>
      
      <div className="about-container">
        <div className="about-photo">
          <img 
            src="/photo123.png" 
            alt="Shreya Watve" 
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover',
              margin: '0 auto 1rem',
              display: 'block',
              border: '4px solid #2563eb',
              boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              // Show the placeholder if image fails to load
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="profile-placeholder" style={{ display: 'none' }}>
            SW
          </div>
          <h3 className="profile-name">Shreya Watve</h3>
          <p className="profile-location">New York, NY</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a <span className="highlight">Data Engineer</span> with <span className="highlight">4+ years of experience</span> building
              <span className="highlight"> production-grade data and ML infrastructure at scale</span>—not just pipelines, but the systems that power intelligent experiences for millions of users. I specialize in
              <span className="highlight"> Apache Spark, Python, and distributed systems</span> that drive real-time insights and ML-powered automation.
            </p>

            <p>
              With my <span className="highlight">Master's in Computer Science from Purdue University </span>  
              I've built <span className="highlight"> scalable ETL workflows, real-time ML inference pipelines</span>, and designed
              <span className="highlight"> data governance frameworks</span> that process petabyte-scale data with 99.9% reliability across AWS and GCP.
            </p>

            <p>
              I don't just move data—I architect <span className="highlight">intelligent infrastructure that enables ML deployment, model evaluation</span>, and real-time analytics at scale. My expertise spans <span className="highlight">Apache Airflow, collaborative filtering, feature engineering</span>, and
              <span className="highlight"> distributed data processing using PySpark and Kafka</span>. I build the foundation that makes AI-powered products possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;