import styled from "styled-components";

const Button = styled.button`
	width: 100%;
	height: 50px;
	font-size: 1rem;
	color: white;
	background: ${(props) => props.theme.textColour};
	border: none;
	text-transform: uppercase;
	position: relative;
	border-radius: 0.25rem;
`;

export default Button;
