import React, { useEffect, useState, useRef } from "react";
// import Footer from "./Footer";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION, // Change to your desired AWS region
});

function JoinUsForm() {
  const recaptcha = useRef(null);
  const [toEmail, setToEmail] = useState(process.env.REACT_APP_SOURCE);
  // const [subject, setSubject] = useState("subject");
  // const [message, setMessage] = useState("message");
  // const [resume, setResume] = useState(null);
  const [name, setName] = useState(""); // State for name field
  const [email, setEmail] = useState(""); // State for email field
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number field
  const [experience, setExperience] = useState(""); // State for experience field

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
    // const formData = new FormData();
    // formData.append("file", resume);
    event.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    // const attachmentPath = '/path/to/attachment.pdf'; // Replace with the path to your attachment
    // const attachmentName = 'attachment.pdf'; // Replace with the name of your attachment

    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
    } else {
      // make form submission
      const emailBody = `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Experience: ${experience}
      `;
      const params = {
        Source: process.env.REACT_APP_SOURCE, // Replace with your verified email address in AWS SES
        Destination: {
          ToAddresses: [toEmail],
        },
        Message: {
          Subject: {
            Data: "JOIN US FORM",
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: emailBody,
              Charset: "UTF-8",
            },
          },
        },
      };
      // alert("Your message has been sent. Thank you!");
      ses.sendEmail(params, (err, data) => {
        if (err) {
          alert("Failed to send email. Please try again later.");
        } else {
          alert("Your message has been sent. Thank you!");
          // Reset form fields after successful sending
          setName("");
          setEmail("");
          setPhoneNumber("");
          setExperience("");
        }
      });
    }

    // --------------------------------
    // aws send mail code
    // ---------------------------------
    // Read file content
    // const fileReader = new FileReader();
    // fileReader.onload = () => {
    //   const fileData = fileReader.result;
    // const pdfAttachment = fs.readFileSync("path/to/your/pdf/file.pdf");
    // Define email parameters

    // const mail = mailcomposer({
    //   from: toEmail,
    //   to: "pummysinha02@gmail.com",
    //   subject: "Your email subject",
    //   text: "Your email body text",
    //   attachments: [
    //     {
    //       filename: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
    //       content: "BASE64_ENCODED_ATTACHMENT_DATA",
    //       contentType: "application/pdf",
    //     },
    //   ],
    // });

    // Build the email message
    // mail.build(function (mailBuildError, message) {
    //   if (mailBuildError) {
    //     console.log("Error building email: ", mailBuildError);
    //   } else {
    //     // Send the raw email with attachments
    //     const params = {
    //       Source: toEmail,
    //       RawMessage: {
    //         Data: message.toString(),
    //       },
    //     };
    //     // Use AWS SES SDK to send raw email
    //     ses.sendRawEmail(params, function (err, data) {
    //       if (err) console.log(err, err.stack);
    //       else console.log(data);
    //     });
    //   }
    // });
    // const params = {
    //   from :{
    //     name:'pummy',
    //     address:toEmail
    //   },
    //   to:"pummysinha02@gmail.com",
    //   subject:"test mail",
    //   text:"test mail"
    // }
    // Send email

    // };

    // Read file as base64 data
    // fileReader.readAsDataURL(resume);
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
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>JOIN US FORM</h2>
          </div>
          <div className="sub-section-title">
            <p>
              We are always in the hunt for great talent. Please fill the job
              application form below and one of our representatives shall get in
              touch with you soon.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <form
               
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
                      value={name} // Set value to the state variable
                      onChange={(e) => setName(e.target.value)} // Update state variable on change
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={email} // Set value to the state variable
                      onChange={(e) => setEmail(e.target.value)} // Update state variable on change
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
                      value={phoneNumber} // Set value to the state variable
                      onChange={(e) => setPhoneNumber(e.target.value)} // Update state variable on change
                      requiredp
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Experience"
                      value={experience} // Set value to the state variable
                      onChange={(e) => setExperience(e.target.value)} // Update state variable on change
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
                    {/* <div className="input-group custom-file-button">
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
                    </div> */}
                    {/* <br />
                    <br /> */}
                    <div className="col form-group">
                      <span>Please confirm that you are human *</span>

                      <ReCAPTCHA
                        ref={recaptcha}
                        sitekey={process.env.REACT_APP_SITE_KEY}
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
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
      {/* <Footer /> */}
    </>
  );
}
export default JoinUsForm;
