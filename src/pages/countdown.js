import Head from 'next/head';
import {useMemo} from 'react';

import ExerciseCard from '../components/ExerciseCard';
import PauseIcon from '../components/Icons/PauseIcon';
import MoveBackButton from '../components/MoveBackButton';
import StyledCards from '../components/StyledCards';
import useStore from '../hooks/useStore';

export default function CountDown() {
	const repetitionCounter = useStore(state => state.repetitionCounter);
	const pauseTimes = useStore(state => state.pauseTimes);

	const repetitions = repetitionCounter.length;
	const lastRepetition = repetitionCounter[repetitions - 1];
	const numElements = lastRepetition.repetitionCounter;

	const pauseTime = pauseTimes.length;
	const lastPause = pauseTimes[pauseTime - 1];

	const exercises = useMemo(() => {
		const _exercises = [];
		for (let i = 0; i < numElements; i++) {
			_exercises.push(() => (
				<div>
					<ExerciseCard />
					{lastPause.minutes > 0 || lastPause.seconds > 0 ? (
						<StyledCards variant="pause">
							<PauseIcon />
							<p>Pause</p>
							{lastPause ? (
								<a key={lastPause.id}>
									{lastPause.minutes.toString().padStart(2, '0')}:
									{lastPause?.seconds.toString().padStart(2, '0')}
								</a>
							) : (
								'00:00'
							)}
						</StyledCards>
					) : (
						''
					)}
				</div>
			));
		}
		return _exercises;
	}, [numElements, lastPause]);

	return (
		<>
			<Head>
				<title key="title">Count Down</title>
				<meta key="description" name="description" content="count down" />
			</Head>
			<MoveBackButton />
			<h1>hallo</h1>
			<div className="App">
				{exercises.map((Block, idx) => (
					<Block key={idx} />
				))}
			</div>
		</>
	);
}
