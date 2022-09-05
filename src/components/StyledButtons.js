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
			right: 8px;
			bottom: 0;
			padding: 0;
		`}
		${({variant}) =>
		variant === 'saved' &&
		css`
			position: absolute;
			top: 40px;
			left: 0;
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
			padding: 10px 15px 10px 20px;
			background-color: white;
			box-shadow: 0px 6px 10px -4px rgba(0, 0, 0, 0.49);
		`}
		${({variant}) =>
		variant === 'countdownButton' &&
		css`
			padding-top: 10px;
		`}
		${({variant}) =>
		variant === 'modal' &&
		css`
			border-radius: 8px;
		`}
`;

export default StyledButton;
