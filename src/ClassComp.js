import React, { Component } from 'react'
import Header from './Header'
export default class ClassComp extends Component {
  state = {
    todo: 'hey'
  }

  render() {
    return (
      <div>
        <Header todo={this.state.todo} />
      </div>
    )
  }
}
