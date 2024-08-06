import { ProductView } from "app/components/product/ProductView/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export async function generateMetadata(props: ProductPageProps){
  const { searchParams: { id } } = props
  const products = await getProducts(id)
  const product = products?.[0]

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }

}

const ProductPage = async(props: ProductPageProps) => {
  const { searchParams: { id } } = props
  const products = await getProducts(id)
  const product = products?.[0]

  if(!id) redirect('/store')

  return <ProductView product={product} />
}

export default ProductPage