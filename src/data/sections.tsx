import React from 'react';
import type { Section, SectionId } from '../types/section';
import { TabComponent } from '../components/TabComponent';
import { MacCmd } from '../components/MacCmd';
import { MacCmdExampleWrapper } from '../components/MacCmdExampleWrapper';
import { ExampleTab } from '../components/ExampleTab';

const nvmInstallScript = `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# 터미널 재시작 또는 아래 명령 실행
export NVM_DIR=\"$([ -z \\\${XDG_CONFIG_HOME-} ] && printf %s \\\${HOME}/.nvm || printf %s \\\${XDG_CONFIG_HOME}/nvm)\"
[ -s \"$NVM_DIR/nvm.sh\" ] && \\. \"$NVM_DIR/nvm.sh\" # This loads nvm`;

const setupContent = (
  <div>
    <h2>React 설치 방법</h2>
    <ul
      style={{
        marginBottom: '2em',
        background: '#484f54',
        padding: '1.5em 2em',
        borderRadius: '8px',
        border: '1px solid #eee',
        marginTop: '1.2em',
        marginLeft: 0,
        marginRight: 0,
        listStylePosition: 'inside',
      }}
    >
      <li style={{ marginBottom: '0.7em' }}><a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>React 공식 홈페이지</a></li>
      <li style={{ marginBottom: '0.7em' }}><a href="https://react.dev/learn/installation" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>React 공식 설치 가이드</a></li>
      <li style={{ marginBottom: '0.7em' }}><a href="https://create-react-app.dev/docs/getting-started/" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>Create React App 공식 설치 가이드</a></li>
      <li style={{ marginBottom: '0.7em' }}><a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>Vite 공식 설치 가이드</a></li>
      <li style={{ marginBottom: '0.7em' }}><a href="https://nodejs.org/ko/" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>Node.js 공식 홈페이지</a></li>
    </ul>
    <ol>
      <li>
        <strong>Node.js 설치</strong><br />
        <a href="https://nodejs.org/ko/" target="_blank" rel="noopener noreferrer">Node.js 공식 홈페이지</a>에서 Node.js를 설치하세요.
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>프로젝트 폴더 생성</strong><br />
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`mkdir my-react-app\ncd my-react-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>React 및 관련 패키지 설치</strong><br />
        <div>npm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm install react react-dom`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`yarn add react react-dom`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>CRA(Create React App)로 프로젝트 생성 (권장)</strong><br />
        <a href="https://create-react-app.dev/docs/getting-started/" target="_blank" rel="noopener noreferrer">CRA 공식 설치 가이드</a>
        <div>npm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npx create-react-app my-app`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`yarn create react-app my-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>Vite로 React 프로젝트 생성 (추천)</strong><br />
        <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">Vite 공식 설치 가이드</a>
        <div>npm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm create vite@latest my-vite-app -- --template react`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`yarn create vite my-vite-app --template react`}</MacCmd>
        <div>pnpm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`pnpm create vite my-vite-app --template react`}</MacCmd>
        <div style={{ marginTop: '0.5em' }}>설치 후:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`cd my-vite-app\nnpm install\nnpm run dev`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>Next.js로 React 프로젝트 생성 (SSR/SEO 등 고급 기능)</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>Next.js를 쓰는 이유</b>:<br />
          <ul style={{ margin: '0.5em 0 0.5em 1.2em', background: '#484f54', padding: '1em 1.5em', borderRadius: '8px', border: '1px solid #eee', listStylePosition: 'inside' }}>
            <li style={{ marginBottom: '0.7em' }}><b>SSR(서버사이드 렌더링)</b> 지원으로 SEO(검색엔진 최적화)에 유리</li>
            <li style={{ marginBottom: '0.7em' }}><b>파일 기반 라우팅</b> 등 개발 편의성</li>
            <li style={{ marginBottom: '0.7em' }}><b>정적 사이트 생성(SSG)</b> 및 <b>API 라우트</b> 등 다양한 기능 내장</li>
            <li style={{ marginBottom: '0.7em' }}>대규모 서비스/프로덕션에서 널리 사용</li>
          </ul>
        </div>
        <a href="https://nextjs.org/docs/getting-started" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>Next.js 공식 설치 가이드</a>
        <div>npm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npx create-next-app@latest my-next-app`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`yarn create next-app my-next-app`}</MacCmd>
        <div>pnpm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`pnpm create next-app my-next-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>설치 중 잘못된 경우(실수로 잘못 설치/실행했을 때 대처법)</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>잘못 설치했거나, 의도와 다른 템플릿/패키지가 설치된 경우 아래 명령어로 정리 후 재설치하세요.</b>
        </div>
        <div>1. <b>node_modules, lock 파일 삭제</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`rm -rf node_modules package-lock.json yarn.lock`}</MacCmd>
        <div>2. <b>다시 패키지 설치</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm install`}</MacCmd>
        <div style={{ marginTop: '0.7em' }}>만약 프로젝트 폴더 자체를 잘못 만들었다면, 폴더를 삭제하고 처음부터 다시 생성하세요.</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`cd ..
rm -rf my-react-app my-vite-app my-next-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>여러 포트에서 Node.js가 실행 중일 때(포트 충돌 해결)</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>여러 포트(예: 3000, 5173 등)에서 Node.js가 실행 중이라면 아래 명령어로 프로세스를 종료한 뒤 원하는 포트로 다시 실행하세요.</b>
        </div>
        <div><b>Windows PowerShell:</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`for /f "tokens=5" %a in ('netstat -aon | findstr :3000') do taskkill /F /PID %a
for /f "tokens=5" %a in ('netstat -aon | findstr :5173') do taskkill /F /PID %a`}</MacCmd>
        <div><b>Mac/Linux (터미널):</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`lsof -i :3000 -t | xargs kill -9
lsof -i :5173 -t | xargs kill -9`}</MacCmd>
        <div style={{ margin: '0.7em 0' }}>이후 원하는 포트로 개발 서버를 다시 실행하세요.</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm run dev`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>회사/기관 등 보안 환경에서 npm 설치가 안 될 때 (프록시 설정)</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>사내망, 방화벽, 프록시 등으로 npm install이 안 될 경우 아래처럼 프록시를 설정할 수 있습니다.</b>
        </div>
        <div>프록시 주소는 회사 IT팀에 문의하여 확인하세요.</div>
        <div>프록시 설정 (http/https):</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm config set proxy http://[프록시주소]:[포트]
npm config set https-proxy http://[프록시주소]:[포트]`}</MacCmd>
        <div>프록시 해제:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm config delete proxy
npm config delete https-proxy`}</MacCmd>
        <div style={{ marginTop: '0.7em' }}>설정 후 <b>npm install</b>을 다시 시도하세요.</div>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>기타 React 설치 및 빌드 관련 유용한 스크립트</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>React 개발 환경에서 자주 사용하는 명령어 모음입니다.</b>
        </div>
        <div>Node.js, npm 버전 확인:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`node -v
npm -v`}</MacCmd>
        <div>npm 캐시 정리(문제 발생 시):</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm cache clean --force`}</MacCmd>
        <div>프로덕션 빌드:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm run build`}</MacCmd>
        <div>빌드 결과물 로컬에서 미리보기(Vite):</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm run preview`}</MacCmd>
        <div>의존성 최신화(업그레이드):</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm update`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>Node.js 버전 관리(nvm) 사용하기</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>nvm(Node Version Manager)</b>은 여러 Node.js 버전을 쉽게 설치/전환할 수 있는 도구입니다.<br />
          프로젝트별로 다른 Node.js 버전이 필요할 때 매우 유용합니다.
        </div>
        <div><b>Mac/Linux 설치 및 사용법:</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{nvmInstallScript}</MacCmd>
        <div>Node.js 설치/전환:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`nvm install 18
nvm use 18
nvm install 20
nvm use 20`}</MacCmd>
        <div><b>Windows 설치 및 사용법(nvm-windows):</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`choco install nvm`}</MacCmd>
        <div>설치 후 PowerShell 재시작, Node.js 설치/전환:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`nvm install 18.20.2
