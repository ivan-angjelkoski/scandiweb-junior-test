import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	width: ${(props) => (props.full ? "100%" : "auto")};
	padding: 1rem;
	background: ${(props) => (props.outline ? "transparent" : "#5ECE7B")};
	color: ${(props) => (props.outline ? "#000" : "#fff")};
	cursor: pointer;
	border: 2px solid ${(props) => (props.outline ? "#000" : "#5ECE7B")};
	&:disabled {
		opacity: 0.4;
	}
	&:disabled:hover {
		opacity: 0.4;
		cursor: auto;
	}
	&:hover {
		background: ${(props) => (props.outline ? "#00000022" : "#6EdE8B")};
	}
	&:active {
		opacity: 0.8;
	}
`;

export default class Button extends Component {
	constructor(props) {
		super();
	}
	render() {
		return <StyledButton {...this.props}>{this.props.children}</StyledButton>;
	}
}
