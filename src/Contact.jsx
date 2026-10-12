import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...form,
        submittedAt: new Date().toISOString()
      });
      setStatus('✅ Thank you! Your message has been received.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('❌ Something went wrong. Please try again.');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ color: '#2d7a2d', fontSize: '2.5rem', textAlign: 'center', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>
        Contact Us
      </h1>
      <div style={{ width: '80px', height: '4px', backgroundColor: '#e8611a', margin: '0 auto 40px auto' }}></div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        {/* Contact Info */}
        <div style={{ backgroundColor: '#f0fdf4', padding: '30px', borderRadius: '10px' }}>
          <h3 style={{ color: '#2d7a2d', fontSize: '1.4rem', marginBottom: '20px' }}>📞 Get In Touch</h3>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#e8611a', fontSize: '1rem', marginBottom: '5px' }}>📍 Registered Office</h4>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Gangaregualasa (Vill & PO),<br />
              Komarada Mandal,<br />
              Paravathipuram Manyam Dist.,<br />
              Andhra Pradesh, India
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#e8611a', fontSize: '1rem', marginBottom: '5px' }}>📧 Email</h4>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <a href="mailto:info@starcropagro.com" style={{ color: '#2d7a2d', textDecoration: 'none', fontWeight: '500' }}>
                info@starcropagro.com
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#e8611a', fontSize: '1rem', marginBottom: '5px' }}>📱 Phone</h4>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>
              <a href="tel:+919852519999" style={{ color: '#2d7a2d', textDecoration: 'none', fontWeight: '500' }}>
                +91 98525 19999
              </a>
            </p>
          </div>

          <div>
            <h4 style={{ color: '#e8611a', fontSize: '1rem', marginBottom: '5px' }}>🕐 Business Hours</h4>
            <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.95rem' }}>
              Monday - Saturday<br />
              9:00 AM - 6:00 PM IST
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}>
          <h3 style={{ color: '#2d7a2d', fontSize: '1.4rem', marginBottom: '20px' }}>✉️ Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Your Phone"
              style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              style={{ width: '100%', padding: '12px 15px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
            ></textarea>
            <button
              type="submit"
              style={{ width: '100%', padding: '14px', backgroundColor: '#2d7a2d', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Send Message
            </button>
            {status && (
              <p style={{ marginTop: '15px', textAlign: 'center', color: status.includes('✅') ? 'green' : '#e8611a', fontWeight: '500' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
        <iframe
          title="Star Crop Location"
          src="https://www.google.com/maps?q=18.857492446899414,83.43766784667969&z=15&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;


