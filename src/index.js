import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextProveder from "./context/ContextProveder";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const apolloClient = new ApolloClient({
	uri: "http://localhost:4000",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ContextProveder>
			<ApolloProvider client={apolloClient}>
				<App />
			</ApolloProvider>
		</ContextProveder>
	</React.StrictMode>
);
