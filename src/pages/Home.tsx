import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import Navbar from '@/components/Navbar';
import Paragraph from '@/components/Paragraph';
import Footer from '@/components/Footer';
import { homeProjects, homePartner, homeInsight, training_link, project_link } from '@/data/home';
import { subscribeToMailchimp } from '@/services/mailchimp';
import { slugify } from '@/utils/slug';
import './Home.scss';

interface NewsletterForm {
  name: string;
  email: string;
}

const HOME_DESC =
  "We believe data can accelerate Africa's development. To enable this process, we provide data enthusiasts and working professionals with the required skills, resources and mentorship they need to solve data challenges in Africa.";

export default function Home() {
  const [subMessage, setSubMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<NewsletterForm>({ mode: 'onChange' });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubscribe = async (data: NewsletterForm) => {
    try {
      const res = await subscribeToMailchimp(data.email, data.name);
      if (res.result !== 'error') {
        setSubMessage('Welcome to Eloquent Data Community');
        reset();
      } else {
        setSubMessage(res.msg.split('<')[0]);
      }
    } catch {
      setSubMessage('Try again');
    }
  };

  return (
    <>
      <Navbar title="Home" description={HOME_DESC} />

      {/* Particles background */}
      <Particles
        id="particles-js"
        className="body"
        init={particlesInit}
        options={{
          detectRetina: true,
          particles: {
            number: { value: 40, density: { enable: true, area: 1000 } },
            color: { value: '#f8a41d' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.2,
              animation: { enable: false, speed: 2, minimumValue: 0.1, sync: false },
            },
            size: {
              value: { min: 0.1, max: 10 },
              animation: { enable: true, speed: 5, minimumValue: 0.1, sync: false },
            },
            links: { enable: true, distance: 200, color: '#f8a41d', opacity: 0.2, width: 2 },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              outModes: { default: 'out' },
              attract: { enable: false, rotate: { x: 600, y: 1200 } },
            },
          },
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              repulse: { distance: 400, duration: 0.4 },
              push: { quantity: 4 },
              remove: { quantity: 2 },
            },
          },
        }}
      />

      {/* Intro */}
      <div className="intro">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 row justify-content-end">
            <div className="col-lg-9 col-md-11 col-12">
              <h1 className="main-title">
                We're educators, analysts, and engineers focused on people and data.
              </h1>
              <p className="sub-title">Learn and contribute to social impact data projects</p>
              <a
                href={training_link}
                className="btn btn-primary btn-lg px-5 py-2 home-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get trained
              </a>
              <a
                href={project_link}
                className="btn btn-outline-primary btn-lg px-5 py-2 home-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Project
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 intro-img d-none d-lg-block">
            <img src="assets/img/intro-image.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      {/* What we do */}
      <Paragraph
        boldTitle="What we do"
        paragraphSentence={HOME_DESC}
        bgColor="#ffffff"
        mgT="-50px"
        mgB="0"
      />

      {/* Project slider */}
      <div className="project-list-slider">
        <div className="container pt-md-10 pt-7 section-header">
          <h2 className="bold-title">Our Project</h2>
          <Link to="/projects" className="project-view">
            <h5>View all</h5>
          </Link>
        </div>
        <div id="projectSlider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {homeProjects.map((_, i) => (
              <li
                key={i}
                data-target="#projectSlider"
                data-slide-to={i}
                className={i === 0 ? 'active' : ''}
              />
            ))}
          </ol>
          <div className="carousel-inner center-slider">
            {homeProjects.map((project, i) => (
              <div key={project.id} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                <Link to={`/projects/${slugify(project.title)}-${project.id}`}>
                  <div className="row">
                    <div className="col-lg-6 col-12 project-title">
                      <h3 className="sentence-title mt-md-5 mt-3">{project.title}</h3>
                      <h4 className="sub-title mt-3">{project.summary}</h4>
                    </div>
                    <div className="col-lg-6 col-12">
                      <p className="paragraph-small mt-md-5 mt-3">{project.summary}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#projectSlider" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#projectSlider" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Partners */}
      <div className="partners container" style={{ textAlign: 'center' }}>
        <h2 className="bold-title mt-8 mb-5">Partner</h2>
        <div className="row mb-8">
          {homePartner.map((partner) => (
            <div key={partner.alt} className="col-lg-4 col-md-4 col-sm-12">
              <img
                src={partner.img}
                alt={partner.alt}
                title={partner.alt}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Insight slider */}
      <div className="insight-list-slider">
        <div className="container pt-lg-10 pt-md-10 pb-5 section-header">
          <h2 className="bold-title d-inline-block">Insight</h2>
          <Link to="/insights" className="insight-view">
            <h5>View all</h5>
          </Link>
        </div>
        <div id="insightSlider" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {homeInsight.map((_, i) => (
              <li
                key={i}
                data-target="#insightSlider"
                data-slide-to={i}
                className={i === 0 ? 'active' : ''}
              />
            ))}
          </ol>
          <div className="carousel-inner center-slider">
            {homeInsight.map((insight, i) => (
              <div key={insight.title} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                <a href={insight.link} target="_blank" rel="noopener noreferrer">
                  <div className="row">
                    <div className="col-lg-6 col-12 p-4 insight-img">
                      <img
                        src={insight.img}
                        alt={insight.title}
                        className="img-fluid align-middle insight-link"
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <h3 className="sentence-title mt-md-5 mt-0 insight-link">{insight.title}</h3>
                      <p className="paragraph-small mt-3">{insight.description}</p>
                    </div>
                  </div>
                </a>
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

      {/* Newsletter */}
      <div className="subscription px-md-0 px-4">
        <div className="container py-9">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="bold-title">Join the community</h2>
              <p className="sub-title">
                Get our community newsletter to stay up to date with information and opportunities
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              {subMessage && <div className="status sub-title mb-2">{subMessage}</div>}
              <form onSubmit={handleSubmit(onSubscribe)}>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email', { required: true })}
                />
                <button
                  type="submit"
                  className="btn btn-lg btn-block mt-5 px-7 py-2"
                  disabled={!isValid}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
