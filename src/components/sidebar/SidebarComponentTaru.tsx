import Image from "next/image";
import styles from "./SidebarComponent.module.css";

export default function SidebarComponentTaru() {
  return (
    <aside className={styles.sidebar} aria-label="Tutkimuskeskus Taru mainos">
      <div className={styles.sidebarInner}>
        <div className={styles.logoSection}>
          <Image
            src="/taru_image2.png"
            alt="Taru Logo"
            width={200}
            height={80}
            className={styles.logotaru2}
          />
        </div>
        <div className={styles.infoSection}>
          <h3 className={styles.title}>Tutkimuskeskus Taru</h3>

          <p className={styles.taglineTaru}>
            Viestintätieteiden tutkimuskeskus
          </p>

          <p className={styles.description}>
            Tutkimuskeskus Taru tutkii yhteiskunnallisia ja kulttuurisia
            ilmiöitä sekä analysoi niiden historiaa ja muutossuuntia viestinnän,
            median ja taiteen näkökulmista kehittäen ilmiöalueen teoriaa,
            metodologiaa ja käytäntöjä.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>📚</span>
              <span className={styles.featureText}>
                Yhteiskunnallinen tutkimus
              </span>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>🎨</span>
              <span className={styles.featureText}>
                Kulttuuriset näkökulmat
              </span>
            </div>
          </div>

          <a
            href="https://research.tuni.fi/viestintatieteiden-tutkimuskeskus/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButtonTaru}
            aria-label="Tutustu Tutkimuskeskus Taruun"
          >
            Tutustu Taruun
          </a>
        </div>

        <div className={styles.footer}>
          <Image
            src="/tampereen_yliopisto.png"
            alt="Tampereen yliopiston logo"
            width={150}
            height={50}
            className={styles.logotaru}
          />
        </div>
      </div>
    </aside>
  );
}
