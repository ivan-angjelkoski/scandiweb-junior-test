import styled from "styled-components";
import { Link } from "react-router-dom";

export const Ul = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const Li = styled(Link)`
	text-transform: uppercase;
	font-size: 16px;
	font-weight: ${(props) => (props.active ? "600" : "400")};
	color: ${(props) => (props.active ? "#5ECE7B" : "black")};
	padding: 32px 16px;
	border-bottom: 2px solid
		${(props) => (props.active ? "#5ECE7B" : "transparent")};
	cursor: pointer;
	&:hover {
		border-bottom: 2px solid #5ece7b;
	}
`;
