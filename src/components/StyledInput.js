import styled, {css} from 'styled-components';

const StyledInput = styled.input`
	${({variant = 'range'}) =>
		variant === 'range' &&
		css`
			transform: rotate(-90deg);
		`}

	${({variant = 'counter'}) =>
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
