import styles from "./Footer.module.css";
import { socialLinks } from "../../data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.logoIcon}>⟨</span>
              <span className={styles.logoText}>Yogant</span>
              <span className={styles.logoIcon}>⟩</span>
            </span>
            <p className={styles.tagline}>
              Aspiring Data Scientist &amp; ML Engineer · Building data-driven solutions through machine learning, AI, and research.
            </p>
          </div>

          <div className={styles.socialRow}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.name}
                title={link.name}
              >
                {link.name.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Yogant Patil. All rights reserved.
          </p>
          <p className={styles.builtWith}>
            Built with{" "}
            <span className={styles.heart}>♥</span> using Next.js &
            deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
