import Head from 'next/head';

import CountDownButton from '../components/CountDownButton';
import ExerciseCard from '../components/ExerciseCard';
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
				<CountDownButton />

				<ExerciseCard />
				<RepetitionCard />
				<PauseCard />
				<SetsCard />
				<SetPauseCard />
			</StyledSetupContainer>
		</>
	);
}
