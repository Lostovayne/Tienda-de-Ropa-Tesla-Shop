'use client';
import { logout } from '@/actions';
import { useUiStore } from '@/store';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
	IoCloseOutline,
	IoDocumentsOutline,
	IoLogInOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSearchOutline,
	IoShirtOutline,
	IoTicketOutline,
} from 'react-icons/io5';

export const Sidebar = () => {
	const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen) || false;
	const closeSideMenu = useUiStore((state) => state.closeSideMenu);

	//router
	const router = useRouter();

	// tomar la sesion del lado del cliente
	const { data: session } = useSession();

	const role = session?.user?.role as 'admin' | 'user';

	const isAuthenticated: boolean | null = !!session?.user;

	// revisar la authenticacion del usuario

	const LogoutUser = async () => {
		closeSideMenu();
		await logout();
		router.push('/auth/login');
	};

	const LoginUser = () => {
		closeSideMenu();
		router.push('/auth/login');
	};

	return (
		<div>
			{/* Backdround */}
			{isSideMenuOpen && <div className='fixed inset-0 h-screen z-10 bg-black/50  opacity-90' />}

			{isSideMenuOpen && (
				<div
					className='fixed inset-0 h-screen z-10 w-screen backdrop-blur-sm backdrop-opacity-75 '
					onClick={closeSideMenu}
				/>
			)}

			{/* SideMenu */}
			<nav
				className={clsx(
					'fixed right-0 top-0 max-w-xs w-full md:max-w-sm h-screen z-20 bg-white shadow-xl transform transition-all ease-in-out duration-300 rounded',
					{
						'translate-x-full': !isSideMenuOpen,
					}
				)}>
				<IoCloseOutline
					className='absolute right-5 top-5 text-3xl text-gray-500 cursor-pointer'
					onClick={closeSideMenu}
				/>

				{/* Busqueda */}

				<div className='relative mt-16'>
					<IoSearchOutline className='absolute left-3 top-2 text-xl text-gray-500' />
					<input
						type='text'
						className=' outline-none border-b bg-gray-300/15 border-slate-200 rounded-md w-full py-1.5 pr-2 pl-10 focus:outline-none focus:border-slate-400 text-gray-500 text-base placeholder:text-sm placeholder:text-gray-400 mb-5'
						placeholder='Buscar...'
					/>
				</div>

				{/* Menu */}
				<Link
					href='/profile'
					onClick={() => closeSideMenu()}
					className='m-4 p-2 gap-2 flex items-end rounded-md font-medium transition-all hover:bg-gray-100'>
					<IoPersonOutline
						size={25}
						className=' text-gray-500 cursor-pointer'
					/>
					<span className='text-gray-600'>Perfil</span>
				</Link>

				<Link
					href='/'
					className='m-4 p-2 gap-2 flex items-end rounded-md font-medium transition-all hover:bg-gray-100'>
					<IoTicketOutline
						size={25}
						className=' text-gray-500 cursor-pointer'
					/>
					<span className='text-gray-600'>Ordenes</span>
				</Link>

				{isAuthenticated ? (
					<button
						className='m-4 p-2 gap-2 flex items-end rounded-md font-medium transition-all hover:bg-gray-100'
						onClick={() => LogoutUser()}>
						<IoLogOutOutline
							size={25}
							className=' text-gray-500 cursor-pointer'
						/>
						<span className='text-gray-600'>Salir</span>
					</button>
				) : (
					<button
						className='m-4 p-2 gap-2 flex items-end rounded-md font-medium transition-all hover:bg-gray-100'
						onClick={() => LoginUser()}>
						<IoLogInOutline
							size={25}
							className=' text-gray-500 cursor-pointer'
						/>
						<span className='text-gray-600'>Iniciar Sesion</span>
					</button>
				)}

				{role === 'admin' ? (
					<>
						<div className='h-px bg-gray-200 my-10' />

						<Link
							href='/'
							className='m-4 p-2 gap-2 flex items-end rounded-md font-medium transition-all hover:bg-gray-100'>
							<IoShirtOutline
								size={25}
								className=' text-gray-500 cursor-pointer'
							/>
							<span className='text-gray-600'>Productos</span>
						</Link>

						<Link
							href='/'
							className='m-4 p-2 gap-2 flex items-end rounded-md font-medium transition-all hover:bg-gray-100'>
							<IoDocumentsOutline
								size={25}
								className=' text-gray-500 cursor-pointer'
							/>
							<span className='text-gray-600'>Ordenes</span>
						</Link>

						<Link
							href='/'
							className='m-4 p-2 gap-2 flex items-end rounded-md font-medium transition-all hover:bg-gray-100'>
							<IoPeopleOutline
								size={25}
								className=' text-gray-500 cursor-pointer'
							/>
							<span className='text-gray-600'>Usuarios</span>
						</Link>
					</>
				) : (
					''
				)}
			</nav>
		</div>
	);
};
