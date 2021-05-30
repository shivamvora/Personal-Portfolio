import React from "react";
import TypeWriter from "react-typewriter";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <Slide top>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#nav-wrap-close" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <AnchorLink className="smoothscroll" href="#home">
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="smoothscroll" href="#about">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="smoothscroll" href="#experience">
                Resume
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="smoothscroll" href="#portfolio">
                Works
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="smoothscroll" href="#testimonials">
                Testimonials
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="smoothscroll" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </Slide>
      
      <div className="row banner">
        
          <div className="banner-text">
            <Fade top delay={700}>
              <h1 className="responsive-headline">
                <span style={{ opacity: '0'}}>.</span><TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
              </h1>
            </Fade>
            <Fade bottom>
              <h3>
                Based in {city}. <span>{occupation}</span>. {description}.
              </h3>
            </Fade>
            <Slide right>
              <ul className="social">{networks}</ul>
            </Slide>
          </div>
      </div>

      <p className="scrolldown">
        <AnchorLink className="smoothscroll" href="#about">
          <img src="/images/scroll-down.gif" alt="" />
        </AnchorLink>
      </p>
    </header>
  );
};

export default Header;
