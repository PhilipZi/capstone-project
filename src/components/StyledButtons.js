import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	${({variant = 'submit'}) =>
		variant === 'submit' &&
		css`
			position: absolute;
			right: 40px;
			bottom: 70px;
		`}
	${({variant = 'goback'}) =>
		variant === 'goback' &&
		css`
			padding-left: 16px;
		`}
`;

export default StyledButton;
