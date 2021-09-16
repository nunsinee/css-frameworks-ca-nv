import styled from "styled-components";

const CardStyles = styled.div`
	.card {
		font-family: ${(props) => props.theme.latoFont};
		border: none;
		border-radius: ${(props) => props.theme.borderRadius};
		box-shadow: ${(props) => props.theme.tabShadow};
		background: white;
	}

	.card-title {
		font-size: 19px;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.card-text {
		font-size: 16px;
		margin-bottom: 1rem;
	}

	.btn {
		width: 100%;
		font-size: 1rem;
		background: ${(props) => props.theme.primaryColour};
		border: none;
		text-transform: uppercase;
		position: relative;
		border-radius: 0.25rem;
	}

	.btn:before {
		content: "";
		border-radius: 0.25rem;
		position: absolute;
		right: 0;
		top: 0;
		width: 30px;
		height: 100%;
		background: ${(props) => props.theme.textColour};
	}
`;

export default CardStyles;
