import React, { Component } from "react";
import { StoreContext } from "../../context/ContextProveder";
import { QuantityBadge } from "./styled/StyledCartMenu";

export default class CartMenuQuantity extends Component {
	render() {
		return (
			<StoreContext.Consumer>
				{(ctx) => {
					const qty = ctx.state.cart.reduce((qty, item) => {
						return qty + item.quantity;
					}, 0);
					return <>{qty > 0 ? <QuantityBadge>{qty}</QuantityBadge> : null}</>;
				}}
			</StoreContext.Consumer>
		);
	}
}
