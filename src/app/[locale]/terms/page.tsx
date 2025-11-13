'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function TermsPage() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    document.cookie = 'terms_accepted=true; path=/; max-age=31536000; SameSite=Lax';
    window.location.href = '/';
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          AI NEWSROOM -SIVUSTON KÄYTTÖEHDOT
        </h1>
        
        <div className={styles.contentArea}>
          <p className={styles.text}>
            Olet siirtymässä AI Newsroom -sivustolle, joka on GPT-LABin ja Tampereen yliopiston kokeilu 
            tekoälyn käytöstä ajankohtaisen uutisoinnin tuottamisessa. Tekoäly tuottaa sivuston uutiset 
            reaaliajassa, mukaan lukien haastattelut, tekstit ja kuvat. Taustatietona käytetään ePressin 
            tiedotteita. Sisältöä ei tarkasteta ennakolta ihmisvoimin, eikä sivusto ole journalistinen 
            toimitus vaan tutkimus- ja kehitystarkoituksiin rakennettu testiympäristö.
          </p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>SISÄLLÖN LUONNE</h2>
            <p className={styles.text}>
              Kaikki AI Newsroomin sisältö on tekoälyn luomaa. Tämä tarkoittaa, että sivustolla voi esiintyä 
              virheitä, väärinymmärryksiä, hallusinointia, puutteellista taustoitusta sekä vanhentunutta tai 
              harhaanjohtavaa tietoa. Sisältöä ei ole tarkastettu oikeellisuuden, tasapainoisuuden eikä 
              journalististen standardien näkökulmasta. Tietoja ei tule pitää luotettavina ilman itsenäistä 
              tarkistamista alkuperäislähteistä ja muista luotettavista lähteistä.
            </p>
            <p className={styles.text}>
              <strong>Myös kaikki sivustolla näkyvät kuvat ovat tekoälyn generoimia.</strong> Ne eivät ole 
              valokuvia todellisista tapahtumista tai henkilöistä, vaan tekoälyn tulkintoja ja visualisointeja 
              uutisaiheista. Kuvat voivat olla epätarkkoja, harhaanjohtavia tai sisältää virheellisiä yksityiskohtia.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>VASTUUNRAJOITUS</h2>
            <p className={styles.text}>
              Sivusto ja sen sisältö tarjotaan &quot;sellaisenaan&quot; ilman minkäänlaista takuuta. GPT-LAB, 
              Tampereen yliopisto tai muut hankkeen osapuolet eivät vastaa sisällön virheistä, puutteista, 
              tulkinnanvaraisuuksista eivätkä mistään vahingoista tai menetyksistä, jotka aiheutuvat sivuston 
              käytöstä tai sen perusteella tehdyistä ratkaisuista. Sivuston tarkoitus on ainoastaan demonstroida 
              ja tutkia tekoälyn toimintaa journalismin kontekstissa.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>HYVÄKSYMINEN</h2>
            <p className={styles.text}>
              Jatkamalla sivustolle vahvistat ymmärtäneesi, että sisältö on tekoälyn tuottamaa, voi olla 
              virheellistä eikä sitä ole tarkastettu ihmisvoimin, ja hyväksyt, ettei palvelun tuottaja vastaa 
              sivuston käytöstä aiheutuvista seurauksista.
            </p>
          </div>
        </div>

        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className={styles.checkbox}
            />
            <span>Olen lukenut, ymmärtänyt ja hyväksynyt käyttöehdot.</span>
          </label>
        </div>

        <button
          onClick={handleAccept}
          disabled={!accepted}
          className={`${styles.button} ${accepted ? styles.buttonEnabled : styles.buttonDisabled}`}
        >
          Jatka sivustolle
        </button>
      </div>
    </div>
  );
}