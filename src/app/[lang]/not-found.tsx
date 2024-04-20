import Link from 'next/link';

export default function NotFound() {
	return <main style={
		{
			// @ts-ignore
			'align-items': 'center',
			'display': 'flex',
			'flex-direction': 'column',
			'padding-top': '300px',
		}
	}>
		<p style={{
			// @ts-ignore
			'margin-bottom': '50px',
		}}>NOT FOUND</p>
		<Link href={`/`}>GO BACK</Link>
	</main>;
}
