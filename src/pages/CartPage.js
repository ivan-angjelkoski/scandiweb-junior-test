import React, { Component } from "react";
import CartItem from "../components/cart/CartItem";
import {
	CheckoutItem,
	ChekoutInfo,
	Heading,
	Main,
} from "./styled/StyledCartPage";
import { StoreContext } from "../context/ContextProveder";
import Button from "../components/Button";

export default class CartPage extends Component {
	render() {
		return (
			<Main>
				<Heading>Cart</Heading>
				<StoreContext.Consumer>
					{(ctx) => (
						<>
							{ctx.state.cart.map((item) => (
								<CartItem
									item={item}
									key={item.id}
									changeAttribute={ctx.changeAttribute}
									changeQuantity={ctx.changeQuantity}
								/>
							))}
							<div>
								<ChekoutInfo>
									<CheckoutItem>Tax {ctx.state.tax}% :</CheckoutItem>
									<CheckoutItem>
										<strong>
											<strong>
												{ctx.state.cart.length > 0 ? (
													<>
														{ctx.state.currency.symbol}{" "}
														{(
															ctx.state.cart.reduce((qty, item) => {
																const price = item.product.prices.find(
																	(price) => {
																		return (
																			price.currency.label ==
																			ctx.state.currency.label
																		);
																	}
																);
																return qty + item.quantity * price.amount;
															}, 0) / ctx.state.tax
														).toFixed(2)}
													</>
												) : (
													"-"
												)}
											</strong>
										</strong>
									</CheckoutItem>
									<CheckoutItem>Quantity:</CheckoutItem>
									<CheckoutItem>
										<strong>
											{ctx.state.cart.reduce((qty, item) => {
												return qty + item.quantity;
											}, 0)}
										</strong>
									</CheckoutItem>
									<CheckoutItem>Total:</CheckoutItem>
									<CheckoutItem>
										<strong>
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
										</strong>
									</CheckoutItem>
								</ChekoutInfo>
								<Button>ORDER</Button>
							</div>
						</>
					)}
				</StoreContext.Consumer>
			</Main>
		);
	}
}
