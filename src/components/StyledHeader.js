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

			background: white;
		`}
`;
const StyledH1 = styled.h1`
	display: flex;
	align-items: center;
	font-weight: lighter;
	gap: 5px;
`;

export {StyledHeader, StyledH1};
