import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


function ProductInfo() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Failed to load product: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

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
          Loading Product...
        </h3>
      </Container>
    );

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="display-3 m-3 mb-5">{product.title}</h1>
        </Col>
      </Row>

      <Row className="d-flex align-items-center">
        <Col md={4} className="mb-4">
          <Card.Img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "contain",
              border: "2px solid #ddd",
              borderRadius: "8px",
            }}
            className="p-5"
          />
        </Col>

        <Col md={8}>
          <Card className="h-100 border-0">
            <Card.Body>
              <Card.Subtitle className="text-muted mb-3 display-6 ps-5">
                <strong>${product.price.toFixed(2)}</strong>
              </Card.Subtitle>
              <Card.Text
                style={{
                  fontSize: "1.1rem",
                }}
                className="pe-5 ps-5"
              >
                {product.description}
              </Card.Text>

              <div className="d-flex flex-column align-items-center mt-5">
                <Button variant="success" className="mb-3" size="lg">
                  Add to Cart
                </Button>
                <Button variant="secondary" to={`/productlist`} size="lg">
                  Return to Products
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductInfo;
