import Head from 'next/head';

import BlackArrowDown from '../../public/Icons/blackArrowDown';
import ExerciseButton from '../components/exerciseButton/exerciseButton';
import Layout from '../components/Layout';

import StyledCards from './styledExerciseCard';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Timekeeper</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledCards>
				<p>click this button to configurate your time</p>
				<BlackArrowDown></BlackArrowDown>
				<div>
					<ExerciseButton />
				</div>
			</StyledCards>
		</Layout>
	);
}
