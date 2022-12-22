import { userData } from '../../../assets/data/userData';
import CardListItem from '../../../components/ui/CardList/CardListItem/CardListItem';
import Icon from '../../../components/ui/Icon/Icon';
import { IPost } from '../../../utils/types';
import './PostsListItem.scss';

type Props = {
	post: IPost;
};

const PostsListItem: React.FC<Props> = ({ post }) => {
	const avatarUrl = userData.filter((user) => user.id === post.userId)[0].avatarUrl;
	const liked = post.likes.includes(1);

	return (
		<CardListItem>
			<div className="postListItemContent">
				<img src={avatarUrl} alt="Post Item" className="postListItemContent__avatar" />
				<div className="postListItemContent__grid">
					<h4 className="postListItemContent__title">{post.title}</h4>
					<div className="postListItemContent__feeling">
						<Icon icon={post.feeling} color="primary--light" size="xs" />
						<p className="postListItemContent__feeling--text">{`feeling ${post.feeling}`}</p>
					</div>
					<div className="postListItemContent__likes">
						<p className="postListItemContent__likes--num">{post.likes.length}</p>
						<Icon icon="heart" color={liked ? 'primary' : 'grey'} size="xs" />
					</div>
				</div>
			</div>
		</CardListItem>
	);
};

export default PostsListItem;
