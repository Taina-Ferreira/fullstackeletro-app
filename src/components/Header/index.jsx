import React from 'react';
import { Navbar, Nav }  from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="FullStack Eletro"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    FullStack Eletro
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
                        <Nav.Link as={Link} to="lojas">Nossas lojas</Nav.Link>
                        <Nav.Link as={Link} to="/contato">Fale Conosco</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
