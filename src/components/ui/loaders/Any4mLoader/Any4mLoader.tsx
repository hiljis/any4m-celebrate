import { useState } from 'react';
import Icon from '../../Icon/Icon';
import './Any4mLoader.scss';

const Any4mLoader: React.FC = () => {
	const isLoading = useState(true);
	return (
		<div className={`any4mLoader ${isLoading ? 'loading' : ''}`}>
			<Icon icon="any4m" size="xl" />
		</div>
	);
};

export default Any4mLoader;
