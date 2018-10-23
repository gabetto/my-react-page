import React, { Component } from 'react'
import {
    Row,
    Col,
    Progress
  } from "reactstrap";
import profile from '../profile.json';

export default class skills extends Component {
  render() {
    return (
          <Row>
              {profile.skills.map(function(skill, i) {
                return (
                  <Col Key={i} sm={12} md={4} xl={4}>
                    <div className="text-center">
                      {skill.title}
                    </div>
                    <Progress color="success" striped animated value={skill.grade}>{skill.grade}%</Progress>
                  </Col>
                );
              })}
          </Row>
      );
    }
  }