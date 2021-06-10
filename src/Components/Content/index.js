import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../Home'
import Developers from '../Developers'
import About from '../About'
import Working from '../Working'
import './Content.css'

export class index extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/SmartTraffic_Frontend/" component={Home}/>
          <Route exact path="/SmartTraffic_Frontend/about" component={About}/>
          <Route exact path="/SmartTraffic_Frontend/working" component={Working}/>
          <Route exact path="/SmartTraffic_Frontend/dev" component={Developers}/>
        </Switch>
      </div>
    )
  }
}

export default index
