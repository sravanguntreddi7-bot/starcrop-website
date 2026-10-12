import React from 'react';
import './App.css';
import ProductCatalogue from './ProductCatalogue';

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: '#f0fdf4', padding: '50px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#166534', fontSize: '3rem', margin: '0' }}>STAR CROP</h1>
        <h2 style={{ color: '#ea580c', fontSize: '1.5rem', marginTop: '10px' }}>AgroChemicals</h2>
        <p style={{ fontSize: '1.2rem', color: '#333', marginTop: '20px' }}>
          Growing Quality, Harvesting Trust
        </p>
        <p style={{ color: '#555' }}>
          Manufacturing & Marketing a wide range of crop protection chemicals since 2019.
        </p>
      </header>

      <ProductCatalogue />
    </div>
  );
}

export default App;