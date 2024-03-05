import React, { useEffect, useState, useRef } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION, // Change to your desired AWS region
});

function PostResume() {
  const recaptcha = useRef(null);
  const [toEmail, setToEmail] = useState(process.env.REACT_APP_SOURCE);
  const [subject, setSubject] = useState("subject");
  const [message, setMessage] = useState("message");
  const [resume, setResume] = useState(null);
  const [Fileresume, setfileResume] = useState(null);

  const ses = new AWS.SES({ apiVersion: process.env.REACT_APP_API_VERSION });

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  // formData.append('file', file);
  //   const fileStream = fs.createReadStream(file.path);
  //   console.log("fileStream",fileStream)
  //   setResume(file);
  // };

  const SubmitResume = (event) => {
    console.log("resume", resume.name, resume.type, resume.webkitRelativePath);
    const formData = new FormData();
    formData.append("file", resume);
    event.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    // const attachmentPath = '/path/to/attachment.pdf'; // Replace with the path to your attachment
    // const attachmentName = 'attachment.pdf'; // Replace with the name of your attachment

    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
    } else {
      // make form submission
      alert("Form submission successful!");
    }

    // --------------------------------
    // aws send mail code
    // ---------------------------------
    // Read file content
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileData = fileReader.result;
      // const pdfAttachment = fs.readFileSync("path/to/your/pdf/file.pdf");
      // Define email parameters
      console.log(process.env.REACT_APP_SOURCE);
      const params = {
        Source: process.env.REACT_APP_SOURCE, // Replace with your verified email address in AWS SES
        Destination: {
          ToAddresses: [toEmail],
        },
        // Attachments: [
        //   {
        //     Filename: resume.name,
        //     Content: formData,
        //     ContentType: "application/octet-stream",
        //   },
        // ],
        // Attachments: [
        //   {
        //     FileName: resume.name,
        //     // Content: Buffer.from('This is the attachment content.'),
        //     Content: fileData,
        //     ContentType: resume.type,
        //   },
        //   //   {
        //   //     Filename: resume.name,
        //   //     Content: fileData,
        //   //     ContentType: resume.type,
        // ],

        Message: {
          Body: {
            // Html: {
            //   Charset: "UTF-8",
            //   Data: JSON.stringify(message),
            // },
            Text: {
              Data: message,
            },
          },
          Subject: {
            Data: subject,
          },
        },
        Attachments: [
          {
            Data: "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
            ContentType: "application/octet-stream",
            Filename: "Image_created_with_a_mobile_phone.png",
          },
        ],
      };

      // Add attachment
      // const attachmentPath = "/path/to/attachment.pdf"; // Replace with the path to your attachment
      // const attachmentName = "attachment.pdf"; // Replace with the name of your attachment

      // // Read the attachment file
      // const fileContent = fs.readFileSync(attachmentPath);

      // // Add the attachment to the email
      // params.Message.Body.Attachment = {
      //   Data: "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
      //   ContentType: "application/octet-stream",
      //   Filename: "Image_created_with_a_mobile_phone.png",
      // };
      // Send email
      ses.sendEmail(params, (err, data) => {
        if (err) {
          console.error("Error sending email:", err);
          alert("Failed to send email. Please try again later.");
        } else {
          console.log("Email sent successfully:", data);
          alert("Email sent successfully!");
          // Reset form fields after successful sending
          setToEmail("");
          setSubject("");
          setMessage("");
          setResume(null);
        }
      });
    };

    // Read file as base64 data
    fileReader.readAsDataURL(resume);
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
                    {/* <input
                      type="file"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Resume"
                      required
                    /> */}
                    <div className="input-group custom-file-button">
                      <label className="input-group-text" for="inputGroupFile">
                        Upload Resume
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setResume(e.target.files[0])}
                        // onChange={handleFileChange}
                      />
                    </div>
                    <br />
                    <br />
                    <div className="col form-group">
                      <span>Please confirm that you are human *</span>

                      <ReCAPTCHA
                        ref={recaptcha}
                        sitekey={process.env.REACT_APP_SITE_KEY}
                      />
                    </div>
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
