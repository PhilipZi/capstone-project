import styled, {css} from 'styled-components';

const StyledForm = styled.form`
	${({variant}) =>
		variant === 'time' &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 80px;
			padding-top: 30px;
		`}
	${({variant}) =>
		variant === 'repetitionSets' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 150px;
		`}
`;

export default StyledForm;
