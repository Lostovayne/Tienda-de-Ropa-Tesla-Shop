'use server';

import type { Address } from '@/interfaces/address.interface';
import prisma from '@/lib/prisma';

export const setUserAddress = async (address: Address, userId: string) => {
	try {
		const newAddress = await createOrReplaceAddress(address, userId);

		return {
			ok: true,
			address: newAddress,
			message: 'Dirección guardada',
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: 'Error al guardar la dirección',
		};
	}
};

const createOrReplaceAddress = async (address: Address, userId: string) => {
	try {
		const storedAddress = await prisma.userAddress.findFirst({ where: { userId } });
		const { rememberAddress, country, address2 = '', ...data } = address;

		const addressToSave = {
			...data,
			address2,
			countryId: country,
			userId,
		};

		if (!storedAddress) {
			const newAddress = await prisma.userAddress.create({
				data: addressToSave,
			});
			return newAddress;
		}

		const updatedAddress = await prisma.userAddress.update({
			where: { id: storedAddress.id },
			data: addressToSave,
		});
		return updatedAddress;
	} catch (error) {
		console.log(error);
		throw new Error('Error al crear o reemplazar la dirección');
	}
};
