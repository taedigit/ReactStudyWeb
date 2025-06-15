import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ExampleTab } from '../../components/ExampleTab';
import { Typography } from '@mui/material';

// 스타일 정의
const stateExampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

// Props 타입 정의
interface ButtonProps {
  primary?: boolean;
}

// 1. 기본 스타일링
const StyledButton = styled.button<ButtonProps>`
  background: ${props => props.primary ? '#646cff' : 'white'};
  color: ${props => props.primary ? 'white' : '#646cff'};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid #646cff;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${props => props.primary ? '#747bff' : '#f8f8f8'};
  }
`;

// 2. 확장 스타일링
const TomatoButton = styled(StyledButton)`
  color: ${props => props.primary ? 'white' : 'tomato'};
  border-color: tomato;
  background: ${props => props.primary ? 'tomato' : 'white'};

  &:hover {
    background: ${props => props.primary ? '#ff7a6b' : '#fff5f4'};
  }
`;

// 3. 조건부 스타일링
interface CardProps {
  $elevated?: boolean;
}

const Card = styled.div<CardProps>`
  padding: 20px;
  border-radius: 8px;
  background: white;
  ${props => props.$elevated && css`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  `}
`;

// 4. 애니메이션
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #646cff;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

// 5. 반응형 디자인
const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background: #2a2d2e;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
`;

// 6. 중첩 스타일링
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;

  label {
    color: #646cff;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    
    &:focus {
      outline: none;
      border-color: #646cff;
    }
  }

  button {
    background: #646cff;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #747bff;
    }
  }
`;

