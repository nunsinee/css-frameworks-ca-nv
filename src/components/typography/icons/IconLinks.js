import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
	width: 100%;
	max-width: 200px;
	font-size: 1rem;
	color: ${(props) => props.theme.secondaryColour};
	display: flex;
	padding-top: 1rem;
	margin-bottom: 2rem;
	justify-content: space-between;

	.col {
		padding: 0.5rem 1rem;
	}
`;

export const IconLinks = () => (
	<Styles>
		<Row>
			<Col>SHARE</Col>
			<Col>
				<FaFacebookF size={28} />
			</Col>
			<Col>
				<FaTwitter size={28} />
			</Col>
		</Row>
	</Styles>
);
