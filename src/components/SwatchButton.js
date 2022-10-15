import React, { Component } from "react";
import {
	Attributes,
	AttributesFlex,
	AttributesLabel,
	AttributeSwatch,
} from "./styled/StyledAttributes";

export default class SwatchButton extends Component {
	constructor(props) {
		super();
	}
	render() {
		const { id, type, name, items } = this.props.attribute;
		// console.log(items);
		const handleClick = this.props.handleClick;
		return (
			<Attributes>
				<AttributesLabel>{name}</AttributesLabel>
				<AttributesFlex>
					{items.map((item) => {
						return (
							<AttributeSwatch
								key={item.id}
								bg={item.value}
								selected={this.props.selectedAttributes[id] == item.id}
								onClick={() => {
									handleClick(id, item.id);
								}}
							/>
						);
					})}
				</AttributesFlex>
			</Attributes>
		);
	}
}
