import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div id="contact">
        <h2>Looking For Something Specific?</h2>
      </div>
      <div className="contact">
        <div className="contact-box">
          <h3>Let us Help!</h3>
          <form className="contact-form" action="https://formsubmit.co/your@email.com" method="POST">
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="contact-input"
              type="text"
              name="message"
              rows="5"
              placeholder="Message"
              required
            />
            <input className="honey" type="text" name="_honey" />
            <button className="contact-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
