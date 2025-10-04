import { useMemo, useState } from 'react';

const ALL_US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
  'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
  'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
];

export default function ResearchSites() {
  const [selectedState, setSelectedState] = useState('ALL');

  // Asset resolver so you can edit string filenames per entry
  const assetsCtx = require.context('../assets/sites', false, /\.(png|jpe?g|svg)$/);
  const getAsset = (relativeName) => {
    try {
      const cleaned = './' + String(relativeName || 'blank_profile.png').replace('../assets/', '');
      return assetsCtx(cleaned);
    } catch (e) {
      return assetsCtx('./blank_profile.png');
    }
  };

  const sites = useMemo(
    () => [
      { state: 'Illinois',               name: 'Ann & Robert H. Lurie Children’s Hospital of Chicago',            pi: 'Matthew Cornicelli, MD',              logo: 'image52.jpg', headshot: 'image54.png' },
      { state: 'New Jersey',             name: "Goryeb Children's Hospital",                                      pi: 'Saira Siddiqui, MD',                  logo: 'image53.png', headshot: 'image56.png' },
      { state: 'Michigan',               name: "Betz Congenital Heart Center, Helen DeVos Children's Hospital",   pi: 'Stanley Sedore, MD, PhD',             logo: 'image55.png', headshot: 'image60.png' },
      { state: 'Massachusetts',          name: 'Boston Children’s Hospital',                                      pi: 'Rebecca Beroukhim, MD',               logo: 'image59.png', headshot: 'image64.png' },
      { state: 'Ohio',                   name: "Cleveland Clinic Children's",                                     pi: 'Rukmini Komarlu, MD',                 logo: 'image63.jpg', headshot: 'image69.png' },
      { state: 'Colorado',               name: "Children's Hospital of Colorado",                                 pi: 'Brian Fonseca, MD',                   logo: 'image65.jpg', headshot: 'image67.png' },
      { state: 'California',             name: "Children's Hospital, LA (CHLA)",                                  pi: 'Jennifer Su, MD',                     logo: 'image70.png', headshot: 'image72.png' },
      { state: 'Pennsylvania',           name: "Children's Hospital of Philadelphia",                              pi: 'Danish Vaiyani, MD',                  logo: 'image74.png', headshot: 'image76.png' },
      { state: 'Missouri',               name: 'Children’s Mercy Kansas City',                                    pi: 'Chris Mathis, MD',                    logo: 'image78.png', headshot: 'image79.jpg' },
      { state: 'District of Columbia',   name: 'Children’s National Hospital and the George Washington University Hospital', pi: 'Ashraf Harahsheh, MD',   logo: 'image80.png', headshot: 'image81.png' },
      { state: 'New York',               name: "Cohen Children's Northwell Health Physician Partners",            pi: 'Nilanjana Misra, MD',                 logo: 'image36.png', headshot: 'image38.png' },
      { state: 'New York',               name: 'Columbia University Children’s Hospital',                         pi: 'Michael DiLorenzo, MD',               logo: 'image40.png', headshot: 'image42.jpg' },
      { state: 'North Carolina',         name: "Duke Children's Hospital",                                        pi: 'Michael Campbell, MD',                logo: 'image44.png', headshot: 'image46.png' },
      { state: 'Georgia',                name: 'Emory University School of Medicine, Sibley Heart Center Cardiology', pi: 'Hunter Wilson, MD',              logo: 'image48.png', headshot: 'image49.png' },
      { state: 'Iowa',                   name: "University of Iowa Stead Family Children's Hospital",             pi: 'Ravi Ashwath, MD',                    logo: 'image50.png', headshot: 'image51.jpg' },
      { state: 'Maryland',               name: "Johns Hopkins Hospital, Charlotte R. Bloomberg Children's Center", pi: 'Ashish Doshi, MD, PhD',             logo: 'image15.png', headshot: 'image17.png' },
      { state: 'Florida',                name: 'Joe DiMaggio Children’s Hospital',                                pi: 'Jared Klein, MD',                     logo: 'image19.png', headshot: 'image21.png' },
      { state: 'Kentucky',               name: 'Kentucky Children Hospital, University of Kentucky',              pi: 'Preeti Ramachandran, MD',             logo: 'image23.png', headshot: 'image25.png' },
      { state: 'California',             name: 'Lucile Packard Children’s Hospital Stanford',                     pi: 'Shiraz Maskatia, MD',                 logo: 'image28.png', headshot: 'image29.png' },
      { state: 'Michigan',               name: "Children's Hospital of Michigan",                                 pi: 'Jocelyn Ang, MD',                     logo: 'image30.png', headshot: 'image1.jpg' },
      { state: 'Michigan',               name: "C.S Mott Children's Hospital, Michigan Medicine",                 pi: 'Adam Dorfman, MD',                    logo: 'image3.png',  headshot: 'image4.png' },
      { state: 'Florida',                name: 'Nicklaus Children’s Hospital, Miami Fl',                          pi: 'Juan Muniz, MD',                      logo: 'image5.png',  headshot: 'image6.jpg' },
      { state: 'Delaware',               name: "Nemours Children's Hospital",                                     pi: 'Deepika Thacker, MD',                 logo: 'image7.jpg',  headshot: 'image8.jpg' },
      { state: 'Georgia',                name: 'Northside Hospital Heart Institute',                              pi: 'Parham Eshtehardi, MD',               logo: 'image9.jpg',  headshot: 'image10.jpg' },
      { state: 'New York',               name: 'NYU Langone Health Children’s Hospital',                          pi: 'Puneet Bhatla, MD',                   logo: 'image58.png', headshot: 'image61.jpg' },
      { state: 'Oregon',                 name: "OHSU Doernbecher Children's Hospital",                            pi: 'Lars Grosse-Wortmann, MD',            logo: 'image62.png', headshot: 'image24.png' },
      { state: 'Oklahoma',               name: 'University of Oklahoma Health Sciences Children’s Hospital',      pi: 'Aswathy House, MD',                   logo: 'image66.png', headshot: 'image68.png' },
      { state: 'Indiana',                name: 'Riley Hospital for Children',                                     pi: 'Jyoti Kandlikar Patel, MD',           logo: 'image71.png', headshot: 'image73.jpg' },
      { state: 'New York',               name: 'University of Rochester Medical Center Children’s Hospital',      pi: 'Jason Mandell, MD, MS',               logo: 'image75.png', headshot: 'image77.jpg' },
      { state: 'Washington',             name: "Seattle Children's Hospital",                                     pi: 'Brian Soriano, MD',                   logo: 'image57.png', headshot: 'image33.png' },
      { state: 'Texas',                  name: "Children's Health Institute, University of Texas Health Science Center Houston", pi: 'Santosh Uppu, MD',  logo: 'image34.jpg', headshot: 'image35.png' },
      { state: 'California',             name: 'UC Davis Children’s Hospital',                                    pi: 'Lakshmi Nagaraju, MD',                logo: 'image37.png', headshot: 'image39.png' },
      { state: 'Mississippi',            name: 'University of Mississippi Medical Center Children’s Hospital',    pi: 'Jyothsna Venkata, MD',                logo: 'image43.jpg', headshot: 'image45.jpg' },
      { state: 'Texas',                  name: 'UT Southwestern Medical Center Children’s Hospital',              pi: 'Hoang Nguyen, MD',                    logo: 'image47.png', headshot: 'image31.jpg' },
      { state: 'Tennessee',              name: 'Vanderbilt Children’s Hospital',                                  pi: 'Jonathan Soslow, MD, MSCI',           logo: 'image32.jpg', headshot: 'image13.png' },
      { state: 'New York',               name: 'Westchester Medical Center Maria Fareri Children’s Hospital',     pi: 'Supriya Jain, MD',                    logo: 'image14.png', headshot: 'image16.png' },
      { state: 'Connecticut',            name: 'Yale New Haven Children’s Hospital',                              pi: 'Jeremy Steele, MD',                   logo: 'image18.png', headshot: 'image20.jpg' },
    ],
    []
  );

  const states = useMemo(() => ['ALL', ...ALL_US_STATES], []);

  const filtered = useMemo(() => {
    return selectedState === 'ALL' ? sites : sites.filter(s => s.state === selectedState);
  }, [selectedState, sites]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc, site) => {
      if (!acc[site.state]) acc[site.state] = [];
      acc[site.state].push(site);
      return acc;
    }, {});
  }, [filtered]);

  return (
    <div style={{ background: '#f5fbfd' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 20px 60px' }}>
        {/* State Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <select
            aria-label="Filter by State"
            value={selectedState}
            onChange={e => setSelectedState(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '860px',
              padding: '12px 16px',
              borderRadius: '9999px',
              border: '1px solid #cfe8f5',
              background: 'white',
              color: '#0b7285',
              fontSize: '16px',
              boxShadow: '0 2px 8px rgba(6,126,140,0.08)'
            }}
          >
            {states.map(st => (
              <option key={st} value={st}>
                {st === 'ALL' ? 'All States' : st}
              </option>
            ))}
          </select>
        </div>

        {/* Container Card */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '28px 24px',
          boxShadow: '0 6px 18px rgba(6,126,140,0.08)'
        }}>
          <h1 style={{
            color: '#067e8c',
            fontSize: '42px',
            lineHeight: 1.2,
            margin: 0,
            fontWeight: 800
          }}>
            All Study Locations
          </h1>

          <div style={{ height: '1px', background: '#cfe8f5', margin: '24px 0' }} />

          {/* Grouped by State */}
          {Object.keys(grouped)
            .sort()
            .map(state => (
              <div key={state} style={{ marginBottom: '28px' }}>
                <h2 style={{ color: '#0b7285', margin: '0 0 16px 0', fontSize: '28px', fontWeight: 800 }}>{state}</h2>
                {grouped[state].map((site, idx) => (
                  <div key={state + idx} style={{ padding: '18px 0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'start', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: 800, color: '#1f2937' }}>{site.name}</div>
                        <div style={{ marginTop: '12px', color: '#0b7285', fontWeight: 800, fontSize: '16px' }}>Principal Investigator:</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                          <img
                            src={getAsset(site.headshot)}
                            alt={`${site.pi} headshot`}
                            style={{ width: '75px', height: '75px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e6f0f3' }}
                          />
                          <div style={{ color: '#374151', fontSize: '16px' }}>{site.pi}</div>
                        </div>
                      </div>
                      {/* Wide landscape logo on the right */}
                      <div>
                        <img
                          src={getAsset(site.logo)}
                          alt={`${site.name} logo`}
                          style={{ maxWidth: '500px', width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px', background: 'white' }}
                        />
                      </div>
                    </div>
                    {idx !== grouped[state].length - 1 && (
                      <div style={{ height: '1px', background: '#cfe8f5', margin: '18px 0 0 70px' }} />
                    )}
                  </div>
                ))}
                <div style={{ height: '1px', background: '#cfe8f5', margin: '10px 0 26px' }} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
