import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    price: 0,
    category: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        formData
      );
      setProduct(response.data);
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError(`Error submitting the form. Please try again: ${err.message}`);
      setSubmitted(false);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4 display-4 fw-bold text-primary">
        Create a New Product
      </h2>

      {submitted && (
        <Alert
          variant="success"
          dismissible
          onClose={() => {
            setSubmitted(false);
            setFormData({
              id: 0,
              title: "",
              price: 0,
              category: "",
              description: "",
            });
          }}
        >
          {product.title} created successfully!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" dismissible>
          {error}
        </Alert>
      )}

      <Form
        onSubmit={handleSubmit}
        className="p-4 shadow-lg rounded bg-light mt-5"
      >
        <Row>
          <Col md="6">
            <Form.Group controlId="productname" className="mb-3">
              <Form.Label className="fw-semibold">Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md="3">
            <Form.Group controlId="productPrice" className="mb-3">
              <Form.Label className="fw-semibold">Price</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md="3">
            <Form.Group controlId="formSelect" className="mb-3">
              <Form.Label className="fw-semibold">Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option hidden value="">
                  Choose...
                </option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Form.Group controlId="productdescription" className="mb-3">
              <Form.Label className="fw-semibold">
                Product Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter product description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit" className="px-5">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default AddProduct;
