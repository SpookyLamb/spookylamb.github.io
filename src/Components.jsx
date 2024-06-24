import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <div>
        <Navbar expand="lg" className="navbar navbar-dark bg-dark border-bottom mine-navbar">
            <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Link className="nav-link nav-text" to="/">Home</Link>
                <Link className="nav-link nav-text" to="/about">About</Link>
                <Link className="nav-link nav-text" to="/blog">Blog</Link>
                {/* "https://spookylamb.github.io/blog/" */}
                <a className="nav-link nav-text" href="/#projects">Projects</a>
                <a className="nav-link nav-text" href="/#contact">Contact</a>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}