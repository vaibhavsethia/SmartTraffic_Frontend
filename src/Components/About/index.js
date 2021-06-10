import React, { Component } from 'react'
import { Col, Collapse, Row } from 'antd';
import './About.css'
import Img1 from '../../Media/Img1.jpg'
import Img2 from '../../Media/Img2.jpg'
import Img3 from '../../Media/Img3.jpg'
import Img4 from '../../Media/Img4.jpg'
import Traffic from '../../Media/Traffic.jpeg'

const { Panel } = Collapse;

export class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Key: ""
    }
  }
  
  render() {
    return (
      <div>
        <div className="tc f2 pa2">
          Smart Traffic Lights
        </div>
        <Row justify="center" className="f4 pa4">
          <Col lg={12}>
            {
              this.state.Key == "1" || this.state.Key == "2" ? <img src={Img1}></img> 
                : this.state.Key == "3" || this.state.Key == "4" ? <img src={Img2}></img> 
                  : this.state.Key == "5" ? <img style={{maxWidth: '645px'}} src={Img4}></img>
                    : this.state.Key == "6" ? <img style={{maxWidth: '645px'}} src={Img3}></img> 
                      : <img src={Traffic}></img> 
            }
          </Col>
          <Col lg={10}>
          <p className="tc">
            The most appropriate solution to the Congestion problem is 
            letting the congested sides cross the intersection first.
          </p>
          <p className="tc">
            The above proposed solution can be implemented using <b>OpenCv library</b> in Python or <b>Machine Learning </b>
            via Object Detection to count the number of cars in an image and also differentiate between 
            the different types of vehicles.
          </p>
          <div className="bb bw1 b--gray tc fw4 f3">OpenCv Approach</div>
          <Collapse className="mt2" onChange={(e) =>{this.setState({Key : e})}} accordion>
            <Panel header="Grayscaling Image" key="1">
              Reading the image using <i>cv2.imread()</i> function and resizing every image to same size using <i>cv2.resize()</i>. 
              Finally, grayscaling the images using <i>cv2.cvtColor()</i>
            </Panel>
            <Panel header="Removing Noises" key="2">
              Gausian Blur the image to remove the gaussian noise using <i>cv2.GaussianBlur()</i> and 
              Median blur the image to remove salt and pepper noise <i>cv2.medianBlur()</i>
            </Panel>
            <Panel header="Dilating edges" key="3">
              Perform Canny Edge Detection to get the edges using <i>cv2.Canny()</i> and dilate the edges using <i>cv2.dilate()</i>
            </Panel>
            <Panel header="Processing the results" key="4">
              Getting difference from the reference image using <i>cv2.absdiff()</i> and then calculating 
              the percentage difference based on number of 1's and 0 pixels.
            </Panel>
          </Collapse>
          <div className="bb bw1 b--gray tc fw4 f3">Machine Learning Approach</div>
          <Collapse className="mt2" onChange={(e) =>{this.setState({Key : e})}} accordion>
            <Panel header="Loading Image and Model" key="5">
              Load the Image and ML Model in the current directory using <i>os.getcwd()</i>, Making the 
              Object Detection Model instant using <i>ObjectDetection()</i> (We are using ImageAI object detection model for this project)
            </Panel>
            <Panel header="Processing and Getting the results" key="6">
              Passing the image path to the model with absolute paths and probability value using 
              <i>detector.detectObjectsFromImage()</i> and later traversing the array returned to count 
              the elements and check for the object type.
            </Panel>
          </Collapse>
          </Col>
        </Row>
      </div>
    )
  }
}

export default index
