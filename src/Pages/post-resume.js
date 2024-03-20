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
            Data: "RESUME APPLICATION FORM",
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
  };

  // const SubmitResume = (event) => {
    // const formData = new FormData();
    // formData.append("file", resume);
    // event.preventDefault();
    // const captchaValue = recaptcha.current.getValue();
    // if (!captchaValue) {
    //   alert("Please verify the reCAPTCHA!");
    // } else {
    //   // make form submission
    //   alert("Form submission successful!");
    // }
    // console.log("resume", URL.createObjectURL(resume));

    // --------------------------------
    // aws send mail code
    // ---------------------------------
   
    // Read the file as a data URL
    // const reader = new FileReader();
    // reader.readAsDataURL(resume);
  //   try {
  //     // Read the file as a data URL
  //     const reader = new FileReader();
  //     reader.readAsDataURL(resume);

  //     reader.onload = async () => {
  //       const fileDataUrl = reader.result;
  //       const attachmentUrl = await uploadFileToServer(resume);
  //       sendEmailWithAttachment(fileDataUrl);
        
  //     };
  //   } catch (error) {
  //     console.error('Error reading file:', error);
  //     alert('Error reading file. Please try again later.');
  //   }
  
   
  // };
  // const uploadFileToServer = async (file) => {
  //   // Perform file upload to your server
  //   // This is just a placeholder function, you need to implement the actual upload logic
  //   // Return the URL of the uploaded file
  //   return 'http://localhost:3000/uploads/' + encodeURIComponent(resume.name);
  // };
  // const sendEmailWithAttachment = async (attachmentDataUrl) => {
  //   console.log("attachmentDataUrl",attachmentDataUrl)
  //   const ses = new AWS.SES({
  //     region: process.env.REACT_APP_REGION
  //   });
  //   const params = {
  //     Destination: {
  //       ToAddresses: [toEmail],
  //     },
  //     Message: {
  //       Body: {
  //         Text: {
  //           Data: 'Here is the file you requested.'
  //         }
  //       },
  //       Subject: {
  //         Data: 'File attachment'
  //       }
  //     },
  //     Source: process.env.REACT_APP_SOURCE,
  //     ReplyToAddresses: [toEmail],
  //     Message: {
  //       Body: {
  //         Text: {
  //           Data: 'Here is the file you requested.'
  //         }
  //       },
  //       Subject: {
  //         Data: 'File attachment'
  //       }
  //     },
  //     ReplyToAddresses: [toEmail],
  //     Attachments: [
  //       {
  //         Filename: resume.name,
  //         Content: attachmentDataUrl.split(';base64,')[1],
  //         ContentType: resume.type
  //       }
  //     ]
  //   };

  //   try {
  //     await ses.sendEmail(params).promise();
  //     alert('Email sent successfully.');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('Error sending email. Please try again later.');
  //   }
  // };
  return (
    <>
      <section id="hero-contact" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#JOB APPLICATION</h1>
              {/* {resume && (
                <div>
                  <img src={URL.createObjectURL(resume)} alt="Preview" />
                </div>
              )} */}

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
                      required
                      value={email} // Set value to the state variable
                      onChange={(e) => setEmail(e.target.value)} // Update state variable on change
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
                      value={phoneNumber} // Set value to the state variable
                      onChange={(e) => setPhoneNumber(e.target.value)} // Update state variable on change
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Experiencer"
                      required
                      value={experience} // Set value to the state variable
                      onChange={(e) => setExperience(e.target.value)} // Update state variable on change
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
                        accept=".pdf,.doc,.docx,.png,.jpg"
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
      <Footer />
    </>
  );
}
export default PostResume;
