import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

interface NavbarProps {
  title: string;
  description?: string;
}

const WHITE_BG_PAGES = ['Home', 'Events'];

const NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Academy', path: '/academy' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ title, description = '' }: NavbarProps) {
  const location = useLocation();
  const isWhite = WHITE_BG_PAGES.includes(title);

  useEffect(() => {
    document.title = `${title} - Eloquent Data`;

    const setMeta = (attrs: { name?: string; property?: string; content: string }) => {
      const key = attrs.name ? `name` : `property`;
      const val = attrs.name ?? attrs.property!;
      let el = document.querySelector<HTMLMetaElement>(`meta[${key}="${val}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      el.content = attrs.content;
    };

    const url = window.location.href;
    const ogTitle = `${title} - Eloquent Data`;
    const img = 'https://eloquentdata.com/assets/img/eloquentdata.png';

    [
      { name: 'keywords', content: 'eloquent data, data training, data in Africa, data analysis, data analysis in africa, data project in africa, data training in africa, power bi, excel, data project' },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:site_name', content: ogTitle },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: img },
      { property: 'og:image:secure_url', content: img },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: ogTitle },
      { property: 'twitter:description', content: description },
      { property: 'twitter:url', content: url },
      { property: 'twitter:image', content: img },
    ].forEach(setMeta);
  }, [title, description]);

  return (
    <div className={isWhite ? 'navbar-wrapper' : 'navbar-wrapper navbar-wrapper--orange'}>
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
            title="Toggle navigation"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={label} className="nav-item mr-4">
                  <Link
                    className={`nav-link${location.pathname === path ? ' nav-link--active' : ''}`}
                    to={path}
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
