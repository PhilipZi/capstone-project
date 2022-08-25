import styled, {css} from 'styled-components';

const StyledForm = styled.form`
	${({variant}) =>
		variant === 'exercise' &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 80px;
		`}
	${({variant}) =>
		variant === 'repetition' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 100px;
		`}
		${({variant}) =>
		variant === 'pause' &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 80px;
		`}
`;

export default StyledForm;