nvm use 18.20.2`}</MacCmd>
        <div style={{ margin: '0.7em 0' }}>
          <b>자주 쓰는 nvm 명령어</b>
        </div>
        <div>설치된 Node.js 버전 목록 보기:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`nvm ls`}</MacCmd>
        <div>원하는 버전 설치:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`nvm install 16`}</MacCmd>
        <div>특정 버전 사용:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`nvm use 16`}</MacCmd>
        <div>버전 삭제:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`nvm uninstall 16`}</MacCmd>
        <div>별칭(alias) 지정:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`nvm alias default 18`}</MacCmd>
        <div style={{ marginTop: '0.7em' }}>nvm 공식 문서: <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>nvm-sh/nvm</a>, <a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noopener noreferrer"><span style={{marginRight: '0.4em'}}>🔗</span>nvm-windows</a></div>
      </li>
    </ol>
  </div>
);

// --- Components Section Demo Components ---
function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}

function Greeting(props: { name?: string }) {
  return <h2>{props.name ? `안녕하세요, ${props.name}님!` : '이름을 입력하세요.'}</h2>;
}

function UserListDemo() {
  const [filter, setFilter] = React.useState('');
  const users = ['Alice', 'Bob', 'Charlie', 'David'];
  const filtered = users.filter(u => u.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <input 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
        placeholder="이름 검색" 
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1em',
          fontSize: '1em',
          outline: 'none',
          marginBottom: '1em',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filtered.map(u => (
          <li key={u} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.3em' }}>
            <span style={{ display: 'inline-block', width: '0.8em', height: '0.8em', borderRadius: '50%', background: '#27c93f', marginRight: '0.7em', flexShrink: 0 }}></span>
            <span>{u}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- State Section Demo Components ---
function CounterDemo() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1.2em',
          fontSize: '1em',
          outline: 'none',
          cursor: 'pointer',
          marginTop: '0.5em',
          transition: 'background 0.15s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = '#232323')}
      >증가</button>
    </div>
  );
}

function InputExampleDemo() {
  const [text, setText] = React.useState('');
  return <input 
    value={text} 
    onChange={e => setText(e.target.value)} 
    style={{
      background: '#232323',
      color: '#eaeaea',
      border: '1px solid #444',
      borderRadius: '6px',
      padding: '0.5em 1em',
      fontSize: '1em',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    }}
  />;
}

function TodoListDemo() {
  const [todos, setTodos] = React.useState(['공부하기', '운동하기']);
  const [input, setInput] = React.useState('');
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {todos.map((todo, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.3em' }}>
            <span style={{ display: 'inline-block', width: '0.8em', height: '0.8em', borderRadius: '50%', background: '#27c93f', marginRight: '0.7em', flexShrink: 0 }}></span>
            <span>{todo}</span>
          </li>
        ))}
      </ul>
      <input 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="새 할 일" 
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1em',
          fontSize: '1em',
          outline: 'none',
          marginTop: '0.5em',
          marginRight: '0.5em',
          width: '70%',
          boxSizing: 'border-box',
        }}
      />
      <button
        onClick={() => {
          if (input.trim()) {
            setTodos([...todos, input]);
            setInput('');
          }
        }}
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1.2em',
          fontSize: '1em',
          outline: 'none',
          cursor: 'pointer',
          transition: 'background 0.15s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = '#232323')}
      >추가</button>
    </div>
  );
}

function ProfileDemo() {
  const [user, setUser] = React.useState({ name: '', age: 0 });
  return (
    <div>
      <input 
        value={user.name} 
        onChange={e => setUser({ ...user, name: e.target.value })} 
        placeholder="이름" 
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1em',
          fontSize: '1em',
          outline: 'none',
          marginRight: '0.5em',
          marginBottom: '0.5em',
          width: '45%',
          boxSizing: 'border-box',
        }}
      />
      <input 
        type="number" 
        value={user.age} 
        onChange={e => setUser({ ...user, age: Number(e.target.value) })} 
        placeholder="나이" 
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1em',
          fontSize: '1em',
          outline: 'none',
          width: '45%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}

function MultiStateDemo() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1.2em',
          fontSize: '1em',
          outline: 'none',
          cursor: 'pointer',
          marginRight: '0.5em',
          transition: 'background 0.15s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = '#232323')}
      >+1</button>
      <input 
        value={text} 
        onChange={e => setText(e.target.value)} 
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.5em 1em',
          fontSize: '1em',
          outline: 'none',
          width: '60%',
          boxSizing: 'border-box',
        }}
      />
      <p style={{ color: '#eaeaea', marginTop: '0.7em' }}>{count}, {text}</p>
    </div>
  );
}

// Helper for styled block
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

// 고급 예제: 상태와 이벤트 활용 - 소스와 동일한 CounterButtonsDemo
function CounterButtonsDemo() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1em' }}>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid #444',
          background: '#232323',
          color: '#fff',
          fontSize: '1.3em',
          cursor: 'pointer',
          transition: 'background 0.15s',
          outline: 'none',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = '#232323')}
        aria-label="감소"
      >-</button>
      <span style={{
        minWidth: 40,
        textAlign: 'center',
        fontWeight: 600,
        fontSize: '1.3em',
        color: '#eaeaea',
        letterSpacing: '0.05em',
      }}>{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid #444',
          background: '#232323',
          color: '#fff',
          fontSize: '1.3em',
          cursor: 'pointer',
          transition: 'background 0.15s',
          outline: 'none',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = '#232323')}
        aria-label="증가"
      >+</button>
    </div>
  );
}

// 실무 예제: 장바구니
function ShoppingCartDemo() {
  const [cart, setCart] = React.useState<string[]>([]);
  const products = ['Apple', 'Banana', 'Orange'];
  const productIcons: Record<string, string> = { Apple: '🍎', Banana: '🍌', Orange: '🍊' };
  const maxCount = 17;
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {products.map(product => {
          const count = cart.filter(item => item === product).length;
          return (
            <li key={product} style={{ marginBottom: '0.5em', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '1em', minWidth: 70, display: 'inline-block' }}>{product}</span>
              <button
                onClick={() => {
                  if (count >= maxCount) {
                    alert('더 이상 추가할 수 없습니다.');
                    return;
                  }
                  setCart([...cart, product]);
                }}
                style={{
                  background: '#232323',
                  color: '#eaeaea',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  padding: '0.3em 1em',
                  fontSize: '1em',
                  outline: 'none',
                  cursor: 'pointer',
                  marginLeft: '0.5em',
                  transition: 'background 0.15s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#333')}
                onMouseOut={e => (e.currentTarget.style.background = '#232323')}
              >+{productIcons[product]}</button>
              <span style={{ marginLeft: '1em', fontSize: '1.5em' }}>{Array(count).fill(productIcons[product]).join('')}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// 고급 실무 예제: 수량 조절이 가능한 장바구니
function AdvancedCartDemo() {
  const productIcons: Record<string, string> = { Apple: '🍎', Banana: '🍌', Orange: '🍊' };
  const products = ['Apple', 'Banana', 'Orange'];
  const [cart, setCart] = React.useState<{ [key: string]: number }>({ Apple: 0, Banana: 0, Orange: 0 });
  const add = (name: string) => setCart(c => ({ ...c, [name]: c[name] + 1 }));
  const remove = (name: string) => setCart(c => ({ ...c, [name]: Math.max(0, c[name] - 1) }));
  const reset = () => setCart({ Apple: 0, Banana: 0, Orange: 0 });
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {products.map(name => (
          <li key={name} style={{ marginBottom: '0.5em', display: 'flex', alignItems: 'center' }}>
            <span style={{ minWidth: 100, display: 'inline-block', marginRight: '1em' }}>{productIcons[name]} {name}</span>
            <div style={{ display: 'flex', alignItems: 'center', minWidth: 160 }}>
              <button
                onClick={() => add(name)}
                style={{
                  background: '#232323',
                  color: '#eaeaea',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  padding: '0.3em 1em',
                  fontSize: '1em',
                  outline: 'none',
                  cursor: 'pointer',
                  marginLeft: '0.5em',
                  transition: 'background 0.15s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#333')}
                onMouseOut={e => (e.currentTarget.style.background = '#232323')}
              >+</button>
              <button
                onClick={() => remove(name)}
                disabled={cart[name] === 0}
                style={{
                  background: cart[name] === 0 ? '#444' : '#232323',
                  color: '#eaeaea',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  padding: '0.3em 1em',
                  fontSize: '1em',
                  outline: 'none',
                  cursor: cart[name] === 0 ? 'not-allowed' : 'pointer',
                  marginLeft: '0.3em',
                  transition: 'background 0.15s',
                  opacity: cart[name] === 0 ? 0.5 : 1,
                }}
                onMouseOver={e => { if (cart[name] !== 0) e.currentTarget.style.background = '#333'; }}
                onMouseOut={e => { if (cart[name] !== 0) e.currentTarget.style.background = '#232323'; }}
              >-</button>
              <span style={{ marginLeft: '0.7em', minWidth: 32, textAlign: 'center', color: '#eaeaea', display: 'inline-block' }}>{cart[name]}</span>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={reset}
        style={{
          background: '#232323',
          color: '#eaeaea',
          border: '1px solid #444',
          borderRadius: '6px',
          padding: '0.4em 1.5em',
          fontSize: '1em',
          outline: 'none',
          cursor: 'pointer',
          marginTop: '0.7em',
          marginBottom: '0.7em',
          transition: 'background 0.15s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = '#232323')}
      >Reset</button>
      <div style={{ fontSize: '2em', marginTop: '1em' }}>
        {products.map(name => cart[name] > 0 && (
          <div key={name} style={{ marginBottom: '0.2em' }}>{productIcons[name].repeat(cart[name])}</div>
        ))}
      </div>
    </div>
  );
}

// 고급 예제: 모달 팝업에 props 전달
function Modal({ open, onClose, message }: { open: boolean; onClose: () => void; message: string }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{ background: '#232323', color: '#eaeaea', padding: 32, borderRadius: 12, minWidth: 280, textAlign: 'center' }}>
        <h3>Modal Popup</h3>
        <p>{message}</p>
        <button onClick={onClose} style={{ marginTop: 16, padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>Close</button>
      </div>
    </div>
  );
}

function ModalDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Hello from parent!');
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      <button onClick={() => setOpen(true)} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>Open Modal</button>
      <Modal open={open} onClose={() => setOpen(false)} message={value} />
    </div>
  );
}

// --- Place all helper/demo components here (above sections) ---
// 실무 예제: 여러 props 전달
function ProfileCard(props: { name: string; age: number; job: string }) {
  return (
    <div style={{ background: '#232323', color: '#eaeaea', borderRadius: '8px', padding: '1em 1.5em', border: '1px solid #444', maxWidth: 320 }}>
      <h3 style={{ margin: '0 0 0.5em 0', fontSize: '1.2em' }}>{props.name}</h3>
      <p style={{ margin: '0.2em 0' }}>나이: {props.age}</p>
      <p style={{ margin: '0.2em 0' }}>직업: {props.job}</p>
    </div>
  );
}

// 실무 예제: 커스텀 버튼 컴포넌트
function CustomButton({ color, label }: { color: string; label: string }) {
  return (
    <button style={{
      background: color, color: '#fff', border: 'none', borderRadius: 6, padding: '0.6em 1.5em', fontSize: '1em', cursor: 'pointer'
    }}>{label}</button>
  );
}

// 실무 예제: 리스트 컴포넌트
function ItemList({ items }: { items: string[] }) {
  return (
    <ul style={{ background: '#232323', color: '#eaeaea', borderRadius: 8, padding: '1em 1.5em', border: '1px solid #444', maxWidth: 320 }}>
      {items.map(item => <li key={item} style={{ marginBottom: 4 }}>{item}</li>)}
    </ul>
  );
}

// 실무 예제: 토글 스위치 컴포넌트
function Toggle({ label, initial }: { label: string; initial: boolean }) {
  const [on, setOn] = React.useState(initial);
  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: on ? '#27c93f' : '#232323',
      color: '#fff',
      borderRadius: 8,
      padding: '0.7em 1.2em',
      border: '1px solid #444',
      maxWidth: 320,
      transition: 'background 0.2s',
    }}>
      <input type="checkbox" checked={on} onChange={() => setOn(!on)} style={{ marginRight: 8 }} />
      <span>{label}: {on ? 'ON' : 'OFF'}</span>
    </label>
  );
}

// Hooks 기본 예제: useState 카운터


// --- sections export must be last ---
export const sections: Record<SectionId, Section> = {
  intro: {
    id: 'intro',
    title: 'Introduction',
    description: 'React 튜토리얼에 오신 것을 환영합니다!',
    category: 'getting_started',
    icon: '📖',
    prev: null,
    next: 'setup',
    content: (
      <div>
        <h2>React란?</h2>
        <p><strong>React</strong>는 Facebook(현 Meta)에서 개발한 <b>UI 라이브러리</b>로, 전 세계적으로 가장 널리 사용되는 프론트엔드 기술 중 하나입니다.</p>
        <h3>React의 장점과 중요성</h3>
        <ul
          style={{
            marginBottom: '2em',
            background: '#484f54',
            padding: '1.5em 2em',
            borderRadius: '8px',
            border: '1px solid #eee',
            marginTop: '1.2em',
            marginLeft: 0,
            marginRight: 0,
            listStylePosition: 'inside',
          }}
        >
          <li style={{ marginBottom: '0.7em' }}><b>컴포넌트 기반</b>: UI를 재사용 가능한 작은 단위(컴포넌트)로 나눠 개발과 유지보수가 쉽습니다.</li>
          <li style={{ marginBottom: '0.7em' }}><b>빠른 렌더링</b>: 가상 DOM(Virtual DOM)으로 실제 DOM 변경을 최소화해 성능이 뛰어납니다.</li>
          <li style={{ marginBottom: '0.7em' }}><b>방대한 생태계</b>: 다양한 라이브러리, 툴, 커뮤니티가 활발하게 지원됩니다.</li>
          <li style={{ marginBottom: '0.7em' }}><b>단방향 데이터 흐름</b>: 데이터 흐름이 예측 가능해 대규모 애플리케이션 관리가 용이합니다.</li>
          <li style={{ marginBottom: '0.7em' }}><b>모바일/웹 동시 지원</b>: React Native를 통해 모바일 앱도 동일한 방식으로 개발할 수 있습니다.</li>
        </ul>
        <h3>왜 React를 배워야 할까요?</h3>
        <ul
          style={{
            marginBottom: '2em',
            background: '#484f54',
            padding: '1.5em 2em',
            borderRadius: '8px',
            border: '1px solid #eee',
            marginTop: '1.2em',
            marginLeft: 0,
            marginRight: 0,
            listStylePosition: 'inside',
          }}
        >
          <li style={{ marginBottom: '0.7em' }}>대기업부터 스타트업까지 다양한 기업에서 표준처럼 사용</li>
          <li style={{ marginBottom: '0.7em' }}>취업, 협업, 실무에서 높은 활용도</li>
          <li style={{ marginBottom: '0.7em' }}>최신 프론트엔드 트렌드와 기술을 빠르게 습득 가능</li>
        </ul>
      </div>
    ),
  },
  setup: {
    id: 'setup',
    title: 'Setup',
    description: 'React 개발 환경을 설정하는 방법을 알아봅니다.',
    category: 'getting_started',
    icon: '🛠️',
    prev: 'intro',
    next: 'components',
    content: setupContent,
  },
  components: {
    id: 'components',
    title: 'Components',
    description: 'React의 컴포넌트 개념을 배웁니다.',
    category: 'basics',
    icon: '🧩',
    prev: 'setup',
    next: 'props',
    content: (
      <div>
        <h2>컴포넌트란?</h2>
        <ul style={{
          marginBottom: '2em',
          background: '#484f54',
          padding: '1.5em 2em',
          borderRadius: '8px',
          border: '1px solid #eee',
          marginTop: '1.2em',
          marginLeft: 0,
          marginRight: 0,
          listStylePosition: 'inside',
        }}>
          <li style={{ marginBottom: '0.7em' }}><b>컴포넌트</b>는 UI를 구성하는 독립적인 블록입니다.</li>
          <li style={{ marginBottom: '0.7em' }}>각 컴포넌트는 자신만의 상태와 props를 가질 수 있습니다.</li>
          <li style={{ marginBottom: '0.7em' }}>재사용성과 유지보수성이 뛰어납니다.</li>
        </ul>
        {/* 함수형 컴포넌트 예제 */}
        <h3>1. 함수형 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><Welcome name="React" /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`function Welcome(props) {\n  return <h1>Hello, {props.name}!<\/h1>;\n}`}</MacCmd>
            }]}
          />
        </div>
        {/* JSX 예제 */}
        <h3>2. JSX</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><div>{'<Welcome name="React" />'}</div></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`<Welcome name=\"React\" />`}</MacCmd>
            }]}
          />
        </div>
        {/* 초급 예제 */}
        <h3>3. 간단한 인사 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><div>안녕하세요!</div></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`function Hello() {\n  return <div>안녕하세요!<\/div>;\n}`}</MacCmd>
            }]}
          />
        </div>
        {/* 중급 예제 */}
        <h3>4. props와 조건부 렌더링</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><Greeting name="홍길동" /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`function Greeting({ name }) {\n  return <h2>{name ? \`안녕하세요, \${name}님!\` : '이름을 입력하세요.'}<\/h2>;\n}`}</MacCmd>
            }]}
          />
        </div>
        {/* 고급 예제 */}
        <h3>5. 상태와 이벤트 활용</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><CounterButtonsDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <span style={{margin: '0 1em'}}>{count}</span>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
        {/* 실무 예제 */}
        <h3>6. 리스트 필터링 & 동적 렌더링</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><UserListDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction UserList() {\n  const [filter, setFilter] = useState('');\n  const users = ['Alice', 'Bob', 'Charlie', 'David'];\n  const filtered = users.filter(u => u.toLowerCase().includes(filter.toLowerCase()));\n  return (\n    <div>\n      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder=\"이름 검색\" />\n      <ul>\n        {filtered.map(u => <li key={u}>{u}</li>)}\n      </ul>\n    </div>\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
      </div>
    ),
  },
  props: {
    id: 'props',
    title: 'Props',
    description: '컴포넌트에 데이터를 전달하는 방법을 배웁니다.',
    category: 'basics',
    icon: '📦',
    prev: 'components',
    next: 'state',
    content: (
      <div>
        <ul
          style={{
            marginBottom: '2em',
            background: '#484f54',
            padding: '1.5em 2em',
            borderRadius: '8px',
            border: '1px solid #eee',
            marginTop: '1.2em',
            marginLeft: 0,
            marginRight: 0,
            listStylePosition: 'inside',
          }}
        >
          <li style={{ marginBottom: '0.7em' }}><b>Props</b>는 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용하는 객체입니다.</li>
          <li style={{ marginBottom: '0.7em' }}>컴포넌트의 재사용성과 유연성을 높여줍니다.</li>
          <li style={{ marginBottom: '0.7em' }}>props는 읽기 전용이며, 자식 컴포넌트에서 직접 수정할 수 없습니다.</li>
        </ul>
        <h3>1. 인사 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><Greeting name="React 사용자" /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`function Greeting(props) {\n  return <h2>안녕하세요, {props.name}!<\/h2>;\n}\n\n<Greeting name=\"React 사용자\" />`}</MacCmd>
            }]}
          />
        </div>
        <h3>2. 여러 props 전달</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><ProfileCard name="홍길동" age={28} job="Frontend Developer" /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`function ProfileCard(props) {\n  return (\n    <div>\n      <h3>{props.name}</h3>\n      <p>나이: {props.age}</p>\n      <p>직업: {props.job}</p>\n    </div>\n  );\n}\n\n<ProfileCard name=\"홍길동\" age={28} job=\"Frontend Developer\" />`}</MacCmd>
            }]}
          />
        </div>
        <h3>3. 모달 팝업에 props 전달</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><ModalDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import React, { useState } from 'react';\n\nfunction Modal({ open, onClose, message }) {\n  if (!open) return null;\n  return (\n    <div style={{\n      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',\n      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000\n    }}>\n      <div style={{ background: '#232323', color: '#eaeaea', padding: 32, borderRadius: 12, minWidth: 280, textAlign: 'center' }}>\n        <h3>Modal Popup</h3>\n        <p>{message}</p>\n        <button onClick={onClose}>Close</button>\n      </div>\n    </div>\n  );\n}\n\nfunction ModalDemo() {\n  const [open, setOpen] = useState(false);\n  const [value, setValue] = useState('Hello from parent!');\n  return (\n    <div>\n      <input value={value} onChange={e => setValue(e.target.value)} style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />\n      <button onClick={() => setOpen(true)} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>Open Modal</button>\n      <Modal open={open} onClose={() => setOpen(false)} message={value} />\n    </div>\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
        <h3>4. 커스텀 버튼 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><CustomButton color="#27c93f" label="확인" /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`function CustomButton({ color, label }) {\n  return (\n    <button style={{\n      background: color, color: '#fff', border: 'none', borderRadius: 6, padding: '0.6em 1.5em', fontSize: '1em', cursor: 'pointer'\n    }}>{label}</button>\n  );\n}\n\n<CustomButton color=\"#27c93f\" label=\"확인\" />`}</MacCmd>
            }]}
          />
        </div>
        <h3>5. 리스트 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><ItemList items={["React", "Vue", "Angular"]} /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`function ItemList({ items }) {\n  return (\n    <ul>\n      {items.map(item => <li key={item}>{item}</li>)}\n    </ul>\n  );\n}\n\n<ItemList items={[\"React\", \"Vue\", \"Angular\"]} />`}</MacCmd>
            }]}
          />
        </div>
        <h3>6. 토글 스위치 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><Toggle label="다크 모드" initial={false} /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction Toggle({ label, initial }) {\n  const [on, setOn] = useState(initial);\n  return (\n    <label style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#232323', color: '#eaeaea', borderRadius: 8, padding: '0.7em 1.2em', border: '1px solid #444', maxWidth: 320 }}>\n      <input type=\"checkbox\" checked={on} onChange={() => setOn(!on)} />\n      <span>{label}: {on ? 'ON' : 'OFF'}</span>\n    </label>\n  );\n}\n\n<Toggle label=\"다크 모드\" initial={false} />`}</MacCmd>
            }]}
          />
        </div>
      </div>
    ),
  },
  state: {
    id: 'state',
    title: 'State',
    description: '컴포넌트의 상태 관리 방법을 배웁니다.',
    category: 'basics',
    icon: '🔄',
    prev: 'props',
    next: 'hooks',
    content: (
      <div>
        
        <ul
          style={{
            marginBottom: '2em',
            background: '#484f54',
            padding: '1.5em 2em',
            borderRadius: '8px',
            border: '1px solid #eee',
            marginTop: '1.2em',
            marginLeft: 0,
            marginRight: 0,
            listStylePosition: 'inside',
          }}
        >
          <li style={{ marginBottom: '0.7em' }}><b>State</b>는 컴포넌트 내부에서 동적으로 변하는 데이터를 의미합니다.</li>
          <li style={{ marginBottom: '0.7em' }}>상태가 변경되면 컴포넌트가 다시 렌더링됩니다.</li>
          <li style={{ marginBottom: '0.7em' }}>useState 훅을 통해 상태를 선언하고 관리할 수 있습니다.</li>
        </ul>
        <h3>1. 기본 카운터</h3>
        <ExampleTab example={<CounterDemo />} code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`} showCaret={false} />
        <h3>2. 입력값 상태 관리</h3>
        <ExampleTab example={<InputExampleDemo />} code={`import { useState } from 'react';

function InputExample() {
  const [text, setText] = useState('');
  return (
    <input value={text} onChange={e => setText(e.target.value)} />
  );
}`} showCaret={false} />
        <h3>3. 배열/리스트 상태</h3>
        <ExampleTab example={<TodoListDemo />} code={`import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['공부하기', '운동하기']);
  const [input, setInput] = useState('');
  return (
    <div>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="새 할 일" />
      <button onClick={() => {
        if (input.trim()) {
          setTodos([...todos, input]);
          setInput('');
        }
      }}>추가</button>
    </div>
  );
}`} showCaret={false} />
        <h3>4. 객체 상태</h3>
        <ExampleTab example={<ProfileDemo />} code={`import { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({ name: '', age: 0 });
  return (
    <div>
      <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <input type="number" value={user.age} onChange={e => setUser({ ...user, age: Number(e.target.value) })} />
    </div>
  );
}`} showCaret={false} />
        <h3>5. 여러 state 동시 사용</h3>
        <ExampleTab example={<MultiStateDemo />} code={`import { useState } from 'react';

