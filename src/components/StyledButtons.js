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
	${({variant}) =>
		variant === 'delete' &&
		css`
			position: absolute;
			right: 17px;
			bottom: 2px;
			padding: 0;
		`}
		${({variant}) =>
		variant === 'saved' &&
		css`
			position: absolute;
			top: 40px;
			left: 30px;
			padding: 0;
			background-color: transparent;
		`}
		${({variant}) =>
		variant === 'start' &&
		css`
			padding-top: 10px;
		`}
`;

export default StyledButton;
