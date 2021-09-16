import React from "react";
import { Tabs, Tab, Col } from "react-bootstrap";
import TabStyles from "./TabStyles";
import ImgTab1 from "../../assets/tabImages/tab-1.jpg";
import ImgTab2 from "../../assets/tabImages/tab-2.jpg";
import ImgTab3 from "../../assets/tabImages/tab-3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Share } from "../typography/Share";
import Paragraph from "../typography/Paragraph";
import IconContainer from "../layout/IconContainer";

function ContentTabs() {
	return (
		<TabStyles>
			<Tabs defaultActiveKey="one" className="mb-3">
				<Tab eventKey="one" title="First">
					<div className="tabContent">
						<div className="tabDetails">
							<Paragraph>
								ipsum dolor sit, amet consectetur adipisicing elit. Libero
								possimus sit, vel qui et a minus nemo totam ullam dolores! ipsum
								dolor sit, amet consectetur adipisicing elit. Libero possimus
								sit, vel qui et a minus nemo totam ullam dolores!
							</Paragraph>
						</div>
						<div className="tabImage">
							<img
								className="d-block w-75"
								src={ImgTab1}
								alt="old televisions"
							/>
						</div>
						<div className="tabIcons">
							<IconContainer>
								<Col>
									<Share size={28} />
								</Col>
								<Col>
									<FaFacebookF size={28} />
								</Col>
								<Col>
									<FaTwitter size={28} />
								</Col>
							</IconContainer>
						</div>
					</div>
				</Tab>

				<Tab eventKey="two" title="Second">
					<div className="tabContent">
						<div className="tabDetails">
							<Paragraph>
								ipsum dolor sit, amet consectetur adipisicing elit. Libero
								possimus sit, vel qui et a minus nemo totam ullam dolores! ipsum
								dolor sit, amet consectetur adipisicing elit. Libero possimus
								sit, vel qui et a minus nemo totam ullam dolores!
							</Paragraph>
						</div>
						<div className="tabImage">
							<img
								className="d-block w-75"
								src={ImgTab2}
								alt="old televisions"
							/>
						</div>
						<div className="tabIcons">
							<IconContainer>
								<Col>
									<Share size={28} />
								</Col>
								<Col>
									<FaFacebookF size={28} />
								</Col>
								<Col>
									<FaTwitter size={28} />
								</Col>
							</IconContainer>
						</div>
					</div>
				</Tab>

				<Tab eventKey="three" title="Third">
					<div className="tabContent">
						<div className="tabDetails">
							<Paragraph>
								ipsum dolor sit, amet consectetur adipisicing elit. Libero
								possimus sit, vel qui et a minus nemo totam ullam dolores! ipsum
								dolor sit, amet consectetur adipisicing elit. Libero possimus
								sit, vel qui et a minus nemo totam ullam dolores!
							</Paragraph>
						</div>
						<div className="tabImage">
							<img
								className="d-block w-75"
								src={ImgTab3}
								alt="old televisions"
							/>
						</div>
						<div className="tabIcons">
							<IconContainer>
								<Col>
									<Share size={28} />
								</Col>
								<Col>
									<FaFacebookF size={28} />
								</Col>
								<Col>
									<FaTwitter size={28} />
								</Col>
							</IconContainer>
						</div>
					</div>
				</Tab>
			</Tabs>
		</TabStyles>
	);
}

export default ContentTabs;
