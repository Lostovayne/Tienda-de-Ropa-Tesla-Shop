import { Footer, Sidebar, TopMenu } from '@/components';
import { SidebarUi } from '@/components/ui/sidebar/sidebar-ui';

export const metadata = {
  title: 'Shop | Tesla',
  description: 'Tienda de ropa online',
};
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='mx-auto min-h-screen max-w-[1400px]'>
      <TopMenu />
      {/* <Sidebar /> */}
      <SidebarUi />
      <div className='px-4 sm:px-10'> {children}</div>
      <Footer />
    </main>
  );
}
