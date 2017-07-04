import React, { Component } from "react";
import Item from "./Item";

class ItemList extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<div className="columns">
						{this.props.items.map(item => {
							return (
								<div className="column" key={item.id}>
									<Item />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default ItemList;