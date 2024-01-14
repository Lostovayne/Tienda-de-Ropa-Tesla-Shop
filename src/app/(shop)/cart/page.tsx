import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

export default function CartPage() {
    // redirect("/empty");

    return (
        <div className="flex justify-center items-center mb-72 px-1 sm:px-0 ">
            <div className="flex flex-col w-full  xl:w-[1000px] ">
                <Title title="Carrito" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl"> Agregar más productos </span>
                        <Link href="/" className="mb-5 underline">
                            Continúa comprando
                        </Link>

                        {/* Items */}

                        {productsInCart.map((product) => (
                            <div key={product.slug} className="flex mb-5 xl:mb-3">
                                <Image
                                    src={`/products/${product.images[0]}`}
                                    alt={product.title}
                                    width={100}
                                    height={100}
                                    className="mr-5 rounded-xl border object-fill w-[100px] h-[100px]"
                                />
                                <div>
                                    <p>{product.title}</p>
                                    <p>${product.price}</p>
                                    <QuantitySelector quantity={1} />
                                    <button className="underline">Remover</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Checkout */}

                    <section>
                        <div className="bg-white rounded-xl shadow-lg p-7">
                            <h2 className="text-xl font-semibold mb-2">Resumen de orden</h2>
                            <div className="grid grid-cols-2">
                                <span className="text-base font-medium">No. Productos</span>
                                <span className="text-right text-base">3 artículos</span>

                                <span className="text-base font-medium">Subtotal</span>
                                <span className="text-right text-base">$ 100</span>

                                <span className=" text-base">Impuestos (15%) </span>
                                <span className="text-right text-base">$ 100</span>

                                <span className="mt-5 text-xl ">Total:</span>
                                <span className="mt-5 text-xl text-right ">$ 100</span>
                            </div>
                            <div className="mt-5 mb-2 w-full">
                                <Link className="flex btn-primary justify-center" href="/checkout/address">
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
