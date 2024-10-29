import { getCountries } from '@/actions/country/get-countries';
import { Title } from '@/components';
import { Country } from '@/interfaces/country.interface';
import type { Viewport } from 'next';
import AddressForm from './ui/AddressForm';

export function generateViewport({ width, height }: Viewport) {
	return {
		width,
		height,
		deviceScaleFactor: 1,
		isMobile: true,
		hasTouch: false,
		isLandscape: true,
	};
}

export default async function AdressPage() {
	const countries: Country[] = (await getCountries()) || [];

	return (
		<div className='flex flex-col sm:justify-center sm:items-center mb-72 px-3 sm:px-0'>
			<div className='w-full  xl:w-[1000px] flex flex-col justify-center text-left'>
				<Title
					title='Dirección'
					subtitle='Dirección de entrega'
				/>
				<AddressForm countries={countries} />
			</div>
		</div>
	);
}
