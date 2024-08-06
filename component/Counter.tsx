import React, { Component } from 'react'


interface CounterState {
  count: number
}
export default class Counter extends Component<{}, CounterState> {
 
    constructor(props: any) {
      super(props)
      this.state = {
        count : 0
      }
    }

    decrementCount = () => {
      this.setState({
        count : this.state.count - 1
      })
    }

    incrementCount = () => {
      this.setState({
        count : this.state.count + 1
      })
    }

    render() : React.ReactNode {
    return (
      <div>
        <button onClick={ this.decrementCount }> - </button>
       <span className="counterSpan"> Counter - { this.state.count }</span>  
       <button onClick={ this.incrementCount }> + </button>
      </div>
    )
  }
}
