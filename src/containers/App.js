import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField } from "../actions";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

// defines what state to listen and send down as props
const mapStateToProps = state => {
  return {
    searchField: state.searchField,
  };
};

// defines what props are actions to be dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(robots => this.setState({ robots: robots }));
  }
  render() {
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <ErrorBoundary>
            <h1>Hello Robo Friends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </ErrorBoundary>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
