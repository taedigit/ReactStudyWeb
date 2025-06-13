import React from 'react';
import type { Section, SectionId } from '../types/section';
import { MacCmd } from '../components/MacCmd';
import { ExampleTab } from '../components/ExampleTab';
import { Button, Input, Select as AntdSelect, Checkbox, Switch, DatePicker, Modal as AntdModal, Table, notification, message, Tabs, Dropdown, Menu, Pagination, Progress, Avatar, Badge, Tag, Collapse, Tooltip, Popconfirm } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import MuiButton from '@mui/material/Button';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import MuiTextField from '@mui/material/TextField';
import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiCheckbox from '@mui/material/Checkbox';
import MuiSwitch from '@mui/material/Switch';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiPaper from '@mui/material/Paper';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import MuiMenu from '@mui/material/Menu';
import MuiLinearProgress from '@mui/material/LinearProgress';
import MuiAvatar from '@mui/material/Avatar';
import MuiBadge from '@mui/material/Badge';
import MuiChip from '@mui/material/Chip';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiTooltip from '@mui/material/Tooltip';
import MuiIcon from '@mui/material/Icon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FetchAPI from '../sections/api/FetchAPI';
import AxiosExample from '../sections/api/AxiosExample';
import TanStackQueryExample from '../sections/api/TanStackQueryExample';

const nvmInstallScript = `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# 터미널 재시작 또는 아래 명령 실행
export NVM_DIR="$([ -z \\\${XDG_CONFIG_HOME-} ] && printf %s \\\${HOME}/.nvm || printf %s \\\${XDG_CONFIG_HOME}/nvm)"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm`;

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
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`mkdir my-react-app\ncd my-react-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>React 및 관련 패키지 설치</strong><br />
        <div>npm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`npm install react react-dom`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`yarn add react react-dom`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>CRA(Create React App)로 프로젝트 생성 (권장)</strong><br />
        <a href="https://create-react-app.dev/docs/getting-started/" target="_blank" rel="noopener noreferrer">CRA 공식 설치 가이드</a>
        <div>npm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`npx create-react-app my-app`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`yarn create react-app my-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>Vite로 React 프로젝트 생성 (추천)</strong><br />
        <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">Vite 공식 설치 가이드</a>
        <div>npm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`npm create vite@latest my-vite-app -- --template react`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`yarn create vite my-vite-app --template react`}</MacCmd>
        <div>pnpm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`pnpm create vite my-vite-app --template react`}</MacCmd>
        <div style={{ marginTop: '0.5em' }}>설치 후:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`cd my-vite-app\nnpm install\nnpm run dev`}</MacCmd>
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
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`npx create-next-app@latest my-next-app`}</MacCmd>
        <div>yarn 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`yarn create next-app my-next-app`}</MacCmd>
        <div>pnpm 사용 시:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`pnpm create next-app my-next-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>설치 중 잘못된 경우(실수로 잘못 설치/실행했을 때 대처법)</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>잘못 설치했거나, 의도와 다른 템플릿/패키지가 설치된 경우 아래 명령어로 정리 후 재설치하세요.</b>
        </div>
        <div>1. <b>node_modules, lock 파일 삭제</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`rm -rf node_modules package-lock.json yarn.lock`}</MacCmd>
        <div>2. <b>다시 패키지 설치</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`npm install`}</MacCmd>
        <div style={{ marginTop: '0.7em' }}>만약 프로젝트 폴더 자체를 잘못 만들었다면, 폴더를 삭제하고 처음부터 다시 생성하세요.</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`cd ..\nrm -rf my-react-app my-vite-app my-next-app`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>여러 포트에서 Node.js가 실행 중일 때(포트 충돌 해결)</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>여러 포트(예: 3000, 5173 등)에서 Node.js가 실행 중이라면 아래 명령어로 프로세스를 종료한 뒤 원하는 포트로 다시 실행하세요.</b>
        </div>
        <div><b>Windows PowerShell:</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`for /f "tokens=5" %a in ('netstat -aon | findstr :3000') do taskkill /F /PID %a\nfor /f "tokens=5" %a in ('netstat -aon | findstr :5173') do taskkill /F /PID %a`}</MacCmd>
        <div><b>Mac/Linux (터미널):</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`lsof -i :3000 -t | xargs kill -9\nlsof -i :5173 -t | xargs kill -9`}</MacCmd>
        <div style={{ margin: '0.7em 0' }}>이후 원하는 포트로 개발 서버를 다시 실행하세요.</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`npm run dev`}</MacCmd>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>회사/기관 등 보안 환경에서 npm 설치가 안 될 때 (프록시 설정)</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>사내망, 방화벽, 프록시 등으로 npm install이 안 될 경우 아래처럼 프록시를 설정할 수 있습니다.</b>
        </div>
        <div>프록시 주소는 회사 IT팀에 문의하여 확인하세요.</div>
        <div>프록시 설정 (http/https):</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm config set proxy http://[프록시주소]:[포트]\nnpm config set https-proxy http://[프록시주소]:[포트]`}</MacCmd>
        <div>프록시 해제:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`npm config delete proxy\nnpm config delete https-proxy`}</MacCmd>
        <div style={{ marginTop: '0.7em' }}>설정 후 <b>npm install</b>을 다시 시도하세요.</div>
      </li>
      <li style={{ marginTop: '1em' }}>
        <strong>기타 React 설치 및 빌드 관련 유용한 스크립트</strong><br />
        <div style={{ margin: '0.7em 0' }}>
          <b>React 개발 환경에서 자주 사용하는 명령어 모음입니다.</b>
        </div>
        <div>Node.js, npm 버전 확인:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}}>{`node -v\nnpm -v`}</MacCmd>
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
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{nvmInstallScript}</MacCmd>
        <div>Node.js 설치/전환:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`nvm install 18\nnvm use 18\nnvm install 20\nnvm use 20`}</MacCmd>
        <div><b>Windows 설치 및 사용법(nvm-windows):</b></div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`choco install nvm`}</MacCmd>
        <div>설치 후 PowerShell 재시작, Node.js 설치/전환:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`nvm install 18.20.2\nnvm use 18.20.2`}</MacCmd>
        <div style={{ margin: '0.7em 0' }}>
          <b>자주 쓰는 nvm 명령어</b>
        </div>
        <div>설치된 Node.js 버전 목록 보기:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`nvm ls`}</MacCmd>
        <div>원하는 버전 설치:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`nvm install 16`}</MacCmd>
        <div>특정 버전 사용:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`nvm use 16`}</MacCmd>
        <div>버전 삭제:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`nvm uninstall 16`}</MacCmd>
        <div>별칭(alias) 지정:</div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>{`nvm alias default 18`}</MacCmd>
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
/* function ShoppingCartDemo() {
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
} */

