import Head from 'next/head';

import Layout from '../components/Layout';
import RepetitionForm from '../components/repetitionForm/repetitionForm';

import StyledRepetitionFormpage from './styledcomponents/styledRepetitionFormpage';

export default function RepetitionFrompage() {
	return (
		<Layout>
			<Head>
				<title key="title">How Many Configurator</title>
				<meta key="description" name="description" content="repetition configurator" />
			</Head>
			<StyledRepetitionFormpage>
				<RepetitionForm />
			</StyledRepetitionFormpage>
		</Layout>
	);
}
