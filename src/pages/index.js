import Head from 'next/head';

import CountDownButton from '../components/CountDownButton';
import ExerciseCard from '../components/ExerciseCard';
import PauseCard from '../components/PauseCard';
import RepetitionCard from '../components/RepetitionCard';
import SavedExerciseButton from '../components/SavedExerciseButton';
import SetPauseCard from '../components/SetPauseCard';
import SetsCard from '../components/SetsCard';
import {
	StyledCurvedAdaptation,
	StyledBoxCountdownButton,
	StyledIndicator,
} from '../components/StyledCurvedAdaptation';
import StyledLayout from '../components/StyledLayout';
import StyledNameApp from '../components/StyledNameApp';
import StyledSetupContainer from '../components/StyledSetupContainer';

export default function HomePage() {
	return (
		<StyledLayout variant="setup">
			<Head>
				<title key="title">TIM-O</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledNameApp>TIM-O</StyledNameApp>
			<SavedExerciseButton />
			<StyledSetupContainer>
				<StyledCurvedAdaptation>
					<StyledIndicator variant="whiteline" />
					<StyledBoxCountdownButton>
						<StyledIndicator variant="before" />
						<CountDownButton />
						<StyledIndicator variant="after" />
					</StyledBoxCountdownButton>
				</StyledCurvedAdaptation>
				<ExerciseCard />
				<RepetitionCard />
				<PauseCard />
				<SetsCard />
				<SetPauseCard />
			</StyledSetupContainer>
		</StyledLayout>
	);
}
