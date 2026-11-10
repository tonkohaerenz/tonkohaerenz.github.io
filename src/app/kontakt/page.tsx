// app/kontakt/page.tsx
export default function KontaktPage() {
  return (
    <section className="content-section-half">
      <header>
        <h1>Kontakt & Impressum</h1>
        <p>Melden Sie sich gern mit Fragen oder Anregungen zum Projekt bei uns.</p>
      </header>

      <div className="card">
        <div>
          <h2>Projektadressen</h2>
          <h3>Standort Bonn</h3>
          <p>
            Abteilung für Germanistische Mediävistik<br />
            Institut für Germanistik, Vergleichende Literatur- und Kulturwissenschaft<br />
            Rheinische Friedrich-Wilhelms-Universität Bonn<br />
            Rabinstr. 8<br />
            D-53111 Bonn<br />
          </p>
          <br/>
          <h3>Standort Frankfurt</h3>
          <p>
            Goethe-Universität Frankfurt a. M.<br />
            Fachbereich 10 / Neuere Philologien<br />
            Institut für dt. Literatur und ihre Didaktik PF 17<br />
            Abteilung für Ältere deutsche Literatur<br />
            Norbert-Wollheim-Platz 1<br />
            60323 Frankfurt am Main<br />
          </p>
          <br/>
          <h3>Standort Darmstadt</h3>
          <p>
            Technische Universität Darmstadt<br />
            Institut für Sprach- und Literaturwissenschaft<br />
            Residenzschloss 1<br />
            64283 Darmstadt
          </p>
        </div>
      </div>
      <div className="card">
        <div>
          <h2>E-Mail</h2>
          <h3>Projektorganisation</h3>
          <p>Wenden Sie sich bitte an Benedikt Gnosa:<br/>
            <a href="mailto:benedikt.gnosa@uni-bonn.de" className="text-blue hover:underline">
              benedikt.gnosa@uni-bonn.de
            </a>
          </p>
          <br/>
          <h3>Editionskonzept</h3>
          <p>Wenden Sie sich bitte an Malin Kipke:<br/>
            <a href="mailto:kipke@em.uni-frankfurt.de" className="text-blue hover:underline">kipke@em.uni-frankfurt.de</a>
          </p>
          <br/>
          <h3>Digitale Infrastruktur</h3>
          <p>Wenden Sie sich bitte an Leonie Weiß:<br/>
            <a href="mailto:weiss@linglit.tu-darmstadt.de" className="text-blue hover:underline">weiss@linglit.tu-darmstadt.de</a>
          </p>
        </div>
      </div>
    </section>
  );
}