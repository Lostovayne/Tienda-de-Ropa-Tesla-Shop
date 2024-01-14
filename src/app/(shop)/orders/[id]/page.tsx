import { Title } from "@/components";
import { cn } from "@/lib/twMerge";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

interface Props {
    params: {
        id: string;
    };
}

export default function OrderIdPage({ params: { id } }: Props) {
    // Todo: verificar id de orden
    // redirect(/) en caso de no ser su id

    return (
        <div className="flex justify-center items-center mb-72 px-1 sm:px-0 ">
            <div className="flex flex-col w-full  xl:w-[1000px] ">
                <Title title={`Orden #${id}`} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <div
                            className={cn("flex items-center rounded-lg py-2 px-3.5 font-bold text-xs mb-5", {
                                "bg-red-200/60 text-red-500": false,
                                "bg-emerald-200/60 text-emerald-500": true,
                            })}
                        >
                            <IoCardOutline size={30} />
                            <span className="mx-2"> Pendiente de pago</span>
                        </div>

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
                                    <p>${product.price} x 3</p>
                                    <p className="font-medium">Subtotal: ${product.price * 3}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Checkout */}

                    <section>
                        <div className="bg-white rounded-xl shadow-lg p-7">
                            <h2 className="text-xl font-semibold mb-2">Información de envío</h2>
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
                            <div className="mb-10 w-full h-0.5 rounded bg-gray-200"></div>
                            {/* Informacion producto */}
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
                                <div
                                    className={cn("flex items-center rounded-lg py-2 px-3.5 font-bold text-xs mb-5", {
                                        "bg-red-200/60 text-red-500": false,
                                        "bg-emerald-200/60 text-emerald-500": true,
                                    })}
                                >
                                    <IoCardOutline size={30} />
                                    <span className="mx-2"> Pendiente de pago</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
