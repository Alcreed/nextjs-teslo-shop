export const revalidate = 60; // 60 segundos

import { redirect } from "next/navigation";
import { Gender } from "@prisma/client";

import { getPaginatedProductsWithImages } from "@/actions";

import { Pagination, ProductGrid, Title } from "@/components";

interface Props {
  params: {
    gender: string
  },
  searchParams: {
    page?: string
  }
}

export default async function GenderPage({ params, searchParams }: Props) {
  const { gender } = params

  const page = searchParams.page ? parseInt(searchParams.page) : 1
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, gender: gender as Gender })

  if (products.length === 0) {
    redirect(`/gender/${gender}`)
  }

  const labels: Record<string, string> = {
    men: 'para hombres',
    women: 'para mujeres',
    kid: 'para niños',
    unisex: 'para todos'
  }

  // if (id === 'kids') {
  //   notFound()
  // }

  return (
    <div>
      <Title
        title={`Articulos ${labels[gender]}`}
        subTitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </div>
  );
}
