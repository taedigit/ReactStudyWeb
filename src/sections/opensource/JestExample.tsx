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
  basic: 'Jest의 기본 테스트 작성법 예시입니다. test/expect를 사용해 함수의 결과를 검증합니다.',
  matcher: 'Jest의 다양한 matcher(toBe, toEqual, toContain, toThrow 등) 사용 예시입니다.',
  mock: 'jest.fn()을 활용한 Mock 함수 테스트 예시입니다.',
  async: '비동기 함수(Promise) 테스트 예시입니다. resolves/rejects matcher를 활용합니다.'
};

const codeBasic = `// sum.js\nexport function sum(a, b) {\n  return a + b;\n}\n\n// sum.test.js\nimport { sum } from './sum';\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});`;
const codeMatcher = `expect(value).toBe(4);\nexpect(value).toEqual({a: 1});\nexpect(array).toContain(3);\nexpect(() => errorFn()).toThrow();`;
const codeMock = `const mockFn = jest.fn();\nmockFn('hello');\nexpect(mockFn).toHaveBeenCalledWith('hello');`;
const codeAsync = `// fetchData.js\nexport function fetchData() {\n  return Promise.resolve('peach');\n}\n\n// fetchData.test.js\ntest('the data is peach', async () => {\n  await expect(fetchData()).resolves.toBe('peach');\n});`;

const JestBasicDemo = () => <div>sum(1, 2) = <b>3</b></div>;
const JestMatcherDemo = () => <div>다양한 matcher 결과: <b>통과</b></div>;
const JestMockDemo = () => <div>mockFn('hello') 호출됨: <b>통과</b></div>;
const JestAsyncDemo = () => <div>fetchData() resolves to <b>peach</b>: <b>통과</b></div>;

export const JestExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <h3>1. 기본 테스트</h3>
      <ExampleTab example={<JestBasicDemo />} code={codeBasic} desc={descs.basic} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>2. Matcher</h3>
      <ExampleTab example={<JestMatcherDemo />} code={codeMatcher} desc={descs.matcher} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>3. Mock 함수</h3>
      <ExampleTab example={<JestMockDemo />} code={codeMock} desc={descs.mock} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>4. 비동기 테스트</h3>
      <ExampleTab example={<JestAsyncDemo />} code={codeAsync} desc={descs.async} />
    </div>
  </div>
); 