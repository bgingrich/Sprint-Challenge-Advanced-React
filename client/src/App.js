import React from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import PlayerList from "./components/PlayerList";
import "@testing-library/jest-dom";

class App extends React.Component {
  state = {
    name: "",
    id: "",
    country: "",
    list: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({
          list: res.data,
          name: res.data.name,
          id: res.data.id,
          country: res.data.country,
          searches: res.data.searches
        });
      })
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <PlayerList
          name={this.state.name}
          id={this.state.id}
          country={this.state.country}
          searches={this.state.search}
          list={this.state.list}
        />
      </div>
    );
  }
}
export default App;