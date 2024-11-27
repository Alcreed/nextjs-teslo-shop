// import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Gender } from "@prisma/client";

interface Props {
  params: {
    gender: string
  },
  searchParams: {
    page?: string
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
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
