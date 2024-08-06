import { GraphQLClientSingleton } from "app/graphql/index"
import { customerName } from "app/graphql/queries/customerName"
import { cookies } from "next/headers"

export const validateAccessToken = async () => {
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get("accessToken")?.value;
  
  if(!accessToken) return null
  
  const graphqlClient =  GraphQLClientSingleton.getInstance().getClient();
  const { customer } = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken,
  })

  return customer
}