// 고급 실무 예제: 수량 조절이 가능한 장바구니
/*function AdvancedCartDemo() {
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
} */

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
          <ExampleTab
            example={<Welcome name="React" />}
            code={`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}`}
            desc={`함수형 컴포넌트는 가장 기본적인 React 컴포넌트 작성 방식입니다.\nprops를 받아서 JSX를 반환하며, 재사용성과 테스트가 용이합니다.`}
          />
        </div>
        {/* JSX 예제 */}
        <h3>2. JSX</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<div>{'<Welcome name="React" />'}</div>}
            code={`<Welcome name=\"React\" />`}
            desc={`JSX는 JavaScript에서 XML처럼 태그를 작성할 수 있게 해주는 문법입니다.\n컴포넌트를 HTML 태그처럼 사용할 수 있어 가독성이 높아집니다.`}
          />
        </div>
        {/* 초급 예제 */}
        <h3>3. 간단한 인사 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<div>안녕하세요!</div>}
            code={`function Hello() {\n  return <div>안녕하세요!<\/div>;\n}`}
            desc={`간단한 함수형 컴포넌트 예제입니다.\nHello 컴포넌트는 항상 동일한 인사말을 반환합니다.`}
          />
        </div>
        {/* 중급 예제 */}
        <h3>4. props와 조건부 렌더링</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Greeting name="홍길동" />}
            code={`function Greeting({ name }) {\n  return <h2>{name ? \`안녕하세요, \${name}님!\` : '이름을 입력하세요.'}<\/h2>;\n}`}
            desc={`props로 받은 값에 따라 다른 결과를 보여주는 조건부 렌더링 예제입니다.\nname이 있으면 인사말, 없으면 안내 메시지를 출력합니다.`}
          />
        </div>
        {/* 고급 예제 */}
        <h3>5. 상태와 이벤트 활용</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<CounterButtonsDemo />}
            code={`import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <span style={{margin: '0 1em'}}>{count}</span>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}`}
            desc={`useState로 상태를 관리하고, 버튼 클릭 이벤트로 값을 증감시키는 카운터 예제입니다.\nReact의 상태 관리와 이벤트 처리의 기본을 보여줍니다.`}
          />
        </div>
        {/* 실무 예제 */}
        <h3>6. 리스트 필터링 & 동적 렌더링</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<UserListDemo />}
            code={`import { useState } from 'react';

function UserList() {
  const [filter, setFilter] = useState('');
  const users = ['Alice', 'Bob', 'Charlie', 'David'];
  const filtered = users.filter(u => u.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="이름 검색" />
      <ul>
        {filtered.map(u => <li key={u}>{u}</li>)}
      </ul>
    </div>
  );
}`}
            desc={`입력값에 따라 리스트를 실시간으로 필터링하는 예제입니다.\nuseState로 filter 상태를 관리하고, 배열의 filter 메서드를 활용합니다.`}
          />
        </div>
      </div>
    ),
  },
  props: {
    id: 'props',
    title: 'Props',
    description: '컴포넌트에 데이터를 전달하는 props를 배웁니다.',
    category: 'basics',
    icon: '🎁',
    prev: 'components',
    next: 'useState',
    content: (
      <div>
        <h2>Props란?</h2>
        <ul style={{ ...stateExampleBlockStyle, listStylePosition: 'inside' }}>
          <li style={{ marginBottom: '0.7em' }}><b>Props(속성)</b>는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법입니다.</li>
          <li style={{ marginBottom: '0.7em' }}>자식 컴포넌트는 props를 읽기 전용으로 사용해야 합니다. (변경 불가)</li>
          <li style={{ marginBottom: '0.7em' }}>함수의 인자와 비슷한 역할을 합니다.</li>
        </ul>
        <h3>1. 기본 Props 전달</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<ProfileCard name="홍길동" age={30} job="개발자" />}
            code={`function ProfileCard({ name, age, job }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </div>
  );
}`}
            desc={`이 예제는 React에서 "props"(속성)를 사용해 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방법을 보여줍니다.\n\n- ProfileCard 컴포넌트는 name, age, job이라는 props를 받아 화면에 표시합니다.\n- props는 함수의 인자처럼, 컴포넌트에 원하는 값을 외부에서 주입할 수 있게 해줍니다.\n- 자식 컴포넌트는 props를 읽기만 할 수 있고, 직접 변경할 수 없습니다.\n- props를 활용하면 컴포넌트를 재사용하고, 다양한 데이터를 유연하게 전달할 수 있습니다.\n\n이처럼 props는 React 컴포넌트 간 데이터 흐름의 핵심 도구입니다.`}
          />
        </div>
        <h3>2. 커스텀 버튼 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<div style={{ display: 'flex', gap: 16 }}><CustomButton color="#3498db" label="저장" /><CustomButton color="#e74c3c" label="삭제" /></div>}
            code={`function CustomButton({ color, label }) {
  return <button style={{ background: color }}>{label}</button>;
}`}
            desc={`이 예제는 props를 활용해 다양한 스타일의 버튼을 만드는 방법을 보여줍니다.\n\n- CustomButton 컴포넌트는 color와 label이라는 props를 받아, 각각 버튼의 배경색과 표시 텍스트를 결정합니다.\n- 부모 컴포넌트가 각 버튼에 원하는 색상과 라벨을 전달할 수 있습니다.\n- props를 사용하면 하나의 컴포넌트로 여러 종류의 버튼을 쉽게 만들 수 있습니다.\n\n이처럼 props는 컴포넌트의 재사용성과 확장성을 높여줍니다.`}
          />
        </div>
        <h3>3. 리스트 데이터 전달</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<ItemList items={['사과', '바나나', '오렌지']} />}
            code={`function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}`}
            desc={`이 예제는 배열 형태의 데이터를 props로 전달하여 리스트를 렌더링하는 방법을 보여줍니다.\n\n- ItemList 컴포넌트는 items라는 배열 props를 받아, 각 항목을 <li>로 출력합니다.\n- 부모 컴포넌트가 원하는 데이터(과일 목록 등)를 자유롭게 전달할 수 있습니다.\n- props로 배열을 전달하면, 자식 컴포넌트가 반복적으로 데이터를 처리할 수 있습니다.\n\n이처럼 props는 다양한 형태의 데이터를 컴포넌트에 전달할 수 있게 해줍니다.`}
          />
        </div>
        <h3>4. 상태와 Props 연동</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<ModalDemo />}
            code={`function ModalDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Hello from parent!');
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={() => setOpen(false)} message={value} />
    </div>
  );
}`}
            desc={`이 예제는 부모 컴포넌트의 상태(state)를 자식 컴포넌트의 props로 전달하는 방법을 보여줍니다.\n\n- ModalDemo 컴포넌트는 open, onClose, message 등의 값을 자식 Modal 컴포넌트에 props로 전달합니다.\n- 부모의 상태가 바뀌면, 자식 컴포넌트도 그에 맞게 동작(모달 열림/닫힘, 메시지 변경 등)합니다.\n- props를 통해 부모-자식 간 데이터 흐름과 제어가 가능합니다.\n\n이처럼 props는 상태 관리와 컴포넌트 간 상호작용의 핵심 역할을 합니다.`}
          />
        </div>
        <h3>5. 토글 스위치 컴포넌트</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Toggle label="알림" initial={true} />}
            code={`function Toggle({ label, initial }) {
  const [on, setOn] = React.useState(initial);
  return <label><input type="checkbox" checked={on} onChange={() => setOn(!on)} />{label}</label>;
}`}
            desc={`이 예제는 props로 초기값과 라벨을 받아 재사용 가능한 토글 스위치를 만드는 방법을 보여줍니다.\n\n- Toggle 컴포넌트는 label(라벨)과 initial(초기 상태) props를 받아, 체크박스와 텍스트를 렌더링합니다.\n- 부모 컴포넌트가 원하는 초기값과 라벨을 자유롭게 전달할 수 있습니다.\n- props를 활용하면 다양한 상황에 맞는 토글 스위치를 쉽게 만들 수 있습니다.\n\n이처럼 props는 컴포넌트의 동작과 표시를 유연하게 제어할 수 있게 해줍니다.`}
          />
        </div>
      </div>
    ),
  },
  useState: {
    id: 'useState',
    title: 'useState',
    description: '컴포넌트의 상태를 관리하는 Hook',
    category: 'hooks',
    icon: '💡',
    prev: 'props',
    next: 'useEffect',
    content: (
      <div>
        <h3>1. 카운터</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<CounterDemo />}
            code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}`}
            desc={`이 예제는 React의 useState 훅을 사용해 컴포넌트 내부에서 상태(state)를 관리하는 가장 기본적인 방법을 보여줍니다.\n\n- useState(0)는 count라는 상태 변수를 0으로 초기화합니다.\n- setCount 함수로 count 값을 변경할 수 있습니다.\n- 버튼을 클릭할 때마다 setCount(count + 1)이 실행되어 count가 1씩 증가합니다.\n- 상태가 변경되면 컴포넌트가 자동으로 다시 렌더링되어 최신 값이 화면에 표시됩니다.\n\n이처럼 useState는 React 함수형 컴포넌트에서 동적인 값을 관리할 때 필수적으로 사용되는 훅입니다.`}
          />
        </div>
        <h3>2. 입력 필드</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<InputExampleDemo />}
            code={`import { useState } from 'react';

function InputExample() {
  const [text, setText] = useState('');
  return <input value={text} onChange={e => setText(e.target.value)} />;
}`}
            desc={`이 예제는 입력 필드의 값을 useState로 관리하는 방법을 보여줍니다.\n\n- text라는 상태 변수를 useState('')로 선언해 빈 문자열로 초기화합니다.\n- input의 value를 text로 바인딩하고, onChange에서 setText로 값을 갱신합니다.\n- 사용자가 입력할 때마다 상태가 즉시 반영되어, 입력값이 실시간으로 관리됩니다.\n\n이처럼 useState를 활용하면 입력값, 폼 등 다양한 UI 상태를 쉽게 관리할 수 있습니다.`}
          />
        </div>
        <h3>3. 할 일 목록</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<TodoListDemo />}
            code={`import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['공부하기', '운동하기']);
  const [input, setInput] = useState('');
  return (
    <div>
      <ul>{todos.map((todo, i) => <li key={i}>{todo}</li>)}</ul>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => setTodos([...todos, input])}>추가</button>
    </div>
  );
}`}
            desc="배열 상태를 관리하여 할 일 목록을 동적으로 추가하는 예제입니다."
          />
        </div>
        <h3>4. 프로필 정보 (객체 상태)</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<ProfileDemo />}
            code={`import { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({ name: '', age: 0 });
  return (
    <div>
      <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <input type="number" value={user.age} onChange={e => setUser({ ...user, age: Number(e.target.value) })} />
    </div>
  );
}`}
            desc="객체 상태를 관리하여 여러 입력 필드를 한 번에 처리하는 예제입니다."
          />
        </div>
        <h3>5. 다중 상태 관리</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MultiStateDemo />}
            code={`import { useState } from 'react';

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
}`}
            desc={`이 예제는 하나의 컴포넌트에서 여러 개의 독립적인 상태 변수를 useState로 관리하는 방법을 보여줍니다.\n\n- count와 text라는 두 개의 상태를 각각 useState로 선언합니다.\n- 각 상태는 서로 독립적으로 관리되며, 별도의 set 함수로 값을 변경할 수 있습니다.\n- 여러 상태를 조합해 복잡한 UI도 쉽게 구현할 수 있습니다.\n\n이처럼 useState는 원하는 만큼 여러 번 사용할 수 있습니다.`}
          />
        </div>
        <h3>6. 동적 폼 필드 추가/삭제</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<DynamicFormDemo />}
            code={`import { useState } from 'react';

function DynamicFormDemo() {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleChange = (i, v) => {
    setFields(fields => fields.map((f, idx) => idx === i ? { value: v } : f));
  };

  const handleAdd = () => setFields(fields => [...fields, { value: '' }]);
  const handleRemove = (i) => {
    setFields(fields => fields.length > 1 ? fields.filter((_, idx) => idx !== i) : fields);
  };

  return (
    <div>
      {fields.map((field, i) => (
        <div key={i}>
          <input
            value={field.value}
            onChange={e => handleChange(i, e.target.value)}
          />
          <button onClick={() => handleRemove(i)}>-</button>
        </div>
      ))}
      <button onClick={handleAdd}>필드 추가</button>
      <pre>{JSON.stringify(fields, null, 2)}</pre>
    </div>
  );
}`}
            showCaret={false}
            desc={`이 예제는 useState로 배열 상태를 관리하며, 입력 필드를 동적으로 추가/삭제하는 실무 스타일의 폼 구현 방법을 보여줍니다.\n\n- fields라는 배열 상태를 useState로 선언합니다.\n- handleAdd, handleRemove, handleChange 등으로 배열을 동적으로 조작합니다.\n- 입력 필드를 추가/삭제할 때마다 상태가 변경되고, 화면이 자동으로 갱신됩니다.\n\n이처럼 useState는 배열, 객체 등 복잡한 데이터 구조도 쉽게 관리할 수 있습니다.`}
          />
        </div>
        <h3>7. 숫자 입력값 합계 자동 계산</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<SumInputsDemo />}
            code={`import { useState } from 'react';

