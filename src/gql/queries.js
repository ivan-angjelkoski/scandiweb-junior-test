import { gql } from "@apollo/client";

export const INITIAL_QUERY = gql`
	query initialQuery($title: String!) {
		categories {
			name
		}
		currencies {
			label
			symbol
		}
		category(input: { title: $title }) {
			products {
				id
				name
				brand
				inStock
				gallery
				prices {
					currency {
						label
						symbol
					}
					amount
				}
			}
		}
	}
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
	query getProductsByCategory($title: String!) {
		category(input: { title: $title }) {
			products {
				id
				name
				brand
				inStock
				gallery
				prices {
					currency {
						label
						symbol
					}
					amount
				}
			}
		}
	}
`;
