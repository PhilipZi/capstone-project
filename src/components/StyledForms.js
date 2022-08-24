import styled, {css} from 'styled-components';

const StyledForm = styled.form`
	${({variant = 'exercise'}) =>
		variant === 'exercise' &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 80px;
		`}
	${({variant = 'repetition'}) =>
		variant === 'repetition' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 110px;
		`}
`;

export default StyledForm;
