import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { ContainerStyles, ContainerNav } from "../layout/ContainerStyles";

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
		padding-left: 1rem;
	}

	.nav-link.active {
		background: white;
		color: ${(props) => props.theme.secondaryColour};
		border-radius: 3px;
	}

	.btn-outline-success {
		background-color: ${(props) => props.theme.primaryColour};
		border-color: ${(props) => props.theme.primaryColour};
		color: white;
		background: ${(props) => props.theme.primaryColour};
	}

	.nav-link .active {
		background: white;
		border-radius: 3px;
		color: ${(props) => props.theme.secondaryColour};
	}

	.d-flex {
		padding: 1rem;
	}

	@media (max-width: 991px) {
		.navbar-collapse.collapse.show {
			width: 90%;
			height: 100%;
			background: #efefef;
			box-shadow: ${(props) => props.theme.navShadow};
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
						<Nav.Link href="/" className="nav-link active">
							Home
						</Nav.Link>
						<Nav.Link href="/news" className="nav-link">
							News
						</Nav.Link>
						<Nav.Link href="/contact" className="nav-link">
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
