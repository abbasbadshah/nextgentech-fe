import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import clutch from "public/images/agency/clutch.png";
import thumbthree from "public/images/agency/thumb-three.webp";

const HomeThreeAgency = () => {
  return (
    <section className="section agency agency-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image src={thumbthree} alt="Image" className="fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                About Us
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                We are digital creative agency in India
              </h2>
              <div className="paragraph">
                <p>
                  Welcome to Connect to Future, where innovation meets
                  excellence. Established in 2021, we have rapidly emerged as
                  one of the leading IT companies in India, particularly in
                  Madhya Pradesh (MP). Our relentless commitment to delivering
                  top-notch services in branding, UI designing, UX designing,
                  development, and database handling sets us apart in the
                  industry. At Connect to Future, we envision a digital
                  landscape where businesses thrive with cutting-edge solutions.
                  Join us on this journey to connect to the future today.
                </p>
              </div>
              <div className="cta section__content-cta">
                <div className="single">
                  <h5 className="fw-7">5+</h5>
                  <p className="fw-5">years of experience</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">100+</h5>
                  <p className="fw-5">completed projects</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">10+</h5>
                  <p className="fw-5">Head Executives</p>
                </div>
              </div>
              <div className="section__content-cta cta-group">
                <Link href="/" className="clutch">
                  <Image src={clutch} alt="Image" />
                </Link>
                <Link
                  href="contact-us"
                  className="btn btn--primary text-capitalize"
                >
                  Book A Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={dotlarge} alt="Image" className="dot-large" />
    </section>
  );
};

export default HomeThreeAgency;
