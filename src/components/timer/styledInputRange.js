import styled from 'styled-components';

const StyledInputRange = styled.input`
	transform: rotate(-90deg);
	appearance: none;

	&::-webkit-slider-runnable-track {
		width: 250px;
		height: 5px;
		border-width: thin;
		border-style: solid;
		border-radius: 4px;
		background: #ddd;
	}

	&::-webkit-slider-thumb {
		appearance: none;
		width: 16px;
		height: 16px;
		margin-top: -6px;
		border-style: solid;
		border-radius: 50%;
		border-color: white;
		background: gray;
	}

	outline: none;

	&:focus::-webkit-slider-runnable-track {
		background: #ccc;
	}

	background-color: transparent;
	cursor: pointer;
`;

export default StyledInputRange;
