import './Page.scss';

type Props = {
	layout?: 'column' | 'row' | 'column-center-center' | 'row-center-center';
	gap?: 'sm' | 'md';
	children: React.ReactNode;
	status?: string;
};

const Page: React.FC<Props> = ({ layout = 'column', gap, children, status }) => {
	return <main className={`page ${layout} ${gap} ${status}`}>{children}</main>;
};

export default Page;
