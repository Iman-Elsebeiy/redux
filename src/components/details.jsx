import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from "./cartR"

function Details() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.list)

  const product = products.find(p => p.id === Number(id))

  // 👇 مهم عشان لو الداتا لسه مجاتش
  if (!product) return <p>Loading...</p>

  return (
    <div className="details-page">
      <div className="details-container">

        <div className="details-img-box">
          <img src={product.images?.[0]} alt={product.title} />
        </div>

        <div className="details-info">
          <h3>{product.title}</h3>

          <h2 className="price">
            {product.price} $
          </h2>

          <p>Status: {product.availabilityStatus}</p>
          <p>Weight: {product.weight}</p>
          <p>Barcode: {product.barcode}</p>

          <button
            className="add-btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default Details