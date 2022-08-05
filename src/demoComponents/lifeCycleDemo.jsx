/*
App.js

import Hello from "./Hello";
import LifeCycleDemo from "./lifeCycleDemo";

function App() {
  return (
    <>
    <Hello/>
    <LifeCycleDemo/>
    </>
  );
}

export default App;

--------------------------------------- End of App.js -----------------
//React Day - 2
//class component used earlier and its still in use

import React, { Component } from "react";

export default class LifeCycleDemo extends Component {

// to use state in class based component we need constructir for manipulating variables

constructor(props){
    super(props);
    this.state={
        day: "Saturday"
    }
}

// component life cycle
componentDidMount(){
    console.log("Mounting or (Re)Loading");
}

componentDidUpdate(){
    console.log("Updating(ed)");
}

componentWillUnmount(){
    console.log("UnMounting")
}

// to change state of day throughout component we need to use another method

changeDay(){
    this.setState({
        day : "Sunday"
    })
}
    render(){
        return(
            <>
                <h1>From class component { this.state.day }</h1>
                <button onClick={ this.changeDay.bind(this)}>Click here</button>
            </>
        )
    }
}

*/