function SumInputsDemo() {
  const [values, setValues] = useState([0, 0, 0]);
  const handleChange = (i, v) => {
    const n = Number(v) || 0;
    setValues(values => values.map((val, idx) => idx === i ? n : val));
  };
  const sum = values.reduce((a, b) => a + b, 0);
  return (
    <div>
      {values.map((v, i) => (
        <input
          key={i}
          type="number"
          value={v}
          onChange={e => handleChange(i, e.target.value)}
          style={{ marginRight: 8, width: 60, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }}
        />
      ))}
      <div style={{ marginTop: 8, color: '#b5e853' }}>합계: {sum}</div>
    </div>
  );
}
`}
            showCaret={false}
            desc={`이 예제는 여러 숫자 입력값을 useState 배열로 관리하고, 합계를 자동으로 계산하는 방법을 보여줍니다.\n\n- values라는 배열 상태를 useState로 선언합니다.\n- 각 입력 필드의 값이 바뀔 때마다 배열의 해당 인덱스만 업데이트합니다.\n- 배열의 reduce 메서드로 합계를 계산해 실시간으로 표시합니다.\n\n이처럼 useState는 숫자, 배열 등 다양한 형태의 상태를 효율적으로 관리할 수 있습니다.`}
          />
        </div>
        <h3>8. 다중 체크박스 선택 관리</h3>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MultiCheckboxDemo />}
            code={`import { useState } from 'react';

function MultiCheckboxDemo() {
  const items = ['React', 'Vue', 'Angular', 'Svelte'];
  const [checked, setChecked] = useState([]);
  const handleToggle = (item) => {
    setChecked(checked => checked.includes(item)
      ? checked.filter(i => i !== item)
      : [...checked, item]
    );
  };
  return (
    <div>
      {items.map(item => (
        <label key={item} style={{ display: 'block', marginBottom: 4 }}>
          <input
            type="checkbox"
            checked={checked.includes(item)}
            onChange={() => handleToggle(item)}
            style={{ marginRight: 6 }}
          />
          {item}
        </label>
      ))}
      <div style={{ marginTop: 8, color: '#b5e853' }}>선택: {checked.join(', ') || '없음'}</div>
    </div>
  );
}
`}
            showCaret={false}
            desc={`이 예제는 여러 체크박스의 선택 상태를 useState 배열로 관리하는 방법을 보여줍니다.\n\n- checked라는 배열 상태를 useState로 선언합니다.\n- handleToggle 함수로 체크박스의 선택/해제를 배열에 반영합니다.\n- 여러 개의 값을 배열로 관리할 때도 useState를 활용할 수 있습니다.\n\n이처럼 useState는 다양한 UI 요소의 상태를 유연하게 관리할 수 있게 해줍니다.`}
          />
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
          <ExampleTab example={<MountEffectDemo />} code={`import { useEffect } from 'react';\n\nfunction MountEffectDemo() {\n  useEffect(() => {\n    console.log('컴포넌트 마운트됨');\n    return () => {\n      console.log('컴포넌트 언마운트됨');\n    };\n  }, []);\n  return <div>마운트/언마운트 시 콘솔에 로그</div>;\n}`} showCaret={false} desc={"이 예제는 useEffect의 가장 기본적인 사용법을 보여줍니다. 컴포넌트가 처음 화면에 나타날 때(마운트)와 사라질 때(언마운트) 각각 콘솔에 로그를 남깁니다.\n\n- useEffect의 첫 번째 인자는 함수입니다. 이 함수는 컴포넌트가 마운트될 때 실행됩니다.\n- 함수 내부에서 return한 함수는 cleanup 함수라고 하며, 컴포넌트가 언마운트될 때(또는 effect가 다시 실행되기 전) 호출됩니다.\n- 의존성 배열([])이 비어 있으면, 이 effect는 오직 마운트/언마운트 시에만 실행됩니다.\n\n이 패턴은 구독 해제, 타이머 정리 등 리소스 정리가 필요한 상황에서 매우 중요합니다."} />
        </div>
        <h4>2. Dependency Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<DepsEffectDemo />} code={`import { useState, useEffect } from 'react';\n\nfunction DepsEffectDemo() {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    document.title = \`카운트: \${count}\`;\n  }, [count]);\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n      <span style={{ marginLeft: 8 }}>{count}</span>\n    </div>\n  );\n}`} showCaret={false} desc={"이 예제는 useEffect의 의존성 배열(dependency array) 사용법을 설명합니다.\n\n- useEffect의 두 번째 인자인 [count]는 의존성 배열입니다.\n- count 값이 변경될 때마다 effect가 다시 실행됩니다.\n- 여기서는 count가 바뀔 때마다 document.title(브라우저 탭 제목)이 업데이트됩니다.\n\n의존성 배열을 올바르게 지정하는 것이 중요합니다. 누락하거나 잘못 지정하면, 원하는 시점에 effect가 실행되지 않거나, 불필요하게 여러 번 실행될 수 있습니다.\n\nTip: 의존성 배열이 비어 있으면([]), effect는 마운트/언마운트 시에만 실행됩니다."} />
        </div>
        <h4>3. Fetch Data Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<FetchEffectDemo />} code={`import { useState, useEffect } from 'react';\n\nfunction FetchEffectDemo() {\n  const [data, setData] = useState(null);\n  useEffect(() => {\n    fetch('https://jsonplaceholder.typicode.com/todos/1')\n      .then(res => res.json())\n      .then(json => setData(json));\n  }, []);\n  return <pre>{JSON.stringify(data, null, 2)}</pre>;\n}`} showCaret={false} desc={"이 예제는 useEffect를 사용해 컴포넌트가 마운트될 때 한 번만 데이터를 가져오는 방법을 보여줍니다.\n\n- 의존성 배열이 []이므로, effect는 마운트 시에만 실행됩니다.\n- fetch로 외부 API에서 데이터를 받아오고, setData로 상태를 업데이트합니다.\n- 데이터를 받아오면 화면에 JSON 형태로 출력됩니다.\n\n실무에서는 fetch 과정에서 에러 처리, 로딩 상태 관리, cleanup(요청 취소) 등을 추가하는 것이 좋습니다.\n\n주의: 의존성 배열을 비우지 않으면, 데이터 요청이 여러 번 발생할 수 있습니다."} />
        </div>
        <h4>4. Timer Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<TimerEffectDemo />} code={`import { useState, useEffect } from 'react';\n\nfunction TimerEffectDemo() {\n  const [sec, setSec] = useState(0);\n  useEffect(() => {\n    const id = setInterval(() => setSec(s => s + 1), 1000);\n    return () => clearInterval(id);\n  }, []);\n  return <div>타이머: {sec}초</div>;\n}`} showCaret={false} desc={"이 예제는 useEffect에서 타이머를 설정하고 정리하는 방법을 보여줍니다.\n\n- 마운트 시 setInterval로 1초마다 sec 상태를 1씩 증가시킵니다.\n- cleanup 함수(return)는 언마운트 시 clearInterval로 타이머를 반드시 정리합니다.\n- 의존성 배열이 []이므로, 타이머는 한 번만 설정됩니다.\n\n이 패턴은 타이머, 구독, 이벤트 리스너 등 리소스 해제가 필요한 모든 상황에서 필수적입니다. cleanup을 빼먹으면 메모리 누수나 의도치 않은 동작이 발생할 수 있습니다."} />
        </div>
        <h4>5. Resize Effect</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<ResizeEffectDemo />} code={`import { useState, useEffect } from 'react';\n\nfunction ResizeEffectDemo() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const onResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', onResize);\n    return () => window.removeEventListener('resize', onResize);\n  }, []);\n  return <div>윈도우 너비: {width}px</div>;\n}`} showCaret={false} desc={"이 예제는 useEffect로 이벤트 리스너를 등록/해제하는 대표적인 패턴을 보여줍니다.\n\n- 마운트 시 window에 resize 이벤트 리스너를 등록합니다.\n- 창 크기가 바뀔 때마다 현재 너비를 상태로 저장합니다.\n- cleanup 함수에서 이벤트 리스너를 반드시 해제합니다.\n\n이런 패턴은 메모리 누수, 중복 등록 등 버그를 예방하는 데 매우 중요합니다. 항상 cleanup에서 리스너를 해제하세요."} />
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
          <ExampleTab example={<RefFocusDemo />} code={`import { useRef } from 'react';\n\nfunction RefFocusDemo() {\n  const inputRef = useRef(null);\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={() => inputRef.current && inputRef.current.focus()}>포커스</button>\n    </div>\n  );\n}`} showCaret={false} desc={"이 예제는 useRef로 DOM 요소를 직접 참조하는 가장 기본적인 패턴을 보여줍니다.\n\n- useRef는 .current 프로퍼티를 통해 실제 DOM 요소에 접근할 수 있습니다.\n- input 태그의 ref 속성에 inputRef를 연결하면, inputRef.current가 해당 input DOM을 가리키게 됩니다.\n- 버튼 클릭 시 inputRef.current.focus()로 input에 포커스를 줄 수 있습니다.\n\n이 방식은 직접 DOM 조작이 필요할 때(포커스, 스크롤 등) 매우 유용합니다. 단, React의 상태(state)와는 다르게 ref 변경은 렌더링을 일으키지 않습니다."} />
        </div>
        <h4>2. 이전 값 기억</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<RefPrevValueDemo />} code={`import { useRef, useState, useEffect } from 'react';\n\nfunction RefPrevValueDemo() {\n  const [value, setValue] = useState('');\n  const prevValue = useRef('');\n  useEffect(() => {\n    prevValue.current = value;\n  }, [value]);\n  return (\n    <div>\n      <input value={value} onChange={e => setValue(e.target.value)} />\n      <div>이전 값: {prevValue.current}</div>\n    </div>\n  );\n}`} showCaret={false} desc={"이 예제는 useRef를 사용해 렌더링과 무관하게 이전 값을 저장하는 방법을 보여줍니다.\n\n- useRef는 값이 바뀌어도 컴포넌트를 다시 렌더링하지 않습니다.\n- useEffect에서 value가 바뀔 때마다 prevValue.current에 현재 값을 저장합니다.\n- 화면에는 항상 이전 입력값이 표시됩니다.\n\n이 패턴은 이전 값, 이전 props 등 렌더링과 무관하게 값을 기억해야 할 때 유용합니다. 단, ref 값이 바뀌어도 화면이 자동으로 갱신되지 않으니 주의하세요."} />
        </div>
        <h4>3. setInterval 제어</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<RefIntervalDemo />} code={`import { useRef, useState, useEffect } from 'react';\n\nfunction RefIntervalDemo() {\n  const [count, setCount] = useState(0);\n  const intervalRef = useRef<number | null>(null);\n  const start = () => {\n    if (!intervalRef.current) {\n      intervalRef.current = window.setInterval(() => setCount(c => c + 1), 1000);\n    }\n  };\n  const stop = () => {\n    if (intervalRef.current) {\n      clearInterval(intervalRef.current);\n      intervalRef.current = null;\n    }\n  };\n  useEffect(() => stop, []);\n  return (\n    <div>\n      <div>카운트: {count}</div>\n      <button onClick={start}>시작</button>\n      <button onClick={stop}>정지</button>\n    </div>\n  );\n}`} showCaret={false} desc={"이 예제는 useRef로 setInterval의 id를 저장하고, 타이머를 안전하게 제어하는 방법을 보여줍니다.\n\n- intervalRef는 setInterval의 반환값(id)을 저장합니다.\n- start 함수는 타이머가 없을 때만 새로 시작합니다.\n- stop 함수는 타이머가 있을 때만 정지하고, cleanup도 담당합니다.\n- useEffect의 cleanup에서 stop을 호출해 언마운트 시 타이머가 남지 않도록 합니다.\n\n이 패턴은 setInterval, setTimeout 등 외부 리소스의 id를 안전하게 관리할 때 매우 유용합니다. ref를 쓰면 id가 컴포넌트가 리렌더링되어도 유지됩니다."} />
        </div>
        <h4>4. DOM 스타일 직접 변경</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<RefDomStyleDemo />} code={`import { useRef } from 'react';\n\nfunction RefDomStyleDemo() {\n  const boxRef = useRef(null);\n  const changeColor = () => {\n    if (boxRef.current) {\n      boxRef.current.style.background = '#27c93f';\n    }\n  };\n  return (\n    <div>\n      <div ref={boxRef} style={{ width: 120, height: 60, background: '#232323', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginBottom: 8 }}>Box</div>\n      <button onClick={changeColor}>배경색 변경</button>\n    </div>\n  );\n}`} showCaret={false} desc={"이 예제는 useRef로 DOM 요소에 직접 접근해 스타일을 변경하는 방법을 보여줍니다.\n\n- boxRef를 div의 ref에 연결하면, boxRef.current로 해당 DOM에 접근할 수 있습니다.\n- 버튼 클릭 시 boxRef.current.style.background로 배경색을 바꿉니다.\n\n이런 직접 DOM 조작은 React의 선언적 방식과 다르므로 꼭 필요한 경우에만 사용하세요. 대부분의 UI 변경은 상태(state)로 처리하는 것이 더 안전하고 예측 가능합니다."} />
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
}`} showCaret={false} desc={`이 예제는 useMemo로 대량 리스트의 필터링/정렬 결과를 메모이제이션하는 방법을 보여줍니다.

  - items는 1000개의 아이템을 한 번만 생성합니다.
  - filtered는 query(검색어)나 sort(정렬 여부)가 바뀔 때만 다시 계산됩니다.
  - 불필요한 연산을 방지해 성능을 최적화할 수 있습니다.
  
  실무에서 대량 데이터 처리, 복잡한 계산이 필요한 리스트 UI에 매우 유용합니다.
  
  Tip: 의존성 배열을 정확히 지정해야 예상대로 동작합니다.`} />
        </div>
        <h4>2. 리스트 필터/정렬 메모이제이션</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<MemoFilterSortDemo />} code={`import { useState, useMemo } from 'react';

