import avatarImg from '../../assets/Images/userAvatar1.png';
import './UserAvatar.scss';

type Props = {
	callback: Function;
};

const UserAvatar: React.FC<Props> = ({ callback }) => {
	return (
		<div
			className="userAvatar"
			onClick={() => {
				callback();
			}}
		>
			<img src={avatarImg} alt="User Avatar" className="userAvatar__img" />
		</div>
	);
};

export default UserAvatar;
