import { getCountries } from '@/actions/country/get-countries';
import { Title } from '@/components';
import { Country } from '@/interfaces/country.interface';
import AddressForm from './ui/AddressForm';

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
