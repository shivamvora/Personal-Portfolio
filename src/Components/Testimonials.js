import React from "react";
import Fade from 'react-reveal/Fade';

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      return (
        <Fade bottom cascade key={testimonials.user}>
          <li>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        </Fade>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <Fade right>
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </Fade>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
