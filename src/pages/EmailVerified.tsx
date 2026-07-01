import { Link } from 'react-router-dom';
import './EmailVerified.scss';

export default function EmailVerified() {
  return (
    <div className="email-verified d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="main-title">Email Verified</h1>
        <p className="sub-title mt-4">Your email address has been successfully verified.</p>
        <Link to="/" className="btn btn-primary mt-5 px-5 py-2">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
