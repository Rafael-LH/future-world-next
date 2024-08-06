import { env } from "app/config/env"
import { shopifyURLS } from "./urls"

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyURLS.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || ""
      })
    })
    const {smart_collections} = await response.json()
    const formattedCollection = smart_collections.map((collection: any) => ({
      id: collection.id,
      title: collection.title,
      handle: collection.handle,
    }))

    return formattedCollection
  } catch (error) {
   console.error(error) 
  }
}

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(shopifyURLS.collections.products(id), {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN || ""
      })
    })
    const { products } = await response.json()

    return products
  } catch (error) {
   console.error(error) 
  }
}