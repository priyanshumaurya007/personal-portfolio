'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Expertise.module.css';

const coreSkills = [
  'Distributed Systems', 'Microservices Architecture', 'Real-Time Trading Systems',
  'Blockchain Infrastructure', 'Event-Driven Systems', 'Performance Optimization',
  'Scalability Engineering', 'System Design', 'Fault Tolerance', 'Cloud Architecture'
];

const techStack = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C++', 'Python']
  },
  {
    category: 'Backend',
    skills: ['NestJS', 'Node.js', 'Express.js']
  },
  {
    category: 'Databases',
    skills: ['MSSQL', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    category: 'Messaging',
    skills: ['Kafka', 'Azure Event Hubs']
  },
  {
    category: 'Blockchain',
    skills: ['EVM', 'Liminal', 'Custom Chains']
  },
  {
    category: 'Cloud',
    skills: ['Azure', 'GCP', 'Docker', 'CI/CD']
  }
];

export default function Expertise() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.expertiseSection} id="expertise">
      <div className="container" ref={ref}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 // Expertise</span>
          <h2 className="text-gradient">Core Expertise</h2>
        </motion.div>

        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {coreSkills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className={`glass-card ${styles.skillCard}`}>
              <span>{skill}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.techStackHeader}>
          <h3 className={styles.subTitle}>Tech Stack</h3>
        </div>

        <motion.div 
          className={styles.techGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techStack.map((stack, index) => (
            <motion.div key={index} variants={itemVariants} className={`glass-card ${styles.techCard}`}>
              <h4 className={styles.techCategory}>{stack.category}</h4>
              <div className={styles.techItems}>
                {stack.skills.map((skill, sIndex) => (
                  <span key={sIndex} className={styles.techItem}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
