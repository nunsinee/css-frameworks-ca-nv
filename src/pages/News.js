import React from "react";
import ContainerStyles from "../components/layout/ContainerStyles";
import Cards from "../components/news/Cards";
import PaginationNumber from "../components/pagination/PaginationNumber";
import PageHeading from "../components/typography/PageHeading";

function News() {
	return (
		<>
			<ContainerStyles>
				<PageHeading>News</PageHeading>
				<PaginationNumber />
				<Cards />
				<PaginationNumber />
			</ContainerStyles>
		</>
	);
}

export default News;
