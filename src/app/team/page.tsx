import Link from "next/link";

// app/team/page.tsx

const teamMembersBonn = [
  {
    name: 'Prof Dr. Claudia',
    surname: 'Lauer',
    role: 'Projektleitung - Uni Bonn',
    bio: 'Verbundkoordination, Koordination Team Bonn, Kohärenzbildung',
    link: 'https://www.iglk.uni-bonn.de/de/institut/abteilungen/germanistische-mediaevistik/personalseiten/claudia-lauer'
  },
  {
    name: 'Benedikt',
    surname: 'Gnosa',
    role: 'Wissenschaftlicher Mitarbeiter',
    bio: 'Kohärenzbildung',
    link: 'https://www.iglk.uni-bonn.de/de/institut/abteilungen/germanistische-mediaevistik/personalseiten/benedikt_gnosa'
  },
  {
    name: 'Quirin',
    surname: 'Demmler',
    role: 'Studentische Hilfskraft',
    bio: 'Transkription, Lesefassung und Übersetzung'
  }
];
const teamMembersDarmstadt = [
  {
    name: 'Prof. Dr. Andrea',
    surname: 'Rapp',
    role: 'Projektleitung - TU Darmstadt',
    bio: 'Verbundkoordination, Koordination Team Darmstadt, Digitale Infrastruktur',
    link: 'https://www.linglit.tu-darmstadt.de/institutlinglit/mitarbeitende/andrearapp/index.de.jsp'
  },
  {
    name: 'Leonie',
    surname: 'Weiß',
    role: 'Wissenschaftliche Mitarbeiterin',
    bio: 'Digitale Infrastruktur, Website, Datenformat',
  }
];
const teamMembersFrankfurt = [
  {
    name: 'Prof Dr. Franziska',
    surname: 'Wenzel',
    role: 'Projektleitung - GU Frankfurt',
    bio: 'Verbundkoordination, Koordination Team Frankfurt, Kohärenzbildung',
    link: 'https://www.fb10.uni-frankfurt.de/97301012/FB_10___IDLD___%C3%84DL___Mitarbeiterinnen_und_Mitarbeiter___Lehrende___Wenzel'
  },
  {
    name: 'Malin',
    surname: 'Kipke',
    role: 'Wissenschaftliche Mitarbeiterin',
    bio: 'Transkription, Lesefassung, Übersetzung, Datenkodierung',
    link: 'https://www.fb10.uni-frankfurt.de/127664970/Kipke__Malin__M_A?'
  },
  {
    name: 'Yannick',
    surname: 'Hahn',
    role: 'Studentische Hilfskraft',
    bio: 'Literaturrecherche'
  }
]

export default function TeamPage() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Unser Team</h1>
        <p className="text-slate-600 mt-1 teyt-justify [hyphens:auto]"><span className="italic">Ton und Kohärenz</span> ist ein DFG-gefördertes Verbundprojekt zwischen der Rheinischen Friedrich-Wilhelms-Universität Bonn, der Johann Wolfgang Goethe-Universität Frankfurt am Main und der Technischen Universität Darmstadt. Das Team ist folglich auf diese drei Städte aufgeteilt und die kollaborative Projekarbeit wird von den Projketleiterinnen koordiniert.</p>
      </header>

      <h2 className="text-2xl font-bold text-slate-900">Rheinische Friedrich-Wilhelms-Universität Bonn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {teamMembersBonn.map((member, index) => (
          member.link? (
            <a key={index} href={member.link} target="_blank">
              <div className="card">
              <div className="w-12 h-12 bg-[#1c82b3]/30 text-[#1c82b3] rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                {member.surname.charAt(0)}
              </div>
              <h2 className="text-lg font-semibold text-slate-800">{member.name+' '+member.surname}</h2>
              <p className="text-xs font-medium text-[#1c82b3] mb-2">{member.role}</p>
              <p className="text-sm text-slate-600">{member.bio}</p>
            </div>
            </a>
          ) : (
          <div key={index} className="card">
            <div className="w-12 h-12 bg-[#1c82b3]/30 text-[#1c82b3] rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
              {member.surname.charAt(0)}
            </div>
            <h2 className="text-lg font-semibold text-slate-800">{member.name+' '+member.surname}</h2>
            <p className="text-xs font-medium text-[#1c82b3] mb-2">{member.role}</p>
            <p className="text-sm text-slate-600">{member.bio}</p>
          </div>
          )
        ))}
      </div>

      <hr className="border-b border-slate-200"/>
      <h2 className="text-2xl font-bold text-slate-900">TU Darmstadt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {teamMembersDarmstadt.map((member, index) => (
          member.link? (
            <a key={index} href={member.link} target="_blank">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-slate-400">
              <div className="w-12 h-12 bg-[#1c82b3]/30 text-[#1c82b3] rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                {member.surname.charAt(0)}
              </div>
              <h2 className="text-lg font-semibold text-slate-800">{member.name+' '+member.surname}</h2>
              <p className="text-xs font-medium text-[#1c82b3] mb-2">{member.role}</p>
              <p className="text-sm text-slate-600">{member.bio}</p>
            </div>
            </a>
          ) : (
          <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-[#1c82b3]/30 text-[#1c82b3] rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
              {member.surname.charAt(0)}
            </div>
            <h2 className="text-lg font-semibold text-slate-800">{member.name+' '+member.surname}</h2>
            <p className="text-xs font-medium text-[#1c82b3] mb-2">{member.role}</p>
            <p className="text-sm text-slate-600">{member.bio}</p>
          </div>
          )
        ))}
      </div>

      <hr className="border-b border-slate-200"/>
      <h2 className="text-2xl font-bold text-slate-900">Universität Frankfurt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {teamMembersFrankfurt.map((member, index) => (
          member.link? (
            <a key={index} href={member.link} target="_blank">
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-slate-400">
              <div className="w-12 h-12 bg-[#1c82b3]/30 text-[#1c82b3] rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
                {member.surname.charAt(0)}
              </div>
              <h2 className="text-lg font-semibold text-slate-800">{member.name+' '+member.surname}</h2>
              <p className="text-xs font-medium text-[#1c82b3] mb-2">{member.role}</p>
              <p className="text-sm text-slate-600">{member.bio}</p>
            </div>
            </a>
          ) : (
          <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <div className="w-12 h-12 bg-[#1c82b3]/30 text-[#1c82b3] rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-sm">
              {member.surname.charAt(0)}
            </div>
            <h2 className="text-lg font-semibold text-slate-800">{member.name+' '+member.surname}</h2>
            <p className="text-xs font-medium text-[#1c82b3] mb-2">{member.role}</p>
            <p className="text-sm text-slate-600">{member.bio}</p>
          </div>
          )
        ))}
      </div>
    </section>
  );
}