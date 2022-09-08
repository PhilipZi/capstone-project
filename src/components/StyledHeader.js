import styled, {css} from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	${({variant}) =>
		variant === 'counter' &&
		css`
			position: fixed;
			z-index: 2;
			top: 0;
			left: 0;
			width: 100%;
			border-bottom-left-radius: 14px;
			border-bottom-right-radius: 14px;
			box-shadow: 0px 6px 10px -4px rgba(0, 0, 0, 0.49);

			background: white;
		`}
`;
const StyledH1 = styled.h1`
	display: flex;
	align-items: center;
	font-weight: lighter;
	gap: 5px;
`;

const StyledH2 = styled.h2`
	display: flex;
	align-items: center;
	margin: 5px 0 10px 10px;
	color: black;
	font-weight: lighter;
	${({variant}) =>
		variant === 'saved' &&
		css`
			margin: 10px 0 0 10px;
		`}
`;

export {StyledHeader, StyledH1, StyledH2};
