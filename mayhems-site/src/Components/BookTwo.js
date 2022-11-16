import { Parallax } from "react-parallax";
import Book2 from "../Images/Book2Wanderer.png";
import Bats from "../Images/bats.jpg";
import "./Books.css";

const BookTwo = () => (
  <Parallax
    contentClassName="books"
    blur={1}
    bgImage={Bats}
    bgImageAlt="bats at sunset"
    strength={500}
  >
    <figure>
      <img
        className="bookcover"
        src={Book2}
        alt="A Wanderer Among The Dead book cover"
      />
      <figcaption className="bookreview">
        "A Wanderer Among the Dead picks up right where The Devil's Cohort left
        off. I absolutely loved this book!"
      </figcaption>
    </figure>
  </Parallax>
);

export default BookTwo;
