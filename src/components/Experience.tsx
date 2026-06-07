'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'KoinBX',
    companyType: 'Crypto Exchange · FinTech',
    role: 'Backend Engineer',
    period: 'May 2024 – Present',
    location: 'Bengaluru, India',
    current: true,
    color: 'blue',
    metrics: [
      { value: '15x', label: 'Latency gain' },
      { value: '6K+', label: 'Trades/min' },
      { value: '100K+', label: 'Users' },
      { value: '60%', label: 'Cost saved' },
    ],
    highlights: [
      { text: 'Reduced API latency from 150ms → 10ms through connection pooling, Redis caching, and DB query optimisation', tag: 'Performance' },
      { text: 'Built matching engine handling 6000+ trades/min with event-driven Kafka architecture for real-time order processing', tag: 'Trading' },
      { text: 'Designed and deployed microservices serving 100K+ users across web, iOS, and Android with 99.9% uptime', tag: 'Scale' },
      { text: 'Cut database load by 95% via strategic Redis caching and eliminated 60% cloud infrastructure cost', tag: 'Infra' },
      { text: 'Integrated 5+ blockchain networks (EVM, BTC, TRON, Polygon) via Liminal Custody for multi-chain wallet ops', tag: 'Blockchain' },
      { text: 'Built RBAC-based admin platform with real-time alerting, audit logs, and risk monitoring dashboards', tag: 'Platform' },
    ],
    stack: ['NestJS', 'TypeScript', 'Kafka', 'Redis', 'PostgreSQL', 'MSSQL', 'Docker', 'Azure'],
  },
  {
    company: 'CAW Studios',
    companyType: 'Product Studio · SaaS',
    role: 'Software Development Engineer',
    period: 'June 2022 – April 2024',
    location: 'Noida, India',
    current: false,
    color: 'purple',
    metrics: [
      { value: '2yrs', label: 'Experience' },
      { value: '5+', label: 'Products built' },
      { value: 'AI', label: 'Chatbot systems' },
      { value: 'WOPI', label: 'MS Integration' },
    ],
    highlights: [
      { text: 'Developed scalable backend services and REST APIs with NestJS powering multiple SaaS product lines', tag: 'Backend' },
      { text: 'Integrated Microsoft WOPI protocol enabling real-time document collaboration across web clients', tag: 'Integration' },
      { text: 'Built AI-powered chatbot systems with NLP pipelines for automated customer support workflows', tag: 'AI' },
      { text: 'Managed CI/CD deployment pipelines on Azure with Docker-based containerised microservices', tag: 'DevOps' },
      { text: 'Designed and implemented modular enterprise-grade API architecture across cross-functional teams', tag: 'Architecture' },
    ],
    stack: ['NestJS', 'Node.js', 'TypeScript', 'Azure', 'Docker', 'MongoDB', 'PostgreSQL'],
  },
];

export default function Experience() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.experienceSection} id="experience">
      <div className="container" ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">02 // Experience</span>
          <h2 className="text-gradient">Work Experience</h2>
          <p className={styles.headerSub}>Building production systems that process real money and real-time data.</p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: index * 0.18 }}
            >
              {/* Timeline line + dot */}
              <div className={styles.timelineSide}>
                <div className={`${styles.dot} ${styles[`dot_${exp.color}`]}`}>
                  {exp.current && <span className={styles.dotPulse} />}
                </div>
                {index < experiences.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={`${styles.card} ${styles[`card_${exp.color}`]}`}>
                {/* Card header */}
                <div className={styles.cardTop}>
                  <div className={styles.roleBlock}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.companyRow}>
                      <span className={`${styles.company} ${styles[`company_${exp.color}`]}`}>{exp.company}</span>
                      <span className={styles.companyType}>{exp.companyType}</span>
                    </div>
                  </div>
                  <div className={styles.metaBlock}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>{exp.location}</span>
                    {exp.current && <span className={styles.currentBadge}>Current</span>}
                  </div>
                </div>

                {/* Metrics row */}
                <div className={styles.metricsRow}>
                  {exp.metrics.map((m, i) => (
                    <div key={i} className={`${styles.metric} ${styles[`metric_${exp.color}`]}`}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {exp.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      className={styles.highlightItem}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.06 }}
                    >
                      <span className={`${styles.tag} ${styles[`tag_${exp.color}`]}`}>{h.tag}</span>
                      <span>{h.text}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stack pills */}
                <div className={styles.stackRow}>
                  {exp.stack.map((tech) => (
                    <span key={tech} className={styles.stackPill}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
