import styled from "styled-components";

export const Main = styled.div`
	display: flex;
	margin: 1rem 0;
	padding: 10px 0;
	border-bottom: 1px solid #e5e5e5;
`;
export const MainInfo = styled.div`
	flex: 1;
	display: flex;
`;

export const MainInfoBody = styled.div`
	flex: 1;
`;
export const MainInfoQuantity = styled.div`
	flex-basis: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 1rem;
	text-align: center;
`;

export const ImageSection = styled.div`
	flex-basis: 200px;
`;

export const ImageSectionControls = styled.div``;

export const ImageControl = styled.div``;

export const Img = styled.img``;

export const Text = styled.h3`
	font-size: ${(props) => props.size ?? "16px"};
	font-weight: ${(props) => props.weight ?? "400"};
	margin: 4px 0;
`;
