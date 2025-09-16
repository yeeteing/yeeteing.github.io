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
  const LAMBDA_URL = "https://b2gxtsa4wiimbfsoeuiuwvgcu40yukin.lambda-url.us-east-2.on.aws/"; 

  function showMessage(text: string, type: 'success' | 'error') {
    const messageDiv = document.getElementById("form-message");
    // messageDiv.textContent = text;
    // messageDiv.className = `form-message ${type}`;
    // messageDiv.style.display = "block";

    // // Auto-hide after 10 seconds
    // setTimeout(() => {
    //   messageDiv.style.display = "none";
    // }, 10000);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);

    const form = e.target as HTMLFormElement;
    const submitBtn = form.querySelector(".submit-button") as HTMLButtonElement;
    //const messageDiv = document.getElementById("form-message");
    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    //messageDiv.style.display = "none";

    // Use state formData for sending
    const dataToSend = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(LAMBDA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        showMessage(
          "Message sent successfully! Thank you for reaching out.",
          "success"
        );
        form.reset();
      } else {
        showMessage("Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      showMessage(
        "Network error. Please check your connection and try again.",
        "error"
      );
    }

    // Reset button
    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;
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
