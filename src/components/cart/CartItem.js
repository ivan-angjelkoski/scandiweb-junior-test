import React, { Component } from "react";
import Button from "../Button";
import SwatchButton from "../SwatchButton";
import TextButton from "../TextButton";
import PriceFormatter from "../utility/PriceFormatter";
import {
	ImageControl,
	ImageSection,
	ImageSectionControls,
	Img,
	Main,
	MainInfo,
	MainInfoBody,
	MainInfoQuantity,
	Text,
} from "./styled/StyledCartItem";

export default class CartItem extends Component {
	constructor(props) {
		super();
		this.state = {
			imgIndex: 0,
		};
	}
	handleClick = (attrId, attrValue) => {
		this.props.changeAttribute(attrId, attrValue, this.props.item.id);
	};
	handleIncrement = () => {
		if (this.state.imgIndex + 1 == this.props.item.product.gallery.length) {
			this.setState((prev) => ({
				imgIndex: 0,
			}));
		} else {
			this.setState((prev) => ({
				imgIndex: prev.imgIndex + 1,
			}));
		}
	};
	handleDecrement = () => {
		if (this.state.imgIndex - 1 < 0) {
			this.setState((prev) => ({
				imgIndex: this.props.item.product.gallery.length - 1,
			}));
		} else {
			this.setState((prev) => ({
				imgIndex: prev.imgIndex - 1,
			}));
		}
	};

	render() {
		const { changeQuantity, changeAttribute } = this.props;
		const { product, selectedAttributes, id, quantity } = this.props.item;
		return (
			<Main>
				<MainInfo>
					<MainInfoBody>
						<Text weight={"600"}>{product.name}</Text>
						<Text weight={"400"}>{product.brand}</Text>
						<Text weight={"500"}>
							<PriceFormatter prices={product.prices} />
						</Text>
						{product.attributes.map((attr) => {
							if (attr.type == "text") {
								return (
									<TextButton
										small
										size='sm'
										attribute={attr}
										key={attr.id}
										handleClick={this.handleClick}
										selectedAttributes={selectedAttributes}
										cartItemId={id}
									/>
								);
							}
							if (attr.type == "swatch") {
								return (
									<SwatchButton
										small
										attribute={attr}
										key={attr.id}
										handleClick={changeAttribute}
										selectedAttributes={selectedAttributes}
									/>
								);
							}
						})}
					</MainInfoBody>
					<MainInfoQuantity>
						<Button
							onClick={() => {
								changeQuantity(1, id);
							}}
							outline
						>
							+
						</Button>
						<Text
							weight='500'
							size='24px'
						>
							{quantity}
						</Text>
						<Button
							onClick={() => {
								changeQuantity(-1, id);
							}}
							outline
						>
							-
						</Button>
					</MainInfoQuantity>
				</MainInfo>
				<ImageSection>
					<Img src={product.gallery[this.state.imgIndex]} />
					<ImageSectionControls>
						<ImageControl onClick={this.handleIncrement}>&lt;</ImageControl>
						<ImageControl onClick={this.handleDecrement}>&gt;</ImageControl>
					</ImageSectionControls>
				</ImageSection>
			</Main>
		);
	}
}
