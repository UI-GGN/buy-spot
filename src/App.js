import React, { Component } from 'react'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BuyerRegistration } from './components/RegisterForm.component/BuyerRegistration'
import { BuyerLogin } from './components/BuyerLogin'
import { About } from './components/About'
import { Home } from './components/Home'
import { SellerLogin } from './components/SellerLogin'
import { SellerRegistration } from './components/RegisterForm.component/SellerRegistration'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function App() {
  const [showRegister, setShowRegister] = useState(false)

  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)

  const [showLogin, setShowLogin] = useState(false)

  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar style={{ backgroundColor: 'black' }} expand="lg">
          <Container>
            <Navbar.Brand style={{ color: 'white' }} as={Link} to="/">
              BuySpot
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link style={{ color: 'white' }} as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link style={{ color: 'white' }} as={Link} to="/About">
                  About
                </Nav.Link>
                <Nav.Link
                  style={{ color: 'white' }}
                  onClick={handleShowRegister}
                >
                  Register
                </Nav.Link>
                <Modal
                  className="register-modal"
                  show={showRegister}
                  onHide={handleCloseRegister}
                >
                  <Modal.Header class="border-0" closeButton>
                    <Modal.Title>Register</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>You want to Register as</Modal.Body>
                  <Modal.Footer class="modal-footer border-0">
                    <Button variant="light" onClick={handleCloseRegister}>
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/BuyerRegistration"
                      >
                        Buyer
                      </Link>
                    </Button>
                    <Button variant="light" onClick={handleCloseRegister}>
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/SellerRegistration"
                      >
                        Seller
                      </Link>
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Nav.Link style={{ color: 'white' }} onClick={handleShowLogin}>
                  Login
                </Nav.Link>
                <Modal
                  className="login-modal"
                  show={showLogin}
                  onHide={handleCloseLogin}
                >
                  <Modal.Header class=" border-0" closeButton>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>You want to Login as</Modal.Body>
                  <Modal.Footer class="modal-footer border-0">
                    <Button variant="light" onClick={handleCloseLogin}>
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/BuyerLogin"
                      >
                        Buyer
                      </Link>
                    </Button>
                    <Button variant="light" onClick={handleCloseLogin}>
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/SellerLogin"
                      >
                        Seller
                      </Link>
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/About" element={<About />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/BuyerRegistration"
              element={<BuyerRegistration />}
            ></Route>
            <Route
              path="/SellerRegistration"
              element={<SellerRegistration />}
            ></Route>
            <Route path="/BuyerLogin" element={<BuyerLogin />}></Route>
            <Route path="/SellerLogin" element={<SellerLogin />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
