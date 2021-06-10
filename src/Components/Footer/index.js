import { Row, Col } from 'antd'
import React, { Component } from 'react'
import '../Navbar/Navbar.css'

export class index extends Component {
  render() {
    return (
      <Row justify="center" className="navigation pa2 bt bw2 b--yellow">
        <Col className="white f5 fw1">
          Smart Traffic Lights
          Vaibhav Sethia © 2021
        </Col>
      </Row>
    )
  }
}

export default index
