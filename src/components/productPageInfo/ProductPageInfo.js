import React, { Component } from "react";
import {
	ProductBody,
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
		};
	}
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
		return (
			<ProductInfoMain>
				<ProductInfoImageSection>
					<ProductInfoThumbSection>
						{gallery.map((img, i) => (
							<ProductInfoImageThumb
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
				<ProductBody>Info</ProductBody>
			</ProductInfoMain>
		);
	}
}
