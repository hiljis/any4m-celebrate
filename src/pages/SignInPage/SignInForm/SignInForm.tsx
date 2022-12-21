import './SignInForm.scss';

const SignInForm: React.FC = () => {
	return (
		<div className="signInFormContainer">
			<form action="submit" className="signInForm">
				<input type="email" placeholder="email" className="signInEmail" />
				<input type="password" placeholder="password" className="signInPassword" />
				<input
					type="submit"
					value="Sign in"
					// className="bg-white rounded-full border border-solid shadow-inner border-any4m-blue-20 shadow-insideBlue fontSIze-md w-24 h-24"
					className="signInBtn"
				/>
			</form>
		</div>
	);
};

export default SignInForm;
