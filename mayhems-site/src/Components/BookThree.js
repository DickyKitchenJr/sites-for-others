import { Parallax } from "react-parallax";
import Book3 from "../Images/Book3Nava.png";
import Nava from "../Images/Nava.webp";
import "./Books.css";

const BookThree = () => (
  <Parallax
    contentClassName="books"
    blur={0}
    bgImage={Nava}
    bgImageAlt="bones on the ground"
    strength={500}
  >
    <figure>
      <img className="bookcover" src={Book3} alt="Nava book cover" />
      <figcaption className="bookreview">
        "A stunning conclusion to the series!"
      </figcaption>
    </figure>
  </Parallax>
);

export default BookThree;
