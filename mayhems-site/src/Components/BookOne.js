import { Parallax } from "react-parallax";
import Book1 from "../Images/Book1TDC.png";
import Sunset from "../Images/sunset.jpg";
import "./Books.css";

const BookOne = () => (
  <Parallax
    contentClassName="books"
    blur={1}
    bgImage={Sunset}
    bgImageAlt="sunset over trees"
    strength={500}
  >
    <figure>
      <img
        className="bookcover"
        src={Book1}
        alt="The Devils Cohort book cover"
      />
      <figcaption className="bookreview">
        "The Devil’s Cohort reads like a George R.R. Martin novel and hooked me
        right from the start"
      </figcaption>
    </figure>
  </Parallax>
);

export default BookOne;
