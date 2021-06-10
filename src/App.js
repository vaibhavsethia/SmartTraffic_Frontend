import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    )
  }
}

export default App
