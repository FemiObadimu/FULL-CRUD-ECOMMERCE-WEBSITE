import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductContext from "../../context/products/productContext";

const ProductItems = (product) => {
  const productContext = useContext(ProductContext);
  const { addProduct } = productContext;

  const onAdd = () => {
    addProduct(product);
  };
  return (
    <div className="text-center">
      <Card style={{ padding: "30px 0px", border: "none" }}>
        <Card.Img
          variant="top"
          src={product.product.image}
          alt="cartify.io images"
        />
        <Card.Body>
          <Card.Title className="text-center">
            <h2>{product.product.title}</h2>
          </Card.Title>
          <h2 className="price text-center">${product.product.price}</h2>
          <div className="flexed text-center">
            <div className="category">
              <h4>{product.product.category}</h4>
            </div>
            <Button variant="outline-dark" onClick={onAdd}>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItems;
