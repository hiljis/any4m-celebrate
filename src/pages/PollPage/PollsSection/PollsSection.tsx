import { pollsData } from '../../../assets/data/pollsData';
import PollCard from '../PollCard/PollCard';
import './PollsSection.scss';

const PollsSection: React.FC = () => {
	return (
		<section className="section__polls">
			<div className="pollsList">
				{pollsData.map((poll) => (
					<PollCard poll={poll} />
				))}
			</div>
		</section>
	);
};

export default PollsSection;
