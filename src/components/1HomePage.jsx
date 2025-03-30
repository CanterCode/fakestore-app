import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function HomePage() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
            <Container className="text-center p-4 border rounded shadow-lg bg-light">
                <Row className="mb-4">
                    <Col>
                        <h1 className="fw-bold p-2">Welcome to our store!</h1>
                        <h4 className="text-muted p-1">Thank you for visiting our store! <br />We have a wide array or products that we hope you enjoy!</h4>
                        <p className="pt-3">Click below to view our current inventory.</p>
                        <Button variant="primary" size="lg" href="/productlist">View Products</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default HomePage;