import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

export default function CheckoutPage() {
    return (
        <div className="mb-72 flex items-center justify-center px-1 sm:px-0">
            <div className="flex w-full flex-col xl:w-[1000px]">
                <Title title="Verificar orden" />
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                    {/* Carrito */}
                    <div className="mt-5 flex flex-col">
                        {/* <span className="text-xl"> Ajustar elementos </span> */}
                        <Link href="/cart" className="mb-5 underline">
                            Editar carrito
                        </Link>

                        {/* Items */}

                        {productsInCart.map((product) => (
                            <div key={product.slug} className="mb-5 flex xl:mb-3">
                                <Image
                                    src={`/products/${product.images[0]}`}
                                    alt={product.title}
                                    width={100}
                                    height={100}
                                    className="mr-5 h-[100px] w-[100px] rounded-xl border object-fill"
                                />
                                <div>
                                    <p>{product.title}</p>
                                    <p>${product.price} x 3</p>
                                    <p className="font-medium">Subtotal: ${product.price * 3}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Checkout */}

                    <section>
                        <div className="rounded-xl bg-white p-7 shadow-lg">
                            <h2 className="mb-2 text-xl font-semibold">Información de envío</h2>
                            <div className="mb-10">
                                <p>Epsaind Barrera</p>
                                <p>Av. Siempre viva 123</p>
                                <p>Col. Centro</p>
                                <p>Alcaldía Cuautémoc</p>
                                <p>Ciudad de Narnia</p>
                                <p>CP 1234412</p>
                                <p>123.123.123</p>
                            </div>

                            {/* Divider */}
                            <div className="mb-10 h-0.5 w-full rounded bg-gray-200"></div>
                            {/* Informacion producto */}
                            <h2 className="mb-2 text-xl font-semibold">Resumen de orden</h2>
                            <div className="grid grid-cols-2">
                                <span className="text-base font-medium">No. Productos</span>
                                <span className="text-right text-base">3 artículos</span>

                                <span className="text-base font-medium">Subtotal</span>
                                <span className="text-right text-base">$ 100</span>

                                <span className="text-base">Impuestos (15%) </span>
                                <span className="text-right text-base">$ 100</span>

                                <span className="mt-5 text-xl">Total:</span>
                                <span className="mt-5 text-right text-xl">$ 100</span>
                            </div>
                            <div className="mb-2 mt-5 w-full">
                                {/* Disclamer */}
                                <p className="mb-5">
                                    <span className="text-sm">
                                        Al hacer click en &quot;Realizar orden&quot; aceptas nuestros{" "}
                                        <a href="#" className="underline">
                                            términos y condiciones
                                        </a>{" "}
                                        y nuestra{" "}
                                        <a href="#" className="underline">
                                            politica de privacidad
                                        </a>
                                    </span>
                                </p>

                                <Link className="btn-primary flex justify-center" href="/orders/1234">
                                    Realizar orden
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
