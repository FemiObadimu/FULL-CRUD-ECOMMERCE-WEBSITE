import React from "react";
import {Button} from "react-bootstrap"

const ProductItems = (product) => {
  return (
    <div className="container">
      <div className="product-section">
        <img src="" alt="" />
        <p className="title"></p>
        <div>
          <p className="price"></p>
          <p className="category"></p>
        </div>
        <div>
          <p className="count"></p>
          <div>
            <Button className="btn btn-md">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
