import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCard = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
`;
export const ProductImg = styled.img`
	aspect-ratio: 1;
	object-fit: cover;
`;
