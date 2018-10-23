import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import profile from "../profile.json";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <div class="view overlay ">
                  <img
                    src="https://avatars3.githubusercontent.com/u/25808912?s=460&v=4"
                    class="img-fluid  profile-image"
                    alt=""
                  />
                  <a href="#">
                    <div class="mask rgba-white-slight" />
                  </a>
                </div>
              </Col>
              <Col>
                <h3 className="display-4">{profile.title}</h3>
                <h4 className="display-5">{profile.age} anos</h4>
                <p className="lead">{profile.summary}</p>
                <p>
                  {profile.contact} - {profile.email}
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/gabriel-beto-rocha-28b515123/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#343a40"/> </a>
                  <a href="https://github.com/gabetto"><FontAwesomeIcon icon={faGithub} size="2x" color="#343a40"/> </a>
                  <a href="https://www.instagram.com/gabriellbeto/?hl=pt-br"><FontAwesomeIcon icon={faInstagram} size="2x" color="#343a40"/> </a>
                  <a href="https://www.facebook.com/gabriel.beto.3"><FontAwesomeIcon icon={faFacebook} size="2x" color="#343a40"/> </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container className="pt-0 pb-5 mb-5">
          <Row>
            <Col>
              <div className="text-center mt-5">
                <h4 className="display-5">Competências</h4>
              </div>
            </Col>
          </Row>
          <Skills />
        </Container>
        <Container>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Experiências
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Formação
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="pt-5">
              <Experience />
            </TabPane>
            <TabPane tabId="2" className="pt-5">
              <Education />
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}
