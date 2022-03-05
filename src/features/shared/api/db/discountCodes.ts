import { DiscountType } from "types"

export const discountCodes: DiscountType[] = [
  {
    amount: 10,
    code: "10OFF",
    status: "active",
    type: "percent",
  },
  {
    amount: 10,
    code: "FREE10",
    status: "active",
    type: "dollar",
  },
  {
    amount: 20,
    code: "20P",
    status: "expired",
    type: "percent",
  },
]
