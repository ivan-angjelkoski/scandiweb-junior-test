import React, { Component } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
	DollarMenuButton,
	DollarMenuList,
	DollarMenuListItem,
} from "./styled/StyledCurrencyMenu";
import { StoreContext } from "../../context/ContextProveder";

class CurrencyMenu extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
	}
	handleClick = () => {
		this.setState((prev) => ({ isOpen: !prev.isOpen }));
	};
	render() {
		return (
			<DollarMenuButton onClick={this.handleClick}>
				<StoreContext.Consumer>
					{(ctx) => `${ctx.state.currency.symbol}`}
				</StoreContext.Consumer>
				{this.state.isOpen ? (
					<FaChevronUp fontSize={"1rem"} />
				) : (
					<FaChevronDown fontSize={"1rem"} />
				)}
				<StoreContext.Consumer>
					{(context) => (
						<>
							{this.state.isOpen && (
								<DollarMenuList>
									{context.state.currencies.map((currency) => (
										<DollarMenuListItem
											key={currency.label}
											onClick={() => {
												context.setCurrency(currency);
											}}
										>
											{`${currency.symbol} ${currency.label}`}
										</DollarMenuListItem>
									))}
								</DollarMenuList>
							)}
						</>
					)}
				</StoreContext.Consumer>
			</DollarMenuButton>
		);
	}
}

export default CurrencyMenu;
