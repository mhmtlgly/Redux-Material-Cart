import { Box, BoxProps, Typography } from "@mui/material"

import { products } from "features/shared/api/db"

import {
  AddOrRemoveButton,
  ProductImage,
  ProductCard,
  ProductRating,
  ProductPrice,
  ProductDiscount,
  ProductTitle,
} from "features/shop/elements"

type RecommendedProductsType = {
  productId: number
} & BoxProps

export const RecommendedProducts = ({
  productId,
  ...props
}: RecommendedProductsType) => {
  return (
    <>
      <Typography variant="h5" component={"h2"} gutterBottom>
        Other Products in this Category
      </Typography>
      <Box {...props} sx={{ display: "flex", overflow: "scroll", gap: 1 }}>
        {products
          .filter((product) => product.id !== productId)
          .map((product) => {
            const { id, img, price, discount, model } = product

            return (
              <ProductCard
                key={id}
                sx={{
                  display: "grid",
                  gridTemplateRows: "1fr auto 1fr",
                  justifyContent: "center",
                  textAlign: "center",
                  p: 3,
                  pt: 5,
                  gap: 1,
                  position: "relative",
                }}
              >
                <ProductDiscount discount={discount} />
                <ProductTitle title={model} />
                <ProductImage src={img} />
                <ProductPrice amount={price} discount={discount} />
                <ProductRating {...product.rating} />
                <AddOrRemoveButton cartItem={{ quantity: 1, ...product }} />
              </ProductCard>
            )
          })}
      </Box>
    </>
  )
}
