import Head from 'next/head';
import './about.css';

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Tekoälyn johtama uutistoimitus",
    "description": "Tampereen yliopiston tutkimusprojekti tekoälyn mahdollisuuksista ja rajoista journalismissa",
    "url": "https://www.tuni.fi/fi/tutkimus/tekoalyn-johtama-uutistoimitus",
    "sponsor": {
      "@type": "Organization",
      "name": "Media-alan tutkimussäätiö",
      "url": "https://www.mediaalantutkimussaatio.fi/"
    },
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "Tampereen yliopisto",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tampere",
        "addressCountry": "FI"
      },
      "url": "https://www.tuni.fi"
    },
    "startDate": "2024",
    "endDate": "2025",
    "funding": {
      "@type": "MonetaryGrant",
      "amount": "98000",
      "currency": "EUR"
    },
    "researcher": [
      {
        "@type": "Person",
        "name": "Pekka Abrahamsson",
        "jobTitle": "Professori, ohjelmistotekniikka",
        "affiliation": "Tampereen yliopisto"
      },
      {
        "@type": "Person", 
        "name": "Laura Saarikoski",
        "jobTitle": "Työelämäprofessori, journalistiikka",
        "affiliation": "Tampereen yliopisto"
      },
      {
        "@type": "Person",
        "name": "Laura Ahva", 
        "jobTitle": "Apulaisprofessori, journalistiikka",
        "affiliation": "Tampereen yliopisto"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Tekoälyn johtama uutistoimitus - Tampereen yliopiston AI-journalismi tutkimusprojekti</title>
        <meta name="description" content="Tampereen yliopiston poikkitieteellinen tutkimusprojekti selvittää tekoälyn rajat ja mahdollisuudet journalismissa. 98 000€ rahoitus Media-alan tutkimussäätiöltä 2024-2025." />
        <meta name="keywords" content="tekoäly journalismi, AI uutistoimitus, Tampere yliopisto, GPT-Lab, media tutkimus, ohjelmistotekniikka, journalistiikan tutkimus" />
        <meta name="geo.region" content="FI-16" />
        <meta name="geo.placename" content="Tampere" />
        <meta name="geo.position" content="61.4978;23.7610" />
        <meta name="ICBM" content="61.4978, 23.7610" />
        <meta property="og:title" content="Tekoälyn johtama uutistoimitus - AI-journalismi tutkimus" />
        <meta property="og:description" content="Tampereen yliopiston tutkimusprojekti tekoälyn mahdollisuuksista journalismissa" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fi_FI" />
        <link rel="canonical" href="https://www.tuni.fi/fi/tutkimus/tekoalyn-johtama-uutistoimitus" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <article>
        <div className="page-intro">
          <h1>Tekoälyn johtama uutistoimitus</h1>
          <p className="subtitle">
            Tampereen yliopiston poikkitieteellinen tutkimusprojekti tekoälyn mahdollisuuksista ja rajoista journalismissa
          </p>
          <div className="meta-info">
            <span>📍 Tampere, Suomi</span>
            <span>🏛️ Tampereen yliopisto</span>
            <span>📅 2024-2025</span>
          </div>
        </div>

        <nav className="page-nav">
          <h2>Sivun sisällys</h2>
          <ul>
            <li><a href="#projekti">Projektin kuvaus</a></li>
            <li><a href="#tavoitteet">Tavoitteet</a></li>
            <li><a href="#tutkimusryhma">Tutkimusryhmä</a></li>
            <li><a href="#toteutus">Toteutus</a></li>
            <li><a href="#yhteistyo">Yhteistyö</a></li>
          </ul>
        </nav>

        <section id="projekti">
          <h2>Mikä on projekti?</h2>
          <p>
            <strong>Tekoälyn johtama uutistoimitus</strong> on <a href="https://www.tuni.fi" target="_blank" rel="noopener">Tampereen yliopiston</a> 
            informaatioteknologian ja viestinnän tiedekunnan tutkimusprojekti, jossa rakennetaan kokonaan tekoälyllä 
            toimiva, vuorokauden ympäri toimiva uutistoimitus. Projektissa tekoäly hoitaa kaikki toimituksen eri roolit 
            päätoimittajasta toimittajaan ja tuottaa uutisia tarvittaessa kymmenillä eri kielillä.
          </p>
          <p>
            Tämä <strong>poikkitieteellinen tutkimus</strong> yhdistää ohjelmistotekniikan ja journalistiikan tieteenalat 
            selvittääkseen tekoälyn kyvyn rajat verrattuna ihmiseen vuonna 2025. Kysymys kuuluu: mihin suorituksiin 
            tekoäly pystyy toimitustyön eri rooleissa yhtä laadukkaasti tai luotettavasti kuin ihminen, ja missä 
            ihmisen lisäarvo on kiistaton?
          </p>
        </section>

        <section id="tavoitteet">
          <h2>Tutkimustavoitteet ja keskeiset kysymykset</h2>
          
          <div className="opportunities-challenges">
            <div className="opportunities">
              <h3>Tekoälyn mahdollisuudet</h3>
              <ul>
                <li><strong>Paikallinen seuranta:</strong> Syrjäseutujen lautakuntatyön dokumentointi</li>
                <li><strong>Globaali ulottuvuus:</strong> Ulkomaanuutisten tuottaminen paikoista, joihin ei ole varaa lähettää kirjeenvaihtajaa</li>
                <li><strong>24/7 toiminta:</strong> Keskeytymatön uutisseuranta ja -tuotanto</li>
                <li><strong>Monikielisyys:</strong> Sisällön tuottaminen kymmenillä kielillä</li>
              </ul>
            </div>
            
            <div className="challenges">
              <h3>Kriittiset haasteet</h3>
              <ul>
                <li><strong>Journalistiset standardit:</strong> Eettisten periaatteiden noudattaminen</li>
                <li><strong>Vastuukysymykset:</strong> Kuka vastaa virheistä tai väärästä tiedosta?</li>
                <li><strong>Yhteiskunnalliset vaikutukset:</strong> Median demokratiatehtävän toteutuminen</li>
                <li><strong>Laadunvarmistus:</strong> Luotettavuuden ja tarkkuuden mittaaminen</li>
              </ul>
            </div>
          </div>
          
          <div className="research-question">
            <h3>Keskeinen tutkimuskysymys</h3>
            <blockquote>
              "Toimitustehtävien siirto tekoälylle on jo käynnissä suomalaisissa mediataloissa, mutta sen seuraukset 
              ovat selvittämättä riippumattoman tutkimuksen keinoin. Tähän vastataan tässä projektissa."
            </blockquote>
          </div>
        </section>

        <section id="tutkimusryhma">
          <h2>Asiantunteva tutkimusryhmä</h2>
          <p>
            Projektia johtavat <strong>kaksi kokeneutta professoria</strong> eri tieteenaloilta, mikä varmistaa 
            tutkimuksen poikkitieteellisyyden ja syvällisyyden.
          </p>
          
          <div className="team-grid">
            <div className="team-leaders">
              <h3>Projektin johtajat</h3>
              <div className="person">
                <strong>Prof. Pekka Abrahamsson</strong>
                <span>Ohjelmistotekniikka • <a href="https://gpt-lab.eu" target="_blank" rel="noopener">GPT-Lab</a> perustaja</span>
              </div>
              <div className="person">
                <strong>Prof. Laura Saarikoski</strong>
                <span>Journalistiikan työelämäprofessori</span>
              </div>
            </div>
            
            <div className="team-members">
              <h3>Tutkimustiimi</h3>
              <div className="person">
                <strong>Apul.prof. Laura Ahva</strong>
                <span>Journalistiikka • <a href="mailto:laura.ahva@tuni.fi">laura.ahva@tuni.fi</a></span>
              </div>
              <div className="person">
                <strong>Riku Laine</strong>
                <span>Tutkimusassistentti</span>
              </div>
              <div className="person">
                <strong>Jaakko Suorsa</strong>
                <span>Tutkimusassistentti</span>
              </div>
            </div>
          </div>
          
          <div className="advisors">
            <h4>Neuvonantajat</h4>
            <p>Sami Dadu ja Laura Saarikoski toimivat projektin neuvonantajina.</p>
          </div>
        </section>

        <section id="toteutus">
          <h2>Tieteellinen toteutus</h2>
          
          <div className="implementation-methods">
            <div className="journalism-research">
              <h3>Journalismin tutkimus</h3>
              <p>
                Journalistista työtä mallinnetaan <strong>systemaattisina prosessikuvauksina</strong> syvähaastatteluiden avulla. 
                Tutkimus pureutuu käytännön työhön, päätöksentekoprosesseihin ja eettiseen harkintaan.
              </p>
              <ul>
                <li>Haastattelut alan ammattilaisilta</li>
                <li>Eettisen harkinnan prosessien mallintaminen</li>
                <li>Tietolähteiden arvioinnin systematisointi</li>
                <li>Uutiskriteerien dokumentointi</li>
              </ul>
            </div>
            
            <div className="technical-development">
              <h3>Tekninen kehitys</h3>
              <p>
                Rakennetaan <strong>automaattinen artikkelinkirjoitusjärjestelmä</strong> ja visuaalinen 
                hallintaympäristö tekoälyautomatiikan hallitsemiseen. Järjestelmä integroi useita tiedonkeruumenetelmiä.
              </p>
              <ul>
                <li>Internet-lähteiden automaattinen analysointi</li>
                <li>Monimodaalisten syötteiden käsittely</li>
                <li>Journalistien työkalujen kehittäminen</li>
                <li>Laadunvarmistuksen automatisoiminen</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="yhteistyo">
          <h2>Yhteistyöverkosto</h2>
          
          <div className="partners">
            <div className="partner">
              <h3><a href="https://gpt-lab.eu" target="_blank" rel="noopener">GPT-Lab</a></h3>
              <p>
                Tampereen yliopistossa toimiva kansainvälinen laboratorio, joka keskittyy 
                <strong>generatiivisen tekoälyn käytännöllisiin sovelluksiin</strong> ohjelmistotekniikassa.
              </p>
              <p className="additional-info">
                Toiminta laajentuu GPT-Lab Nordics ja GPT-Lab Africa -haaroihin.
              </p>
            </div>
            
            <div className="partner">
              <h3><a href="https://www.mediaalantutkimussaatio.fi" target="_blank" rel="noopener">Media-alan tutkimussäätiö</a></h3>
              <p>
                Projektin <strong>98 000 euron rahoittaja</strong>. Hanke on osa säätiön vuoden 2024 
                tutkimusteemaa "tekoälyn johtaminen mediatalossa".
              </p>
              <p className="additional-info">
                <a href="https://www.mediaalantutkimussaatio.fi/ajankohtaista/myonnetyt-apurahat/tampereen-yliopistolle-98-000-euroa-tutkimustukea-teemahankkeelle/" 
                   target="_blank" rel="noopener">
                  Lue lisää rahoituspäätöksestä
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="timeline-impact">
          <h2>Projektin aikataulu ja vaikuttavuus</h2>
          <div className="stats">
            <div className="stat">
              <h3>Kesto</h3>
              <span>2024-2025</span>
            </div>
            <div className="stat">
              <h3>Rahoitus</h3>
              <span>98 000€</span>
            </div>
            <div className="stat">
              <h3>Julkaisu</h3>
              <span>2025 loppu</span>
            </div>
          </div>
          <p>
            Tulokset julkaistaan vuoden 2025 lopussa ja tarjoavat käytännöllistä, 
            tutkittua tietoa tekoälyn hyödyntämisestä journalismissa.
          </p>
        </section>

        <section className="expected-results">
          <h2>Odotetut tulokset</h2>
          <p>
            Projektin lopputuloksena syntyy <strong>kattava analyysi tekoälyn kyvyistä</strong> 
            toimitusprosessin eri vaiheissa perustuen käytännön kokeiluihin:
          </p>
          <ul>
            <li><strong>Mitä tekoäly pystyy tekemään</strong> laadukkaasti ja luotettavasti</li>
            <li><strong>Mihin tekoäly ei pysty</strong> tai ei sovellu</li>
            <li><strong>Suositukset käytännön toteutukseen</strong> media-alan toimijoille</li>
            <li><strong>Eettiset ja juridiset suuntaviivat</strong> tekoälyn käytölle journalismissa</li>
          </ul>
          <p className="final-note">
            Tutkimus tarjoaa riippumatonta, tieteellistä näkökulmaa aiheeseen, joka on jo käytännössä 
            muuttamassa suomalaista mediamaisemaa.
          </p>
        </section>

        <footer>
          <p>
            Lisätietoja: <a href="https://www.tuni.fi/fi/tutkimus/tekoalyn-johtama-uutistoimitus">
              www.tuni.fi/fi/tutkimus/tekoalyn-johtama-uutistoimitus
            </a>
          </p>
          <p>
            📍 Tampereen yliopisto, Informaatioteknologian ja viestinnän tiedekunta, Tampere, Suomi
          </p>
        </footer>
      </article>
    </>
  );
}