import { Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";

export default function CartPage() {
  // redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-1 sm:px-0">
      <div className="flex flex-col w-full xl:w-[1000px]">
        <Title title="Carrito" />
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Agregar más productos </span>
            <Link href="/" className="mb-5 underline">
              Continúa comprando
            </Link>
            {/* Items */}
            <ProductsInCart />
          </div>
          {/* Checkout */}

          <section>
            <div className="bg-white shadow-lg p-7 rounded-xl">
              <h2 className="mb-2 font-semibold text-xl">Resumen de orden</h2>
              <OrderSummary />
              <div className="mt-5 mb-2 w-full">
                <Link className="flex justify-center btn-primary" href="/checkout/address">
                  Checkout
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
