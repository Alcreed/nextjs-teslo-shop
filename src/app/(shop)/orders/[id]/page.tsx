import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";

import { initialData } from "@/seed/seed";

import { Title } from "@/components";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  params: {
    id: string
  }
}

export default function OrderPage({ params }: Props) {
  const { id } = params

  // TODO Verificar id
  // redirect()

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/** Carrito */}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true
                }
              )
            }>
              <IoCartOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Pagada</span>
            </div>

            {/** Items */}
            <div className="flex flex-col gap-2">
              {
                productsInCart.map(product => (
                  <div key={product.slug} className="flex">
                    <Image
                      src={`/products/${product.images[0]}`}
                      width={100}
                      height={100}
                      style={{
                        width: '100px',
                        height: '100px'
                      }}
                      alt={product.title}
                      className="mr-5 rounded"
                    />
                    <div>
                      <p>{product.title}</p>
                      <p>${product.price} x 3</p>
                      <p className="font-bold">Subtotal: ${product.price * 3}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/** Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl font-bold mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-2xl">Alfonso Gonzalez</p>
              <p>Calle falsa 123</p>
              <p>Colombia</p>
              <p>Zipaquirá</p>
              <p>CP 250252</p>
              <p>123 123 1231</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="text-2xl mt-5 ">Total</span>
              <span className="text-2xl text-right mt-5">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <div className={
                clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    'bg-red-500': false,
                    'bg-green-700': true
                  }
                )
              }>
                <IoCartOutline size={30} />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
