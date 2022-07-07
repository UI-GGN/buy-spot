import React from 'react'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BuyerRegistration } from './components/BuyerRegistration'
import { BuyerLogin } from './components/BuyerLogin'
import { About } from './components/About'
import { Home } from './components/Home'
import { SellerLogin } from './components/SellerLogin'
import { SellerRegistration } from './components/SellerRegistration'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              BuySpot
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/About">
                  About
                </Nav.Link>
                <NavDropdown title="Register" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/BuyerRegistration">
                    As Buyer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/SellerRegistration">
                    As Seller
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/BuyerLogin">
                    As Buyer
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/SellerLogin">
                    As Seller
                  </NavDropdown.Item>
                </NavDropdown>
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
