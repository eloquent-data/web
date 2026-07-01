import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './Navbar.scss';

interface NavbarProps {
  title: string;
  description?: string;
}

const NAV_LINKS = [
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/academy', label: 'Academy' },
  { path: '/insights', label: 'Insights' },
  { path: '/contact', label: 'Contact' },
];

const WHITE_BG_PAGES = ['Home', 'Events'];

export default function Navbar({ title, description }: NavbarProps) {
  const location = useLocation();
  const isWhite = WHITE_BG_PAGES.includes(title);

  useEffect(() => {
    document.title = `${title} - Eloquent Data`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && description) desc.setAttribute('content', description);
  }, [title, description]);

  return (
    <div style={{ backgroundColor: isWhite ? 'transparent' : '#F8a41d' }}>
      <div className="navbar-width pt-3">
        <nav className="navbar navbar-expand-sm navbar-light">
          <Link className="navbar-brand" to="/">
            <img
              src={isWhite ? '/assets/img/logo.png' : '/assets/img/logo2.png'}
              alt="Eloquent Data"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {NAV_LINKS.map(({ path, label }) => (
                <li key={path} className="nav-item mr-4">
                  <Link
                    className="nav-link"
                    to={path}
                    style={{
                      fontWeight: location.pathname === path ? 700 : 400,
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
