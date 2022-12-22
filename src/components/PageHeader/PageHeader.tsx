import './PageHeader.scss';

const PageHeader: React.FC = () => {
	return (
		<section className="pageHeader">
			<h1 className="pageHeader__title">News</h1>
			<button type="button" className="burgerBtn" title="Menu">
				<div className="burgerBtn__line"></div>
			</button>
		</section>
	);
};

export default PageHeader;
