import { Link } from "react-router-dom"
import { Box } from "@mui/material"

import { useFilteredProducts } from "features/filters/hooks"
import {
  AddOrRemoveButton,
  ProductCard,
  ProductTitle,
  ProductImage,
  ProductDiscount,
} from "features/shop/elements"

export const Products = ({ page }: { page: number }) => {
  const filteredProducts = useFilteredProducts()
  const itemsPerPage = 4

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {filteredProducts
        .splice((page - 1) * itemsPerPage, itemsPerPage)
        .map((product) => {
          const { id, model, brand, img, discount } = product
          return (
            <ProductCard key={id}>
              <ProductDiscount discount={discount} />
              <Link to={`/products/${id}`}>
                <ProductTitle title={model} />
              </Link>
              <ProductImage src={img} height={100} width="100%" />
              <AddOrRemoveButton cartItem={{ ...product, quantity: 1 }} />
            </ProductCard>
          )
        })}
    </Box>
  )
}
