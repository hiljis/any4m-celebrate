import PageHeader from '../../components/PageHeader/PageHeader';
import CardList from '../../components/ui/CardList/CardList';
import CardListItem from '../../components/ui/CardList/CardListItem/CardListItem';
import NewsCarouselSection from './NewsCarouselSection/NewsCarouselSection';
import NewsListItem from './NewsListSection/NewsListItem/NewsListItem';
import NewsListSection from './NewsListSection/NewsListSection';
import './NewsPage.scss';

const NewsPage: React.FC = () => {
	return (
		<main className="newsPage">
			<PageHeader />
			<NewsCarouselSection />
			<NewsListSection />
		</main>
	);
};

export default NewsPage;
