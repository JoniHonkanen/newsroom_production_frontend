import styles from "./LogoHologram.module.css";

interface LogoHologramProps {
  stickyActive?: boolean;
}

export default function LogoHologram({ stickyActive }: LogoHologramProps) {
  return (
    <div className={styles.logoWrapper}>
      <h1 className={styles.logoText}>AI Newsroom</h1>
      <p className={`${styles.subtitle} ${stickyActive ? styles.hidden : ""}`}>
        Sivun sisältö on tuotettu tekoälyavusteisesti
      </p>
    </div>
  );
}
