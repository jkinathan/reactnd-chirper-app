import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../Actions/shared'
import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount(){
        this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
}

export default connect()(App)