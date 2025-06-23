import { useState } from 'react';

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Hero/Header Section with Background */}
      <div style={{
        background: 'rgba(159, 59, 59, 0.8)',
        backgroundSize: 'cover',
        color: 'white',
        padding: '120px 20px',
        textAlign: 'center',
        position: 'relative'
      }}>
        
        {/* Main Title */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '300',
          margin: '0',
          letterSpacing: '2px'
        }}>
          The MACiV Study
        </h1>
      </div>

      {/* Main Content Area */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        {/* What is Myocarditis? */}
        <h2 style={{
          fontSize: '32px',
          color: '#2c3e6a',
          fontWeight: '400',
          marginBottom: '30px'
        }}>
          What is Myocarditis?
        </h2>

        {/* Myocarditis blurb */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '40px 40px',
          borderRadius: '8px',
          color: '#6c757d',
          textAlign: 'left'
        }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            <b>Myocarditis</b> is when the heart muscle becomes inflamed or swollen. This can happen for many reasons. In this study, the focus is on rare cases where myocarditis happens after vaccines, including COVID-19 vaccines.
            <br />
            <br />
            Myocarditis has also been seen, though rarely, after vaccines like smallpox, flu, and tetanus. In children who had COVID-19 vaccine-related myocarditis, symptoms were usually mild and included chest pain, fever, and feeling tired.
            <br />
            <br />
            Even with other vaccines, myocarditis was still very rare. People who got it after the smallpox vaccine were usually young males, just a little older than the COVID cases. Their symptoms included shortness of breath, a fast heartbeat, chest pain, and problems with how well the heart worked.
            <br />
            <br />
            Some symptoms might be missed or not reported, so we don't know exactly how often this happens. More research is needed to better understand how often myocarditis happens after vaccines, what the signs are, and how to treat it to help people long term.
            <br />
            <br />
            Myocarditis can affect how well the heart works. Since the heart is responsible for pumping blood all around the body, inflammation in the heart muscle can make it harder for the heart to do its job.
            <br />
            <br />
            When someone has myocarditis, they might feel tired, short of breath, have chest pain, or notice their heart beating fast or oddly. These symptoms can be scary, and doctors usually check the heart closely with tests like an ECG (a heart rhythm test), blood tests, or imaging like an MRI.
            <br />
            <br />
            Most people, especially kids and teens with mild cases, get better with rest and care. But in some cases, if it's not treated or if the inflammation is severe, myocarditis can lead to more serious problems, like heart failure (when the heart can't pump well enough) or irregular heartbeats.
          </p>
          
          {/* More dropdown button */}
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={() => setShowMore(!showMore)}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid #6c757d',
                borderRadius: '4px',
                padding: '8px 16px',
                color: '#6c757d',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#6c757d';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#6c757d';
              }}
            >
              More (TODO: this is where the med school level blurb goes) {showMore ? '▲' : '▼'}
            </button>
          </div>
          
          {/* Additional content that shows/hides */}
          {showMore && (
            <div style={{ marginTop: '20px', paddingTop: '30px', paddingLeft: '30px', paddingRight: '20px', borderTop: '1px solid #dee2e6' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                <b>Myocarditis</b> is an inflammation of the myocardium, the heart's muscular layer. Myocarditis can occur in many settings - for the purposes of this study, it can rarely be seen secondary to vaccinations, both COVID and not (Jain et al., 2021). Vaccine-associated myocarditis has been reported following smallpox and influenza (Engler et al., 2015), as well as tetanus (Yamamato et al., 2018). Specifically, Coronavirus disease 2019 vaccination-associated myocarditis (C-VAM) was noted to have a mild course, mostly marked by chest pain, fever, and fatigue in the pediatric patients studied (Jain et al., 2021). When considering cases of myocarditis after other vaccines, incidence was also exceedingly rare. Those who presented with myocarditis after smallpox vaccinations were of a similar, albeit slightly older, demographic, being mostly young males (Engler et al., 2015). The reported signs and symptoms for smallpox vaccine-associated myocarditis had probable cardiac origin, namely myocardial inflammation and decreased left ventricular function coupled with shortness of breath, palpitations, and chest pain (Engler et al., 2015).
                <br />
                <br />
                Both C-VAM and smallpox vaccine-associated myocarditis have been suggested to maintain some symptoms that may go unnoticed, and thus unreported (Jain et al., 2021). There remains a need for further investigation to illuminate the incidence of such events, their symptoms, and best courses of treatment for long term benefit.
              </p>
            </div>
          )}
          
        </div>

        {/* Action Buttons */}
        <div style={{ 
          marginTop: '30px', 
          display: 'flex', 
          gap: '15px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button style={{
            backgroundColor: 'rgba(159, 59, 59, 0.9)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '200px'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(159, 59, 59, 1)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(159, 59, 59, 0.9)';
            e.target.style.transform = 'translateY(0)';
          }}>
            Patients/Families Click Here for more information
          </button>
          
          <button style={{
            backgroundColor: 'rgba(159, 59, 59, 0.9)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '200px'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(159, 59, 59, 1)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(159, 59, 59, 0.9)';
            e.target.style.transform = 'translateY(0)';
          }}>
            Patients/Families Enroll Here
          </button>
        </div>
      </div>

      {/* MACiV Study */}
      <div style={{
            background: 'rgba(159, 59, 59, 0.8)',
            backgroundSize: 'cover',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            margin: '0 auto',
            padding: '40px 40px',
            textAlign: 'center'
        }}>
            {/* Blurb */  }
            <h2 style={{
                fontSize: '32px',
                color: 'black',
                fontWeight: '400',
                marginBottom: '30px'
            }}>
                MACiV Study
            </h2>
            {/* Research Sites Jump Link */}
            <div style={{
                backgroundColor: '#ebeced',
                padding: '40px 40px',
                borderRadius: '8px',
                color: '#6c757d',
                textAlign: 'left',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    <b>MACiV Blurb</b> is when the heart muscle becomes inflamed or swollen. This can happen for many reasons. In this study, the focus is on rare cases where myocarditis happens after vaccines, including COVID-19 vaccines.
                    <br />
                    <br />
                    Team members:
                    <ul>
                        <li>John Doe</li>
                        <li>John Doe</li>
                        <li>John Doe</li>
                    </ul>
                    <br />
                    Links to papers published:
                </p>

                {/* Action Buttons */}
                <div style={{ 
                    marginTop: '30px', 
                    display: 'flex', 
                    gap: '15px', 
                    flexWrap: 'wrap',
                    justifyContent: 'left'
                }}>
                    <button style={{
                        backgroundColor: 'rgba(159, 59, 59, 0.9)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '12px 20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        minWidth: '200px'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(159, 59, 59, 1)';
                        e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'rgba(159, 59, 59, 0.9)';
                        e.target.style.transform = 'translateY(0)';
                    }}>
                        Our Research Sites
                    </button>
                
                </div>
            </div>
        </div>
    </div>
  );
}
