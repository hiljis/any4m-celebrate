import { newsData } from '../../../assets/data/newsData';
import CardList from '../../../components/ui/CardList/CardList';
import NewsListItem from './NewsListItem/NewsListItem';
import './NewsListSection.scss';

const NewsListSection = () => {
	return (
		<section className="section__newsList">
			<CardList header="History">
				{newsData.map((newsItem) => (
					<NewsListItem news={newsItem} />
				))}
			</CardList>
		</section>
	);
};

export default NewsListSection;
