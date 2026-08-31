import styles from "./SectionHeading.module.css";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.accent}>
        <span className={styles.accentLine}></span>
        <span className={styles.accentDot}></span>
        <span className={styles.accentLine}></span>
      </div>
    </div>
  );
}
