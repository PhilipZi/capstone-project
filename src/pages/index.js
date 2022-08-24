import Head from 'next/head';

import ExerciseCard from '../components/ExerciseCard';
import BlackArrowDown from '../components/Icons/BlackArrowDown';
import StyledSetupContainer from '../components/StyledSetupContainer';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Timekeeper</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledSetupContainer>
				<p>click these buttons to configurate your setup</p>
				<BlackArrowDown />
				<ExerciseCard />
			</StyledSetupContainer>
		</>
	);
}
