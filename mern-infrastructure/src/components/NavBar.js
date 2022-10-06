import { Link } from 'react-router-dom';

export default function NavBar (props) {
  return (
    <nav>
      <Link to="/orders">Order History</Link>&nbsp;
      <Link to="/orders/new">New Order</Link>
    </nav>
  )
}