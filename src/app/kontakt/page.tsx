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
          <h2>Projektadresse</h2>
          <p>
            Muster-Universität<br />
            Institut für Digitale Geisteswissenschaften<br />
            Musterstraße 42<br />
            12345 Musterstadt
          </p>
        </div>

        <div>
          <h2>E-Mail</h2>
          <p>Bei organisatorischen Fragen und Anregungen wenden Sie sich bitte an Benedikt Gnosa:<br/>
            <a href="mailto:benedikt.gnosa@uni-bonn.de" className="text-blue hover:underline">
              benedikt.gnosa@uni-bonn.de
            </a>
          </p>
          <br/>
          <p>Bei Fragen und Anregungen zu unserem editorischen Vorgehen sowie den entstehenden Fassungen wenden Sie sich bitte an Malin Kipke:<br/>
            <a href="mailto:malinkipke@aol.com" className="text-blue hover:underline">malinkipke@aol.com</a>
          </p>
          <br/>
          <p>Bei Fragen und Anregungen zu der digitalen Infrastruktur des Projekts melden Sie sich bitte bei Leonie Weiß:<br/>
            <a href="mailto:weiss@linglit.tu-darmstadt.de" className="text-blue hover:underline">weiss@linglit.tu-darmstadt.de</a>
          </p>
        </div>
      </div>
    </section>
  );
}