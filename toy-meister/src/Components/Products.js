import React, { useState } from "react";
import "./Products.css";
import { ProductPics } from "./ProductPics";

function Products() {
  const [picCount, setPicCount] = useState(0);

  const onLeftClick = () => {
    if (picCount === 0) {
      setPicCount(19);
    } else {
      setPicCount(picCount - 1);
    }
  };

  const onRightClick = () => {
    if (picCount === 19) {
      setPicCount(0);
    } else {
      setPicCount(picCount + 1);
    }
  };

  return (
    <>
      <div>
        <h2>Thousands Of Toys To Choose From!</h2>
      </div>
      <div className="products">
        <button className="product-button" onClick={onLeftClick}>&#171;</button>

        {ProductPics.map((pics) => {
          return (
            <img
              className="product-pic"
              src={pics.image}
              alt="product"
              key={ProductPics.indexOf(pics)}
              style ={{
                display: picCount !== ProductPics.indexOf(pics) ? 'none' : 'block'
              }}
            />
          );
        })}

        <button className="product-button" onClick={onRightClick}>&#187;</button>
      </div>
    </>
  );
}

export default Products;
