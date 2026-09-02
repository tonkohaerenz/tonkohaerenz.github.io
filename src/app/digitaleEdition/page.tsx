//app/digitaleEdition/page.tsx

export default function DigitaleEditionPage() {
  return (
    <section className="content-section-half">
      <header>
        <h1>Digitale Edition</h1>
        <p>An dieser Stelle wird eine digitale Edition der 22 'Frauenlobtöne' aus der Kolmarer Liederhandschrift k entstehen.</p>
      </header>

      <div className="card">
        <div>
          <h2>'Frauenlobtöne'</h2>
          <p>
            Zu jedem Ton wird es eine Transkription, eine Lesefassung und eine Übersetzung geben.
          </p>
        </div>
      </div>
      <div className="card">
        <h2>Kohärenzcharakteristiken</h2>
        <p>Zu jedem Ton wird es eine Kohärenzcharakteristik geben.</p>
      </div>
      <div className="card">
        <h2>Kohärenzvisualisierungen</h2>
        <p>Zu jedem Ton wird es eine Kohärenzvisualisierung geben.</p>
      </div>
      <div className="card">
        <h2>Kohärenzkommentare</h2>
        <p>Zu jedem Ton werden Stellenkommentare zu den Kohärenzen existieren.</p>
      </div>
    </section>
  );
}