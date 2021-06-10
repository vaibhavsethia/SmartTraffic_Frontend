import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

export class index extends Component {
  render() {
    return (
      <div>
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
