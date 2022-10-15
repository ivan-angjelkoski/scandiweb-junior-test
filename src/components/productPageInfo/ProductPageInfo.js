import React, { Component } from "react";
import { StoreContext } from "../../context/ContextProveder";
import Button from "../Button";
import SwatchButton from "../SwatchButton";
import TextButton from "../TextButton";
import PriceFormatter from "../utility/PriceFormatter";
import {
	Description,
	ProductBody,
	ProductBodyText,
	ProductInfoImageMain,
	ProductInfoImageMainSection,
	ProductInfoImageSection,
	ProductInfoImageThumb,
	ProductInfoMain,
	ProductInfoThumbSection,
} from "./styled/StyledProductPage";

export default class ProductPageInfo extends Component {
	constructor(props) {
		super();
		this.state = {
			imgIndex: 0,
			selectedAttributes: {},
		};
	}
	handleClick = (atrId, value) => {
		this.setState((prev) => ({
			selectedAttributes: { ...prev.selectedAttributes, [atrId]: value },
		}));
	};
	render() {
		// console.log(this.props);

		const {
			id,
			name,
			inStock,
			gallery,
			description,
			category,
			attributes,
			prices,
			brand,
		} = this.props.product;
		const isValid = attributes.every(
			(attr) => attr.id in this.state.selectedAttributes
		);
		const ctx = this.props.ctx;
		return (
			<ProductInfoMain>
				<ProductInfoImageSection>
					<ProductInfoThumbSection>
						{gallery.map((img, i) => (
							<ProductInfoImageThumb
								selected={i == this.state.imgIndex}
								key={i}
								onClick={() => {
									this.setState((prev) => ({
										imgIndex: i,
									}));
								}}
								src={img}
							/>
						))}
					</ProductInfoThumbSection>
					<ProductInfoImageMainSection>
						<ProductInfoImageMain src={gallery[this.state.imgIndex]} />
					</ProductInfoImageMainSection>
				</ProductInfoImageSection>
				<ProductBody>
					<ProductBodyText>{name}</ProductBodyText>
					<ProductBodyText bold>{brand}</ProductBodyText>
					{attributes.map((attribute) => {
						if (attribute.type == "text") {
							return (
								<TextButton
									attribute={attribute}
									key={attribute.id}
									handleClick={this.handleClick}
									selectedAttributes={this.state.selectedAttributes}
								/>
							);
						}
						if (attribute.type == "swatch") {
							return (
								<SwatchButton
									attribute={attribute}
									key={attribute.id}
									handleClick={this.handleClick}
									selectedAttributes={this.state.selectedAttributes}
								/>
							);
						}
					})}
					<ProductBodyText roboto>PRICE:</ProductBodyText>
					<ProductBodyText
						size='24px'
						roboto
					>
						<PriceFormatter prices={prices} />
					</ProductBodyText>

					<Button
						disabled={!inStock || !isValid}
						full
						onClick={() => {
							ctx.addToCart({
								product: this.props.product,
								selectedAttributes: this.state.selectedAttributes,
							});
						}}
					>
						{inStock ? "ADD TO CART" : "OUT OF STOCK"}
					</Button>

					<Description
						dangerouslySetInnerHTML={{ __html: description }}
					></Description>
				</ProductBody>
			</ProductInfoMain>
		);
	}
}
