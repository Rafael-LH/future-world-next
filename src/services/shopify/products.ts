import { env } from "app/config/env"
import { shopifyURLS } from "./urls"

export const getProducts = async (id?: string): Promise<ProductType []> => {
  try {
    const apiURL = id ? `${shopifyURLS.products.all}?ids=${id}` : shopifyURLS.products.all
    const response = await fetch(apiURL, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || ""
      })
    })
    const { products } = await response.json()
    const formattedProducts = products?.map((product: any) => {
      const [variant] = product.variants
      const [image] = product.images
      return {
        id: product.id,
        gql_id: variant.admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: variant.price,
        image: image.src,
        quantity: variant.inventory_auantity,
        handle: product.handle,
        tags: product.tags,
      }
    });

    return formattedProducts || []
  } catch (error) {
   console.error(error) 
  }
}

export const getMainProducts = async () => {
  const response = await fetch(shopifyURLS.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
    }),
    cache: "force-cache",
    next: {
      tags: ['main-products']
    },
    // cache: "no-cache" / "force-cache"
    // no-cache Para datos que son bastante dinamicos (No muy recomendado)
    // force-cache (Para datos que es poco probable que cambien)
    // next: {
    //   revalidate: 10 // Re valida la cache en segundos (Muy recomendado)
    // }
  })

  const { products } = await response.json()

  return products
}