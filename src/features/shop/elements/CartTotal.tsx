import { useCartTotal, useCheckDiscount } from "../hooks"

export const CartTotal = () => {
  const { isDiscount } = useCheckDiscount()
  const { cartTotalInEuro, cartTotalWithDiscount, discountAmount } =
    useCartTotal()

  return (
    <>
      <h2>CART TOTAL</h2>
      <p>total: {cartTotalInEuro}</p>
      {isDiscount ? (
        <>
          <p>discount: {discountAmount}</p>
          <p>new cart total: {cartTotalWithDiscount}</p>
        </>
      ) : null}
    </>
  )
}
