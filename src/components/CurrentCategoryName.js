import React, { Component } from "react";
import { StoreContext } from "../context/ContextProveder";

export default class CurrentCategoryName extends Component {
	render() {
		return (
			<StoreContext.Consumer>
				{(ctx) => <span>{ctx.state.category}</span>}
			</StoreContext.Consumer>
		);
	}
}
