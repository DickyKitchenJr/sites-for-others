import { Parallax } from "react-parallax";
import HeadShot from "../Images/StephenHeadShot.jpg";
import BooksBackground from "../Images/booksbackground.jpg";
import "./Author.css";

const Author = () => (
  <Parallax
    className="authorWriteUp"
    contentClassName="author"
    blur={2}
    bgImage={BooksBackground}
    bgImageAlt="random books"
    strength={500}
  >
    <figure>
      <img className="headshot" src={HeadShot} alt="author head shot" />
      <figcaption className="authorBio">
        Stephen Mills was born outside of Seattle, Washington, and joined the
        U.S. Navy in 1996, where he was stationed in Florida.Upon leaving the
        naval service, his family relocated back to Seattle before moving to
        Colorado in 2008. He currently resides in Arizona.Stephen has enjoyed
        books throughout his life, with interests ranging from non-fiction and
        biographies to historical fiction/adventure and dark fantasy.A lover of
        adventure from his earliest memories, Stephen writes the stories he
        always wanted to read, but could only rarely find.
      </figcaption>
    </figure>
  </Parallax>
);

export default Author;
