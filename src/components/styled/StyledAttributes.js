import styled from "styled-components";

export const Attributes = styled.div`
	margin: 10px 0;
`;
export const AttributesLabel = styled.h3`
	font-family: ${`'Roboto',sans-serif`};
	font-weight: 700;
	font-size: 18px;
`;

export const AttributesFlex = styled.div`
	display: flex;
	margin: 3px 0;
	flex-wrap: wrap;
	gap: 10px;
`;

export const AttributeText = styled.button`
	padding: 1rem;
	font-size: 16px;
	font-weight: 400;
	background: ${(props) => (props.selected ? "#1d1f22" : "transparent")};
	color: ${(props) => (props.selected ? "#fff" : "1d1f22")};
	border: 1px solid #1d1f22;
	cursor: pointer;
	&:hover {
		outline: 1px solid #1d1f22;
	}
`;

export const AttributeSwatch = styled.button`
	width: 32px;
	height: 32px;
	background: ${(props) => props.bg};
	border: 1px solid ${(props) => (props.selected ? "white" : props.bg)};
	outline: ${(props) => (props.selected ? "3px solid #5ECE7B" : "")};
	cursor: pointer;
	&:hover {
		/* outline: 1px solid #1d1f22; */
	}
`;
