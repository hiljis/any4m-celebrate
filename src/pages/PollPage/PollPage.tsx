import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ButtonFullHorizontal from '../../components/ui/ButtonFullHorizontal/ButtonFullHorizontal';
import Icon from '../../components/ui/Icon/Icon';
import './PollPage.scss';
import PollsSection from './PollsSection/PollsSection';

const PollPage: React.FC = () => {
	const onClickHandler = () => {
		console.log('CLICK');
	};

	return (
		<main className="pollPage">
			<PageHeader>Polls</PageHeader>
			<ButtonFullHorizontal onClickHandler={onClickHandler}>
				<Icon icon="add" size="xs" color="primary"></Icon>
			</ButtonFullHorizontal>
			<PollsSection />
		</main>
	);
};

export default PollPage;
