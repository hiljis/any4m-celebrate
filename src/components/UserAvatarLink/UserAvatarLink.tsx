import { Link } from 'react-router-dom';
import { IUser } from '../../utils/types';
import UserAvatar from '../UserAvatar/UserAvatar';
import './UserAvatarLink.scss';

type Props = {
	user: IUser;
};

const UserAvatarLink: React.FC<Props> = ({ user }) => {
	return (
		<Link to={`members/${user.id}`}>
			<UserAvatar user={user} size="md" />
		</Link>
	);
};

export default UserAvatarLink;
