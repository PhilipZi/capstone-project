import Head from 'next/head';

import ExerciseCard from '../components/ExerciseCard';
import BlackArrowDown from '../components/Icons/blackArrowDown';
import PlayIconMain from '../components/Icons/playIconMain';
import PauseCard from '../components/PauseCard';
import RepetitionCard from '../components/RepetitionCard';
import SetPauseCard from '../components/SetPauseCard';
import SetsCard from '../components/SetsCard';
import StyledSetupContainer from '../components/StyledSetupContainer';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Timekeeper</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledSetupContainer>
				<PlayIconMain />
				<p>click these buttons to configurate your setup</p>
				<BlackArrowDown />
				<ExerciseCard />
				<RepetitionCard />
				<PauseCard />
				<SetsCard />
				<SetPauseCard />
			</StyledSetupContainer>
		</>
	);
}
