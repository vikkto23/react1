// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Product from './Product';
import './App.css';

const firstName = "John"; // Change this to your name or leave it empty

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">My Product</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container mt-5">
        <Card className="card">
          <Card.Body className="card-body">
            <Image product={Product} />
            <Card.Title className="card-title"><Name product={Product} /></Card.Title>
            <Card.Text className="card-text"><Description product={Product} /></Card.Text>
            <Card.Text className="card-text"><Price product={Product} /></Card.Text>
          </Card.Body>
        </Card>
        <div className="mt-3">
          {firstName ? (
            <>
              <p className="hello-message">Hello, {firstName}!</p>
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder"
                className="custom-image"
              />
            </>
          ) : (
            <p className="hello-message">Hello, there!</p>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 My Product. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
