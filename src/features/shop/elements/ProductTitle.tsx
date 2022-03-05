// import { Typography, TypographyProps } from "@mui/material"
// import { ComponentProps, ElementType, HTMLAttributes } from "react"

// export const ProductTitle = (props: TypographyProps) => (
//   <Typography variant="subtitle2" gutterBottom {...props} />
// )

import { Typography, TypographyProps } from "@mui/material"
import { ComponentProps, ElementType, HTMLAttributes } from "react"

type TitleProps = {
  title: string
} & Omit<TypographyProps, "children">

export const ProductTitle = ({ title, ...props }: TitleProps) => (
  <Typography variant="subtitle2" gutterBottom {...props}>
    {title}
  </Typography>
)

// type Title4Props = {
//   component: ElementType<HTMLAttributes<HTMLDivElement>>
// } & TypographyProps

// export const Title4 = (props: Title4Props) => {
//   return (
//     <div>
//       <Typography {...props}>h1. Heading</Typography>
//     </div>
//   )
// }
