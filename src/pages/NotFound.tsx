import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import './NotFound.scss';

export default function NotFound() {
  return (
    <>
      <Navbar
        title="Page not found"
        description="We believe data can accelerate Africa's development."
      />
      <div className="page-not-found d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 style={{ fontSize: 150 }}>404</h1>
          <h2 className="main-title">Page not found</h2>
          <Link to="/" className="btn px-4 py-2">
            Go to home page
          </Link>
        </div>
      </div>
    </>
  );
}
