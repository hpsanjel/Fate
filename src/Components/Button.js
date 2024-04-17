import styled from "styled-components";

const StyledButton = styled.button`
	border: 1px solid transparent;
	background-color: teal;
	color: white;
	padding: 0.7rem 1.5rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	transition: 0.2s all ease-in-out;
	&:hover {
		background-color: #01342c;
		outline: 1px solid teal;
	}
`;

export const OutlinedButton = styled.button`
	border: 1px solid teal;
	background-color: white;
	color: teal;
	padding: 0.7rem 1.5rem;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	transition: 0.2s all ease-in-out;
	&:hover {
		background-color: teal;
		outline: none;
		color: white;
	}
`;

export default StyledButton;
