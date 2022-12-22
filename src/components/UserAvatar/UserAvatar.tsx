import { IUser } from '../../utils/types';
import './UserAvatar.scss';

type Props = {
	user: IUser;
	size: 'sm' | 'md';
	callback?: Function;
};

const UserAvatar: React.FC<Props> = ({ user, size, callback }) => {
	const handleOnClick = () => {
		if (callback) callback();
	};
	return (
		<div className={`userAvatar ${size}`} onClick={handleOnClick}>
			<img src={user.avatarUrl} alt="User Avatar" className={`userAvatar__img ${size}`} />
		</div>
	);
};

export default UserAvatar;
