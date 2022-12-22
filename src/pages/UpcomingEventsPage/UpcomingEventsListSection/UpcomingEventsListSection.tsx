import { upcomingEventsData } from '../../../assets/data/upcomingEventsData';
import CardList from '../../../components/ui/CardList/CardList';
import { dateToDDMMMYYYY } from '../../../utils/format';
import UpcomingEventListItem from './UcomingEventsListItem/UcomingEventsListItem';
import './UpcomingEventsListSection.scss';

const UpcomingEventsListSection: React.FC = () => {
	return (
		<section className="section__upcomingEventList">
			{upcomingEventsData.map((upcomingEvent) => (
				<CardList header={dateToDDMMMYYYY(upcomingEvent.start)}>
					<UpcomingEventListItem upcomingEvent={upcomingEvent} />
				</CardList>
			))}
		</section>
	);
};

export default UpcomingEventsListSection;
