// Props is passed as an object, so all we're ding here is parameter descructuring which is not new to react, it's possible thorugh ES6
import {
  Link,
  useLocation
} from 'react-router-dom';

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs bg-light">
      <li className="nav-item">
        <Link
          to="/SeguraReactPortfolio"
          className={location.pathname === "/SeguraReactPortfolio/" ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/SeguraReactPortfolio/about"
          className={location.pathname === "/SeguraReactPortfolio/about" ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/SeguraReactPortfolio/Portfolio"
          className={location.pathname === "/SeguraReactPortfolio/Porfolio" ? 'nav-link active' : 'nav-link'}
        >
          Porfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/SeguraReactPortfolio/contact"
          className={location.pathname === "/SeguraReactPortfolio/contact" ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
