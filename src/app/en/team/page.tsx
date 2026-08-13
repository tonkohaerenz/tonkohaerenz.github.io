import Link from "next/link";

// app/en/team/page.tsx
const teamMembersBonn = [
  {
    name: 'Prof. Dr. Claudia',
    surname: 'Lauer',
    role: 'Project Management - Uni Bonn',
    bio: 'Network Coordination, Coordination Team Bonn and Coherence Analysis',
    link: 'https://www.iglk.uni-bonn.de/de/institut/abteilungen/germanistische-mediaevistik/personalseiten/claudia-lauer'
  },
  {
    name: 'Benedikt',
    surname: 'Gnosa',
    role: 'Research Assistant',
    bio: 'Coherence Analysis',
    link: 'https://www.iglk.uni-bonn.de/de/institut/abteilungen/germanistische-mediaevistik/personalseiten/benedikt_gnosa'
  },
  {
    name: 'Quirin',
    surname: 'Demmler',
    role: 'Student Assistant',
    bio: 'Transcription, Reading Text and Translation'
  }
];
const teamMembersDarmstadt = [
  {
    name: 'Prof. Dr. Andrea',
    surname: 'Rapp',
    role: 'Project Management - TU Darmstadt',
    bio: 'Network Coordination, Coordination Team Darmstadt and Digital Infrastructure',
    link: 'https://www.linglit.tu-darmstadt.de/institutlinglit/mitarbeitende/andrearapp/index.en.jsp'
  },
  {
    name: 'Leonie',
    surname: 'Weiß',
    role: 'Research Assistant',
    bio: 'Digital Infrastructure, Data Encoding and Website',
  }
];
const teamMembersFrankfurt = [
  {
    name: 'Prof. Dr. Franziska',
    surname: 'Wenzel',
    role: 'Project Management - GU Frankfurt',
    bio: 'Network Coordination, Coordination Team Frankfurt and Coherence Analysis',
    link: 'https://www.fb10.uni-frankfurt.de/97301012/FB_10___IDLD___%C3%84DL___Mitarbeiterinnen_und_Mitarbeiter___Lehrende___Wenzel'
  },
  {
    name: 'Malin',
    surname: 'Kipke',
    role: 'Research Assistant',
    bio: 'Transcription, Reading Text, Translation and Data Encoding',
    link: 'https://www.fb10.uni-frankfurt.de/127664970/Kipke__Malin__M_A?'
  },
  {
    name: 'Yannick',
    surname: 'Hahn',
    role: 'Student Assistant',
    bio: 'Literature Review'
  }
]

export default function TeamPage() {
  return (
    <section className="space-y-6">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-bold text-slate-900">Our Team</h1>
        <p className="text-slate-600 mt-1 teyt-justify [hyphens:auto]"><span className="italic">Tone and Coherence</span> is a DFG-funded collaborative project between the University of Bonn (Rheinische Friedrich-Wilhelms-Universität), Johann Wolfgang Goethe University Frankfurt, and the Technical University of Darmstadt. The team is therefore spread across these three cities, and the collaborative project work is coordinated by the project leaders.</p>
      </header>

      <h2 className="text-2xl font-bold text-slate-900">University of Bonn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {teamMembersBonn.map((member, index) => (
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
      <h2 className="text-2xl font-bold text-slate-900">University Frankfurt</h2>
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