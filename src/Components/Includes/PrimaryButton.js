import styled from "styled-components";

export const PrimaryButton = styled.button`
	border: 1px solid transparent;
	background-color: #7f6d2f;
	color: white;
	padding: 0.5rem 1.2rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 14px;
	cursor: pointer;
	transition: 0.2s all ease-in-out;
	border-radius: 30px;

	&:hover {
		background-color: #20534a;
		outline: 1px solid #20534a;
	}
`;

export default PrimaryButton;
