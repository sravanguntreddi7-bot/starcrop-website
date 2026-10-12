import React, { useState } from 'react';
import './App.css';
import ProductCatalogue from './ProductCatalogue';
import About from './About';
import Contact from './Contact';
import Dealers from './Dealers';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <nav style={{
        backgroundColor: '#2d7a2d',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => navigateTo('home')}>
          <img src="/logo-vertical.png" alt="Star Crop" style={{ height: '45px', width: 'auto' }} />
          <span style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'Georgia, serif', letterSpacing: '1px' }}>
            STAR CROP
          </span>
        </div>
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
          <a onClick={() => navigateTo('home')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500', cursor: 'pointer' }}>Home</a>
          <a onClick={() => navigateTo('home')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500', cursor: 'pointer' }}>Products</a>
          <a onClick={() => navigateTo('about')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500', cursor: 'pointer' }}>About</a>
          <a onClick={() => navigateTo('dealers')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500', cursor: 'pointer' }}>Dealers</a>
          <a onClick={() => navigateTo('contact')} style={{ color: 'white', textDecoration: 'none', fontWeight: '500', cursor: 'pointer' }}>Contact</a>
        </div>
      </nav>

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          <header style={{
            backgroundColor: '#f0fdf4',
            padding: '50px 20px 40px 20px',
            textAlign: 'center',
            borderBottom: '4px solid #2d7a2d'
          }}>
            <img
              src="/logo-horizontal.png"
              alt="Star Crop AgroChemicals"
              style={{ width: '500px', maxWidth: '95%', height: 'auto', display: 'block', margin: '0 auto 25px auto' }}
            />
            <p style={{ fontSize: '1.4rem', color: '#2d7a2d', marginTop: '20px', fontStyle: 'italic', fontWeight: '500', fontFamily: 'Georgia, serif' }}>
              "Growing Quality, Harvesting Trust"
            </p>
            <p style={{ color: '#666', marginTop: '10px', fontSize: '1rem', maxWidth: '700px', margin: '10px auto 0 auto', lineHeight: '1.6' }}>
              Manufacturing & Marketing a wide range of crop protection chemicals since 2019
            </p>
          </header>
          <ProductCatalogue />
        </>
      )}

      {/* ABOUT PAGE */}
      {currentPage === 'about' && <About />}

      {/* CONTACT PAGE */}
      {currentPage === 'contact' && <Contact />}

      {/* DEALERS PAGE */}
      {currentPage === 'dealers' && <Dealers />}

      {/* Footer */}
      <footer style={{ backgroundColor: '#2d7a2d', color: 'white', padding: '40px 20px 20px 20px', marginTop: '50px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div>
            <img src="/logo-vertical.png" alt="Star Crop" style={{ height: '60px', width: 'auto', marginBottom: '10px', filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginTop: '10px' }}>Growing Quality, Harvesting Trust</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>📍 Address</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Gangaregualasa (Vill & PO),<br />Komarada Mandal,<br />Paravathipuram Manyam Dist.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>🌾 Coverage</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Telangana<br />Andhra Pradesh<br />Karnataka<br />Tamil Nadu
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Star Crop AgroChemicals. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;