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
          <h2>Project address</h2>
          <p>
            University<br />
            Institute for Digitale Humanities<br />
            Street 42<br />
            12345 City
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
            <a href="mailto:malinkipke@aol.com" className="text-blue hover:underline">malinkipke@aol.com</a>
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