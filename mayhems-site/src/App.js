import Header from "./Components/Header";
import Author from "./Components/Author";
import BookOne from "./Components/BookOne";
import BookTwo from "./Components/BookTwo";
import BookThree from "./Components/BookThree";
import BookFour from "./Components/BookFour";
import ContactMe from "./Components/ContactMe";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Author />
      <h2 className="spacer">BOOKS</h2>
      {/* Book One */}
      <BookOne />
      {/* Book Two */}
      <BookTwo />
      {/* Book Three */}
      <BookThree />
      {/* Book Four */}
      <BookFour />
      {/* Contact Me */}
      <ContactMe />
      <div className="booktext">
        <h3 className="booktitle">
          From the <span>Author</span> 
        </h3>
        <p className="authorblurb">
          If you enjoy dark humor, ghoulish adventure, and flawed heroes, you
          will love the enthralling and bloody works of Stephen Mills
        </p>
        <p className="authorblurb">
          For all news, follow the author's social media on{" "}
          <a
            href="https://www.instagram.com/Stephen.mills.writes/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>{" "}
          and on{" "}
          <a
            href="https://www.facebook.com/pursuitofmayhem"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
