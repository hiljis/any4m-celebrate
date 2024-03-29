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
import { ReactComponent as IconPhone } from '../../../assets/icons/IconPhone.svg';
import { ReactComponent as IconShareSocial } from '../../../assets/icons/IconShareSocial.svg';
import { ReactComponent as IconTerminalFilled } from '../../../assets/icons/IconTerminalFilled.svg';
import { ReactComponent as IconTerminalOutlined } from '../../../assets/icons/IconTerminalOutlined.svg';
import { ReactComponent as IconWrite } from '../../../assets/icons/IconWrite.svg';
import { ReactComponent as IconClose } from '../../../assets/icons/IconClose.svg';
import { ReactComponent as IconLeft } from '../../../assets/icons/IconLeft.svg';
import { ReactComponent as IconRight } from '../../../assets/icons/IconRight.svg';
import { ReactComponent as IconTime } from '../../../assets/icons/IconTime.svg';
import { ReactComponent as IconLocation } from '../../../assets/icons/IconLocation.svg';
import { ReactComponent as IconAdd } from '../../../assets/icons/IconAdd.svg';
import { ReactComponent as IconClever } from '../../../assets/icons/IconClever.svg';
import { ReactComponent as IconExhausted } from '../../../assets/icons/IconExhausted.svg';
import { ReactComponent as IconFunny } from '../../../assets/icons/IconFunny.svg';
import { ReactComponent as IconGreat } from '../../../assets/icons/IconGreat.svg';
import { ReactComponent as IconCheck } from '../../../assets/icons/IconCheck.svg';
import './Icon.css';
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
		case 'location':
			return <IconLocation className={classesFill} />;
		case 'time':
			return <IconTime className={classesFill} />;
		case 'add':
			return <IconAdd className={classesFill} />;
		case 'clever':
			return <IconClever className={classesFill} />;
		case 'exhausted':
			return <IconExhausted className={classesFill} />;
		case 'funny':
			return <IconFunny className={classesFill} />;
		case 'great':
			return <IconGreat className={classesStroke} />;
		case 'check':
			return <IconCheck className={`icon--${size} icon--${color}`} />;
		default:
			return <></>;
	}
};

export default Icon;
