import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">Sobre <span className="text-success">Nós</span></h3>
              <p className="text-muted">Somos uma micro cervejaria gaúcha fundada em 2021, que produz cervejas especiais e que entregam aos seus consumidores um produto de alta qualidade</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">"Cerveja: a causa e a solução de todos os problemas da vida." - Homer Simpson</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nossa missão</h6>
                <p className="text-muted font-weight-light">Entregar as melhores cervejas especiais aos consumidores</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Nossa visão</h6>
                <p className="text-muted font-weight-light">Ser a melhor micro cervejaria do Brasil</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;