import styled from "styled-components";

const PageHeading = styled.h1`
	font-family: ${(props) => props.theme.playfairFont};
	color: ${(props) => props.theme.primaryColour};
	font-size: 34px;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

export default PageHeading;
