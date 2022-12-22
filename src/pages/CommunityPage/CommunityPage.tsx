import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ButtonFullHorizontal from '../../components/ui/ButtonFullHorizontal/ButtonFullHorizontal';
import Icon from '../../components/ui/Icon/Icon';
import './CommunityPage.scss';
import PostsListSection from './PostsListSection/PostsListSection';

const CommunityPage: React.FC = () => {
	const onClickHandler = () => {
		console.log('CLICK');
	};

	return (
		<main className="communityPage">
			<PageHeader>Comm&shy;unity</PageHeader>
			<ButtonFullHorizontal onClickHandler={onClickHandler}>
				<Icon icon="add" size="xs" color="primary" />
			</ButtonFullHorizontal>
			<PostsListSection />
		</main>
	);
};

export default CommunityPage;
