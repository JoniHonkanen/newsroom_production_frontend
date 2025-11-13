import styles from "./Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <section className={styles.container} aria-labelledby="ai-disclaimer-title">
      <div className={styles.inner}>
        <h3 id="ai-disclaimer-title" className={styles.title}>
          DISCLAIMER
        </h3>
        <p className={styles.text}>
          AI Newsroomin sisältö on kokonaan tekoälyn tuottamaa. Sivusto on
          kokeellinen alusta, jonka tarkoituksena on testata tekoälyn
          soveltuvuutta journalistiseen tuotantoon. Koska sisältö syntyy
          automaattisesti eikä sitä tarkisteta ihmisvoimin, sivustolla voi
          esiintyä virheitä tai perusteettomia väitteitä.
        </p>
      </div>
    </section>
  );
}
