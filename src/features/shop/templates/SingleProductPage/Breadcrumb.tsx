import { Typography, Breadcrumbs, Hidden } from "@mui/material"
import { Link, useLocation } from "react-router-dom"

export const Breadcrumb = () => {
  const { pathname } = useLocation()
  const paths = pathname.split("/").filter((x) => x)
  return (
    <Hidden>
      <Breadcrumbs separator=">">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1
          const route = paths.slice(0, index + 1).join("/")
          return isLast ? (
            <Typography variant="button" key={path}>
              {path}
            </Typography>
          ) : (
            <Typography variant="button" key={path}>
              <Link key={path} to={`/${route}`}>
                {path}
              </Link>
            </Typography>
          )
        })}
      </Breadcrumbs>
    </Hidden>
  )
}
