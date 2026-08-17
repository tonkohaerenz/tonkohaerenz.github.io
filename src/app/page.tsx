// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <article lang="de" className="article-content">
      {/* Hero Section */}
      <header className="header-secondary">
        <span className="blue-uppercase">
          Forschungsprojekt
        </span>
        <h1>
          Ton und Kohärenz. Eine kommentierte digitale Edition der Frauenlobtöne in der Kolmarer Liederhandschrift
        </h1>
        <p>
          Finanzierung: DFG | Laufzeit: 10/2025 – 09/2028<br/>
          GEPRIS: <a href="https://gepris.dfg.de/project/556112393" target="_blank">https://gepris.dfg.de/project/556112393</a>
        </p>
      </header>

      {/* Content Section */}
      <section className="content-section-full">
        <figure>
          <Image
            src="/Grundweise-seite1-header.png"
            alt="Beschreibung des Bildes"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
          <figcaption>
            Abbildung: Ausschnitt aus der ersten Seite der Grundweise.
          </figcaption>
        </figure>
        <h2>Über das Projekt</h2>
        <p> {/* Für Blocksatz mit Silbentrennung: className="text-justify [hyphens:auto]"*/}
          Im Zentrum des Projekts zu einer kommentierten digitalen Edition der 22 Frauenlobtöne in der Kolmarer Liederhandschrift k aus der zweiten Hälfte des 15. Jahrhunderts steht die grundlegende Forschungsfrage, welche spezifischen textuell-lyrischen Kohärenzformen und tonalen Kohärenzcharakteristiken zusätzlich zu Form und Melodie mit der Tonautorschaft, dem Töneprinzip und den Tonnamen spätmittelalterlicher Lyrik verbunden sind. Eng damit verknüpft ist die fundamentale Frage, wie sich diese besondere Form spätmittelalterlicher Lyrik inklusive ihrer formalen und semantischen Kohärenzen adäquat edieren, kommentieren und visualisieren lässt. Damit verfolgt das Projekt ein in gleicher Weise analytisches wie ergebnisorientiertes Interesse: die wissenschaftliche Exploration und Präsentation spätmittelalterlicher lyrischer Tonkohärenzen und damit verbundener Tonlogiken im Rahmen einer kommentierten digitalen Edition nach dem Töneprinzip, die letztlich auch über die Kolmarer Liederhandschrift hinaus für die weitere editorische Erschließung von Tönen und tonalen Kohärenzcharakteristiken spätmittelalterlicher Lieddichtung fruchtbar gemacht werden kann.
        </p>
        
        {/* Hinweis auf kommende Edition */}
        <div className="info-box">
          <h3 className="blue">Ausblick: Digitale Edition</h3>
          <p className="blue">
            In der nächsten Phase des Projekts wird an dieser Stelle das digitale Editionsportal mit Volltextsuche, Digitalisaten, Kohärenzkommentaren und Kohärenzvisualisierungen veröffentlicht.
          </p>
        </div>
      </section>
    </article>
  );
}