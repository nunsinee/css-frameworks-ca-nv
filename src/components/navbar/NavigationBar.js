import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { ContainerStyles, ContainerNav } from "../layout/ContainerStyles";
import { NavLink } from "react-router-dom";

const Styles = styled.div`
	.navbar {
		background: ${(props) => props.theme.navbarColour};
		color: ${(props) => props.theme.secondaryColour};
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	.navbar-brand {
		font-family: ${(props) => props.theme.playfairFont};
		font-style: italic;
		font-weight: 600;
		font-size: 20px;
		color: ${(props) => props.theme.primaryColour};
	}

	.navbar-light .navbar-nav .nav-link,
	.nav-link.active {
		color: ${(props) => props.theme.secondaryColour};
	}

	.nav-link.active {
		background: white;
		color: ${(props) => props.theme.secondaryColour};
		border-radius: 3px;
	}

	@media (min-width: ${(props) => props.theme.medium}) {
		.navbar-nav .nav-link {
			padding-right: 1rem;
			padding-left: 1rem;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
		}
	}

	.btn-outline-success {
		background-color: ${(props) => props.theme.primaryColour};
		border-color: ${(props) => props.theme.primaryColour};
		color: white;
		background: ${(props) => props.theme.primaryColour};
	}

	.d-flex {
		padding: 1rem;
	}

	@media (max-width: ${(props) => props.theme.medium}) {
		.navbar-collapse.collapse.show {
			width: 90%;
			height: 100%;
			background: #efefef;
			box-shadow: ${(props) => props.theme.navShadow};
		}

		.navbar-light .navbar-nav .nav-link,
		.nav-link.active {
			padding-left: 1rem;
		}
	}
`;


export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg">
			<ContainerNav>
				<Navbar.Brand href="#">The YAY Company</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="mr-auto my-2 my-lg-0"
						style={{ maxHeight: "150px" }}
						navbarScroll
					>
						<Nav.Link as={NavLink} exact to="/">
							Home
						</Nav.Link>

						<Nav.Link as={NavLink} exact to="/news">
							News
						</Nav.Link>

						<Nav.Link as={NavLink} exact to="/contact">
							Contact
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="mr-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Go</Button>
					</Form>
				</Navbar.Collapse>
			</ContainerNav>
		</Navbar>
	</Styles>
);
