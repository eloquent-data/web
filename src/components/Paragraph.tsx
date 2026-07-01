import './Paragraph.scss';

interface ParagraphProps {
  boldTitle: string;
  paragraphSentence: string;
  bgColor?: string;
  mgT?: string;
  mgB?: string;
}

export default function Paragraph({ boldTitle, paragraphSentence, bgColor, mgT, mgB }: ParagraphProps) {
  return (
    <div
      className="full-width pt-lg-12 pt-6 pb-lg-12 pb-8"
      style={{ backgroundColor: bgColor, marginTop: mgT, marginBottom: mgB }}
    >
      <div className="pl-lg-12 container">
        <h2 className="bold-title">{boldTitle}</h2>
        <p className="paragraph-big" dangerouslySetInnerHTML={{ __html: paragraphSentence }} />
      </div>
    </div>
  );
}
