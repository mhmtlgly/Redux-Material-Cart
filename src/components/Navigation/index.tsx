import { List, ListItem } from "@mui/material"
import { Link } from "react-router-dom"

export const Navigation = () => (
  <nav>
    <List>
      <ListItem>
        <Link
          to="/products"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: 20,
          }}
        >
          Products
        </Link>
      </ListItem>
    </List>
  </nav>
)
