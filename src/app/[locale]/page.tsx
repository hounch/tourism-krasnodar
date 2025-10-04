import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Main from "./sections/Main";

type Props = {
	params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
	const { locale } = use(params);

	// Enable static rendering
	setRequestLocale(locale);

	return <Main />;
}
