'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Server, Database, Activity, Lock, Wallet, FileText, Layers } from 'lucide-react';
import styles from './SystemDesign.module.css';

export default function SystemDesign() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.systemSection} id="system-design">
      <div className="container" ref={ref}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 // Architecture</span>
          <h2 className="text-gradient">System Architecture</h2>
          <p className={styles.subtitle}>A high-level view of a scalable trading infrastructure.</p>
        </motion.div>

        <motion.div 
          className={styles.architectureWrapper}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Layer 1: Client */}
          <div className={styles.layer}>
            <motion.div variants={nodeVariants} className={styles.node}>
              <Users className={styles.icon} />
              <span>Clients</span>
            </motion.div>
          </div>

          <div className={styles.connector}><div className={styles.dataFlow}></div></div>

          {/* Layer 2: Gateway */}
          <div className={styles.layer}>
            <motion.div variants={nodeVariants} className={`${styles.node} ${styles.gatewayNode}`}>
              <Server className={styles.icon} />
              <span>API Gateway</span>
            </motion.div>
          </div>

          <div className={styles.connectorMulti}><div className={styles.dataFlow}></div><div className={styles.dataFlow}></div><div className={styles.dataFlow}></div></div>

          {/* Layer 3: Microservices */}
          <div className={styles.layerHorizontal}>
            <motion.div variants={nodeVariants} className={styles.node}>
              <Lock className={styles.icon} />
              <span>Auth Service</span>
            </motion.div>
            <motion.div variants={nodeVariants} className={`${styles.node} ${styles.tradingNode}`}>
              <Activity className={styles.icon} />
              <span>Trading Service</span>
            </motion.div>
            <motion.div variants={nodeVariants} className={styles.node}>
              <Wallet className={styles.icon} />
              <span>Wallet Service</span>
            </motion.div>
            <motion.div variants={nodeVariants} className={styles.node}>
              <FileText className={styles.icon} />
              <span>Settlement</span>
            </motion.div>
          </div>

          <div className={styles.connectorMulti}><div className={styles.dataFlowReverse}></div><div className={styles.dataFlowReverse}></div></div>

          {/* Layer 4: Event Bus & Cache */}
          <div className={styles.layerHorizontal}>
            <motion.div variants={nodeVariants} className={`${styles.node} ${styles.kafkaNode}`}>
              <Layers className={styles.icon} />
              <span>Kafka Event Bus</span>
            </motion.div>
            <motion.div variants={nodeVariants} className={`${styles.node} ${styles.redisNode}`}>
              <Database className={styles.icon} />
              <span>Redis Cache</span>
            </motion.div>
          </div>

          <div className={styles.connectorMulti}><div className={styles.dataFlow}></div><div className={styles.dataFlow}></div></div>

          {/* Layer 5: Persistence */}
          <div className={styles.layerHorizontal}>
            <motion.div variants={nodeVariants} className={styles.node}>
              <Database className={styles.icon} />
              <span>Primary Database</span>
            </motion.div>
            <motion.div variants={nodeVariants} className={`${styles.node} ${styles.blockchainNode}`}>
              <Layers className={styles.icon} />
              <span>Blockchain Layer</span>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
