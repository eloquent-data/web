import './CallToAction.scss';

interface CallToActionProps {
  title: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CallToAction({ title, buttonLabel, buttonHref }: CallToActionProps) {
  return (
    <div className="cta d-flex align-items-center justify-content-center py-10">
      <div className="row cta-container mx-auto d-flex align-items-center justify-content-center">
        <div className="col-md-6 col-sm-12">
          <p className="sub-title">{title}</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <a href={buttonHref} target="_blank" rel="noreferrer" className="btn sub-title btn-lg btn-block">
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
