import Head from 'next/head';

import Layout from '../components/Layout';
import Timer from '../components/timer/timer1';

export default function ExercisePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Exercise Configurator</title>
				<meta key="description" name="description" content="time configurator" />
			</Head>
			<div>
				<Timer />
			</div>
		</Layout>
	);
}
