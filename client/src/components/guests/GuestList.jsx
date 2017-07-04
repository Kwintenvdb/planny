import React, { Component } from "react";
import Guest from "./Guest";

class GuestList extends Component {
	render() {
		return this.renderList();
	}

	renderList() {
		return (
			<table>
				<tbody>
					{this.props.guests.map(guest => {
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
}

export default GuestList;