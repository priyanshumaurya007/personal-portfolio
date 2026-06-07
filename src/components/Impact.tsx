'use client';
import React, { useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import styles from './Impact.module.css';

interface Metric {
  prefix: string;
  target: number;
  suffix: string;
  label: string;
  sub: string;
  color: string;
}

const metrics: Metric[] = [
  { prefix: '', target: 100, suffix: 'K+', label: 'Users Served', sub: 'Production systems', color: 'blue' },
  { prefix: '', target: 15,  suffix: 'x',  label: 'Latency Improvement', sub: '150ms → 10ms', color: 'purple' },
  { prefix: '', target: 6000, suffix: '+', label: 'Trades Per Minute', sub: 'Peak throughput', color: 'emerald' },
  { prefix: '', target: 95,  suffix: '%',  label: 'DB Load Reduction', sub: 'Via Redis caching', color: 'amber' },
  { prefix: '', target: 60,  suffix: '%',  label: 'Infra Cost Savings', sub: 'Cloud optimisation', color: 'blue' },
  { prefix: '', target: 5,   suffix: '+',  label: 'Blockchain Networks', sub: 'Multi-chain infra', color: 'purple' },
];

function AnimatedNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => {
    const n = Math.round(v);
    return target >= 1000 ? n.toLocaleString() : n.toString();
  });

  useEffect(() => {
    if (active) spring.set(target);
  }, [active, spring, target]);

  return (
    <motion.span>{display}</motion.span>
  );
}

export default function Impact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.impactSection} id="impact">
      <div className="container" ref={ref}>
        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`${styles.card} ${styles[`card_${metric.color}`]}`}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.6, delay: index * 0.09, ease: 'easeOut' }}
            >
              <div className={styles.shimmerLine} />
              <h3 className={styles.value}>
                {metric.prefix}
                <AnimatedNumber target={metric.target} suffix={metric.suffix} active={isInView} />
                {metric.suffix}
              </h3>
              <p className={styles.label}>{metric.label}</p>
              {metric.sub && <p className={styles.sub}>{metric.sub}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
