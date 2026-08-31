"use client";

import { useState } from "react";
import styles from "./Research.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { researchData } from "../../data/research";

export default function Research() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="research" className={styles.research}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            title="Research & Publications"
            subtitle="Published academic research in machine learning, graph neural networks, and explainable AI"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className={styles.researchCard}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeRow}>
                <span className={styles.publicationBadge}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 13l-9-4.09V17l9 4.5 9-4.5v-6.09L12 15z"/>
                  </svg>
                  {researchData.publicationType}
                </span>
                <span className={styles.venueBadge}>{researchData.publicationVenue}</span>
              </div>

              <h3 className={styles.cardTitle}>{researchData.title}</h3>

              <div className={styles.areasList}>
                {researchData.areas.map((area) => (
                  <span key={area} className={styles.areaTag}>
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.cardBody}>
              <p className={styles.summary}>{researchData.summary}</p>

              <div className={styles.metricsGrid}>
                {researchData.metrics.map((metric) => (
                  <div key={metric.label} className={styles.metricCard}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.techTags}>
                {researchData.tags.map((tag) => (
                  <span key={tag} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable detailed research breakdown */}
              {expanded && (
                <div className={styles.expandedContent}>
                  <div className={styles.sectionBlock}>
                    <h4 className={styles.sectionTitle}>{researchData.sections.problem.title}</h4>
                    <p className={styles.sectionText}>{researchData.sections.problem.content}</p>
                  </div>

                  <div className={styles.sectionBlock}>
                    <h4 className={styles.sectionTitle}>{researchData.sections.workflow.title}</h4>
                    <div className={styles.workflowSteps}>
                      {researchData.sections.workflow.steps.map((step, idx) => (
                        <div key={idx} className={styles.stepItem}>
                          <span className={styles.stepNumber}>{idx + 1}</span>
                          <div className={styles.stepContent}>
                            <h5 className={styles.stepName}>{step.name}</h5>
                            <p className={styles.stepDesc}>{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.sectionBlock}>
                    <h4 className={styles.sectionTitle}>{researchData.sections.motivation.title}</h4>
                    <p className={styles.sectionText}>{researchData.sections.motivation.content}</p>
                  </div>

                  <div className={styles.sectionBlock}>
                    <h4 className={styles.sectionTitle}>{researchData.sections.challenges.title}</h4>
                    <ul className={styles.bulletList}>
                      {researchData.sections.challenges.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.sectionBlock}>
                    <h4 className={styles.sectionTitle}>{researchData.sections.contributions.title}</h4>
                    <ul className={styles.bulletList}>
                      {researchData.sections.contributions.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.sectionBlock}>
                    <h4 className={styles.sectionTitle}>{researchData.sections.learnings.title}</h4>
                    <ul className={styles.bulletList}>
                      {researchData.sections.learnings.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className={styles.toggleRow}>
                <button
                  className={styles.toggleBtn}
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "Hide Detailed Research Journey ▲" : "Explore Detailed Research Journey ▼"}
                </button>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.actions}>
                <a
                  href={researchData.ieeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryLink}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  IEEE Xplore
                </a>

                <a
                  href={researchData.kaggleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.238-.036.27l-6.555 6.344 6.836 8.507c.095.104.117.208.075.305z"/>
                  </svg>
                  Kaggle Code
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
