import styled from "styled-components";

export const ProductInfoMain = styled.div`
	display: flex;
	padding: 2rem 0;
	/* background: #ddd; */
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
	outline: 2px solid ${(props) => (props.selected ? "black" : "transparent")};
`;

export const ProductInfoImageMainSection = styled.div`
	flex: 1;
	padding-right: 1.5rem;
`;

export const ProductInfoImageMain = styled.img``;

export const ProductBody = styled.div`
	flex: 1;
	/* background: #aaa; */
`;

export const ProductBodyText = styled.h3`
	font-size: ${(props) =>
		props.size ? props.size : props.roboto ? "18px" : "30px"};
	${(props) => (props.roboto ? `font-family: "Roboto",sans-serif` : "")};
	font-weight: ${(props) =>
		props.roboto ? "700" : props.bold ? "600" : "400"};
	margin: 10px 0;
`;

export const Description = styled.div`
	margin: 1rem 0;
	font-family: ${`'Roboto',Arial,sans-serif`};
	font-weight: 400;
	font-size: 16px;
`;
