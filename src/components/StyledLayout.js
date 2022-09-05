import styled, {css} from 'styled-components';

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	min-height: 100vh;
	background-color: #79d6ff;
	${({variant}) =>
		variant === 'saved' &&
		css`
			padding-top: 93px;
			align-items: center;
		`}
	${({variant}) =>
		variant === 'setup' &&
		css`
			padding-top: 93px;
			justify-content: flex-end;
			align-items: center;
		`}
`;
export default StyledLayout;