function MultiState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>{count}, {text}</p>
    </div>
  );
}`} showCaret={false} />
        <h3>6. 토글 스위치</h3>
        <ExampleTab example={<Toggle label="다크 모드" initial={false} />} code={`import { useState } from 'react';

function Toggle({ label, initial }) {
  const [on, setOn] = useState(initial);
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#232323', color: '#eaeaea', borderRadius: 8, padding: '0.7em 1.2em', border: '1px solid #444', maxWidth: 320 }}>
      <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
      <span>{label}: {on ? 'ON' : 'OFF'}</span>
    </label>
  );
}

<Toggle label="다크 모드" initial={false} />`} showCaret={false} />
        <h3>7. 실무 예제: 간단한 장바구니</h3>
        <ExampleTab example={<ShoppingCartDemo />} code={`import { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState<string[]>([]);
  const products = ['Apple', 'Banana', 'Orange'];
  const productIcons: Record<string, string> = { Apple: '🍎', Banana: '🍌', Orange: '🍊' };
  const maxCount = 17;
  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product}>
            {product} <button onClick={() => setCart([...cart, product])}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`} showCaret={false} />
        <h3>8. 실무 예제: 수량 조절이 가능한 장바구니</h3>
        <ExampleTab example={<AdvancedCartDemo />} code={`import { useState } from 'react';

