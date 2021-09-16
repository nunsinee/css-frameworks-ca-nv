import styled from "styled-components";
const TabStyles = styled.div`
	.tab-content {
		background: white;
		border-radius: 12px;
		box-shadow: ${(props) => props.theme.tabShadow};
		margin-top: -17.5px;
		margin-bottom: 10rem;
		height: 320px;
	}

	.nav-tabs .nav-link {
		background: transparent;
		color: ${(props) => props.theme.primaryColour};
	}

	.nav-tabs .nav-link.active,
	.nav-tabs .nav-item.show .nav-link {
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		background-color: #fff;
		box-shadow: ${(props) => props.theme.tabShadow};
		border-color: none;
		color: ${(props) => props.theme.textColour};
	}

	.tabContent {
		display: grid;
		padding: 2rem;
		grid-template-areas:
			"tabImage tabImage tabDetails"
			"tabImage tabImage tabDetails"
			"tabImage tabImage tabIcons";
		color: ${(props) => props.theme.textColour};
	}

	.tabContent > .tabImage {
		grid-area: tabImage;
		padding: 2rem 0;
		margin: 0 auto;
	}

	.tabContent > .tabDetails {
		grid-area: tabDetails;
		padding: 2rem 0;
		margin: 0 auto;
	}

	.tabContent > .tabIcons {
		grid-area: tabIcons;
		font-size: 28px;
		font-weight: 600;
		color: black;
		padding: 2rem 0;
	}
`;

export default TabStyles;
