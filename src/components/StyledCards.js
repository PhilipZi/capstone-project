import styled, {css} from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	min-width: 260px;
	height: 54px;
	padding: 12px 10px;
	border: none;
	border-radius: 16px;
	box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.49);
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
			background: #fff078;
		`}
`;
export default StyledCard;
