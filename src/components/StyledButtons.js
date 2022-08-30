import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	${({variant}) =>
		variant === 'submit' &&
		css`
			position: absolute;
			right: 40px;
			bottom: 70px;
			height: 40px;
			width: 50px;
		`}
	${({variant}) =>
		variant === 'goback' &&
		css`
			position: fixed;
			padding-left: 20px;
		`}
	${({variant}) =>
		variant === 'plus' &&
		css`
			padding: 0;
		`}
`;

export default StyledButton;
