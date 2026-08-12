// app/kontakt/page.tsx
export default function KontaktPage() {
  return (
    <section className="space-y-6 max-w-2xl">
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
          <p>
            <a href="mailto:kontakt@projekt.de" className="text-indigo-600 hover:underline">
              contact@project.en
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}