import { useState } from 'react';
import { INews } from '../../../utils/types';
import './NewsCarouselSection.scss';
import NewsCarousel from './NewsCarousel/NewsCarousel';
import NewsCarouselPositionIndicator from './NewsCarouselPositionIndicator/NewsCarouselPositionIndicator';
import { newsData } from '../../../assets/data/newsData';

const NewsCarouselSection: React.FC = () => {
	const [position, setPosition] = useState(0);

	const onPositionChangeHandler = (activePosition: number) => {
		setPosition(activePosition);
	};
	return (
		<section className="section__newsCarousel">
			<NewsCarousel news={newsData.slice(0, 3)} activePosition={position} onPositionChangeHandler={() => {}} />
			<NewsCarouselPositionIndicator
				activePosition={position}
				onPositionChangeHandler={onPositionChangeHandler}
			/>
		</section>
	);
};

export default NewsCarouselSection;
