import React, { Component } from "react";
import ItemList from "./components/ItemList";
import GuestContainer from "./components/guests/GuestContainer";
import "./bulma.css";

let items = [
	{
		id: 0,
		name: "Test",
		price: 100
	},
	{
		id: 1,
		name: "Hello",
		price: 20
	}
];

class App extends Component {
	render() {
		return (
			<div>
				<ItemList items={items} />
				<GuestContainer />
			</div>
		);
	}
}

export default App;
