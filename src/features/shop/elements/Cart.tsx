import { Fragment } from "react"
import { Link } from "react-router-dom"

import { CartItem } from "./CartItem"
import { useCartTotal, useCartState } from "../hooks"
import { ClearCart } from "./ClearCart"
import { DiscountInput } from "./DiscountInput"
import { CartTotal } from "./CartTotal"

export const Cart = () => {
  const { cartTotalInEuro } = useCartTotal()
  const { cart } = useCartState()

  return (
    <Fragment>
      <h2>CART PAGE</h2>
      {!cart.products.length ? <Link to="/">shop now</Link> : null}
      {cart.products.length ? (
        <>
          <CartTotal />
          <DiscountInput />
          <ClearCart />
        </>
      ) : null}
      {cart.products.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
    </Fragment>
  )
}