function MemoFilterSortDemo() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState(false);
  const items = useMemo(() => Array.from({ length: 1000 }, (_, i) => \`Item \${i + 1}\`), []);\n  const filtered = useMemo(() => {\n    let result = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));\n    if (sort) result = [...result].sort();
    return result;\n  }, [items, query, sort]);\n  return (\n    <div>\n      <input value={query} onChange={e => setQuery(e.target.value)} placeholder=\"검색\" style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }} />\n      <label style={{ marginRight: 8 }}>\n        <input type=\"checkbox\" checked={sort} onChange={e => setSort(e.target.checked)} /> 정렬\n      </label>\n      <div style={{ maxHeight: 120, overflowY: 'auto', background: '#232323', borderRadius: 8, marginTop: 8, padding: 8 }}>\n        {filtered.slice(0, 20).map(item => <div key={item}>{item}</div>)}\n        {filtered.length > 20 && <div style={{ color: '#aaa' }}>...and {filtered.length - 20} more</div>}\n      </div>\n    </div>\n  );\n}`} showCaret={false} desc={`이 예제는 useMemo로 대량 리스트의 필터링/정렬 결과를 메모이제이션하는 방법을 보여줍니다.

      - items는 1000개의 아이템을 한 번만 생성합니다.
      - filtered는 query(검색어)나 sort(정렬 여부)가 바뀔 때만 다시 계산됩니다.
      - 불필요한 연산을 방지해 성능을 최적화할 수 있습니다.
      
      실무에서 대량 데이터 처리, 복잡한 계산이 필요한 리스트 UI에 매우 유용합니다.
      
      Tip: 의존성 배열을 정확히 지정해야 예상대로 동작합니다.`} />
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
}`} showCaret={false} desc={`이 예제는 useMemo의 의존성 배열을 활용해 값이 바뀔 때만 연산이 다시 실행되는 원리를 보여줍니다.

  - sum은 a 또는 b가 바뀔 때만 다시 계산됩니다.
  - 다른 상태가 바뀌어도 sum 계산은 다시 실행되지 않습니다.
  
  이런 패턴은 계산 결과가 복잡하거나, 불필요한 재계산을 막고 싶을 때 유용합니다.
  
  Tip: 의존성 배열에 필요한 값만 정확히 넣는 것이 중요합니다.`} />
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
}`} showCaret={false} desc={`이 예제는 useMemo로 비싼 연산을 최적화하는 실전 패턴을 보여줍니다.

  - expensive는 count가 바뀔 때만 다시 계산됩니다.
  - text 입력 등 다른 상태가 바뀌어도 비싼 연산은 다시 실행되지 않습니다.
  
  이런 최적화는 대규모 앱, 복잡한 UI에서 성능을 크게 개선할 수 있습니다.
  
  실전 팁: useMemo는 꼭 필요한 경우에만 사용하고, 의존성 배열을 정확히 관리하세요.`} />
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
          <ExampleTab example={<CallbackChildDemo />} code={`import React, { useState, useCallback } from 'react';\n\nconst MemoChild = React.memo(function MemoChild({ onClick }) {\n  console.log('자식 렌더');\n  return <button onClick={onClick}>자식 버튼</button>;\n});\n\nfunction CallbackChildDemo() {\n  const [count, setCount] = useState(0);\n  const handleClick = useCallback(() => setCount(c => c + 1), []);\n  return (\n    <div>\n      <MemoChild onClick={handleClick} />\n      <div style={{ marginTop: 8 }}>카운트: {count}</div>\n    </div>\n  );\n}`} showCaret={false} desc={`이 예제는 useCallback으로 함수를 메모이제이션하여 자식 컴포넌트에 전달할 때 불필요한 렌더링을 방지하는 방법을 보여줍니다.

- handleClick 함수는 useCallback을 사용해 한 번만 생성됩니다.
- MemoChild는 React.memo로 감싸져 있어, onClick 함수가 바뀌지 않으면 리렌더링되지 않습니다.
- 부모가 렌더링되어도 handleClick이 바뀌지 않으므로 자식이 불필요하게 렌더링되지 않습니다.

실전 팁: 자식 컴포넌트가 React.memo로 최적화되어 있을 때, 콜백 함수를 useCallback으로 감싸주면 성능 최적화에 도움이 됩니다.`} />
        </div>
        <h4>2. 의존성 배열 활용</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CallbackDepsDemo />} code={`import React, { useState, useCallback } from 'react';\n\nfunction CallbackDepsDemo() {\n  const [value, setValue] = useState('');\n  const [log, setLog] = useState([]);\n  const handleAdd = useCallback(() => {\n    setLog(l => [...l, value]);\n    setValue('');\n  }, [value]);\n  return (\n    <div>\n      <input value={value} onChange={e => setValue(e.target.value)} />\n      <button onClick={handleAdd}>추가</button>\n      <ul>\n        {log.map((item, i) => <li key={i}>{item}</li>)}\n      </ul>\n    </div>\n  );\n}`} showCaret={false} desc={`이 예제는 useCallback의 의존성 배열을 활용해 콜백 함수가 언제 새로 생성되는지 보여줍니다.

- handleAdd 함수는 value가 바뀔 때마다 새로 생성됩니다.
- 의존성 배열([value])에 포함된 값이 바뀌면 콜백 함수도 새로 만들어집니다.
- 이 패턴은 콜백이 특정 값에 의존할 때 안전하게 최신 값을 사용할 수 있게 해줍니다.

Tip: 의존성 배열을 정확히 지정하지 않으면, 오래된 값이 사용되거나, 불필요하게 함수가 자주 새로 생성될 수 있습니다.`} />
        </div>
        <h4>3. 리스트 항목 추가/삭제</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CallbackListDemo />} code={`import React, { useState, useCallback } from 'react';\n\nfunction CallbackListDemo() {\n  const [items, setItems] = useState<string[]>([]);\n  const addItem = useCallback(() => setItems(items => [...items, \`Item\${items.length + 1}\`]), []);\n  const removeItem = useCallback((idx: number) => setItems(items => items.filter((_, i) => i !== idx)), []);\n  return (\n    <div style={{ color: '#eaeaea' }}>\n      <button onClick={addItem}>항목 추가</button>\n      <ul>\n        {items.map((item, idx) => (\n          <li key={idx}>\n            {item}\n            <button onClick={() => removeItem(idx)}>삭제</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`} showCaret={false} desc={`이 예제는 useCallback으로 리스트 추가/삭제 함수를 메모이제이션하여, 불필요한 렌더링을 방지하는 방법을 보여줍니다.

- addItem, removeItem 함수는 컴포넌트가 리렌더링되어도 동일한 참조를 유지합니다.
- 이로 인해 자식 컴포넌트에 콜백을 전달할 때 불필요한 렌더링을 막을 수 있습니다.
- 의존성 배열이 []이므로, 함수는 최초 한 번만 생성됩니다.

실전 팁: 콜백이 상태나 props에 의존하지 않는다면, 의존성 배열을 빈 배열([])로 두어 불필요한 함수 생성을 막으세요.`} />
        </div>
        <h4>4. useCallback 없이 함수 전달</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab example={<CallbackNoMemoDemo />} code={`import React, { useState } from 'react';\n\nconst MemoChild = React.memo(function MemoChild({ onClick }) {\n  console.log('자식 렌더');\n  return <button onClick={onClick}>자식 버튼</button>;\n});\n\nfunction CallbackNoMemoDemo() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => setCount(c => c + 1);\n  return (\n    <div>\n      <MemoChild onClick={handleClick} />\n      <div style={{ marginTop: 8 }}>카운트: {count}</div>\n      <div style={{ color: '#b5e853', marginTop: 8, fontSize: 13 }}>(useCallback 없이: 자식이 매번 렌더됨)</div>\n    </div>\n  );\n}`} showCaret={false} desc={`이 예제는 useCallback 없이 함수를 자식에 전달할 때 발생하는 문제를 보여줍니다.

- handleClick 함수는 부모가 렌더링될 때마다 새로 생성됩니다.
- MemoChild는 onClick이 바뀔 때마다 리렌더링됩니다.
- 이로 인해 자식 컴포넌트가 불필요하게 자주 렌더링될 수 있습니다.

실전 팁: 자식 컴포넌트가 React.memo로 감싸져 있고, 콜백을 props로 전달한다면 useCallback으로 콜백을 메모이제이션하는 것이 좋습니다.`} />
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
    content: <div>Context API 설명</div>,
  },
  events: {
    id: 'events',
    title: 'Events',
    description: '이벤트 처리 방법을 배웁니다.',
    category: 'basics',
    icon: '🖱️',
    prev: 'useContext',
    next: 'lifecycle',
    content: <div>이벤트 처리 예제 준비 중...</div>,
  },
  lifecycle: {
    id: 'lifecycle',
    title: 'Lifecycle',
    description: '컴포넌트 생명주기 설명',
    category: 'advanced',
    icon: '🔄',
    prev: 'events',
    next: 'practicalExamples',
    content: <div>생명주기 설명 준비 중...</div>,
  },
  practicalExamples: {
    id: 'practicalExamples',
    title: '실전 예제',
    description: '실전에서 자주 쓰는 예제 모음',
    category: 'example',
    icon: '💡',
    prev: 'lifecycle',
    next: 'restapi',
    content: <div>실전 예제 준비 중...</div>,
  },

  
  opensource: {
    id: 'opensource',
    title: '오픈소스 라이브러리',
    description: 'React에서 자주 사용하는 오픈소스 라이브러리 소개',
    category: 'opensource',
    icon: '📦',
    prev: 'practicalExamples',
    next: 'antdesign',
    content: (
      <div>
        React에서 많이 쓰는 오픈소스 라이브러리(예: Ant Design, Material-UI, react-router, styled-components, recoil, react-query 등)를 소개하는 섹션입니다.
        <ul style={{ marginTop: 16 }}>
          <li>Ant Design</li>
          <li>Material-UI (MUI)</li>
          <li>react-router</li>
          <li>styled-components</li>
          <li>recoil</li>
          <li>react-query</li>
        </ul>
      </div>
    ),
  },
  antdesign: {
    id: 'antdesign',
    title: 'Ant Design',
    description: 'Ant Design(antd) 컴포넌트 라이브러리 예제',
    category: 'opensource',
    icon: '🟦',
    prev: 'opensource',
    next: 'mui',
    content: (
      <div>
        <h3>Ant Design (antd) 주요 컨트롤별 예제</h3>
        {/* 버튼 */}
        <h4 style={{ marginTop: 32 }}>Button (버튼)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Button type="primary">Primary</Button>}
            code={`import { Button } from 'antd';\n\nfunction Demo() {\n  return <Button type=\"primary\">Primary</Button>;\n}`}
            desc="기본 Primary 버튼"
          />
          <ExampleTab
            example={<Button>Default</Button>}
            code={`import { Button } from 'antd';\n\nfunction Demo() {\n  return <Button>Default</Button>;\n}`}
            desc="Default 버튼"
          />
          <ExampleTab
            example={<Button type="primary" icon={<CheckCircleOutlined />}>Success</Button>}
            code={`import { Button } from 'antd';\nimport { CheckCircleOutlined } from '@ant-design/icons';\n\nfunction Demo() {\n  return <Button type=\"primary\" icon={<CheckCircleOutlined />}>Success</Button>;\n}`}
            desc="아이콘 버튼"
          />
          <ExampleTab
            example={<Button type="primary" loading>로딩중...</Button>}
            code={`import { Button } from 'antd';\n\nfunction Demo() {\n  return <Button type=\"primary\" loading>로딩중...</Button>;\n}`}
            desc="로딩 버튼"
          />
          <ExampleTab
            example={<Button.Group><Button>Left</Button><Button>Right</Button></Button.Group>}
            code={`import { Button } from 'antd';\n\nfunction Demo() {\n  return (<Button.Group><Button>Left</Button><Button>Right</Button></Button.Group>);\n}`}
            desc="버튼 그룹"
          />
        </div>
        {/* 입력폼 */}
        <h4 style={{ marginTop: 32 }}>Input (입력)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Input placeholder="기본 입력" style={{ width: 180 }} />}
            code={`import { Input } from 'antd';\n\nfunction Demo() {\n  return <Input placeholder=\"기본 입력\" />;\n}`}
            desc="기본 Input"
          />
          <ExampleTab
            example={<Input.Password placeholder="비밀번호" style={{ width: 180 }} />}
            code={`import { Input } from 'antd';\n\nfunction Demo() {\n  return <Input.Password placeholder=\"비밀번호\" />;\n}`}
            desc="Password Input"
          />
          <ExampleTab
            example={<Input.Search placeholder="검색" style={{ width: 180 }} />}
            code={`import { Input } from 'antd';\n\nfunction Demo() {\n  return <Input.Search placeholder=\"검색\" />;\n}`}
            desc="Search Input"
          />
        </div>
        {/* 셀렉트 */}
        <h4 style={{ marginTop: 32 }}>Select (셀렉트)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<AntdSelect defaultValue="Apple" style={{ width: 120 }}><AntdSelect.Option value="Apple">Apple</AntdSelect.Option><AntdSelect.Option value="Banana">Banana</AntdSelect.Option></AntdSelect>}
            code={`import { Select } from 'antd';\n\nfunction Demo() {\n  return (<Select defaultValue=\"Apple\"><Select.Option value=\"Apple\">Apple</Select.Option><Select.Option value=\"Banana\">Banana</Select.Option></Select>);\n}`}
            desc="기본 Select"
          />
        </div>
        {/* 체크박스/스위치 */}
        <h4 style={{ marginTop: 32 }}>Checkbox & Switch</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Checkbox>체크박스</Checkbox>}
            code={`import { Checkbox } from 'antd';\n\nfunction Demo() {\n  return <Checkbox>체크박스</Checkbox>;\n}`}
            desc="Checkbox"
          />
          <ExampleTab
            example={<Switch defaultChecked />}
            code={`import { Switch } from 'antd';\n\nfunction Demo() {\n  return <Switch defaultChecked />;\n}`}
            desc="Switch"
          />
        </div>
        {/* 날짜 선택 */}
        <h4 style={{ marginTop: 32 }}>DatePicker (날짜 선택)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<DatePicker />}
            code={`import { DatePicker } from 'antd';\n\nfunction Demo() {\n  return <DatePicker />;\n}`}
            desc="DatePicker"
          />
        </div>
        {/* 모달 */}
        <h4 style={{ marginTop: 32 }}>Modal (모달)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<AntdModalDemo />}
            code={`import { Modal, Button } from 'antd';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>모달 열기</Button><AntdModal open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>모달 내용입니다.</AntdModal></>);\n}`}
            desc="Modal"
          />
        </div>
        {/* 테이블 */}
        <h4 style={{ marginTop: 32 }}>Table (테이블)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<AntdTableDemo />}
            code={`import { Table } from 'antd';\n\nconst columns = [\n  { title: '이름', dataIndex: 'name', sorter: (a: any, b: any) => a.name.localeCompare(b.name) },\n  { title: '나이', dataIndex: 'age', filters: [ { text: '20대', value: 2 }, { text: '30대', value: 3 } ], onFilter: (value: any, record: any) => String(record.age).startsWith(value) },\n];\nconst data = [\n  { key: 1, name: '홍길동', age: 28 },\n  { key: 2, name: '김철수', age: 34 },\n];\n\nfunction Demo() {\n  return <Table columns={columns} dataSource={data} />;\n}`}
            desc="정렬/필터가 있는 Table"
          />
        </div>
        {/* 알림 */}
        <h4 style={{ marginTop: 32 }}>Notification & Message</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<AntdNotificationDemo />}
            code={`import { notification } from 'antd';\n\nfunction openNotification() {\n  notification.success({\n    message: '알림',\n    description: '저장이 완료되었습니다.',\n  });\n}`}
            desc="Notification"
          />
          <ExampleTab
            example={<AntdMessageDemo />}
            code={`import { message } from 'antd';\n\nfunction showMessage() {\n  message.success('성공적으로 처리되었습니다.');\n}`}
            desc="Message"
          />
        </div>
        {/* Tabs */}
        <h4 style={{ marginTop: 32 }}>Tabs</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Tabs defaultActiveKey="1"><Tabs.TabPane tab="Tab1" key="1">내용1</Tabs.TabPane><Tabs.TabPane tab="Tab2" key="2">내용2</Tabs.TabPane></Tabs>}
            code={`import { Tabs } from 'antd';\n\nfunction Demo() {\n  return (<Tabs defaultActiveKey=\"1\"><Tabs.TabPane tab=\"Tab1\" key=\"1\">내용1</Tabs.TabPane><Tabs.TabPane tab=\"Tab2\" key=\"2\">내용2</Tabs.TabPane></Tabs>);\n}`}
            desc="Tabs"
          />
        </div>
        {/* Dropdown */}
        <h4 style={{ marginTop: 32 }}>Dropdown</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<AntdDropdownDemo />}
            code={`import { Dropdown, Menu, Button } from 'antd';\n\nconst menu = (<Menu><Menu.Item key=\"1\">메뉴1</Menu.Item><Menu.Item key=\"2\">메뉴2</Menu.Item></Menu>);\n\nfunction Demo() {\n  return (<Dropdown overlay={menu}><Button>메뉴</Button></Dropdown>);\n}`}
            desc="Dropdown"
          />
        </div>
        {/* Pagination */}
        <h4 style={{ marginTop: 32 }}>Pagination</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Pagination defaultCurrent={1} total={50} />}
            code={`import { Pagination } from 'antd';\n\nfunction Demo() {\n  return <Pagination defaultCurrent={1} total={50} />;\n}`}
            desc="Pagination"
          />
        </div>
        {/* Progress */}
        <h4 style={{ marginTop: 32 }}>Progress</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Progress percent={60} />}
            code={`import { Progress } from 'antd';\n\nfunction Demo() {\n  return <Progress percent={60} />;\n}`}
            desc="Progress"
          />
        </div>
        {/* Avatar */}
        <h4 style={{ marginTop: 32 }}>Avatar</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Avatar>A</Avatar>}
            code={`import { Avatar } from 'antd';\n\nfunction Demo() {\n  return <Avatar>A</Avatar>;\n}`}
            desc="Avatar"
          />
        </div>
        {/* Badge */}
        <h4 style={{ marginTop: 32 }}>Badge</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Badge count={5}><Avatar>B</Avatar></Badge>}
            code={`import { Badge, Avatar } from 'antd';\n\nfunction Demo() {\n  return <Badge count={5}><Avatar>B</Avatar></Badge>;\n}`}
            desc="Badge"
          />
        </div>
        {/* Tag */}
        <h4 style={{ marginTop: 32 }}>Tag</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Tag color="blue">Tag</Tag>}
            code={`import { Tag } from 'antd';\n\nfunction Demo() {\n  return <Tag color=\"blue\">Tag</Tag>;\n}`}
            desc="Tag"
          />
        </div>
        {/* Collapse */}
        <h4 style={{ marginTop: 32 }}>Collapse</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Collapse><Collapse.Panel header="패널 제목" key="1">패널 내용</Collapse.Panel></Collapse>}
            code={`import { Collapse } from 'antd';\n\nfunction Demo() {\n  return (<Collapse><Collapse.Panel header=\"패널 제목\" key=\"1\">패널 내용</Collapse.Panel></Collapse>);\n}`}
            desc="Collapse"
          />
        </div>
        {/* Tooltip */}
        <h4 style={{ marginTop: 32 }}>Tooltip</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Tooltip title="툴팁 내용"><span>툴팁</span></Tooltip>}
            code={`import { Tooltip } from 'antd';\n\nfunction Demo() {\n  return <Tooltip title=\"툴팁 내용\"><span>툴팁</span></Tooltip>;\n}`}
            desc="Tooltip"
          />
        </div>
        {/* Popconfirm */}
        <h4 style={{ marginTop: 32 }}>Popconfirm</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<AntdPopconfirmDemo />}
            code={`import { Popconfirm, Button } from 'antd';\n\nfunction Demo() {\n  return (<Popconfirm title=\"정말 삭제할까요?\"><Button>삭제</Button></Popconfirm>);\n}`}
            desc="Popconfirm"
          />
        </div>
      </div>
    ),
  },
  mui: {
    id: 'mui',
    title: 'Material-UI (MUI)',
    description: 'Material-UI(MUI) 컴포넌트 라이브러리 예제',
    category: 'opensource',
    icon: '🟦',
    prev: 'antdesign',
    next: 'reactrouter',
    content: (
      <div>
        <h3>Material-UI (MUI) 주요 컨트롤별 예제</h3>
        {/* 버튼 */}
        <h4 style={{ marginTop: 32 }}>Button (버튼)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiButton variant="contained" color="primary">Primary</MuiButton>}
            code={`import Button from '@mui/material/Button';\n\nfunction Demo() {\n  return <Button variant=\"contained\" color=\"primary\">Primary</Button>;\n}`}
            desc="기본 Primary 버튼"
          />
          <ExampleTab
            example={<MuiButton variant="outlined">Outlined</MuiButton>}
            code={`import Button from '@mui/material/Button';\n\nfunction Demo() {\n  return <Button variant=\"outlined\">Outlined</Button>;\n}`}
            desc="Outlined 버튼"
          />
          <ExampleTab
            example={<MuiButton variant="contained" startIcon={<MuiIcon>check</MuiIcon>}>Success</MuiButton>}
            code={`import Button from '@mui/material/Button';\nimport Icon from '@mui/material/Icon';\n\nfunction Demo() {\n  return <Button variant=\"contained\" startIcon={<Icon>check</Icon>}>Success</Button>;\n}`}
            desc="아이콘 버튼"
          />
          <ExampleTab
            example={<MuiButton variant="contained" disabled>Disabled</MuiButton>}
            code={`import Button from '@mui/material/Button';\n\nfunction Demo() {\n  return <Button variant=\"contained\" disabled>Disabled</Button>;\n}`}
            desc="Disabled 버튼"
          />
          <ExampleTab
            example={<MuiButtonGroup variant="contained"><MuiButton>Left</MuiButton><MuiButton>Right</MuiButton></MuiButtonGroup>}
            code={`import Button from '@mui/material/Button';\nimport ButtonGroup from '@mui/material/ButtonGroup';\n\nfunction Demo() {\n  return (<ButtonGroup variant=\"contained\"><Button>Left</Button><Button>Right</Button></ButtonGroup>);\n}`}
            desc="버튼 그룹"
          />
        </div>
        {/* 입력폼 */}
        <h4 style={{ marginTop: 32 }}>TextField (입력)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiTextField label="기본 입력" variant="outlined" size="small" />}
            code={`import TextField from '@mui/material/TextField';\n\nfunction Demo() {\n  return <TextField label=\"기본 입력\" variant=\"outlined\" size=\"small\" />;\n}`}
            desc="기본 TextField"
          />
          <ExampleTab
            example={<MuiTextField label="비밀번호" type="password" variant="outlined" size="small" />}
            code={`import TextField from '@mui/material/TextField';\n\nfunction Demo() {\n  return <TextField label=\"비밀번호\" type=\"password\" variant=\"outlined\" size=\"small\" />;\n}`}
            desc="Password TextField"
          />
          <ExampleTab
            example={<MuiTextField label="검색" variant="outlined" size="small" InputProps={{ endAdornment: <MuiIcon>search</MuiIcon> }} />}
            code={`import TextField from '@mui/material/TextField';\nimport Icon from '@mui/material/Icon';\n\nfunction Demo() {\n  return <TextField label=\"검색\" variant=\"outlined\" size=\"small\" InputProps={{ endAdornment: <Icon>search</Icon> }} />;\n}`}
            desc="Search TextField"
          />
        </div>
        {/* 셀렉트 */}
        <h4 style={{ marginTop: 32 }}>Select (셀렉트)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={
              <MuiFormControl size="small" variant="outlined">
                <MuiInputLabel>과일</MuiInputLabel>
                <MuiSelect label="과일" defaultValue="apple">
                  <MuiMenuItem value="apple">Apple</MuiMenuItem>
                  <MuiMenuItem value="banana">Banana</MuiMenuItem>
                </MuiSelect>
              </MuiFormControl>
            }
            code={`import FormControl from '@mui/material/FormControl';\nimport InputLabel from '@mui/material/InputLabel';\nimport Select from '@mui/material/Select';\nimport MenuItem from '@mui/material/MenuItem';\n\nfunction Demo() {\n  return (<FormControl size=\"small\" variant=\"outlined\">\n    <InputLabel>과일</InputLabel>\n    <Select label=\"과일\" defaultValue=\"apple\">\n      <MenuItem value=\"apple\">Apple</MenuItem>\n      <MenuItem value=\"banana\">Banana</MenuItem>\n    </Select>\n  </FormControl>);\n}`}
            desc="기본 Select"
          />
        </div>
        {/* 체크박스/스위치 */}
        <h4 style={{ marginTop: 32 }}>Checkbox & Switch</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiCheckbox defaultChecked color="primary" />}
            code={`import Checkbox from '@mui/material/Checkbox';\n\nfunction Demo() {\n  return <Checkbox defaultChecked color=\"primary\" />;\n}`}
            desc="Checkbox"
          />
          <ExampleTab
            example={<MuiSwitch defaultChecked color="primary" />}
            code={`import Switch from '@mui/material/Switch';\n\nfunction Demo() {\n  return <Switch defaultChecked color=\"primary\" />;\n}`}
            desc="Switch"
          />
        </div>
        {/* 날짜 선택 */}
        <h4 style={{ marginTop: 32 }}>DatePicker (날짜 선택)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiTextField type="date" label="날짜" InputLabelProps={{ shrink: true }} size="small" />}
            code={`import TextField from '@mui/material/TextField';\n\nfunction Demo() {\n  return <TextField type=\"date\" label=\"날짜\" InputLabelProps={{ shrink: true }} size=\"small\" />;\n}`}
            desc="DatePicker (MUI 기본)"
          />
        </div>
        {/* 다이얼로그 */}
        <h4 style={{ marginTop: 32 }}>Dialog (다이얼로그)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiDialogDemo />}
            code={`import Dialog from '@mui/material/Dialog';\nimport Button from '@mui/material/Button';\nimport DialogTitle from '@mui/material/DialogTitle';\nimport DialogActions from '@mui/material/DialogActions';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>다이얼로그 열기</Button><Dialog open={open} onClose={() => setOpen(false)}><DialogTitle>다이얼로그 내용</DialogTitle><DialogActions><Button onClick={() => setOpen(false)}>닫기</Button></DialogActions></Dialog></>);\n}`}
            desc="Dialog"
          />
        </div>
        {/* 테이블 */}
        <h4 style={{ marginTop: 32 }}>Table (테이블)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiTableDemo />}
            code={`import Table from '@mui/material/Table';\nimport TableBody from '@mui/material/TableBody';\nimport TableCell from '@mui/material/TableCell';\nimport TableContainer from '@mui/material/TableContainer';\nimport TableHead from '@mui/material/TableHead';\nimport TableRow from '@mui/material/TableRow';\nimport Paper from '@mui/material/Paper';\n\nconst rows = [\n  { name: '홍길동', age: 28 },\n  { name: '김철수', age: 34 },\n];\n\nfunction Demo() {\n  return (<TableContainer component={Paper}><Table><TableHead><TableRow><TableCell>이름</TableCell><TableCell>나이</TableCell></TableRow></TableHead><TableBody>{rows.map((row, i) => (<TableRow key={i}><TableCell>{row.name}</TableCell><TableCell>{row.age}</TableCell></TableRow>))}</TableBody></Table></TableContainer>);\n}`}
            desc="기본 Table"
          />
        </div>
        {/* 스낵바 */}
        <h4 style={{ marginTop: 32 }}>Snackbar (스낵바)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiSnackbarDemo />}
            code={`import Snackbar from '@mui/material/Snackbar';\nimport Button from '@mui/material/Button';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>스낵바 열기</Button><Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} message=\"저장되었습니다!\" /></>);\n}`}
            desc="Snackbar"
          />
        </div>
        {/* Tabs */}
        <h4 style={{ marginTop: 32 }}>Tabs</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiTabsDemo />}
            code={`import Tabs from '@mui/material/Tabs';\nimport Tab from '@mui/material/Tab';\nimport React from 'react';\n\nfunction Demo() {\n  const [value, setValue] = React.useState(0);\n  return (<Tabs value={value} onChange={(_, v) => setValue(v)}><Tab label=\"Tab1\" /><Tab label=\"Tab2\" /></Tabs>);\n}`}
            desc="Tabs"
          />
        </div>
        {/* Menu (Dropdown) */}
        <h4 style={{ marginTop: 32 }}>Menu (Dropdown)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiMenuDemo />}
            code={`import Menu from '@mui/material/Menu';\nimport MenuItem from '@mui/material/MenuItem';\nimport Button from '@mui/material/Button';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [anchorEl, setAnchorEl] = useState(null);\n  const open = Boolean(anchorEl);\n  return (<><Button onClick={e => setAnchorEl(e.currentTarget)}>메뉴 열기</Button><Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}><MenuItem onClick={() => setAnchorEl(null)}>메뉴1</MenuItem><MenuItem onClick={() => setAnchorEl(null)}>메뉴2</MenuItem></Menu></>);\n}`}
            desc="Dropdown"
          />
        </div>
        {/* Pagination */}
        <h4 style={{ marginTop: 32 }}>Pagination</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<Pagination defaultCurrent={10} total={1} />}
            code={`import Pagination from '@mui/material/Pagination';\n\nfunction Demo() {\n  return <Pagination count={10} page={1} />;\n}`}
            desc="Pagination"
          />
        </div>
        {/* Progress */}
        <h4 style={{ marginTop: 32 }}>Progress</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiLinearProgress variant="determinate" value={60} />}
            code={`import LinearProgress from '@mui/material/LinearProgress';\n\nfunction Demo() {\n  return <LinearProgress variant=\"determinate\" value={60} />;\n}`}
            desc="LinearProgress"
          />
        </div>
        {/* Avatar */}
        <h4 style={{ marginTop: 32 }}>Avatar</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiAvatar>A</MuiAvatar>}
            code={`import Avatar from '@mui/material/Avatar';\n\nfunction Demo() {\n  return <Avatar>A</Avatar>;\n}`}
            desc="Avatar"
          />
        </div>
        {/* Badge */}
        <h4 style={{ marginTop: 32 }}>Badge</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiBadge badgeContent={5} color="primary"><MuiAvatar>B</MuiAvatar></MuiBadge>}
            code={`import Badge from '@mui/material/Badge';\nimport Avatar from '@mui/material/Avatar';\n\nfunction Demo() {\n  return <Badge badgeContent={5} color=\"primary\"><Avatar>B</Avatar></Badge>;\n}`}
            desc="Badge"
          />
        </div>
        {/* Chip (Tag) */}
        <h4 style={{ marginTop: 32 }}>Chip (Tag)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiChip label="Tag" color="primary" />}
            code={`import Chip from '@mui/material/Chip';\n\nfunction Demo() {\n  return <Chip label=\"Tag\" color=\"primary\" />;\n}`}
            desc="Chip"
          />
        </div>
        {/* Accordion */}
        <h4 style={{ marginTop: 32 }}>Accordion</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiAccordionDemo />}
            code={`import Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nfunction Demo() {\n  return (<Accordion><AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>패널 제목</Typography></AccordionSummary><AccordionDetails><Typography>패널 내용</Typography></AccordionDetails></Accordion>);\n}`}
            desc="Accordion"
          />
        </div>
        {/* Tooltip */}
        <h4 style={{ marginTop: 32 }}>Tooltip</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiTooltip title="툴팁 내용"><span>툴팁</span></MuiTooltip>}
            code={`import Tooltip from '@mui/material/Tooltip';\n\nfunction Demo() {\n  return <Tooltip title=\"툴팁 내용\"><span>툴팁</span></Tooltip>;\n}`}
            desc="Tooltip"
          />
        </div>
        {/* Dialog (확인 다이얼로그) */}
        <h4 style={{ marginTop: 32 }}>Dialog (확인 다이얼로그)</h4>
        <div style={stateExampleBlockStyle}>
          <ExampleTab
            example={<MuiConfirmDialogDemo />}
            code={`import Dialog from '@mui/material/Dialog';\nimport DialogTitle from '@mui/material/DialogTitle';\nimport DialogActions from '@mui/material/DialogActions';\nimport Button from '@mui/material/Button';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>확인</Button><Dialog open={open} onClose={() => setOpen(false)}><DialogTitle>정말 삭제할까요?</DialogTitle><DialogActions><Button onClick={() => setOpen(false)}>아니오</Button><Button onClick={() => setOpen(false)} color=\"primary\">네</Button></DialogActions></Dialog></>);\n}`}
            desc="확인 다이얼로그"
          />
        </div>
      </div>
    ),
  },
  reactrouter: {
    id: 'reactrouter',
    title: 'React Router',
    description: 'react-router로 라우팅 구현 예제',
    category: 'opensource',
    icon: '🛣️',
    prev: 'mui',
    next: 'styledcomponents',
    content: <div>React Router 예제 준비 중...</div>,
  },
  styledcomponents: {
    id: 'styledcomponents',
    title: 'styled-components',
    description: 'styled-components로 스타일링 예제',
    category: 'opensource',
    icon: '💅',
    prev: 'reactrouter',
    next: 'recoil',
    content: <div>styled-components 예제 준비 중...</div>,
  },
  recoil: {
    id: 'recoil',
    title: 'Recoil',
    description: 'Recoil로 전역 상태 관리 예제',
    category: 'opensource',
    icon: '🧬',
    prev: 'styledcomponents',
    next: 'reactquery',
    content: <div>Recoil 예제 준비 중...</div>,
  },
  reactquery: {
    id: 'reactquery',
    title: 'React Query',
    description: 'React Query로 서버 상태 관리 예제',
    category: 'opensource',
    icon: '🔗',
    prev: 'recoil',
    next: 'restapi',
    content: <div>React Query 예제 준비 중...</div>,
  },
  fetchapi: {
    id: 'fetchapi',
    title: 'Fetch API',
    description: '브라우저 내장 Fetch API를 사용한 데이터 요청',
    category: 'Api',
    icon: '📡',
    prev: 'axios',
    next: 'axios',
    content: <FetchAPI />
  },

  axios: {
    id: 'axios',
    title: 'Axios',
    description: 'Axios 라이브러리를 사용한 HTTP 요청',
    category: 'Api',
    icon: '🔄',
    prev: 'fetchapi',
    next: 'tanstackquery',
    content: <AxiosExample />
  },
  tanstackquery: {
    id: 'tanstackquery',
    title: 'TanStack Query',
    description: 'TanStack Query를 사용한 데이터 관리',
    category: 'Api',
    icon: '🔄',
    prev: 'axios',
    next: null,
    content: <TanStackQueryExample />
  },
  restapi: {
    id: 'restapi',
    title: 'REST API',
    description: 'REST API의 기본 개념과 사용법',
    category: 'Api',
    icon: '🌐',
    prev: 'axios',
    next: null,
    content: <div>REST API 예제 준비 중...</div>
  },

  jsx: {
    id: 'jsx',
    title: 'JSX',
    description: 'JSX 문법과 사용법에 대해 알아봅니다.',
    category: 'basics',
    icon: 'code',
    prev: 'setup',
    next: 'components',
    content: <div>JSX 예제 준비 중...</div>
  },

  customhooks: {
    id: 'customhooks',
    title: 'Custom Hooks',
    description: '커스텀 훅 작성과 활용 방법을 알아봅니다.',
    category: 'advanced',
    icon: 'hook',
    prev: 'hooks',
    next: 'fetchapi',
    content: <div>Custom Hooks 예제 준비 중...</div>
  },
  state: {
    id: 'state',
    title: 'State',
    description: 'React의 상태 관리 방법을 배웁니다.',
    category: 'hooks',
    icon: '💡',
    prev: 'useState',
    next: 'useEffect',
    content: <div>State에 대한 설명입니다. useState, useEffect 등이 있습니다.</div>
  },
  hooks: {
    id: 'hooks',
    title: 'Hooks',
    description: 'React Hooks에 대한 전반적인 소개',
    category: 'hooks',
    icon: '🪝',
    prev: 'state',
    next: 'customhooks',
    content: <div>Hooks에 대한 설명입니다. useState, useEffect 등이 있습니다.</div>
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
      <button onClick={addItem}>항목 추가</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item}
            <button onClick={() => removeItem(idx)}>삭제</button>
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

