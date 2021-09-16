import React from "react";
import CardContainer from "../layout/CardContainer";
import News1 from "../../assets/newsImages/news-1.jpg";
import News2 from "../../assets/newsImages/news-2.jpg";
import News3 from "../../assets/newsImages/news-3.jpg";
import News4 from "../../assets/newsImages/news-4.jpg";
import News5 from "../../assets/newsImages/news-5.jpg";
import News6 from "../../assets/newsImages/news-6.jpg";
import News7 from "../../assets/newsImages/news-7.jpg";
import News8 from "../../assets/newsImages/news-8.jpg";
import CardStyles from "./CardStyles";

const Cards = () => {
	return (
		<CardContainer>
			<CardStyles>
				<div class="card">
					<img src={News1} class="card-img-top" alt="news1" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>

			<CardStyles>
				<div class="card">
					<img src={News2} class="card-img-top" alt="news2" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>

			<CardStyles>
				<div class="card">
					<img src={News3} class="card-img-top" alt="news3" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>

			<CardStyles>
				<div class="card">
					<img src={News4} class="card-img-top" alt="news4" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>

			<CardStyles>
				<div class="card">
					<img src={News5} class="card-img-top" alt="news5" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>

			<CardStyles>
				<div class="card">
					<img src={News6} class="card-img-top" alt="news6" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>

			<CardStyles>
				<div class="card">
					<img src={News7} class="card-img-top" alt="news7" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>

			<CardStyles>
				<div class="card">
					<img src={News8} class="card-img-top" alt="news8" />
					<div class="card-body">
						<h5 class="card-title">Nunc porttitor vel</h5>
						<p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
						<a href="#" class="btn btn-primary">
							More
						</a>
					</div>
				</div>
			</CardStyles>
		</CardContainer>
	);
};

export default Cards;
