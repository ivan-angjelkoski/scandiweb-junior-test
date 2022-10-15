import styled from "styled-components";

export const ProductInfoMain = styled.div`
	display: flex;
	padding: 1rem 0;
	background: #ddd;
	gap: 1rem;
`;

export const ProductInfoImageSection = styled.div`
	display: flex;
	gap: 1rem;
	flex: 2;
`;

export const ProductInfoThumbSection = styled.div`
	flex-basis: 80px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ProductInfoImageThumb = styled.img`
	aspect-ratio: 1;
	object-fit: cover;
	cursor: pointer;
`;

export const ProductInfoImageMainSection = styled.div`
	flex: 1;
`;

export const ProductInfoImageMain = styled.img``;

export const ProductBody = styled.div`
	flex: 1;
	background: #aaa;
`;
