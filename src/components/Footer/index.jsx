/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMediaQuery } from "@material-ui/core";
import logo from "../../images/whiteIcon.png";
import logoFull from "../../images/whiteLogo.png";
import { scroller } from "react-scroll";

const Footer = () => {
  const isPhone = useMediaQuery("(max-width: 640px)");
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <img
              className="header-logo-image"
              src={isPhone ? logoFull : logo}
              alt="deqree"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                scroller.scrollTo("site-header", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                });
              }}
            />
          </div>
          <ul
            className="footer-links list-reset"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              fontSize: isPhone && "9px",
            }}
          >
            <li>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/13yXEp9yfZ6JPAvVwiCjxkCl10iSQDk1w/view"
                // className="navlinks"
                style={{
                  textDecoration: "none",
                  // marginLeft: "10px",
                  border: 0,
                }}
                onClick={() => {
                  scroller.scrollTo("contact-wrapper", {
                    duration: 800,
                    delay: 0,
                    smooth: "easeInOutQuart",
                  });
                }}
              >
                White Paper
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  scroller.scrollTo("deq", {
                    duration: 800,
                    delay: 0,
                    smooth: "easeInOutQuart",
                  });
                }}
                style={{ border: 0 }}
                // className="navlinks"
              >
                Why deqree
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                // className="navlinks"
                style={{
                  textDecoration: "none",
                  // marginLeft: "10px",
                  border: 0,
                }}
                onClick={() => {
                  scroller.scrollTo("roadmap", {
                    duration: 800,
                    delay: 0,
                    smooth: "easeInOutQuart",
                  });
                }}
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                // className="navlinks"
                style={{
                  textDecoration: "none",
                  // marginLeft: "10px",
                  border: 0,
                }}
                onClick={() => {
                  scroller.scrollTo("contact-wrapper", {
                    duration: 800,
                    delay: 0,
                    smooth: "easeInOutQuart",
                  });
                }}
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={{
                  textDecoration: "none",
                  // paddingRight: "20px",
                  border: 0,
                }}
                // className="navlinks"
                onClick={() => {
                  scroller.scrollTo("about-wrapper", {
                    duration: 800,
                    delay: 0,
                    smooth: "easeInOutQuart",
                  });
                }}
              >
                About us
              </a>
            </li>
          </ul>

          <ul className="footer-social-links list-reset">
            <li style={{ cursor: "pointer" }}>
              <a href="/">
                <span className="screen-reader-text">Facebook</span>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                    fill={isPhone ? "#0270D7" : "rgba(0, 0, 0, 0)"}
                  />
                </svg>
              </a>
            </li>
            <li style={{ cursor: "pointer" }}>
              <a href="https://twitter.com/deqree">
                <span className="screen-reader-text">Twitter</span>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                    fill={isPhone ? "#0270D7" : "rgba(0, 0, 0, 0)"}
                  />
                </svg>
              </a>
            </li>
            <li style={{ cursor: "pointer" }}>
              <a href="/">
                <span className="screen-reader-text">Google</span>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                    fill={isPhone ? "#0270D7" : "rgba(0, 0, 0, 0)"}
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            &copy; 2021 Deqree, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
