import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Paragraph from '@/components/Paragraph';
import Footer from '@/components/Footer';
import { tracks, testimonials } from '@/data/academy';
import { training_link } from '@/data/home';
import './Academy.scss';

const paragraphSentence =
  'Our academy offer free short virtual trainings to working professionals on request. The short courses to be taught are selected based on the individual or organization data skillset needs for their professional development.';

export default function Academy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar title="Academy" description={paragraphSentence} />
      <TitleHeader title="Academy" />

      <Paragraph
        boldTitle="Academy"
        paragraphSentence={paragraphSentence}
        bgColor="#ffffff"
        mgT="0"
        mgB="-150px"
      />

      {/* Training tracks */}
      <div className="courses container" style={{ textAlign: 'center' }}>
        <div className="row mt-8 mb-8">
          {tracks.map((track) => (
            <div key={track.title} className="col-lg-4 col-md-4 col-sm-12">
              <div className="card course mb-3">
                <img src={track.img} className="card-img-top" alt={track.title} />
                <div className="card-body">
                  <h5 className="card-title">{track.title}</h5>
                  <p className="card-text">{track.cost}</p>
                  <p className="card-text">{track.duration}</p>
                  <a
                    href={track.brochure_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-block mb-3"
                  >
                    Download Curriculum
                  </a>
                  <button
                    className="btn btn-primary btn-block mb-3"
                    disabled={!track.isActive}
                    onClick={() => track.isActive && window.open(track.form_link, '_blank')}
                  >
                    {track.isActive ? 'Start Learning' : 'Coming Soon'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <div className="container pt-lg-6 pt-md-6 pb-3">
          <h2 className="bold-title d-inline-block">Our Fellows</h2>
        </div>
        <div id="insightSlider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {testimonials.map((_, i) => (
              <li
                key={i}
                data-target="#insightSlider"
                data-slide-to={i}
                className={i === 0 ? 'active' : ''}
              />
            ))}
          </ol>
          <div className="carousel-inner center-slider">
            <h1 style={{ fontSize: 200, marginBottom: -150, color: 'rgba(255,255,255,0.5)' }}>"</h1>
            {testimonials.map((t, i) => (
              <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                <div className="text-center">
                  <p className="sentence-title">{t.quote}</p>
                  <p className="bold-title mt-5">
                    {t.name}
                    {t.country}
                  </p>
                  <p>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#insightSlider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#insightSlider" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Join a cohort CTA */}
      <div className="training">
        <div className="row start-project-container mx-auto py-10 d-flex align-items-center justify-content-center">
          <div className="col-md-6 col-sm-12">
            <p className="sub-title">
              Learning with dedicated mentors and get exclusive access and introduction to hiring
              partners.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <a
              href={training_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn sub-title btn-lg btn-block"
            >
              Join a cohort
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
