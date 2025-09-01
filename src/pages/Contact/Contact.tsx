import React, { useState } from "react";
import './Contact.css';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">CONTACT</h1>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John"
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              placeholder="Wick"
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="johnwick@gmail.com"
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Placeholder.."
              className="form-textarea"
              rows={4}
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
