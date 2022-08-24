import styled, {css} from 'styled-components';

const StyledFormContainer = styled.section`
	min-height: 100vh;
	${({variant = 'exercise'}) =>
		variant === 'exercise' &&
		css`
			background-color: #acebaa;
		`}
`;
export default StyledFormContainer;
