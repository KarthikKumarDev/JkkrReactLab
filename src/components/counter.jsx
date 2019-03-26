import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["jkkr", "kk", "Kumar"]
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    return (
      <React.Fragment>
        <div className="mt-5 ml-3">
          {this.props.children}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-sm btn-secondary"
          >
            Increment
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  handleIncrement = () => {
    console.log("Increment", this);
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
