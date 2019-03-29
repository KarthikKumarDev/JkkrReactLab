import React, { Component } from "react";
class Description extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="bg-primary text-white w-50 shadow-lg mt-5 rounded ml-4 py-3 ">
          <ol className="">
            <li> There are three Components here </li>
            <ul>
              <li>Navbar - The navigation bar</li>
              <li>Counters- Manages all the counters</li>
              <li>Counter- Actual counter component</li>
            </ul>
            <li>The Counter value is shared by all the components</li>
            <li>The Counter events are bubbled up</li>
            <li>Topics Covered</li>
            <ul>
              <li>Components, Render, State</li>
              <li>
                Specifying Children, Setting Attributes, Embedding Expressions
              </li>
              <li>Handling Events, State </li>
              <li>State vs Props </li>
              <li>Single Source of Truth </li>
            </ul>
          </ol>
        </div>
      </React.Fragment>
    );
  }
}

export default Description;
