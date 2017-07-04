import React, { Component } from "react";

class Guest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			guest: this.props.guest,
			editing: false
		};
	}

	render() {
		return (
			<td onClick={e => this.handleClick(e)}>
				{this.state.editing ?
					this.renderInput() :
					this.state.guest.name
				}
			</td>
		);
	}

	renderInput() {
		return (
			<form
				onSubmit={e => this.handleSubmit(e)}>
				<input
					className="input"
					type="text"
					value={this.state.guest.name}
					onChange={e => this.handleChange(e)}
					onBlur={() => this.hideInput()}
				/>
			</form>
		);
	}

	hideInput() {
		this.setState({
			editing: false
		});
	}

	handleClick(e) {
		e.preventDefault();
		if (!this.state.editing) {
			this.setState({
				editing: true
			});
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.hideInput();
	}

	handleChange(e) {
		let guest = this.state.guest;
		guest.name = e.target.value;
		this.setState({
			guest: guest
		});
	}
}

export default Guest;