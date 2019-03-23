import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["jkkr", "kk", "Kumar"]
  };

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag"}
        <div className="mt-5 ml-3">{this.renderTags()}</div>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
