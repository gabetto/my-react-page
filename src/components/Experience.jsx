import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import profile from '../profile.json';
import moment from 'moment';
import { Media } from 'reactstrap';

function getDuration(duration) {
  const years = parseInt(duration / 12);
  const months = (duration > 12)? duration % 12 : duration
  return (years > 0? years + " ano" + (years > 1? "s": "") + " and " : "") + (months > 0? months + " mes" + (months > 1? "es": "") : "");
};

export default class Experience extends Component {
    render() {
        return <Container>
          <Row>
            <Col>
              {profile.experiences.map(function (experience, i) {
                moment.locale('pt-BR');
    
                const totalDuration = experience.roles.reduce(function (cnt, role) {
                  const startDate = moment(role.startDate);
                  const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                  const duration = moment.duration(timeEnd.diff(startDate));
                  return Number(cnt) + Number(duration.asMonths().toPrecision(1));
                }, 0);
    
                return (
                  <div key={i}>
                    <Row>
                      <Col left top href={experience.url}>
                        <Media object src={experience.logo} alt={experience.companyName} className="other-images"/>
                      </Col>
                      <Media body>
                        <Media heading>
                          <a href={experience.url}>{experience.companyName}</a>
                          <span className="jobTotalDuration"> - {getDuration(totalDuration)}</span>
                        </Media>
    
                        {experience.roles.map(function (role, i) {
                          const startDate = moment(role.startDate);
                          console.log(startDate);
                          const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                          console.log(timeEnd);
                          const duration = Number(moment.duration(timeEnd.diff(startDate)).asMonths().toPrecision(1));
                          console.log(duration)
                          return <div key={i}>
                            <h5>{role.title}</h5>
                            <span
                              className="jobDuration"> {startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')} ({getDuration(duration)})</span>
                            <span className="jobLocation"> - {role.location}</span>
                            <p className="jobDescription"> {role.description}</p>
                          </div>
                        })}
                      </Media>
                    </Row>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      }
    }