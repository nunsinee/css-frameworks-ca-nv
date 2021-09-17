import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionStyles from "./AccordionStyles";
import ImgTab1 from "../../assets/tabImages/tab-1.jpg";
import ImgTab2 from "../../assets/tabImages/tab-2.jpg";
import ImgTab3 from "../../assets/tabImages/tab-3.jpg";
import { Paragraph, AccordionParagraph } from "../typography/Paragraph";
import { IconLinks } from "../typography/icons/IconLinks";

function ContentAccordion() {
	return (
		<AccordionStyles>
			<Accordion defaultActiveKey="0" flush className="d-md-none">
				<Accordion.Item eventKey="0">
					<Accordion.Header class="buttonActive">First</Accordion.Header>
					<Accordion.Body>
						<div className="accordion-container">
							<div className="tabContent">
								<div className="tabDetails">
									<AccordionParagraph>
										ipsum dolor sit, amet consectetur adipisicing elit. Libero
										possimus sit, vel qui et a minus nemo totam ullam dolores!
										ipsum dolor sit, amet consectetur adipisicing elit. Libero
										possimus sit, vel qui et a minus nemo totam ullam dolores!
									</AccordionParagraph>
								</div>
								<div className="tabImage">
									<img
										className="d-block w-100 img-fluid"
										src={ImgTab1}
										alt="old televisions"
									/>
								</div>
								<div className="tabIcons">
									<IconLinks />
								</div>
							</div>
						</div>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Second</Accordion.Header>
					<Accordion.Body>
						<div className="accordion-container">
							<div className="tabContent">
								<div className="tabDetails">
									<AccordionParagraph>
										ipsum dolor sit, amet consectetur adipisicing elit. Libero
										possimus sit, vel qui et a minus nemo totam ullam dolores!
										ipsum dolor sit, amet consectetur adipisicing elit. Libero
										possimus sit, vel qui et a minus nemo totam ullam dolores!
									</AccordionParagraph>
								</div>
								<div className="tabImage">
									<img
										className="d-block w-100 img-fluid"
										src={ImgTab2}
										alt="old televisions"
									/>
								</div>
								<div className="tabIcons">
									<IconLinks />
								</div>
							</div>
						</div>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>Third</Accordion.Header>
					<Accordion.Body>
						<div className="accordion-container">
							<div className="tabContent">
								<div className="tabDetails">
									<AccordionParagraph>
										ipsum dolor sit, amet consectetur adipisicing elit. Libero
										possimus sit, vel qui et a minus nemo totam ullam dolores!
										ipsum dolor sit, amet consectetur adipisicing elit. Libero
										possimus sit, vel qui et a minus nemo totam ullam dolores!
									</AccordionParagraph>
								</div>
								<div className="tabImage">
									<img
										className="d-block w-100 img-fluid"
										src={ImgTab3}
										alt="old televisions"
									/>
								</div>
								<div className="tabIcons">
									<IconLinks />
								</div>
							</div>
						</div>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</AccordionStyles>
	);
}

export default ContentAccordion;
