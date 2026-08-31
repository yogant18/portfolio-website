import Link from "next/link";
import { getAllPosts } from "../../lib/blog";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | YourName — ML & AI Insights",
  description:
    "Articles and insights on machine learning, artificial intelligence, generative AI, and data science by YourName.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/#blog" className={styles.backLink}>
            ← Back to Home
          </Link>
          <h1 className={styles.title}>Blog & Insights</h1>
          <p className={styles.subtitle}>
            Deep dives into ML, AI, GenAI, and data science — learnings,
            tutorials, and project write-ups.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <div className={styles.cardMeta}>
                <span className={styles.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className={styles.readMore}>
                Read Article →
              </span>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className={styles.empty}>
            <p>No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}
