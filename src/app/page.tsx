// app/page.tsx

import Image from "next/image";

export default function HomePage() {
  return (
    <article lang="de" className="space-y-8">
      {/* Hero Section */}
      <header className="border-b border-slate-200 pb-8">
        
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1c82b3]/600">
          Forschungsprojekt
        </span>
        <h1 className="text-3xl sm:text-3xl font-bold text-slate-900 mt-2">
          Ton und Kohärenz. Eine kommentierte digitale Edition der Frauenlobtöne in der Kolmarer Liederhandschrift
        </h1>
        <p className="text-lg text-slate-600 mt-4 leading-relaxed">
          Finanzierung: DFG | Laufzeit: 10/2025 – 09/2028<br/>
        </p>
      </header>

      {/* Content Section */}
      <section className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
        <figure className="mx-auto overflow-hidden max-w-3xl rounded-lg">
          <Image
            src="/Grundweise-seite1-header.png"
            alt="Beschreibung des Bildes"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
          <figcaption className="mt-1 text-left text-sm text-slate-500">
            Abbildung: Ausschnitt aus der ersten Seite der Grundweise.
          </figcaption>
        </figure>
        <h2 className="text-xl font-semibold text-slate-800">Über das Projekt</h2>
        <p className="text-left"> {/* Für Blocksatz mit Silbentrennung: className="text-justify [hyphens:auto]"*/}
          Im Zentrum des Projekts zu einer kommentierten digitalen Edition der 22 Frauenlobtöne in der Kolmarer Liederhandschrift k aus der zweiten Hälfte des 15. Jahrhunderts steht die grundlegende Forschungsfrage, welche spezifischen textuell-lyrischen Kohärenzformen und tonalen Kohärenzcharakteristiken zusätzlich zu Form und Melodie mit der Tonautorschaft, dem Töneprinzip und den Tonnamen spätmittelalterlicher Lyrik verbunden sind. Eng damit verknüpft ist die fundamentale Frage, wie sich diese besondere Form spätmittelalterlicher Lyrik inklusive ihrer formalen und semantischen Kohärenzen adäquat edieren, kommentieren und visualisieren lässt. Damit verfolgt das Projekt ein in gleicher Weise analytisches wie ergebnisorientiertes Interesse: die wissenschaftliche Exploration und Präsentation spätmittelalterlicher lyrischer Tonkohärenzen und damit verbundener Tonlogiken im Rahmen einer kommentierten digitalen Edition nach dem Töneprinzip, die letztlich auch über die Kolmarer Liederhandschrift hinaus für die weitere editorische Erschließung von Tönen und tonalen Kohärenzcharakteristiken spätmittelalterlicher Lieddichtung fruchtbar gemacht werden kann.
        </p>
        
        {/* Hinweis auf kommende Edition */}
        <div className="bg-[#1c82b3]/10 border-l-4 border-[#1c82b3] p-4 rounded-lg mt-6 shadow-sm">
          <h3 className="font-semibold text-[#1c82b3] text-sm">Ausblick: Digitale Edition</h3>
          <p className="text-sm text-[#1c82b3] mt-1 [hyphens:auto]">
            In der nächsten Phase des Projekts wird an dieser Stelle das digitale Editionsportal mit Volltextsuche, Digitalisaten, Kohärenzkommentaren und Kohärenzvisualisierungen veröffentlicht.
          </p>
        </div>
      </section>
    </article>
  );
}