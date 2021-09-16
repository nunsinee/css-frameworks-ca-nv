import React from "react";
import { ListGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { MdMail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

import styled from "styled-components";

const Styles = styled.div`
	.list-group {
		width: 300px;
		color: ${(props) => props.theme.textColour};
	}

	.list-group-item {
		border: none;
		background: transparent;
	}

	li {
		list-style-type: none;
	}
`;

export const AddressListGroups = () => (
	<Styles>
		<ListGroup>
			<ListGroup.Item>
				<Row>
					<Col>
						<MdMail size={28} />
					</Col>
					<Col xs={9}>hello@yay.com</Col>
				</Row>
			</ListGroup.Item>
			<ListGroup.Item>
				<Row>
					<Col>
						<MdPhone size={28} />
					</Col>
					<Col xs={9}>123 456 7890</Col>
				</Row>
			</ListGroup.Item>
			<ListGroup.Item>
				<Row>
					<Col>
						<MdLocationOn size={28} />
					</Col>
					<Col xs={9}>
						<li>123 Some Street</li>
						<li>Somewhere</li>
						<li>Some City</li>
						<li>10000</li>
					</Col>
				</Row>
			</ListGroup.Item>
		</ListGroup>
	</Styles>
);

// const Address = () => {
// 	return (
// 		<ListGroup>
// 			<ListGroup.Item>
// 				<Row>
// 					<Col>
// 						<MdMail />
// 					</Col>
// 					<Col>hello@yay.com</Col>
// 				</Row>
// 			</ListGroup.Item>
// 			<ListGroup.Item>
// 				<Row>
// 					<Col>
// 						<MdPhone />
// 					</Col>
// 					<Col>123 456 7890</Col>
// 				</Row>
// 			</ListGroup.Item>
// 			<ListGroup.Item>
// 				<Row>
// 					<Col>
// 						<MdLocationOn />
// 					</Col>
// 					<Col>
// 						<li>123 Some Street</li>
// 						<li>Somewhere</li>
// 						<li>Some City</li>
// 						<li>10000</li>
// 					</Col>
// 				</Row>
// 			</ListGroup.Item>
// 		</ListGroup>
// 	);
// };

// export default Address;
