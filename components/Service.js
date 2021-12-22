import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
  const services = [
    { title : "MOER O MALTE", desc : "Moer o malte para que fique descascado, com a parte do amido exposta" },
    { title : "MOSTURAÇÃO", desc : "Aquecimento do malte com agua a uma temperatra ideal, para que o amido do malte comece a transformar em açucar" },
    { title : "FILTRAGEM", desc : "Separação o mosto do bagaço do grão do malte" },
    { title : "FERVURA", desc : "Processo onde ocorre a sanitização do líquido" },
    { title : "FERMENTAÇÃO", desc : "Processo onde o açucar vai ser tranformado em álcool" },
    { title : "MATURAÇÃO", desc : "Processo onde as leveduras atuam mais um pouco na cerveja, gerando um amadurecimento da bebida" },
    { title : "ENVASE", desc : "Processo onde a cerveja é colocada nas garrafas" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-success">Processo de fabricação</span></h3>
              <p className="text-muted">Nossas cervejas são produzidas seguindo um rigoroso controle de qualidade em todas as etapas de fabricação </p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Service;