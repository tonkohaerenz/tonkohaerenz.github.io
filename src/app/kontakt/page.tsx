// app/kontakt/page.tsx
export default function KontaktPage() {
  return (
    <section className="space-y-6 max-w-2xl">
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
          <p>
            <a href="mailto:kontakt@projekt.de" className="text-indigo-600 hover:underline">
              kontakt@projekt.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}