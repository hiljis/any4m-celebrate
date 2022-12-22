import CardListItem from '../../../components/ui/CardList/CardListItem/CardListItem';
import Icon from '../../../components/ui/Icon/Icon';
import { dateToAgoStr, dateToUntilStr } from '../../../utils/convert';
import { dateToDDMMMYYYY } from '../../../utils/format';
import { IEvent } from '../../../utils/types';
import './EventsListItem.scss';

type Props = {
	event: IEvent;
};

const EventListItem: React.FC<Props> = ({ event }) => {
	const untilStart = dateToUntilStr(event.start);

	return (
		<CardListItem>
			<div className="eventListItemContent">
				<img src={event.imgUrl} alt="News Item" className="eventListItemContent__img" />
				<div className="eventListItemContent__grid">
					<h4 className="eventListItemContent__title">{event.title}</h4>
					<div className="eventListItemContent__location">
						<Icon icon="location" color="light" size="xs" />
						<p className="eventListItemContent__location--text">{event.location}</p>
					</div>
					<div className="eventListItemContent__untilStart">
						<Icon icon="time" color="light" size="xs" />
						<p className="eventListItemContent__untilStart--text">{untilStart}</p>
					</div>
				</div>
			</div>
		</CardListItem>
	);
};

export default EventListItem;
