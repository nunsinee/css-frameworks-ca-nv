import styled from "styled-components";

const CardContainer = styled.div`
	display: grid;
	grid-gap: 2rem;
	height: 100%;
	margin-bottom: 2rem;

	@media (min-width: ${(props) => props.theme.small}) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: ${(props) => props.theme.medium}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${(props) => props.theme.large}) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export default CardContainer;
