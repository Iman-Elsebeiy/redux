import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, removeItem, clearCart } from "./cartR"

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.list)

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qnty, 0)

  return (
    <div className="cart-page">

      <div className="cart-header">
        <h2>🛒 Shopping Cart</h2>
        {cartItems.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <p className="empty">Your cart is empty 🌿</p>
      )}

      <div className="cart-container">

        {/* ITEMS */}
        <div className="cart-items">
          {cartItems.map(item => {
            const stockLeft = item.stock

            return (
              <div key={item.id} className="cart-card">

                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="cart-img"
                />

                <div className="cart-info">
                  <h4>{item.title}</h4>

                  <p className="price">{item.price} $</p>

                  {stockLeft === 0 ? (
                    <p className="out">Out of stock</p>
                  ) : (
                    <p className="in">In stock ({stockLeft})</p>
                  )}

                  <div className="qty">
                    <button onClick={() => dispatch(decrement(item.id))}>−</button>
                    <span>{item.qnty}</span>
                    <button
                      disabled={item.qnty >= stockLeft}
                      onClick={() => dispatch(increment(item.id))}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>

                <div className="subtotal">
                  {(item.price * item.qnty).toFixed(2)} $
                </div>

              </div>
            )
          })}
        </div>

        {/* SUMMARY */}
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h3>Total</h3>
            <h2>{totalPrice.toFixed(2)} $</h2>

            <button className="checkout">
              Checkout
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Cart