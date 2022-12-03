import { Parallax } from "react-parallax";
import Book4 from "../Images/IslemanBook.png";
import Isleman from "../Images/Isleman.webp";
import "./Books.css";

const BookFour = () => (
  <Parallax
    contentClassName="books1"
    blur={1}
    bgImage={Isleman}
    bgImageAlt="mountain backdrop"
    strength={500}
    bgClassName="mountains"
  >
    <div className="book-content">
      <p className="book1p">
        "A fresh and gripping piece of historical fiction!"
      </p>
      <img className="bookcover1" src={Book4} alt="Isleman book cover" />
    </div>
    <h3 className="booktitle1">Isleman: A Novel of Scotland</h3>
    <p className="bookblurb1">
      The King of Scots is dead, and the restless clans of the Isles have risen,
      their thirst for power and vengeance threatening to ignite an inferno that
      would consume the Kingdom of Scotland.
      <br />
      <br />
      Thomas Skene, banished to the wilds of western Scotland, grew up without
      family nor home. Now his only friend has been called home to the Isle of
      Skye with Thomas in tow, and the secret he carries did not stay a secret
      for long.
      <br />
      <br />
      Pursued by enemies, hunted by assassins, and caught up in the cunning game
      of an empty throne, Nial and Thomas are forced to navigate the bloody
      waters of clans and politics before the kingdom itself explodes into
      warfare and rebellion.
      <br />
      <br />
      Get Isleman and find yourself transported to the perilous and intoxicating
      Scottish Highlands of the sixteenth century.
      <br />
      <br />
      Coming Soon!
    </p>
  </Parallax>
);

export default BookFour;
