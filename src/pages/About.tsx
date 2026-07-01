import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Paragraph from '@/components/Paragraph';
import Footer from '@/components/Footer';
import { founders, whoWeAre, whatWeDo } from '@/data/about';
import { useEffect } from 'react';
import './About.scss';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar title="About" description={whoWeAre} />
      <TitleHeader title="About" />

      <Paragraph
        boldTitle="Who we are"
        paragraphSentence={whoWeAre}
        bgColor="#ffffff"
        mgT="0"
        mgB="0"
      />

      <div className="container mb-10">
        <div className="row">
          <div className="academy box col-lg-6 col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-4">
            <div className="acadbox">
              <div className="about-focus">
                <h3 className="bold-title">Fellowship</h3>
                <p className="paragraph-small">
                  Fellows are trained in a 24 weeks intensive and structured program where they gain
                  in-depth knowledge of data science and solve real-world tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="impact-service col-lg-6 col-md-6 col-sm-12">
            <div className="impact box">
              <div className="about-focus">
                <h3 className="bold-title">Projects</h3>
                <p className="paragraph-small">
                  At the end of every course module, Fellows are given a real-world project that aims
                  to address a social problem in their locality.
                </p>
              </div>
            </div>
            <div className="services box">
              <div className="about-focus">
                <h3 className="bold-title">Community</h3>
                <p className="paragraph-small">
                  We have a community that brings together experts and enthusiasts from diverse data
                  backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Paragraph
        boldTitle="What we do"
        paragraphSentence={whatWeDo}
        bgColor="#F8a41d"
        pT="100px"
      />

      <div className="text-center mb-10 container">
        <h2 className="bold-title mt-10 mb-5">Eloquent Team</h2>
        <div className="team row">
          {founders.map((founder) => (
            <div key={founder.name} className="col-md-3 col-sm-12">
              <a href={founder.link} target="_blank" rel="noopener noreferrer">
                <img src={founder.img} alt={founder.name} className="img-fluid" />
                <h3 className="sub-title">{founder.name}</h3>
                <h4 className="paragraph-small">{founder.title}</h4>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
