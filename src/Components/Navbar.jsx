import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
        {currentRoute === "/" ? 'Contacts' : 'Charts and Maps'}
      </h1>
    </nav>
  );
}

export default Navbar;
