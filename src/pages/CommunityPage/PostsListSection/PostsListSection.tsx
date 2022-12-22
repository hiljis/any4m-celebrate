import { postsData } from '../../../assets/data/postsData';
import CardList from '../../../components/ui/CardList/CardList';
import PostsListItem from '../PostsListItem/PostsListItem';
import './PostsListSection.scss';

const PostsListSection: React.FC = () => {
	return (
		<section className="section__eventList">
			<CardList header="Posts">
				{postsData.map((post) => (
					<PostsListItem post={post} />
				))}
			</CardList>
		</section>
	);
};

export default PostsListSection;
