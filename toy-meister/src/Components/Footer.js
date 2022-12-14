import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <p className="footer">
        Follow us on{" "}
        <a
          href="https://www.facebook.com/toymeistertoys"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>{" "}
        and shop products online at our{" "}
        <a
          href="https://www.ebay.com/usr/toymeistertoys"
          target="_blank"
          rel="noreferrer"
        >
          Ebay
        </a>{" "}
        store.
      </p>
    </>
  );
}

export default Footer;
