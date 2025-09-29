"use client";

import { useRouter, usePathname } from 'next/navigation';

const locales = ['ru', 'en'] as const;
const languageNames = {
	ru: 'Русский',
	en: 'English'
};

export default function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();

	// Определяем текущую локаль из URL
	const currentLocale = pathname.startsWith('/en') ? 'en' : 'ru';

	const handleLanguageChange = (newLocale: string) => {
		// Удаляем текущую локаль из пути
		const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');

		// Создаем новый путь с новой локалью
		const newPath = `/${newLocale}${pathWithoutLocale}`;

		router.push(newPath);
	};

	return (
		<div className="relative">
			<select
				value={currentLocale}
				onChange={(e) => handleLanguageChange(e.target.value)}
				className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none pr-8"
			>
				{locales.map((loc) => (
					<option key={loc} value={loc}>
						{languageNames[loc as keyof typeof languageNames]}
					</option>
				))}
			</select>

			{/* Иконка стрелки */}
			<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				<svg
					className="w-4 h-4 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</div>
	);
}
