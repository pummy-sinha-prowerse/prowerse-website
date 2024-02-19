import React, { useEffect, useState, useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIAZT74NRFUODQ7T2PS",
  secretAccessKey: "BC8MEbMhXHst4abIorPeCGAVZXycjpd7AiAM3Eh6TJ7x",
  region: "ap-south-1", // Change to your desired AWS region
});

function PostResume() {
    console.log("process.env.REACT_APP_SITE_KEY",process.env.REACT_APP_SITE_KEY)
  const recaptcha = useRef(null);
  const [toEmail, setToEmail] = useState("digpal.parmar@prowerse.com");
  const [subject, setSubject] = useState("subject");
  const [message, setMessage] = useState("message");

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });

  const SubmitResume = (event) => {
    event.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
    } else {
      // make form submission
      alert("Form submission successful!");
    }

    // --------------------------------
    // aws send mail code
    // ---------------------------------
    const params = {
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Body: {
          Text: {
            Data: message,
          },
        },
        Subject: {
          Data: subject,
        },
      },
      Source: "pummy.sinha.prowerse@gmail.com", // Change to your verified email address in AWS SES
    };

    ses.sendEmail(params, function (err, data) {
      if (err) {
        console.error("Error sending email:", err);
      } else {
        console.log("Email sent successfully:", data);
        // Reset form fields after successful sending
        setToEmail("");
        setSubject("");
        setMessage("");
      }
    });

    // ---------------------------------

    // smtpsjs email send mail
    // ---------------------------------

    // event.preventDefault();
    // // event.prevenDefault();
    // const confirMail = {
    //     // Username:"pummy.sinha.prowerse@gmail.com",
    //     // Password:"16EB80FAA7E74EF9126CE629ED1F7884F4A5",
    //     // Host:"smtp.elasticemail.com",
    //     SecureToken:"873c55dd-3a3f-4392-80eb-76a2013fe9b1",
    //     Post:2525,
    //     To:"pummy.sinha.prowerse@gmail.com",
    //     From:"pummysinha02@gmail.com",
    //     Subject:"This is subject",
    //     Body:"And this is the body"
    //     }
    // console.log("pppppuuuummmyyyyy")
    // console.log(window.Email,"-------window.Email")
    // if(window.Email){
    //     window.Email.send({
    //         SecureToken:"873c55dd-3a3f-4392-80eb-76a2013fe9b1",
    //         Post:2525,
    //         To:"pummy.sinha.prowerse@gmail.com",
    //         From : "pummysinha02@gmail.com",
    //         Subject:"This is subject",
    //         Body:"And this is the body",

    //     }).then(
    //       message => alert(message)
    //     );}
    // window.Email.send(confirMail).then(
    //     message => alert(message)
    //   );
  };

  return (
    <>
      <section id="hero-contact" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#JOB APPLICATION</h1>

              <h5>
                Prowerse is looking for smart, intelligent and awesome people to
                join our global workforce for a challenging & rewarding career.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>RESUME APPLICATION FORM</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Please fill the job application form below and one of
              representative shall get in touch with you soon.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Select Experiencer"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="file"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Resume"
                      required
                    />
                     <div className="col form-group">
                      <span>Please confirm that you are human *</span>
                      
                      <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} /></div>
                    
                    
                  </div>
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" onClick={SubmitResume}>
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default PostResume;
