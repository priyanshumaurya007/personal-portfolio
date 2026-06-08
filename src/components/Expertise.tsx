'use client';
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './Expertise.module.css';

// ─── Data ──────────────────────────────────────────────────────────────
const domains = [
  {
    id: 'backend',
    label: 'Custom Backend & APIs',
    icon: '⬡',
    color: 'blue',
    description: 'Robust, secure, and scalable microservices built with NestJS and Node.js. Designed to handle high throughput for SaaS and enterprise applications.',
    skills: [
      { name: 'Microservices Architecture', level: 95 },
      { name: 'REST & GraphQL APIs', level: 92 },
      { name: 'Database Design (SQL/NoSQL)', level: 90 },
      { name: 'Authentication & Security', level: 95 },
      { name: 'Event-Driven Systems', level: 88 },
      { name: 'Performance Optimization', level: 90 },
    ],
  },
  {
    id: 'fintech',
    label: 'FinTech & Web3 Infra',
    icon: '⬡',
    color: 'purple',
    description: 'Real-time matching engines, secure multi-chain integrations, and transaction processing systems built for 99.9% uptime.',
    skills: [
      { name: 'Real-Time Trading Engines', level: 95 },
      { name: 'Blockchain Integration', level: 90 },
      { name: 'Payment Gateways', level: 92 },
      { name: 'High-Frequency WebSockets', level: 90 },
      { name: 'Custodial Wallet Systems', level: 85 },
      { name: 'Fraud & Risk Monitoring', level: 88 },
    ],
  },
  {
    id: 'consulting',
    label: 'Architecture Consulting',
    icon: '⬡',
    color: 'emerald',
    description: 'System design, cloud deployment strategies (Azure/GCP), and infrastructure optimization for scaling startups.',
    skills: [
      { name: 'Cloud Infrastructure Setup', level: 95 },
      { name: 'System Scalability Review', level: 90 },
      { name: 'CI/CD Automation', level: 92 },
      { name: 'Cost Optimization', level: 85 },
      { name: 'Technical Roadmap Planning', level: 90 },
      { name: 'Codebase Auditing', level: 88 },
    ],
  },
  {
    id: 'websites',
    label: 'Business Websites',
    icon: '⬡',
    color: 'amber',
    description: 'High-performance, SEO-optimized web applications and landing pages that drive leads and conversions for local businesses.',
    skills: [
      { name: 'Next.js Web Applications', level: 95 },
      { name: 'SEO & Performance Tuning', level: 92 },
      { name: 'Responsive UI Design', level: 90 },
      { name: 'CMS Integrations', level: 85 },
      { name: 'Conversion Optimization', level: 88 },
      { name: 'E-commerce Solutions', level: 85 },
    ],
  },
];

const techPills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'C++', 'Python'] },
  { group: 'Backend', items: ['NestJS', 'Node.js', 'Express.js'] },
  { group: 'Databases', items: ['MSSQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Messaging', items: ['Kafka', 'Azure Event Hubs', 'WebSocket'] },
  { group: 'Blockchain', items: ['EVM', 'Liminal', 'TRON', 'Polygon', 'Bitcoin'] },
  { group: 'Cloud', items: ['Azure', 'GCP', 'Docker', 'CI/CD', 'Git'] },
];

function SkillBar({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) {
  return (
    <div className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
      </div>
      <div className={styles.skillBarTrack}>
        <motion.div
          className={`${styles.skillBarFill} ${styles[`fill_${color}`]}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : '0%' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Expertise() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState('backend');

  const activeDomain = domains.find((d) => d.id === active)!;

  return (
    <section className={styles.expertiseSection} id="expertise">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">03 // Services</span>
          <h2 className="text-gradient">
            What I Offer
          </h2>
          <p className={styles.headerSub}>
            From robust backends to scalable infrastructure, I provide enterprise-grade technical solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Domain tabs + skill bars */}
        <div className={styles.mainGrid}>
          {/* Left: tab selector */}
          <motion.div
            className={styles.tabList}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {domains.map((domain) => (
              <button
                key={domain.id}
                onClick={() => setActive(domain.id)}
                className={`${styles.tab} ${active === domain.id ? styles.tabActive : ''} ${styles[`tab_${domain.color}`]}`}
              >
                <span className={styles.tabHex}>{domain.icon}</span>
                <span>{domain.label}</span>
                {active === domain.id && (
                  <motion.span className={styles.tabBar} layoutId="tabBar" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Right: skill bars */}
          <motion.div
            className={styles.skillPanel}
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className={styles.panelInner}
              >
                <p className={styles.domainDesc}>{activeDomain.description}</p>
                <div className={styles.skillList}>
                  {activeDomain.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} color={activeDomain.color} inView={isInView} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Full tech stack pills */}
        <motion.div
          className={styles.techSection}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h3 className={styles.techTitle}>Full Tech Stack</h3>
          <div className={styles.techGroups}>
            {techPills.map((group) => (
              <div key={group.group} className={styles.techGroup}>
                <span className={styles.techGroupLabel}>{group.group}</span>
                <div className={styles.pillRow}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.pill}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
