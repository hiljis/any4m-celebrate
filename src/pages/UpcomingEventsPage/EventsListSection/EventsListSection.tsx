import { upcomingEventsData } from '../../../assets/data/upcomingEventsData';
import CardList from '../../../components/ui/CardList/CardList';
import { dateToDDMMMYYYY } from '../../../utils/format';
import EventListItem from '../EventsListItem/EventsListItem';
import './EventsListSection.scss';

const EventsListSection: React.FC = () => {
	return (
		<section className="section__eventList">
			{upcomingEventsData.map((upcomingEvent) => (
				<CardList header={dateToDDMMMYYYY(upcomingEvent.start)}>
					<EventListItem event={upcomingEvent} />
				</CardList>
			))}
		</section>
	);
};

export default EventsListSection;
