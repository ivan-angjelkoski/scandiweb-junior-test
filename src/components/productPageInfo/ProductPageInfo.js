import React, { Component } from "react";
import Button from "../Button";
import SwatchButton from "../SwatchButton";
import TextButton from "../TextButton";
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
		return (
			<ProductInfoMain>
				<ProductInfoImageSection>
					<ProductInfoThumbSection>
						{gallery.map((img, i) => (
							<ProductInfoImageThumb
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
					<Button
						disabled={!inStock || !isValid}
						full
						// onClick={}
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
