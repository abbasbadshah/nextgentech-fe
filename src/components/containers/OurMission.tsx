import React from "react";
import Image from "next/image";
import one from "public/images/mission/one.png";
import two from "public/images/mission/two.png";

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      mission & vission
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">our mission & value</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                  <div className="text-center text-lg-start">
                    <p>
                      Assembling the team of talented people to enhance your
                      experience of IT solutions at xpovio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Empowering Businesses for Success</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                Our mission at Connect to Future is simple yet ambitious: to empower businesses to thrive in the digital age. We believe that every business, regardless of size or industry, deserves access to the tools and resources needed to succeed in today's competitive marketplace. With this in mind, we are committed to providing innovative IT solutions, unparalleled expertise, and exceptional service to our clients. By understanding their unique needs and challenges, we strive to deliver tailored solutions that drive growth, efficiency, and success.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={one} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={two} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Building a Brighter Future Through Technology</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                At Connect to Future, our vision is to be a catalyst for positive change and innovation in the business world. We envision a future where technology is not just a tool, but a driver of transformation and progress. By leveraging the latest advancements in IT, we aim to help businesses unlock new opportunities, streamline operations, and achieve their full potential. Through our relentless pursuit of excellence and commitment to innovation, we aspire to shape a brighter future for businesses and communities alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
