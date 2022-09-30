import { Link } from 'react-router-dom';

export default function Nav (props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </nav>
  )
}