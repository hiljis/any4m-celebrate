import { Fragment } from 'react';
import './App.css';
import SignInPage from './pages/SignInPage/SignInPage';

function App() {
	return (
		<Fragment>
			<div className={`App`}>
				<SignInPage />
				{/* <Header />
    <Routes>
      <Route path="/" element={<Home welcomeFinished={welcomeComplete} />} />
      <Route path="/me" element={<Me />} />
      <Route path="/art" element={<Art />} />
      <Route path="/work" element={<Work />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <BurgerMenu /> */}
			</div>
			{/* <DisplayModal /> */}
		</Fragment>
	);
}

export default App;
