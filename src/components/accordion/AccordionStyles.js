import styled from "styled-components";

const AccordionStyles = styled.div`
	.accordion {
		margin-bottom: 5rem;
	}
	.accordion-header {
		margin: 0;
	}

	button.accordion-button {
		font-size: 19px;
		color: ${(props) => props.theme.primaryColour};
		background-color: white;
		border: none;
		width: 100%;
		padding: 0.8rem 1rem;
		text-align: left;
		margin-top: -20px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom: 1px solid ${(props) => props.theme.primaryColour};
	}

	button.accordion-button.collapsed {
		border-bottom: 1px solid ${(props) => props.theme.textColour};
	}

	.accordion-body {
		background: ${(props) => props.theme.backgroundColour};
	}

	.accordion-container {
		width: 90%;
		margin: 0 auto;
		padding-top: 0.5rem;
	}

	.tabContent {
		display: grid;
		grid-template-areas:
			"tabDetails "
			"tabImage"
			"tabIcons";
		color: ${(props) => props.theme.textColour};
		margin: 0;
		
	}

	.tabContent > .tabIcons {
		margin: 0 auto;
		margin-bottom: 2rem;
	}
`;

export default AccordionStyles;
