import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "../../../lib/blog";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | YourName Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <main className={styles.postPage}>
        <div className={styles.container}>
          <h1>Post not found</h1>
          <Link href="/blog">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.postPage}>
      <div className={styles.container}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>

        <article className={styles.article}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <time className={styles.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>

            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        <div className={styles.postFooter}>
          <Link href="/blog" className={styles.backBtn}>
            ← All Posts
          </Link>
        </div>
      </div>
    </main>
  );
}
