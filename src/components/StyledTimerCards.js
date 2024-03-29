import styled, {css} from 'styled-components';

const StyledTimerCard = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	min-width: 260px;
	height: 100px;
	padding: 12px 10px;
	gap: 10px;
	box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.35);
	${({variant}) =>
		variant === 'Exercise' &&
		css`
			background: #96e493;
		`}
	${({variant}) =>
		variant === 'Pause' &&
		css`
			background: #f58b8b;
		`}
	${({variant}) =>
		variant === 'Setpause' &&
		css`
			background: #fff078;
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
			${({variant}) =>
				variant === 'Exercise' &&
				css`
					background: #69e465;
				`}
			${({variant}) =>
				variant === 'Setpause' &&
				css`
					background: #ffeb4b;
				`}
				${({variant}) =>
				variant === 'Pause' &&
				css`
					background: #ff6464;
				`}
		`}
`;
export default StyledTimerCard;
