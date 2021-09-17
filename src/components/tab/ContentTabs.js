import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import TabStyles from "./TabStyles";
import ImgTab1 from "../../assets/tabImages/tab-1.jpg";
import ImgTab2 from "../../assets/tabImages/tab-2.jpg";
import ImgTab3 from "../../assets/tabImages/tab-3.jpg";
import Paragraph from "../typography/Paragraph";
import { IconLinks } from "../typography/icons/IconLinks";

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
								className="d-block w-100"
								src={ImgTab1}
								alt="old televisions"
							/>
						</div>
						<div className="tabIcons">
							<IconLinks />
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
								className="d-block w-100"
								src={ImgTab2}
								alt="old televisions"
							/>
						</div>
						<div className="tabIcons">
							<IconLinks />
						</div>
					</div>
				</Tab>

				<Tab eventKey="three" title="Third">
					<div className="tabContent">
						<div className="tabDetails">
							<Paragraph>
								Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
								venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
								ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
								Sed condimentum mattis rhoncus.
							</Paragraph>
						</div>
						<div className="tabImage">
							<img
								className="d-block w-100"
								src={ImgTab3}
								alt="old televisions"
							/>
						</div>
						<div className="tabIcons">
							<IconLinks />
						</div>
					</div>
				</Tab>
			</Tabs>
		</TabStyles>
	);
}

export default ContentTabs;