// StateEffectDemo 컴포넌트 추가
/* function StateEffectDemo() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('count 변경:', count);
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)} style={{ padding: '0.4em 1.2em', borderRadius: 6, background: '#232323', color: '#eaeaea', border: '1px solid #444', cursor: 'pointer', marginRight: 8 }}>+1</button>
      <span style={{ color: '#eaeaea' }}>{count}</span>
    </div>
  );
} */

function DynamicFormDemo() {
  const [fields, setFields] = React.useState([{ value: '' }]);

  const handleChange = (i: number, v: string) => {
    setFields(fields => fields.map((f, idx) => idx === i ? { value: v } : f));
  };

  const handleAdd = () => setFields(fields => [...fields, { value: '' }]);
  const handleRemove = (i: number) => setFields(fields => fields.length > 1 ? fields.filter((_, idx) => idx !== i) : fields);

  return (
    <div>
      {fields.map((field, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <input
            value={field.value}
            onChange={e => handleChange(i, e.target.value)}
            style={{ marginRight: 8, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }}
            placeholder={`입력 ${i + 1}`}
          />
          <button onClick={() => handleRemove(i)} style={{ marginRight: 4, borderRadius: 4, border: 'none', background: '#e74c3c', color: '#fff', padding: '0.3em 0.7em', cursor: 'pointer' }}>-</button>
        </div>
      ))}
      <button onClick={handleAdd} style={{ borderRadius: 4, border: 'none', background: '#27c93f', color: '#fff', padding: '0.4em 1em', cursor: 'pointer' }}>필드 추가</button>
      <pre style={{ background: '#232323', color: '#b5e853', borderRadius: 6, padding: 8, marginTop: 12 }}>{JSON.stringify(fields, null, 2)}</pre>
    </div>
  );
}

