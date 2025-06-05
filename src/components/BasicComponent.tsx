// 1. 함수형 컴포넌트의 기본 구조
export const SimpleComponent = () => {
  return (
    <div className="example-component">
      <h3>안녕하세요, React!</h3>
      <p>이것은 가장 기본적인 React 컴포넌트입니다.</p>
    </div>
  )
}

// 2. Props를 사용하는 컴포넌트
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
  )
}

// 3. children prop을 사용하는 컴포넌트
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
  )
} 