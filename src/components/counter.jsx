import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["jkkr", "kk", "Kumar"]
  };

  render() {
    return (
      <React.Fragment>
        <div className="mt-5 ml-3">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-sm btn-secondary">Increment</button>
          <ul>
            {this.state.tags.map(tag => (
              <li key={tag}> {tag}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
