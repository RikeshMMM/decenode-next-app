import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-light bg-dark">
      <div className="container">
        <div className="py-3 text-center">
          <div className="row align-items-center justify-content-center g-3">
            <div className="col-sm-4">
              <a className="navbar-brand" href="#landing-section">
                <Image
                  src={"/images/Logo_White_H.svg"}
                  width={253 / 1.5}
                  height={36 / 1.5}
                  quality={90}
                  alt="decenode logo"
                />
              </a>
              <p className="text-secondary m-0">Sharing Power One Click Away</p>
            </div>
            <div className="col-sm-4">
              <ul className="list-unstyled d-flex flex-column flex-sm-row align-items-center justify-content-center mb-0">
                <li>
                  <a
                    href="#about-section"
                    className="btn btn-link text-decoration-none text-uppercase text-light"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#usp-section"
                    className="btn btn-link text-decoration-none text-uppercase text-light"
                  >
                    How
                  </a>
                </li>
                <li>
                  <a
                    href="#features-section"
                    className="btn btn-link text-decoration-none text-uppercase text-light"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing-section"
                    className="btn btn-link text-decoration-none text-uppercase text-light"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="list-unstyled d-flex align-items-center lign-items-center justify-content-center mb-0">
                <li>
                  <a href="" className="btn btn-link text-light">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </li>
                <li>
                  <a href="" className="btn btn-link text-light">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </li>
                <li>
                  <a href="" className="btn btn-link text-light">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </li>
                <li>
                  <a href="" className="btn btn-link text-light">
                    <FontAwesomeIcon icon={faDiscord} size="lg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
