import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCard = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
	border: 1px solid transparent;
	border-radius: 8px;
	transition: border-color 0.15s;

	&:hover {
		border: 1px solid #aaa;
	}
`;
export const ProductImg = styled.img`
	aspect-ratio: 1;
	object-fit: cover;
	image-rendering: -webkit-optimize-contrast;
	image-rendering: crisp-edges;
`;

export const ProductImgContainer = styled.div`
	position: relative;
`;
export const ProductImageOutOfStock = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #ffffff88;
	color: black;
	font-weight: 400;
`;

export const ProductCardBody = styled.div``;

export const ProductCardText = styled.h3`
	font-size: 16px;
	font-weight: ${(props) => (props.thin ? "300" : "500")};
	margin: 6px 0;
`;
