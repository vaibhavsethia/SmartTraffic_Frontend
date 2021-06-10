import React, { Component } from 'react'
import { Button, Radio, Row, Input, Col, Upload, message } from 'antd';
import {UploadOutlined} from '@ant-design/icons'
import './Working.css'
export class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Key: 1,
      Side1: 0,
      Side2: 0,
      Side3: 0,
      Side4: 0,
      Side1Image: null,
      Side2Image: null,
      Side3Image: null,
      Side4Image: null,
      ReferenceImage: null,
    }
  }

  ProcessImages(){

  }

  ProcessValues(){
    
  }
  
  render() {
    return (
      <div className="tc">
        <div className="tc f2 pa2">
          Smart Traffic Lights
        </div>

        <Radio.Group onChange={(e) => this.setState({Key: e.target.value})} value={this.state.Key}>
          <Radio value={1}><span className="f4">Use Values</span></Radio>
          <Radio value={2}><span className="f4">Use Images</span></Radio>
        </Radio.Group>

        {
          this.state.Key === 1 ? <div>
            <div className="pt4 f3">
              Input Number of cars on each side of the intersection
            </div>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-1: 
              </Col>
              <Col lg={6}>
                <Input onChange={(e) => {this.setState({Side1: e.target.value})}} placeholder="Input Side-1 Details" />
              </Col>
            </Row>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-2: 
              </Col>
              <Col lg={6}>
                <Input onChange={(e) => {this.setState({Side2: e.target.value})}} placeholder="Input Side-2 Details" />
              </Col>
            </Row>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-3: 
              </Col>
              <Col lg={6}>
                <Input onChange={(e) => {this.setState({Side3: e.target.value})}} placeholder="Input Side-3 Details" />
              </Col>
            </Row>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-4: 
              </Col>
              <Col lg={6}>
                <Input onChange={(e) => {this.setState({Side4: e.target.value})}} placeholder="Input Side-4 Details" />
              </Col>
            </Row>
            <Button onClick={this.ProcessValues()} className="mt4 working-button">Process Values</Button>
          </div> 
          : <div>
            <div className="pt4 f3">    
              Input Image of each side of the intersection
            </div>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-1: 
              </Col>
              <Col lg={3}>
                <Upload action={e => {this.setState({Side1Image: e})}}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>              
              </Col>
            </Row>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-2: 
              </Col>
              <Col lg={3}>
                <Upload action={e => {this.setState({Side2Image: e})}}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>              
              </Col>
            </Row>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-3: 
              </Col>
              <Col lg={3}>
                <Upload action={e => {this.setState({Side3Image: e})}}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>              
              </Col>
            </Row>
            <Row className="pt3" justify="center" align="middle">
              <Col className="f4" lg={1}>
                Side-4: 
              </Col>
              <Col lg={3}>
                <Upload action={e => {this.setState({Side4Image: e})}}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>              
              </Col>
            </Row>

            <Row className="pt5" justify="center" align="middle">
              <Col className="f4" lg={3}>
                Reference Image: 
              </Col>
              <Col lg={3}>
                <Upload action={e => {this.setState({Side1Image: e})}}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>              
              </Col>
            </Row>

            <Button onClick={this.ProcessImages()} className="mt4 working-button">Process Images</Button>
          </div>
        }
      </div>
    )
  }
}

export default index
