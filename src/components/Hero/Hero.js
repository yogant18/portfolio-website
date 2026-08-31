"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../shared/Button";

const roles = [
  "Aspiring Data Scientist",
  "Machine Learning Engineer",
  "LLM & AI Practitioner",
  "Data Analyst",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.slice(0, text.length - 1)
              : currentRole.slice(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background decorations */}
      <div className={styles.bgDecor}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSide}>
            {/* Open to Opportunities Pill */}
            <div className={styles.openToWorkBadge}>
              <span className={styles.pulseDot}></span>
              <span className={styles.openToWorkText}>Open to Opportunities</span>
              <span className={styles.openToWorkRoles}>Data Science · ML · LLMs · Analytics</span>
            </div>

            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span className={styles.greetingText}>Hello, I&apos;m</span>
            </div>

            <h1 className={styles.name}>
              <span className={styles.firstName}>Yogant</span>{" "}
              <span className={styles.lastName}>Patil</span>
            </h1>

            <div className={styles.roleWrapper}>
              <span className={styles.rolePrefix}>I&apos;m an </span>
              <span className={styles.role}>
                {text}
                <span className={styles.cursor}>|</span>
              </span>
            </div>

            <p className={styles.bio}>
              Recent M.Tech in Data Science graduate and aspiring Data Scientist &amp; Machine Learning Engineer.
              Experienced in building practical ML pipelines, LLM-powered applications (RAG &amp; LangChain), and interactive analytics dashboards.
              Actively seeking full-time entry-level opportunities to solve real-world problems and drive data-driven impact.
            </p>

            <div className={styles.ctas}>
              <Button
                href="#projects"
                variant="primary"
                onClick={(e) => handleScrollTo(e, "#projects")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                View Projects
              </Button>
              <Button
                href="/resume.pdf"
                variant="outline"
                download
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </Button>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>M.Tech</span>
                <span className={styles.statLabel}>Data Science (COEP)</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>ML &amp; LLM Projects</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>Internships</span>
              </div>
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageRing}></div>
              <div className={styles.imageContainer}>
                <Image
                  src="/images/profile.jpg"
                  alt="Professional headshot of Yogant Patil"
                  width={380}
                  height={380}
                  priority
                  className={styles.profileImage}
                />
              </div>
              {/* Floating badges */}
              <div className={`${styles.floatingBadge} ${styles.badge1}`}>
                <span>📊</span> Data Science
              </div>
              <div className={`${styles.floatingBadge} ${styles.badge2}`}>
                <span>⚙️</span> Machine Learning
              </div>
              <div className={`${styles.floatingBadge} ${styles.badge3}`}>
                <span>🤖</span> LLMs &amp; GenAI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
