import React, { Component } from "react";
import { StoreContext } from "../../context/ContextProveder";
import { Grid } from "../utility/Grid";
import ProductItem from "./ProductItem";

export default class Products extends Component {
	render() {
		if (this.props.ctx.state.loading) {
			return <h1>Loading...</h1>;
		}
		if (this.props.ctx.state.error) {
			return <h1>Error...</h1>;
		}
		return (
			<Grid>
				{this.props.ctx.state.products.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
					/>
				))}
			</Grid>
		);
	}
}
