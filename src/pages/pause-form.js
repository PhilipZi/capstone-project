import Head from 'next/head';

import PauseForm from '../components/PauseForm';
import StyledFormContainer from '../components/StyledFormContainer';
export default function PauseFormPage() {
	return (
		<>
			<Head>
				<title key="title">Pause Configurator</title>
				<meta key="description" name="description" content="pause configurator" />
			</Head>
			<StyledFormContainer variant="pause">
				<PauseForm />
			</StyledFormContainer>
		</>
	);
}
