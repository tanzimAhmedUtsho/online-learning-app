import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">OLP</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "5px",
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "5px",
              }}
              to="/course"
            >
              Courses
            </NavLink>
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "5px",
              }}
              to="/blog"
            >
              Blog
            </NavLink>
          </Nav>
        </Container>
        <div>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "5px",
            }}
            to="/login"
          >
            LogIn
          </Link>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "5px",
            }}
            to="/register"
          >
            Register
          </Link>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
