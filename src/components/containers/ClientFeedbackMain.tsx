import React from "react";
import Image from "next/image";
import avatar from "public/images/testimonial/avatar.png";

const ClientFeedbackMain = () => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                Connect to Future exceeded our expectations with their exceptional service and expertise. Their team was attentive to our needs and delivered a stunning website that perfectly captures our brand identity. We highly recommend their services to anyone looking for top-notch IT solutions.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>John Doe</h5>
                  <p>CEO, ABC Company</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                Working with Connect to Future was a game-changer for our business. Their digital marketing strategies helped us increase our online visibility and attract more customers than ever before. Their team's dedication and professionalism made the entire process seamless and enjoyable.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Jane Smith</h5>
                  <p>Marketing Manager, XYZ Corporation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                Connect to Future's UI designing team transformed our outdated website into a modern, user-friendly platform that has significantly improved our customer engagement. Their attention to detail and creative approach exceeded our expectations, and we couldn't be happier with the results.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Mike Johnson</h5>
                  <p>Founder, Acme Technologies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                We were impressed by Connect to Future's expertise in database handling. They helped us optimize our database infrastructure, improving efficiency and security while reducing costs. Their team's professionalism and commitment to excellence made them a pleasure to work with.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Sarah Williams</h5>
                  <p>IT Manager, Global Enterprises</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                Connect to Future played a crucial role in the success of our branding initiative. From designing our logo to developing our brand strategy, their team demonstrated creativity, innovation, and a deep understanding of our vision. We are grateful for their partnership and highly recommend their services.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>David Brown</h5>
                  <p>Director of Marketing, Bright Ideas Inc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                Connect to Future's development team brought our mobile app idea to life with their technical expertise and dedication. They guided us through every step of the development process, ensuring that our app met our requirements and exceeded our expectations. We are thrilled with the final product and grateful for their support.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src={avatar} alt="Image" />
                </div>
                <div className="author-meta">
                  <h5>Emily Taylor</h5>
                  <p>Co-Founder, Tech Innovations Ltd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ClientFeedbackMain;
