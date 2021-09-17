import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const CarouselStyles = styled(Carousel)`
	.carousel-indicators button {
		width: 15px;
		height: 15px;
		margin: 0.5rem 0.5rem;
		border-radius: 2px;
		background-color: white;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0);
		border: none;
	}

	@media (min-width: ${(props) => props.theme.medium}) {
		.carousel-indicators button {
			width: 30px;
			height: 30px;
			margin: 2rem 0.5rem;
		}
	}

	.carousel-indicators button.active {
		background-color: ${(props) => props.theme.primaryColour};
	}

	.carousel-control-prev,
	.carousel-control-next {
		display: none;
	}
`;
export default CarouselStyles;
