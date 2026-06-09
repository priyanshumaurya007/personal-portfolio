'use client';
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './Expertise.module.css';

// ─── Data ──────────────────────────────────────────────────────────────
const domains = [
  {
    id: 'web-apps',
    label: 'Custom Web Applications',
    icon: '⬡',
    color: 'amber',
    description: 'Lightning-fast, beautifully designed websites that turn visitors into paying customers. Perfect for agencies, real estate, and professional services.',
    skills: [
      { name: 'Lead Generation & Conversion Funnels', level: 95 },
      { name: 'Search Engine Optimization (SEO)', level: 92 },
      { name: 'Mobile-First Responsive Design', level: 90 },
      { name: 'Content Management Systems (CMS)', level: 85 },
      { name: 'Analytics & Tracking Integration', level: 88 },
      { name: 'Blazing Fast Page Loads', level: 95 },
    ],
  },
  {
    id: 'saas',
    label: 'SaaS & Enterprise Software',
    icon: '⬡',
    color: 'blue',
    description: 'Scalable backend systems and custom software to automate your operations and handle massive user growth without crashing.',
    skills: [
      { name: 'Custom Admin Dashboards', level: 95 },
      { name: 'User Role & Access Management', level: 92 },
      { name: 'Third-Party API Integrations', level: 90 },
      { name: 'Secure Data Storage', level: 95 },
      { name: 'Automated Business Workflows', level: 88 },
      { name: 'High-Traffic Infrastructure', level: 90 },
    ],
  },
  {
    id: 'consulting',
    label: 'Technical Consulting',
    icon: '⬡',
    color: 'emerald',
    description: 'Acting as your fractional CTO. I review your systems, identify bottlenecks, and build a technical roadmap to save you money on cloud costs.',
    skills: [
      { name: 'Infrastructure Audits', level: 95 },
      { name: 'Cloud Cost Reduction', level: 90 },
      { name: 'Technical Roadmap Planning', level: 92 },
      { name: 'Security & Compliance Reviews', level: 85 },
      { name: 'Platform Migration Strategy', level: 90 },
      { name: 'Team Onboarding & Tech Setup', level: 88 },
    ],
  },
  {
    id: 'fintech',
    label: 'FinTech & Secure Platforms',
    icon: '⬡',
    color: 'purple',
    description: 'Bank-grade secure platforms for financial data, trading algorithms, and real-time payment processing.',
    skills: [
      { name: 'Payment Gateway Integration', level: 95 },
      { name: 'Real-Time Data Feeds', level: 90 },
      { name: 'Fraud & Risk Prevention', level: 92 },
      { name: 'Compliance-Ready Security', level: 90 },
      { name: 'Automated Reconciliation', level: 85 },
      { name: 'High-Frequency Operations', level: 88 },
    ],
  },
];

const techPills = [
  { group: 'Web Presence', items: ['React', 'Next.js', 'Tailwind', 'SEO Optimization'] },
  { group: 'Custom Software', items: ['Node.js', 'REST APIs', 'User Authentication'] },
  { group: 'Data & Security', items: ['Secure SQL', 'Data Encryption', 'Automated Backups'] },
  { group: 'Integrations', items: ['Stripe', 'Twilio', 'CMS', 'CRM Systems'] },
  { group: 'Cloud Hosting', items: ['AWS', 'Azure', 'Vercel', 'Zero-Downtime Deployment'] },
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
  const [active, setActive] = useState('web-apps');

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
