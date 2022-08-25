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
			background-color: #f8ed91;
		`}
`;
export default StyledCard;
