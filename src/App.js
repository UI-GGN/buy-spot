import React, { Component } from 'react'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BuyerRegistration } from './components/RegisterForm.component/BuyerRegistration'
import { BuyerLogin } from './components/LoginForm.components/BuyerLogin'
import { About } from './components/About'
import { Home } from './components/Home'
import { SellerLogin } from './components/LoginForm.components/SellerLogin'
import { SellerRegistration } from './components/RegisterForm.component/SellerRegistration'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)

  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)
  const dispatch = useDispatch()

  const handleLoggedOut = () => {
    dispatch({
      type: 'LOGOUT',
      payload: false,
    })
  }

  const userLoggedIn = useSelector((state) => {
    return state.loggedInUser
  })

  const userEmail = useSelector((state) => {
    return state.users.map((user) => user.email)
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar style={{ backgroundColor: 'black' }} expand="lg">
          <Container>
            <Navbar.Brand style={{ color: 'white' }} as={Link} to="/">
              BuySpot
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{
                backgroundColor: 'rgb(255,255,255,0.5)',
                height: '2.3rem',
              }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link style={{ color: 'white' }} as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link style={{ color: 'white' }} as={Link} to="/about">
                  About
                </Nav.Link>
                {userLoggedIn ? (
                  <NavDropdown
                    title={userEmail}
                    style={{ color: 'white' }}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item onClick={handleLoggedOut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <div style={{ display: 'flex' }}>
                    <Nav.Link
                      style={{ color: 'white' }}
                      onClick={handleShowRegister}
                    >
                      Register
                    </Nav.Link>

                    <Nav.Link
                      style={{ color: 'white' }}
                      onClick={handleShowLogin}
                    >
                      Login
                    </Nav.Link>
                  </div>
                )}
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
                        to="/buyer-login"
                      >
                        Buyer
                      </Link>
                    </Button>
                    <Button variant="light" onClick={handleCloseLogin}>
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/seller-login"
                      >
                        Seller
                      </Link>
                    </Button>
                  </Modal.Footer>
                </Modal>

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
                        to="/buyer-registration"
                      >
                        Buyer
                      </Link>
                    </Button>
                    <Button variant="light" onClick={handleCloseRegister}>
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/seller-registration"
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
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/buyer-registration"
              element={<BuyerRegistration />}
            ></Route>
            <Route
              path="/seller-registration"
              element={<SellerRegistration />}
            ></Route>
            <Route path="/buyer-login" element={<BuyerLogin />}></Route>
            <Route path="/seller-login" element={<SellerLogin />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
