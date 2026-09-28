
import React, { Component } from 'react'

export default class Counter extends Component {

    

    constructor()
    {
        super();

        this.state = {
            count : 0 ,
        }
    }

    increment = ()=>
    {
        console.log("increasing")
        
        this.setState({
             count : this.state.count + 1 
        })
    }

    decrement = ()=>{

        console.log("decreasing")
        
        this.setState({
            count : this.state.count - 1
        })
    }

    reset = ()=>{

        this.setState({
            count : 0 
        })
    }

  render() {
    return (
      <>
         <h1> class based component </h1>
         <h2>counter task</h2>

         <h2> count is : {this.state.count}</h2>

         <button onClick={this.increment}>increment</button>
         <button onClick={this.decrement}>decrement</button>
         <button onClick={this.reset}>reset</button>

      </>
    )
  }
}
