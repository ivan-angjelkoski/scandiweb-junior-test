import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/utility/Container";
import CategoryPage from "./pages/CategoryPage";

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
				</Routes>
			</Container>
		);
	}
}
