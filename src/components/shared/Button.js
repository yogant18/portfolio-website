import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  download,
  className = "",
  ...props
}) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolvedHref =
    href && href.startsWith("/") && !href.startsWith("//") && basePath
      ? `${basePath}${href}`
      : href;

  if (href) {
    return (
      <a
        href={resolvedHref}
        className={classNames}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