function SumInputsDemo() {
  const [values, setValues] = React.useState([0, 0, 0]);
  const handleChange = (i: number, v: string) => {
    const n = Number(v) || 0;
    setValues(values => values.map((val, idx) => idx === i ? n : val));
  };
  const sum = values.reduce((a, b) => a + b, 0);
  return (
    <div>
      {values.map((v, i) => (
        <input
          key={i}
          type="number"
          value={v}
          onChange={e => handleChange(i, e.target.value)}
          style={{ marginRight: 8, width: 60, padding: 4, borderRadius: 4, border: '1px solid #444', background: '#232323', color: '#eaeaea' }}
        />
      ))}
      <div style={{ marginTop: 8, color: '#b5e853' }}>합계: {sum}</div>
    </div>
  );
}

function MultiCheckboxDemo() {
  const items = ['React', 'Vue', 'Angular', 'Svelte'];
  const [checked, setChecked] = React.useState<string[]>([]);
  const handleToggle = (item: string) => {
    setChecked(checked => checked.includes(item)
      ? checked.filter(i => i !== item)
      : [...checked, item]
    );
  };
  return (
    <div>
      {items.map(item => (
        <label key={item} style={{ display: 'block', marginBottom: 4 }}>
          <input
            type="checkbox"
            checked={checked.includes(item)}
            onChange={() => handleToggle(item)}
            style={{ marginRight: 6 }}
          />
          {item}
        </label>
      ))}
      <div style={{ marginTop: 8, color: '#b5e853' }}>선택: {checked.join(', ') || '없음'}</div>
    </div>
  );
}

