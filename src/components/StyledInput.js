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
`;

export default StyledInput;
