import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="authortext">
        <h3 className="authortitle">
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

export default Footer;