const StyledComponentsExample: React.FC = () => {
  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 스타일링 (Basic Styling)</Typography>
        <ExampleTab
          example={
            <div>
              <StyledButton>Normal</StyledButton>
              <StyledButton primary>Primary</StyledButton>
            </div>
          }
          code={`const StyledButton = styled.button<ButtonProps>\`
  background: \${props => props.primary ? '#646cff' : 'white'};
  color: \${props => props.primary ? 'white' : '#646cff'};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid #646cff;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: \${props => props.primary ? '#747bff' : '#f8f8f8'};
  }
\`;`}
          desc={`styled-components의 기본적인 사용법을 보여주는 예제입니다.

주요 특징:
• Template Literal 문법을 사용한 CSS 작성
• props를 통한 동적 스타일링 (\${props => ...})
• TypeScript와 함께 사용하기 위한 제네릭 타입 정의
• pseudo-selector (&:hover) 지원

장점:
• JavaScript/TypeScript 변수와 함수를 CSS에서 직접 사용 가능
• 컴포넌트 단위의 스타일 캡슐화
• CSS-in-JS로 스타일 충돌 방지
• 동적 스타일링이 직관적`}
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 스타일 확장 (Style Extending)</Typography>
        <ExampleTab
          example={
            <div>
              <TomatoButton>Tomato</TomatoButton>
              <TomatoButton primary>Tomato Primary</TomatoButton>
            </div>
          }
          code={`const TomatoButton = styled(StyledButton)\`
  color: \${props => props.primary ? 'white' : 'tomato'};
  border-color: tomato;
  background: \${props => props.primary ? 'tomato' : 'white'};

  &:hover {
    background: \${props => props.primary ? '#ff7a6b' : '#fff5f4'};
  }
\`;`}
          desc={`기존 스타일드 컴포넌트를 확장하여 새로운 스타일을 만드는 방법입니다.

확장 방식:
• styled(기존컴포넌트)\` ... \` 형태로 확장
• 기존 스타일을 상속받으면서 일부만 수정 가능
• props와 이벤트 핸들러도 자동 상속

활용 사례:
• 기본 컴포넌트의 변형 생성 (버튼, 카드 등)
• 테마별 스타일 변형
• 특수 목적 컴포넌트 생성

장점:
• 코드 재사용성 향상
• 일관된 디자인 시스템 구축
• 유지보수 용이성`}
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 조건부 스타일링 (Conditional Styling)</Typography>
        <ExampleTab
          example={
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Card>기본 카드</Card>
              <Card $elevated>그림자가 있는 카드</Card>
            </div>
          }
          code={`interface CardProps {
  $elevated?: boolean;
}

const Card = styled.div<CardProps>\`
  padding: 20px;
  border-radius: 8px;
  background: white;
  \${props => props.$elevated && css\`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  \`}
\`;`}
          desc={`조건부로 스타일을 적용하는 다양한 방법을 보여주는 예제입니다.

구현 방법:
• Transient Props ($로 시작하는 prop)
• css 헬퍼 함수를 사용한 스타일 블록 처리
• TypeScript 인터페이스로 props 타입 정의

사용 패턴:
1. 삼항 연산자: \${props => props.조건 ? '스타일A' : '스타일B'}
2. AND 연산자: \${props => props.조건 && css\`스타일\`}
3. 함수 활용: \${getStyles}

활용 사례:
• 상태에 따른 스타일 변경 (active, disabled 등)
• 테마 기반 스타일링
• 반응형 디자인 조건부 적용`}
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 애니메이션 (Animation)</Typography>
        <ExampleTab
          example={<Spinner />}
          code={`const rotate = keyframes\`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
\`;

const Spinner = styled.div\`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #646cff;
  border-radius: 50%;
  animation: \${rotate} 1s linear infinite;
\`;`}
          desc={`styled-components에서 애니메이션을 정의하고 사용하는 방법입니다.

애니메이션 정의:
• keyframes 헬퍼를 사용한 애니메이션 정의
• 애니메이션을 변수로 저장하여 재사용 가능
• CSS @keyframes를 JavaScript 환경에서 사용

애니메이션 속성:
• duration, timing-function, delay, iteration-count 설정
• animation 축약형 문법 지원
• 동적 애니메이션 값 설정 가능

실제 활용:
• 로딩 인디케이터
• 트랜지션 효과
• 인터랙티브 UI 요소`}
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 반응형 디자인 (Responsive Design)</Typography>
        <ExampleTab
          example={
            <ResponsiveGrid>
              <GridItem>Item 1</GridItem>
              <GridItem>Item 2</GridItem>
              <GridItem>Item 3</GridItem>
            </ResponsiveGrid>
          }
          code={`const ResponsiveGrid = styled.div\`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
\`;`}
          desc={`styled-components에서 반응형 디자인을 구현하는 방법입니다.

미디어 쿼리 작성법:
• 표준 CSS @media 구문 사용
• 중단점(breakpoint) 변수 활용 가능
• 컴포넌트 내부에 직접 정의

반응형 패턴:
• Mobile First / Desktop First 접근
• Grid 시스템 활용
• 유동적 단위 사용 (rem, %, vw/vh)

구현 전략:
• 컨테이너 쿼리 활용
• 유연한 그리드 시스템
• 동적 컴포넌트 레이아웃

실무 활용:
• 다양한 디바이스 대응
• 레이아웃 최적화
• 사용자 경험 향상`}
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. 중첩 스타일링 (Nested Styling)</Typography>
        <ExampleTab
          example={
            <Form onSubmit={e => e.preventDefault()}>
              <div>
                <label>이메일</label>
                <input type="email" placeholder="이메일 입력" />
              </div>
              <div>
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호 입력" />
              </div>
              <button type="submit">로그인</button>
            </Form>
          }
          code={`const Form = styled.form\`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;

  label {
    color: #646cff;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    
    &:focus {
      outline: none;
      border-color: #646cff;
    }
  }

  button {
    background: #646cff;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #747bff;
    }
  }
\`;`}
          desc={`컴포넌트 내부의 요소들을 중첩하여 스타일링하는 방법입니다.

중첩 문법:
• SCSS와 유사한 중첩 선택자 문법
• & 연산자로 현재 요소 참조
• 하위 요소 직접 스타일링

장점:
• 스코프가 명확한 스타일링
• 컴포넌트 단위의 스타일 관리
• 직관적인 스타일 구조화

실제 활용:
• 폼 컴포넌트 스타일링
• 복잡한 컴포넌트 구조화
• 재사용 가능한 스타일 패턴

주의사항:
• 과도한 중첩은 피하기
• 컴포넌트 분리 고려
• 일관된 네이밍 규칙 사용`}
        />
      </div>
    </div>
  );
};

export default StyledComponentsExample; 