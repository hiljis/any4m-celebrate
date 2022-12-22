import { userData } from '../../assets/data/userData';
import PageHeader from '../../components/PageHeader/PageHeader';
import UserAvatarGrid from '../../components/UserAvatarGrid/UserAvatarGrid';
import UserAvatarLink from '../../components/UserAvatarLink/UserAvatarLink';
import './MembersPage.scss';

const MembersPage: React.FC = () => {
	return (
		<main className="membersPage">
			<PageHeader>Members</PageHeader>
			<UserAvatarGrid header="Management">
				<UserAvatarLink user={userData[0]} />
				<UserAvatarLink user={userData[1]} />
				<UserAvatarLink user={userData[2]} />
			</UserAvatarGrid>
			<UserAvatarGrid header="Development">
				<UserAvatarLink user={userData[3]} />
				<UserAvatarLink user={userData[4]} />
				<UserAvatarLink user={userData[5]} />
				<UserAvatarLink user={userData[6]} />
				<UserAvatarLink user={userData[7]} />
				<UserAvatarLink user={userData[8]} />
				<UserAvatarLink user={userData[9]} />
			</UserAvatarGrid>
			<UserAvatarGrid header="Design">
				<UserAvatarLink user={userData[10]} />
				<UserAvatarLink user={userData[11]} />
			</UserAvatarGrid>
		</main>
	);
};

export default MembersPage;
