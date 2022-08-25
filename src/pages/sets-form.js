import Head from 'next/head';

import SetsForm from '../components/SetsForm';
import StyledFormContainer from '../components/StyledFormContainer';

export default function SetsFormPage() {
	return (
		<>
			<Head>
				<title key="title">Sets Configurator</title>
				<meta key="description" name="description" content="sets configurator" />
			</Head>
			<StyledFormContainer variant="sets">
				<SetsForm />
			</StyledFormContainer>
		</>
	);
}
