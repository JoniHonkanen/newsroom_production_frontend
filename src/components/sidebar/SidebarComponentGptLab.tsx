import Image from "next/image";
import styles from "./SidebarComponent.module.css";

export default function SidebarComponentGptLab() {
  return (
    <aside className={styles.sidebar} aria-label="GPT-Lab mainos">
      <div className={styles.sidebarInner}>
        <div className={styles.logoSection}>
          <Image
            src="/gpt_lab.png"
            alt="GPT-Lab Logo"
            width={80}
            height={80}
            className={styles.logo}
          />
        </div>

        <div className={styles.infoSection}>
          <h3 className={styles.title}>GPT-Lab</h3>

          <p className={styles.tagline}>
            Muuttamassa ohjelmistokehityksen tulevaisuutta generatiivisella
            tekoälyllä
          </p>

          <p className={styles.description}>
            Rakennamme tekoälyratkaisuja, jotka ratkaisevat todellisia ongelmia.
            Yhteistyössä yritysten, tutkijoiden ja opiskelijoiden kanssa luomme
            vaikuttavia innovaatioita.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>🚀</span>
              <span className={styles.featureText}>Käytännön AI-sovellukset</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>🤝</span>
              <span className={styles.featureText}>Yrityskumppanuudet</span>
            </div>
          </div>

          <a
            href="https://gpt-lab.eu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            aria-label="Tutustu GPT-Labiin"
          >
            Tutustu GPT-Labiin
          </a>
        </div>

        <div className={styles.footer}>
          <p className={styles.location}>Tampereen yliopisto</p>
        </div>
      </div>
    </aside>
  );
}
