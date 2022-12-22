import './PageHeader.scss';

type Props = {
	children: string;
};

const PageHeader: React.FC<Props> = ({ children }) => {
	return (
		<section className="pageHeader">
			<h1 className="pageHeader__title">{children}</h1>
			<button type="button" className="burgerBtn" title="Menu">
				<div className="burgerBtn__line"></div>
			</button>
		</section>
	);
};

export default PageHeader;
