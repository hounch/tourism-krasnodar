"use client";

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Link from 'next/link';

export default function Main() {
	const t = useTranslations();
	const ts = useTranslations('sections');

	return (
		<>
			<div className="min-h-screen bg-white">
				{/* Навигация */}
				<nav className="bg-white shadow-md fixed w-full z-10">
					<div className="container mx-auto px-4 py-3 flex justify-between items-center">
						<div className="flex items-center">
							<span className="text-2xl font-bold text-green-700">
								Краснодар
							</span>
							<span className="text-2xl font-bold text-orange-500">Тур</span>
						</div>
						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#"
								className="text-gray-700 hover:text-green-600 font-medium"
							>
								{t('navigation.home')}
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-green-600 font-medium"
							>
								{t('navigation.attractions')}
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-green-600 font-medium"
							>
								{t('navigation.routes')}
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-green-600 font-medium"
							>
								{t('navigation.events')}
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-green-600 font-medium"
							>
								{t('navigation.contacts')}
							</a>
							<LanguageSwitcher />
						</div>
						<button className="md:hidden text-gray-700">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
				</nav>

				{/* Герой секция */}
				<div className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-green-50 to-amber-50">
					<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-10 md:mb-0">
							<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
								{t('hero.title')}{" "}
								<span className="text-green-600">{t('hero.titleHighlight')}</span>
							</h1>
							<p className="text-lg text-gray-600 mb-8">
								{t('hero.description')}
							</p>
							<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
								<button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
									{t('hero.chooseTour')}
								</button>
								<button className="border border-green-600 text-green-600 hover:bg-green-50 font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
									{t('hero.learnMore')}
								</button>
							</div>
						</div>
						<div className="md:w-1/2">
							<div className="rounded-xl overflow-hidden shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1590172205848-3db961eb0cd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Краснодар"
									className="w-full h-64 md:h-96 object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Тестовая навигация по разделам */}
					<div className="py-8 bg-white">
						<div className="container mx-auto px-4">
							<h2 className="text-xl font-bold mb-4">Навигация (для проверки)</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div>
									<h3 className="font-semibold mb-2">{ts('excursions')}</h3>
									<ul className="space-y-1">
										<li><Link href="/excursions" className="text-green-700 hover:underline">{ts('excursions')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('audioGuides')}</h3>
									<ul className="space-y-1">
										<li><Link href="/audio-guides" className="text-green-700 hover:underline">{ts('audioGuides')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{useTranslations('sections.attractions')('_root')}</h3>
									<ul className="space-y-1">
										<li><Link href="/attractions" className="text-green-700 hover:underline">{useTranslations('sections.attractions')('_root')}</Link></li>
										<li><Link href="/attractions/architecture" className="text-green-700 hover:underline">{useTranslations('sections.attractions')('architecture')}</Link></li>
										<li><Link href="/attractions/temples" className="text-green-700 hover:underline">{useTranslations('sections.attractions')('temples')}</Link></li>
										<li><Link href="/attractions/sculptures" className="text-green-700 hover:underline">{useTranslations('sections.attractions')('sculptures')}</Link></li>
										<li><Link href="/attractions/fountains" className="text-green-700 hover:underline">{useTranslations('sections.attractions')('fountains')}</Link></li>
										<li><Link href="/attractions/old-town-symbols" className="text-green-700 hover:underline">{useTranslations('sections.attractions')('oldTownSymbols')}</Link></li>
										<li><Link href="/attractions/parks" className="text-green-700 hover:underline">{useTranslations('sections.attractions')('parks')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{useTranslations('sections.culture')('_root')}</h3>
									<ul className="space-y-1">
										<li><Link href="/culture" className="text-green-700 hover:underline">{useTranslations('sections.culture')('_root')}</Link></li>
										<li><Link href="/culture/theaters" className="text-green-700 hover:underline">{useTranslations('sections.culture')('theaters')}</Link></li>
										<li><Link href="/culture/museums" className="text-green-700 hover:underline">{useTranslations('sections.culture')('museums')}</Link></li>
										<li><Link href="/culture/galleries" className="text-green-700 hover:underline">{useTranslations('sections.culture')('galleries')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('family')}</h3>
									<ul className="space-y-1">
										<li><Link href="/family" className="text-green-700 hover:underline">{ts('family')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('sports')}</h3>
									<ul className="space-y-1">
										<li><Link href="/sports" className="text-green-700 hover:underline">{ts('sports')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('entertainment')}</h3>
									<ul className="space-y-1">
										<li><Link href="/entertainment" className="text-green-700 hover:underline">{ts('entertainment')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('gastronomy')}</h3>
									<ul className="space-y-1">
										<li><Link href="/gastronomy" className="text-green-700 hover:underline">{ts('gastronomy')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('stay')}</h3>
									<ul className="space-y-1">
										<li><Link href="/stay" className="text-green-700 hover:underline">{ts('stay')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{useTranslations('sections.info')('_root')}</h3>
									<ul className="space-y-1">
										<li><Link href="/info" className="text-green-700 hover:underline">{useTranslations('sections.info')('_root')}</Link></li>
										<li><Link href="/info/about" className="text-green-700 hover:underline">{useTranslations('sections.info')('about')}</Link></li>
										<li><Link href="/info/news" className="text-green-700 hover:underline">{useTranslations('sections.info')('news')}</Link></li>
										<li><Link href="/info/tic" className="text-green-700 hover:underline">{useTranslations('sections.info')('tic')}</Link></li>
										<li><Link href="/info/contacts" className="text-green-700 hover:underline">{useTranslations('sections.info')('contacts')}</Link></li>
										<li><Link href="/info/docs" className="text-green-700 hover:underline">{useTranslations('sections.info')('docs')}</Link></li>
										<li><Link href="/info/professionals" className="text-green-700 hover:underline">{useTranslations('sections.info')('professionals')}</Link></li>
										<li><Link href="/info/reviews" className="text-green-700 hover:underline">{useTranslations('sections.info')('reviews')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('touristMap')}</h3>
									<ul className="space-y-1">
										<li><Link href="/tourist-map" className="text-green-700 hover:underline">{ts('touristMap')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('ticProjects')}</h3>
									<ul className="space-y-1">
										<li><Link href="/tic-projects" className="text-green-700 hover:underline">{ts('ticProjects')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('events')}</h3>
									<ul className="space-y-1">
										<li><Link href="/events" className="text-green-700 hover:underline">{ts('events')}</Link></li>
									</ul>
								</div>
								<div>
									<h3 className="font-semibold mb-2">{ts('krasnodarMap')}</h3>
									<ul className="space-y-1">
										<li><Link href="/krasnodar-map" className="text-green-700 hover:underline">{ts('krasnodarMap')}</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Популярные достопримечательности */}
				<div className="py-16 bg-white">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
							{t('attractions.title')}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* Карточка 1 */}
							<div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
								<img
									src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Памятник Екатерине Великой"
									className="w-full h-56 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800 mb-2">
										{t('attractions.catherine.title')}
									</h3>
									<p className="text-gray-600 mb-4">
										{t('attractions.catherine.description')}
									</p>
									<a
										href="#"
										className="text-green-600 font-medium hover:underline"
									>
										{t('common.readMore')} →									</a>
								</div>
							</div>

							{/* Карточка 2 */}
							<div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
								<img
									src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Театральная площадь"
									className="w-full h-56 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800 mb-2">
										{t('attractions.theater.title')}
									</h3>
									<p className="text-gray-600 mb-4">
										{t('attractions.theater.description')}
									</p>
									<a
										href="#"
										className="text-green-600 font-medium hover:underline"
									>
										{t('common.readMore')} →									</a>
								</div>
							</div>

							{/* Карточка 3 */}
							<div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
								<img
									src="https://images.unsplash.com/photo-1574339446742-3a30dce7ac2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Красная улица"
									className="w-full h-56 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800 mb-2">
										{t('attractions.redStreet.title')}
									</h3>
									<p className="text-gray-600 mb-4">
										{t('attractions.redStreet.description')}
									</p>
									<a
										href="#"
										className="text-green-600 font-medium hover:underline"
									>
										{t('common.readMore')} →									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Секция о городе */}
				<div className="py-16 bg-gradient-to-br from-green-50 to-amber-50">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row items-center">
							<div className="md:w-1/2 mb-10 md:mb-0">
								<img
									src="https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
									alt="Краснодарский край"
									className="rounded-xl shadow-xl w-full h-96 object-cover"
								/>
							</div>
							<div className="md:w-1/2 md:pl-12">
								<h2 className="text-3xl font-bold text-gray-800 mb-6">
									{t('about.title')}
								</h2>
								<p className="text-gray-600 mb-6">
									{t('about.description')}
								</p>
								<ul className="space-y-4">
									<li className="flex items-start">
										<div className="bg-green-100 p-2 rounded-full mr-4">
											<svg
												className="w-5 h-5 text-green-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<span className="text-gray-700">
											{t('about.features.climate')}
										</span>
									</li>
									<li className="flex items-start">
										<div className="bg-green-100 p-2 rounded-full mr-4">
											<svg
												className="w-5 h-5 text-green-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<span className="text-gray-700">
											{t('about.features.culture')}
										</span>
									</li>
									<li className="flex items-start">
										<div className="bg-green-100 p-2 rounded-full mr-4">
											<svg
												className="w-5 h-5 text-green-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<span className="text-gray-700">
											{t('about.features.cuisine')}
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Секция событий */}
				<div className="py-16 bg-white">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
							{t('events.title')}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
								<div className="text-green-600 font-bold text-lg mb-2">
									{t('events.foodFestival.date')}
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-4">
									{t('events.foodFestival.title')}
								</h3>
								<p className="text-gray-600 mb-4">
									{t('events.foodFestival.description')}
								</p>
								<a
									href="#"
									className="text-green-600 font-medium hover:underline"
								>
									{t('common.readMore')} →								</a>
							</div>

							<div className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
								<div className="text-green-600 font-bold text-lg mb-2">
									{t('events.cityTour.date')}
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-4">
									{t('events.cityTour.title')}
								</h3>
								<p className="text-gray-600 mb-4">
									{t('events.cityTour.description')}
								</p>
								<a
									href="#"
									className="text-green-600 font-medium hover:underline"
								>
									{t('common.readMore')} →								</a>
							</div>

							<div className="border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
								<div className="text-green-600 font-bold text-lg mb-2">
									{t('events.museumNight.date')}
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-4">
									{t('events.museumNight.title')}
								</h3>
								<p className="text-gray-600 mb-4">
									{t('events.museumNight.description')}
								</p>
								<a
									href="#"
									className="text-green-600 font-medium hover:underline"
								>
									{t('common.readMore')} →								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Секция подписки */}
				<div className="py-16 bg-green-600 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6">
							{t('newsletter.title')}
						</h2>
						<p className="mb-8 max-w-2xl mx-auto">
							{t('newsletter.description')}
						</p>
						<div className="flex flex-col sm:flex-row justify-center max-w-2xl mx-auto">
							<input
								type="email"
								placeholder={t('newsletter.emailPlaceholder')} className="py-3 px-6 rounded-l-lg sm:rounded-r-none sm:rounded-l-lg text-gray-800 w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-green-300"
							/>
							<button className="bg-amber-500 hover:bg-amber-600 py-3 px-6 mt-4 sm:mt-0 sm:rounded-l-none sm:rounded-r-lg font-medium transition duration-300">
								{t('newsletter.subscribe')}
							</button>
						</div>
					</div>
				</div>

				{/* Футер */}
				<footer className="bg-gray-800 text-white py-12">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<div>
								<div className="flex items-center mb-4">
									<span className="text-2xl font-bold text-green-400">
										Краснодар
									</span>
									<span className="text-2xl font-bold text-amber-500">Тур</span>
								</div>
								<p className="text-gray-400">
									{t('footer.description')}
								</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
