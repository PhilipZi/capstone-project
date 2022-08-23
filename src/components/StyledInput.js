import styled, {css} from 'styled-components';

const StyledInput = styled.input`
	${({variant = 'range'}) =>
		variant === 'range' &&
		css`
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
		`}

	${({variant = 'counter'}) =>
		variant === 'counter' &&
		css`
			border: none;
			background-color: transparent;
			font-size: 80px;
			text-align: center;
		`}
`;

export default StyledInput;
