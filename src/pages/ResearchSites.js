import logo from '../assets/blank_profile.png';


export default function ResearchSites() {
  const profiles = [
    {
      name: "Dr. Sarah Johnson",
      title: "Principal Investigator",
      bio: "Dr. Johnson is a leading cardiologist specializing in pediatric myocarditis research. She has published over 50 papers on vaccine-related cardiac complications."
    },
    {
      name: "Dr. Michael Chen",
      title: "Co-Principal Investigator", 
      bio: "Dr. Chen focuses on immunology and vaccine safety research. His work has contributed significantly to understanding post-vaccination inflammatory responses."
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Research Coordinator",
      bio: "Dr. Rodriguez oversees patient recruitment and data collection across multiple sites. She ensures study protocols are followed with the highest standards."
    },
    {
      name: "Dr. James Wilson",
      title: "Biostatistician",
      bio: "Dr. Wilson leads the statistical analysis of the MACiV study data. He specializes in epidemiological research methods and clinical trial design."
    },
    {
      name: "Dr. Lisa Thompson",
      title: "Pediatric Cardiologist",
      bio: "Dr. Thompson provides clinical expertise in pediatric cardiology. She works directly with young patients and families affected by myocarditis."
    },
    {
      name: "Dr. Robert Kim",
      title: "Data Manager",
      bio: "Dr. Kim oversees all aspects of data management and quality control. He ensures the integrity and security of all research data collected."
    },
  ];

  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '36px',
        color: '#2c3e6a',
        fontWeight: '400',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        Research Team
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        justifyItems: 'center'
      }}>
        {profiles.map((profile, index) => (
          <div key={index} style={{
            backgroundColor: '#f8f9fa',
            padding: '30px',
            borderRadius: '8px',
            color: '#6c757d',
            textAlign: 'center',
            width: '100%',
            maxWidth: '320px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <img 
              src={logo} 
              alt={profile.name}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                marginBottom: '20px',
                objectFit: 'cover',
                border: '3px solid #e9ecef'
              }}
            />
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#2c3e6a',
              marginBottom: '8px',
              margin: '0 0 8px 0'
            }}>
              {profile.name}
            </h3>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#6c757d',
              marginBottom: '15px',
              margin: '0 0 15px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {profile.title}
            </h4>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#6c757d',
              margin: '0',
              textAlign: 'left'
            }}>
              {profile.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
