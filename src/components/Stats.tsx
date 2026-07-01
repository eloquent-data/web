import './Stats.scss';

interface StatsProps {
  col1_label: string;
  col1_value: string | number;
  col2_label: string;
  col2_value: string | number;
  col3_label: string;
  col3_value: string | number;
  bgC?: string;
  color?: string;
  pdT?: string;
  pdB?: string;
}

export default function Stats({
  col1_label, col1_value,
  col2_label, col2_value,
  col3_label, col3_value,
  bgC, color, pdT, pdB,
}: StatsProps) {
  const border = color ? `${color} 36px solid` : undefined;

  return (
    <div
      className="stats d-flex align-items-center justify-content-center"
      style={{ backgroundColor: bgC, color, paddingTop: pdT, paddingBottom: pdB }}
    >
      <div className="row stats-container my-8">
        {[
          { value: col1_value, label: col1_label },
          { value: col2_value, label: col2_label },
          { value: col3_value, label: col3_label },
        ].map(({ value, label }) => (
          <div key={label} className="col-md-4 col-sm-12 d-flex align-items-center justify-content-center text-center">
            <div>
              <div className="circle" style={{ border }}>{value}</div>
              <div className="circle-label sentence-title mt-4 mb-md-0 mb-6">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
