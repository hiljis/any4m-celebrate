import CardListItem from '../../../../components/ui/CardList/CardListItem/CardListItem';
import Icon from '../../../../components/ui/Icon/Icon';
import { dateToAgoStr, dateToUntilStr } from '../../../../utils/convert';
import { dateToDDMMMYYYY } from '../../../../utils/format';
import { IUpcomingEvent } from '../../../../utils/types';
import './UcomingEventsListItem.scss';

type Props = {
	upcomingEvent: IUpcomingEvent;
};

const UpcomingEventListItem: React.FC<Props> = ({ upcomingEvent }) => {
	const untilStart = dateToUntilStr(upcomingEvent.start);

	return (
		<CardListItem>
			<div className="upcomingEventListItemContent">
				<img src={upcomingEvent.imgUrl} alt="News Item" className="upcomingEventListItemContent__img" />
				<div className="upcomingEventListItemContent__grid">
					<h4 className="upcomingEventListItemContent__title">{upcomingEvent.title}</h4>
					<div className="upcomingEventListItemContent__location">
						<Icon icon="location" color="light" size="xs" />
						<p className="upcomingEventListItemContent__location--text">{upcomingEvent.location}</p>
					</div>
					<div className="upcomingEventListItemContent__untilStart">
						<Icon icon="time" color="light" size="xs" />
						<p className="upcomingEventListItemContent__untilStart--text">{untilStart}</p>
					</div>
				</div>
			</div>
		</CardListItem>
	);
};

export default UpcomingEventListItem;
