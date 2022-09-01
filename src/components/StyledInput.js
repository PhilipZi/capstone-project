import styled, {css} from 'styled-components';

const StyledInput = styled.input`
	${({variant}) =>
		variant === 'range' &&
		css`
			transform: rotate(-90deg);
			cursor: pointer;
		`}

	${({variant}) =>
		variant === 'counter' &&
		css`
			border: none;
			background-color: transparent;
			font-size: 80px;
			width: 130px;
			text-align: center;
		`}
		${({variant}) =>
		variant === 'savename' &&
		css`
			padding: 4px;
			font-size: 18px;
			border-width: 1px;
			border-color: #cccccc;
			background-color: #ffffff;
			color: #000000;
			border-style: solid;
			border-radius: 12px;
			box-shadow: -1px 1px 8px rgba(66, 66, 66, 0.48);
			text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);
		`}
`;

export default StyledInput;