const productIcons = { Apple: '🍎', Banana: '🍌', Orange: '🍊' };
const products = ['Apple', 'Banana', 'Orange'];

function AdvancedCart() {
  const [cart, setCart] = useState({ Apple: 0, Banana: 0, Orange: 0 });
  const add = (name) => setCart(c => ({ ...c, [name]: c[name] + 1 }));
  const remove = (name) => setCart(c => ({ ...c, [name]: Math.max(0, c[name] - 1) }));
  const reset = () => setCart({ Apple: 0, Banana: 0, Orange: 0 });
  return (
    <div>
      <ul>
        {products.map(name => (
          <li key={name}>
            {productIcons[name]} {name}
            <div style={{ display: 'flex', alignItems: 'center', minWidth: 160 }}>
              <button onClick={() => add(name)}>+</button>
              <button onClick={() => remove(name)} disabled={cart[name] === 0}>-</button>
              <span> {cart[name]}</span>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
      <div style={{ fontSize: '2em', marginTop: '1em' }}>
        {products.map(name => cart[name] > 0 && (
          <span key={name} style={{ marginRight: '0.5em' }}>{productIcons[name].repeat(cart[name])}</span>
        ))}
      </div>
    </div>
  );
}`} showCaret={false} />
        {/* useEffect 스타일 예제 */}
        <h3>3.5. useEffect 스타일 적용 예제</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><MountEffectDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false} desc={"컴포넌트가 마운트/언마운트될 때 각각 콘솔에 로그를 출력하는 useEffect 예제입니다."}>{`import { useEffect } from 'react';\n\nfunction MountEffectDemo() {\n  useEffect(() => {\n    console.log('컴포넌트 마운트됨');\n    return () => {\n      console.log('컴포넌트 언마운트됨');\n    };\n  }, []);\n  return <div>마운트/언마운트 시 콘솔에 로그</div>;\n}`}</MacCmd>
            }]}
          />
        </div>
      </div>
    ),
  },
  hooks: {
    id: 'hooks',
    title: 'Hooks 개요',
    description: 'React의 주요 훅(Hooks) 종류와 특징을 소개합니다.',
    category: 'hooks',
    icon: '🪝',
    prev: 'state',
    next: 'useState',
    content: (
      <div>
        <h2>React Hooks란?</h2>
        <ul style={{
          marginBottom: '2em',
          background: '#484f54',
          padding: '1.5em 2em',
          borderRadius: '8px',
          border: '1px solid #eee',
          marginTop: '1.2em',
          marginLeft: 0,
          marginRight: 0,
          listStylePosition: 'inside',
        }}>
          <li><b>Hooks</b>는 함수형 컴포넌트에서 React의 다양한 기능(상태, 생명주기, 참조 등)을 사용할 수 있게 해주는 함수입니다.</li>
        </ul>
        <h3>1. 등장 배경: 왜 Hooks가 필요했을까?</h3>
        <ul style={{ background: '#232323', color: '#eaeaea', padding: '1em 1.5em', borderRadius: 8, border: '1px solid #444', marginBottom: '1.5em', listStylePosition: 'inside' }}>
          <li>과거에는 <b>클래스 컴포넌트</b>에서만 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있었습니다.</li>
          <li>클래스 컴포넌트의 문제점:
            <ul style={{ margin: '0.5em 0 0.5em 1.2em', background: 'none', padding: 0, border: 'none', color: '#b5e853' }}>
              <li>로직 재사용이 어렵고, HOC/render props 패턴이 복잡함</li>
              <li>this 바인딩 실수, 긴 boilerplate 코드</li>
              <li>관련 없는 로직이 하나의 메서드(componentDidMount 등)에 섞임</li>
              <li>테스트와 유지보수가 어려움</li>
            </ul>
          </li>
          <li>함수형 컴포넌트의 단순함과 재사용성을 살리면서, 상태 관리와 부수효과 처리 등 고급 기능을 제공하기 위해 Hooks가 도입되었습니다. (React 16.8)</li>
        </ul>
        <h3>2. Hooks의 원칙(규칙)</h3>
        <ul style={{ background: '#232323', color: '#eaeaea', padding: '1em 1.5em', borderRadius: 8, border: '1px solid #444', marginBottom: '1.5em', listStylePosition: 'inside' }}>
          <li>Hook은 <b>반드시 함수형 컴포넌트의 최상위</b>에서만 호출해야 합니다. (조건문/반복문/중첩 함수 안에서 호출 금지)</li>
          <li>Hook 이름은 <b>use</b>로 시작해야 합니다. (예: useState, useMyCustomHook)</li>
          <li>React 버전 16.8 이상에서만 사용 가능</li>
        </ul>
        <h3>3. 주요 내장 Hooks</h3>
        <ul style={{
          background: '#232323', color: '#eaeaea', padding: '1em 1.5em', borderRadius: 8, border: '1px solid #444', marginBottom: '1.5em', listStylePosition: 'inside'
        }}>
          <li><b>useState</b>: 컴포넌트의 <b>상태</b>를 선언하고 관리</li>
          <li><b>useEffect</b>: <b>부수효과(side effect)</b> 처리 (예: 데이터 fetch, 구독, 타이머 등)</li>
          <li><b>useRef</b>: <b>DOM 참조</b> 또는 값 기억 (렌더링과 무관한 값 저장)</li>
          <li><b>useMemo</b>: <b>비싼 연산</b>의 결과를 <b>메모이제이션</b> (성능 최적화)</li>
          <li><b>useCallback</b>: <b>함수</b>를 메모이제이션 (불필요한 렌더링 방지)</li>
          <li><b>useReducer</b>: <b>복잡한 상태 로직</b>을 reducer 패턴으로 관리</li>
          <li><b>useContext</b>: <b>전역 데이터</b>를 컴포넌트 트리 전체에 전달</li>
        </ul>
        <h3>4. Hooks 사용 시 주의사항</h3>
        <ul style={{
          background: '#232323', color: '#eaeaea', padding: '1em 1.5em', borderRadius: 8, border: '1px solid #444', marginBottom: '1.5em', listStylePosition: 'inside'
        }}>
          <li>Hook은 <b>반드시 함수형 컴포넌트 최상위</b>에서만 호출해야 합니다. (조건문/반복문 안에서 호출 금지)</li>
          <li>Hook 이름은 <b>use</b>로 시작해야 합니다. (예: useState, useMyCustomHook)</li>
          <li>React 버전 16.8 이상에서만 사용 가능</li>
        </ul>
        <h3>5. 실습 안내</h3>
        <ul style={{
          background: '#484f54', color: '#fff', padding: '1em 1.5em', borderRadius: 8, border: '1px solid #eee', marginBottom: '1.5em', listStylePosition: 'inside'
        }}>
          <li>각 주요 Hook은 <b>별도의 페이지</b>에서 실습 예제와 함께 자세히 다룹니다.</li>
          <li>좌측 메뉴에서 원하는 Hook을 선택해 직접 실습해보세요.</li>
        </ul>
        <h3>6. 컴포넌트 생명주기와 Hooks</h3>
        <ul style={{ background: '#232323', color: '#eaeaea', padding: '1em 1.5em', borderRadius: 8, border: '1px solid #444', marginBottom: '1.5em', listStylePosition: 'inside' }}>
          <li><b>마운트(Mount):</b> 컴포넌트가 처음 화면에 나타날 때 <code>useEffect(() =&gt; &#123;...&#125;, [])</code> 콜백이 한 번 실행됩니다.</li>
          <li><b>업데이트(Update):</b> props나 state가 변경될 때 <code>useEffect(() =&gt; &#123;...&#125;, [deps])</code> 콜백이 해당 deps가 바뀔 때마다 실행됩니다.</li>
          <li><b>언마운트(Unmount):</b> 컴포넌트가 화면에서 사라질 때 <code>useEffect</code>의 return(cleanup) 함수가 실행되어 정리 작업을 할 수 있습니다.</li>
        </ul>
        <div style={{ textAlign: 'center', margin: '2em 0' }}>
          <img src="/lifecycle.svg" alt="React 컴포넌트 생명주기 다이어그램" style={{ width: 1000, margin: '2em auto', display: 'block', background: '#232323', borderRadius: 8, border: '1px solid #444' }} />
        </div>
      </div>
    ),
  },
  useState: {
    id: 'useState',
    title: 'useState',
    description: '컴포넌트의 상태를 관리하는 가장 기본적인 Hook',
    category: 'hooks',
    icon: '🔢',
    prev: 'hooks',
    next: 'useEffect',
    content: (
      <div>
        
        <h4>1. 기본 카운터</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CounterDemo />} code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`} showCaret={false} desc={"useState로 count 상태를 선언하고, 버튼 클릭 시 값을 1씩 증가시키는 가장 기본적인 카운터 예제입니다."} />
        </div>
        <h4>2. 입력값 상태 관리</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<InputExampleDemo />} code={`import { useState } from 'react';

function InputExample() {
  const [text, setText] = useState('');
  return (
    <input value={text} onChange={e => setText(e.target.value)} />
  );
}`} showCaret={false} desc={"useState로 입력값(text)을 관리하고, input의 onChange로 상태를 실시간 반영하는 예제입니다."} />
        </div>
        <h4>3. 배열/리스트 상태</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<TodoListDemo />} code={`import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['공부하기', '운동하기']);
  const [input, setInput] = useState('');
  return (
    <div>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="새 할 일" />
      <button onClick={() => {
        if (input.trim()) {
          setTodos([...todos, input]);
          setInput('');
        }
      }}>추가</button>
    </div>
  );
}`} showCaret={false} desc={"useState로 배열(리스트) 상태를 관리하고, 새로운 할 일을 추가하는 간단한 투두리스트 예제입니다."} />
        </div>
        <h4>4. 객체 상태</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<ProfileDemo />} code={`import { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({ name: '', age: 0 });
  return (
    <div>
      <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <input type="number" value={user.age} onChange={e => setUser({ ...user, age: Number(e.target.value) })} />
    </div>
  );
}`} showCaret={false} desc={"useState로 객체 형태의 상태(user)를 관리하고, 각각의 필드를 개별적으로 업데이트하는 예제입니다."} />
        </div>
        <h4>5. 여러 state 동시 사용</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<MultiStateDemo />} code={`import { useState } from 'react';

function MultiState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>{count}, {text}</p>
    </div>
  );
}`} showCaret={false} desc={"useState를 여러 번 사용해 서로 다른 상태(count, text)를 동시에 관리하는 예제입니다."} />
        </div>
        <h4>6. 토글 스위치</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<Toggle label="다크 모드" initial={false} />} code={`import { useState } from 'react';

function Toggle({ label, initial }) {
  const [on, setOn] = useState(initial);
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#232323', color: '#eaeaea', borderRadius: 8, padding: '0.7em 1.2em', border: '1px solid #444', maxWidth: 320 }}>
      <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
      <span>{label}: {on ? 'ON' : 'OFF'}</span>
    </label>
  );
}

<Toggle label="다크 모드" initial={false} />`} showCaret={false} desc={"useState로 boolean 상태를 관리하며, 체크박스 토글에 따라 ON/OFF가 바뀌는 스위치 예제입니다."} />
        </div>
      </div>
    ),
  },
  useEffect: {
    id: 'useEffect',
    title: 'useEffect',
    description: '컴포넌트의 side effect(부수효과)를 처리하는 Hook',
    category: 'hooks',
    icon: '⏰',
    prev: 'useState',
    next: 'useRef',
    content: (
      <div>
        
        <h4>1. Mount/Unmount Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<MountEffectDemo />} code={`import { useEffect } from 'react';

function MountEffectDemo() {
  useEffect(() => {
    console.log('컴포넌트 마운트됨');
    return () => {
      console.log('컴포넌트 언마운트됨');
    };
  }, []);
  return <div>마운트/언마운트 시 콘솔에 로그</div>;
}`} showCaret={false} desc={"컴포넌트가 마운트될 때와 언마운트될 때 각각 콘솔에 로그를 출력하는 예제입니다. useEffect의 cleanup(return) 함수가 언마운트 시 동작함을 보여줍니다."} />
        </div>
        <h4>2. Dependency Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<DepsEffectDemo />} code={`import { useState, useEffect } from 'react';

function DepsEffectDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`카운트: \${count}\`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <span style={{ marginLeft: 8 }}>{count}</span>
    </div>
  );
}`} showCaret={false} desc={"count 값이 변경될 때마다 브라우저 탭의 제목(document.title)을 동적으로 변경하는 예제입니다. useEffect의 의존성 배열([count])에 따라 effect가 재실행됩니다."} />
        </div>
        <h4>3. Fetch Data Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<FetchEffectDemo />} code={`import { useState, useEffect } from 'react';

function FetchEffectDemo() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')\n      .then(res => res.json())\n      .then(json => setData(json));\n  }, []);\n  return <pre>{JSON.stringify(data, null, 2)}</pre>;\n}`} showCaret={false} desc={"컴포넌트가 마운트될 때 한 번만 fetch로 외부 데이터를 받아와 상태(data)에 저장하는 예제입니다. 의존성 배열이 []이므로 최초 1회만 실행됩니다."} />
        </div>
        <h4>4. Timer Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<TimerEffectDemo />} code={`import { useState, useEffect } from 'react';

function TimerEffectDemo() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSec(s => s + 1), 1000);\n    return () => clearInterval(id);\n  }, []);\n  return <div>타이머: {sec}초</div>;\n}`} showCaret={false} desc={"컴포넌트가 마운트될 때 1초마다 sec 상태를 증가시키는 타이머를 시작하고, 언마운트 시 타이머를 정리(clearInterval)하는 예제입니다."} />
        </div>
        <h4>5. Resize Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<ResizeEffectDemo />} code={`import { useState, useEffect } from 'react';

function ResizeEffectDemo() {
  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const onResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', onResize);\n    return () => window.removeEventListener('resize', onResize);\n  }, []);\n  return <div>윈도우 너비: {width}px</div>;\n}`} showCaret={false} desc={"윈도우 크기가 변경될 때마다 현재 창의 너비를 상태로 관리하는 예제입니다. 이벤트 리스너 등록/해제(cleanup) 패턴을 보여줍니다."} />
        </div>
      </div>
    ),
  },
  useRef: {
    id: 'useRef',
    title: 'useRef',
    description: 'DOM 요소나 값을 참조할 때 사용하는 Hook',
    category: 'hooks',
    icon: '📌',
    prev: 'useEffect',
    next: 'useMemo',
    content: (
      <div>
        
        <h4>1. DOM 요소 참조</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<RefFocusDemo />} code={`import { useRef } from 'react';

function RefFocusDemo() {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current && inputRef.current.focus()}>포커스</button>
    </div>
  );
}`} showCaret={false} desc={"useRef로 input DOM 요소를 참조하고, 버튼 클릭 시 해당 input에 포커스를 주는 예제입니다."} />
        </div>
        <h4>2. 이전 값 기억</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<RefPrevValueDemo />} code={`import { useRef, useState, useEffect } from 'react';

function RefPrevValueDemo() {
  const [value, setValue] = useState('');
  const prevValue = useRef('');
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <div>이전 값: {prevValue.current}</div>
    </div>
  );
}`} showCaret={false} desc={"useRef로 렌더링과 무관하게 이전 입력값을 기억하는 예제입니다. useEffect로 값이 바뀔 때마다 ref를 갱신합니다."} />
        </div>
        <h4>3. setInterval 제어</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<RefIntervalDemo />} code={`import { useRef, useState, useEffect } from 'react';

function RefIntervalDemo() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => setCount(c => c + 1), 1000);
    }
  };
  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  useEffect(() => stop, []);
  return (
    <div>
      <div>카운트: {count}</div>
      <button onClick={start}>시작</button>
      <button onClick={stop}>정지</button>
    </div>
  );
}`} showCaret={false} desc={"useRef로 setInterval의 id를 저장하고, 시작/정지 버튼으로 타이머를 제어하는 예제입니다. 언마운트 시 타이머를 정리합니다."} />
        </div>
        <h4>4. DOM 스타일 직접 변경</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<RefDomStyleDemo />} code={`import { useRef } from 'react';

function RefDomStyleDemo() {
  const boxRef = useRef(null);
  const changeColor = () => {
    if (boxRef.current) {
      boxRef.current.style.background = '#27c93f';
    }
  };
  return (
    <div>
      <div ref={boxRef} style={{ width: 120, height: 60, background: '#232323', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 8 }}>Box</div>
      <button onClick={changeColor}>배경색 변경</button>
    </div>
  );
}`} showCaret={false} desc={"useRef로 DOM 요소에 직접 접근해 스타일(background)을 변경하는 예제입니다."} />
        </div>
      </div>
    ),
  },
  useMemo: {
    id: 'useMemo',
    title: 'useMemo',
    description: '비싼 연산 결과를 메모이제이션할 때 사용하는 Hook',
    category: 'hooks',
    icon: '🧠',
    prev: 'useRef',
    next: 'useCallback',
    content: (
      <div>
        
        <h4>1. 비싼 연산 메모이제이션</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<MemoExpensiveCalcDemo />} code={`import { useState, useMemo } from 'react';

function MemoExpensiveCalcDemo() {
  const [num, setNum] = useState(1);
  const [other, setOther] = useState('');
  const fib = useMemo(() => {
    function fibo(n: number): number {
      if (n <= 1) return n;
      return fibo(n - 1) + fibo(n - 2);
    }
    return fibo(num);
  }, [num]);
  return (
    <div>
      <label>
        피보나치 n: 
        <input type="number" value={num} min={1} max={35} onChange={e => setNum(Number(e.target.value))} style={{ margin: '0 8px', width: 60 }} />
      </label>
      <span>결과: {fib}</span>
      <div style={{ marginTop: 12 }}>
        <input value={other} onChange={e => setOther(e.target.value)} placeholder="다른 입력 (성능 영향 없음)" style={{ top: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      </div>
    </div>
  );
}`} showCaret={false} desc={"useMemo로 비싼 연산(피보나치 수열 계산) 결과를 메모이제이션하여, num이 바뀔 때만 연산이 다시 실행되도록 최적화한 예제입니다."} />
        </div>
        <h4>2. 리스트 필터/정렬 메모이제이션</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<MemoFilterSortDemo />} code={`import { useState, useMemo } from 'react';

function MemoFilterSortDemo() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState(false);
  const items = useMemo(() => Array.from({ length: 1000 }, (_, i) => \`Item \${i + 1}\`), []);\n  const filtered = useMemo(() => {\n    let result = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));\n    if (sort) result = [...result].sort();\n    return result;\n  }, [items, query, sort]);\n  return (\n    <div>\n      <input value={query} onChange={e => setQuery(e.target.value)} placeholder=\"검색\" style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />\n      <label style={{ marginRight: 8 }}>\n        <input type=\"checkbox\" checked={sort} onChange={e => setSort(e.target.checked)} /> 정렬\n      </label>\n      <div style={{ maxHeight: 120, overflowY: 'auto', background: '#232323', borderRadius: 8, marginTop: 8, padding: 8 }}>\n        {filtered.slice(0, 20).map(item => <div key={item}>{item}</div>)}\n        {filtered.length > 20 && <div style={{ color: '#aaa' }}>...and {filtered.length - 20} more</div>}\n      </div>\n    </div>\n  );\n}`} showCaret={false} desc={"useMemo로 대량 리스트의 필터링/정렬 결과를 메모이제이션하여, 불필요한 연산을 방지하는 예제입니다."} />
        </div>
        <h4>3. 의존성에 따른 값 메모이제이션</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<MemoDependencyDemo />} code={`import { useState, useMemo } from 'react';

function MemoDependencyDemo() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const sum = useMemo(() => a + b, [a, b]);
  return (
    <div>
      <input type="number" value={a} onChange={e => setA(Number(e.target.value))} style={{ marginRight: 8, width: 60 }} />
      + 
      <input type="number" value={b} onChange={e => setB(Number(e.target.value))} style={{ margin: '0 8px', width: 60 }} />
      = <span>{sum}</span>
    </div>
  );
}`} showCaret={false} desc={"useMemo의 의존성 배열([a, b])에 따라 sum 값이 메모이제이션되는 간단한 예제입니다."} />
        </div>
        <h4>4. 렌더 최적화 예제</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<MemoRenderOptDemo />} code={`import { useState, useMemo } from 'react';

function MemoRenderOptDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const expensive = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 100000000; i++) total += 1;
    return total;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: 8, padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>+1</button>
      <span>Count: {count}</span>
      <div style={{ marginTop: 8 }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="입력 (성능 영향 없음)" style={{ padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      </div>
      <div style={{ marginTop: 8, color: '#b5e853' }}>비싼 연산 결과: {expensive}</div>
    </div>
  );
}`} showCaret={false} desc={"useMemo로 비싼 연산(expensive)을 count가 바뀔 때만 다시 계산하도록 하여, 불필요한 렌더링/계산을 방지하는 예제입니다."} />
        </div>
      </div>
    ),
  },
  useCallback: {
    id: 'useCallback',
    title: 'useCallback',
    description: '함수를 메모이제이션할 때 사용하는 Hook',
    category: 'hooks',
    icon: '🔁',
    prev: 'useMemo',
    next: 'useReducer',
    content: (
      <div>
        
        <h4>1. 자식 컴포넌트에 함수 전달</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CallbackChildDemo />} code={`import React, { useState, useCallback } from 'react';

const MemoChild = React.memo(function MemoChild({ onClick }) {
  console.log('자식 렌더');
  return <button onClick={onClick}>자식 버튼</button>;
});

function CallbackChildDemo() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(c => c + 1), []);
  return (
    <div>
      <MemoChild onClick={handleClick} />
      <div style={{ marginTop: 8 }}>카운트: {count}</div>
    </div>
  );
}`} showCaret={false} desc={"useCallback으로 handleClick 함수를 메모이제이션하여, 자식(MemoChild)에게 전달해도 불필요한 렌더링이 발생하지 않도록 하는 예제입니다."} />
        </div>
        <h4>2. 의존성 배열 활용</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CallbackDepsDemo />} code={`import React, { useState, useCallback } from 'react';

function CallbackDepsDemo() {
  const [value, setValue] = useState('');
  const [log, setLog] = useState([]);
  const handleAdd = useCallback(() => {
    setLog(l => [...l, value]);
    setValue('');
  }, [value]);
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {log.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}`} showCaret={false} desc={"useCallback의 의존성 배열([value])에 따라 handleAdd 함수가 새로 생성되는 예제입니다."} />
        </div>
        <h4>3. 리스트 항목 추가/삭제</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CallbackListDemo />} code={`import React, { useState, useCallback } from 'react';

function CallbackListDemo() {
  const [items, setItems] = useState([]);
  const addItem = useCallback(() => setItems(items => [...items, \`Item\${items.length + 1}\`]), []);
  const removeItem = useCallback((idx) => setItems(items => items.filter((_, i) => i !== idx)), []);
  return (
    <div>
      <button onClick={addItem}>항목 추가</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => removeItem(i)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`} showCaret={false} desc={"useCallback으로 리스트 추가/삭제 함수를 메모이제이션하여, 불필요한 렌더링을 방지하는 예제입니다."} />
        </div>
        <h4>4. useCallback 없이 함수 전달</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CallbackNoMemoDemo />} code={`import React, { useState } from 'react';

const MemoChild = React.memo(function MemoChild({ onClick }) {
  console.log('자식 렌더');
  return <button onClick={onClick}>자식 버튼</button>;
});

function CallbackNoMemoDemo() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(c => c + 1);
  return (
    <div>
      <MemoChild onClick={handleClick} />
      <div style={{ marginTop: 8 }}>카운트: {count}</div>
      <div style={{ color: '#b5e853', marginTop: 8, fontSize: 13 }}>(useCallback 없이: 자식이 매번 렌더됨)</div>
    </div>
  );
}`} showCaret={false} desc={"useCallback 없이 함수를 자식에 전달하면, 부모가 렌더될 때마다 함수가 새로 생성되어 자식도 매번 렌더링되는 현상을 보여주는 예제입니다."} />
        </div>
      </div>
    ),
  },
  useReducer: {
    id: 'useReducer',
    title: 'useReducer',
    description: '복잡한 상태 로직을 관리할 때 사용하는 Hook',
    category: 'hooks',
    icon: '🗂️',
    prev: 'useCallback',
    next: 'useContext',
    content: (
      <div>
        <h4>1. 카운터 리듀서</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<UseReducerDemo />}
            code={`import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    default: return state;
  }
}

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      <span style={{ margin: '0 1em' }}>{state.count}</span>
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
    </div>
  );
}`}
            showCaret={false}
            desc={"useReducer로 카운트 상태를 관리하는 예제입니다. dispatch로 'inc'/'dec' 액션을 보내 상태를 변경합니다."}
          />
        </div>
      </div>
    ),
  },
  useContext: {
    id: 'useContext',
    title: 'useContext',
    description: '컴포넌트 트리 전체에 데이터를 전달할 때 사용하는 Hook',
    category: 'hooks',
    icon: '🌐',
    prev: 'useReducer',
    next: null,
    content: (
      <div>
        <h4>1. Context 값 전달</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<UseContextDemo />}
            code={`import { createContext, useContext } from 'react';

const MyContext = createContext('기본값');

function Child() {
  const value = useContext(MyContext);
  return <div>Context 값: {value}</div>;
}

function UseContextDemo() {
  return (
    <MyContext.Provider value="공유된 값">
      <Child />
    </MyContext.Provider>
  );
}`}
            showCaret={false}
            desc={"useContext로 Context 값을 하위 컴포넌트에 전달하고, useContext 훅으로 값을 읽는 예제입니다."}
          />
        </div>
      </div>
    ),
  },
  routing: {
    id: 'routing',
    title: 'Routing',
    description: 'React에서 라우팅을 구현하는 방법을 배웁니다.',
    category: 'advanced',
    icon: '🗺️',
    prev: 'context',
    next: null,
  },
  context: {
    id: 'context',
    title: 'Context',
    description: 'Context API로 전역 상태를 관리하는 방법을 배웁니다.',
    category: 'advanced',
    icon: '🌐',
    prev: 'hooks',
    next: 'routing',
    content: (
      <div>
        <h2>Context API</h2>
        <p>Context를 사용하면 컴포넌트 트리 전체에 데이터를 전달할 수 있습니다.</p>
      </div>
    ),
  },
};
  


