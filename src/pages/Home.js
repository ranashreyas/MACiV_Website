// Home page hero + study sections

export default function Home() {
  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Image loader for team headshots with fallback
  const headshotsContext = require.context('../assets', false, /\.(png|jpe?g|svg)$/);
  const getHeadshotSrc = (pathLike) => {
    try {
      const cleaned = './' + String(pathLike || 'blank_profile.png').replace('../assets/', '');
      return headshotsContext(cleaned);
    } catch (e) {
      return headshotsContext('./blank_profile.png');
    }
  };

  return (
    <div>
      {/* Hero/Header Section with Background */}
      <div style={{
        background: 'linear-gradient(135deg, #deeff1 0%, #9fdde2 40%, #43b5c1 100%)',
        padding: '60px 20px',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '30px',
          flexWrap: 'wrap'
        }}>
          {/* Left: Title and subtitle */}
          <div style={{ flex: '1 1 520px', minWidth: '300px' }}>
            <h1 style={{
              color: '#067e8c',
              fontSize: '115px',
              lineHeight: 1.15,
              margin: '0 0 14px 0',
              fontWeight: 800,
              fontStyle: 'italic'
            }}>
              Myocarditis
            </h1>
            <p style={{
              color: '#234a52',
              fontSize: '27px',
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 500
            }}>
              Dedicated to the advancement and treatment of myocarditis with continued research

              {/* A Longitudinal, Multi-Institutional Study of Cardiac Manifestations and Long-Term Outcomes in Adolescents with COVID-19 vaccine-associated myocarditis in the U.S. */}
            </p>
          </div>

          {/* Right: Circular image placeholder */}
          <div style={{
            flex: '0 0 auto',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: '#ffffff',
            padding: '12px',
            // boxShadow: '0 12px 28px rgba(0,0,0,0.15)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              // backgroundColor: '#e9f6f8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={require('../assets/heroTitleImage.png')}
                alt="MACiV illustrative"
                style={{ width: '92%', height: '92%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Study sticky-like menu (pills) */}
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#f2f4f7',
          borderRadius: '24px',
          boxShadow: '0 8px 18px rgba(0,0,0,0.15)',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex' }}>
            {[
              { id: 'overview', label: 'Myocarditis' },
              { id: 'study', label: 'MACiV Study' },
              // { id: 'overview', label: 'STUDY OVERVIEW' },
              // { id: 'purpose', label: 'STUDY PURPOSE' },
              // { id: 'objectives', label: 'STUDY OBJECTIVES' },
              { id: 'team', label: 'MACiV TEAM' },
              { id: 'research', label: 'LINKS' }
            ].map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                style={{
                  flex: 1,
                  padding: '18px 14px',
                  background: 'transparent',
                  border: 'none',
                  color: '#5046a1',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderLeft: idx === 0 ? 'none' : '1px solid #d9dde5'
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#e8ebf3'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div style={{ padding: '30px 20px 60px' }}>
        {/* Band: Overview */}
        <div style={{ background: 'linear-gradient(180deg,rgb(210, 237, 242) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          {/* Overview title outside the card */}
          
          
          {/* Overview */}
          <section id="overview" style={{
            maxWidth: '1300px', margin: '0 auto'
          }}>
            <h2 style={{
              maxWidth: '1200px',
              margin: '30px auto 10px',
              color: '#067e8c',
              fontSize: '36px',
              fontWeight: 800,
              lineHeight: 1.2
            }}>
              What is Myocarditis?
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '24px',
              alignItems: 'stretch'
            }}>
              {/* Blurb box */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #067e8c',
                borderRadius: '24px',
                padding: '24px'
              }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '17px', fontWeight: 600 }}>
                Myocarditis is an inflammatory disease of the myocardium that can result in impaired systolic function, arrhythmias, and in severe presentations, acute or chronic heart failure. Etiologies are diverse and include viral pathogens (e.g., coxsackievirus, adenovirus, SARS-CoV-2), autoimmune disorders, hypersensitivity reactions to medications, and less commonly, post-vaccination immune-mediated responses. Since the introduction of mRNA vaccines during the COVID-19 pandemic, vaccine-associated myocarditis—particularly in adolescent and young adult males—has emerged as a topic of significant clinical and scientific interest. Although the majority of post-vaccination cases are mild and self-limited with appropriate and timely intervention, the potential for persistent myocardial injury, as evidenced by late gadolinium enhancement on cardiac magnetic resonance imaging in some patients, underscores the importance of ongoing surveillance and clinical investigation.
                </p>
              </div>

              {/* Image + caption box */}
              <div style={{
                background: '#ffffff',
                // border: '1px solid #067e8c',
                borderRadius: '24px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto'
              }}>
                <img
                  src={require('../assets/myocarditisDiagram.png')}
                  alt="Fig. 1 Key illustration: Initial presentation, myocardial injury and outcomes, in young patients with COVID-19 vaccine associated myocarditis."
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', borderRadius: '0px' }}
                />
                {/* <p style={{ color: '#6b7a8c', fontSize: '13px', margin: '8px 0 0 0', textAlign: 'center' }}>
                  <i>Fig. 1 Key illustration: Initial presentation, myocardial injury and outcomes, in young patients with COVID-19 vaccine associated myocarditis.</i>
                </p> */}
              </div>
            </div>
          </section>
        </div>

        {/* Band: study */}
        <div style={{ background: 'linear-gradient(180deg,rgb(210, 237, 242) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          {/* Study title outside the card */}
          
          {/* study */}
          <section id="study" style={{
            maxWidth: '1200px', margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={require('../assets/MACiV_logo_transparent.png')}
                alt="MACiV logo"
                style={{ display: 'inline-block', maxWidth: '550px', width: '100%', height: 'auto', margin: '30px auto 10px auto' }}
              />
              <p style={{
                color: '#1f2d3d',
                fontSize: '27px',
                lineHeight: 1.5,
                margin: '6px auto 0',
                // fontStyle: 'italic',
                fontWeight: 600,
                maxWidth: '800px'
              }}>
                COVID-19 Vaccination-Associated Myocarditis (MACiV – <b>M</b>yocarditis <b>A</b>fter <b>C</b>OV<b>i</b>D <b>V</b>accination)
              </p>
              <p style={{
                color: '#1f2d3d',
                fontSize: '20px',
                lineHeight: 1.5,
                margin: '15px auto 30px',
                fontStyle: 'italic',
                fontWeight: 500,
                maxWidth: '1100px'
              }}>
                A Longitudinal, Multi-Institutional Study of Cardiac Manifestations and Long-Term Outcomes in Adolescents with COVID-19 vaccine-associated myocarditis in the U.S. 
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>

              {/* Blurb box */}
              <div style={{
                background: '#ffffff',
                border: '1px solid #067e8c',
                borderRadius: '24px',
                padding: '24px'
              }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '20px', fontWeight: 600 }}>
                COVID-19 mRNA vaccination has been associated with rare cases of acute myocarditis in adolescents and young adults, as documented in CDC surveillance data and published research studies. The COVID-19 Vaccination-Associated Myocarditis (MACiV) study is a multi-center research consortium focused on evaluating the association between acute myocarditis and COVID-19 mRNA vaccination in the adolescent and young adult population. This study seeks to better define the clinical course, cardiac complications, and mid- to long-term outcomes in patients aged ≤30 years with COVID-19 vaccine-associated myocarditis (C-VAM). The study also includes a comparative cohort of patients with COVID-19 or multisystem inflammatory syndrome in children (MIS-C) who underwent cardiac MRI to evaluate for myocarditis. The C-VAM cohort is then followed up at 2-, 5-, and 10-year intervals to monitor any persisting or detect new symptoms or cardiac disease. By leveraging standardized data collection across leading pediatric cardiology institutions, MACiV seeks to close critical evidence gaps to better inform clinical practice guidelines and long-term patient care. This research is supported by the U.S. Food and Drug Administration (FDA).
                </p>
              </div>


              {/* Image + caption box */}
              <div style={{
                background: '#ffffff',
                // border: '1px solid #067e8c',
                borderRadius: '24px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto'
              }}>
                <img
                  src={require('../assets/StudyOverviewFig1.png')}
                  alt="Fig. 1 Key illustration: Initial presentation, myocardial injury and outcomes, in young patients with COVID-19 vaccine associated myocarditis."
                  style={{ maxWidth: '100%', height: 'auto', display: 'block', borderRadius: '0px' }}
                />
                <p style={{ color: '#6b7a8c', fontSize: '13px', margin: '8px 0 0 0', textAlign: 'center' }}>
                  <i>Fig. 1 Key illustration: Initial presentation, myocardial injury and outcomes, in young patients with COVID-19 vaccine associated myocarditis.</i>
                </p>
              </div>


              

              
            </div>
          </section>
        </div>

        {/* Band: Purpose */}
        <div style={{ background: 'linear-gradient(180deg,rgb(206, 214, 235) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          {/* Purpose */}
          <section id="purpose" style={{
            maxWidth: '1200px', margin: '0 auto'
          }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 10px 0', fontWeight: 800, fontSize: '36px', lineHeight: 1.2 }}>Study Purpose</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #067e8c',
                borderRadius: '36px',
                padding: '18px 20px',
                maxWidth: '500px',
                textAlign: 'center',
                alignSelf: 'flex-start'
              }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '17px', fontWeight: 600 }}>
                  Myocarditis has been reported in some adolescents and young adults following COVID-19 vaccination, but we do not yet fully understand its long-term effects.
                </p>
              </div>
              <div style={{
                background: '#ffffff',
                border: '1px solid #067e8c',
                borderRadius: '36px',
                padding: '18px 20px',
                maxWidth: '500px',
                textAlign: 'center',
                alignSelf: 'center'
              }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '17px', fontWeight: 600 }}>
                  The MACiV study is a multicenter research effort supported by the U.S. Food and Drug Administration (FDA). We aim to include over 300 young people with vaccine-associated myocarditis from hospitals across the United States.
                </p>
              </div>
              <div style={{
                background: '#ffffff',
                border: '1px solid #067e8c',
                borderRadius: '36px',
                padding: '18px 20px',
                maxWidth: '500px',
                textAlign: 'center',
                // alignSelf: "30%",
                alignSelf: 'flex-end'
              }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '17px', fontWeight: 600 }}>
                  This study will help us learn more about how the heart recovers after this condition and whether cardiac MRI findings, such as late gadolinium enhancement, predict long-term health outcomes.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Band: Objectives */}
        <div style={{ background: 'linear-gradient(180deg,rgb(214, 242, 229) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          {/* Objectives */}
          <section id="objectives" style={{
            maxWidth: '1200px', margin: '0 auto'
          }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 10px 0', fontWeight: 800, fontSize: '36px', lineHeight: 1.2 }}>Study Objectives</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #067e8c',
                borderRadius: '24px',
                padding: '24px'
              }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '17px', fontWeight: 600 }}>
                  1. To characterize the acute presentation, cardiac complications, and clinical outcomes of patients ≤30 years of age with myocarditis following COVID-19 vaccination.
                </p>
              </div>
              <div style={{
                background: '#ffffff',
                border: '1px solid #067e8c',
                borderRadius: '24px',
                padding: '24px'
              }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '17px', fontWeight: 600 }}>
                  2. To compare cardiac MRI findings and outcomes of C-VAM patients with those of hospitalized COVID-19 or MIS-C patients who underwent CMR evaluation.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Band: Team */}
        <div style={{ background: 'linear-gradient(180deg,rgb(221, 231, 242) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          {/* Team */}
          <section id="team" style={{
            maxWidth: '1200px', margin: '0 auto'
          }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 10px 0', fontWeight: 800, fontSize: '36px', lineHeight: 1.2 }}>MACiV Team</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(260px, 1fr))',
              gap: '24px'
            }}>
              {[
                { name: 'Dr. Supriya Jain, MD', title: 'Lead Investigator', headshot: '../assets/SupriyaJain.png'},
                { name: 'Dr. Lars Grosse-Wortmann, MD', title: 'Lead Investigator', headshot: '../assets/LarsGrosseWortmann.png'},
                { name: 'Dr. Victoria Maksymiuk, MD, MS', title: 'Study Coordinator', headshot: '../assets/VictoriaMaksymiuk.jpg'},
                { name: 'Joshua Garelik', title: 'Study Administrator', headshot: '../assets/JoshuaGarelick.jpg'},
                { name: 'Joel Johnson', title: 'Data Manager', headshot: '../assets/blank_profile.png'},
                { name: 'Shreyas Rana', title: 'Website Developer', headshot: '../assets/ShreyasRana.jpg'}
              ].map((m, i) => {
                const src = getHeadshotSrc(m.headshot);
                return (
                  <div key={i} style={{
                    background: '#ffffff',
                    border: '1px solid #067e8c',
                    borderRadius: '24px',
                    padding: '18px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '10px'
                  }}>
                    <img
                      src={src}
                      alt={m.name}
                      style={{ width: '115px', height: '115px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #e9ecef' }}
                    />
                    <div style={{ fontWeight: 700, color: '#2c3e6a', fontSize: '18px' }}>{m.name}</div>
                    <div style={{ color: '#576574', fontSize: '14px', fontWeight: 600 }}>{m.title}</div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Band: Research */}
        <div style={{ background: 'linear-gradient(180deg, #eaf5f7 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          {/* Links */}
          <section id="research" style={{
            maxWidth: '1200px', margin: '0 auto'
          }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 10px 0', fontWeight: 800, fontSize: '36px', lineHeight: 1.2 }}>Links</h2>
            <div style={{
              background: '#ffffff',
              border: '1px solid #067e8c',
              borderRadius: '24px',
              padding: '24px'
            }}>
              {/* MACiV in the Media subbox */}
              <div style={{
                background: '#f9fcfd',
                border: '1px solid #bfe5ea',
                borderRadius: '16px',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ color: '#067e8c', fontWeight: 800, fontSize: '18px', marginBottom: '8px', letterSpacing: '0.3px' }}>
                  MACiV in the Media
                </div>
                <a
                  href="https://cardiovascularbusiness.com/topics/healthcare-management/healthcare-policy/fda-wants-new-heart-damage-warnings-added-covid-19-vaccines"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#1b7c85', textDecoration: 'underline', fontWeight: 700 }}
                >
                  FDA wants new heart-damage warnings added to COVID-19 vaccines
                </a>
              </div>

              {/* Badge */}
              <div style={{
                display: 'inline-block',
                backgroundColor: '#e6f5f7',
                color: '#067e8c',
                fontWeight: 800,
                fontSize: '12px',
                letterSpacing: '0.6px',
                padding: '4px 8px',
                borderRadius: '9999px',
                marginBottom: '12px'
              }}>
                CITATION
              </div>

              {/* Citation block with left accent */}
              <div style={{ borderLeft: '6px solid #067e8c', paddingLeft: '16px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '16px', fontWeight: 600}}>
                  Jain SS, Anderson SA, Steele JM, et al. Cardiac manifestations and outcomes of COVID-19 vaccine-associated myocarditis in the young in the USA: longitudinal results from the Myocarditis After COVID Vaccination (MACiV) multicenter study [published correction appears in <i>EClinicalMedicine</i>. 2025 May 21;84:103268. doi: 10.1016/j.eclinm.2025.103268.]. <i>EClinicalMedicine</i>. 2024;76:102809. Published 2024 Sep 6. doi: <a href="https://doi.org/10.1016/j.eclinm.2024.102809" target="_blank" rel="noreferrer" style={{ color: '#1b7c85', textDecoration: 'underline' }}>10.1016/j.eclinm.2024.102809</a>
                </p>
              </div>

              {/* <div style={{ borderLeft: '6px solid #067e8c', paddingLeft: '16px', marginTop: '16px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '16px', fontWeight: 600}}>
                  Banka P, Robinson JD, Uppu SC, Harris MA, Hasbani K, Lai WW, Richmond ME, Fratz S, Jain S, Johnson TR, Maskatia SA, Lu JC, Samyn MM, Patton D, Powell AJ. Cardiovascular magnetic resonance techniques and findings in children with myocarditis: a multicenter retrospective study. J Cardiovasc Magn Reson. 2015 Nov 17;17:96. doi: 10.1186/s12968-015-0201-6. PMID: 26576638; PMCID: PMC4650339.
                </p>
              </div>

              <div style={{ borderLeft: '6px solid #067e8c', paddingLeft: '16px', marginTop: '16px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '16px', fontWeight: 600}}>
                  Jain SS, Steele JM, Fonseca B, Huang S, Shah S, Maskatia SA, Buddhe S, Misra N, Ramachandran P, Gaur L, Eshtehardi P, Anwar S, Kaushik N, Han F, Chaudhuri NR, Grosse-Wortmann L. COVID-19 Vaccination-Associated Myocarditis in Adolescents. Pediatrics. 2021 Nov;148(5):e2021053427. doi: 10.1542/peds.2021-053427. Epub 2021 Aug 13. PMID: 34389692.
                </p>
              </div>

              <div style={{ borderLeft: '6px solid #067e8c', paddingLeft: '16px', marginTop: '16px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '16px', fontWeight: 600}}>
                  Truong DT, Dionne A, Muniz JC, McHugh KE, Portman MA, Lambert LM, Thacker D, Elias MD, Li JS, Toro-Salazar OH, Anderson BR, Atz AM, Bohun CM, Campbell MJ, Chrisant M, D'Addese L, Dummer KB, Forsha D, Frank LH, Frosch OH, Gelehrter SK, Giglia TM, Hebson C, Jain SS, Johnston P, Krishnan A, Lombardi KC, McCrindle BW, Mitchell EC, Miyata K, Mizzi T, Parker RM, Patel JK, Ronai C, Sabati AA, Schauer J, Sexson Tejtel SK, Shea JR, Shekerdemian LS, Srivastava S, Votava-Smith JK, White S, Newburger JW. Clinically Suspected Myocarditis Temporally Related to COVID-19 Vaccination in Adolescents and Young Adults: Suspected Myocarditis After COVID-19 Vaccination. Circulation. 2022 Feb;145(5):345-356. doi: 10.1161/CIRCULATIONAHA.121.056583. Epub 2021 Dec 6. PMID: 34865500.
                </p>
              </div>

              <div style={{ borderLeft: '6px solid #067e8c', paddingLeft: '16px', marginTop: '16px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '16px', fontWeight: 600}}>
                  Aeschlimann FA, Misra N, Hussein T, Panaioli E, Soslow JH, Crum K, Steele JM, Huber S, Marcora S, Brambilla P, Jain S, Navallas M, Giuli V, Rücker B, Angst F, Patel MD, Azarine A, Caro-Domínguez P, Cavaliere A, Di Salvo G, Ferroni F, Agnoletti G, Bonnemains L, Martins D, Boddaert N, Wong J, Pushparajah K, Raimondi F. Myocardial involvement in children with post-COVID multisystem inflammatory syndrome: a cardiovascular magnetic resonance based multicenter international study-the CARDOVID registry. J Cardiovasc Magn Reson. 2021 Dec 30;23(1):140. doi: 10.1186/s12968-021-00841-1. PMID: 34969397; PMCID: PMC8717054.
                </p>
              </div>

              <div style={{ borderLeft: '6px solid #067e8c', paddingLeft: '16px', marginTop: '16px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '16px', fontWeight: 600}}>
                  Lin J, Harahsheh AS, Raghuveer G, Jain S, Choueiter NF, Garrido-Garcia LM, Dahdah N, Portman MA, Misra N, Khoury M, Fabi M, Elias MD, Dionne A, Lee S, Tierney ESS, Ballweg JA, Manlhiot C, McCrindle BW. Emerging Insights Into the Pathophysiology of Multisystem Inflammatory Syndrome Associated With COVID-19 in Children. Can J Cardiol. 2023 Jun;39(6):793-802. doi: 10.1016/j.cjca.2023.01.002. Epub 2023 Jan 7. PMID: 36626979; PMCID: PMC9824951.
                </p>
              </div> */}

              {/* Actions */}
              {/* <div style={{ marginTop: '14px' }}>
                <a href="https://pubmed.ncbi.nlm.nih.gov/39290640/" target="_blank" rel="noreferrer" style={{
                  display: 'inline-block',
                  backgroundColor: '#067e8c',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 600
                }}>
                  View on PubMed
                </a>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
