import { Link } from 'react-router-dom';
import { contact, socialMedia } from '@/data/contact';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  const mailto = `mailto:${contact.email}`;

  return (
    <div className="footer">
      <div className="container pt-9">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3 className="sentence-title mb-4">Eloquent Data</h3>
            <p className="paragraph-small">
              The Eloquent Data (ELDA) Program is a Pan-African data community that provides data
              enthusiasts with the skills and mentorship needed to solve data challenges.
            </p>
            <p className="paragraph-small">
              <i className="fa fa-envelope-open-text" />
              <a href={mailto} target="_blank" rel="noopener noreferrer">
                &nbsp; {contact.email}
              </a>
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <h4 className="sub-title mb-4">Useful links</h4>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Link to="/about"><p className="paragraph-small">Who we are</p></Link>
                <Link to="/projects"><p className="paragraph-small">Projects</p></Link>
                <Link to="/academy"><p className="paragraph-small">Academy</p></Link>
                <Link to="/insights"><p className="paragraph-small">Insight</p></Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Link to="/privacy"><p className="paragraph-small">Privacy policy</p></Link>
                <Link to="/terms"><p className="paragraph-small">Terms of service</p></Link>
                <Link to="/contact"><p className="paragraph-small">Contact Us</p></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="icons main-title">
          <a href={socialMedia.tw} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter pr-4" />
          </a>
          <a href={socialMedia.ln} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in pr-4" />
          </a>
          <a href={socialMedia.fb} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f pr-4" />
          </a>
          <a href={socialMedia.ig} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram pr-4" />
          </a>
        </div>
      </div>
      <div className="paragraph-small copyright py-3 text-center">
        &copy;{year} Eloquent Data, All right reserved.
      </div>
    </div>
  );
}
