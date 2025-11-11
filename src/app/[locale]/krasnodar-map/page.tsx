import { useTranslations } from 'next-intl';
import Menu from '../ui/menu';
import Image from "next/image";
import Footer from '../ui/Footer';


export default function Page() {
	const t = useTranslations('sections');
	return (
		<>
			<Menu />
			<section className="main container py-[4rem] px-[7.5rem] md:w-full max-w-[1440px] mx-auto">
				<h1 className="text-[3rem] font-bold font-700">
					<span className='!important' style={{color: '#FA4D5C'}}>{t('krasnodarMap1')}</span> {t('krasnodarMap2')}
				</h1>
				<div className='mapSection flex mt-[2.25rem]'>
					<div className="filters bg-white mr-[1.19rem] w-[16.56rem] h-[18.06rem] rounded-[1.5rem] p-[1.5rem]">
						<legend className='font-700 font-bold text-[1.13rem] mb-[1.5rem]'>{t('objectsMap')}</legend>
						<div role="button" className="flex w-full rounded-[0.25rem] p-0">
      						<label htmlFor="check-vertical-list-group" className="flex w-full cursor-pointer items-center mb-[1rem]">
        						<div className="inline-flex items-center">
          							<label className="flex items-center cursor-pointer relative" htmlFor="check-vertical-list-group">
            							<input type="checkbox" className="peer h-[1.5rem] w-[1.5rem] cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#FA4D5C] checked:border-[#FA4D5C]-300" id="check-vertical-list-group" />
            							<span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              								<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1415 0.129134C13.0584 0.0463959 12.9463 0 12.8295 0C12.7127 0 12.6006 0.0463959 12.5175 0.129134L4.27352 9.47994L0.781521 6.66139C0.736297 6.61492 0.681796 6.57866 0.621626 6.55502C0.561457 6.53137 0.496991 6.52088 0.432497 6.52423C0.368003 6.52759 0.304952 6.54471 0.247517 6.57448C0.190082 6.60424 0.139573 6.64597 0.0993349 6.69689C0.0590966 6.7478 0.0300464 6.80676 0.0141073 6.86984C-0.00183189 6.93293 -0.00429645 6.99871 0.00687688 7.06283C0.0180502 7.12695 0.0426067 7.18794 0.0789203 7.24178C0.115234 7.29561 0.162477 7.34106 0.217521 7.3751L4.09352 10.4598C4.17805 10.5397 4.28961 10.5842 4.40552 10.5842C4.52143 10.5842 4.63299 10.5397 4.71752 10.4598L13.1895 0.78236C13.2294 0.736497 13.2597 0.683106 13.2789 0.625294C13.2981 0.567483 13.3056 0.506407 13.3012 0.445618C13.2967 0.38483 13.2803 0.325543 13.2529 0.27121C13.2255 0.216877 13.1876 0.168581 13.1415 0.129134Z" fill="white"/>
</svg>

            							</span>
          							</label>
          							<label className="cursor-pointer ml-[0.63rem] text-slate-600" htmlFor="check-vertical-list-group">{t('attractionsMap')}</label>
        						</div>
      						</label>
    					</div>
    <div
      role="button"
      className="flex w-full items-center rounded-[0.25rem]"
    >
      <label
        htmlFor="check-vertical-list-group2"
        className="flex w-full cursor-pointer items-center mb-[1rem]"
      >
        <div className="inline-flex items-center">
          <label className="flex items-center cursor-pointer relative" htmlFor="check-vertical-list-group2">
            <input type="checkbox"
              className="peer h-[1.5rem] w-[1.5rem] cursor-pointer transition-all appearance-none rounded-[0.25rem] shadow hover:shadow-md border border-slate-300 checked:bg-[#FA4D5C] checked:border-[#FA4D5C]-800"
              id="check-vertical-list-group2" />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1415 0.129134C13.0584 0.0463959 12.9463 0 12.8295 0C12.7127 0 12.6006 0.0463959 12.5175 0.129134L4.27352 9.47994L0.781521 6.66139C0.736297 6.61492 0.681796 6.57866 0.621626 6.55502C0.561457 6.53137 0.496991 6.52088 0.432497 6.52423C0.368003 6.52759 0.304952 6.54471 0.247517 6.57448C0.190082 6.60424 0.139573 6.64597 0.0993349 6.69689C0.0590966 6.7478 0.0300464 6.80676 0.0141073 6.86984C-0.00183189 6.93293 -0.00429645 6.99871 0.00687688 7.06283C0.0180502 7.12695 0.0426067 7.18794 0.0789203 7.24178C0.115234 7.29561 0.162477 7.34106 0.217521 7.3751L4.09352 10.4598C4.17805 10.5397 4.28961 10.5842 4.40552 10.5842C4.52143 10.5842 4.63299 10.5397 4.71752 10.4598L13.1895 0.78236C13.2294 0.736497 13.2597 0.683106 13.2789 0.625294C13.2981 0.567483 13.3056 0.506407 13.3012 0.445618C13.2967 0.38483 13.2803 0.325543 13.2529 0.27121C13.2255 0.216877 13.1876 0.168581 13.1415 0.129134Z" fill="white"/>
</svg>

            </span>
          </label>
          <label className="cursor-pointer ml-[0.63rem] text-slate-600" htmlFor="check-vertical-list-group2">
            {t('whereToStayMap')}
          </label>
        </div>
      </label>
    </div>
    <div
      role="button"
      className="flex w-full items-center rounded-[0.25rem]"
    >
      <label
        htmlFor="check-vertical-list-group3"
        className="flex w-full cursor-pointer items-center mb-[2.25rem]"
      >
        <div className="inline-flex items-center">
          <label className="flex items-center cursor-pointer relative" htmlFor="check-vertical-list-group3">
            <input type="checkbox"
              className="peer h-[1.5rem] w-[1.5rem] cursor-pointer transition-all appearance-none rounded-[0.25rem] shadow hover:shadow-md border border-slate-300 checked:bg-[#FA4D5C] checked:border-[#FA4D5C]-800"
              id="check-vertical-list-group3" />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1415 0.129134C13.0584 0.0463959 12.9463 0 12.8295 0C12.7127 0 12.6006 0.0463959 12.5175 0.129134L4.27352 9.47994L0.781521 6.66139C0.736297 6.61492 0.681796 6.57866 0.621626 6.55502C0.561457 6.53137 0.496991 6.52088 0.432497 6.52423C0.368003 6.52759 0.304952 6.54471 0.247517 6.57448C0.190082 6.60424 0.139573 6.64597 0.0993349 6.69689C0.0590966 6.7478 0.0300464 6.80676 0.0141073 6.86984C-0.00183189 6.93293 -0.00429645 6.99871 0.00687688 7.06283C0.0180502 7.12695 0.0426067 7.18794 0.0789203 7.24178C0.115234 7.29561 0.162477 7.34106 0.217521 7.3751L4.09352 10.4598C4.17805 10.5397 4.28961 10.5842 4.40552 10.5842C4.52143 10.5842 4.63299 10.5397 4.71752 10.4598L13.1895 0.78236C13.2294 0.736497 13.2597 0.683106 13.2789 0.625294C13.2981 0.567483 13.3056 0.506407 13.3012 0.445618C13.2967 0.38483 13.2803 0.325543 13.2529 0.27121C13.2255 0.216877 13.1876 0.168581 13.1415 0.129134Z" fill="white"/>
</svg>

            </span>
          </label>
          <label className="cursor-pointer ml-[0.63rem] text-slate-600" htmlFor="check-vertical-list-group3">
            {t('gastronomyMap')}
          </label>
        </div>
      </label>
    </div>
							<button type='submit' className='w-[13.56rem] h-[3.31rem] bg-[#FA4D5C] text-white rounded-[1.5rem] mx-auto cursor-pointer'>{t('filter')}</button>
					</div>
					<div className="map">
						<Image src='/5e4f77128df521e2b4f2d32c4fa5d79449462601.png' width={916} height={564} alt='map' />
					</div>
				</div>
		</section>
		<Footer />
		</>
	);
}


