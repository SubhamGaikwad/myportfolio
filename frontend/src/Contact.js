import React, { useState } from "react";
import "./Contact.css";
import contactImg from "./img/profile_1.jpg";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        "service_odzdtsh",
        "template_nrig0mi",
        {
          name,
          email,
          subject,
          message,
        },
        "WxdKdc_x7oznUypel"
      )
      .then(() => {
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am Fresher with hands on experience.
              </p>
              <p className="hire__text white">
                <strong>+91 8618 741 260</strong> or email{" "}
                <strong>subhamgaik358@gmail.com</strong>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {status === "success" && (
              <p className="contact__status success">
                Form submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p className="contact__status error">
                An error occurred while submitting the form. Please try again
                later.
              </p>
            )}
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

//service_odzdtsh
