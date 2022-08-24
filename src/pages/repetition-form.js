import Head from 'next/head';

import RepetitionForm from '../components/RepetitionForm';
import StyledFormContainer from '../components/StyledFormContainer';

export default function RepetitionFrompage() {
	return (
		<>
			<Head>
				<title key="title">How Many Configurator</title>
				<meta key="description" name="description" content="repetition configurator" />
			</Head>
			<StyledFormContainer variant="repetition">
				<RepetitionForm />
			</StyledFormContainer>
		</>
	);
}
