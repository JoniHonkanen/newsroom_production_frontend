import Image from "next/image";
import styles from "./AdBanner.module.css";

export default function AdBanner() {
  return (
    <section className={styles.banner} aria-labelledby="ai-ad-banner-title">
      <div className={styles.inner}>
        <div className={styles.branding}>
          {/* <span className={styles.badge}>Mainos</span> */}
          <h2 id="ai-ad-banner-title" className={styles.title}>
            Tekoälyn tuottamaa ajankohtaista uutisointia
          </h2>
          <p className={styles.description}>
            Newsroom on GPT-LABin ja Tampereen yliopiston kehittämä kokeilu,
            jossa tekoäly tuottaa uutisia reaaliajassa – haastattelee,
            kirjoittaa ja kuvit­taa artikkelit itse.
          </p>
          <p className={styles.caption}>Uutiset tuotettu tekoälyn avulla</p>
        </div>

        <div className={styles.logos}>
          <Image
            src="/tampereen_yliopisto.png"
            alt="Tampereen yliopisto logo"
            width={220}
            height={150}
            className={styles.logo}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
