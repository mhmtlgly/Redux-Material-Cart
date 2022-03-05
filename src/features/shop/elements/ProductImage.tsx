import { ComponentProps } from "react"

export const ProductImage = (props: ComponentProps<"img">) => {
  return (
    <img
      style={{ objectFit: "contain" }}
      height={100}
      // width={"100%"}
      width={200}
      {...props}
    />
  )
}
