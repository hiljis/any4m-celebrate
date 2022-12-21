import { ReactComponent as IconAny4m } from '../../../assets/icons/IconAny4m.svg';
import { ReactComponent as IconArt } from '../../../assets/icons/IconArt.svg';
import { ReactComponent as IconDiscord } from '../../../assets/icons/IconDiscord.svg';
import { ReactComponent as IconEmailFilled } from '../../../assets/icons/IconEmailFilled.svg';
import { ReactComponent as IconEmailOutlined } from '../../../assets/icons/IconEmailOutlined.svg';
import { ReactComponent as IconExpand } from '../../../assets/icons/IconExpand.svg';
import { ReactComponent as IconGithub } from '../../../assets/icons/IconGithub.svg';
import { ReactComponent as IconHappy } from '../../../assets/icons/IconHappy.svg';
import { ReactComponent as IconHappyMood } from '../../../assets/icons/IconHappyMood.svg';
import { ReactComponent as IconHeart } from '../../../assets/icons/IconHeart.svg';
import { ReactComponent as IconHeart2 } from '../../../assets/icons/IconHeart2.svg';
import { ReactComponent as IconPhone } from '../../../assets/icons/IconPhone.svg';
import { ReactComponent as IconShareSocial } from '../../../assets/icons/IconShareSocial.svg';
import { ReactComponent as IconTerminalFilled } from '../../../assets/icons/IconTerminalFilled.svg';
import { ReactComponent as IconTerminalOutlined } from '../../../assets/icons/IconTerminalOutlined.svg';
import { ReactComponent as IconWrite } from '../../../assets/icons/IconWrite.svg';
import { ReactComponent as IconClose } from '../../../assets/icons/IconClose.svg';
import { ReactComponent as IconLeft } from '../../../assets/icons/IconLeft.svg';
import { ReactComponent as IconRight } from '../../../assets/icons/IconRight.svg';
import './Icon.scss';
import { appColor } from '../../../utils/types';

export type iconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Props = {
	icon: string;
	color?: appColor;
	size?: iconSize;
	bgColor?: appColor;
	bgShape?: 'round' | 'square';
	bgBorder?: 'dark-1' | 'dark-2' | 'dark-3';
};

const Icon: React.FC<Props> = ({ icon, color, size, bgColor, bgShape, bgBorder }) => {
	const classesFill = `icon--${size} icon--fill-${color} iconBg--${bgColor} iconBg--${bgShape} iconBgBorder--${bgBorder}`;
	const classesStroke = `icon--${size} icon--stroke-${color} iconBg--${bgColor} iconBg--${bgShape} iconBgBorder--${bgBorder}`;
	switch (icon) {
		case 'any4m':
			return <IconAny4m className={classesStroke} />;
		case 'art':
			return <IconArt className={classesStroke} />;
		case 'close':
			return <IconClose className={classesStroke} />;
		case 'discord':
			return <IconDiscord className={classesFill} />;
		case 'email-filled':
			return <IconEmailFilled className={classesFill} />;
		case 'email-outlined':
			return <IconEmailOutlined className={classesStroke} />;
		case 'expand':
			return <IconExpand className={classesStroke} />;
		case 'github':
			return <IconGithub className={classesFill} />;
		case 'happy':
			return <IconHappy className={classesFill} />;
		case 'happy-mood':
			return <IconHappyMood className={classesStroke} />;
		case 'heart':
			return <IconHeart className={classesFill} />;
		case 'heart-2':
			return <IconHeart2 className={classesStroke} />;
		case 'phone':
			return <IconPhone className={classesStroke} />;
		case 'shareSocial':
			return <IconShareSocial className={classesStroke} />;
		case 'terminal-filled':
			return <IconTerminalFilled className={classesFill} />;
		case 'terminal-outlined':
			return <IconTerminalOutlined className={classesFill} />;
		case 'write':
			return <IconWrite className={classesStroke} />;
		case 'left':
			return <IconLeft className={classesStroke} />;
		case 'right':
			return <IconRight className={classesStroke} />;
		default:
			return <></>;
	}
};

export default Icon;
