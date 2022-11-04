import React from "react";
import { ThemeProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import datos from "../components/datos.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function LayOut() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <section style={{ background: "#5f5dbd" }}>
        <Container>
          <Row>
            <Col sm={6}>
              <div>
                <Carousel>
                  {datos.peliculas.map((pelicula) => (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pelicula.imagen}
                        alt="First slide"
                      />
                      <Carousel.Caption
                        style={{
                          color: "#83cee0",
                          textShadow: "4px 4px 4px #000000",

                          fontFamily: "Roboto Condensed, sans-serif",
                        }}
                      >
                        <h3 style={{ fontSize: "50px" }}>{pelicula.nombre}</h3>
                        <p style={{ fontSize: "25px" }}>
                          {pelicula.descripcion}
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>
            <Col sm={6}>
              <h1 style={{ color: "white" }}>Últimos lanzamientos</h1>
              <ListGroup>
      <ListGroup.Item></ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </ThemeProvider>
  );
}

export default LayOut;
