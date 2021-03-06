import styled from "styled-components";

const FooterStyles = styled.div`
	.footer-grid {
		display: grid;
		grid-template-areas:
			"footer-icons footer-icons"
			"footer-email footer-copyright";
		color: ${(props) => props.theme.textColour};
	}

	.footer-grid > .footer-icons {
		grid-area: footer-icons;
		font-size: 2rem;
		text-align: center;
		padding: 1rem;
	}

	.footer-grid > .footer-email {
		grid-area: footer-email;
		text-align: left;
		padding: 1rem;
	}

	.footer-grid > .footer-copyright {
		grid-area: footer-copyright;
		text-align: right;
		padding: 1rem;
	}

	@media (min-width: ${(props) => props.theme.medium}) {
		.footer-grid {
			grid-template-areas: "footer-icons footer-email footer-copyright";
			align-items: center;
		}

		.footer-grid > .footer-icons {
			text-align: left;
			padding: 0;
		}
		.footer-grid > .footer-email {
			text-align: center;
			padding: 0;
		}
	}

	.footer-grid > .footer-copyright {
		text-align: right;
	}
`;

export default FooterStyles;
