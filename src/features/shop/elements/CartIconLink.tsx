import { Badge } from "@mui/material"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

import { useNumberOfProductsInCart } from "../hooks"

export const CartIconLink = () => {
  const { numberOfProducts } = useNumberOfProductsInCart()

  return (
    <Link to={"/cart"}>
      <Badge
        color="secondary"
        overlap="circular"
        badgeContent={numberOfProducts}
      >
        <Icon icon="akar-icons:cart" color="white" height={35} />
      </Badge>
    </Link>
  )
}
