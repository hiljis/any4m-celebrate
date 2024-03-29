import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import Header from './pages/Header/Header';
import MembersPage from './pages/MembersPage/MembersPage';
import NewsPage from './pages/NewsPage/NewsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PollPage from './pages/PollPage/PollPage';
import SignInPage from './pages/SignInPage/SignInPage';
import UpcomingEventsPage from './pages/UpcomingEventsPage/UpcomingEventsPage';

function App() {
	const [signedIn, setSignedIn] = useState(true);

	return (
		<Fragment>
			{/* <SignInPage /> */}
			<div className={`App`}>
				<Header />
				<Routes>
					{/* <Route path="/news" element={<NewsPage welcomeFinished={signedIn} />} /> */}
					<Route path="/news" element={<NewsPage />} />
					<Route path="/members" element={<MembersPage />} />
					<Route path="/upcomingevents" element={<UpcomingEventsPage />} />
					<Route path="/community" element={<CommunityPage />} />
					<Route path="/polls" element={<PollPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
			{/* <BurgerMenu /> */}
			{/* <DisplayModal /> */}
		</Fragment>
	);
}

export default App;
