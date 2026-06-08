'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

// ─── Project data ──────────────────────────────────────────────────
const projects = [
  {
    number: '01',
    title: 'Crypto Exchange Architecture',
    problem: 'High latency and database bottlenecks during peak trading periods were causing dropped requests.',
    solution: 'Implemented Redis caching, connection pooling, and optimized queries to relieve database load.',
    impact: 'Reduced API latency from 150ms to 10ms, easily scaling to handle 100K+ concurrent users.',
    tags: ['NestJS', 'Kafka', 'Redis', 'PostgreSQL', 'MSSQL', 'Docker'],
    visual: 'architecture',
  },
  {
    number: '02',
    title: 'Blockchain Deposit System',
    problem: 'Manual, slow verification of cross-chain deposits was causing terrible user experience.',
    solution: 'Integrated Liminal Custody for automated multi-chain (EVM, BTC, TRON) tracking and settlement.',
    impact: 'Achieved 100% automated settlement with zero dropped events and instant user balance updates.',
    tags: ['EVM', 'Liminal', 'Blockchain', 'Node.js', 'TypeScript'],
    visual: 'blockchain',
  },
  {
    number: '03',
    title: 'Real-Time Trading Platform',
    problem: 'Order processing could not keep up with market volatility and high-frequency traders.',
    solution: 'Built an event-driven architecture using Kafka for asynchronous, non-blocking order processing.',
    impact: 'Scaled throughput to 6000+ trades/minute with sub-10ms p99 latency and guaranteed execution.',
    tags: ['TypeScript', 'Redis', 'Kafka', 'Node.js', 'MSSQL'],
    visual: 'trading',
  },
  {
    number: '04',
    title: 'Multi-Tenant SaaS Backend',
    problem: 'Monolithic architecture was hindering rapid feature rollout and new enterprise client onboarding.',
    solution: 'Designed modular microservices with strict RBAC, MS WOPI integration, and tenant isolation.',
    impact: 'Enabled rapid onboarding of 5+ enterprise clients with total data security and isolation.',
    tags: ['NestJS', 'Azure', 'RBAC', 'WebSocket', 'Redis'],
    visual: 'dashboard',
  },
  {
    number: '05',
    title: 'Business Website Development',
    problem: 'Local business was struggling with digital presence, SEO, and lead generation.',
    solution: 'Developed a modern, lightning-fast Next.js web application tailored for conversion optimization.',
    impact: 'Significantly increased organic traffic and improved the inbound lead conversion rate.',
    tags: ['Next.js', 'React', 'TypeScript', 'SEO', 'Framer Motion'],
    visual: 'dashboard',
  },
];

// ─── Visual: Architecture flow ─────────────────────────────────────
function ArchitectureFlow() {
  const nodes = ['Client', 'Gateway', 'Services', 'Kafka', 'DB'];
  return (
    <div className={styles.archFlow}>
      {nodes.map((n, i) => (
        <React.Fragment key={n}>
          <div className={`${styles.archNode} ${n === 'Kafka' ? styles.archNodeKafka : ''}`}>
            {n}
          </div>
          {i < nodes.length - 1 && (
            <div className={styles.archArrow}>
              <div className={styles.archDot} style={{ animationDelay: `${i * 0.4}s` }} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Visual: Trading Engine order book ─────────────────────────────
function TradingVisual() {
  return (
    <div className={styles.tradingWrap}>
      <div className={styles.orderBook}>
        <div className={styles.obHeader}>Order Book</div>
        <div className={styles.obRows}>
          {[90, 75, 60, 85, 70, 55].map((w, i) => (
            <div key={i} className={`${styles.obRow} ${i < 3 ? styles.obSell : styles.obBuy}`}>
              <span className={styles.obBar} style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.matchBox}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        <span>Matching</span>
      </div>
    </div>
  );
}

// ─── Visual: Blockchain network ─────────────────────────────────────
function BlockchainVisual() {
  return (
    <div className={styles.blockchainWrap}>
      <svg viewBox="0 0 240 100" width="100%" className={styles.blockchainSvg}>
        {/* Chain nodes */}
        {[30, 80, 130, 180, 210].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy="50" r="14" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
            <circle cx={cx} cy="50" r="8" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.8)" strokeWidth="1.5" />
            {/* pulse ring */}
            <circle cx={cx} cy="50" r="14" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1">
              <animate attributeName="r" from="14" to="22" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {/* Connecting lines */}
        {[30, 80, 130, 180].map((cx, i) => (
          <line key={i} x1={cx + 14} y1="50" x2={[80,130,180,210][i] - 14} y2="50" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="4 2" />
        ))}
        {/* Animated dot moving along chain */}
        <circle r="4" fill="rgba(16,185,129,0.9)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 30 50 L 210 50" />
        </circle>
      </svg>
      <div className={styles.chainLabels}>
        {['EVM', 'BTC', 'TRON', 'Polygon', 'Custom'].map((l) => (
          <span key={l} className={styles.chainLabel}>{l}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Visual: Admin dashboard ─────────────────────────────────────────
function DashboardVisual() {
  return (
    <div className={styles.dashWrap}>
      <div className={styles.dashGrid}>
        <div className={styles.dashWidget}>
          <div className={styles.dashWidgetLabel}>Alerts</div>
          <div className={styles.alertDots}>
            <span className={styles.alertDot} style={{ background: '#ef4444' }} />
            <span className={styles.alertDot} style={{ background: '#f59e0b' }} />
            <span className={styles.alertDot} style={{ background: '#10b981' }} />
          </div>
        </div>
        <div className={styles.dashWidget}>
          <div className={styles.dashWidgetLabel}>Throughput</div>
          <div className={styles.miniChart}>
            {[30, 55, 40, 70, 65, 80, 72].map((h, i) => (
              <div key={i} className={styles.chartBar} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className={styles.dashWidget}>
          <div className={styles.dashWidgetLabel}>CPU</div>
          <div className={styles.cpuBar}><div className={styles.cpuFill} /></div>
          <div className={styles.dashValue}>42%</div>
        </div>
        <div className={styles.dashWidget}>
          <div className={styles.dashWidgetLabel}>Latency</div>
          <div className={styles.dashBig} style={{ color: '#34d399' }}>9ms</div>
        </div>
      </div>
    </div>
  );
}

// ─── Projects section ────────────────────────────────────────────────
export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 // Case Studies</span>
          <h2 className="text-gradient">Featured Work & Impact</h2>
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className={styles.cardVisual}>
                {project.visual === 'architecture' && <ArchitectureFlow />}
                {project.visual === 'trading'      && <TradingVisual />}
                {project.visual === 'blockchain'   && <BlockchainVisual />}
                {project.visual === 'dashboard'    && <DashboardVisual />}
              </div>

              <div className={styles.cardContent}>
                <span className={styles.projectNumber}>{project.number}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDescription}>
                  <div style={{ marginBottom: '8px' }}><strong>Problem:</strong> {project.problem}</div>
                  <div style={{ marginBottom: '8px' }}><strong>Solution:</strong> {project.solution}</div>
                  <div><strong>Impact:</strong> <span style={{ color: 'var(--accent-primary)' }}>{project.impact}</span></div>
                </div>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
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
