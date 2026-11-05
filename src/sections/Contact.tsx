"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);

  const [btnDefault, setBtnDefault] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnSuccess, setBtnSuccess] = useState(false);

  const validateEmail = (emailValue: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailValue.toLowerCase());
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const isValid = fullName !== "" && email !== "" && message !== "";
    setEmailStatus(email !== "" && !validateEmail(email));
    if (!isValid || (email !== "" && !validateEmail(email))) return;

    const params = {
      user_name: fullName,
      user_email: email,
      user_message: message,
    };

    setBtnDefault(false);
    setBtnLoading(true);

    try {
      await emailjs.send(
        "service_5oxskh4",
        "template_ubdp51h",
        params,
        "wbStjN6pVz7MYmF3r"
      );

      setBtnLoading(false);
      setBtnSuccess(true);

      setTimeout(() => {
        setBtnSuccess(false);
        setBtnDefault(true);
        setFullName("");
        setEmail("");
        setMessage("");
        setSubmitted(false);
      }, 1000);
    } catch (err) {
      console.error("Error sending email:", err);
      setBtnLoading(false);
      setBtnDefault(true);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 className="section-title" id="contact-title">Contact</h2>
        <form className="contact-form" onSubmit={formSubmit} noValidate>
          
          <div className="form-item">
            <input
              type="text"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={submitted && fullName === "" ? "invalid" : ""}
            />
            <label className={fullName !== "" ? "active" : ""} htmlFor="fullname">
              Fullname
              {submitted && fullName === "" && <span>- is required*</span>}
            </label>
          </div>

          <div className="form-item">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                submitted && (email === "" || emailStatus) ? "invalid" : ""
              }
            />
            <label className={email !== "" ? "active" : ""} htmlFor="email">
              Email&nbsp;
              {submitted && email === "" && <span>- is required*</span>}
              {submitted && emailStatus && <span>- invalid email</span>}
            </label>
          </div>

          <div className="form-item full-w">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={submitted && message === "" ? "invalid" : ""}
            />
            <label className={message !== "" ? "active" : ""} htmlFor="message">
              Message {submitted && message === "" && <span>- is required*</span>}
            </label>
          </div>

          <button type="submit" className="submit-button">
            {btnDefault && <span className="text">send</span>}
            {btnLoading && <span className="loader"></span>}
            {btnSuccess && <i className="fa-solid fa-check"></i>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
