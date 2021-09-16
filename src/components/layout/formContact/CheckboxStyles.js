import React from "react";
import styled from "styled-components";

const Styles = styled.div`
	.custom-checkbox {
		position: relative;
	}
	.custom-checkbox input {
		visibility: hidden;
		margin-right: 8px;
	}
	.custom-label:before,
	.custom-label:after {
		width: 24px;
		height: 24px;
		content: "";
		border: 1px solid;
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0px;
		background: ${(props) => props.theme.primaryColour};
		border: solid 1px ${(props) => props.theme.primaryColour};
		transition: background-color 0.15s ease-in-out,
			border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
		border-radius: 4px;
	}
	.custom-checkbox input:checked + .custom-label:before {
		border-color: ${(props) => props.theme.primaryColour};
		background-color: ${(props) => props.theme.primaryColour};
	}
	.custom-checkbox input:checked + .custom-label:after {
		width: 6px;
		border: 2px solid #ffffff;
		height: 12px;
		border-top: none;
		border-left: none;
		transform: rotate(40deg);
		left: 8px;
		top: 4px;
	}

	span {
		padding-left: 0.5rem;
	}
`;

export const FormCheckCustom = () => (
	<Styles>
		<div className="FormCheckBox">
			<label className="custom-checkbox">
				<input type="checkbox" name="checkbox-name" />
				<span className="custom-label">
					Allow us to sell your personal details to whomever we want
				</span>
			</label>
		</div>
	</Styles>
);
