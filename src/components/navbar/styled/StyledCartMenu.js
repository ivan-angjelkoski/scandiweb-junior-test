import styled from "styled-components";

export const CartButton = styled.div`
	position: relative;
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
