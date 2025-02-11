import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} width="100px" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              <FaHome />
              Home
            </Link>
            <Link className="nav-link" to="/signup">
              SignUp
            </Link>
            <Link className="nav-link" to="/login">
              LogIn
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
