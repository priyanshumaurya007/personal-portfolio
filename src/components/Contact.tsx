'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Download, MapPin, ExternalLink } from 'lucide-react';
import styles from './Contact.module.css';

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contacts = [
  {
    name: 'Email',
    value: 'priyanshumaurya007@gmail.com',
    icon: <Mail size={22} />,
    link: 'mailto:priyanshumaurya007@gmail.com',
    color: '#3b82f6',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/priyanshumaurya',
    icon: <LinkedinIcon />,
    link: 'https://www.linkedin.com/in/priyanshumaurya/',
    color: '#0077b5',
  },
  {
    name: 'GitHub',
    value: 'github.com/priyanshumaurya007',
    icon: <GithubIcon />,
    link: 'https://github.com/priyanshumaurya007',
    color: '#a78bfa',
  },
];

const footerLinks = [
  { label: 'Why Me', href: '#about' },
  { label: 'Services', href: '#expertise' },
  { label: 'Case Studies', href: '#projects' },
  { label: 'Architecture', href: '#system-design' },
  { label: 'Contact', href: '#contact' },
];

export default function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.contactSection} id="contact">
      {/* Gradient separator */}
      <div className={styles.gradientLine} />

      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">06 // Contact</span>
          <h2 className={styles.heading}>
            Ready to Scale Your <br />
            <span className="text-gradient-accent">Business?</span>
          </h2>
          <div className={styles.location}>
            <MapPin size={16} />
            <span>Bengaluru, India</span>
          </div>
          <p className={styles.subtitle}>
            Let&apos;s discuss your technical challenges. Book a free consultation to explore how we can build your next high-performance system.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => (
            <motion.a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={styles.contactCard}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.cardIconWrap} style={{ color: contact.color, background: `${contact.color}18` }}>
                {contact.icon}
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardName}>{contact.name}</span>
                <span className={styles.cardValue}>{contact.value}</span>
              </div>
              <ExternalLink size={14} className={styles.extIcon} />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className={styles.resumeWrap}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="mailto:priyanshumaurya007@gmail.com" className={styles.resumeBtn}>
            <Mail size={18} />
            Book a Free Consultation
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <span className={styles.footerMark}>P</span>
              <span>Priyanshu</span>
            </div>
            <p className={styles.footerTagline}>
              Backend Engineer · B2B SaaS · Web Architect · Consultant
            </p>
          </div>

          <nav className={styles.footerNav}>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.footerLink}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={`container ${styles.footerBottom}`}>
          <span>© {new Date().getFullYear()} Priyanshu. Designed &amp; Built with Next.js.</span>
          <span className={styles.footerStack}>React · Next.js · Node.js · Enterprise Architecture</span>
        </div>
      </footer>
    </section>
  );
}
