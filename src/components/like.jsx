import React, { Component } from 'react';

class Like extends Component {

    render() {
        return (<React.Fragment>
            <i className={this.toggleHeartClass()} onClick={this.props.onLikeToggle} aria-hidden="true"></i>
        </React.Fragment>);
    }

    toggleHeartClass = () => {
        if (this.props.isLiked)
            return "fa fa-heart"
        else
            return "fa fa-heart-o"
    }
}

export default Like;