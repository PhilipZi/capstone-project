import Head from 'next/head';

import TimerExercise from '../components/exerciseForm/timerForm';
import Layout from '../components/Layout';

import StyledExercisePage from './styledcomponents/styledExerciseFormPage';

export default function ExercisePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Exercise Configurator</title>
				<meta key="description" name="description" content="time configurator" />
			</Head>
			<StyledExercisePage>
				<TimerExercise />
			</StyledExercisePage>
		</Layout>
	);
}
