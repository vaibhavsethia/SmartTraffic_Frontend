import { Col, Row } from "antd";
import React, { Component } from "react";
import "./Developers.css";
import sakshi from "../../Media/sakshi_dp.jpeg";
import tanya from "../../Media/tanya_dp.jpeg";
export class index extends Component {
  render() {
    return (
      <div>
        <div className="tc f2 pa2">Real-Time Traffic Monitoring System</div>
        <Row className="pt5" justify="center">
          <Col lg={8}>
            <Row className="">
              <Col lg={6} className="">
                <img
                  className="br-100 shadow-2"
                  alt="picture_1"
                  src={sakshi}
                ></img>
              </Col>
              <Col lg={2}></Col>
              <Col lg={16}>
                <Row className="pt2 f3 black">Sakshi</Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="pt5" justify="center">
          <Col lg={8}>
            <Row className="">
              <Col lg={6} className="">
                <img
                  className="br-100 shadow-2"
                  alt="picture_2"
                  src={tanya}
                ></img>
              </Col>
              <Col lg={2}></Col>
              <Col lg={16}>
                <Row className="pt2 f3 black">Tanya Agrawal</Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
