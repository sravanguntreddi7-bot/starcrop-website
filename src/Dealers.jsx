import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function Dealers() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', state: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await addDoc(collection(db, 'dealer_enquiries'), {
        ...form,
        submittedAt: new Date().toISOString()
      });
      setStatus('✅ Thank you! We will contact you soon.');
      setForm({ name: '', company: '', phone: '', email: '', state: '', message: '' });
    } catch (err) {
      setStatus('❌ Something went wrong. Please try again.');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ color: '#2d7a2d', fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>
        Become a Dealer / Distributor
      </h1>
      <div style={{ width: '80px', height: '4px', backgroundColor: '#e8611a', margin: '0 auto 20px auto' }}></div>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px', fontSize: '1.05rem', lineHeight: '1.7' }}>
        Join our growing network of dealers and distributors across Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu. Fill the form below and our team will get in touch with you.
      </p>

      <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}>
        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Full Name *" required style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
        <input name="company" value={form.company} onChange={handleChange} type="text" placeholder="Company / Firm Name" style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
        <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number *" required style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address *" required style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
        <select name="state" value={form.state} onChange={handleChange} required style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white' }}>
          <option value="">Select Your State *</option>
          <option value="Telangana">Telangana</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Other">Other</option>
        </select>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message / Requirements" rows="4" style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
        <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#2d7a2d', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.05rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Submit Enquiry
        </button>
        {status && <p style={{ marginTop: '15px', textAlign: 'center', color: status.includes('✅') ? 'green' : '#e8611a', fontWeight: '500' }}>{status}</p>}
      </form>
    </div>
  );
}

export default Dealers;