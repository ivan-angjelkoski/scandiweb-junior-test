import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/ContextProveder";
import Button from "../Button";
import CartItem from "../cart/CartItem";
import {
	CartButton,
	CartButtonMenu,
	CartOverlay,
	CheckoutSection,
	TotalCartMenu,
} from "./styled/StyledCartMenu";
export default class CartMenu extends Component {
	constructor(props) {
		super();
		this.state = {
			isOpen: false,
		};
	}
	render() {
		return (
			<CartButton
				onClick={() => {
					this.setState((prev) => ({ isOpen: true }));
				}}
			>
				<AiOutlineShoppingCart />
				{this.state.isOpen && (
					<>
						<CartOverlay
							onClick={(e) => {
								e.stopPropagation();
								this.setState((prev) => ({ isOpen: false }));
							}}
						/>
						<StoreContext.Consumer>
							{(ctx) => (
								<CartButtonMenu>
									<h3 style={{ fontSize: "16px" }}>
										My bag,
										<span style={{ fontWeight: "300" }}>
											{ctx.state.cart.reduce((qty, item) => {
												return qty + item.quantity;
											}, 0)}{" "}
											items
										</span>
									</h3>
									{ctx.state.cart.map((item) => (
										<CartItem
											compact={true}
											item={item}
											key={item.id}
											changeAttribute={ctx.changeAttribute}
											changeQuantity={ctx.changeQuantity}
										/>
									))}
									<TotalCartMenu>
										<div>Total:</div>
										<div>
											{ctx.state.cart.length > 0 ? (
												<>
													{ctx.state.currency.symbol}{" "}
													{ctx.state.cart
														.reduce((qty, item) => {
															const price = item.product.prices.find(
																(price) => {
																	return (
																		price.currency.label ==
																		ctx.state.currency.label
																	);
																}
															);
															return qty + item.quantity * price.amount;
														}, 0)
														.toFixed(2)}
												</>
											) : (
												"-"
											)}
										</div>
									</TotalCartMenu>
									<CheckoutSection>
										<Link to={"/cart"}>
											<Button
												full
												outline
												style={{ height: "100%" }}
											>
												View Bag
											</Button>
										</Link>
										<Link to={"/cart"}>
											<Button
												full
												style={{ height: "100%" }}
											>
												checkout
											</Button>
										</Link>
									</CheckoutSection>
								</CartButtonMenu>
							)}
						</StoreContext.Consumer>
					</>
				)}
			</CartButton>
		);
	}
}
