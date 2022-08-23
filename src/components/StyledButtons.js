import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	${({variant = 'submit'}) =>
		variant === 'submit' &&
		css`
			position: absolute;
			right: 40px;
			bottom: 70px;
			border: none;
			background-color: transparent;
			cursor: pointer;
		`}

	${({variant = 'goback'}) =>
		variant === 'goback' &&
		css`
			padding-left: 16px;
			border: none;
			background-color: transparent;
			cursor: pointer;
		`}

		${({variant = 'plus'}) =>
		variant === 'plus' &&
		css`
			padding: 0;
			border: none;
			background-color: transparent;
		`}
`;

export default StyledButton;
