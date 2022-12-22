import PageHeader from '../../components/PageHeader/PageHeader';
import UpcomingEventsListSection from './UpcomingEventsListSection/UpcomingEventsListSection';
import './UpcomingEventsPage.scss';

const UpcomingEventsPage: React.FC = () => {
	return (
		<main className="upcomingEventsPage">
			<PageHeader>Upcoming Events</PageHeader>
			<UpcomingEventsListSection />
		</main>
	);
};

export default UpcomingEventsPage;
