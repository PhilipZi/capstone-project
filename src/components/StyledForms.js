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
`;

export default StyledForm;
