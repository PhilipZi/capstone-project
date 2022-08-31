import styled, {css} from 'styled-components';

const StyledLi = styled.li`
	display: flex;
	justify-content: space-between;
	max-width: 200px;
	padding: 2px;
	padding-right: 5px;
	padding-left: 5px;
	border-radius: 12px;
	list-style: none;
	${({variant}) =>
		variant === 'exercise' &&
		css`
			background-color: #96e493;
		`}
	${({variant}) =>
		variant === 'repetition' &&
		css`
			background-color: #8fdbf2;
		`}
		${({variant}) =>
		variant === 'pause' &&
		css`
			background-color: #f57171;
		`}
		${({variant}) =>
		variant === 'sets' &&
		css`
			background-color: #cbcdcf;
		`}
		${({variant}) =>
		variant === 'setpause' &&
		css`
			background-color: #fef15f;
		`};
`;

export default StyledLi;
