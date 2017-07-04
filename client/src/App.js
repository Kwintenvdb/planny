import React, { Component } from "react";
import ItemList from "./components/ItemList";
import GuestList from "./components/GuestList";
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

let guests = [
	{
		id: 0,
		name: "Berry"
	},
	{
		id: 1,
		name: "Pretzi"
	}
];

class App extends Component {
	render() {
		return (
			<div>
				<ItemList items={items} />
				<GuestList guests={guests} />
			</div>
		);
	}
}

export default App;
