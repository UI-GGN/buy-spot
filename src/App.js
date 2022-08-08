import React from 'react'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BuyerRegistration } from './components/register-form/buyer-registration'
import { BuyerLogin } from './components/login-form/buyer-login'
import { About } from './components/About'
import { Home } from './components/Home'
import { SellerLogin } from './components/login-form/seller-login'
import { SellerRegistration } from './components/register-form/seller-registration'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {SharedModal} from './components/modal-component/shared-modal';

import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleShowRegister = () => setShowRegister(true)

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
                    title={'Hi ' + userEmail.pop().split('@').shift()}
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

                <SharedModal show={showLogin} setShow={setShowLogin} property={"Login"}/>
                <SharedModal show={showRegister} setShow={setShowRegister} property={"Register"}/>
                
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
