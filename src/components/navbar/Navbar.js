import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";
import { Actions, Li, Nav, Ul } from "./styled/StyledNavbar";
import CurrencyMenu from "./CurrencyMenu";
import CartMenu from "./CartMenu";
import CategoryMenu from "./CategoryMenu";

export default class Navbar extends Component {
	render() {
		return (
			<Nav>
				<CategoryMenu />
				<Link to={"/cart"}>
					<BsHandbagFill
						color='#52D67A'
						fontSize={"2rem"}
					/>
				</Link>
				<Actions>
					<CurrencyMenu />
					<CartMenu />
				</Actions>
			</Nav>
		);
	}
}
