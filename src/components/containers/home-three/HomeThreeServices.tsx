import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dotlarge from "public/images/agency/dot-large.png";
import one from "public/images/service/one.webp";
import branding from "public/images/service/branding.png";
import development from "public/images/service/development.png";
import uiux from "public/images/service/uiux.png";

const HomeThreeServices = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section service-f fade-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary g-ind">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      What we offer
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">our main services</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-services"
                      className="btn btn--primary text-capitalize"
                    >
                      view all service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    01
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Branding</h4>
                  <div className="p-single">
                    <p>
                      Elevate your brand to new heights with strategic
                      development, unforgettable visuals, and messaging that
                      resonates deeply with your audience. Let us tell your
                      story and connect you to the future.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Brand Strategy & Development
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Logo & Visual Design
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Messaging & Communication
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Marketing & Advertising
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={branding} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    02
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>UI/UX Design</h4>
                  <div className="p-single">
                    <p>
                      Craft user-centric experiences that delight and engage. We
                      translate user needs into intuitive interfaces and
                      seamless journeys, driving success for your website, app,
                      or software.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      User Research & Analysis
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Interface Design
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      User Experience (UX) Design
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Prototyping & Testing
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={uiux} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    03
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Development</h4>
                  <div className="p-single">
                    <p>
                      Whether you need a robust website, captivating mobile app,
                      powerful software, or an efficient online store, our
                      skilled developers turn your vision into reality, on time
                      and within budget.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Web Development
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Content Management Systems (CMS)
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Plugins Development
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      E-commerce Development
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={development} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    04
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Digital Marketing</h4>
                  <div className="p-single">
                    <p>
                    From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and email campaigns, we offer a full range of digital marketing services to help businesses increase their online visibility and drive traffic, leads, and conversions.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      SEO Optimization
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Meta Tags
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Social Media Management
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Mobile-First Systems
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dotlarge} alt="Image" className="dot-img" />
    </section>
  );
};

export default HomeThreeServices;
