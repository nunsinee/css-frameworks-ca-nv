import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import { NavigationBar } from "./components/navbar/NavigationBar";

import Footer from "./components/layout/Footer";
import Wrapper from "./components/layout/Wrapper";

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<NavigationBar />
				<Wrapper>
					<Switch>
						<Route exact path="/" component={Home}>
							<Home />
						</Route>
						<Route path="/news" component={News}>
							<News />
						</Route>
						<Route path="/contact" component={Contact}>
							<Contact />
						</Route>
						<Route component={NoMatch}></Route>
					</Switch>
				</Wrapper>
				<Footer />
			</ThemeProvider>
		</Router>
	);
}

export default App;
