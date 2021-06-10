import { Col, Menu, Row } from 'antd'
import React, { Component } from 'react'
import Logo from '../../Media/Logo.png'
import './Navbar.css'
import HistoryHooks from '../Hooks/HistoryHooks'

export class Navbar extends Component {
  render() {
    return (
      <div className="navigation pt3 pl3 pr3">
        <Row align="middle bb bw1 b--white-40">
          <Col lg={2}>
            <img src={Logo} className="w4"></img>
          </Col>
          <Col lg={16} className="f3 white">
            <Row>
              University School Of Information, Communication and Technology
            </Row>
            <Row>
              Guru Gobind Singh Indraprastha University
            </Row>
          </Col>
        </Row>
        <Menu
        
          mode='horizontal'
          defaultSelectedKeys='1'
        >
          <Menu.Item key='1' onClick={() => this.props.history.push('/')}>
            <a>Home</a>
          </Menu.Item>
          <Menu.Item key='2' onClick={() => this.props.history.push('/about')}>
            <a>About</a>
          </Menu.Item>
          <Menu.Item key='3' onClick={() => this.props.history.push('/working')}>
            <a>Working</a>
          </Menu.Item>
          <Menu.Item key='4' onClick={() => this.props.history.push('/dev')}>
            <a>Developers</a>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default HistoryHooks(Navbar)
