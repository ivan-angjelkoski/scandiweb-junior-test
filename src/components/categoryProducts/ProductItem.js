import React, { Component } from "react";
import PriceFormatter from "../utility/PriceFormatter";
import {
	ProductCard,
	ProductCardBody,
	ProductCardText,
	ProductImageOutOfStock,
	ProductImg,
	ProductImgContainer,
} from "./styled/StyledProductItem";

export default class ProductItem extends Component {
	constructor(props) {
		super();
	}
	render() {
		const { gallery, name, prices, inStock, id } = this.props.product;
		return (
			<ProductCard to={`/product/${id}`}>
				<ProductImgContainer>
					<ProductImg src={gallery[0]} />
					{!inStock && (
						<ProductImageOutOfStock>OUT OF STOCK</ProductImageOutOfStock>
					)}
				</ProductImgContainer>
				<ProductCardBody>
					<ProductCardText thin>{name}</ProductCardText>
					<ProductCardText>
						<PriceFormatter prices={prices} />
					</ProductCardText>
				</ProductCardBody>
			</ProductCard>
		);
	}
}
