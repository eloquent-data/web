import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Paragraph from '@/components/Paragraph';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import { projects, projectStats } from '@/data/projects';
import { project_link } from '@/data/home';
import { slugify } from '@/utils/slug';
import './Projects.scss';

const paragraphSentence =
  'Build an impressive data portfolio with real-world projects that address problems in Africa. Collaborate with like-minded enthusiasts and get an expert to mentor you throughout the process.';

export default function Projects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar title="Projects" description={paragraphSentence} />
      <TitleHeader title="Projects" />

      <Paragraph
        boldTitle="Projects"
        paragraphSentence={paragraphSentence}
        bgColor="#ffffff"
        mgT="0px"
        mgB="0"
      />

      <Stats
        col1_label="Managed Projects"
        col1_value={projectStats.managed}
        col2_label="Total Projects"
        col2_value={projectStats.total}
        col3_label="Team Members"
        col3_value={projectStats.team}
        bgC="#3b6e7f"
        color="#ffffff"
        pdT="0"
        pdB="0"
      />

      {/* Start a project CTA */}
      <div className="start-project">
        <div className="row start-project-container mx-auto py-10 d-flex align-items-center justify-content-center">
          <div className="col-md-6 col-sm-12">
            <p className="sub-title">Have an idea and want to leverage data for social change</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <a
              href={project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn sub-title btn-lg btn-block"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Project list */}
      <div className="projects container mt-8 mb-10">
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-5">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
              >
                Active Projects
              </a>
              <a
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
              >
                Archive Projects
              </a>
            </div>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
              >
                {projects.map((project) => (
                  <div key={project.id} className="project-container mb-5">
                    <Link
                      to={`/projects/${slugify(project.title)}-${project.id}`}
                      className="row"
                    >
                      <div className="col-md-4 col-sm-12 p-0">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-8 col-sm-12 d-flex align-items-center justify-content-center">
                        <div>
                          <h3 className="sentence-title d-inline-block">{project.title}</h3>
                          <p className="paragraph-small">{project.summary}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel">
                No archive project
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
