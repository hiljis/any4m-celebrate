import './Page.css';

type Props = {
	layout?: 'center-center' | 'center';
	gap?: 'sm' | 'md';
	children: React.ReactNode;
	status?: string;
};

const Page: React.FC<Props> = ({ layout = 'center', gap, children, status }) => {
	return <main className={`page ${layout} ${gap} ${status} relative`}>{children}</main>;
};

export default Page;
