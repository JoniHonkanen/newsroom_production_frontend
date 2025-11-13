import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.mainTitle}>Tietoa projektista</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mikä projekti?</h2>
          <p className={styles.text}>
            Tekoälyn johtama uutistoimitus on Tampereen yliopiston Informaatioteknologian ja viestinnän 
            tiedekunnan tutkimusprojekti, jossa rakennetaan ja testataan kokonaan tekoälyllä toimivaa, 
            vuorokauden ympäri toimivaa uutistoimitusta. Projektissa tekoäly hoitaa päätoimittajan, 
            uutispäällikön ja toimittajan roolit. Se tuottaa myös kuvia.
          </p>
          <p className={styles.text}>
            Tämä poikkitieteellinen tutkimus yhdistää ohjelmistotekniikan ja journalistiikan tieteenalat 
            selvittääkseen tekoälyn kykyjä ja rajoja. Kysymys kuuluu: mihin suorituksiin tekoäly pystyy 
            toimitustyön eri rooleissa yhtä laadukkaasti tai luotettavasti kuin ihminen, ja missä ihmisen 
            lisäarvo on kiistaton?
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mitä on tehty?</h2>
          <p className={styles.text}>
            Hankkeessa on kehitetty tekoälypohjaista ohjelmistoa, joka tuottaa uutisia. Uutisten raaka-aineena 
            käytetään <a href="https://www.epressi.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>ePressi-tiedotepalvelun</a> materiaaleja 
            RSS-syötteen kautta. Ohjelmisto valikoi ja lähettää jatkokehittelyyn tiedotteita, joiden pohjalta 
            koostetaan uutisia hakemalla verkosta lisätietoa, generoimalla jatkokysymyksiä sekä tekemällä 
            sähköposti- ja puhelinhaastatteluita.
          </p>
          <p className={styles.text}>
            Tämän ohjelmiston kehitystyön ja toimivuuden kautta puntaroidaan sekä tekoälyn tuomaa lisäarvoa 
            että sen tuottamia riskejä journalistiselle prosessille.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tutkimusryhmä</h2>
          <ul className={styles.teamList}>
            <li>Pekka Abrahamsson, ohjelmistotekniikan professori</li>
            <li>Laura Ahva, journalistiikan professori</li>
            <li>Joni Honkanen, tutkimusassistentti</li>
            <li>Riku Laine, tutkimusassistentti</li>
            <li>Jaakko Suorsa, tutkimusassistentti</li>
            <li>Sami Dadu, neuvonantaja</li>
            <li>Laura Saarikoski, neuvonantaja</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Journalistiikan tiimin rooli</h2>
          <p className={styles.text}>
            Journalistista työtä on mallinnettu prosessikuvauksina haastatteluiden avulla. Haastatteluiden 
            avulla on pureuduttu toimitusten käytännön työhön, päätöksentekoprosesseihin ja eettiseen harkintaan 
            ja arvioitu, mitä kaikkea tietoa journalistisesta prosessista täytyy viedä mukaan ohjelmistokehitykseen. 
            Journalismin tutkijat myös arvioivat tuotettuja uutisia ja niiden journalistisuutta ja antavat suosituksia.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ohjelmistotekniikan tiimin rooli</h2>
          <p className={styles.text}>
            Ohjelmistotekniikan tiimi on rakentanut automaattisen artikkelinkirjoitusjärjestelmän ja visuaalisen 
            hallintaympäristön tekoälyautomatiikan hallitsemiseen. Järjestelmä integroi useita tiedonkeruumenetelmiä. 
            Se on myös kehittänyt ja tutkinut työnkulun automatisointia tekoälyavusteisesti.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projektin aikataulu ja rahoitus</h2>
          <p className={styles.text}>
            Hanke toteutetaan vuoden 2025 aikana. Se on saanut rahoituksensa <a href="https://www.mediaalantutkimussaatio.fi/" target="_blank" rel="noopener noreferrer" className={styles.link}>Media-alan tutkimussäätiöltä</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tulokset</h2>
          <p className={styles.text}>
            Projektin lopputuloksena syntyy analyysi tekoälyn kyvyistä toimitusprosessin eri vaiheissa 
            perustuen käytännön kokeiluihin. Hanke antaa myös suosituksia media-alan toimijoille.
          </p>
        </section>
      </div>
    </div>
  );
}