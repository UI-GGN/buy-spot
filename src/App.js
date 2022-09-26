import React, { useState } from 'react';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { BuyerRegistration } from './components/register-form/buyer-registration';
import { BuyerLogin } from './components/login-form/buyer-login';
import { About } from './components/About';
import { Home } from './components/Home';
import { Search } from './components/Search';
import { SellerLogin } from './components/login-form/seller-login';
import { SellerRegistration } from './components/register-form/seller-registration';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SharedModal } from './components/modal-component/shared-modal';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProductDescription } from './components/product-list-component/product-description/product-description';

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [search, setSearch] = useState('');
    const [productdata, setProducts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleShowRegister = () => setShowRegister(true);

    const handleShowLogin = () => setShowLogin(true);
    const dispatch = useDispatch();

    const handleLoggedOut = () => {
        dispatch({
            type: 'LOGOUT',
            payload: false,
        });
    };
    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        setProducts(await response.json());
    };

    const filterProducts = () => {
        const data = productdata.filter(
            product =>
                product.category.toLowerCase().includes(search) ||
                product.title.toLowerCase().includes(search),
        );
        setFilteredData(data);
    };
    const setValue = () => {
        const searchInput = document.getElementById('searchInput').value;
        setSearch(searchInput.toLowerCase());
        filterProducts();
    };

    const onClickHome = () => {
        document.getElementById('searchInput').setAttribute('', '');
    };

    const userLoggedIn = useSelector(state => {
        return state.loggedInUser;
    });

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        localStorage.setItem('userDetails', userLoggedIn);
    }, [userLoggedIn]);

    const userEmail = useSelector(state => {
        return state.users.map(user => user.email);
    });

    return (
        <BrowserRouter>
            <div className="app">
                <Navbar style={{ backgroundColor: 'black' }} expand="lg">
                    <Container>
                        <Navbar.Brand
                            style={{ color: 'white' }}
                            as={Link}
                            to="/"
                            onClick={onClickHome}
                        >
                            BuySpot
                        </Navbar.Brand>
                        <input
                            className="search-input"
                            id="searchInput"
                            type="text"
                            placeholder="Search....."
                        />
                        <Nav.Link
                            style={{ color: 'white' }}
                            as={Link}
                            to="/search"
                            onClick={setValue}
                        >
                            Search{' '}
                        </Nav.Link>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            style={{
                                backgroundColor: 'rgb(255,255,255,0.5)',
                                height: '2.3rem',
                            }}
                        />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link
                                    style={{ color: 'white' }}
                                    as={Link}
                                    to="/"
                                    onClick={onClickHome}
                                >
                                    Home
                                </Nav.Link>
                                <Nav.Link
                                    style={{ color: 'white' }}
                                    as={Link}
                                    to="/about"
                                >
                                    About
                                </Nav.Link>
                                {userLoggedIn ? (
                                    <NavDropdown
                                        title={
                                            'Hi ' +
                                            userEmail.pop().split('@').shift()
                                        }
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item
                                            onClick={handleLoggedOut}
                                        >
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

                                <SharedModal
                                    show={showLogin}
                                    setShow={setShowLogin}
                                    property={'Login'}
                                />
                                <SharedModal
                                    show={showRegister}
                                    setShow={setShowRegister}
                                    property={'Register'}
                                />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Routes>
                        <Route path="/about" element={<About />}></Route>
                        <Route
                            path="/"
                            element={<Home productData={productdata} />}
                        ></Route>
                        <Route
                            path="/search"
                            element={<Search productData={filteredData} />}
                        ></Route>
                        <Route
                            path="/buyer-registration"
                            element={<BuyerRegistration />}
                        ></Route>
                        <Route
                            path="/seller-registration"
                            element={<SellerRegistration />}
                        ></Route>
                        <Route
                            path="/buyer-login"
                            element={<BuyerLogin />}
                        ></Route>
                        <Route
                            path="/seller-login"
                            element={<SellerLogin />}
                        ></Route>
                        <Route
                            path="/product/:productId"
                            element={<ProductDescription />}
                        ></Route>
                        <Route
                            path="/search/product/:productId"
                            element={<ProductDescription />}
                        ></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
