import { Outlet } from 'react-router';
import { CartProvider } from '~/components/cart/cart-context';
import { CartDrawer } from '~/components/cart/cart-drawer';
import { Toast } from '~/components/ui/toast';
import { Footer } from './footer';
import { Navbar } from './navbar';

export default function BaseLayout() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-fornace-sienna selection:text-white">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl p-4 md:p-8">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <Toast />
      </div>
    </CartProvider>
  );
}
