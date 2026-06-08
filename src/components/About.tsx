'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Zap, Database, Activity, GitBranch, Layers } from 'lucide-react';
import styles from './About.module.css';

const domains = [
  { name: '4+ Years Production Experience', icon: <Server size={24} /> },
  { name: 'Millions of TXs Processed', icon: <Activity size={24} /> },
  { name: 'Zero-Downtime Deployments', icon: <Zap size={24} /> },
  { name: 'Enterprise Grade Security', icon: <Database size={24} /> },
  { name: 'Scalable Cloud Architectures', icon: <Layers size={24} /> },
  { name: 'Reliable Technical Partner', icon: <GitBranch size={24} /> },
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
          <span className="section-label">01 // Why Work With Me</span>
          <h2 className="text-gradient">Engineering for Business Outcomes</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.paragraph}>
              I don&apos;t just write code; I solve complex business problems.
            </p>
            <p className={styles.paragraph}>
              Whether you need a fault-tolerant financial engine capable of thousands of trades per minute, or a digital storefront that drives revenue—I bring enterprise-grade engineering to your project. I focus on delivering reliable, scalable software that lets you focus on growing your business instead of managing technical debt.
            </p>
            
            <div className={styles.accentLine}></div>
          </motion.div>

          <motion.div 
            className={styles.gridColumn}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.listTitle}>What I bring to the table:</h3>
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
