'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Zap, Database, Activity, GitBranch, Layers } from 'lucide-react';
import styles from './About.module.css';

const domains = [
  { name: 'Cryptocurrency Exchanges', icon: <Activity size={24} /> },
  { name: 'Trading Engines', icon: <Zap size={24} /> },
  { name: 'Blockchain Infrastructure', icon: <Layers size={24} /> },
  { name: 'Distributed Systems', icon: <Server size={24} /> },
  { name: 'Event-Driven Architectures', icon: <GitBranch size={24} /> },
  { name: 'High-Concurrency Apps', icon: <Database size={24} /> },
];

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.aboutSection} id="about">
      <div className="container" ref={ref}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">01 // About</span>
          <h2 className="text-gradient">Beyond CRUD APIs</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.paragraph}>
              I specialize in building systems where performance, reliability, and scalability matter.
            </p>
            <p className={styles.paragraph}>
              I enjoy solving challenging engineering problems involving throughput optimization, fault tolerance, caching strategies, and real-time financial workflows. My focus is on robust backend architectures that can handle massive scale without compromising on latency or data integrity.
            </p>
            
            <div className={styles.accentLine}></div>
          </motion.div>

          <motion.div 
            className={styles.gridColumn}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.listTitle}>My experience spans:</h3>
            <div className={styles.domainsGrid}>
              {domains.map((domain, index) => (
                <motion.div 
                  key={index} 
                  className={styles.domainCard}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                >
                  <div className={styles.iconWrapper}>{domain.icon}</div>
                  <span>{domain.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
