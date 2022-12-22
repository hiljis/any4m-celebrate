import { Fragment } from 'react';
import './PageHeader.scss';

type Props = {
	children: string;
};

const PageHeader: React.FC<Props> = ({ children }) => {
	const words = children.split(' ');

	return (
		<section className="pageHeader">
			<h1 className="pageHeader__title">{words[0]}</h1>
			<button type="button" className="burgerBtn" title="Menu">
				<div className="burgerBtn__line"></div>
			</button>
			{words[1] ? <h1 className="pageHeader__title">{words[1]}</h1> : ''}
		</section>
	);
};

export default PageHeader;
