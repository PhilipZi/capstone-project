import Head from 'next/head';

import CountDownButton from '../components/CountDownButton';
import ExerciseCard from '../components/ExerciseCard';
import PauseCard from '../components/PauseCard';
import RepetitionCard from '../components/RepetitionCard';
import SavedExerciseButton from '../components/SavedExerciseButton';
import SetPauseCard from '../components/SetPauseCard';
import SetsCard from '../components/SetsCard';
import {StyledDivBoxMiddle, StyledIndicator} from '../components/StyledDivBoxMiddle';
import StyledLayout from '../components/StyledLayout';
import StyledSetupContainer from '../components/StyledSetupContainer';

export default function HomePage() {
	return (
		<StyledLayout variant="setup">
			<Head>
				<title key="title">Timekeeper</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<SavedExerciseButton />
			<StyledSetupContainer>
				<div
					style={{
						overflow: 'hidden',
						width: '100vw',
						height: '100px',
						position: 'relative',
						background: '#79d6ff',
					}}
				>
					<StyledIndicator variant="whiteline" />
					<StyledDivBoxMiddle>
						<StyledIndicator variant="before" />
						<CountDownButton />
						<StyledIndicator variant="after" />
					</StyledDivBoxMiddle>
				</div>
				<ExerciseCard />
				<RepetitionCard />
				<PauseCard />
				<SetsCard />
				<SetPauseCard />
			</StyledSetupContainer>
		</StyledLayout>
	);
}
