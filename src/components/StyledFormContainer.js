import styled, {css} from 'styled-components';

const StyledFormContainer = styled.section`
	min-height: 100vh;
	${({variant}) =>
		variant === 'exercise' &&
		css`
			background-color: #acebaa;
		`}
	${({variant}) =>
		variant === 'repetition' &&
		css`
			background-color: #9edbee;
		`}
	${({variant}) =>
		variant === 'pause' &&
		css`
			background-color: #f68787;
		`}
		${({variant}) =>
		variant === 'sets' &&
		css`
			background-color: #cfcfc9;
		`}
		${({variant}) =>
		variant === 'setpause' &&
		css`
			background-color: #fff078;
		`}
`;
export default StyledFormContainer;
