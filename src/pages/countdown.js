import Head from 'next/head';
import {useMemo} from 'react';

import MoveBackButton from '../components/MoveBackButton';
import RepetitionsExercises from '../components/RepetitionsExercises';
import SetPauseCard from '../components/SetPauseCard';
import useStore from '../hooks/useStore';

export default function CountDown() {
	const currentExercise = useStore(state => state.currentExercise);

	const amountSets = currentExercise.sets;

	const sets = useMemo(() => {
		const _sets = [];
		for (let i = 0; i < amountSets; i++) {
			_sets.push(() => (
				<div>
					<RepetitionsExercises />
					{i < amountSets - 1 &&
					(currentExercise.setPause.minutes > 0 ||
						currentExercise.setPause.seconds > 0) ? (
						<SetPauseCard />
					) : (
						''
					)}
				</div>
			));
		}
		return _sets;
	}, [amountSets, currentExercise]);

	return (
		<>
			<Head>
				<title key="title">Count Down</title>
				<meta key="description" name="description" content="count down" />
			</Head>
			<MoveBackButton />

			<div>
				{sets.map((Block, idx) => (
					<Block key={idx} />
				))}
			</div>
		</>
	);
}
