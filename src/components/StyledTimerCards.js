import styled, {css} from 'styled-components';

const StyledTimerCard = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	min-width: 260px;
	height: 54px;
	padding: 12px 10px;
	border: none;
	border-radius: 7px;
	${({running}) =>
		running &&
		css`
			border: 6px solid red;
		`}
	${({variant}) =>
		variant === 'Exercise' &&
		css`
			background: #96e493;
		`}
	${({variant}) =>
		variant === 'Pause' &&
		css`
			background: #f57171;
		`}
	${({variant}) =>
		variant === 'Setpause' &&
		css`
			background: #fef15f;
		`}
	${({finish}) =>
		finish &&
		css`
			transition: opacity 0s ease, max-height 0s 0s ease;
			opacity: 0;
			max-height: 0;
			padding: 0;
		`}
`;
export default StyledTimerCard;
