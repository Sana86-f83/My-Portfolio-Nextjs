import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className="main-div">
      <div className="combine-div">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1848472.105712797!2d67.155462!3d25.193202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1732182695150!5m2!1sen!2sus"
            width="500"
            height="390"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="form-container">
          <form action="" className="form">
            <h1 className="heading-contact">Contact Us </h1>

            <input type="text" placeholder="Enter Your Name..." />
            <input type="email" placeholder="abcd@gmail.com..." />
            <input type="text" className="msg" placeholder="Your Message..." />
            <button className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
