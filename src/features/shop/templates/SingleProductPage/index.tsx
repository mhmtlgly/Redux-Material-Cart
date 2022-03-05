import { Box, Typography } from "@mui/material"
import { useParams } from "react-router-dom"

import { Layout } from "components"
import { useProducts } from "features/shared/api"
import {
  AddOrRemoveButton,
  QuantityInput,
  ProductImage,
  ProductRating,
  ProductTitle,
  ProductInfo,
  ProductDeliveryTime,
} from "features/shop/elements"
import { RecommendedProducts } from "features/shop/components"
import { Breadcrumb } from "./Breadcrumb"
import { amountToEuro } from "utils"

export const SingleProductPageTemplate = () => {
  const { products } = useProducts()
  const { productId } = useParams()

  const product = products.filter((product) => product.id === productId)[0]
  //  const product = products.find((product) => product.id === productId)!

  return (
    <Layout>
      <Box>
        <Box sx={{ minHeight: "100vh" }}>
          {/* HEADER */}

          <Box
            sx={{
              p: 5,
            }}
          >
            <Breadcrumb />
          </Box>

          {/* PRODUCT DETAILS */}

          <Box
            sx={{
              p: 5,
            }}
          >
            <ProductTitle variant="h2" title={product.model} />
            <ProductRating {...product.rating} />
            <Box display={"flex"} my={5}>
              <ProductImage src={product.img} height={400} width="auto" />
              <Box
                sx={{
                  display: "grid",
                  justifyContent: "center",
                  // justifyItems: "center",
                }}
              >
                <Box>
                  <Typography variant="button" component="p">
                    {product.brand} {product.model}
                  </Typography>
                  <Typography variant="button" component="p">
                    {product.storage} GB Storage
                  </Typography>
                  <Typography variant="button" component="p">
                    {amountToEuro(product.price)}
                  </Typography>
                  <Typography variant="button" component="p">
                    {product.screen} inch screen
                  </Typography>
                  <ProductDeliveryTime
                    deliveryTime={product.deliveryTime}
                    stock={product.stock}
                  />
                </Box>
                <Box>
                  <QuantityInput {...product} quantity={3} />
                  <Box>
                    <AddOrRemoveButton
                      cartItem={{ ...product, quantity: 1 }}
                      fullWidth
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <ProductInfo />
          </Box>
        </Box>

        {/* RECOMMENDED PRODUCTS */}

        <RecommendedProducts productId={product.id} />
      </Box>
    </Layout>
  )
}
