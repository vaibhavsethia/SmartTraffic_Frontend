import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Footer from './Components/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
