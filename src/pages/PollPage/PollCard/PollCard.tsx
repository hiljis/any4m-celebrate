import Icon from '../../../components/ui/Icon/Icon';
import { IPoll } from '../../../utils/types';
import './PollCard.scss';

type Props = {
	poll: IPoll;
};

const PollCard: React.FC<Props> = ({ poll }) => {
	const votesAlt1 = poll.votesAlt1.length;
	const votesAlt2 = poll.votesAlt2.length;
	const votesAlt3 = poll.votesAlt3.length;
	const totalVotes = votesAlt1 + votesAlt2 + votesAlt3;

	let dominant: number[] = [];
	dominant = votesAlt1 >= votesAlt2 && votesAlt1 >= votesAlt3 ? [...dominant, 1] : dominant;
	dominant = votesAlt2 >= votesAlt1 && votesAlt2 >= votesAlt3 ? [...dominant, 2] : dominant;
	dominant = votesAlt3 >= votesAlt1 && votesAlt3 >= votesAlt2 ? [...dominant, 3] : dominant;

	const rightPercentAlt1 = 100 - (votesAlt1 * 100) / totalVotes;
	const rightPercentAlt2 = 100 - (votesAlt2 * 100) / totalVotes;
	const rightPercentAlt3 = 100 - (votesAlt3 * 100) / totalVotes;

	return (
		<div className="pollCard">
			<h2 className="pollCard__question">{poll.question}</h2>

			<div className="pollCard__alternative">
				<p className="pollCard__alternative--description">{poll.alt1}</p>
				<Icon icon="check" size="xs" color={poll.votesAlt1.includes(1) ? undefined : 'transparent'} />
				<div
					className={`pollCard__alternative--filler ${dominant.includes(1) ? 'dominant' : ''}`}
					style={{ right: `${rightPercentAlt1}%` }}
				></div>
			</div>

			<div className="pollCard__alternative">
				<p className="pollCard__alternative--description">{poll.alt2}</p>
				<Icon icon="check" size="xs" color={poll.votesAlt2.includes(1) ? undefined : 'transparent'} />
				<div
					className={`pollCard__alternative--filler ${dominant.includes(2) ? 'dominant' : ''}`}
					style={{ right: `${rightPercentAlt2}%` }}
				></div>
			</div>

			<div className="pollCard__alternative">
				<p className="pollCard__alternative--description">{poll.alt3}</p>
				<Icon icon="check" size="xs" color={poll.votesAlt3.includes(1) ? undefined : 'transparent'} />
				<div
					className={`pollCard__alternative--filler ${dominant.includes(3) ? 'dominant' : ''}`}
					style={{ right: `${rightPercentAlt3}%` }}
				></div>
			</div>
		</div>
	);
};

export default PollCard;
