import Link from "next/link";
import styles from "./BlogPreview.module.css";
import SectionHeading from "../shared/SectionHeading";
import AnimateOnScroll from "../shared/AnimateOnScroll";
import Button from "../shared/Button";

export default function BlogPreview({ posts = [] }) {
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <AnimateOnScroll>
          <SectionHeading
            title="Blog & Insights"
            subtitle="Sharing my learnings in ML, AI, and data science — one post at a time"
          />
        </AnimateOnScroll>

        <div className={styles.grid}>
          {latestPosts.map((post, index) => (
            <AnimateOnScroll key={post.slug} delay={index * 120}>
              <Link href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.dateBadge}>
                    <span className={styles.dateDay}>
                      {new Date(post.date).getDate()}
                    </span>
                    <span className={styles.dateMonth}>
                      {new Date(post.date).toLocaleString("default", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>

                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <div className={styles.tags}>
                  {post.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.readMore}>
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {posts.length > 3 && (
          <AnimateOnScroll delay={400}>
            <div className={styles.viewAll}>
              <Button href="/blog" variant="outline">
                View All Posts
              </Button>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
