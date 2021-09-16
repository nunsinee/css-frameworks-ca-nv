import styled from "styled-components";

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 550px;
	align-content: space-around;
	align-self: center;
	padding: 2rem;
	border-radius: 10px;
	margin-bottom: 1rem;
	color: ${(props) => props.theme.textColour};
	background-color: ${(props) => props.theme.backgroundColour};
	box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.04);
`;

export default FormContainer;
