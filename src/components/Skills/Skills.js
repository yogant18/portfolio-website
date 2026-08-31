"use client";

import { useState } from "react";
import styles from "./Skills.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import { skills } from "../../data/skills";

const categories = Object.keys(skills);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayCategories =
    activeCategory === "All" ? categories : [activeCategory];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            title="Technical Skills & Competencies"
            subtitle="Core capabilities across Data Science, Machine Learning, Data Analytics, AI, and Research"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeCategory === "All" ? styles.tabActive : ""
              }`}
              onClick={() => setActiveCategory("All")}
            >
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.tab} ${
                  activeCategory === category ? styles.tabActive : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className={styles.categoriesWrapper}>
          {displayCategories.map((category, catIndex) => (
            <div key={category} className={styles.categorySection}>
              {activeCategory === "All" && (
                <h3 className={styles.categoryTitle}>
                  <span className={styles.categoryDot}></span>
                  {category}
                </h3>
              )}
              <div className={styles.skillsGrid}>
                {skills[category]?.map((skill, index) => (
                  <AnimateOnScroll
                    key={`${category}-${skill.name}`}
                    delay={index * 40}
                  >
                    <div className={styles.skillCard}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillIcon}>{skill.icon}</span>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>{skill.name}</span>
                          {skill.tag && (
                            <span className={styles.skillTag}>{skill.tag}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
