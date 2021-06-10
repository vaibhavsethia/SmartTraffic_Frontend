import { Col, Row } from 'antd'
import React, { Component } from 'react'
import {GithubOutlined, MediumOutlined, LinkedinOutlined, ExperimentOutlined} from '@ant-design/icons';
import './Developers.css'
export class index extends Component {
  render() {
    return (
      <div>
        <div className="tc f2 pa2">
          Smart Traffic Lights
        </div>
        <Row className="pt5" justify="center">
          <Col lg={8}>
            <Row className="">
              <Col lg={6} className="">
                <img className="br-100 shadow-2" src="https://avatars.githubusercontent.com/u/40268761?v=4"></img>
              </Col>
              <Col lg={2}></Col>
              <Col lg={16}>
                <Row className="pt2 f3 black">Vaibhav Sethia</Row>
                <Row className="f5 gray fw3">IrateLeaf98</Row>
                <Row className="f5 fw5">Full Stack Developer | AWS</Row>
                <Row className="pt3" justify="end">
                  <a href="https://github.com/vaibhavsethia"><GithubOutlined className="dev-icon"/></a>
                  <a href="https://vaibhavsethia1998.medium.com"><MediumOutlined className="dev-icon"/></a>
                  <a href="https://vaibhavsethia.github.io/Portfolio_new/"><ExperimentOutlined className="dev-icon"/></a>
                  <a href="https://www.linkedin.com/in/vaibhav-sethia-4711b8145/"><LinkedinOutlined className="dev-icon"/></a>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="pt5"  justify="center">
          <Col lg={8}>
            <Row className="">
              <Col lg={6} className="">
                <img className="br-100 shadow-2" src="https://avatars.githubusercontent.com/u/31414459?v=4"></img>
              </Col>
              <Col lg={2}></Col>
              <Col lg={16}>
                <Row className="pt2 f3 black">Vivek Sharma</Row>
                <Row className="f5 gray fw3">Baazigar007</Row>
                <Row className="f5 fw5">Data | AWS | Architecture</Row>
                <Row className="pt3" justify="end">
                  <a href="https://github.com/Baazigar007"><GithubOutlined className="dev-icon"/></a>
                  <a href="https://www.linkedin.com/in/vivek-sharma-33592a98/"><LinkedinOutlined className="dev-icon"/></a>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default index
