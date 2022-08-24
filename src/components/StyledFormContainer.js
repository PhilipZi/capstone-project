import styled, {css} from 'styled-components';

const StyledFormContainer = styled.section`
	min-height: 100vh;
	${({variant = 'exercise'}) =>
		variant === 'exercise' &&
		css`
			background-color: #acebaa;
		`}
	${({variant = 'repetition'}) =>
		variant === 'repetition' &&
		css`
			background-color: #9edbee;
		`}
	${({variant = 'pause'}) =>
		variant === 'pause' &&
		css`
			background-color: #f68787;
		`}
		${({variant = 'sets'}) =>
		variant === 'sets' &&
		css`
			background-color: #cfcfc9;
		`}
`;
export default StyledFormContainer;
