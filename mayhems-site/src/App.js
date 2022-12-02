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
      {/* <div className="booktext">
        <h3 className="booktitle">
          A Wanderer <span>Among</span> The Dead
        </h3>
        <p className="bookblurb">
          <span className="boldme">
            Cosmin has been destroyed, but after Elena’s seemingly impossible
            victory, an even greater evil has been unleashed…
          </span>
          <br />
          <br />
          Malthus has been reunited with his rebellious children in Hell’s
          wastelands, yet all he desires is to sweep across the Earth at the
          head of the Devil’s Cohort. One problem remains: the barrier between
          worlds is intact and impassable, and Malthus has no way to return to
          Earth. Or does he?
          <br />
          <br />
          After losing Charles to the malicious whims of Cosmin the Wicked,
          Elena struggles alone with her purpose and the mysterious prophecy: He
          who destroys, must be destroyed…but how? As the power within her
          grows, Elena must decide…accept her fate and embrace being humanity’s
          savior, or run from her terrifying destiny?
          <br />
          <br />
          Humanity’s last hope is alone, haunted and tortured by the power
          growing within her, and though Elena mourns for Charles, the dead do
          not always stay dead…
          <br />
          <br />
          <span className="boldme">
            Get A Wanderer Among the Dead and immerse yourself in the timeless
            struggle of good versus evil…with a modern and riveting twist.
          </span>
          <br />
          <br />
          <span>
            Purchase on &nbsp;
            <a
              href="https://www.amazon.com/gp/product/B09KFX5MRJ?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks"
              target="_blank"
              rel="noreferrer"
            >
              Amazon
            </a>
          </span>
        </p>
      </div> */}
      {/* Book Three */}
      <BookThree />
      <div className="booktext">
        <h3 className="booktitle">
          Na<span>v</span>ă
        </h3>
        <p className="bookblurb">
          <span className="boldme">
            Malthus has returned, and the demon is determined to shred the
            Widow’s Veil that separates Earth and Hell. Only Elena stands in his
            way…though she has another desperate battle to fight.
          </span>
          <br />
          <br />
          Consumed with an ancient and malevolent spirit, Elena is locked in a
          battle for her very soul. Win, and she may grow powerful enough to
          defeat Malthus. Lose, a ring of temples that hem in the dark magic
          will fall…and the Devil’s Cohort will be free to ravage the Earth.
          <br />
          <br />
          Malthus is racing to find the child and so fulfill his destiny:
          sacrifice her on the altar that lies within the Vampire’s Vault and
          welcome his children to Earth.
          <br />
          <br />
          Yet Malthus did not count on the return of his vengeful son, newly
          risen from the dead…
          <br />
          <br />
          <span className="boldme">
            Get the explosive finale to the Vampire’s Vault series and immerse
            yourself in the timeless struggle of good versus evil…with a modern
            and riveting twist.
          </span>
        </p>
      </div>
      {/* Book Four */}
      <BookFour />
      <div className="booktext">
        <h3 className="booktitle">Isleman: A Novel of Scotland</h3>
        <p className="bookblurb">
          <span className="boldme">
            The King of Scots is dead, and the restless clans of the Isles have
            risen, their thirst for power and vengeance threatening to ignite an
            inferno that would consume the Kingdom of Scotland.
          </span>
          <br />
          <br />
          Thomas Skene, banished to the wilds of western Scotland, grew up
          without family nor home. Now his only friend has been called home to
          the Isle of Skye with Thomas in tow, and the secret he carries did not
          stay a secret for long.
          <br />
          <br />
          Pursued by enemies, hunted by assassins, and caught up in the cunning
          game of an empty throne, Nial and Thomas are forced to navigate the
          bloody waters of clans and politics before the kingdom itself explodes
          into warfare and rebellion.
          <br />
          <br />
          <span className="boldme">
            Get Isleman and find yourself transported to the perilous and
            intoxicating Scottish Highlands of the sixteenth century.
          </span>
        </p>
      </div>
      {/* Contact Me */}
      <ContactMe />
      <div className="booktext">
        <h3 className="booktitle">
          From <span>The</span> Author
        </h3>
        <p className="authorblurb">
          If you enjoy ghoulish worlds teeming dark humor, and flawed heroes
          destined to battle against impossible odds, you’ll love the
          enthralling and bloody works of Stephen Mills.
        </p>
        <p className="authorblurb">
          Follow the author on{" "}
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
