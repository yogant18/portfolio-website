import styles from "./Resume.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import Button from "../shared/Button";
import { experience } from "../../data/experience";

export default function Resume() {
  const workExperience = experience.filter((e) => e.type === "work");
  const education = experience.filter((e) => e.type === "education");

  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            title="Experience & Education"
            subtitle="Internship experience and academic background in Data Science and Machine Learning"
          />
        </AnimateOnScroll>

        <div className={styles.downloadRow}>
          <AnimateOnScroll delay={100}>
            <Button href="/resume.pdf" variant="primary" download>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Download Resume (PDF)
            </Button>
          </AnimateOnScroll>
        </div>

        <div className={styles.timelineGrid}>
          {/* Work Experience Column */}
          <div className={styles.timelineColumn}>
            <AnimateOnScroll>
              <h3 className={styles.columnTitle}>
                <span className={styles.columnIcon}>💼</span>
                Work &amp; Internships
              </h3>
            </AnimateOnScroll>
            <div className={styles.timeline}>
              {workExperience.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 150}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineCard}>
                      <span className={styles.period}>{item.period}</span>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                      <p className={styles.organization}>{item.organization}</p>
                      {item.description && (
                        <p className={styles.description}>{item.description}</p>
                      )}
                      <ul className={styles.highlights}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                      {item.skills && item.skills.length > 0 && (
                        <div className={styles.skillTags}>
                          {item.skills.map((skill) => (
                            <span key={skill} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className={styles.timelineColumn}>
            <AnimateOnScroll>
              <h3 className={styles.columnTitle}>
                <span className={styles.columnIcon}>🎓</span>
                Education
              </h3>
            </AnimateOnScroll>
            <div className={styles.timeline}>
              {education.map((item, index) => (
                <AnimateOnScroll key={index} delay={index * 150 + 200}>
                  <div className={styles.timelineItem}>
                    <div className={`${styles.timelineDot} ${styles.dotEducation}`}></div>
                    <div className={styles.timelineCard}>
                      <span className={styles.period}>{item.period}</span>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                      <p className={styles.organization}>{item.organization}</p>
                      {item.description && (
                        <p className={styles.description}>{item.description}</p>
                      )}
                      <ul className={styles.highlights}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                      {item.skills && item.skills.length > 0 && (
                        <div className={styles.skillTags}>
                          {item.skills.map((skill) => (
                            <span key={skill} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
