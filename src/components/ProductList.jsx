import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            setProducts(response.data);
            setLoading(false)
        })
        .catch (error => {
            setError(`Failed to load products: ${error.message}`);
            setLoading(false);
        })

    }, [])

    if(loading) return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: '15px' }}
            role="status"
          />
          Loading Users...
        </h3>
      </Container>
    )
    
    if(error) return <p>{error}</p>;
    
    
    return (
        <Container>
            <h2>Products</h2>
            <Row>
                {products.map(product => (
                    <Col key={products.id} className="mt-4">
                        <Card>
                            <Card.Body>
                                <Card.Image href={product.image}></Card.Image>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Subtitle>{product.price}</Card.Subtitle>
                                <Button href={`/productlist`}></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;