import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./cartR"
import { getProducts } from "./productsR"
import { useNavigate } from "react-router-dom"

import { IconButton } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import VisibilityIcon from "@mui/icons-material/Visibility"

function Products() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector(state => state.products.list)
  const loading = useSelector(state => state.products.loading)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (loading) return <div className="spinner"></div>

  return (
    <div className="cards">

      {products.map(p => (
        <div className="card" key={p.id}>

          {/* IMAGE */}
          <div
            className="img-wrapper"
            onClick={() => navigate(`/Product/details/${p.id}`)}
          >
            <img src={p.images?.[0]} alt={p.title} />
          </div>

          {/* BODY */}
          <div className="card-body">
            <h4>{p.title}</h4>
            <p className="price">{p.price} $</p>

            <div className="icons">

              {/* ADD TO CART */}
              <IconButton
                onClick={() => dispatch(addToCart(p))}
              >
                <AddIcon />
              </IconButton>

              {/* DETAILS */}
              <IconButton
                onClick={() => navigate(`/Product/details/${p.id}`)}
              >
                <VisibilityIcon />
              </IconButton>

            </div>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Products