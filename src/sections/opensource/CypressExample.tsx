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
  visit: 'cy.visit()로 페이지를 열고, cy.get/cy.contains로 요소를 찾고 클릭합니다.',
  input: 'cy.get().type()으로 입력 필드에 값을 입력합니다.',
  assertion: 'should, expect 등으로 DOM 상태를 검증합니다.',
  intercept: 'cy.intercept()로 네트워크 요청을 가로채고, 응답을 모킹할 수 있습니다.'
};

const codeVisit = `describe('기본 방문/클릭', () => {\n  it('메인 페이지 방문 및 버튼 클릭', () => {\n    cy.visit('/');\n    cy.contains('로그인').click();\n  });\n});`;
const codeInput = `cy.get('input[name=email]').type('test@example.com');\ncy.get('input[type=password]').type('123456');`;
const codeAssertion = `cy.get('h1').should('contain', '환영합니다');\ncy.url().should('include', '/dashboard');`;
const codeIntercept = `cy.intercept('GET', '/api/user', { fixture: 'user.json' }).as('getUser');\ncy.visit('/profile');\ncy.wait('@getUser');`;

const VisitDemo = () => <div>메인 페이지 방문 후 <b>로그인</b> 버튼 클릭</div>;
const InputDemo = () => <div>이메일/비밀번호 <b>입력</b>됨</div>;
const AssertionDemo = () => <div>h1에 <b>환영합니다</b> 포함, URL <b>/dashboard</b> 확인</div>;
const InterceptDemo = () => <div>GET /api/user <b>인터셉트</b> 및 응답 모킹</div>;

export const CypressExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <h3>1. 방문/클릭</h3>
      <ExampleTab example={<VisitDemo />} code={codeVisit} desc={descs.visit} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>2. 입력</h3>
      <ExampleTab example={<InputDemo />} code={codeInput} desc={descs.input} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>3. Assertion</h3>
      <ExampleTab example={<AssertionDemo />} code={codeAssertion} desc={descs.assertion} />
    </div>
    <div style={stateExampleBlockStyle}>
      <h3>4. 네트워크 인터셉트</h3>
      <ExampleTab example={<InterceptDemo />} code={codeIntercept} desc={descs.intercept} />
    </div>
  </div>
); 