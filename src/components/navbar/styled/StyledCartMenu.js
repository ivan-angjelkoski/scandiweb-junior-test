import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Button";

export const CartButton = styled.div`
	position: relative;
	padding: 3px 5px;
	border-radius: 6px;
	&:hover {
		background-color: #eee;
	}
`;

export const CartButtonMenu = styled.div`
	padding: 1rem;
	min-width: 400px;
	position: absolute;
	background-color: #eee;
	z-index: 11;
	top: 100%;
	right: 0;
`;

export const CartOverlay = styled.div`
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #00000088;
`;

export const TotalCartMenu = styled.div`
	font-size: 16px;
	font-family: "Roboto", sans-serif;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	gap: 10px;
	margin: 10px 0;
`;

export const CheckoutSection = styled.div`
	display: flex;
	gap: 10px;
	& > * {
		flex: 1;
	}
`;

export const QuantityBadge = styled.div`
	font-family: "Roboto", Arial, Helvetica, sans-serif;
	position: absolute;
	padding: 2px;
	font-size: 14px;
	top: -13px;
	right: -12px;
	background-color: black;
	color: white;
	width: 24px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 1;
`;

export const StyledLink = styled(Link)`
	text-align: center;
	font-size: 16px;
	width: ${(props) => (props.full ? "100%" : "auto")};
	padding: 1rem;
	background: ${(props) => (props.outline ? "transparent" : "#5ECE7B")};
	color: ${(props) => (props.outline ? "#000" : "#fff")};
	cursor: pointer;
	border: ${(props) => (props.outline ? "1px" : "2px")} solid
		${(props) => (props.outline ? "#000" : "#5ECE7B")};
	text-transform: uppercase;
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
