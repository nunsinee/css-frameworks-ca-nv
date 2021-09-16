import React from "react";
import { Row, Col } from "react-bootstrap";
import ImageSlider from "../components/carousel/ImageSlider";
import ContainerStyles from "../components/layout/ContainerStyles";
import PageHeading from "../components/typography/PageHeading";
import ContentTabs from "../components/tab/ContentTabs";
import Paragraph from "../components/typography/Paragraph";
import ContentAccordion from "../components/accordion/ContentAccordion";

function Home() {
	return (
		<>
			<ImageSlider />
			<ContainerStyles>
				<Row className="homeContent">
					<Col>
						<PageHeading>We do YAY things</PageHeading>
						<Paragraph>
							Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper
							mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris
							eleifend finibus et ac orci. Aliquam metus massa, aliquam quis
							arcu sit amet, consectetur faucibus urna. Suspendisse massa diam,
							efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
							sollicitudin in luctus a, varius eget massa.
						</Paragraph>
					</Col>
				</Row>

				<Row>
					<Col>
						<ContentAccordion />
						<div className="d-none d-md-block">
							<ContentTabs />
						</div>
					</Col>
				</Row>
			</ContainerStyles>
		</>
	);
}

export default Home;
