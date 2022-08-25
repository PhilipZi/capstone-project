import Head from 'next/head';

import SetPauseForm from '../components/SetPauseForm';
import StyledFormContainer from '../components/StyledFormContainer';
export default function SetPausePage() {
	return (
		<>
			<Head>
				<title key="title">Set Pause Configurator</title>
				<meta key="description" name="description" content="set pause configurator" />
			</Head>
			<StyledFormContainer variant="setpause">
				<SetPauseForm />
			</StyledFormContainer>
		</>
	);
}
