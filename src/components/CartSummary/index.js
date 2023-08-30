// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const cartItemCount = cartList.length
      let orderTotal = 0

      cartList.forEach(cartItem => {
        const {price, quantity} = cartItem
        orderTotal += price * quantity
      })

      const onRemoveAllCartItems = () => {
        removeAllCartItems()
      }

      return (
        <div className="cart-summary-container">
          <h1 className="cart-total-heading">
            Order Total: <span className="cart-total">Rs {orderTotal}/- </span>
          </h1>
          <p className="item-count">{cartItemCount} items in cart</p>
          <Link to="/thank-you">
            <button
              className="checkout-button"
              type="button"
              onClick={onRemoveAllCartItems}
            >
              Checkout
            </button>
          </Link>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
