import React, { Component } from "react";
import Guest from "./Guest";

class GuestList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			guests: this.props.guests
		};
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<div className="content">
						{this.renderList()}
					</div>
					<a className="button is-primary" onClick={(e) => this.handleClick(e)}>Add new guest</a>
				</div>
			</section>
		);
	}

	renderList() {
		return (
			<table>
				<tbody>
					{this.state.guests.map(guest => {
						return (
							<tr key={guest.id}>
								<Guest guest={guest} />
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}

	handleClick(e) {
		e.preventDefault();
		let newGuest = {
			id: Math.random(),
			name: "New guest"
		};

		let guests = this.state.guests;
		guests.push(newGuest);
		this.setState({
			guests: guests
		});
	}
}

export default GuestList;