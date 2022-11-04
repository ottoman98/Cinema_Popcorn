import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoRocket } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import Stack from "react-bootstrap/Stack";


function NavBar() {
  return (
    <Stack gap={4}>
      <Navbar expand="lg" style={{ background: " #a4fbe3" }}>
        <Container className="d-flex justify-content-around">
          <Navbar.Brand href="#">
            <GoRocket style={{ fontSize: "20px" }} />
            <p style={{ fontSize: "15px", margin: "0 auto" }}>PCC</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ margin: "10px 0 0 100px" }}>
                Inicio
              </Nav.Link>
              <Nav.Link href="#action2" style={{ margin: "10px 0 0 100px" }}>
                Peliculas
              </Nav.Link>

              <Form className="d-flex">
                <Form.Control
                  style={{ margin: "10px 0 0 100px", borderRadius: "100px" }}
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  style={{ borderRadius: "100px" }}
                >
                  <BsSearch />
                </Button>
              </Form>
              <Nav.Link
                href="/login.jsx"
                ms-auto
                style={{ margin: "10px 0 0 100px" }}
              >
                Log out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Stack>
  );
}

export default NavBar;
