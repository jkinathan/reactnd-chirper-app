import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'

class App extends Component {

  componentDidMount(){
        this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)