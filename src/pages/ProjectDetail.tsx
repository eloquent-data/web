import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import TitleHeader from '@/components/TitleHeader';
import Footer from '@/components/Footer';
import { projects_detail } from '@/data/projects';
import type { ProjectDetail as ProjectDetailType } from '@/data/types';
import './ProjectDetail.scss';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetailType | null>(null);
  const [shareUrls, setShareUrls] = useState({ tw: '', fb: '', ln: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    const parts = slug?.split('-') ?? [];
    const id = parseInt(parts[parts.length - 1]);
    const found = projects_detail.find((p) => p.id === id) ?? null;
    setProject(found);

    const url = window.location.href;
    if (found) {
      setShareUrls({
        tw: `http://twitter.com/share?url=${url}&text=${found.title}&hashtags=eloquentdata`,
        fb: `http://www.facebook.com/sharer.php?u=${url}`,
        ln: `http://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      });
    }
  }, [slug]);

  if (!project) {
    return (
      <>
        <Navbar title="Project" />
        <div className="container my-10 text-center">
          <h2>Project not found.</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar title={project.title} description={project.summary} />
      <TitleHeader title={project.title} />

      <div className="container mb-5">
        <div className="row mt-5">
          {/* Sidebar */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="summary p-4">
              <img src={project.img} alt={project.title} className="img-fluid" />
              <p className="summary-desc mt-4">{project.summary}</p>

              <div className="social-share">
                <p>Share this project</p>
                <a href={shareUrls.tw} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter pr-4" />
                </a>
                <a href={shareUrls.ln} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in pr-4" />
                </a>
                <a href={shareUrls.fb} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f pr-4" />
                </a>
              </div>

              <hr />

              <div className="team">
                <h3 className="bold-title">TEAM</h3>
                {project.team.map((member) => (
                  <div key={member.name} className="mb-2">
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                      <p className="sub-title">{member.name}</p>
                    </a>
                    {member.title && <p>{member.title}</p>}
                  </div>
                ))}
              </div>

              {project.project_link && (
                <a
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block mt-4 py-2 sub-title"
                >
                  View Project
                </a>
              )}
              <button type="button" className="btn btn-primary btn-block mt-4 py-2 sub-title" disabled>
                Get Involved
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="mb-5">
              <h2 className="sentence-title" style={{ fontWeight: 400 }}>Introduction</h2>
              <div className="paragraph-small" dangerouslySetInnerHTML={{ __html: project.desc }} />
            </div>
            <div className="mb-5">
              <h2 className="sentence-title" style={{ fontWeight: 400 }}>Problem</h2>
              <div className="paragraph-small" dangerouslySetInnerHTML={{ __html: project.problem }} />
            </div>
            <div className="mb-5">
              <h2 className="sentence-title" style={{ fontWeight: 400 }}>Objectives</h2>
              <div className="paragraph-small" dangerouslySetInnerHTML={{ __html: project.objective }} />
            </div>
            <div className="mb-5">
              <h2 className="sentence-title" style={{ fontWeight: 400 }}>Proposed Solution</h2>
              <div className="paragraph-small" dangerouslySetInnerHTML={{ __html: project.solution }} />
            </div>
            <div className="mb-5">
              <h2 className="sentence-title" style={{ fontWeight: 400 }}>Target</h2>
              <div className="paragraph-small" dangerouslySetInnerHTML={{ __html: project.target }} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
