import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <h1 className="mb-4 font-weight-normal line-height-1_4">Bem vindo ao mundo da Poloni Microbrewery</h1>
              <p className="text-muted mb-4 pb-2">Amamos o que fazemos e é nosso prazer oferecer aos nossos consumidores um produto artesanal e de alta qualidade</p>
              <a href="#feature" className="btn btn-success">
                Conheça nossas cervejas <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/logo.png" alt="imagem com copos de cerveja" width={"400"}className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;