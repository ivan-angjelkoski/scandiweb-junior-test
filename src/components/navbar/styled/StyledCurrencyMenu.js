import styled from "styled-components";

export const DollarMenuButton = styled.div`
	font-size: inherit;
	display: flex;
	gap: 6px;
	align-items: center;
	border: none;
	background: none;
	cursor: pointer;
	position: relative;
	padding: 3px 5px;
	border-radius: 6px;
	&:hover {
		background-color: #eee;
	}
`;

export const DollarMenuList = styled.ul`
	box-shadow: 0px 0px 5px #00000033;
	width: 114px;
	background-color: #eee;
	position: absolute;
	top: 100%;
	right: -50%;
	list-style: none;
`;
export const DollarMenuListItem = styled.li`
	font-size: 18px;
	font-weight: 500;
	padding: 20px;
	&:hover {
		background-color: #aaa;
	}
`;
