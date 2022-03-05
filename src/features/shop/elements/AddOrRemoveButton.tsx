import { Button, ButtonProps } from "@mui/material"

import { CartItemType } from "types"
import { useCartState } from "features/shop/hooks"
import { RemoveFromCardButton, AddToCartButton } from "features/shop/elements"

type AddOrRemoveButtonType = {
  cartItem: CartItemType
} & ButtonProps

export const AddOrRemoveButton = ({
  cartItem,
  ...props
}: AddOrRemoveButtonType) => {
  const { cart } = useCartState()

  return (
    <>
      {cart.products.some((p) => p.id === cartItem.id) ? (
        <RemoveFromCardButton
          cartItem={cartItem}
          color="warning"
          variant="contained"
          {...props}
        />
      ) : cartItem.stock ? (
        <AddToCartButton
          cartItem={cartItem}
          color="success"
          variant="contained"
          {...props}
        />
      ) : (
        <Button variant="contained" disabled={cartItem.stock === 0}>
          out of stock
        </Button>
      )}
    </>

    //  <Fragment>
    //   {cartItem.stock > 0 ? (
    //     <Button
    //       variant="contained"
    //       onClick={() => dispatch(addToCart({ ...cartItem }))}
    //       disabled={cartItem.stock === 0}
    //       style={{
    //         background: theme.palette.success.light,
    //       }}
    //     >
    //       {cartItem.stock > 0 ? "add to cart" : "out of stock"}
    //       {cart.some((p) => p.id === cartItem.id) ? "remove" : "add"}
    //     </Button>
    //   ) : null}
    // </Fragment>
  )
}
