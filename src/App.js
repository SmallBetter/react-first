import React, { Component } from 'react'
import ShowCount from './components/ShowCount'
import ClickCount from './components/ClickCount'
import './App.css'

class App extends Component {

  state = {
    count: 0
  }

  addCount = even => {
    this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <div className="App">
        <ShowCount {...this.state} />
        <ClickCount handleClick={this.addCount}/>
      </div>
    )
  }
}

export default App
