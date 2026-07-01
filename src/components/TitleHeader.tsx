import './TitleHeader.scss';

interface TitleHeaderProps {
  title: string;
  description?: string;
}

export default function TitleHeader({ title }: TitleHeaderProps) {
  return (
    <div className="title-header-container py-md-10 py-5">
      <div className="title-width">
        <h1 className="title-header my-auto">{title}</h1>
      </div>
    </div>
  );
}
