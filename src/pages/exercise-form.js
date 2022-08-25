import Head from 'next/head';

import ExerciseForm from '../components/ExerciseForm';
import StyledFormContainer from '../components/StyledFormContainer';

export default function ExerciseFormPage() {
	return (
		<>
			<Head>
				<title key="title">Exercise Configurator</title>
				<meta key="description" name="description" content="time configurator" />
			</Head>
			<StyledFormContainer variant="exercise">
				<ExerciseForm />
			</StyledFormContainer>
		</>
	);
}
