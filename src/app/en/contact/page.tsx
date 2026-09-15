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

        <div>
          <h2>E-Mail</h2>
          <p>For organizational questions and suggestions, please contact Benedikt Gnosa:<br/>
            <a href="mailto:benedikt.gnosa@uni-bonn.de" className="text-blue hover:underline">
              benedikt.gnosa@uni-bonn.de
            </a>
          </p>
          <br/>
          <p>If you have any questions or suggestions regarding our editorial approach or the drafts we are producing, please contact Malin Kipke:<br/>
            <a href="mailto:malinkipke@aol.com" className="text-blue hover:underline">malinkipke@aol.com</a>
          </p>
          <br/>
          <p>If you have any questions or suggestions regarding the project's digital infrastructure, please contact Leonie Weiß:<br/>
            <a href="mailto:weiss@linglit.tu-darmstadt.de" className="text-blue hover:underline">weiss@linglit.tu-darmstadt.de</a>
          </p>
        </div>
      </div>
    </section>
  );
}