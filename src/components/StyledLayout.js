import styled, {css} from 'styled-components';

const StyledLayout = styled.div`
	min-height: 100vh;
	background-color: #79d6ff;
	${({variant}) =>
		variant === 'saved' &&
		css`
			padding-top: 80px;
		`}
`;
export default StyledLayout;
