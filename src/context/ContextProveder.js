import React, { Component, createContext } from "react";

export const StoreContext = createContext({
	state: {
		currency: "",
		currencies: [],
		category: "",
		categories: [],
		cart: [],
	},
});

export default class ContextProveder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currency: "USD",
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
