import React, { Component } from "react";
import Products from "../components/categoryProducts/Products";
import CurrentCategoryName from "../components/CurrentCategoryName";
import { StoreContext } from "../context/ContextProveder";
import { Heading } from "./styled/StyledCategory";

export default class CategoryPage extends Component {
	render() {
		return (
			<div>
				<Heading>
					<CurrentCategoryName />
				</Heading>
				<StoreContext.Consumer>
					{(ctx) => <Products ctx={ctx} />}
				</StoreContext.Consumer>
			</div>
		);
	}
}
