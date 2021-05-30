import React from "react";
import Button from "./Button";
import Slide from 'react-reveal/Slide';

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <Slide bottom key={projects.title}>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img loading="lazy" alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        </Slide>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-thirds s-bgrid-halves cf"
          >
            {projects}
          </div>
        </div>
        <center><Button title="Check Out my GitHub" link="https://github.com/shivamvora" /></center>
      </div>
    </section>
  );
};

export default Portfolio;
