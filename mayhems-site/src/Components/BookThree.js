import { Parallax } from "react-parallax";
import Book3 from "../Images/Book3Nava.png";
import Nava from "../Images/Nava.webp";
import "./Books.css";

const BookThree = () => (
  <Parallax
    contentClassName="books1"
    blur={0}
    bgImage={Nava}
    bgImageAlt="bones on the ground"
    strength={500}
  >
    <div className="book-content">
      <p className="book1p">"A stunning conclusion to the series!"</p>
      <img className="bookcover1" src={Book3} alt="Nava book cover" />
    </div>
    <h3 className="booktitle1">
      Na<span>vă</span>
    </h3>
    <p className="bookblurb1">
      <span className="boldme1">
        Malthus has returned, and the demon is determined to shred the Widow’s
        Veil that separates Earth and Hell. Only Elena stands in his way…though
        she has another desperate battle to fight.
      </span>
      <br />
      <br />
      Consumed with an ancient and malevolent spirit, Elena is locked in a
      battle for her very soul. Win, and she may grow powerful enough to defeat
      Malthus. Lose, a ring of temples that hem in the dark magic will fall…and
      the Devil’s Cohort will be free to ravage the Earth.
      <br />
      <br />
      Malthus is racing to find the child and so fulfill his destiny: sacrifice
      her on the altar that lies within the Vampire’s Vault and welcome his
      children to Earth.
      <br />
      <br />
      Yet Malthus did not count on the return of his vengeful son, newly risen
      from the dead…
      <br />
      <br />
      <span className="boldme1">
        Get the explosive finale to the Vampire’s Vault series and immerse
        yourself in the timeless struggle of good versus evil…with a modern and
        riveting twist.
      </span>
      <br />
      <br />
      <span className="boldme1">
        Coming Soon!
      </span>
    </p>
  </Parallax>
);

export default BookThree;
