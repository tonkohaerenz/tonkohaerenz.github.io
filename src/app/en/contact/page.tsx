// app/kontakt/page.tsx
export default function KontaktPage() {
  return (
    <section className="content-section-half">
      <header>
        <h1>Contact & Legal Notice</h1>
        <p>Please feel free to contact us with any questions or suggestions regarding the project.</p>
      </header>
      <div className="card">
        <div>
          <h2>Project addresses</h2>
          <h3>Facility Bonn</h3>
          <p>
            Abteilung für Germanistische Mediävistik<br />
            Rheinische Friedrich-Wilhelms-Universität Bonn<br />
            Institut für Germanistik, Vergleichende Literatur- und Kulturwissenschaft<br />
            Rabinstr. 8<br />
            D-53111 Bonn<br />
          </p>
          <br/>
          <h3>Facility Frankfurt</h3>
          <p>
            Goethe-Universität Frankfurt a. M.<br />
            Fachbereich 10 / Neuere Philologien<br />
            Institut für dt. Literatur und ihre Didaktik PF 17<br />
            Abteilung für Ältere deutsche Literatur<br />
            Norbert-Wollheim-Platz 1<br />
            60323 Frankfurt am Main<br />
          </p>
          <br/>
          <h3>Facility Darmstadt</h3>
          <p>
            Technical University of Darmstadt<br />
            Institute of Linguistics and Literary Studies<br />
            Residenzschloss 1<br />
            64283 Darmstadt
          </p>
        </div>
      </div>

      <div className="card">
        <div>
          <h2>E-Mail</h2>
          <h3>Project organization</h3>
          <p>Please contact Benedikt Gnosa:<br/>
            <a href="mailto:benedikt.gnosa@uni-bonn.de" className="text-blue hover:underline">
              benedikt.gnosa@uni-bonn.de
            </a>
          </p>
          <br/>
          <h3>Editorial concept</h3>
          <p>Please contact Malin Kipke:<br/>
            <a href="mailto:kipke@em.uni-frankfurt.de" className="text-blue hover:underline">kipke@em.uni-frankfurt.de</a>
          </p>
          <br/>
          <h3>Digital infrastructure</h3>
          <p>Please contact Leonie Weiß:<br/>
            <a href="mailto:weiss@linglit.tu-darmstadt.de" className="text-blue hover:underline">weiss@linglit.tu-darmstadt.de</a>
          </p>
        </div>
      </div>
    </section>
  );
}