function UseReducerDemo() {
  const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
      case 'inc': return { count: state.count + 1 };
      case 'dec': return { count: state.count - 1 };
      default: return state;
    }
  };
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: 'dec' })} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>-</button>
      <span style={{ margin: '0 1em', color: '#eaeaea' }}>{state.count}</span>
      <button onClick={() => dispatch({ type: 'inc' })} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>+</button>
    </div>
  );
}

function UseContextDemo() {
  const MyContext = React.createContext('기본값');
  function Child() {
    const value = React.useContext(MyContext);
    return <div>Context 값: {value}</div>;
  }
  return (
    <MyContext.Provider value="공유된 값">
      <Child />
    </MyContext.Provider>
  );
}
// ... existing code ...
  
// --- useEffect Demo Components ---
function MountEffectDemo() {
  React.useEffect(() => {
    console.log('컴포넌트 마운트됨');
    return () => {
      console.log('컴포넌트 언마운트됨');
    };
  }, []);
  return <div style={{ color: '#eaeaea' }}>마운트/언마운트 시 콘솔에 로그</div>;
}

function DepsEffectDemo() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.title = `카운트: ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer', marginRight: 8 }}>+1</button>
      <span style={{ color: '#eaeaea' }}>{count}</span>
    </div>
  );
}

function FetchEffectDemo() {
  const [data, setData] = React.useState<any>(null);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function TimerEffectDemo() {
  const [sec, setSec] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setSec(s => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return <div>타이머: {sec}초</div>;
}

function ResizeEffectDemo() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return <div>윈도우 너비: {width}px</div>;
}
  
// --- useRef Demo Components ---
function RefFocusDemo() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      <button onClick={() => inputRef.current && inputRef.current.focus()} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>포커스</button>
    </div>
  );
}

function RefPrevValueDemo() {
  const [value, setValue] = React.useState('');
  const prevValue = React.useRef('');
  React.useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return (
    <div style={{ color: '#eaeaea' }}>
      <input value={value} onChange={e => setValue(e.target.value)} style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      <div>이전 값: {prevValue.current}</div>
    </div>
  );
}

function RefIntervalDemo() {
  const [count, setCount] = React.useState(0);
  const intervalRef = React.useRef<number | null>(null);
  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => setCount(c => c + 1), 1000);
    }
  };
  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  React.useEffect(() => stop, []);
  return (
    <div style={{ color: '#eaeaea' }}>
      <div>카운트: {count}</div>
      <button onClick={start} style={{ marginRight: 8, padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>시작</button>
      <button onClick={stop} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>정지</button>
    </div>
  );
}

function RefDomStyleDemo() {
  const boxRef = React.useRef<HTMLDivElement>(null);
  const changeColor = () => {
    if (boxRef.current) {
      boxRef.current.style.background = '#27c93f';
    }
  };
  return (
    <div>
      <div ref={boxRef} style={{ width: 120, height: 60, background: '#232323', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 8 }}>Box</div>
      <button onClick={changeColor} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>배경색 변경</button>
    </div>
  );
}
  
// --- useMemo Demo Components ---
function MemoExpensiveCalcDemo() {
  const [num, setNum] = React.useState(1);
  const [other, setOther] = React.useState('');
  const fib = React.useMemo(() => {
    function fibo(n: number): number {
      if (n <= 1) return n;
      return fibo(n - 1) + fibo(n - 2);
    }
    return fibo(num);
  }, [num]);
  return (
    <div style={{ color: '#eaeaea' }}>
      <label>
        피보나치 n: 
        <input type="number" value={num} min={1} max={35} onChange={e => setNum(Number(e.target.value))} style={{ margin: '0 8px', width: 60 }} />
      </label>
      <span>결과: {fib}</span>
      <div style={{ marginTop: 12 }}>
        <input value={other} onChange={e => setOther(e.target.value)} placeholder="다른 입력 (성능 영향 없음)" style={{ top: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      </div>
    </div>
  );
}

function MemoFilterSortDemo() {
  const [query, setQuery] = React.useState('');
  const [sort, setSort] = React.useState(false);
  const items = React.useMemo(() => Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`), []);
  const filtered = React.useMemo(() => {
    let result = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    if (sort) result = [...result].sort();
    return result;
  }, [items, query, sort]);
  return (
    <div style={{ color: '#eaeaea' }}>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="검색" style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      <label style={{ marginRight: 8 }}>
        <input type="checkbox" checked={sort} onChange={e => setSort(e.target.checked)} /> 정렬
      </label>
      <div style={{ maxHeight: 120, overflowY: 'auto', background: '#232323', borderRadius: 8, marginTop: 8, padding: 8 }}>
        {filtered.slice(0, 20).map(item => <div key={item}>{item}</div>)}
        {filtered.length > 20 && <div style={{ color: '#aaa' }}>...and {filtered.length - 20} more</div>}
      </div>
    </div>
  );
}

