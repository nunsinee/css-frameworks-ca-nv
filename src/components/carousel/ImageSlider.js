import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselStyles from "./CarouselStyles";
import Img1 from "../../assets/carouselImages/carousel-1.jpg";
import Img2 from "../../assets/carouselImages/carousel-2.jpg";
import Img3 from "../../assets/carouselImages/carousel-3.jpg";

function ImageSlider() {
	return (
		<CarouselStyles>
			<Carousel.Item>
				<img className="d-block w-100" src={Img1} alt="old televisions" fluid />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={Img2} alt="The green ray" fluid />
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Img3}
					alt="A broken screen television"
					fluid
				/>
			</Carousel.Item>
		</CarouselStyles>
	);
}
export default ImageSlider;
