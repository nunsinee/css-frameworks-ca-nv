import React from "react";
import { Pagination } from "react-bootstrap";
import styled from "styled-components";

const StylesPage = styled(Pagination)`
	.visually-hidden {
		display: none;
	}

	.page-link {
		color: ${(props) => props.theme.primaryColour};
		margin-bottom: 2rem;
	}

	.page-item.active .page-link {
		z-index: 3;
		color: white;
		background-color: ${(props) => props.theme.primaryColour};
		border-color: ${(props) => props.theme.primaryColour};
	}
`;

const PaginationNumber = () => {
	let active = 1;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		);
	}

	return (
		<StylesPage>
			<Pagination>{items}</Pagination>
			<br />
		</StylesPage>
	);
};

export default PaginationNumber;
