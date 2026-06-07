'use client';
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './Expertise.module.css';

// ─── Data ──────────────────────────────────────────────────────────────
const domains = [
  {
    id: 'backend',
    label: 'Backend Systems',
    icon: '⬡',
    color: 'blue',
    description: 'Designing high-throughput, fault-tolerant distributed services at scale.',
    skills: [
      { name: 'NestJS', level: 95 },
      { name: 'Node.js', level: 92 },
      { name: 'TypeScript', level: 93 },
      { name: 'Express.js', level: 85 },
      { name: 'C++', level: 70 },
      { name: 'Python', level: 72 },
    ],
  },
  {
    id: 'trading',
    label: 'Trading & FinTech',
    icon: '⬡',
    color: 'purple',
    description: 'Matching engines, order books, real-time execution at 6000+ trades/min.',
    skills: [
      { name: 'Order Matching Engine', level: 92 },
      { name: 'Kafka Event Streams', level: 90 },
      { name: 'Redis Cache Layer', level: 93 },
      { name: 'Real-Time WebSocket', level: 88 },
      { name: 'Settlement Systems', level: 85 },
      { name: 'Risk Engine', level: 78 },
    ],
  },
  {
    id: 'blockchain',
    label: 'Blockchain Infra',
    icon: '⬡',
    color: 'emerald',
    description: 'Multi-chain integrations, custodial wallets, on-chain monitoring.',
    skills: [
      { name: 'EVM (Ethereum)', level: 88 },
      { name: 'Liminal Custody', level: 85 },
      { name: 'Custom Chains', level: 80 },
      { name: 'Smart Contracts', level: 75 },
      { name: 'Tx Monitoring', level: 90 },
      { name: 'Multi-sig Wallets', level: 82 },
    ],
  },
  {
    id: 'infra',
    label: 'Cloud & DevOps',
    icon: '⬡',
    color: 'amber',
    description: 'Cloud-native deployments, CI/CD pipelines, containerised microservices.',
    skills: [
      { name: 'Azure', level: 85 },
      { name: 'GCP', level: 78 },
      { name: 'Docker', level: 88 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MSSQL / MongoDB', level: 82 },
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
        <span className={`${styles.skillPct} ${styles[`pct_${color}`]}`}>{level}%</span>
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
          <span className="section-label">04 // Expertise</span>
          <h2 className="text-gradient">Skills & Expertise</h2>
          <p className={styles.headerSub}>
            Four years building systems that move money, tokens, and data at speed.
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
