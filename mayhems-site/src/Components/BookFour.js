import { Parallax } from "react-parallax";
import Book4 from "../Images/IslemanBook.png";
import Isleman from "../Images/Isleman.webp";
import "./Books.css";

const BookFour = () => (
  <Parallax
    contentClassName="books"
    blur={1}
    bgImage={Isleman}
    bgImageAlt="mountain backdrop"
    strength={500}
  >
    <figure>
      <img className="bookcover" src={Book4} alt="Isleman book cover" />
      <figcaption className="bookreview">
        "A fresh and gripping piece of historical fiction!"
      </figcaption>
    </figure>
  </Parallax>
);

export default BookFour;
