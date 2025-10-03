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
				className="bg-[#767676] border border-gray-500 rounded text-white text-[0.88rem] px-2 py-1 hover:bg-[#656565] focus:outline-none focus:ring-2 focus:ring-[#FA4D5C] focus:border-transparent appearance-none pr-6 cursor-pointer"
			>
				{locales.map((loc) => (
					<option key={loc} value={loc} className="bg-[#767676] text-white">
						{loc.toUpperCase()}
					</option>
				))}
			</select>

			{/* Иконка стрелки */}
			<div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
				<svg
					className="w-3 h-3 text-white"
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
