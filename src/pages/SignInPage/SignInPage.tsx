import { useState } from 'react';
import Any4mLoader from '../../components/ui/loaders/Any4mLoader/Any4mLoader';
import Page from '../../components/ui/Page/Page';
import SignInForm from './SignInForm/SignInForm';
import './SignInPage.css';

const SignInPage: React.FC = () => {
	return (
		<main className="gateKeeperPage">
			<div className="gateKeeperLoaderContainer">
				<Any4mLoader />
			</div>
			<SignInForm />
		</main>
	);
};

export default SignInPage;
