import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.sass'

// Con esto le indicamos que el runtime que debe de utilizar no es el de NodeJS
// Si no que el de NextResponse
// export const runtime = "edge"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections.map((collection: any) => (
              <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                {collection.title}
              </Link>
            ))
          }
        </ul>
      </nav>
      {children}
    </main>
  )
}