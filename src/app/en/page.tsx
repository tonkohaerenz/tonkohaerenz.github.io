// app/page.tsx

import Image from "next/image";

export default function HomePage() {
  return (
    <article lang="en" className="article-content">
      {/* Hero Section */}

        <header>
          <div className="header-secondary">
          <span className="blue-uppercase">
            Research Project
          </span>
          <h1>
            Tone and coherence. An annotated digital edition of the ‚Frauenlobtöne‘ in the Kolmar song manuscript
          </h1>
          <p>
            Funding: DFG | Project duration: 10/2025 – 09/2028<br/>
            GEPRIS: <a className="a-blue" href="https://gepris.dfg.de/project/556112393?lang=en" target="_blank">https://gepris.dfg.de/project/556112393?lang=en</a>
          </p>
          </div>
        </header>
      {/* Content Section */}
      <section className="content-section-full">
              <figure>
                <a href="https://www.digitale-sammlungen.de/de/view/bsb00105055?page=282,283" target="_blank">
                <Image
                  src="/GoldenerTon-Seite1-header.webp"
                  alt="Beschreibung des Bildes"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                  priority
                />
                </a>
                <figcaption>
                  Bayerische Staatsbibliothek München, Cgm 4997 ‚Kolmarer Liederhandschrift‘ (‚Kolmar song manuscript‘), paper codex, 293 x 200 mm, ca. 1460, fol. 139r (cropped section).
                </figcaption>
              </figure>
        <h2>About the Project</h2>
        <p>
          At the center of the proposed project for an annotated digital edition of the ‚Frauenlobtöne‘ in k is the fundamental research question, confirmed by the results of our own preliminary work on two of the ‚Frauenlobtöne‘ (Würgendrüssel and Zugweise), as to which tonal coherence characteristics, in addition to form and melody, are associated with the tone authorship, the tone principle and the tone names of late medieval poetry. Starting from tone as the unity of text and melody (wort und wîse), the project focuses not only on metrical-formal, musical and individual verse aspects of tone, but also on textual-lyrical forms of coherence. Closely linked to this is the fundamental question of how this particular form of late medieval lyric poetry, including its formal and semantic coherences, can be adequately edited, annotated and visualized. The project thus pursues an equally analytical and result-oriented interest: the scholarly exploration and presentation of late medieval lyrical tonal coherences and associated tonal logics within the framework of an annotated digital edition according to the tonal principle, which can ultimately be made fruitful for the further editorial development of tones and tonal coherence characteristics of late medieval song poetry beyond the Kolmar song manuscript.
        </p>
      </section>
    </article>
  );
}