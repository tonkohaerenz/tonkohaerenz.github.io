// app/page.tsx

import Image from "next/image";

export default function HomePage() {
  return (
    <article lang="en" className="space-y-8">
      {/* Hero Section */}
      <section className="relative w-full h-80 flex items-center justify-center overflow-hidden rounded-lg">
        <Image 
          src ="/Grundweise-seite1-header.png"
          alt=""
          fill
          className="object-cover -z-10"
          priority
        />
         {/* Abdunkeln */}
        {/*<div className="absolute inset-0 bg-black/40" /> */}

        <header className="border-b z-10 border-slate-200 pb-8">
          <div className="inline-block rounded-lg bg-black/40 px-6 py-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            Research Project
          </span>
          <h1 className="text-3xl sm:text-3xl font-bold text-slate-900 mt-2 text-white">
            Tone and coherence. An annotated digital edition of the Frauenlobtöne in the Kolmar song manuscript
          </h1>
          <p className="text-lg text-slate-600 mt-4 leading-relaxed text-white">
            Funding: DFG | Project duration: 10/2025 – 09/2028<br/>
          </p>
          </div>
        </header>
      </section>

      {/* Content Section */}
      <section className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed items-center justify-center">
        <h2 className="text-xl font-semibold text-slate-800">About the Project</h2>
        <p className="text-left">
          At the center of the proposed project for an annotated digital edition of Frauenlob's tones in k is the fundamental research question, confirmed by the results of our own preliminary work on two of Frauenlob's tones (Würgendrüssel and Zugweise), as to which tonal coherence characteristics, in addition to form and melody, are associated with the tone authorship, the tone principle and the tone names of late medieval poetry. Starting from tone as the unity of text and melody (wort und wîse), the project focuses not only on metrical-formal, musical and individual verse aspects of tone, but also on textual-lyrical forms of coherence. Closely linked to this is the fundamental question of how this particular form of late medieval lyric poetry, including its formal and semantic coherences, can be adequately edited, annotated and visualized. The project thus pursues an equally analytical and result-oriented interest: the scholarly exploration and presentation of late medieval lyrical tonal coherences and associated tonal logics within the framework of an annotated digital edition according to the tonal principle, which can ultimately be made fruitful for the further editorial development of tones and tonal coherence characteristics of late medieval song poetry beyond the Kolmar song manuscript.
        </p>
        
        {/* Hinweis auf kommende Edition */}
        <div className="bg-[#1c82b3]/10 border-l-4 border-[#1c82b3] p-4 rounded-lg mt-6 shadow-sm">
          <h3 className="font-semibold text-[#1c82b3] text-sm">Outlook: Digital Edition</h3>
          <p className="text-sm text-[#1c82b3] mt-1 [hyphens:auto]">
            In the next phase of the project, the digital edition portal — featuring full-text search, digitized materials, coherence annotations, and coherence visualizations — will be published here.
          </p>
        </div>
      </section>
    </article>
  );
}