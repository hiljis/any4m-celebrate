import { userData } from '../../assets/data/userData';
import Icon from '../../components/ui/Icon/Icon';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import './Header.scss';

const Header: React.FC = () => {
	const callBack = () => {
		console.log('Avatar clicked');
	};

	return (
		<header className="header">
			<UserAvatar user={userData[0]} size="sm" callback={callBack} />
			<Icon icon="any4m" size="xl" />
		</header>
	);
};

export default Header;
