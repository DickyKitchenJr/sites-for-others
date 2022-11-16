import { Parallax } from "react-parallax";
import Family from "../Images/EdinburghCastle.png";
import "./ContactMe.css";

const ContactMe = () => (
  <Parallax
    contentClassName="contactme"
    blur={0}
    bgImage={Family}
    bgImageAlt="author and spouse"
    strength={500}
  >
    <p className="contact">
      If you'd like to purchase a signed copy of any of Stephen Mill's books,
      you can request them here:
    </p>
    <p className="contact">
      <a
        href="https://www.instagram.com/Stephen.mills.writes/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </p>
    <p className="contact">Or Here</p>
    <p className="contact">
      <a
        href="https://www.facebook.com/pursuitofmayhem"
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
    </p>
  </Parallax>
);

export default ContactMe;
