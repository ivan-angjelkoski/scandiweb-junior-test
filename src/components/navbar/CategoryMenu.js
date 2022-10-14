import React, { Component } from "react";
import { StoreContext } from "../../context/ContextProveder";
import { Li, Ul } from "./styled/StyledCategory";

export default class CategoryMenu extends Component {
	render() {
		return (
			<Ul>
				<StoreContext.Consumer>
					{(context) => (
						<>
							{context.state.categories.map((category) => (
								<Li
									to={"/"}
									active={context.state.category == category.name}
									key={category.name}
									onClick={() => {
										context.setCategory(category.name);
									}}
								>
									{category.name}
								</Li>
							))}
						</>
					)}
				</StoreContext.Consumer>
			</Ul>
		);
	}
}
