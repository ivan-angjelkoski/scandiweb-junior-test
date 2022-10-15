import React, { Component } from "react";
import {
	Attributes,
	AttributesFlex,
	AttributesLabel,
	AttributeText,
} from "./styled/StyledAttributes";

export default class TextButton extends Component {
	constructor(props) {
		super();
	}
	render() {
		const { id, type, name, items } = this.props.attribute;
		const handleClick = this.props.handleClick;
		return (
			<Attributes>
				<AttributesLabel>{name}:</AttributesLabel>
				<AttributesFlex>
					{items.map((item) => (
						<AttributeText
							small={this.props.small}
							compact={this.props.compact}
							onClick={() => {
								handleClick(id, item.id);
							}}
							selected={this.props.selectedAttributes[id] == item.id}
							key={item.id}
						>
							{this.props.compact ? item.value : item.displayValue}
						</AttributeText>
					))}
				</AttributesFlex>
			</Attributes>
		);
	}
}
