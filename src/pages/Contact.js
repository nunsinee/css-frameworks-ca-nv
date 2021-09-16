import React from "react";
import ContainerStyles from "../components/layout/ContainerStyles";
import PageHeading from "../components/typography/PageHeading";
// import { Row, Col } from "react-bootstrap";
import FormContact from "../components/contact/FormContact";
import { AddressListGroups } from "../components/contact/AddressListGroups";

function Contact() {
	return (
		<>
			<ContainerStyles>
				<PageHeading>Submit your details</PageHeading>
				<div className="row">
					<div className="col-md-5 order-md-2">
						<AddressListGroups />
					</div>
					<div className="col-md-7 order-md-1">
						<FormContact />
					</div>
				</div>
			</ContainerStyles>
		</>
	);
}

export default Contact;
