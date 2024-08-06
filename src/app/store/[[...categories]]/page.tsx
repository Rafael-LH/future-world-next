import { ProductsWrapper } from "app/components/Store/ProductsWrapper/ProductsWrapper";
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[],
    searchParams: string,
  }
}

const Category = async (props: CategoryProps) => {
  const { params: { categories }, searchParams } = props;

  let products = []
  const collections = await getCollections()

  if(categories?.length > 0) { 
     const selectedCollectionId = collections.find((collection) => collection.handle === categories[0])?.id
     products = await getCollectionProducts(selectedCollectionId)
  }else{
    products = await getProducts()
  } 

  return (
    <ProductsWrapper products={products} />
  )
}

export default Category