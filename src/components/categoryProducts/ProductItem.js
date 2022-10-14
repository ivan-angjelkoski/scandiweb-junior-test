import React, { Component } from "react";
import PriceFormatter from "../utility/PriceFormatter";
import { ProductCard, ProductImg } from "./styled/StyledProductItem";

export default class ProductItem extends Component {
	constructor(props) {
		super();
	}
	render() {
		const { gallery, name, brand, prices, inStock, id } = this.props.product;
		return (
			<ProductCard to={`/product/${id}`}>
				<ProductImg src={gallery[0]} />
				<div>
					<h3>{name}</h3>
					<h3>{brand}</h3>
					<h3>
						<PriceFormatter prices={prices} />
					</h3>
				</div>
			</ProductCard>
		);
	}
}
