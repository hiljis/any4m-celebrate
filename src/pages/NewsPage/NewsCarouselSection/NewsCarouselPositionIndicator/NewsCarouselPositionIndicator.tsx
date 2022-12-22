import { useCallback } from 'react';
import './NewsCarouselPositionIndicator.scss';

type Props = {
	activePosition: number;
	onPositionChangeHandler: Function;
};

const NewsCarouselPositionIndicator: React.FC<Props> = ({ activePosition, onPositionChangeHandler }) => {
	const onClick = useCallback(
		(position: number) => {
			onPositionChangeHandler(position);
		},
		[onPositionChangeHandler]
	);

	return (
		<div className="newsCarouselPositionIndicator">
			<div className={`dot ${activePosition === 0 ? 'active' : ''}`} onClick={() => onClick(0)}></div>
			<div className={`dot ${activePosition === 1 ? 'active' : ''}`} onClick={() => onClick(1)}></div>
			<div className={`dot ${activePosition === 2 ? 'active' : ''}`} onClick={() => onClick(2)}></div>
		</div>
	);
};

export default NewsCarouselPositionIndicator;
