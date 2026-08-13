import Link from "next/link";

// app/team/page.tsx

const teamMembersBonn = [
  {
    name: 'Prof. Dr. Claudia',
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
    name: 'Prof. Dr. Franziska',
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
    <section className="section-spacing">
      <header>
        <h1>Unser Team</h1>
        <p><span className="italic">Ton und Kohärenz</span> ist ein DFG-gefördertes Verbundprojekt zwischen der Rheinischen Friedrich-Wilhelms-Universität Bonn, der Johann Wolfgang Goethe-Universität Frankfurt am Main und der Technischen Universität Darmstadt. Das Team ist folglich auf diese drei Städte aufgeteilt und die kollaborative Projekarbeit wird von den Projketleiterinnen koordiniert.</p>
      </header>

      <h2>Rheinische Friedrich-Wilhelms-Universität Bonn</h2>
      <div className="grid-team">
        {teamMembersBonn.map((member, index) => (
          member.link? (
            <a key={index} href={member.link} target="_blank">
              <div className="cardLink">
              <div className="icon-circle">
                {member.surname.charAt(0)}
              </div>
              <h3>{member.name+' '+member.surname}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
            </a>
          ) : (
          <div key={index} className="card">
            <div className="icon-circle">
              {member.surname.charAt(0)}
            </div>
            <h3>{member.name+' '+member.surname}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
          )
        ))}
      </div>

      <hr/>
      <h2>TU Darmstadt</h2>
      <div className="grid-team">
        {teamMembersDarmstadt.map((member, index) => (
          member.link? (
            <a key={index} href={member.link} target="_blank">
              <div className="cardLink">
              <div className="icon-circle">
                {member.surname.charAt(0)}
              </div>
              <h3>{member.name+' '+member.surname}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
            </a>
          ) : (
          <div key={index} className="card">
            <div className="icon-circle">
              {member.surname.charAt(0)}
            </div>
            <h3>{member.name+' '+member.surname}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
          )
        ))}
      </div>

      <hr/>
      <h2>Universität Frankfurt</h2>
      <div className="grid-team">
        {teamMembersFrankfurt.map((member, index) => (
          member.link? (
            <a key={index} href={member.link} target="_blank">
              <div className="cardLink">
              <div className="icon-circle">
                {member.surname.charAt(0)}
              </div>
              <h3>{member.name+' '+member.surname}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
            </a>
          ) : (
          <div key={index} className="card">
            <div className="icon-circle">
              {member.surname.charAt(0)}
            </div>
            <h3>{member.name+' '+member.surname}</h3>
            <p>{member.role}</p>
            <p>{member.bio}</p>
          </div>
          )
        ))}
      </div>
    </section>
  );
}