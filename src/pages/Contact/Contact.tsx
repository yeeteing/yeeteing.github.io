import React, { useRef } from "react";
import './Contact.css';
import { sendContactEmail } from "./ContactApi";
import { useFormStatus } from "react-dom";
import { useClickSound, useHoverSound } from "../../hooks/useClickSound";

export type DataToSend = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

function Submit() {
  const { pending } = useFormStatus();
  const playClickSound = useClickSound();
  const playHoverSound = useHoverSound();
  console.log(pending);
  return (
    <button type="submit" disabled={pending} className="submit-button" onClick={playClickSound} onMouseEnter={playHoverSound}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  function showMessage(text: string, type: 'success' | 'error' | 'info') {
    const messageDiv = document.getElementById("form-message");
    if (messageDiv) {
      messageDiv.textContent = text;
      messageDiv.className = `form-message ${type}`;
      messageDiv.style.display = "block";

      // Auto-hide after 10 seconds
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 100000);
    }
  }

  const onAction = (formData: FormData) => {
    showMessage( "Sending message...", "info");
    // const messageDiv = document.getElementById("form-message");
    // messageDiv.style.display = "none";
    // Use state formData for sending
    const dataToSend: DataToSend = {
      name: String(formData.get('name') ?? ''),
      surname: String(formData.get('surname') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    sendContactEmail(dataToSend)
      .then((response) => {
        if (response.ok) {
          showMessage(
            "Message sent successfully! Thank you for reaching out.",
            "success"
          );
          formRef.current?.reset();
        } else {
          showMessage("Failed to send message. Please try again.", "error");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        showMessage(
          "Network error. Please check your connection and try again.",
          "error"
        );
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">CONTACT</h1>
        </div>
        
        <form className="contact-form" action={onAction} ref={formRef}>
          <div className="form-field">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John"
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Wick"
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johnwick@gmail.com"
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              placeholder="Placeholder.."
              className="form-textarea"
              rows={4}
              required
            />
          </div>

          <Submit />

          <div id="form-message" className="form-message"> </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
