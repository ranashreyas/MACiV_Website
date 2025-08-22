import { useState } from 'react';

export default function ForPatients() {
  return (
    <div>
      {/* Hero/Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #e9f6ff 0%, #f6fbff 45%, #dff2ff 100%)',
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
          <div style={{ flex: '1 1 560px', minWidth: '300px' }}>
            <h1 style={{
              color: '#067e8c',
              fontSize: '40px',
              lineHeight: 1.15,
              margin: '0 0 12px 0',
              fontWeight: 800
            }}>
              For Patients and Families
            </h1>
            {/* <p style={{
              color: '#234a52',
              fontSize: '18px',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 500
            }}>
              Clear, friendly information about myocarditis and our MACiV research study.
            </p> */}
          </div>
        </div>
      </div>

      {/* Sections with flowing background bands */}
      <div style={{ padding: '0 20px 60px' }}>
        {/* Band: Myocarditis */}
        <div style={{ background: 'linear-gradient(180deg, rgb(217,238,251) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 12px 0', fontWeight: 800, fontSize: '34px', lineHeight: 1.2 }}>Myocarditis</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '24px', alignItems: 'center' }}>
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: 0, fontSize: '17px', fontWeight: 600 }}>
                  Myocarditis is a condition where the heart muscle becomes inflamed, which can make it harder for the heart to pump blood and may cause abnormal heart rhythms. It can be caused by many things, such as viral infections (like COVID-19), autoimmune diseases, reactions to certain medicines, and, less commonly, as a side effect of vaccines. Since the start of the COVID-19 pandemic, cases of myocarditis after mRNA vaccination—especially in teenage boys and young men—have been closely studied. Most of these cases are mild and improve with proper care, but some patients show lasting changes in the heart muscle on special scans. Doctors and scientists are currently focused on monitoring these changes to better understand their long term effects and the possible need for treatment.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={require('../assets/myocarditis.png')}
                  alt="Illustration placeholder"
                  style={{ width: '100%', maxWidth: '460px', height: 'auto', borderRadius: '16px' }}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Band: What is this study about? */}
        <div style={{ background: 'linear-gradient(180deg, rgb(214, 242, 229) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 12px 0', fontWeight: 800, fontSize: '34px', lineHeight: 1.2 }}>What is this study about?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '24px', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={require('../assets/whatIsThisStudyAbout.png')}
                  alt="Illustration placeholder"
                  style={{ width: '100%', maxWidth: '460px', height: 'auto', borderRadius: '16px' }}
                />
              </div>
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '0 0 16px 0', fontSize: '17px', fontWeight: 600 }}>
                  This study is about myocarditis, which means inflammation of the heart muscle. Myocarditis can happen for different reasons, like a virus or a strong reaction from the immune system. Sometimes, it makes people feel very sick and need to go to the hospital.
                </p>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '0 0 16px 0', fontSize: '17px', fontWeight: 600 }}>
                  Doctors and researchers want to understand how myocarditis affects people—both when they are sick and after they start to feel better. This study will help us learn more about how to care for patients with myocarditis in the future.
                </p>
                <div style={{ background: '#f8fbff', border: '1px dashed #9ecfe0', borderRadius: '18px', padding: '16px', marginTop: '8px' }}>
                  <div style={{ color: '#0b7285', fontWeight: 700, marginBottom: '8px' }}>Myocarditis can cause:</div>
                  <ul style={{ color: '#576574', lineHeight: 1.8, margin: 0, paddingLeft: '18px', fontSize: '16px', fontWeight: 600 }}>
                    <li>Chest pain</li>
                    <li>Feeling tired or weak</li>
                    <li>Fast or irregular heartbeat</li>
                    <li>Trouble breathing</li>
                  </ul>
                </div>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '16px 0 0 0', fontSize: '17px', fontWeight: 600 }}>
                  Most kids and teens who get myocarditis get better, but doctors still have a lot to learn about what causes it and how to treat it best. That’s why this study is important.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Band: Why Participate? */}
        <div style={{ background: 'linear-gradient(180deg, rgb(231, 242, 252) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 12px 0', fontWeight: 800, fontSize: '34px', lineHeight: 1.2 }}>Why Participate?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '24px', alignItems: 'center' }}>
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '0 0 12px 0', fontSize: '17px', fontWeight: 700 }}>
                  You will be helping healthcare providers learn very important information about this heart condition, which can benefit patients, families, and the future of medicine! With your help, we can better understand the following:
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px',
                  marginTop: '4px'
                }}>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>How myocarditis looks in test results</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>How kids and teens with myocarditis get better over time</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>Which treatments seem to help most</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>How we can improve care for patients in the future</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={require('../assets/whyParticipate.png')}
                  alt="Illustration placeholder"
                  style={{ width: '100%', maxWidth: '460px', height: 'auto', borderRadius: '16px' }}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Band: What is this study doing? */}
        <div style={{ background: 'linear-gradient(180deg, rgb(214, 242, 229) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 12px 0', fontWeight: 800, fontSize: '34px', lineHeight: 1.2 }}>What is this study doing?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '24px', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={require('../assets/whatIsThisStudyDoing.png')}
                  alt="Illustration placeholder"
                  style={{ width: '100%', maxWidth: '460px', height: 'auto', borderRadius: '16px' }}
                />
              </div>
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '0 0 12px 0', fontSize: '17px', fontWeight: 600 }}>
                  This is a retrospective study. That means we are looking back at information that is already in the hospital’s records, such as:
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px',
                  marginTop: '4px'
                }}>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>Why the person came to the hospital</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>What tests were done (like bloodwork, MRIs, or echocardiograms)</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>How doctors treated them</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>What happened after treatment</div>
                </div>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '12px 0 0 0', fontSize: '17px', fontWeight: 600 }}>
                  We will not be doing any new tests or procedures. We will only use medical information that is already there.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Band: Privacy */}
        <div style={{ background: 'linear-gradient(180deg, rgb(227, 244, 255) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 12px 0', fontWeight: 800, fontSize: '34px', lineHeight: 1.2 }}>Will my information be private?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '24px', alignItems: 'center' }}>
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '0 0 12px 0', fontSize: '17px', fontWeight: 600 }}>
                  Yes! Your information will be de-identified, which means:
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '12px',
                  marginTop: '4px'
                }}>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>Your name, birthday, address, and other personal details are removed.</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>We only keep medical details that help with research—like lab results or test findings.</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>Nobody outside the study team will know who you are. Your privacy and safety are very important to us.</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={require('../assets/willMyInformationBePrivate.png')}
                  alt="Illustration placeholder"
                  style={{ width: '100%', maxWidth: '460px', height: 'auto', borderRadius: '16px' }}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Band: Consent */}
        <div style={{ background: 'linear-gradient(180deg, rgb(214, 242, 229) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 12px 0', fontWeight: 800, fontSize: '34px', lineHeight: 1.2 }}>We will be asking for your “informed consent” - what does that mean?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '24px', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={require('../assets/informedConsent.png')}
                  alt="Illustration placeholder"
                  style={{ width: '100%', maxWidth: '460px', height: 'auto', borderRadius: '16px' }}
                />
              </div>
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px' }}>
                <p style={{ color: '#576574', lineHeight: 1.8, margin: '0 0 12px 0', fontSize: '17px', fontWeight: 600 }}>
                  Informed consent means that we will explain the study clearly to you and your family, and you get to decide if you want to be part of it. We will tell you:
                </p>
                <ul style={{ color: '#576574', lineHeight: 1.8, margin: 0, paddingLeft: '18px', fontSize: '16px', fontWeight: 600 }}>
                  <div style={{ display: 'none' }} />
                </ul>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '12px'
                }}>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>What the study is about</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>What information we will use</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>How your privacy will be protected</div>
                  <div style={{ background: '#f8fbff', border: '1px solid #cfe8f5', borderRadius: '16px', padding: '12px 14px', fontSize: '15px', color: '#576574', fontWeight: 600 }}>That joining the study is your choice</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Band: Common Questions */}
        <div style={{ background: 'linear-gradient(180deg, rgb(239, 247, 255) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ color: '#067e8c', margin: '0 0 12px 0', fontWeight: 800, fontSize: '34px', lineHeight: 1.2, textAlign: 'center' }}>Common Questions</h2>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {[
                {
                  q: 'Will I have to go to more doctor visits or get more tests?',
                  a: 'No. This study uses only past medical records. No extra appointments or tests are needed.'
                },
                { q: 'Will this cost me money?', a: 'No. There is no cost to be in the study.' },
                { q: 'What if I say no?', a: 'That’s totally okay! Saying no will not change your medical care at all.' },
                { q: 'What if I say yes now but change my mind later?', a: 'You can change your mind anytime. Just let the study team know.' },
                { q: 'Will I find out the results of the study?', a: 'The study looks at information from many patients, not just one person. We may share general results in the future, but we won’t be able to share individual results.' }
              ].map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </section>
        </div>

        {/* Band: Thank You */}
        <div style={{ background: 'linear-gradient(180deg, rgb(214, 242, 229) 0%, rgba(255,255,255,0) 100%)', padding: '40px 0', margin: '0 calc(50% - 50vw)' }}>
          <section style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#067e8c', margin: 0, fontWeight: 800, fontSize: '32px', lineHeight: 1.2 }}>Thank you!</h2>
            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px', marginTop: '14px', boxShadow: '0 6px 14px rgba(0,0,0,0.06)' }}>
              <p style={{ color: '#576574', fontSize: '17px', lineHeight: 1.8, margin: 0, fontWeight: 600 }}>
                By sharing your information (safely and privately), you are helping researchers and doctors learn more about a serious illness. Even though you’re not getting new tests or treatments, your past experience can help future patients.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #cfe8f5',
      borderRadius: '16px',
      marginBottom: '12px',
      overflow: 'hidden'
    }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          padding: '16px 20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontWeight: 800,
          color: '#0b7285',
          fontSize: '18px'
        }}
      >
        <span style={{ textAlign: 'left' }}>{question}</span>
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        >
          ▼
        </span>
      </button>
      {open && (
        <div style={{ padding: '12px 20px 16px', borderTop: '1px solid #e6eef4', color: '#576574', fontWeight: 600, fontSize: '15px' }}>
          {answer}
        </div>
      )}
    </div>
  );
}
