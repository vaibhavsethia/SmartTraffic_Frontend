import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../Home'
import Developers from '../Developers'
import About from '../About'
import Working from '../Working'

export class index extends Component {
  render() {
    return (
      <div style={{minHeight:'77vh'}}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/working" component={Working}/>
          <Route exact path="/dev" component={Developers}/>
        </Switch>
      </div>
    )
  }
}

export default index
