'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'KoinBX',
    role: 'Backend Engineer',
    period: 'May 2024 – Present',
    highlights: [
      'Led backend development across web, iOS, and Android platforms',
      'Designed microservice architecture serving 100K+ users',
      'Built matching engine and real-time trading infrastructure',
      'Improved latency from 150ms to 10ms',
      'Increased throughput from 400 to 6000 trades/minute',
      'Reduced database load by 95% and infrastructure cost by 60%',
      'Implemented Kafka-based event-driven architecture',
      'Built multi-chain blockchain integrations',
      'Developed fault-tolerant production systems',
      'Created RBAC-based admin backend with real-time alerting'
    ]
  },
  {
    company: 'CAW Studios',
    role: 'Software Development Engineer',
    period: 'June 2022 – April 2024',
    highlights: [
      'Developed scalable backend systems using NestJS',
      'Built modular enterprise-grade APIs',
      'Integrated Microsoft WOPI',
      'Built AI-powered chatbot systems',
      'Managed Azure CI/CD deployments'
    ]
  }
];

export default function Experience() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.experienceSection} id="experience">
      <div className="container" ref={ref}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 // Experience</span>
          <h2 className="text-gradient">Experience</h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerIcon}>
                  <Briefcase size={16} />
                </div>
                {index !== experiences.length - 1 && <div className={styles.markerLine}></div>}
              </div>

              <div className={styles.timelineContent}>
                <div className={`glass-card ${styles.card}`}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <h4 className={styles.company}>{exp.company}</h4>
                    </div>
                    <div className={styles.period}>{exp.period}</div>
                  </div>
                  
                  <ul className={styles.highlights}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li 
                        key={hIndex}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (hIndex * 0.1) }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
