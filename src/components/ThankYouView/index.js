import './index.css'
import {Link} from 'react-router-dom'
import Header from '../Header/index'

const ThankYouView = () => (
  <>
    <Header />
    <div className="thank-view-bg-container">
      <h1 className="heading">Thank you for shopping with us</h1>
      <Link to="/products" className="nav-link">
        <button type="button" className="button">
          Continue Shopping
        </button>
      </Link>
    </div>
  </>
)

export default ThankYouView
