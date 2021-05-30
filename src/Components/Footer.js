import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = ({ data }) => {
  if (data) {
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Made by 💛{" "}
              <a title="Shivam" href="http://www.ksdevware.com/">
                Shivam Vora
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <AnchorLink className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
