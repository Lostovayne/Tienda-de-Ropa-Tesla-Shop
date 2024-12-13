export const revalidate = 60;

//** Revalidar la pagina cada 60 segundos **/

import { getPaginateProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  // Traer los elementos desde la bd
  const { products, currentPage, totalPage } = await getPaginateProductsWithImages({ page });
  if (products.length === 0) {
    redirect('/');
  }
  return (
    <>
      <Title title='Tienda' subtitle='Todos los productos' />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPage} />
    </>
  );
}
