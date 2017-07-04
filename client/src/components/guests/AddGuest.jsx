import React, { Component } from "react";

class AddGuest extends Component {
	render() {
		return (
			<a className="button is-primary" onClick={this.props.onClick}>Add new guest</a>
		);
	}
}

export default AddGuest;