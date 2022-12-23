import './ButtonFullHorizontal.scss';

type Props = {
	children: React.ReactNode | string;
	onClickHandler: Function;
};
const ButtonFullHorizontal: React.FC<Props> = ({ children, onClickHandler }) => {
    
	const handleOnClick = () => {
		onClickHandler();
	};

	return (
		<button className="btnFullHorizontal" type="button" onClick={handleOnClick}>
			{children}
		</button>
	);
};

export default ButtonFullHorizontal;
