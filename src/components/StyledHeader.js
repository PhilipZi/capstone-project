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
			background: rgb(26, 106, 164);
			background: linear-gradient(0deg, rgba(26, 106, 164, 1) 16%, rgba(0, 212, 255, 1) 100%);
		`}
`;
const StyledH1 = styled.h1`
	display: flex;
	align-items: center;
	font-weight: lighter;
	gap: 5px;
`;

export {StyledHeader, StyledH1};
