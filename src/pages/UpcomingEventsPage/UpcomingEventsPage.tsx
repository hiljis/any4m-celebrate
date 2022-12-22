import PageHeader from '../../components/PageHeader/PageHeader';
import EventsListSection from './EventsListSection/EventsListSection';
import './UpcomingEventsPage.scss';

const UpcomingEventsPage: React.FC = () => {
	return (
		<main className="upcomingEventsPage">
			<PageHeader>Upcoming Events</PageHeader>
			<EventsListSection />
		</main>
	);
};

export default UpcomingEventsPage;
