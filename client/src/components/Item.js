import React, { Component } from "react";

class Item extends Component {
	render() {
		return (
			<div className="card">
				<div className="card-content">
					<a className="button" href="#">Button</a>
					<input type="text" placeholder="Price" />
				</div>
			</div>
		);
	}
}

export default Item;