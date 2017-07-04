import React, { Component } from "react";
import GuestList from "./GuestList";
import AddGuest from "./AddGuest";

class GuestContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guests: []
		};
	}

	componentDidMount() {
		fetch("/guests").then(response => {
			return response.json();
		}).then(json => {
			this.setState({
				guests: json
			});
		});
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<div className="content">
						<GuestList guests={this.state.guests} />
					</div>
					<AddGuest onClick={this.addGuest} />
				</div>
			</section>
		);
	}

	addGuest() {
		console.log("add guest");
	}
}

export default GuestContainer;