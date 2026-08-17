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
    <section className="section-spacing">
      <header>
        <h1>Our Team</h1>
        <p><span className="italic">Tone and Coherence</span> is a DFG-funded collaborative project between the University of Bonn (Rheinische Friedrich-Wilhelms-Universität), Goethe University Frankfurt/Main, and the Technical University of Darmstadt. The team is therefore spread across these three cities, and the collaborative project work is coordinated by the project leaders.</p>
      </header>

      <h2>University of Bonn</h2>
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
      <h2>Goethe University Frankfurt/Main</h2>
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

      <hr/>
      <h2>Technical University of Darmstadt</h2>
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

    </section>
  );
}