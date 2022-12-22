import './UserAvatarGrid.scss';

type Props = {
	children: React.ReactNode | React.ReactNode[];
	header: string;
};

const UserAvatarGrid: React.FC<Props> = ({ children, header }) => {
	return (
		<div className="userAvatarGridContainer">
			<div className="userAvatarGridHeader">{header}</div>
			<div className="userAvatarGrid">{children}</div>
		</div>
	);
};

export default UserAvatarGrid;
