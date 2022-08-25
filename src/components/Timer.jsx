import styled from 'styled-components';

const StyledH2 = styled.h2`
	font-size: 4rem;
`;

export default function Timer({minutes, seconds}) {
	return (
		<StyledH2>
			{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
		</StyledH2>
	);
}
