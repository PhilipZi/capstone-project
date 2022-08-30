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
			position: absolute;
			left: 10px;
		`}
	${({variant}) =>
		variant === 'plus' &&
		css`
			padding: 0;
		`}
		${({variant = 'play'}) => variant === 'play' && css``}
`;

export default StyledButton;
