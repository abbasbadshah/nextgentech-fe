import React, {useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";
import emailjs from 'emailjs-com';

const ContactMain = () => {
  const [resultMessage, setResultMessage] = useState<string>(''); // Define resultMessage state

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm("service_jcrve5j", "template_lhbxe8l", form.current, "m2QacO1xqb7PXcACJ")
        .then(
          (result) => {
            console.log(result);
            setResultMessage("Thank you for your message! We'll get in touch soon.");
          },
          (error) => {
            console.log(error.text);
          }
        );
      form.current.reset();
    }
  };
    
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone</h4>
                <p>
                  <Link href="tel:+919191123541">Mobile : +91 91311 23541</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:info@connecttofuture.com">
                  info@connecttofuture.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    Tower Choraha Indore MP India
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Mon - Fri</p>
                <p>10 AM - 7 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49482446615!2d75.6990383003202!3d22.723888290820824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709963170219!5m2!1sen!2sin"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                      ref = {form}
                      onSubmit={sendEmail}
                    >
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="group-input ">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="company"
                            id="companyName"
                            placeholder="Company Name"
                            required
                          />
                        </div>
                        <div className="group-input drt">
                        <select className="subject" name="industry" required>
                          <option data-display="Subject">Select Industry</option>
                          <option data-display="Health Care">Health Care</option>
                          <option value="Finance">Finance</option>
                          <option value="Consultancy">Consultancy</option>
                          <option value="Agency">Agency</option>
                          <option value="Ecommerce">Ecommerce</option>
                          <option value="Retail">Retail</option>
                          <option value="Travel & Logistics">Travel & Logistics</option>
                          <option value="Public Services">Public Services</option>
                          <option value="Communication & Media">Communication & Media</option>
                          <option value="Education">Education</option>
                          <option value="Others">Others</option>
                        </select>
                        </div>
                      </div>
                      <div className="group-wrapper">
                      <div className="group-input drt">
                        <select className="subject" name="services-want" required>
                          <option data-display="Subject">Select Services</option>
                          <option value="Web App Development">Web App Development</option>
                          <option value="Web Development">Web Development</option>
                          <option value="SEO & Digital Maketing">SEO & Digital Maketing</option>
                          <option value="Graphic Desiging">Graphic Desiging</option>
                          <option value="Dashboard Development">Dashboard Development</option>
                        </select>
                      </div>
                      <div className="group-input ">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>
                      <div className="group-input ">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Leave a Message"
                          required
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                        {resultMessage && <p>{resultMessage}</p>}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
