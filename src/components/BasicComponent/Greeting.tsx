interface GreetingProps {
  name: string;
  message?: string;
}

export const Greeting = ({ name, message = "환영합니다!" }: GreetingProps) => {
  return (
    <div className="example-component">
      <h3>{name}님, 안녕하세요!</h3>
      <p>{message}</p>
    </div>
  );
}; 