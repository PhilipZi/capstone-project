import styled, {css} from 'styled-components';

const StyledCards = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 260px;
	padding: 3px 10px;
	border: none;
	border-radius: 7px;
	cursor: pointer;
	${({variant = 'exerise'}) =>
		variant === 'exercise' &&
		css`
			background-color: #acebaa;
		`}
`;
export default StyledCards;
