import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

function ProductCatalogue() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching from Firebase...');
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log('Documents found:', querySnapshot.size);
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Loaded:', productList.length, 'products');
        setProducts(productList);
      } catch (err) {
        console.error('Firebase error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      (product.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.technical || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#166534', marginBottom: '10px' }}>Our Products</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '10px' }}>
        Crop protection solutions for every stage of farming
      </p>
      <p style={{ textAlign: 'center', color: '#166534', marginBottom: '30px', fontWeight: 'bold', fontSize: '18px' }}>
        Total Products: {loading ? '...' : products.length}
      </p>

      {loading && (
        <p style={{ textAlign: 'center', color: '#166534', fontSize: '18px' }}>Loading from Firebase...</p>
      )}

      {error && (
        <p style={{ textAlign: 'center', color: 'red', fontSize: '16px' }}>Error: {error}</p>
      )}

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search by product or technical name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '12px 20px',
            fontSize: '16px',
            border: '2px solid #166534',
            borderRadius: '25px',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: '1px solid #166534',
              backgroundColor: selectedCategory === cat ? '#166534' : 'white',
              color: selectedCategory === cat ? 'white' : '#166534',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{
            border: '1px solid #e5e7eb',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <span style={{
              backgroundColor: '#f0fdf4',
              color: '#166534',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {product.category}
            </span>
            <h3 style={{ color: '#166534', marginTop: '15px', marginBottom: '5px' }}>{product.name}</h3>
            <p style={{ color: '#ea580c', fontSize: '13px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
              {product.technical}
            </p>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>{product.description}</p>
          </div>
        ))}
      </div>

      {!loading && filteredProducts.length === 0 && products.length > 0 && (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '40px' }}>No products match your filter.</p>
      )}
    </div>
  );
}

export default ProductCatalogue;