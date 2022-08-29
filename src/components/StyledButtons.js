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
			height: 40px;
			width: 50px;
		`}
	${({variant = 'goback'}) =>
		variant === 'goback' &&
		css`
			position: absolute;
			left: 10px;
		`}
	${({variant = 'plus'}) =>
		variant === 'plus' &&
		css`
			padding: 0;
		`}
		${({variant = 'play'}) =>
		variant === 'play' &&
		css`
			position: absolute;
			right: 10%;
			top: 50%;
			transform: translate(-50%, -50%);
		`}
`;

export default StyledButton;
