import { useTranslations } from 'next-intl';

export default function Page() {
	const t = useTranslations('sections.culture');
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold">{t('museums')}</h1>
		</div>
	);
}


