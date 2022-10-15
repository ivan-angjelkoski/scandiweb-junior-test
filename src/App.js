import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/utility/Container";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

export default class App extends Component {
	render() {
		return (
			<Container>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<CategoryPage />}
					/>
					<Route
						path='/product/:id'
						element={<ProductPage />}
					/>
					<Route
						path='/cart'
						element={<CartPage />}
					/>
				</Routes>
			</Container>
		);
	}
}
