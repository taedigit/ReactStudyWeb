import React from 'react';
import type { Section, SectionId } from '../types/section';
import { TabComponent } from '../components/TabComponent';
import { MacCmd } from '../components/MacCmd';

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

// MacCmd 스타일 예제 wrapper (코드블럭 아님, 예제용)
function MacCmdExampleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#1e1e1e',
      borderRadius: '10px',
      margin: '0.5em 0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      border: '1px solid #222',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '28px',
        background: '#232323',
        padding: '0 12px',
        borderBottom: '1px solid #222',
        gap: '8px',
      }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
      </div>
      <div style={{
        background: 'transparent',
        color: '#eaeaea',
        padding: '1em',
        fontFamily: 'Menlo, Monaco, Consolas, monospace',
        fontSize: '1em',
        margin: 0,
        lineHeight: '1.6',
        overflowX: 'auto',
      }}>
        {children}
      </div>
    </div>
  );
}

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
        <h3>예시: 함수형 컴포넌트</h3>
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
        <h3>예시: JSX</h3>
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
        <h3>초급 예제: 간단한 인사 컴포넌트</h3>
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
        <h3>중급 예제: props와 조건부 렌더링</h3>
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
        <h3>고급 예제: 상태와 이벤트 활용</h3>
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
        <h3>실무 예제: 리스트 필터링 & 동적 렌더링</h3>
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
        <h2>State란?</h2>
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
        <h3>1. 기본 카운터 예제</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><CounterDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>증가</button>\n    </div>\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
        <h3>2. 입력값 상태 관리</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><InputExampleDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction InputExample() {\n  const [text, setText] = useState('');\n  return (\n    <input value={text} onChange={e => setText(e.target.value)} />\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
        <h3>3. 배열/리스트 상태</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><TodoListDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction TodoList() {\n  const [todos, setTodos] = useState(['공부하기', '운동하기']);\n  const [input, setInput] = useState('');\n  return (\n    <div>\n      <ul>\n        {todos.map((todo, i) => <li key={i}>{todo}</li>)}\n      </ul>\n      <input value={input} onChange={e => setInput(e.target.value)} placeholder=\"새 할 일\" />\n      <button onClick={() => {\n        if (input.trim()) {\n          setTodos([...todos, input]);\n          setInput('');\n        }\n      }}>추가</button>\n    </div>\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
        <h3>4. 객체 상태</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><ProfileDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction Profile() {\n  const [user, setUser] = useState({ name: '', age: 0 });\n  return (\n    <div>\n      <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />\n      <input type=\"number\" value={user.age} onChange={e => setUser({ ...user, age: Number(e.target.value) })} />\n    </div>\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
        <h3>5. 여러 state 동시 사용</h3>
        <div style={stateExampleBlockStyle}>
          <TabComponent
            tabs={[{
              label: 'Example',
              content: <MacCmdExampleWrapper><MultiStateDemo /></MacCmdExampleWrapper>
            }, {
              label: 'Source',
              content: <MacCmd showCaret={false}>{`import { useState } from 'react';\n\nfunction MultiState() {\n  const [count, setCount] = useState(0);\n  const [text, setText] = useState('');\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n      <input value={text} onChange={e => setText(e.target.value)} />\n      <p>{count}, {text}</p>\n    </div>\n  );\n}`}</MacCmd>
            }]}
          />
        </div>
      </div>
    ),
  },
  hooks: {
    id: 'hooks',
    title: 'Hooks',
    description: 'React의 훅(Hooks) 사용법을 배웁니다.',
    category: 'basics',
    icon: '🪝',
    prev: 'state',
    next: 'context',
  },
  context: {
    id: 'context',
    title: 'Context',
    description: 'Context API로 전역 상태를 관리하는 방법을 배웁니다.',
    category: 'advanced',
    icon: '🌐',
    prev: 'hooks',
    next: 'routing',
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
}; 