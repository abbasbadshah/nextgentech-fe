import React, { useState } from "react";
import Image from "next/image";
import thumb from "public/images/faq-thumb.png";

const FaqMain = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="faq__thumb fade-left">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion">
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 0 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingOne">
                  <button
                    className={
                      (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What services does Connect to Future offer?
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse${
                    imgTab === 0 ? " show " : ""
                  }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      At Connect to Future, we offer a comprehensive range of IT
                      services, including branding, UI designing, UX designing,
                      development, digital marketing, and database handling.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 1 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    className={
                      (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How can I request a quote for services?
                  </button>
                </h5>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse${
                    imgTab === 1 ? " show " : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      You can request a quote for our services by contacting us
                      through our website or reaching out to our team directly
                      via email or phone. We will be happy to discuss your
                      requirements and provide you with a customized quote
                      tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 2 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingThree">
                  <button
                    className={
                      (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Is Connect to Future only available in Madhya Pradesh,
                    India?
                  </button>
                </h5>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse${
                    imgTab === 2 ? " show " : ""
                  }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      While our headquarters are located in Madhya Pradesh,
                      India, we serve clients both locally and globally. We
                      leverage technology to collaborate with clients regardless
                      of their geographical location, ensuring that we can meet
                      the needs of businesses worldwide.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 3 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What industries does Connect to Future specialize in
                    serving?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${
                    imgTab === 3 ? " show " : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Connect to Future works with businesses across various
                      industries, including but not limited to e-commerce,
                      healthcare, education, finance, and technology. Our team
                      has expertise in adapting our services to meet the unique
                      needs of different industries and sectors.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 4 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 4 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How experienced is the team at Connect to Future?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${
                    imgTab === 4 ? " show " : ""
                  }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Our team at Connect to Future consists of highly skilled
                      professionals with years of experience in their respective
                      fields. We have a proven track record of delivering
                      successful projects and helping businesses achieve their
                      goals through innovative IT solutions and strategic
                      guidance.
                    </p>
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

export default FaqMain;
