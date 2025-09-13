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
  const assetsCtx = require.context('../assets', false, /\.(png|jpe?g|svg)$/);
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
      { state: 'Alabama',      name: 'University of Alabama',                                            pi: 'Camden Hebson, MD',          logo: 'ChildrensHospitalOfChicago.jpg',                 headshot: 'blank_profile.png' },
      { state: 'Arizona',      name: "Phoenix Children's Hospital",                                     pi: 'John Smith, MD',             logo: 'ChildrensHospitalOfChicago.jpg',                 headshot: 'blank_profile.png' },
      { state: 'California',   name: 'UCSF Benioff Children’s Hospital',                                 pi: 'Sarah Lee, MD',              logo: 'ChildrensHospitalOfChicago.jpg',                 headshot: 'blank_profile.png' },
      { state: 'Massachusetts',name: 'Boston Children’s Hospital',                                       pi: 'Andrew Powell, MD',          logo: 'ChildrensHospitalOfChicago.jpg',                 headshot: 'blank_profile.png' },
      { state: 'New York',     name: 'NewYork-Presbyterian Morgan Stanley Children’s Hospital',          pi: 'Jane Miller, MD',            logo: 'ChildrensHospitalOfChicago.jpg',                 headshot: 'blank_profile.png' },
      { state: 'Texas',        name: 'Texas Children’s Hospital',                                        pi: 'Saul Flores, MD',            logo: 'ChildrensHospitalOfChicago.jpg',                 headshot: 'blank_profile.png' },
      { state: 'Washington',   name: 'Seattle Children’s Hospital',                                      pi: 'Michael Chen, MD',           logo: 'ChildrensHospitalOfChicago.jpg',                 headshot: 'blank_profile.png' },
      // Example with a wide logo asset already in repo:
      // { state: 'Illinois', name: "Ann & Robert H. Lurie Children’s Hospital of Chicago", pi: 'Sample PI, MD', logo: 'ChildrensHospitalOfChicago.jpg', headshot: 'blank_profile.png' },
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
                            style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e6f0f3' }}
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
