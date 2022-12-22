import { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/news');
		}, 2000);
	});

	return <div>Page Not Found</div>;
};

export default NotFoundPage;
