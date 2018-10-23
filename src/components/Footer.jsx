import React, { Component } from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <Container>
          <a href="https://www.linkedin.com/in/gabriel-beto-rocha-28b515123/"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/gabetto"><FontAwesomeIcon icon={faGithub}  /></a>
        </Container>
      </footer>
    )
  }
}
