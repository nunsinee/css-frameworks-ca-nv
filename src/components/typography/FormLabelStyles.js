import { FormLabel } from "react-bootstrap";
import styled from "styled-components";

const FormLabelStyles = styled(FormLabel)`
	font-family: ${(props) => props.theme.latoFont};
	color: ${(props) => props.theme.textColour};
	font-size: 20px;
	font-weight: 400;
`;

export default FormLabelStyles;
