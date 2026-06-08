'use client';
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './SystemDesign.module.css';

// ─── Architecture data ─────────────────────────────────────────────
const layers = [
  {
    id: 'client',
    title: 'Client Layer',
    color: 'slate',
    nodes: [
      { id: 'web', label: 'Web App', icon: '🌐', desc: 'React / Next.js SPA & SSR' },
      { id: 'mobile', label: 'Mobile App', icon: '📱', desc: 'iOS & Android Native' },
      { id: 'admin', label: 'Admin Panel', icon: '🖥️', desc: 'Analytics & Operations Dashboard' },
    ],
  },
  {
    id: 'gateway',
    title: 'API Gateway',
    color: 'blue',
    nodes: [
      { id: 'cdn', label: 'Edge CDN', icon: '🌍', desc: 'Fast Global Content Delivery' },
      { id: 'gateway', label: 'API Gateway', icon: '⚡', desc: 'Rate limiting · Auth · Routing' },
    ],
  },
  {
    id: 'services',
    title: 'Microservices',
    color: 'purple',
    nodes: [
      { id: 'auth', label: 'Auth Service', icon: '🔐', desc: 'JWT · MFA · Strict RBAC' },
      { id: 'core', label: 'Core Backend', icon: '⚙️', desc: 'Business logic · REST/GraphQL API' },
      { id: 'worker', label: 'Worker Node', icon: '⏳', desc: 'Background jobs · Async processing' },
      { id: 'integration', label: 'Integrations', icon: '🔌', desc: 'Third-party APIs · Webhooks' },
    ],
  },
  {
    id: 'messaging',
    title: 'Event Bus & Cache',
    color: 'amber',
    nodes: [
      { id: 'broker', label: 'Message Broker', icon: '📨', desc: 'Event streaming (Kafka / RabbitMQ)' },
      { id: 'redis', label: 'Redis', icon: '⚡', desc: 'In-memory cache · Pub/Sub' },
    ],
  },
  {
    id: 'data',
    title: 'Data Layer',
    color: 'emerald',
    nodes: [
      { id: 'sql', label: 'Relational DB', icon: '🗄️', desc: 'Primary ACID transactional data' },
      { id: 'nosql', label: 'NoSQL / Search', icon: '🍃', desc: 'Analytics · Logs · Fast Search' },
      { id: 'storage', label: 'Object Storage', icon: '📦', desc: 'Secure media & document storage' },
    ],
  },
];

const COLOR_MAP: Record<string, string> = {
  slate:   '#94a3b8',
  blue:    '#60a5fa',
  purple:  '#a78bfa',
  amber:   '#fbbf24',
  emerald: '#34d399',
};

// ─── Animated connection line ──────────────────────────────────────
function FlowArrow({ color }: { color: string }) {
  return (
    <div className={styles.flowArrow}>
      <div className={styles.flowLine} style={{ background: `${COLOR_MAP[color]}30` }} />
      <motion.div
        className={styles.flowDot}
        style={{ background: COLOR_MAP[color], boxShadow: `0 0 8px ${COLOR_MAP[color]}` }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
      />
      <div className={styles.flowArrowHead} style={{ borderTopColor: `${COLOR_MAP[color]}60` }} />
    </div>
  );
}

// ─── Node card ─────────────────────────────────────────────────────
function Node({ node, color, active, onClick }: {
  node: typeof layers[0]['nodes'][0];
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`${styles.node} ${active ? styles.nodeActive : ''}`}
      style={active ? { borderColor: `${COLOR_MAP[color]}60`, background: `${COLOR_MAP[color]}10` } : {}}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className={styles.nodeIcon}>{node.icon}</span>
      <span className={styles.nodeLabel}>{node.label}</span>
      <span className={styles.nodeDesc}>{node.desc}</span>
      {active && (
        <motion.span
          className={styles.nodeGlow}
          style={{ background: `radial-gradient(circle, ${COLOR_MAP[color]}20 0%, transparent 70%)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
    </motion.button>
  );
}

export default function SystemDesign() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeNode, setActiveNode] = useState<string | null>('core');

  const allNodes = layers.flatMap((l) => l.nodes.map((n) => ({ ...n, color: l.color })));
  const activeData = allNodes.find((n) => n.id === activeNode);

  return (
    <section className={styles.systemSection} id="system-design">
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 // Architecture</span>
          <h2 className="text-gradient">How I Build Systems</h2>
          <p className={styles.subtitle}>
            Enterprise-grade architecture designed for scale, fault tolerance, and high availability.
            <span className={styles.subtitleHint}> Click any node to explore.</span>
          </p>
        </motion.div>

        <div className={styles.mainLayout}>
          {/* Architecture diagram */}
          <motion.div
            className={styles.diagram}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {layers.map((layer, layerIdx) => (
              <div key={layer.id}>
                {/* Layer */}
                <div className={styles.layer}>
                  <div className={styles.layerLabel} style={{ color: COLOR_MAP[layer.color] }}>
                    {layer.title}
                  </div>
                  <div className={styles.layerNodes}>
                    {layer.nodes.map((node) => (
                      <Node
                        key={node.id}
                        node={node}
                        color={layer.color}
                        active={activeNode === node.id}
                        onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                      />
                    ))}
                  </div>
                </div>
                {/* Arrow between layers */}
                {layerIdx < layers.length - 1 && <FlowArrow color={layers[layerIdx + 1].color} />}
              </div>
            ))}
          </motion.div>

          {/* Info panel */}
          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {/* Key stats */}
            <div className={styles.statsCard}>
              <h4 className={styles.statCardTitle}>System Stats</h4>
              <div className={styles.statsList}>
                {[
                  { label: 'API p99 Latency', value: '10ms', color: 'blue' },
                  { label: 'Uptime SLA', value: '99.99%', color: 'purple' },
                  { label: 'Caching Hit Rate', value: '95%', color: 'emerald' },
                  { label: 'Global Edge CDN', value: 'Active', color: 'amber' },
                  { label: 'Security Standard', value: 'Enterprise', color: 'blue' },
                  { label: 'Scalability', value: '100K+', color: 'purple' },
                ].map((s) => (
                  <div key={s.label} className={styles.statRow}>
                    <span className={styles.statLabel}>{s.label}</span>
                    <span className={`${styles.statValue} ${styles[`stat_${s.color}`]}`}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active node detail */}
            <AnimatePresence mode="wait">
              {activeData && (
                <motion.div
                  key={activeNode}
                  className={styles.nodeDetail}
                  style={{ borderColor: `${COLOR_MAP[activeData.color]}40` }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className={styles.nodeDetailIcon}>{activeData.icon}</div>
                  <h4 className={styles.nodeDetailName} style={{ color: COLOR_MAP[activeData.color] }}>
                    {activeData.label}
                  </h4>
                  <p className={styles.nodeDetailDesc}>{activeData.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Legend */}
            <div className={styles.legend}>
              <p className={styles.legendTitle}>Data Flow</p>
              {layers.map((l) => (
                <div key={l.id} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ background: COLOR_MAP[l.color] }} />
                  <span className={styles.legendLabel}>{l.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
