import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

import FormContainer from "../layout/formContact/FormContainer";
import Button from "../layout/formContact/Button";
import { FormCheckCustom } from "../layout/formContact/CheckboxStyles";

function FormContact() {
	return (
		<FormContainer>
			<Form>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Name</Form.Label>
					<Form.Control type="name" placeholder="Name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label htmlFor="basic-url">Website</Form.Label>
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon3">https://</InputGroup.Text>
						<FormControl id="basic-url" aria-describedby="basic-addon3" />
					</InputGroup>
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>

				<Form.Group className="mb-3">
					{/* Custom FormCheck */}
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
