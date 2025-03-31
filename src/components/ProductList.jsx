import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to load products: ${error.message}`);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: "15px" }}
            role="status"
          />
          Loading Products...
        </h3>
      </Container>
    );

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Current Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{
                  height: "300px",
                  objectFit: "contain",
                  padding: "10px",
                  background: "white",
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate" title={product.title}>
                  {product.title}
                </Card.Title>
                <Card.Subtitle className="mt-1 mb-2 text-muted">
                  <strong>${product.price.toFixed(2)}</strong>
                </Card.Subtitle>
                <Button
                  variant="primary"
                  as={Link}
                  to={`/product/${product.id}`}
                  className="m-3"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
