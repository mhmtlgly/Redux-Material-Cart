import { useState } from "react"

import { Layout } from "components"
import { Filters } from "features/filters/components"
import { Pagination } from "./Pagination"
import { Products } from "./Products"

export const AllProductsPageTemplate = () => {
  const [page, setPage] = useState(1)
  return (
    <Layout>
      <Filters />
      <Products page={page} />
      <Pagination page={page} setPage={setPage} />
    </Layout>
  )
}
