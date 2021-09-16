import styled from "styled-components";

const Paragraph = styled.p`
	margin: 0;
	font-size: 16px;
	color: ${(props) => props.theme.textColour};
`;

export const AccordionParagraph = styled(Paragraph)`
	margin: 0 auto;
	padding: 1rem 0;
`;

export default Paragraph;
