import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-subcontainer">
        <h2>Send a Message</h2>
        <form
          action="https://formsubmit.co/mattmartinez64@icloud.com" // Replace with your email
          method="POST"
        >
          {/* Add a hidden input for the form name (optional) */}
          <input type="hidden" name="_formsubmit_id" value="YOUR_FORM_NAME" />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
            ></textarea>
          </div>

          {/* Add a hidden input for the redirect URL (optional) */}
          {/* <input type="hidden" name="_next" value="http://yourwebsite.com/thank-you" /> */}

          {/* Add a hidden input for the subject (optional) */}
          <input type="hidden" name="_subject" value="Personal Website Contact" />

          {/* Add a hidden input to disable captcha (optional) */}
          <input type="hidden" name="_captcha" value="false" />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;