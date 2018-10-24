import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import moment from "moment";
import profile from "../profile.json";

export default class Education extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Row>
            {profile.studies.map(function(study, i) {
              return (
                <Row key={i}>
                  <Col left top href={study.url}>
                    <Media object src={study.logo} alt={study.institute} className="other-images"/>
                  </Col>
                  <Media body>
                    <Media heading>
                      <a href={study.url}>{study.institute}</a>
                    </Media>
                    {[
                      {
                        key: "Titulo",
                        value: study.title
                      },
                      {
                        key: "Situação",
                        value:  study.currentCourse? 'Cursando' : "Concluido"
                      },
                      {
                        key: study.currentCourse? 'Previsão de conclusão' : "Ano de conclusão",
                        value: study.graduationYear
                      },
                      {
                        key: "Duração",
                        value: study.durationInYears + " ano(s)"
                      }
                    ].map(function(object, i) {
                      return (
                        <div className='text-center'>
                          <Row>
                            <Col className="formLabel"><b>{object.key}</b>: {object.value}</Col>
                          </Row>
                        </div>
                      );
                    })}
                  </Media>
                </Row>
              );
            })}
          </Row>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            {/* <h4>Cerfitiações:</h4>
            <hr /> */}
            {profile.certifications.map(function(certification, i) {
              const verification = certification.verificationLink ? (
                <Row>
                  <Col>
                    <a
                      className="certificateLink"
                      href={certification.verificationLink}
                    >
                      visualizar certificado
                    </a>
                  </Col>
                </Row>
              ) : (
                ""
              );
              return (
                <Media key={i}>
                  <Media left top href={certification.url}>
                    <Media
                      object
                      src={certification.logo}
                      alt={certification.title}
                    />
                  </Media>
                  <Media body>
                    <Media heading>
                      <a href={certification.url}>{certification.title}</a>
                    </Media>
                    <Row>
                      <Col>
                        {moment(certification.issueDate).format("MMM YYYY")} -{" "}
                        {certification.expiryDate
                          ? moment(certification.expiryDate).format("MMM YYYY")
                          : "Present"}
                      </Col>
                    </Row>
                    <Row>
                      <Col>{certification.issuer}</Col>
                    </Row>
                    {verification}
                  </Media>
                </Media>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
