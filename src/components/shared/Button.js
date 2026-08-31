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

  if (href) {
    return (
      <a
        href={href}
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
