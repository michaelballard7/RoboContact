import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info){
    // new lifecycle method that allows me to catch errors, if error this runs
    this.setState({
      hasError:true
    })
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oooops There is an error</h1>;
    }

    return this.props.children;
  }
}
