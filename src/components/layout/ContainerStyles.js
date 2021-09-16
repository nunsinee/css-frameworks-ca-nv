import { Container } from "react-bootstrap";
import styled from "styled-components";

const ContainerStyles = styled(Container)`
	.container {
		max-width: 1280px;
		margin: 0 auto;
		width: 90%;
	}
`;

export default ContainerStyles;

export const ContainerNav = styled(ContainerStyles)`
	width: 100%;
`;
