import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  componentDidUpdate(prevProps, prevState) {
    // Compare the State and props 
    // Make AJAX request to get data from Server based on the observed changes
    console.log("prev", prevProps, "state", prevState)
  }

  componentWillUnmount() {
    // Called before the Component is removed from the DOM
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-md">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className=" btn btn-sm btn-secondary"
            >
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-sm btn-secondary m-2"
              disabled={!this.props.counter.value}
            >
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-sm btn-danger m-2"
            >
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
