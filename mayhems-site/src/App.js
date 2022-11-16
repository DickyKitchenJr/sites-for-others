import Header from './Components/Header';
import Author from './Components/Author';
import BookOne from './Components/BookOne';
import BookTwo from './Components/BookTwo';
import BookThree from './Components/BookThree';
import BookFour from './Components/BookFour';
import ContactMe from './Components/ContactMe';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Author />
      <h2 className="spacer">BOOKS</h2>
      {/* Book One */}
      <BookOne />
      <div className="booktext">
        <h3 className="booktitle">
          The <span>Devil's</span> Cohort
        </h3>
        <p className="bookblurb">
          She is infected with a Godlike power. Now the vampire wants it for
          himself.
          <br />
          <br />
          Elena is elated to be on the cusp of a festival marking her journey
          into womanhood, but that happiness is tainted by a powerful secret she
          keeps…a secret that is bound to a timeless and dark prophesy.
          <br />
          <br />
          Charles, a half-human bastard son of the vampire Cosmin the Wicked,
          reels from centuries of damnation. Condemned to live forever, he is
          determined to destroy his father and lift the plague of a curse on his
          soul.
          <br />
          <br />
          Together, the unlikely pair must fight to right an ancient wrong and
          protect humanity from a primeval horror…one that is older than
          humanity itself and hungers to conquer Earth. Can they triumph over
          this ancient evil and save millions of lives?
          <br />
          <br />
          Or will The Devil’s Cohort be unleashed?
          <br />
          <br />
          <span>
            Purchase on &nbsp;
            <a
              href="https://www.amazon.com/gp/product/B08XPQ76DM/ref=dbs_a_def_rwt_bibl_vppi_i0"
              target="_blank"
              rel="noreferrer"
            >
              Amazon
            </a>
          </span>
        </p>
      </div>
      {/* Book Two */}
      <BookTwo />
      <div className="booktext">
        <h3 className="booktitle">
          A Wanderer <span>Among</span> The Dead
        </h3>
        <p className="bookblurb">
          Cosmin has been destroyed, but after Elena's seemingly impossible
          victory, an even greater evil has been unleashed...
          <br />
          <br />
          After losing Charles to the malicious whims of Cosmin the Wicked,
          Elena struggles alone with her purpose and the mysterious prophecy: He
          who destroys, must be destroyed...but how? She longs for simpler days
          and the looming festival, but even that celebration was sprung from a
          dark and ancient secret.
          <br />
          <br />
          As the power within her grows and the day of the festival approaches,
          Elena must decide...accept her fate and embrace being humanity's
          savior, or run from her frightening destiny? Now a new and more
          Earthly evil has come to Elena's village in search of the very
          artifact that she must use to destroy the demon...this time, for good.
          <br />
          <br />
          Malthus has been reunited with his rebellious children in Hell's
          wastelands, yet all he desires is to sweep across the Earth at the
          head of The Devil's Cohort. One problem remains: the barrier between
          worlds is intact and impassable, and Malthus has no way to return to
          Earth.
          <br />
          <br />
          Or does he?
          <br />
          <br />
          Though banished, the demon refuses to concede defeat. Now Earth's last
          hope is alone, haunted and tortured by the power growing within her,
          and though Elena mourns for Charles, the dead do not always stay
          dead...
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
      </div>
      {/* Book Three */}
      <BookThree />
      <div className="booktext">
        <h3 className="booktitle">
          Na<span>v</span>ă
        </h3>
        <p className="bookblurb">Navă book blurb goes here</p>
      </div>
      {/* Book Four */}
      <BookFour />
      <div className="booktext">
        <h3 className="booktitle">Isleman: A Novel of Scotland</h3>
        <p className="bookblurb">Isleman book blurb goes here</p>
      </div>
      {/* Contact Me */}
      <ContactMe />
    </>
  );
}

export default App;
