import { ComponentProps, ComponentType, ElementType, ReactNode } from "react"

type ButtonProps = {
  variant: "primary" | "secondary"
  children: string
} & Omit<ComponentProps<"button">, "children">

export const CustomButton = ({ children, variant, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>
}

/////////////////

type PrivateProps = {
  component: ComponentType<ButtonProps>
}

export const Private = ({ component: Component }: PrivateProps) => {
  return <Component children="btn" type="button" variant="primary" />
}

export const PrivateComponentTesting = () => {
  return <Private component={CustomButton} />
}

/////////////////

type TextOwnProps<E extends ElementType> = {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "secondary"
  children: ReactNode
  as?: E
}

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps<E>>

export const Text = <E extends ElementType = "div">({
  children,
  color,
  size,
  as,
}: TextProps<E>) => {
  const Component = as || "div"
  return (
    <>
      <Component>{children}</Component>
    </>
  )
}

/////////////////

type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List</h2>
      {items.map((item, index) => (
        <div key={item.id} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  )
}
