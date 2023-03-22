import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => { return response.json() })
            .then((users) => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField);
        })
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1>Robot Friends</h1>
                    <SearchBox searchField={searchField} searchChange={this.onSearchChange} />
                    <Scroll><CardList robots={filteredRobots} /></Scroll>
                </div>
            );
    }

}
export default App;