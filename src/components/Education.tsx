'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import styles from './Education.module.css';

const achievements = [
  'Reduced system latency by 15x (150ms → 10ms) in production',
  'Increased trading throughput by 15x (400 → 6000 trades/min)',
  'Cut database load by 95% via strategic Redis caching layer',
  'Reduced cloud infrastructure cost by 60% through optimization',
  'Built production-grade crypto exchange serving 100K+ users',
  'Designed and deployed multi-chain blockchain integrations',
];

const certifications = [
  { name: 'Azure Fundamentals', issuer: 'Microsoft', status: 'Achieved', color: 'blue' },
  { name: 'Associate Cloud Engineer', issuer: 'Google Cloud', status: 'In Progress', color: 'amber' },
];

export default function Education() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  });

  return (
    <section className={styles.eduSection} id="education">
      <div className="container" ref={ref}>
        <motion.div {...fade(0)} className={styles.header}>
          <span className="section-label">06 // Background</span>
          <h2 className="text-gradient">Education &amp; Achievements</h2>
        </motion.div>

        <div className={styles.grid}>
          {/* Education */}
          <motion.div {...fade(0.1)} className={styles.card}>
            <div className={styles.cardIcon} style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa' }}>
              <GraduationCap size={24} />
            </div>
            <h3 className={styles.cardTitle}>Education</h3>
            <div className={styles.eduItem}>
              <p className={styles.degree}>B.Tech — Computer Science Engineering</p>
              <p className={styles.institution}>Lovely Professional University</p>
              <div className={styles.cgpaRow}>
                <span className={styles.cgpaLabel}>CGPA</span>
                <span className={styles.cgpaValue}>9.13 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fade(0.2)} className={styles.card}>
            <div className={styles.cardIcon} style={{ background: 'rgba(139,92,246,0.1)', color: '#a78bfa' }}>
              <Award size={24} />
            </div>
            <h3 className={styles.cardTitle}>Certifications</h3>
            <div className={styles.certList}>
              {certifications.map((cert) => (
                <div key={cert.name} className={styles.certItem}>
                  <div className={styles.certMeta}>
                    <span className={styles.certName}>{cert.name}</span>
                    <span className={styles.certIssuer}>{cert.issuer}</span>
                  </div>
                  <span className={`${styles.certBadge} ${styles[`badge_${cert.color}`]}`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div {...fade(0.3)} className={`${styles.card} ${styles.cardWide}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399' }}>
              <Trophy size={24} />
            </div>
            <h3 className={styles.cardTitle}>Key Achievements</h3>
            <ul className={styles.achieveList}>
              {achievements.map((ach, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className={styles.achieveItem}
                >
                  <span className={styles.checkmark}>✓</span>
                  {ach}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
