import styled, {css} from 'styled-components';

const StyledTimerCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 260px;
	height: 54px;
	padding: 12px 10px;
	border: none;
	border-radius: 7px;
	cursor: pointer;
	${({variant}) =>
		variant === 'exercise' &&
		css`
			background: #96e493;
		`}

	${({variant}) =>
		variant === 'repetition' &&
		css`
			background: #8fdbf2;
		`}
		${({variant}) =>
		variant === 'pause' &&
		css`
			background: #f57171;
		`}
		${({variant}) =>
		variant === 'sets' &&
		css`
			background: #cbcdcf;
		`}

		${({variant}) =>
		variant === 'setpause' &&
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
		${({running}) =>
		running &&
		css`
			border: solid #5b0990;
		`}
`;
export default StyledTimerCard;
