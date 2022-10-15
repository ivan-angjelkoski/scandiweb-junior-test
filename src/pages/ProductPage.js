import React, { Component } from "react";
// import { useParams } from "react-router-dom";
import { apolloClient } from "..";
import ProductPageInfo from "../components/productPageInfo/ProductPageInfo";
import { GET_PRODUCT } from "../gql/queries";

class ProductPage extends Component {
	constructor(props) {
		super();
		this.state = {
			loading: true,
			error: "",
			product: null,
		};
	}
	componentDidMount() {
		// console.log(window.location.pathname.split("/")[2]);
		this.setState((prev) => ({ loading: true }));
		this.setState((prev) => ({ error: "" }));

		apolloClient
			.query({
				query: GET_PRODUCT,
				variables: {
					// id: this.props.params.id,
					id: window.location.pathname.split("/")[2],
				},
			})
			.then(({ data }) => {
				this.setState((prev) => ({
					product: data.product,
				}));
			})
			.catch((err) => {
				this.setState((prev) => ({ error: "Error" }));
			})
			.finally(() => {
				this.setState((prev) => ({ loading: false }));
			});
	}
	render() {
		if (this.state.loading) {
			return <h1>Loading...</h1>;
		}
		if (this.state.error) {
			return <h1>Error...</h1>;
		}
		return <ProductPageInfo product={this.state.product} />;
	}
}

// const withParams = (Component) => (props) => {
// 	const params = useParams();
// 	return (
// 		<Component
// 			{...props}
// 			params={params}
// 		></Component>
// 	);
// };

// export default withParams(ProductPage);

export default ProductPage;
