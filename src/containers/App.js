import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
// import { robots } from "./robots";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ""
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    // remember fetch is a method of the window object
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(robots => this.setState({ robots: robots }));
  }
  onSearchChange(e) {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Hello Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
