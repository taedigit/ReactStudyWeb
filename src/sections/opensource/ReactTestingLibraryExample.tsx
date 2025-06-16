import React from 'react';
import { ExampleTab } from '../../components/ExampleTab';

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

const descs = {
  render: 'render 함수를 사용해 컴포넌트를 테스트 환경에 렌더링합니다.',
  query: 'screen.getByText, getByRole 등 쿼리 함수로 DOM 요소를 찾습니다.',
  fireEvent: 'fireEvent를 사용해 클릭 등 사용자 이벤트를 시뮬레이션합니다.',
  async: 'findBy, waitFor 등 비동기 쿼리/검증을 활용한 테스트 예시입니다.'
};

const codeRender = `import { render } from '@testing-library/react';\nimport MyButton from './MyButton';\ntest('버튼 렌더링', () => {\n  const { getByText } = render(<MyButton />);\n  expect(getByText('클릭')).toBeInTheDocument();\n});`;
const codeQuery = `import { render, screen } from '@testing-library/react';\nrender(<button>저장</button>);\nexpect(screen.getByText('저장')).toBeInTheDocument();`;
const codeFireEvent = `import { render, fireEvent } from '@testing-library/react';\nconst { getByText } = render(<button onClick={() => alert('clicked!')}>Click</button>);\nfireEvent.click(getByText('Click'));\n// alert가 호출됨을 확인`;
const codeAsync = `import { render, screen, waitFor } from '@testing-library/react';\nrender(<AsyncComponent />);\nawait waitFor(() => expect(screen.getByText('로딩 완료')).toBeInTheDocument());`;

const RenderDemo = () => <div>MyButton 컴포넌트가 <b>렌더링</b>됨</div>;
const QueryDemo = () => <div>screen.getByText('저장') → <b>찾음</b></div>;
const FireEventDemo = () => <div>fireEvent.click → <b>이벤트 발생</b></div>;
const AsyncDemo = () => <div>waitFor(() =&gt; '로딩 완료') → <b>통과</b></div>;

export const ReactTestingLibraryExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <h3>1. render</h3>
      <ExampleTab example={<RenderDemo />} code={codeRender} desc={descs.render} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>2. 쿼리 함수</h3>
      <ExampleTab example={<QueryDemo />} code={codeQuery} desc={descs.query} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>3. fireEvent</h3>
      <ExampleTab example={<FireEventDemo />} code={codeFireEvent} desc={descs.fireEvent} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>4. 비동기 테스트</h3>
      <ExampleTab example={<AsyncDemo />} code={codeAsync} desc={descs.async} />
    </div>
  </div>
); 