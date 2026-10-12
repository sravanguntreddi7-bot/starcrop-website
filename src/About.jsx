import React from 'react';

function About() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ color: '#2d7a2d', fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>
        About Star Crop AgroChemicals
      </h1>
      <div style={{ width: '80px', height: '4px', backgroundColor: '#e8611a', margin: '0 auto 40px auto' }}></div>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#444', marginBottom: '30px' }}>
        Star Crop Agrochemicals is manufacturing & marketing a wide range of crop protection chemicals and meeting the farmer needs starting from pre-planting to post-harvesting, by providing an extensive range of products to meet the plant protection requirements of various crops.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
        <img
          src="/logo-horizontal.png"
          alt="Star Crop"
          style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        <div>
          <h3 style={{ color: '#2d7a2d', fontSize: '1.4rem', marginBottom: '15px' }}>Our Story</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            To serve Indian agriculture, Star Crop Agrochemicals was incorporated in 2019 by widely experienced and professionally highly qualified Mr. K. Ramesh (Managing Director), who has more than 1.5 decades of experience in various agrochemical companies at various levels.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginTop: '15px' }}>
            Our production facilities and laboratories are located at Gangaregualasa (Vill & PO), Komarada Mandal, Paravathipuram Manyam Dist., with modern and high-tech instruments to meet and maintain strict quality standards.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '10px', marginBottom: '20px', borderLeft: '5px solid #2d7a2d' }}>
        <h2 style={{ color: '#2d7a2d', fontSize: '1.6rem', marginBottom: '15px' }}>🎯 Our Mission</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#444' }}>
          Company with difference by reaching Quality Production, Product Range and Services.
        </p>
      </div>

      {/* Vision */}
      <div style={{ backgroundColor: '#fff7ed', padding: '30px', borderRadius: '10px', marginBottom: '20px', borderLeft: '5px solid #e8611a' }}>
        <h2 style={{ color: '#e8611a', fontSize: '1.6rem', marginBottom: '15px' }}>🔭 Our Vision</h2>
        <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', paddingLeft: '20px' }}>
          <li>To be the brand leader in the pesticides industry with good size and scale of operations.</li>
          <li>To be the first-in-class pesticides company in marketing, manufacturing and providing quality services with speed & accuracy to customers in all major markets.</li>
          <li>To revolutionize the pesticides industry with innovative and patented packing.</li>
          <li>Innovation and reach the farm solutions to improve farm productivity and profitability of the farmers.</li>
        </ul>
      </div>

      {/* Values */}
      <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '10px', borderLeft: '5px solid #2d7a2d' }}>
        <h2 style={{ color: '#2d7a2d', fontSize: '1.6rem', marginBottom: '15px' }}>💎 Our Values</h2>
        <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', paddingLeft: '20px' }}>
          <li>Transparency in dealing with distributors, dealers, employees, and stakeholders.</li>
          <li>Long-lasting collaboration with clients, vendors, and partners for mutual financial growth and success.</li>
          <li>Ethics and integrity in thoughts and actions.</li>
        </ul>
      </div>

      {/* Coverage */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2 style={{ color: '#2d7a2d', fontSize: '1.8rem', marginBottom: '20px' }}>📍 Our Presence</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
          {['Telangana', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu'].map(state => (
            <span key={state} style={{ backgroundColor: '#2d7a2d', color: 'white', padding: '10px 25px', borderRadius: '25px', fontSize: '1rem', fontWeight: '500' }}>
              {state}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;