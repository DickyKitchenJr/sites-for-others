import { Parallax } from "react-parallax";
import Book3 from "../Images/Book3Nava.png";
import Girl from "../Images/blurGirl.jpg";
import "./Books.css";

const BookThree = () => (
  <Parallax
    contentClassName="books"
    blur={0}
    bgImage={Girl}
    bgImageAlt="blurred girl walking"
    strength={500}
  >
    <figure>
      <img
        className="bookcover"
        src={Book3}
        alt="Nava book cover"
      />
      <figcaption className="bookreview">
        "A stunning conclusion to the series!"
      </figcaption>
    </figure>
  </Parallax>
);

export default BookThree;
