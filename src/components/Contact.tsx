'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import styles from './Contact.module.css';

export default function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      name: 'Email',
      value: 'hello@example.com', // Replace with actual email
      icon: <Mail size={24} />,
      link: 'mailto:hello@example.com'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/priyanshu-maurya',
      icon: <LinkedinIcon />,
      link: 'https://linkedin.com/in/priyanshu-maurya' // Replace with actual LinkedIn
    },
    {
      name: 'GitHub',
      value: 'github.com/priyanshumaurya',
      icon: <GithubIcon />,
      link: 'https://github.com/priyanshumaurya' // Replace with actual GitHub
    }
  ];

  return (
    <section className={styles.contactSection} id="contact">
      <div className="container" ref={ref}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gradient">Let's Connect</h2>
          <p className={styles.subtitle}>Currently open to new opportunities.</p>
        </motion.div>

        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => (
            <motion.a 
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index} 
              className={`glass-card ${styles.contactCard}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <div className={styles.iconWrapper}>
                {contact.icon}
              </div>
              <div>
                <h3 className={styles.contactName}>{contact.name}</h3>
                <p className={styles.contactValue}>{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div 
          className={styles.resumeSection}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/resume.pdf" target="_blank" className={styles.resumeBtn}>
            <Download size={20} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
      
      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Priyanshu Maurya. Built with Next.js.</p>
        </div>
      </footer>
    </section>
  );
}
