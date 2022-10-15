import React, { Component } from "react";
import { StoreContext } from "../../context/ContextProveder";

export default class PriceFormatter extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<StoreContext.Consumer>
				{(ctx) => {
					const price = this.props.prices.find(
						(price) => price.currency.label == ctx.state.currency.label
					);
					return (
						<span>
							{price.amount} {price.currency.symbol}
						</span>
					);
				}}
			</StoreContext.Consumer>
		);
	}
}