function MemoDependencyDemo() {
  const [a, setA] = React.useState(1);
  const [b, setB] = React.useState(1);
  const sum = React.useMemo(() => a + b, [a, b]);
  return (
    <div style={{ color: '#eaeaea' }}>
      <input type="number" value={a} onChange={e => setA(Number(e.target.value))} style={{ marginRight: 8, width: 60 }} />
      +
      <input type="number" value={b} onChange={e => setB(Number(e.target.value))} style={{ margin: '0 8px', width: 60 }} />
      = <span>{sum}</span>
    </div>
  );
}

function MemoRenderOptDemo() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');
  const expensive = React.useMemo(() => {
    let total = 0;
    for (let i = 0; i < 100000000; i++) total += 1;
    return total;
  }, [count]);
  return (
    <div style={{ color: '#eaeaea' }}>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: 8, padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>+1</button>
      <span>Count: {count}</span>
      <div style={{ marginTop: 8 }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="입력 (성능 영향 없음)" style={{ padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      </div>
      <div style={{ marginTop: 8, color: '#b5e853' }}>비싼 연산 결과: {expensive}</div>
    </div>
  );
}
  
// --- useCallback Demo Components ---
const MemoChild = React.memo(function MemoChild({ onClick }: { onClick: () => void }) {
  console.log('자식 렌더');
  return <button onClick={onClick} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>자식 버튼</button>;
});

function CallbackChildDemo() {
  const [count, setCount] = React.useState(0);
  const handleClick = React.useCallback(() => setCount(c => c + 1), []);
  return (
    <div style={{ color: '#eaeaea' }}>
      <MemoChild onClick={handleClick} />
      <div style={{ marginTop: 8 }}>카운트: {count}</div>
    </div>
  );
}

function CallbackDepsDemo() {
  const [value, setValue] = React.useState('');
  const [log, setLog] = React.useState<string[]>([]);
  const handleAdd = React.useCallback(() => {
    setLog(l => [...l, value]);
    setValue('');
  }, [value]);
  return (
    <div style={{ color: '#eaeaea' }}>
      <input value={value} onChange={e => setValue(e.target.value)} style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />
      <button onClick={handleAdd} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>추가</button>
      <ul style={{ marginTop: 8 }}>
        {log.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}

function CallbackListDemo() {
  const [items, setItems] = React.useState<string[]>([]);
  const addItem = React.useCallback(() => setItems(items => [...items, `Item ${items.length + 1}`]), []);
  const removeItem = React.useCallback((idx: number) => setItems(items => items.filter((_, i) => i !== idx)), []);
  return (
    <div style={{ color: '#eaeaea' }}>
      <button onClick={addItem} style={{ marginRight: 8, padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer' }}>항목 추가</button>
      <ul style={{ marginTop: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            {item}
            <button onClick={() => removeItem(i)} style={{ marginLeft: 8, padding: '0.2em 0.8em', borderRadius: 6, background: '#444', color: '#fff', border: 'none', cursor: 'pointer' }}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CallbackNoMemoDemo() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(c => c + 1);
  return (
    <div style={{ color: '#eaeaea' }}>
      <MemoChild onClick={handleClick} />
      <div style={{ marginTop: 8 }}>카운트: {count}</div>
      <div style={{ color: '#b5e853', marginTop: 8, fontSize: 13 }}>(useCallback 없이: 자식이 매번 렌더됨)</div>
    </div>
  );
}
  
// ... existing code ...
