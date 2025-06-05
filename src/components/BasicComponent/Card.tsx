interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card-component">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}; 