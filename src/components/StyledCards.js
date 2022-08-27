import styled, {css} from 'styled-components';

const StyledCard = styled.div`
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
			background: rgb(172, 235, 170);
			background: radial-gradient(
				circle,
				rgba(172, 235, 170, 1) 16%,
				rgba(129, 186, 127, 1) 48%,
				rgba(87, 154, 84, 1) 86%
			);
		`}

	${({variant}) =>
		variant === 'repetition' &&
		css`
			background: rgb(158, 219, 238);
			background: radial-gradient(
				circle,
				rgba(158, 219, 238, 1) 16%,
				rgba(132, 183, 199, 1) 51%,
				rgba(95, 140, 154, 1) 86%
			); ;
		`}
		${({variant}) =>
		variant === 'pause' &&
		css`
			background: rgb(246, 135, 135);
			background: radial-gradient(
				circle,
				rgba(246, 135, 135, 1) 16%,
				rgba(222, 114, 114, 1) 50%,
				rgba(214, 72, 72, 1) 86%
			);
		`}
		${({variant}) =>
		variant === 'sets' &&
		css`
			background-color: #cfcfc9;
		`}

		${({variant}) =>
		variant === 'setpause' &&
		css`
			background: rgb(255, 234, 32);
			background: radial-gradient(
				circle,
				rgba(255, 234, 32, 1) 16%,
				rgba(222, 206, 49, 1) 48%,
				rgba(177, 157, 0, 1) 86%
			);
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
export default StyledCard;
