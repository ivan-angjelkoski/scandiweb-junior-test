import React, { Component, createContext } from "react";
import { apolloClient } from "..";
import { GET_PRODUCTS_BY_CATEGORY, INITIAL_QUERY } from "../gql/queries";
import { v4 as uuid } from "uuid";

export const StoreContext = createContext({
	state: {
		loading: false,
		error: "",
		products: [],
		currency: { label: "USD", symbol: "$" },
		currencies: [],
		category: "all",
		categories: [],
		cart: [],
	},
	addToCart: () => {},
	changeQuantity: () => {},
	setCategory: () => {},
	setCurrency: () => {},
	changeAttribute: () => {},
});

export default class ContextProveder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			error: "",
			products: [],
			currency: { label: "USD", symbol: "$" },
			category: "all",
			categories: [],
			currencies: [],
			cart: [],
		};
	}

	setCategory = (value) => {
		this.setState((prev) => ({ category: value }));
	};
	setCurrency = (value) => {
		this.setState((prev) => ({ currency: value }));
	};
	addToCart = ({ product, selectedAttributes }) => {
		this.setState((prev) => ({
			cart: prev.cart.concat({
				product,
				selectedAttributes,
				quantity: 1,
				id: uuid(),
			}),
		}));
	};
	changeQuantity = () => {};
	changeAttribute = () => {};
	componentDidMount() {
		apolloClient
			.query({
				query: INITIAL_QUERY,
				variables: {
					title: this.state.category,
				},
			})
			.then(({ data }) => {
				this.setState((prev) => ({
					currencies: data.currencies,
					categories: data.categories,
					products: data.category.products,
				}));
			});
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.category != prevState.category) {
			this.setState((prev) => ({ loading: true }));
			this.setState((prev) => ({ error: "" }));
			apolloClient
				.query({
					query: GET_PRODUCTS_BY_CATEGORY,
					variables: {
						title: this.state.category,
					},
				})
				.then(({ data }) => {
					this.setState((prev) => ({
						products: data.category.products,
					}));
				})
				.catch((err) => {
					this.setState((prev) => ({ error: "Error." }));
				})
				.finally(() => {
					this.setState((prev) => ({ loading: false }));
				});
		}
	}

	render() {
		const ctxObject = {
			state: this.state,
			setCategory: this.setCategory,
			setCurrency: this.setCurrency,
			addToCart: this.addToCart,
			changeQuantity: this.changeQuantity,
			changeAttribute: this.changeAttribute,
		};
		return (
			<StoreContext.Provider value={ctxObject}>
				{this.props.children}
			</StoreContext.Provider>
		);
	}
}
