import { Col, Row } from "antd";
import React, { Component } from "react";
import Traffic from "../../Media/Traffic.jpeg";
export class index extends Component {
  render() {
    return (
      <div>
        <div className="tc f2 pa2">Real-Time Traffic Monitoring System</div>
        <Row justify="center" className="f4 tc pa4">
          <Col lg={12}>
            <img className="shadow-2" src={Traffic}></img>
          </Col>
          <Col lg={10}>
            <p>
              The project is based around solving a very common problem of
              ever-increasing Traffic and Congestions.
            </p>
            <p className="pa2">
              <i>
                With increasing urban population and hence the number of
                vehicles, need of controlling streets,highways and roads is
                major issue.{" "}
              </i>
            </p>

            <p>
              One of the main reasons behind today’s traffic problem are the
              techniques that are used for traffic management. It has no
              emphasis on live traffic scenario, thus leading to inefficient
              traffic management systems. These traffic timers just show the
              preset time.
            </p>
            <p>
              If the traffic light timers are showing correct time to regulate
              the traffic, then the time wasted on unwanted green signals will
              be saved. Timer for every lane is the simplest way to control
              traffic. And if those timers are predicting exact time then
              automatically the system will be more efficient.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
