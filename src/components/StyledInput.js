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
			padding: 3px;
			min-width: 250px;
			font-size: 18px;
			border-width: 1px;
			border-radius: 12px;
			box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.49);
		`}
`;

export default StyledInput;
