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
			min-height: 100vh;
			position: absolute;
			top: 45%;
			left: 50%;
			transform: translate(-50%, -50%);
		`}
		${({variant = 'pause'}) =>
		variant === 'pause' &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 80px;
		`}
		${({variant = 'setpause'}) =>
		variant === 'setpause' &&
		css`
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 80px;
		`}
`;

export default StyledForm;
