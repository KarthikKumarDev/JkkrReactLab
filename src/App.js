import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Description from "./components/description";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 4 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  constructor() {
    super();
    // Initialize the State
    console.log("App - constructor");
  }

  componentDidMount() {
    // AJAX Call
    console.log("App - mounted");
  }
  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <div className="App">
          <NavBar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
          />
          <main className="">
            <Counters
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              counters={this.state.counters}
            />
            <Description />
          </main>
        </div>
      </React.Fragment>
    );
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log("Increment", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
}

export default App;
