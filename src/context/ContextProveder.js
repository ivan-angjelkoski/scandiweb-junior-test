import React, { Component, createContext } from "react";
import { apolloClient } from "..";
import { GET_PRODUCTS_BY_CATEGORY, INITIAL_QUERY } from "../gql/queries";

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
	setCategory: () => {},
	setCurrency: () => {},
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
		};
		return (
			<StoreContext.Provider value={ctxObject}>
				{this.props.children}
			</StoreContext.Provider>
		);
	}
}
