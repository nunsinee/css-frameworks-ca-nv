import { InputGroup } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled(InputGroup)`
	.input-group-text {
		background: #c7c7c7;
		color: White;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

export const InputGroupText = () => (
	<Styles>
		<InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
	</Styles>
);
