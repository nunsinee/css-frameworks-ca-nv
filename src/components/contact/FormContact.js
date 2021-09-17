import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

import FormContainer from "../layout/formContact/FormContainer";
import Button from "../layout/formContact/Button";
import { FormCheckCustom } from "../layout/formContact/CheckboxStyles";
import { InputGroupText } from "./InputGroupText";
import FormLabelStyles from "../typography/FormLabelStyles";

function FormContact() {
	return (
		<FormContainer>
			<Form>
				<Form.Group className="mb-3">
					<FormLabelStyles>Name</FormLabelStyles>
					<Form.Control type="name" />
				</Form.Group>

				<Form.Group className="mb-3">
					<FormLabelStyles>Email address</FormLabelStyles>
					<Form.Control type="email" />
				</Form.Group>

				<Form.Group className="mb-3">
					<FormLabelStyles>Website</FormLabelStyles>
					<InputGroup className="mb-3">
						<span>
							<InputGroupText />
						</span>
						<FormControl id="basic-url" />
					</InputGroup>
				</Form.Group>

				<Form.Group className="mb-3">
					<FormLabelStyles>Message</FormLabelStyles>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>

				<Form.Group className="mb-3">
					<FormCheckCustom />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</FormContainer>
	);
}

export default FormContact;