// --- Ant Design Demo Components ---
function AntdModalDemo() {
  const [open, setOpen] = React.useState(false);
  return <><Button onClick={() => setOpen(true)}>모달 열기</Button><AntdModal open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>모달 내용입니다.</AntdModal></>;
}
function AntdTableDemo() {
  const columns = [
    { title: '이름', dataIndex: 'name', sorter: (a: any, b: any) => a.name.localeCompare(b.name) },
    { title: '나이', dataIndex: 'age', filters: [ { text: '20대', value: 2 }, { text: '30대', value: 3 } ], onFilter: (value: any, record: any) => String(record.age).startsWith(value) },
  ];
  const data = [
    { key: 1, name: '홍길동', age: 28 },
    { key: 2, name: '김철수', age: 34 },
  ];
  return <Table columns={columns} dataSource={data} />;
}
function AntdNotificationDemo() {
  return <Button onClick={() => notification.success({ message: '알림', description: '저장이 완료되었습니다.' })}>알림 띄우기</Button>;
}
function AntdMessageDemo() {
  return <Button onClick={() => message.success('성공적으로 처리되었습니다.')}>메시지 띄우기</Button>;
}
function AntdDropdownDemo() {
  const menu = (
    <Menu>
      <Menu.Item key="1">메뉴1</Menu.Item>
      <Menu.Item key="2">메뉴2</Menu.Item>
    </Menu>
  );
  return <Dropdown overlay={menu}><Button>메뉴</Button></Dropdown>;
}
function AntdPopconfirmDemo() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Popconfirm
      title="정말 삭제할까요?"
      visible={visible}
      onConfirm={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      okText="네"
      cancelText="아니오"
    >
      <Button onClick={() => setVisible(true)}>삭제</Button>
    </Popconfirm>
  );
}

function MuiDialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <MuiButton variant="contained" onClick={() => setOpen(true)}>다이얼로그 열기</MuiButton>
      <MuiDialog open={open} onClose={() => setOpen(false)}>
        <MuiDialogTitle>다이얼로그 내용</MuiDialogTitle>
        <MuiDialogActions>
          <MuiButton onClick={() => setOpen(false)}>닫기</MuiButton>
        </MuiDialogActions>
      </MuiDialog>
    </>
  );
}

function MuiTableDemo() {
  const rows = [
    { name: '홍길동', age: 28 },
    { name: '김철수', age: 34 },
  ];
  return (
    <MuiTableContainer component={MuiPaper}>
      <MuiTable>
        <MuiTableHead>
          <MuiTableRow>
            <MuiTableCell>이름</MuiTableCell>
            <MuiTableCell>나이</MuiTableCell>
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          {rows.map((row, i) => (
            <MuiTableRow key={i}>
              <MuiTableCell>{row.name}</MuiTableCell>
              <MuiTableCell>{row.age}</MuiTableCell>
            </MuiTableRow>
          ))}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
}

function MuiSnackbarDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <MuiButton variant="contained" onClick={() => setOpen(true)}>스낵바 열기</MuiButton>
      <MuiSnackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} message="저장되었습니다!" />
    </>
  );
}

function MuiTabsDemo() {
  const [value, setValue] = React.useState(0);
  return (
    <MuiTabs value={value} onChange={(_, v) => setValue(v)}>
      <MuiTab label="Tab1" />
      <MuiTab label="Tab2" />
    </MuiTabs>
  );
}

function MuiMenuDemo() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <MuiButton onClick={e => setAnchorEl(e.currentTarget)}>메뉴 열기</MuiButton>
      <MuiMenu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MuiMenuItem onClick={() => setAnchorEl(null)}>메뉴1</MuiMenuItem>
        <MuiMenuItem onClick={() => setAnchorEl(null)}>메뉴2</MuiMenuItem>
      </MuiMenu>
    </>
  );
}

function MuiAccordionDemo() {
  return (
    <MuiAccordion>
      <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>패널 제목</Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        <Typography>패널 내용</Typography>
      </MuiAccordionDetails>
    </MuiAccordion>
  );
}

function MuiConfirmDialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <MuiButton onClick={() => setOpen(true)}>확인</MuiButton>
      <MuiDialog open={open} onClose={() => setOpen(false)}>
        <MuiDialogTitle>정말 삭제할까요?</MuiDialogTitle>
        <MuiDialogActions>
          <MuiButton onClick={() => setOpen(false)}>아니오</MuiButton>
          <MuiButton onClick={() => setOpen(false)} color="primary">네</MuiButton>
        </MuiDialogActions>
      </MuiDialog>
    </>
  );
}
