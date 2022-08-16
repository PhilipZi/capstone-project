import Head from 'next/head';

import Layout from '../components/Layout';
import Timer from '../components/timer/timer';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<div>
				<Timer />
			</div>
		</Layout>
	);
}
