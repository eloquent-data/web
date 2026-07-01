import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Footer from '@/components/Footer';
import { insight } from '@/data/insights';
import './Insights.scss';

const SUBMIT_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSfaNahQdBFPKKIHegK3WvK-5y4RXa5QF58ZTvCkAU7_8AJQHw/viewform';

export default function Insights() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar
        title="Insights"
        description="Learn from articles and reports on project and data topics"
      />
      <TitleHeader title="Insights" />

      <div className="insights container mt-8 mb-10">
        <div className="row">
          {insight.map((post) => (
            <div key={post.title} className="col-md-6 col-sm-6 col-xs-12 insight">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="mx-3 mb-lg-8 mb-md-8 mb-8">
                  <img src={post.img} alt={post.title} className="img-fluid" />
                  <p className="title paragraph-small p-3">{post.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="start-insight">
        <div className="row start-project-container mx-auto py-10 d-flex align-items-center justify-content-center">
          <div className="col-md-6 col-sm-12">
            <p className="sub-title">Share what you have done with data</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <a
              href={SUBMIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn sub-title btn-lg btn-block"
            >
              Submit Insight
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
