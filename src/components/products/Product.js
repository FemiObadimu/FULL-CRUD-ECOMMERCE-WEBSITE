import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProductItems from "./ProductItems";
import ProductContext from "../../context/products/productContext";

const Product = () => {
  const productContext = useContext(ProductContext);
  const { products } = productContext;
  return (
    <Container>
      <Row>
        <Col md={12} classname="flexed-products text-center">
          {products.map((product) => (
            <ProductItems product={product} key={product.id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
