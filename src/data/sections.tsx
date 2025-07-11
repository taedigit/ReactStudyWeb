import React from 'react';
import type { Section, SectionId } from '../types/section';
import { MacCmd } from '../components/MacCmd';
import { ExampleTab } from '../components/ExampleTab';
import { Button, Input, Select as AntdSelect, Checkbox, Switch, DatePicker, Modal as AntdModal, Table, notification, message, Tabs, Dropdown, Menu, Pagination, Progress, Avatar, Badge, Tag, Popconfirm } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiTooltip from '@mui/material/Tooltip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FetchAPI from '../sections/api/FetchAPI';
import AxiosExample from '../sections/api/AxiosExample';
import TanStackQueryExample from '../sections/api/TanStackQueryExample';
import ReactQueryExample from '../sections/api/ReactQueryExample';
import UseReducerExample from '../sections/hooks/UseReducerExample';
import { UseContextExample } from '../sections/hooks/UseContextExample';
import { UseStateExample } from '../sections/hooks/UseStateExample';
import { UseEffectExample } from '../sections/hooks/UseEffectExample';
import { UseRefExample } from '../sections/hooks/UseRefExample';
import { UseMemoExample } from '../sections/hooks/UseMemoExample';
import { UseCallbackExample } from '../sections/hooks/UseCallbackExample';
import { FixedSizeList as List } from 'react-window';
import styled from 'styled-components';
import ReactRouterExample from '../sections/opensource/ReactRouterExample';
import StyledComponentsExample from '../sections/opensource/StyledComponentsExample';
import ApiExamples from '../sections/api';
import SWRExample from '../sections/api/SWRExample';
import RechartsExample from '../sections/opensource/RechartsExample';
import MuiButton from '@mui/material/Button';
import MuiTextField from '@mui/material/TextField';
import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiSelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiCheckbox from '@mui/material/Checkbox';
import MuiSwitch from '@mui/material/Switch';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiTable from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiPaper from '@mui/material/Paper';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiLinearProgress from '@mui/material/LinearProgress';
import MuiAvatar from '@mui/material/Avatar';
import MuiBadge from '@mui/material/Badge';
import MuiChip from '@mui/material/Chip';
import MuiDialogActions from '@mui/material/DialogActions';
import MuiMenu from '@mui/material/Menu';

import MuiPagination from '@mui/material/Pagination';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { Collapse } from 'antd';
import { VictoryExample } from '../sections/opensource/VictoryExample';
import { ChartjsExample } from '../sections/opensource/ChartjsExample';
import { ZustandExample } from '../sections/opensource/ZustandExample';
import { JotaiExample } from '../sections/opensource/JotaiExample';
import ReduxExample from '../sections/opensource/ReduxExample';
import EmotionExample from '../sections/opensource/EmotionExample';
import TailwindExample from '../sections/opensource/TailwindExample';
import SassExample from '../sections/opensource/SassExample';
import RadixUIExample from '../sections/opensource/RadixUIExample';
import { ReactHookFormExample } from '../sections/opensource/ReactHookFormExample';
//import { FormikBasicExample, FormikValidationExample, FormikAdvancedExample } from '../sections/opensource/FormikExample';
import { YupExample } from '../sections/opensource/YupExample';
import { ZodExample } from '../sections/opensource/ZodExample';
import { JestExample } from '../sections/opensource/JestExample';
import { ReactTestingLibraryExample } from '../sections/opensource/ReactTestingLibraryExample';
import { CypressExample } from '../sections/opensource/CypressExample';
import FormikExample from '../sections/opensource/FormikExample';
import RecoilExample from '../sections/opensource/RecoilExample';
import AGGridExample from '../sections/opensource/AGGridExample';
import { ReactDataGridExample } from '../sections/opensource';
import { ReactTableExample } from '../sections/opensource';
import { MaterialUIDataGridExample } from '../sections/opensource';
import { FramerMotionExample } from '../sections/opensource';
import { DayjsExample, DateFnsExample } from '../sections/opensource';
import { DndKitExample } from '../sections/opensource';
import { ServerDnDExample, DropRestrictionDnDExample, CustomPreviewDnDExample, KeyboardA11yDnDExample } from '../sections/practicalExamples';
import { TrashDnDExample } from '../sections/practicalExamples';
import { MultiSelectDnDExample } from '../sections/practicalExamples';
import { MobileTouchDnDExample } from '../sections/practicalExamples';
import { VirtualizedDnDExample } from '../sections/practicalExamples';
import DynamicFormExample from '../sections/practicalExamples/DynamicFormExample';
import FileUploadExample from '../sections/practicalExamples/FileUploadExample';
import AsyncValidationFormExample from '../sections/practicalExamples/AsyncValidationFormExample';
import ServerSideTableExample from '../sections/practicalExamples/ServerSideTableExample';
import VirtualizedTableExample from '../sections/practicalExamples/VirtualizedTableExample';
import RealtimeChartExample from '../sections/practicalExamples/RealtimeChartExample';
import PageTransitionExample from '../sections/practicalExamples/PageTransitionExample';
import SkeletonLoadingExample from '../sections/practicalExamples/SkeletonLoadingExample';
import KeyboardFocusTrapExample from '../sections/practicalExamples/KeyboardFocusTrapExample';
import I18nExample from '../sections/practicalExamples/I18nExample';
import WebSocketSyncExample from '../sections/practicalExamples/WebSocketSyncExample';
import AuthExample from '../sections/practicalExamples/AuthExample';
import ServerDnDExample2 from '../sections/practicalExamples/ServerDnDExample2';
import TodoProjectExample from '../sections/realproject/TodoProjectExample';






const nvmInstallScript = `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# 터미널 재시작 또는 아래 명령 실행
export NVM_DIR="$([ -z \\\${XDG_CONFIG_HOME-} ] && printf %s \\\${HOME}/.nvm || printf %s \\\${XDG_CONFIG_HOME}/nvm)"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm`;

const StyledButton = styled.button`
background: #ff9800;
color: white;
border: none;
border-radius: 4px;
padding: 8px 16px;
font-weight: bold;
`;


const setupContent = (
  <div>
    <h2>React 설치 방법</h2>
    {/* 리액트 개발 에디터 소개 추가 */}
    <div style={{
      marginBottom: '2em',
      background: '#23272f',
      padding: '1.2em 2em',
      borderRadius: '8px',
      border: '1px solid #444',
      marginTop: '1.2em',
      marginLeft: 0,
      marginRight: 0,
      color: '#eaeaea',
    }}>
      <h3 style={{ marginTop: 0 }}>💻 리액트 개발에 추천하는 에디터</h3>
      <ul style={{ marginBottom: 0, listStylePosition: 'inside' }}>
        <li style={{ marginBottom: '0.7em' }}>
          <b>Visual Studio Code (VS Code)</b> – 무료, 가볍고 빠르며, 리액트/자바스크립트 생태계에서 가장 널리 사용<br />
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code 공식 사이트</a>
        </li>
        <li style={{ marginBottom: '0.7em' }}>
          <b>WebStorm</b> – JetBrains에서 만든 강력한 유료 IDE, 자동완성/리팩토링/디버깅 등 고급 기능 제공<br />
          <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">WebStorm 공식 사이트</a>
        </li>
        <li style={{ marginBottom: '0.7em' }}>
          <b>기타</b>: Sublime Text, Atom, Vim 등도 사용 가능
        </li>
      </ul>
      <div style={{ marginTop: '0.7em', fontSize: 15 }}>
        <b>VS Code 추천 확장:</b> <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" style={{ color: '#8fd' }} target="_blank" rel="noopener noreferrer">ES7+ React/Redux/React-Native snippets</a>,
        <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" style={{ color: '#8fd' }} target="_blank" rel="noopener noreferrer">Prettier</a>,
        <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" style={{ color: '#8fd' }} target="_blank" rel="noopener noreferrer">ESLint</a>,
        <span style={{ color: '#8fd' }}>Bracket Pair Colorizer</span>,
        <a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" style={{ color: '#8fd' }} target="_blank" rel="noopener noreferrer">GitLens</a> 등<br />
        <span style={{ color: '#aaa' }}>※ 확장 설치로 코드 자동완성, 포맷팅, 문법 검사, Git 연동 등 개발 효율이 크게 향상됩니다.</span>
      </div>
    </div>
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
  // 과일 이름에 따라 아이콘 매핑
  const icons: Record<string, string> = {
    '사과': '🍎',
    '바나나': '🍌',
    '오렌지': '🍊',
    '포도': '🍇',
    '수박': '🍉',
    '딸기': '🍓',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map(item => (
        <span key={item} style={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label={item}>{icons[item] || '🔹'}</span>
          {item}
        </span>
      ))}
    </div>
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
    title: '소개',
    description: '리액트 학습 사이트에 오신 것을 환영합니다.',
    category: 'getting_started',
    icon: '👋',
    prev: null,
    next: 'setup',
    content: (
      <div style={{ width: '100%', margin: '0 auto', padding: '2.5em 1.5em', background: '#23272f', borderRadius: 16, color: '#eaeaea', boxShadow: '0 4px 24px #0002' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, color: '#8fd' }}>React란 무엇인가?</h1>
        <p style={{ fontSize: 18, marginBottom: 24 }}><b>React</b>는 Facebook(현 Meta)이 2013년에 오픈소스로 공개한 <b>프론트엔드 UI 라이브러리</b>입니다. 복잡한 사용자 인터페이스를 쉽고 효율적으로 구축할 수 있도록 설계되었으며, 현재는 전 세계적으로 가장 인기 있는 웹 프레임워크 중 하나입니다.</p>
        <div style={{ background: '#23272f', borderRadius: 12, padding: '1.2em 1.5em', marginBottom: 24, border: '1px solid #444' }}>
          <h2 style={{ color: '#8fd', fontSize: 22, marginBottom: 8 }}>이 사이트에서 공부할 수 있는 주요 React 주제</h2>
          <ul style={{ lineHeight: 2, fontSize: 17, margin: 0, paddingLeft: 0, listStyle: 'none' }}>
            <li>💡 <b>React 기초</b>: JSX, 컴포넌트, Props/State, 이벤트, 조건부/리스트 렌더링, Virtual DOM 등</li>
            <li>🧩 <b>Hooks</b>: useState, useEffect, useRef, useMemo, useCallback, useReducer, useContext, 커스텀 훅</li>
            <li>🗂️ <b>상태 관리</b>: Redux, Recoil, Zustand, Jotai 등</li>
            <li>🌐 <b>API/데이터</b>: Fetch, Axios, React Query, SWR 등</li>
            <li>🎨 <b>UI/스타일링</b>: Ant Design, MUI, Styled-components, Emotion, Tailwind, Radix UI 등</li>
            <li>📊 <b>차트/시각화</b>: Recharts, Victory, Chart.js 등</li>
            <li>🧪 <b>테스트</b>: Jest, React Testing Library, Cypress 등</li>
            <li>🚀 <b>실전 예제</b>: DnD, 폼, 파일 업로드, 실시간 차트, 대용량 테이블, 다국어(i18n), 인증 등</li>
          </ul>
          <p style={{color:'#8fd', marginTop: 12}}>각 주제별로 실습 예제와 설명이 준비되어 있습니다.<br/>메뉴에서 원하는 항목을 선택해 직접 체험해보세요!</p>
        </div>
        <h2 style={{ color: '#8fd', fontSize: 22, marginTop: 32, marginBottom: 8 }}>React의 핵심 개념과 특징</h2>
        <ul style={{ lineHeight: 2, fontSize: 17, margin: 0, paddingLeft: 0, listStyle: 'none' }}>
          <li>🧱 <b>컴포넌트 기반 구조</b>: UI를 독립적이고 재사용 가능한 작은 단위(컴포넌트)로 분리하여 개발</li>
          <li>📝 <b>선언적 UI</b>: UI의 상태에 따라 "어떻게 보일지"를 선언적으로 기술, 복잡한 DOM 조작을 자동화</li>
          <li>⚡ <b>Virtual DOM</b>: 실제 DOM 대신 메모리 상의 가상 DOM을 사용해 변경 사항을 효율적으로 계산(diff)하고, 필요한 부분만 실제 DOM에 반영</li>
          <li>➡️ <b>단방향 데이터 흐름</b>: 데이터가 부모 → 자식 방향으로만 흐르며, 예측 가능한 상태 관리가 가능</li>
          <li>🔤 <b>JSX</b>: JavaScript 코드 안에서 HTML과 유사한 문법으로 UI를 기술할 수 있는 확장 문법</li>
        </ul>
        <div style={{ margin: '2em 0', borderTop: '1px solid #444' }} />
        <h2 style={{ color: '#8fd', fontSize: 22, marginBottom: 8 }}>React로 할 수 있는 것</h2>
        <ul style={{ lineHeight: 2, fontSize: 17, margin: 0, paddingLeft: 0, listStyle: 'none' }}>
          <li>🌐 SPA(Single Page Application) 개발</li>
          <li>📊 대규모 웹 서비스, 대시보드, 관리자 페이지</li>
          <li>📱 모바일 앱(React Native)</li>
          <li>🖥️ 데스크탑 앱(Electron, Tauri 등과 결합)</li>
          <li>📈 실시간 데이터 시각화, 대시보드, 챗봇, 게임 등 다양한 UI/UX 구현</li>
        </ul>
        <div style={{ margin: '2em 0', borderTop: '1px solid #444' }} />
        <h2 style={{ color: '#8fd', fontSize: 22, marginBottom: 8 }}>React 공식 사이트 및 참고 자료</h2>
        <ul style={{ lineHeight: 2, fontSize: 17, margin: 0, paddingLeft: 0, listStyle: 'none' }}>
          <li>🔗 <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd', textDecoration: 'underline' }}>React 공식 홈페이지 (react.dev)</a></li>
          <li>🔗 <a href="https://ko.react.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd', textDecoration: 'underline' }}>React 공식 한글 문서</a></li>
          <li>🔗 <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd', textDecoration: 'underline' }}>React GitHub 저장소</a></li>
          <li>🔗 <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd', textDecoration: 'underline' }}>React Native 공식 사이트</a></li>
        </ul>
        <div style={{ margin: '2em 0', borderTop: '1px solid #444' }} />
        <p style={{color:'#8fd', fontWeight:'bold', fontSize: 18, textAlign: 'center'}}>이 사이트에서는 React의 기초부터 실전 예제, 다양한 라이브러리 활용법까지 단계별로 학습할 수 있습니다.<br/>아래 메뉴에서 원하는 주제를 선택해 시작해보세요!</p>
      </div>
    ),
  },
  editors: {
    id: 'editors',
    title: 'React 개발 에디터 소개',
    description: 'React 개발에 적합한 에디터(VS Code, WebStorm 등)와 장단점, 추천 확장 안내',
    category: 'getting_started',
    icon: '📝',
    prev: 'intro',
    next: 'setup',
    content: (
      <div>
        <h2>React 개발에 추천하는 에디터</h2>
        <div style={{
          marginBottom: '2em',
          background: '#23272f',
          padding: '1.2em 2em',
          borderRadius: '8px',
          border: '1px solid #444',
          marginTop: '1.2em',
          marginLeft: 0,
          marginRight: 0,
          color: '#eaeaea',
        }}>
          <h3 style={{ marginTop: 0 }}>1. Visual Studio Code (VS Code)</h3>
          <ul style={{ marginBottom: 0, listStylePosition: 'inside' }}>
            <li style={{ marginBottom: '0.7em' }}><b>장점:</b> 무료, 가볍고 빠름, 다양한 확장, 강력한 커뮤니티, 리액트/JS 생태계 표준</li>
            <li style={{ marginBottom: '0.7em' }}><b>단점:</b> 대형 프로젝트에서 일부 기능(리팩토링 등)은 WebStorm보다 약간 부족할 수 있음</li>
            <li style={{ marginBottom: '0.7em' }}><b>공식 사이트:</b> <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code 바로가기</a></li>
          </ul>
          <div style={{ marginTop: '0.7em', fontSize: 15 }}>
            <b>추천 확장:</b> <span style={{ color: '#8fd' }}>ES7+ React/Redux/React-Native snippets</span>, <span style={{ color: '#8fd' }}>Prettier</span>, <span style={{ color: '#8fd' }}>ESLint</span>, <span style={{ color: '#8fd' }}>GitLens</span> 등<br />
            <span style={{ color: '#aaa' }}>※ 확장 설치로 코드 자동완성, 포맷팅, 문법 검사, Git 연동 등 개발 효율이 크게 향상됩니다.</span>
          </div>
        </div>
        <div style={{
          marginBottom: '2em',
          background: '#23272f',
          padding: '1.2em 2em',
          borderRadius: '8px',
          border: '1px solid #444',
          color: '#eaeaea',
        }}>
          <h3 style={{ marginTop: 0 }}>2. WebStorm</h3>
          <ul style={{ marginBottom: 0, listStylePosition: 'inside' }}>
            <li style={{ marginBottom: '0.7em' }}><b>장점:</b> 강력한 자동완성, 리팩토링, 디버깅, 대형 프로젝트에 최적화</li>
            <li style={{ marginBottom: '0.7em' }}><b>단점:</b> 유료(학생/오픈소스 무료), 무겁고 느릴 수 있음</li>
            <li style={{ marginBottom: '0.7em' }}><b>공식 사이트:</b> <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">WebStorm 바로가기</a></li>
          </ul>
        </div>
        <div style={{
          marginBottom: '2em',
          background: '#23272f',
          padding: '1.2em 2em',
          borderRadius: '8px',
          border: '1px solid #444',
          color: '#eaeaea',
        }}>
          <h3 style={{ marginTop: 0 }}>3. 기타 에디터</h3>
          <ul style={{ marginBottom: 0, listStylePosition: 'inside' }}>
            <li>Sublime Text, Atom, Vim 등도 사용 가능(가벼움, 커스터마이즈 강점)</li>
          </ul>
        </div>
        <div style={{ color: '#aaa', fontSize: 14 }}>
          <b>Tip:</b> 대부분의 리액트 개발자는 VS Code를 사용하며, 공식 문서/예제/강의도 VS Code 기준이 많습니다.<br />
          처음 시작한다면 VS Code를 강력 추천합니다!
        </div>
      </div>
    ),
  },
  setup: {
    id: 'setup',
    title: '설치',
    description: 'React 개발 환경 설치 및 프로젝트 생성 방법',
    category: 'getting_started',
    icon: '⚙️',
    prev: 'editors',
    next: 'typescript',
    content: setupContent,
  },
  typescript: {
    id: 'typescript',
    title: 'TypeScript 기초',
    description: '타입스크립트의 기본 타입부터 고급 타입까지, 실전 예시와 함께 한 번에 익히기',
    category: 'basics',
    icon: '📘',
    prev: 'setup',
    next: 'typescriptadvanced',
    content: (
      <div style={{ padding: '2.5em 0', background: '#23272f', borderRadius: 20, color: '#eaeaea', boxShadow: '0 6px 32px #0003', maxWidth: 950, margin: '0 auto', fontFamily: 'Pretendard, Noto Sans KR, sans-serif' }}>
        <div style={{ fontSize: 38, fontWeight: 900, marginBottom: 32, color: '#8fd', letterSpacing: '-1px', textShadow: '0 2px 12px #0006' }}>TypeScript 실전 가이드</div>
        {/* 1. 기본 타입 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>1. 기본 타입 (Primitive Types)</Typography>
          <Typography sx={{ mb: 2, color: '#e0f7fa', fontSize: 17, fontWeight: 500 }}>number, string, boolean, null, undefined 등 자바스크립트의 모든 기본 타입을 타입스크립트에서 명시적으로 선언할 수 있습니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li><b>number</b>: 정수/실수 모두</li><li><b>string</b>: 문자열</li><li><b>boolean</b>: true/false</li><li><b>null/undefined</b>: 값 없음</li></ul>}
            code={`let age: number = 30;\nlet name: string = "홍길동";\nlet isActive: boolean = true;\nlet n: null = null;\nlet u: undefined = undefined;`}
            desc={`실무에서는 API 응답, 폼 입력값 등에서 null/undefined를 명확히 구분하는 것이 중요합니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>undefined</b>는 "값이 할당되지 않음", <b>null</b>은 "명시적 비어있음"을 의미합니다. API 설계 시 구분해서 사용하세요.</span>
          </div>
        </div>
        {/* 2. 배열/튜플 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>2. 배열과 튜플</Typography>
          <Typography sx={{ mb: 2, color: '#fce7f3', fontSize: 17, fontWeight: 500 }}>배열은 요소 타입이 모두 같고, 튜플은 각 요소의 타입과 개수가 고정된 배열입니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li><b>number[]</b> / <b>Array&lt;string&gt;</b></li><li>튜플: <b>{`["age", 30]`}</b></li></ul>}
            code={`let numbers: number[] = [1, 2, 3];\nlet fruits: Array<string> = ["apple", "banana"];\nlet tuple: [string, number] = ["age", 30];`}
            desc={`실무에서 API 응답(예: ["id", 123]) 등에서 튜플을 활용하면 구조가 명확해집니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>튜플</b>은 <b>useState</b>의 반환값([state, setState]) 등에서 자주 사용됩니다.</span>
          </div>
        </div>
        {/* 3. any, unknown, never */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>3. any, unknown, never</Typography>
          <Typography sx={{ mb: 2, color: '#78350f', fontSize: 17, fontWeight: 500 }}>any는 타입 안전성을 포기, unknown은 타입 검사 필요, never는 절대 반환하지 않는 함수에 사용합니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li><b>any</b>: 아무 타입이나 허용</li><li><b>unknown</b>: 타입 검사 필요</li><li><b>never</b>: 절대 반환하지 않음</li></ul>}
            code={`let anything: any = 123;\nanything = "문자열";\nlet value: unknown = "abc";\nif (typeof value === "string") {\n  console.log(value.toUpperCase());\n}\nfunction error(msg: string): never {\n  throw new Error(msg);\n}`}
            desc={`실무에서는 any 사용을 최대한 피하고, unknown은 런타임 타입 체크와 함께 사용하세요.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>⚠️</span> <span>주의: <b>any</b>를 남용하면 타입스크립트의 이점을 모두 잃게 됩니다. <b>unknown</b>을 선호하세요.</span>
          </div>
        </div>
        {/* 4. 객체 타입 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>4. 객체 타입 (Object Types)</Typography>
          <Typography sx={{ mb: 2, color: '#be185d', fontSize: 17, fontWeight: 500 }}>객체 리터럴, 선택적/읽기전용 프로퍼티 등 다양한 객체 타입을 정의할 수 있습니다.</Typography>
          <ExampleTab
            example={<div style={{ fontSize: 17 }}>{`{ name: "홍길동", age: 20 }`}</div>}
            code={`let user: { name: string; age: number } = {\n  name: "홍길동",\n  age: 20,\n};\nlet user2: { name: string; age?: number } = { name: "철수" };\nlet user3: { readonly id: number; name: string } = { id: 1, name: "영희" };`}
            desc={`실무에서는 API 응답 타입, 폼 데이터 타입 등에서 객체 타입을 명확히 정의하는 것이 중요합니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>readonly</b>는 불변 데이터(API 응답 등)에, <b>?</b>는 선택적 필드에 사용하세요.</span>
          </div>
        </div>
        {/* 5. 함수 타입 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>5. 함수 타입 (Function Types)</Typography>
          <Typography sx={{ mb: 2, color: '#0e7490', fontSize: 17, fontWeight: 500 }}>함수의 매개변수, 반환값 타입을 명시할 수 있습니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>함수 선언/화살표 함수/void</li></ul>}
            code={`function add(a: number, b: number): number {\n  return a + b;\n}\nconst greet = (name: string): string => \`Hello, \\${name}\`;\nfunction print(msg: string): void {\n  console.log(msg);\n}`}
            desc={`실무에서는 콜백, API 핸들러, 이벤트 핸들러 등에서 함수 타입을 명확히 지정하세요.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>void</b>는 반환값이 없는 함수, <b>함수 타입 별칭</b>은 콜백/이벤트 핸들러에 자주 사용됩니다.</span>
          </div>
        </div>
        {/* 6. 타입 별칭 & 인터페이스 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>6. 타입 별칭 & 인터페이스</Typography>
          <Typography sx={{ mb: 2, color: '#b45309', fontSize: 17, fontWeight: 500 }}>type은 타입 별칭, interface는 구조적 타입 정의에 사용합니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>type User = {'{ name: string; age: number }'}</li><li>interface Product {'{ id: number; name: string; price: number; }'}</li></ul>}
            code={`type User = { name: string; age: number };\ninterface Product { id: number; name: string; price: number; }\ninterface Book extends Product { author: string; }`}
            desc={`실무에서는 API 응답, 폼 데이터, 상태 관리 등에서 타입 별칭과 인터페이스를 적절히 조합해 사용하세요.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>interface</b>는 확장/구조화, <b>type</b>은 유니언/인터섹션 등 복합 타입에 강점이 있습니다.</span>
          </div>
        </div>
        {/* 7. 유니언 & 인터섹션 타입 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>7. 유니언 & 인터섹션 타입</Typography>
          <Typography sx={{ mb: 2, color: '#e0e7ff', fontSize: 17, fontWeight: 500 }}>유니언(|)은 여러 타입 중 하나, 인터섹션(&)은 여러 타입을 모두 만족하는 타입입니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>string | number</li><li>Admin & Member</li></ul>}
            code={`let value: string | number = "hello";\ntype Admin = { admin: true };\ntype Member = { member: true };\ntype AdminMember = Admin & Member;`}
            desc={`실무에서는 API 응답, 폼 상태, 상태머신 등에서 유니언/인터섹션 타입을 적극 활용하세요.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Discriminated Union</b> 패턴은 상태머신, 폼 검증 등에서 매우 유용합니다.</span>
          </div>
        </div>
        {/* 8. 리터럴 타입 & enum */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>8. 리터럴 타입 & enum</Typography>
          <Typography sx={{ mb: 2, color: '#b45309', fontSize: 17, fontWeight: 500 }}>리터럴 타입은 값 자체를 타입으로, enum은 상수 집합을 정의합니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>direction: "left" | "right" | "up" | "down"</li><li>enum Color {'{ Red = 1, Green = 2, Blue = 4 }'}</li></ul>}
            code={`let direction: "left" | "right" | "up" | "down";\nenum Color { Red = 1, Green = 2, Blue = 4 }\nlet c: Color = Color.Green;`}
            desc={`실무에서는 API 응답 코드, 상태값 등에서 리터럴 타입과 enum을 적극 활용하세요.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>enum</b> 대신 <b>as const</b> 객체+keyof 패턴도 많이 사용합니다.</span>
          </div>
        </div>
        {/* 9. 타입 추론 & 단언 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>9. 타입 추론 & 타입 단언</Typography>
          <Typography sx={{ mb: 2, color: '#0e7490', fontSize: 17, fontWeight: 500 }}>타입 추론은 변수 선언 시 타입을 자동으로 결정, 단언(as)은 개발자가 타입을 보장할 때 사용합니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>let msg = "hello"; // string으로 추론</li><li>as 키워드로 단언</li></ul>}
            code={`let msg = "hello"; // string으로 추론\nlet el = document.querySelector("input") as HTMLInputElement;`}
            desc={`실무에서는 API 응답, DOM 조작 등에서 타입 단언(as)을 자주 사용합니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>타입 단언</b>은 정말 확실할 때만 사용하세요. 남용하면 런타임 오류 위험!</span>
          </div>
        </div>
        {/* 10. 제네릭 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>10. 제네릭 (Generics)</Typography>
          <Typography sx={{ mb: 2, color: '#e0e7ff', fontSize: 17, fontWeight: 500 }}>제네릭은 타입을 파라미터화해 재사용성과 타입 안전성을 높입니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>함수/인터페이스/타입에 <b>{'<T>'}</b> 사용</li><li>실전: API 응답, 상태관리, 폼 등에서 활용</li></ul>}
            code={`function identity<T>(arg: T): T { return arg; }\nconst output = identity<number>(123);\ninterface Box<T> { value: T; }\nconst box: Box<string> = { value: "abc" };\ntype Nullable<T> = T | null;`}
            desc={`실무에서는 API 응답 타입, 상태관리 라이브러리, 폼 라이브러리 등에서 제네릭을 적극 활용합니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>제네릭</b>은 타입 재사용성과 확장성의 핵심입니다. <b>extends</b>로 제약을 줄 수도 있습니다.</span>
          </div>
        </div>
        {/* 11. 유틸리티 타입 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>11. 유틸리티 타입 (Utility Types)</Typography>
          <Typography sx={{ mb: 2, color: '#0e7490', fontSize: 17, fontWeight: 500 }}>유틸리티 타입은 기존 타입을 변형하거나 부분 집합을 만들 때 유용합니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>Partial, Readonly, Pick, Omit, Record 등</li><li>실전: API 응답, 폼, 상태관리 등에서 활용</li></ul>}
            code={`type User = { name: string; age: number };\ntype PartialUser = Partial<User>;\ntype ReadonlyUser = Readonly<User>;\ntype NameOnly = Pick<User, "name">;\ntype UserWithoutAge = Omit<User, "age">;\ntype Scores = Record<"kor" | "eng" | "math", number>;\nconst scores: Scores = { kor: 90, eng: 80, math: 100 };`}
            desc={`실무에서는 API 응답 타입 가공, 폼 상태, 부분 업데이트 등에서 유틸리티 타입을 적극 활용합니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Pick</b>, <b>Omit</b> 등은 대규모 타입 관리에 필수입니다.</span>
          </div>
        </div>
        {/* 12. 타입 가드 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>12. 타입 가드 (Type Guard)</Typography>
          <Typography sx={{ mb: 2, color: '#fce7f3', fontSize: 17, fontWeight: 500 }}>타입 가드는 런타임에 타입을 좁혀 안전하게 사용할 수 있게 합니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>isString(x): x is string</li><li>typeof, instanceof</li><li>실전: API 응답, 폼 검증 등에서 활용</li></ul>}
            code={`function isString(x: unknown): x is string {\n  return typeof x === "string";\n}\nfunction printId(id: number | string) {\n  if (typeof id === "string") {\n    console.log(id.toUpperCase());\n  } else {\n    console.log(id.toFixed(2));\n  }\n}`}
            desc={`실무에서는 런타임 타입 체크, 폼 검증, API 응답 파싱 등에서 타입 가드를 적극 활용합니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>is</b> 키워드로 커스텀 타입가드를 만들어 활용하세요.</span>
          </div>
        </div>
        {/* 13. 고급 타입 */}
        <div style={{ ...stateExampleBlockStyle, background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', marginBottom: 40 }}>
          <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff', letterSpacing: '-0.5px' }}>13. 고급 타입</Typography>
          <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>맵드 타입, 조건부 타입, keyof, as const, Discriminated Union 등 실전에서 자주 쓰는 고급 타입 패턴입니다.</Typography>
          <ExampleTab
            example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>맵드 타입, 조건부 타입, keyof, 인덱스드 액세스, as const, Discriminated Union 등</li><li>실전: API 응답, 상태머신, 런타임 검증 등</li></ul>}
            code={`type Optional<T> = { [P in keyof T]?: T[P] };\ntype IsString<T> = T extends string ? true : false;\ntype User = { id: number; name: string };\ntype UserKey = keyof User; // "id" | "name"\ntype UserId = User["id"]; // number\ntype T = string | null | undefined;\ntype NonNullT = NonNullable<T>; // string\ntype Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; size: number };\nfunction getArea(shape: Shape): number {\n  switch (shape.kind) {\n    case "circle":\n      return Math.PI * shape.radius ** 2;\n    case "square":\n      return shape.size ** 2;\n  }\n}\nconst arr = [1, 2, 3] as const;\ntype ArrType = typeof arr; // [1, 2, 3]`}
            desc={`실무에서는 대규모 타입 설계, 상태머신, 런타임 검증 등에서 고급 타입 패턴을 적극 활용합니다.`}
          />
          <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Discriminated Union</b> + <b>as const</b> 패턴은 복잡한 상태 관리에 매우 강력합니다.</span>
          </div>
        </div>
        <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>14. 타입스크립트와 ESLint/Prettier</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>코드 품질, 린트, 포맷팅을 위한 ESLint, Prettier와 타입스크립트의 연동 실전</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>eslint-plugin-@typescript-eslint, prettier 연동</li><li>코드 자동 포맷, 타입 오류 린트</li></ul>}
    code={`// .eslintrc.js 예시\nmodule.exports = {\n  parser: '@typescript-eslint/parser',\n  plugins: ['@typescript-eslint'],\n  extends: [\n    'plugin:@typescript-eslint/recommended',\n    'prettier'\n  ],\n};\n// .prettierrc 예시\n{\n  "singleQuote": true,\n  "semi": false\n}`}
    desc={`ESLint와 Prettier를 함께 사용하면 코드 품질과 일관성을 자동으로 유지할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>eslint-plugin-@typescript-eslint</b>와 <b>prettier</b>를 함께 적용!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>15. 타입스크립트와 모듈 시스템</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>import/export, CommonJS, ESM 등 다양한 모듈 시스템에서 타입스크립트 활용</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>import/export, require/module.exports 차이</li><li>tsconfig module 옵션, ESM/Node.js 호환</li></ul>}
    code={`// ESM 방식\nimport foo from './foo';\nexport function bar() {}\n// CommonJS 방식\nconst foo = require('./foo');\nmodule.exports = { bar };\n// tsconfig.json\n{\n  "compilerOptions": { "module": "ESNext" }\n}`}
    desc={`모듈 시스템에 따라 import/export 방식과 tsconfig 설정이 달라지므로, 프로젝트 환경에 맞게 설정하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>ESM</b>과 <b>CommonJS</b> 차이를 명확히 구분!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>16. 타입스크립트와 주석/문서화</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>JSDoc, 타입 주석, 자동 문서화 도구(Typedoc 등)와 타입스크립트 실전</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>JSDoc으로 함수/타입 설명</li><li>Typedoc 등으로 자동 문서화</li></ul>}
    code={`/**\n * 두 수를 더합니다.\n * @param a 첫 번째 숫자\n * @param b 두 번째 숫자\n * @returns 합계\n */\nfunction sum(a: number, b: number): number {\n  return a + b;\n}\n// Typedoc 사용 예시\n// npx typedoc src/index.ts`}
    desc={`JSDoc과 Typedoc 등으로 타입과 코드를 함께 문서화하면, 협업과 유지보수성이 크게 향상됩니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>JSDoc</b>과 <b>Typedoc</b>으로 타입/코드 문서화 자동화!</span>
  </div>
</div><div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>17. 타입스크립트 유틸리티 타입 실전</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>Partial, Pick, Omit, Record, ReturnType 등 내장 유틸리티 타입의 실전 활용법</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>Partial: 일부만 선택적으로</li><li>Omit: 특정 속성 제외</li><li>Record: 객체 매핑</li></ul>}
    code={`interface User { id: string; name: string; age: number; }
type UserPartial = Partial<User>; // 모든 속성이 optional
type UserWithoutAge = Omit<User, 'age'>; // age 제외
type UserMap = Record<string, User>; // id → User 매핑
type UserReturn = ReturnType<() => User>;`}
    desc={`유틸리티 타입을 적극 활용하면, 반복되는 타입 선언을 줄이고 실전에서 타입 설계가 훨씬 쉬워집니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Omit</b>, <b>Partial</b>, <b>Record</b> 등은 실전에서 매우 자주 사용!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>18. 타입 단언/타입 좁히기 실전</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>as, 타입 가드, 타입 단언을 활용한 안전한 타입 변환/좁히기 실전</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>as로 타입 단언</li><li>typeof, instanceof, 커스텀 타입가드</li></ul>}
    code={`function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
function isUser(obj: any): obj is { id: string } {
  return obj && typeof obj.id === 'string';
}
const user = {} as { id: string };`}
    desc={`타입 단언(as), 타입 가드, 타입 좁히기를 적절히 활용하면 런타임 오류를 줄이고, 안전한 코드를 작성할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as</b> 남용은 지양, 타입가드로 안전하게!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>19. 타입 추론/자동 완성 실전</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>타입 추론, 자동 완성, IDE 지원을 활용한 생산성 향상</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>타입 추론으로 변수/함수 타입 생략</li><li>IDE 자동 완성, 타입 힌트 활용</li></ul>}
    code={`let x = 10; // number로 추론
const user = { id: '1', name: '홍길동' }; // { id: string; name: string }
function add(a: number, b: number) { return a + b; } // 반환값도 자동 추론
// IDE에서 .(dot) 입력 시 자동 완성 지원`}
    desc={`타입 추론과 자동 완성 기능을 적극 활용하면, 코드 작성 속도와 정확도가 크게 향상됩니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: 타입을 명시하지 않아도 추론이 잘 되는 경우는 생략!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>20. 타입스크립트와 환경 변수/런타임 값</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>process.env, import.meta.env 등 환경 변수와 런타임 값의 타입 안전 활용</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>환경 변수 타입 선언</li><li>런타임 값 타입 안전하게 사용</li></ul>}
    code={`// vite 환경 변수 타입 선언
interface ImportMetaEnv {
  VITE_API_URL: string;
}
const apiUrl: string = import.meta.env.VITE_API_URL;

// process.env 타입 선언 (Node.js)
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      API_KEY: string;
    }
  }
}`}
    desc={`환경 변수도 타입 선언을 추가하면, 오타/누락/런타임 오류를 예방할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>env.d.ts</b>로 환경 변수 타입을 명확히!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>21. 타입스크립트와 비동기/Promise/async-await</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>Promise, async 함수, 에러 핸들링의 타입 안전 실전</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>Promise 반환 타입</li><li>async 함수, try-catch 에러 타입</li></ul>}
    code={`async function fetchUser(id: string): Promise<User> {
  const res = await fetch('/api/user/' + id);
  if (!res.ok) throw new Error('API Error');
  return res.json() as Promise<User>;
}
try {
  const user = await fetchUser('1');
} catch (e: unknown) {
  if (e instanceof Error) console.error(e.message);
}`}
    desc={`비동기 함수, 에러 핸들링에도 타입을 명확히 지정하면, 예기치 못한 오류를 줄일 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>unknown</b>으로 에러 타입 안전하게!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>22. 타입스크립트와 DOM/브라우저 API</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>querySelector, Event 등 브라우저 API를 타입 안전하게 사용하는 실전</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>HTMLElement, Event 타입 선언</li><li>querySelector, addEventListener 타입 안전</li></ul>}
    code={`const el = document.querySelector('#myBtn') as HTMLButtonElement;
el.addEventListener('click', (e: MouseEvent) => {
  console.log(e.currentTarget); // 타입 안전
});`}
    desc={`브라우저 API도 타입을 명확히 선언하면, 런타임 오류를 줄이고 안전한 코드를 작성할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as HTMLButtonElement</b> 등으로 DOM 타입을 명확히!</span>
  </div>
</div>
{/* 23. Partial, Pick, Omit 등 유틸리티 타입 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>23. Partial, Pick, Omit 등 유틸리티 타입</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    타입스크립트 내장 유틸리티 타입(Partial, Pick, Omit, Readonly, Record 등)의 실전 활용법을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>Partial: 모든 속성을 optional로</li>
      <li>Pick: 특정 속성만 선택</li>
      <li>Omit: 특정 속성 제외</li>
    </ul>}
    code={`type User = { id: string; name: string; age: number };\ntype PartialUser = Partial<User>; // { id?: string; name?: string; age?: number }\ntype NameOnly = Pick<User, 'name'>; // { name: string }\ntype UserWithoutAge = Omit<User, 'age'>; // { id: string; name: string }`}
    desc={`유틸리티 타입을 활용하면 반복되는 타입 선언을 줄이고, 실전에서 타입 설계가 훨씬 쉬워집니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Omit</b>, <b>Partial</b>, <b>Pick</b> 등은 실전에서 매우 자주 사용!</span>
  </div>
</div>
{/* 24. ReturnType, Parameters 등 함수 유틸리티 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>24. ReturnType, Parameters 등 함수 유틸리티</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    함수의 반환값, 파라미터 타입을 추출하는 ReturnType, Parameters, ConstructorParameters 등 함수 유틸리티 타입을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>ReturnType: 함수 반환 타입 추출</li>
      <li>Parameters: 함수 파라미터 타입 추출</li>
    </ul>}
    code={`function getUser(id: string) { return { id, name: '홍길동' }; }\ntype UserReturn = ReturnType<typeof getUser>; // { id: string; name: string }\ntype UserParams = Parameters<typeof getUser>; // [id: string]`}
    desc={`함수 유틸리티 타입을 활용하면, 함수 시그니처를 재사용하거나, 동적으로 타입을 추출할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>ReturnType</b>, <b>Parameters</b>로 함수 타입을 동적으로 추출!</span>
  </div>
</div>
{/* 25. NonNullable, Exclude, Extract */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>25. NonNullable, Exclude, Extract</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    유니언 타입에서 null/undefined를 제거(NonNullable), 특정 타입만 제외(Exclude), 특정 타입만 추출(Extract)하는 고급 유틸리티 타입을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>NonNullable: null/undefined 제거</li>
      <li>Exclude: 특정 타입 제외</li>
      <li>Extract: 특정 타입만 추출</li>
    </ul>}
    code={`type T = string | number | null | undefined;\ntype NotNull = NonNullable<T>; // string | number\ntype OnlyString = Extract<T, string>; // string\ntype NotString = Exclude<T, string>; // number | null | undefined`}
    desc={`NonNullable, Exclude, Extract를 활용하면 유니언 타입을 세밀하게 제어할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Exclude</b>, <b>Extract</b>로 유니언 타입을 세밀하게 제어!</span>
  </div>
</div>
{/* 26. Readonly, Required, Record */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>26. Readonly, Required, Record</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    객체의 모든 속성을 읽기전용(Readonly), 필수(Required)로 만들거나, Record로 객체 매핑 타입을 만드는 실전 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>Readonly: 모든 속성 읽기전용</li>
      <li>Required: 모든 속성 필수</li>
      <li>Record: 객체 매핑 타입</li>
    </ul>}
    code={`type User = { id: string; name?: string };\ntype ReadonlyUser = Readonly<User>; // 모든 속성 readonly\ntype RequiredUser = Required<User>; // 모든 속성 필수\ntype Score = Record<'kor' | 'eng', number>; // { kor: number; eng: number }`}
    desc={`Readonly, Required, Record를 활용하면 객체 타입을 유연하게 변형할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Record</b>로 객체 매핑 타입을 쉽게 생성!</span>
  </div>
</div>
{/* 27. 타입 가드 실전(커스텀 is 함수) */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>27. 타입 가드 실전(커스텀 is 함수)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    커스텀 타입 가드(is 함수)를 직접 만들어 런타임에서 타입을 안전하게 판별하는 실전 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>is 키워드로 커스텀 타입가드</li>
      <li>런타임 타입 체크</li>
    </ul>}
    code={`function isUser(obj: any): obj is { id: string } {\n  return obj && typeof obj.id === 'string';\n}\n\nconst data: unknown = { id: 'abc' };\nif (isUser(data)) {\n  // data는 { id: string } 타입으로 안전하게 사용 가능\n  console.log(data.id);\n}`}
    desc={`커스텀 타입 가드를 활용하면, 런타임 타입 체크와 타입스크립트 타입 추론을 동시에 만족시킬 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>is</b> 키워드로 커스텀 타입가드를 만들어 활용!</span>
  </div>
</div>
{/* 28. Discriminated Union(태그드 유니언) */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>28. Discriminated Union(태그드 유니언)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    공통된 태그 필드를 가진 유니언 타입(Discriminated Union)으로 복잡한 상태/이벤트/응답 타입을 안전하게 설계하는 방법을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>kind/tag 필드로 분기</li>
      <li>switch-case로 안전하게 처리</li>
    </ul>}
    code={`type Shape =\n  | { kind: 'circle'; radius: number }\n  | { kind: 'square'; size: number };\n\nfunction getArea(shape: Shape) {\n  switch (shape.kind) {\n    case 'circle': return Math.PI * shape.radius ** 2;\n    case 'square': return shape.size ** 2;\n  }\n}`}
    desc={`Discriminated Union 패턴은 상태머신, 폼 검증, API 응답 등에서 매우 유용합니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>kind</b> 필드로 안전하게 분기!</span>
  </div>
</div>
{/* 29. as const와 리터럴 타입 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>29. as const와 리터럴 타입</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    as const로 객체/배열을 리터럴 타입으로 고정하고, keyof/typeof와 조합해 자동완성/타입 안전성을 높이는 실전 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>as const로 리터럴 타입 고정</li>
      <li>keyof/typeof와 조합</li>
    </ul>}
    code={`const COLORS = ['red', 'blue', 'green'] as const;\ntype Color = typeof COLORS[number]; // 'red' | 'blue' | 'green'\n\nconst STATUS = { ready: 0, loading: 1 } as const;\ntype StatusKey = keyof typeof STATUS; // 'ready' | 'loading'`}
    desc={`as const와 keyof/typeof를 조합하면 자동완성과 타입 안전성을 모두 잡을 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as const</b> + <b>typeof</b> + <b>keyof</b> 조합!</span>
  </div>
</div>
{/* 30. 타입 별칭 vs 인터페이스 실전 비교 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>30. 타입 별칭 vs 인터페이스 실전 비교</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    type과 interface의 차이, 확장/합성/유니언/인터섹션 등 실전에서 언제 어떤 것을 써야 하는지 비교합니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>interface: 확장, 구조화에 강점</li>
      <li>type: 유니언/인터섹션, 복합 타입에 강점</li>
    </ul>}
    code={`interface User { id: string; name: string }\ninterface Admin extends User { role: string }\n\ntype Status = 'ready' | 'loading';\ntype UserOrAdmin = User | Admin;`}
    desc={`interface는 확장/구조화, type은 유니언/인터섹션 등 복합 타입에 강점이 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>interface</b>는 확장, <b>type</b>은 복합 타입에!</span>
  </div>
</div>
      </div>
    ),
  },
  
typescriptadvanced: {
  id: 'typescriptadvanced',
  title: 'TypeScript 실전/심화',
  description: '대규모 프로젝트, API, 상태관리, 폼, 트러블슈팅 등 실전에서 바로 쓰는 타입스크립트 심화 가이드',
  category: 'basics',
  icon: '🧑‍💻',
  prev: 'typescript',
  next: 'bundlers',
  content: (
    <div style={{ padding: '2.5em 0', background: '#23272f', borderRadius: 20, color: '#eaeaea', boxShadow: '0 6px 32px #0003', maxWidth: 950, margin: '0 auto', fontFamily: 'Pretendard, Noto Sans KR, sans-serif' }}>
      <div style={{ fontSize: 38, fontWeight: 900, marginBottom: 32, color: '#8fd', letterSpacing: '-1px', textShadow: '0 2px 12px #0006' }}>TypeScript 실전/심화 가이드</div>

      {/* 1. 타입 안전한 API 통신 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>1. 타입 안전한 API 통신</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>fetch/axios 등에서 타입을 안전하게 사용하는 실전 패턴과 런타임 타입 검증</Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>API 응답 타입 선언</li><li>Zod/Yup 등으로 런타임 검증</li></ul>}
          code={`import axios from 'axios';\nimport { z } from 'zod';\nconst UserSchema = z.object({ id: z.string(), name: z.string() });\nasync function fetchUser(id: string) {\n  const res = await axios.get('/api/user/' + id);\n  return UserSchema.parse(res.data); // 런타임 검증\n}`}
          desc={`API 응답을 타입만 믿지 말고, 런타임 검증(zod 등)으로 안전성을 높이세요.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>zod</b> 등으로 런타임 검증을 반드시 추가!</span>
        </div>
      </div>

      {/* 2. 대규모 프로젝트 타입 설계 전략 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>2. 대규모 프로젝트 타입 설계 전략</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>공통 타입 분리, 모듈화, tsconfig paths, 프로젝트 레퍼런스 등 실전 설계 전략</Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>공통 타입 패키지 분리</li><li>tsconfig paths, 프로젝트 레퍼런스</li></ul>}
          code={`// packages/common-types/user.ts\nexport interface User { id: string; name: string; }\n// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": { "@types/*": ["../common-types/*"] }\n  },\n  "references": [ { "path": "../common-types" } ]\n}`}
          desc={`공통 타입을 별도 패키지로 분리하고, path alias로 관리하면 협업/유지보수성이 크게 향상됩니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>공통 타입</b>은 별도 패키지로 분리, <b>tsconfig paths</b>로 import 경로를 짧게!</span>
        </div>
      </div>

      {/* 3. 타입스크립트와 상태관리 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>3. 타입스크립트와 상태관리</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>Redux, Zustand, Jotai 등 상태관리 라이브러리와 타입스크립트 실전 활용</Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>Redux Toolkit, Zustand, Jotai 등에서 타입 선언</li><li>상태 셀렉터, 액션, 미들웨어 타입화</li></ul>}
          code={`// Redux Toolkit 예시\nimport { createSlice, PayloadAction } from '@reduxjs/toolkit';\ninterface CounterState { value: number }\nconst initialState: CounterState = { value: 0 };\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    increment(state) { state.value += 1; },\n    add(state, action: PayloadAction<number>) { state.value += action.payload; }\n  }\n});`}
          desc={`상태관리 라이브러리의 모든 상태/액션/미들웨어에 타입을 명확히 지정하세요.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Redux Toolkit</b>은 타입 추론이 매우 강력!</span>
        </div>
      </div>

      {/* 4. 타입스크립트와 폼/유효성검사 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>4. 타입스크립트와 폼/유효성검사</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>React Hook Form, Zod, Yup 등과 결합한 타입 안전 폼 구현</Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>폼 입력값 타입 선언</li><li>zod/yup으로 폼 유효성검사</li></ul>}
          code={`import { useForm } from 'react-hook-form';\nimport { zodResolver } from '@hookform/resolvers/zod';\nimport { z } from 'zod';\nconst schema = z.object({ email: z.string().email(), age: z.number().min(0) });\nfunction MyForm() {\n  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });\n  return <form onSubmit={handleSubmit(data => console.log(data))}>...</form>;\n}`}
          desc={`폼 입력값과 유효성검사 모두 타입으로 안전하게 관리하세요.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>zodResolver</b>로 타입과 유효성검사를 한 번에!</span>
        </div>
      </div>

      {/* 5. 타입스크립트 트러블슈팅/디버깅 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>5. 타입스크립트 트러블슈팅/디버깅</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>실무에서 자주 만나는 타입 에러, 추론 문제, 디버깅 노하우</Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>as const, satisfies, 타입 단언</li><li>타입 추론 확인, 에러 메시지 해석</li></ul>}
          code={`// 타입 추론 확인\nfunction printId(id: number | string) {\n  if (typeof id === 'string') {\n    console.log(id.toUpperCase());\n  } else {\n    console.log(id.toFixed(2));\n  }\n}\n// satisfies 활용\nconst user = { id: '1', name: '홍길동' } satisfies { id: string; name: string };`}
          desc={`타입 추론이 원하는 대로 동작하지 않을 때는 as const, satisfies, 타입 단언 등을 적극 활용하세요.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>타입 추론</b>이 꼬이면, 중간 변수/타입 단언으로 명확히!</span>
        </div>
      </div>

      {/* 6. 최신 TS 트렌드/미래 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>6. 최신 TS 트렌드/미래</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>TypeScript 5.x의 주요 신기능, satisfies, const type parameter 등 최신 트렌드</Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>satisfies, const type parameter, vercel/ts-pattern 등</li><li>타입 인퍼런스, 타입 안전성 강화</li></ul>}
          code={`// satisfies 연산자 (TS 4.9+)\nconst user = { id: '1', name: '홍길동' } satisfies { id: string; name: string };\n// const type parameter (TS 5.0+)\nfunction fill<T, const N extends number>(arr: T, n: N): T[] { return Array(n).fill(arr); }\n// ts-pattern 활용 예시\nimport { match } from 'ts-pattern';\nconst result = match({ type: 'A', value: 1 })\n  .with({ type: 'A' }, x => x.value)\n  .otherwise(() => 0);`}
          desc={`최신 TS 기능을 적극 도입하면, 타입 안전성과 생산성을 동시에 높일 수 있습니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>satisfies</b>, <b>const type parameter</b> 등 최신 문법을 적극 활용하세요.</span>
        </div>
      </div>

      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>7. 타입스크립트 마이그레이션 전략 (JS → TS)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>기존 자바스크립트 프로젝트를 타입스크립트로 점진적으로 마이그레이션하는 실전 전략</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>js → ts/tsx 파일 확장자 변경</li><li>// @ts-nocheck, any 최소화, 점진적 타입 추가</li><li>strict 옵션 점진적 적용</li></ul>}
    code={`// 점진적 마이그레이션 예시
// 1. 파일 확장자 변경: .js → .ts/.tsx
// 2. any 최소화, 타입 점진적 추가
// 3. tsconfig strict 옵션 점진적 적용
// 4. @ts-nocheck 임시 사용 후 제거
// 5. 타입 선언 파일(d.ts)로 외부 JS 모듈 지원`}
    desc={`대규모 프로젝트는 한 번에 마이그레이션하지 말고, 점진적으로 타입을 추가하며 안정적으로 전환하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>strict</b> 옵션은 마지막에 적용, <b>any</b>는 반드시 TODO 주석과 함께 관리!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>8. 타입스크립트와 서버사이드(SSR/Next.js/Express 등)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>Next.js, Express, Node.js 등 서버사이드에서 타입스크립트 활용 실전</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>Next.js API Route, getServerSideProps, getStaticProps 타입</li><li>Express 미들웨어, Request/Response 타입</li></ul>}
    code={`// Next.js API Route 예시
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' });
}
// Express 예시
import express, { Request, Response } from 'express';
const app = express();
app.get('/user', (req: Request, res: Response) => {
  res.json({ id: req.query.id });
});`}
    desc={`SSR, API Route, 서버 미들웨어 등에서 타입을 명확히 지정하면 런타임 오류를 크게 줄일 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>공통 API 타입</b>을 프론트/백엔드에서 공유하면 DX와 안정성이 크게 향상됩니다.</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>9. 외부 라이브러리/서드파티 타입 선언 및 호환성</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>DefinitelyTyped, d.ts 작성, 타입 호환성 문제 해결 실전</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>@types/ 패키지 활용</li><li>커스텀 d.ts 작성, 타입 호환성 트러블슈팅</li></ul>}
    code={`// 외부 라이브러리 타입 선언
// 1. @types/ 패키지 설치: npm i -D @types/lodash
// 2. 커스텀 d.ts 작성: declare module 'my-legacy-lib';
// 3. 타입 호환성 문제 해결: 타입 단언, 타입 변환 등`}
    desc={`외부 라이브러리 타입이 없거나 호환이 안 될 때는 직접 d.ts를 작성하거나, 타입 단언으로 임시 우회하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>DefinitelyTyped</b>에 없는 라이브러리는 직접 d.ts 작성!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>10. 고급 타입 패턴(맵드타입, 조건부타입, 템플릿 리터럴타입, Discriminated Union 등)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>실전에서 자주 쓰는 고급 타입 패턴과 활용법</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>맵드타입, 조건부타입, keyof, as const, Discriminated Union</li><li>상태머신, 런타임 검증 등 실전 활용</li></ul>}
    code={`type Optional<T> = { [P in keyof T]?: T[P] };
type IsString<T> = T extends string ? true : false;
type User = { id: number; name: string };
type UserKey = keyof User; // \"id\" | \"name\"
type UserId = User[\"id\"]; // number
type Shape =
  | { kind: \"circle\"; radius: number }
  | { kind: \"square\"; size: number };
function getArea(shape: Shape): number {
  switch (shape.kind) {
    case \"circle\": return Math.PI * shape.radius ** 2;
    case \"square\": return shape.size ** 2;
  }
}`}
    desc={`대규모 타입 설계, 상태머신, 런타임 검증 등에서 고급 타입 패턴을 적극 활용하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Discriminated Union</b> + <b>as const</b> 패턴은 복잡한 상태 관리에 매우 강력!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>11. 테스트 코드에서의 타입 활용 (Jest/RTL, Mock 타입화)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>테스트 코드에서 타입을 적극 활용하여 버그를 사전에 방지하고, 타입 안전성을 높이는 실전 전략</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>Jest, React Testing Library에서 타입 추론 활용</li><li>Mock 데이터, API 응답 타입화</li></ul>}
    code={`// Jest 테스트에서 타입 활용 예시
import { sum } from './sum';
test('sum', () => {
  const a: number = 1;
  const b: number = 2;
  const result = sum(a, b);
  expect(result).toBe(3);
});
// Mock API 타입화
interface User { id: string; name: string; }
const mockUser: User = { id: '1', name: '홍길동' };`}
    desc={`테스트 코드에도 타입을 명확히 지정하면, 리팩토링/협업 시 타입 오류를 빠르게 발견할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>테스트용 Mock 데이터</b>도 타입 선언과 함께 관리하면 유지보수성이 크게 향상됩니다.</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>12. 실전 GraphQL & 타입 자동화</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>GraphQL Codegen 등으로 API 타입을 자동 생성하고, 프론트/백엔드 타입을 동기화하는 실전 전략</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>GraphQL Codegen으로 쿼리/응답 타입 자동화</li><li>API 타입 변경 시 자동 반영</li></ul>}
    code={`# codegen.yml 예시\nschema: http://localhost:4000/graphql\ndocuments: src/**/*.graphql\ngenerates:\n  src/generated/graphql.tsx:\n    plugins:\n      - typescript\n      - typescript-operations\n      - typescript-react-apollo\n\n// 사용 예시\nimport { useGetUserQuery } from './generated/graphql';\nconst { data } = useGetUserQuery({ variables: { id: '1' } });`}
    desc={`GraphQL Codegen을 활용하면 API 타입 변경이 프론트/백엔드에 자동 반영되어 타입 불일치 버그를 크게 줄일 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>GraphQL Codegen</b>으로 쿼리/응답 타입을 자동화하세요.</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>13. 타입스크립트와 빌드/배포(최적화, tsc, tsup, swc 등)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>tsc, tsup, swc 등 빌드 도구와 타입스크립트의 실전 활용 및 배포 최적화</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>tsc --noEmit, tsup, swc, vite 등 빌드 도구</li><li>declaration 파일(d.ts) 생성, 빌드 최적화</li></ul>}
    code={`// tsc 빌드 예시\n{\n  "compilerOptions": {\n    "declaration": true,\n    "outDir": "dist",\n    "module": "ESNext"\n  }\n}\n// tsup 사용 예시\n// npx tsup src/index.ts --dts\n// swc 사용 예시\n// npx swc src -d dist --copy-files`}
    desc={`빌드 도구를 적절히 활용하면 타입 선언 파일(d.ts) 자동 생성, 빌드 속도/최적화, 배포 효율이 크게 향상됩니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>tsc --noEmit</b>으로 타입만 검사, <b>tsup/swc</b>로 빠른 빌드/배포 파이프라인 구축!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>14. 실전 트러블슈팅 사례 모음</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>현업에서 자주 만나는 타입 꼬임, any 남용, 타입 추론 실패 등 실제 사례와 해결법</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>any 남용 → 타입 단언/정의로 해결</li><li>타입 추론 실패 → 중간 변수/명시적 타입 지정</li></ul>}
    code={`// any 남용 사례\nfunction getData(): any { return fetch('/api').then(r => r.json()); }\n// 해결: 명확한 타입 선언\ninterface User { id: string; name: string; }\nfunction getUser(): Promise<User> { ... }\n\n// 타입 추론 실패 사례\nconst arr = []; arr.push(1); arr.push('a'); // (number | string)[]\n// 해결: const arr: number[] = [];`}
    desc={`any 남용, 타입 추론 실패 등은 실무에서 매우 흔합니다. 명확한 타입 선언과 타입 단언, 중간 변수 활용 등으로 해결하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>any</b>는 반드시 TODO와 함께, 타입 추론 꼬이면 중간 변수로 분리!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>15. 타입스크립트와 모노레포/패키지 관리</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>pnpm, turborepo, 프로젝트 레퍼런스 등으로 대규모 모노레포에서 타입을 안전하게 관리하는 실전 전략</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>pnpm workspace, turborepo, tsconfig projectReferences</li><li>공통 타입 패키지 분리, cross-package 타입 공유</li></ul>}
    code={`// pnpm-workspace.yaml\npackages:\n  - 'packages/*'\n// tsconfig.json (projectReferences)\n{\n  "references": [ { "path": "../common-types" } ]\n}`}
    desc={`모노레포에서는 공통 타입 패키지 분리, 프로젝트 레퍼런스, workspace 관리로 타입 일관성과 빌드 효율을 높이세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>pnpm</b> + <b>projectReferences</b> 조합이 대규모에 강력!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>16. 타입스크립트와 프론트엔드 프레임워크 실전 차이점</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>React, Vue, Svelte 등 주요 프론트엔드 프레임워크에서 타입스크립트 적용 실전 차이점</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>React: JSX, Props/State 타입, 제네릭 컴포넌트</li><li>Vue: SFC, defineProps, Volar</li><li>Svelte: d.ts, 타입 추론</li></ul>}
    code={`// React 컴포넌트 타입\ninterface Props { name: string }\nfunction Hello({ name }: Props) { return <div>Hello, {name}</div>; }\n// Vue SFC\n<script lang="ts">\ndefineProps<{ name: string }>()\n<\/script>\n// Svelte\n<script lang="ts">\nexport let name: string;\n<\/script>`}
    desc={`프레임워크별 타입 선언 방식, 도구, 추론 방식이 다르므로 공식 가이드와 실전 사례를 참고하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Volar</b>(Vue), <b>Svelte d.ts</b> 등 프레임워크별 타입 도구를 적극 활용!</span>
  </div>
</div>
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>17. 타입스크립트와 국제화(i18n) 실전 적용</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>타입 안전 다국어(i18n) 구현, 번역 키 자동완성, 실전 적용 사례</Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>i18next, react-i18next, 번역 키 타입 자동화</li><li>타입 안전 번역 함수</li></ul>}
    code={`// 번역 키 타입 자동화\ntype TranslationKeys = 'home.title' | 'home.desc' | 'user.name';\nfunction t(key: TranslationKeys): string { ... }\n// i18next 사용 예시\nimport { useTranslation } from 'react-i18next';\nconst { t } = useTranslation();\nt('home.title');`}
    desc={`번역 키를 타입으로 관리하면 오타/누락을 방지하고, 대규모 다국어 프로젝트에서 생산성을 높일 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: 번역 키를 <b>타입</b>으로 관리하면 오타/누락 방지!</span>
  </div>
</div>

    </div>
  ),
},
typescriptdeep: {
  id: 'typescriptdeep',
  title: 'TypeScript 타입 시스템 심화',
  description: '타입스크립트의 타입 시스템을 깊이 있게 다루는 고급 심화 강의',
  category: 'basics',
  icon: '🧠',
  prev: 'typescriptadvanced',
  next: 'bundlers',
  content: (
    <div style={{ padding: '2.5em 0', background: '#23272f', borderRadius: 20, color: '#eaeaea', boxShadow: '0 6px 32px #0003', maxWidth: 950, margin: '0 auto', fontFamily: 'Pretendard, Noto Sans KR, sans-serif' }}>
      <div style={{ fontSize: 38, fontWeight: 900, marginBottom: 32, color: '#8fd', letterSpacing: '-1px', textShadow: '0 2px 12px #0006' }}>TypeScript 타입 시스템 심화</div>
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>1. 타입 레벨 프로그래밍</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>타입스크립트의 타입 연산, 조건부 타입, infer, 재귀적 타입 등 고급 패턴</Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}><li>Mapped Types, Conditional Types, infer, Template Literal Types</li></ul>}
          code={`type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };\ntype IsString<T> = T extends string ? true : false;\ntype Unpacked<T> = T extends (infer U)[] ? U : T;`}
          desc={`타입스크립트의 타입 시스템은 매우 강력하며, 복잡한 타입 연산도 가능하다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>타입 레벨 유틸리티</b>를 직접 만들어보면 타입 시스템 이해가 깊어진다!</span>
        </div>
      </div>
      {/* 추가 고급 카드들은 추후 확장 가능 */}
      {/* 2. 타입 시스템의 한계와 우회법 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>2. 타입 시스템의 한계와 우회법</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          타입스크립트의 타입 시스템은 강력하지만, 재귀 깊이 제한, 분산 조건부 타입의 예기치 않은 동작 등 한계가 존재합니다. 실전에서 만나는 한계와 우회 패턴을 익혀봅니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>분산 조건부 타입 방지</li>
            <li>재귀 깊이 제한 우회</li>
          </ul>}
          code={`// 분산 조건부 타입 방지\ntype NoDistribute<T> = [T] extends [string | number] ? true : false;\ntype Test = NoDistribute<string | number>; // true\n\n// 재귀 깊이 제한 우회\ntype DeepArray<T, N extends number, A extends any[] = []> =\n  A['length'] extends N ? T : DeepArray<T[], N, [any, ...A]>;`}
          desc={`타입 시스템의 한계를 이해하고, 실전에서 우회하는 패턴을 익히면 복잡한 타입 설계에 큰 도움이 됩니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>분산 조건부 타입</b>은 [T] extends [U] 패턴으로 방지!</span>
        </div>
      </div>

      {/* 3. 런타임 타입 검증과 타입스크립트 연계 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>3. 런타임 타입 검증과 타입스크립트 연계</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          zod, yup, io-ts 등 런타임 타입 검증 라이브러리와 타입스크립트의 타입 추론을 연계하여, 런타임과 컴파일타임 타입 안전성을 모두 확보하는 실전 패턴을 익힙니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>zod, yup, io-ts 등과 타입 추론 연계</li>
            <li>런타임 검증 + 타입 안전</li>
          </ul>}
          code={`import { z } from "zod";\nconst UserSchema = z.object({ id: z.string(), age: z.number() });\ntype User = z.infer<typeof UserSchema>;\n// User: { id: string; age: number }`}
          desc={`런타임 검증과 타입 추론을 연계하면, API 응답/폼 등에서 타입 안전성을 극대화할 수 있습니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>z.infer</b>로 런타임 스키마와 타입을 동기화!</span>
        </div>
      </div>


      {/* 4. 템플릿 리터럴 타입 & 패턴 매칭 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>4. 템플릿 리터럴 타입 & 패턴 매칭</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          템플릿 리터럴 타입을 활용해 문자열 조작, 라우트/이벤트명/상태머신 등에서 타입 안전성을 높이고, infer와 조합해 패턴 매칭을 구현할 수 있습니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>이벤트명, 라우트, 상태머신 등에서 활용</li>
            <li>infer와 조합한 패턴 매칭</li>
          </ul>}
          code={`type EventName = \`user:\${'login'|'logout'}\`;\n// 'user:login' | 'user:logout'\n\ntype ExtractId<T> = T extends \`user:\${infer Id}\` ? Id : never;\ntype Id = ExtractId<'user:123'>; // '123'`}
          desc={`템플릿 리터럴 타입과 infer를 조합하면 문자열 패턴을 타입 수준에서 안전하게 처리할 수 있습니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as const</b>와 조합하면 라우트/이벤트명 자동완성에 유용!</span>
        </div>
      </div>

      {/* 5. 타입 매핑/필터링/고급 유틸리티 직접 구현 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>5. 타입 매핑/필터링/고급 유틸리티 직접 구현</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          PickByValue, Extract, Exclude 등 내장 유틸리티를 직접 구현하거나, 특정 프로퍼티만 추출/변환하는 고급 타입 매핑 패턴을 익힙니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>PickByValue, FilterKeys 등 직접 구현</li>
            <li>조건부로 프로퍼티 optional/readonly 변환</li>
          </ul>}
          code={`type PickByValue<T, V> = {\n  [K in keyof T as T[K] extends V ? K : never]: T[K]\n};\ntype OnlyString = PickByValue<{ a: string; b: number }, string>; // { a: string }\n\ntype Mutable<T> = { -readonly [K in keyof T]: T[K] };\ntype Optional<T> = { [K in keyof T]?: T[K] };`}
          desc={`실전에서는 내장 유틸리티 타입을 커스터마이즈하거나, 직접 구현해야 할 때가 많습니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as</b> 키워드로 key 변환, 조건부 key 필터링 가능!</span>
        </div>
      </div>


      {/* 6. Variadic Tuple Types & 재귀적 제네릭 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>6. Variadic Tuple Types & 재귀적 제네릭</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          Variadic Tuple Types(가변 길이 튜플), 재귀적 제네릭, 분산 조건부 타입의 실전 활용법을 익힙니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>가변 길이 튜플 타입</li>
            <li>재귀적 제네릭</li>
          </ul>}
          code={`type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;\ntype Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;\n\ntype Flatten<T> = T extends [infer H, ...infer R]\n  ? H extends any[]\n    ? [...Flatten<H>, ...Flatten<R>]\n    : [H, ...Flatten<R>]\n  : [];\ntype Flat = Flatten<[1, [2, 3], [[4]], 5]>; // [1,2,3,4,5]`}
          desc={`재귀적 제네릭과 가변 길이 튜플을 조합하면, 복잡한 배열/튜플 타입도 타입 수준에서 안전하게 처리할 수 있습니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Flatten</b> 등 재귀적 타입은 배열/튜플 변환에 필수!</span>
        </div>
      </div>

      {/* 7. Decorator & 리플렉션 활용 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>7. Decorator & 리플렉션 활용</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          Decorator(데코레이터)와 Reflect-metadata를 활용해 런타임에 타입 정보를 읽거나, 클래스 기반 DI/ORM 등에서 타입스크립트의 메타프로그래밍을 실전 적용하는 방법을 익힙니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>Reflect-metadata로 런타임 타입 정보 읽기</li>
            <li>클래스 기반 DI/ORM에서 Decorator 활용</li>
          </ul>}
          code={`import 'reflect-metadata';\n\nfunction LogType(target: any, key: string) {\n  const type = Reflect.getMetadata('design:type', target, key);\n  console.log(\`\${key} type: \`, type.name);\n}\n\nclass User {\n  @LogType\n  name: string;\n  @LogType\n  age: number;\n}` }
          desc={`Decorator와 Reflect-metadata를 조합하면 런타임에 타입 정보를 활용할 수 있습니다. NestJS, TypeORM 등에서 많이 사용됩니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>reflect-metadata</b>는 tsconfig에 experimentalDecorators, emitDecoratorMetadata 옵션 필요!</span>
        </div>
      </div>
      {/* 8. JSX/React 타입 시스템 심화 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>8. JSX/React 타입 시스템 심화</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          JSX.Element, React.FC, PropsWithChildren, 제네릭 컴포넌트, as const+props 패턴 등 React에서 타입스크립트의 고급 타입 활용법을 익힙니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>PropsWithChildren, 제네릭 컴포넌트</li>
            <li>as const + props 패턴</li>
          </ul>}
          code={`type ButtonProps = React.PropsWithChildren<{ color: string }>;\nfunction Button<T extends string>({ color, children }: ButtonProps & { as?: T }) {\n  return <button style={{ background: color }}>{children}</button>;\n}\n\nconst VARIANTS = ['primary', 'secondary'] as const;\ntype Variant = typeof VARIANTS[number];`}
          desc={`React에서 타입스크립트의 고급 타입을 활용하면, 컴포넌트의 재사용성과 타입 안전성을 극대화할 수 있습니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as const</b>와 <b>PropsWithChildren</b>을 적극 활용!</span>
        </div>
      </div>
      {/* 9. 타입 시스템 한계 & 트러블슈팅 실전 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>9. 타입 시스템 한계 & 트러블슈팅 실전</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          타입 추론 꼬임, 재귀 깊이 초과, 분산 조건부 타입의 예기치 않은 동작 등 실전에서 마주치는 트러블슈팅 사례와 해결법을 익힙니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>타입 추론 꼬임, 재귀 깊이 초과</li>
            <li>분산 조건부 타입 트러블슈팅</li>
          </ul>}
          code={`// 재귀 깊이 초과 우회\n// (타입이 너무 깊어지면 any로 대체)\ntype SafeDeep<T, N extends number = 10> = N extends 0 ? any : T extends object ? { [K in keyof T]: SafeDeep<T[K], Prev[N]> } : T;\ntype Prev = [never, 0,1,2,3,4,5,6,7,8,9,10];`}
          desc={`타입스크립트의 타입 시스템 한계에 부딪혔을 때, 실전에서 우회하거나 디버깅하는 패턴을 익히면 대규모 프로젝트에서 큰 도움이 됩니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as const</b>, <b>satisfies</b>, <b>중간 변수</b>로 타입 추론을 명확히!</span>
        </div>
      </div>
      {/* 10. 타입 안전 API/스키마 설계 */}
      <div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>10. 타입 안전 API/스키마 설계</Typography>
        <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
          OpenAPI, zod, io-ts 등과 연계해 타입 안전한 API 스키마를 설계하고, 런타임 검증과 타입 추론을 동시에 만족시키는 실전 패턴을 익힙니다.
        </Typography>
        <ExampleTab
          example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
            <li>zod, io-ts 등으로 런타임+타입 동기화</li>
            <li>OpenAPI → 타입 자동 생성</li>
          </ul>}
          code={`import { z } from 'zod';\nconst UserSchema = z.object({ id: z.string(), age: z.number() });\ntype User = z.infer<typeof UserSchema>;\n\n// openapi-typescript 등으로 OpenAPI → 타입 자동 생성`}
          desc={`런타임 검증과 타입 추론을 동시에 만족시키면, API/폼/상태관리 등에서 타입 안전성을 극대화할 수 있습니다.`}
        />
        <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>z.infer</b>로 런타임 스키마와 타입을 동기화!</span>
        </div>
      </div>
      {/* 11. 모듈 시스템/ESM/CJS */}
{/* 7. Decorator & 리플렉션 활용 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>7. Decorator & 리플렉션 활용</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    Decorator(데코레이터)와 Reflect-metadata를 활용해 런타임에 타입 정보를 읽거나, 클래스 기반 DI/ORM 등에서 타입스크립트의 메타프로그래밍을 실전 적용하는 방법을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>Reflect-metadata로 런타임 타입 정보 읽기</li>
      <li>클래스 기반 DI/ORM에서 Decorator 활용</li>
    </ul>}
    code={`import 'reflect-metadata';\n\nfunction LogType(target: any, key: string) {\n  const type = Reflect.getMetadata('design:type', target, key);\n  console.log(\`\${key} type: \`, type.name);\n}\n\nclass User {\n  @LogType\n  name: string;\n  @LogType\n  age: number;\n}` }
    desc={`Decorator와 Reflect-metadata를 조합하면 런타임에 타입 정보를 활용할 수 있습니다. NestJS, TypeORM 등에서 많이 사용됩니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>reflect-metadata</b>는 tsconfig에 experimentalDecorators, emitDecoratorMetadata 옵션 필요!</span>
  </div>
</div>
{/* 8. JSX/React 타입 시스템 심화 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>8. JSX/React 타입 시스템 심화</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    JSX.Element, React.FC, PropsWithChildren, 제네릭 컴포넌트, as const+props 패턴 등 React에서 타입스크립트의 고급 타입 활용법을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>PropsWithChildren, 제네릭 컴포넌트</li>
      <li>as const + props 패턴</li>
    </ul>}
    code={`type ButtonProps = React.PropsWithChildren<{ color: string }>;\nfunction Button<T extends string>({ color, children }: ButtonProps & { as?: T }) {\n  return <button style={{ background: color }}>{children}</button>;\n}\n\nconst VARIANTS = ['primary', 'secondary'] as const;\ntype Variant = typeof VARIANTS[number];`}
    desc={`React에서 타입스크립트의 고급 타입을 활용하면, 컴포넌트의 재사용성과 타입 안전성을 극대화할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as const</b>와 <b>PropsWithChildren</b>을 적극 활용!</span>
  </div>
</div>
{/* 9. 타입 시스템 한계 & 트러블슈팅 실전 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>9. 타입 시스템 한계 & 트러블슈팅 실전</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    타입 추론 꼬임, 재귀 깊이 초과, 분산 조건부 타입의 예기치 않은 동작 등 실전에서 마주치는 트러블슈팅 사례와 해결법을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>타입 추론 꼬임, 재귀 깊이 초과</li>
      <li>분산 조건부 타입 트러블슈팅</li>
    </ul>}
    code={`// 재귀 깊이 초과 우회\n// (타입이 너무 깊어지면 any로 대체)\ntype SafeDeep<T, N extends number = 10> = N extends 0 ? any : T extends object ? { [K in keyof T]: SafeDeep<T[K], Prev[N]> } : T;\ntype Prev = [never, 0,1,2,3,4,5,6,7,8,9,10];`}
    desc={`타입스크립트의 타입 시스템 한계에 부딪혔을 때, 실전에서 우회하거나 디버깅하는 패턴을 익히면 대규모 프로젝트에서 큰 도움이 됩니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as const</b>, <b>satisfies</b>, <b>중간 변수</b>로 타입 추론을 명확히!</span>
  </div>
</div>
{/* 10. 타입 안전 API/스키마 설계 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>10. 타입 안전 API/스키마 설계</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    OpenAPI, zod, io-ts 등과 연계해 타입 안전한 API 스키마를 설계하고, 런타임 검증과 타입 추론을 동시에 만족시키는 실전 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>zod, io-ts 등으로 런타임+타입 동기화</li>
      <li>OpenAPI → 타입 자동 생성</li>
    </ul>}
    code={`import { z } from 'zod';\nconst UserSchema = z.object({ id: z.string(), age: z.number() });\ntype User = z.infer<typeof UserSchema>;\n\n// openapi-typescript 등으로 OpenAPI → 타입 자동 생성`}
    desc={`런타임 검증과 타입 추론을 동시에 만족시키면, API/폼/상태관리 등에서 타입 안전성을 극대화할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>z.infer</b>로 런타임 스키마와 타입을 동기화!</span>
  </div>
</div>
{/* 11. 모듈 시스템/ESM/CJS */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>11. 모듈 시스템/ESM/CJS</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    타입스크립트에서 ESM, CommonJS, import/export, require/module.exports 등 다양한 모듈 시스템을 안전하게 사용하는 방법과 tsconfig 설정 팁을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>import/export vs require/module.exports</li>
      <li>tsconfig module 옵션</li>
    </ul>}
    code={`// ESM 방식\nimport foo from './foo';\nexport function bar() {}\n// CommonJS 방식\nconst foo = require('./foo');\nmodule.exports = { bar };\n// tsconfig.json\n{\n  \"compilerOptions\": { \"module\": \"ESNext\" }\n}`}
    desc={`모듈 시스템에 따라 import/export 방식과 tsconfig 설정이 달라지므로, 프로젝트 환경에 맞게 설정하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>ESM</b>과 <b>CommonJS</b> 차이를 명확히 구분!</span>
  </div>
</div>
{/* 12. 대규모 프로젝트/모노레포 전략 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>12. 대규모 프로젝트/모노레포 전략</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    pnpm, turborepo, 프로젝트 레퍼런스 등으로 대규모 모노레포에서 타입을 안전하게 관리하는 실전 전략을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>pnpm workspace, turborepo, tsconfig projectReferences</li>
      <li>공통 타입 패키지 분리, cross-package 타입 공유</li>
    </ul>}
    code={`// pnpm-workspace.yaml\npackages:\n  - 'packages/*'\n// tsconfig.json (projectReferences)\n{\n  \"references\": [ { \"path\": \"../common-types\" } ]\n}`}
    desc={`모노레포에서는 공통 타입 패키지 분리, 프로젝트 레퍼런스, workspace 관리로 타입 일관성과 빌드 효율을 높이세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>pnpm</b> + <b>projectReferences</b> 조합이 대규모에 강력!</span>
  </div>
</div>
{/* 13. 타입스크립트와 테스트(타입 안전 테스트 전략) */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>13. 타입스크립트와 테스트(타입 안전 테스트 전략)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    타입스크립트로 테스트 코드의 타입 안전성을 높이고, Jest, Vitest, React Testing Library 등과의 연계 전략을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>Jest, Vitest, React Testing Library와 타입 연계</li>
      <li>테스트용 타입 가드, Mock 타입</li>
    </ul>}
    code={`// 타입 안전 Mock\ninterface User { id: string; name: string; }\nconst mockUser: User = { id: '1', name: '홍길동' };\n\ntest('User name', () => {\n  expect(mockUser.name).toBe('홍길동');\n});`}
    desc={`테스트 코드도 타입 안전하게 작성하면, 리팩터링/협업 시 오류를 줄이고 생산성을 높일 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Mock 타입</b>도 인터페이스로 관리!</span>
  </div>
</div>
{/* 14. 타입 안전 i18n(다국어) 전략 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>14. 타입 안전 i18n(다국어) 전략</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    번역 키 자동완성, 타입 안전 번역 함수, i18next/react-i18next 등과 연계한 타입 안전 다국어(i18n) 구현 전략을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>번역 키 타입 자동화</li>
      <li>타입 안전 번역 함수</li>
    </ul>}
    code={`type TranslationKeys = 'home.title' | 'home.desc' | 'user.name';\nfunction t(key: TranslationKeys): string { /* ... */ }\n\nt('home.title');`}
    desc={`번역 키를 타입으로 관리하면 오타/누락을 방지하고, 대규모 다국어 프로젝트에서 생산성을 높일 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: 번역 키를 <b>타입</b>으로 관리하면 오타/누락 방지!</span>
  </div>
</div>
{/* 15. 타입스크립트 최신 트렌드/미래 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>15. 타입스크립트 최신 트렌드/미래</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    satisfies, const type parameter, template literal type 개선 등 최신 타입스크립트 트렌드와 앞으로의 발전 방향을 소개합니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>satisfies 연산자</li>
      <li>const type parameter</li>
    </ul>}
    code={`const user = { id: '1', name: '홍길동' } satisfies { id: string; name: string };\n\nfunction foo<const T extends string>(arg: T) { /* ... */ }`}
    desc={`최신 타입스크립트 기능을 익히면, 더 안전하고 강력한 타입 설계가 가능합니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>satisfies</b>와 <b>const type parameter</b>는 앞으로의 타입스크립트 핵심 트렌드!</span>
  </div>
</div>
{/* 16. 타입스크립트와 프론트엔드 프레임워크 실전 차이점 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>16. 타입스크립트와 프론트엔드 프레임워크 실전 차이점</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    React, Vue, Svelte 등 주요 프레임워크에서 타입스크립트 적용 시의 실전 차이점과 공식 가이드, 도구 활용법을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>React: JSX, Props/State 타입, 제네릭 컴포넌트</li>
      <li>Vue: SFC, defineProps, Volar</li>
      <li>Svelte: d.ts, 타입 추론</li>
    </ul>}
    code={`// React 컴포넌트 타입\ninterface Props { name: string }\nfunction Hello({ name }: Props) { return <div>Hello, {name}</div>; }\n// Vue SFC\n<script lang=\"ts\">\ndefineProps<{ name: string }>()\n<\/script>\n// Svelte\n<script lang=\"ts\">\nexport let name: string;\n<\/script>`}
    desc={`프레임워크별 타입 선언 방식, 도구, 추론 방식이 다르므로 공식 가이드와 실전 사례를 참고하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Volar</b>(Vue), <b>Svelte d.ts</b> 등 프레임워크별 타입 도구를 적극 활용!</span>
  </div>
</div>
{/* 17. 타입스크립트 마이그레이션 전략 (JS → TS) */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>17. 타입스크립트 마이그레이션 전략 (JS → TS)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    기존 자바스크립트 프로젝트를 타입스크립트로 점진적으로 마이그레이션하는 실전 전략과 실무 팁을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>js → ts/tsx 파일 확장자 변경</li>
      <li>// @ts-nocheck, any 최소화, 점진적 타입 추가</li>
      <li>strict 옵션 점진적 적용</li>
    </ul>}
    code={`// 점진적 마이그레이션 예시\n// 1. 파일 확장자 변경: .js → .ts/.tsx\n// 2. any 최소화, 타입 점진적 추가\n// 3. tsconfig strict 옵션 점진적 적용\n// 4. @ts-nocheck 임시 사용 후 제거\n// 5. 타입 선언 파일(d.ts)로 외부 JS 모듈 지원`}
    desc={`대규모 프로젝트는 한 번에 마이그레이션하지 말고, 점진적으로 타입을 추가하며 안정적으로 전환하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>strict</b> 옵션은 마지막에 적용, <b>any</b>는 반드시 TODO 주석과 함께 관리!</span>
  </div>
</div>
{/* 18. 외부 라이브러리/서드파티 타입 선언 및 호환성 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>18. 외부 라이브러리/서드파티 타입 선언 및 호환성</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    DefinitelyTyped, d.ts 작성, 타입 호환성 문제 해결 등 외부 라이브러리와의 타입 선언 및 호환성 실전 전략을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>@types/ 패키지 활용</li>
      <li>커스텀 d.ts 작성, 타입 호환성 트러블슈팅</li>
    </ul>}
    code={`// 외부 라이브러리 타입 선언\n// 1. @types/ 패키지 설치: npm i -D @types/lodash\n// 2. 커스텀 d.ts 작성: declare module 'my-legacy-lib';\n// 3. 타입 호환성 문제 해결: 타입 단언, 타입 변환 등`}
    desc={`외부 라이브러리 타입이 없거나 호환이 안 될 때는 직접 d.ts를 작성하거나, 타입 단언으로 임시 우회하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>DefinitelyTyped</b>에 없는 라이브러리는 직접 d.ts 작성!</span>
  </div>
</div>
{/* 19. 타입스크립트와 ESLint/Prettier 연동 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>19. 타입스크립트와 ESLint/Prettier 연동</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    타입스크립트 코드 품질을 높이기 위한 ESLint, Prettier 연동 및 실전 설정 팁을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>eslint-config-prettier, @typescript-eslint</li>
      <li>실전 .eslintrc, .prettierrc 예시</li>
    </ul>}
    code={`// .eslintrc.js\nmodule.exports = {\n  extends: [\n    'plugin:@typescript-eslint/recommended',\n    'prettier'\n  ],\n};\n// .prettierrc\n{\n  \"singleQuote\": true,\n  \"semi\": false\n}`}
    desc={`ESLint와 Prettier를 연동하면 코드 스타일과 품질을 자동으로 관리할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>eslint-config-prettier</b>로 충돌 방지!</span>
  </div>
</div>
{/* 20. 타입스크립트와 대규모 상태관리(리덕스, 리코일 등) */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>20. 타입스크립트와 대규모 상태관리(리덕스, 리코일 등)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    Redux, Recoil, Zustand 등 대규모 상태관리 라이브러리와 타입스크립트의 실전 연동 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>Redux Toolkit, Recoil, Zustand 등에서 타입 선언</li>
      <li>상태 셀렉터, 액션, 미들웨어 타입화</li>
    </ul>}
    code={`// Redux Toolkit 예시\nimport { createSlice, PayloadAction } from '@reduxjs/toolkit';\ninterface CounterState { value: number }\nconst initialState: CounterState = { value: 0 };\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState,\n  reducers: {\n    increment(state) { state.value += 1; },\n    add(state, action: PayloadAction<number>) { state.value += action.payload; }\n  }\n});`}
    desc={`상태관리 라이브러리의 모든 상태/액션/미들웨어에 타입을 명확히 지정하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>Redux Toolkit</b>은 타입 추론이 매우 강력!</span>
  </div>
</div>
{/* 21. 타입스크립트와 폼/유효성검사(React Hook Form, Yup 등) */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>21. 타입스크립트와 폼/유효성검사(React Hook Form, Yup 등)</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    React Hook Form, Yup, Zod 등과 연계한 타입 안전 폼/유효성검사 실전 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>폼 데이터 타입, 유효성검사 스키마 타입 동기화</li>
      <li>zod, yup 등과 타입 추론 연계</li>
    </ul>}
    code={`import { useForm } from 'react-hook-form';\nimport { z } from 'zod';\nconst schema = z.object({ name: z.string(), age: z.number() });\ntype FormData = z.infer<typeof schema>;\nconst { register, handleSubmit } = useForm<FormData>();`}
    desc={`폼 데이터와 유효성검사 스키마의 타입을 동기화하면, 폼 검증과 타입 안전성을 동시에 확보할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>z.infer</b>로 폼 타입과 스키마를 동기화!</span>
  </div>
</div>
{/* 22. 타입스크립트와 DOM/브라우저 API */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>22. 타입스크립트와 DOM/브라우저 API</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    querySelector, Event 등 브라우저 API를 타입 안전하게 사용하는 실전 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>HTMLElement, Event 타입 선언</li>
      <li>querySelector, addEventListener 타입 안전</li>
    </ul>}
    code={`const el = document.querySelector('#myBtn') as HTMLButtonElement;\nel.addEventListener('click', (e: MouseEvent) => {\n  console.log(e.currentTarget); // 타입 안전\n});`}
    desc={`브라우저 API도 타입을 명확히 선언하면, 런타임 오류를 줄이고 안전한 코드를 작성할 수 있습니다.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>as HTMLButtonElement</b> 등으로 DOM 타입을 명확히!</span>
  </div>
</div>
{/* 23. 타입스크립트와 타입 가드/런타임 검증 */}
<div style={{ background: '#23272f', color: '#eaeaea', border: '1px solid #333', boxShadow: '0 2px 12px #0002', borderRadius: 12, marginBottom: 40, padding: '2em' }}>
  <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 800, fontSize: 26, color: '#fff' }}>23. 타입스크립트와 타입 가드/런타임 검증</Typography>
  <Typography sx={{ mb: 2, color: '#8fd', fontSize: 17, fontWeight: 500 }}>
    커스텀 타입 가드, typeof, instanceof, 런타임 타입 검증 패턴을 익힙니다.
  </Typography>
  <ExampleTab
    example={<ul style={{ fontSize: 17, marginBottom: 0 }}>
      <li>is 키워드로 커스텀 타입가드</li>
      <li>typeof, instanceof 활용</li>
    </ul>}
    code={`function isString(x: unknown): x is string {\n  return typeof x === 'string';\n}\nfunction printId(id: number | string) {\n  if (typeof id === 'string') {\n    console.log(id.toUpperCase());\n  } else {\n    console.log(id.toFixed(2));\n  }\n}`}
    desc={`런타임 타입 체크, 폼 검증, API 응답 파싱 등에서 타입 가드를 적극 활용하세요.`}
  />
  <div style={{ background: '#2d3748', color: '#ffe066', borderRadius: 8, padding: '0.8em 1.2em', marginTop: 18, fontWeight: 600, fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontSize: 20 }}>💡</span> <span>실무 Tip: <b>is</b> 키워드로 커스텀 타입가드를 만들어 활용!</span>
  </div>
</div>
    </div>
  ),
},
// ...
  components: {
    id: 'components',
    title: 'Components',
    description: 'React 컴포넌트는 UI를 구성하는 가장 작은 단위로, 재사용성과 유지보수성을 높여줍니다. 함수형 컴포넌트가 표준이며, props(속성)와 state(상태)를 통해 동적으로 동작합니다. 이 섹션에서는 컴포넌트의 기본 구조, JSX 문법, props와 state의 역할, 조건부 렌더링 등 실전에서 자주 쓰이는 패턴을 예제와 함께 배웁니다. 컴포넌트를 이해하면 React의 핵심 원리를 쉽게 익힐 수 있습니다.',
    category: 'basics',
    icon: '🧩',
    prev: 'setup',
    next: 'props',
    tags: ['컴포넌트', 'component', 'function component', 'props', 'state', 'JSX', '조건부 렌더링', '리스트 렌더링', 'React basics', '재사용성', 'UI', 'modular', 'react component'],
    examples: [
      {
        id: 'function-component',
        title: '함수형 컴포넌트 (Function Component)',
        description: '함수형 컴포넌트는 가장 기본적인 React 컴포넌트 작성 방식입니다. props를 받아서 JSX를 반환하며, 재사용성과 테스트가 용이합니다.',
        code: `function Welcome(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}`
      },
      {
        id: 'jsx',
        title: 'JSX',
        description: 'JSX는 JavaScript에서 XML처럼 태그를 작성할 수 있게 해주는 문법입니다. 컴포넌트를 HTML 태그처럼 사용할 수 있어 가독성이 높아집니다.',
        code: `<Welcome name=\"React\" />`
      },
      {
        id: 'simple-greeting',
        title: '간단한 인사 컴포넌트 (Simple Greeting)',
        description: '간단한 함수형 컴포넌트 예제입니다. Hello 컴포넌트는 항상 동일한 인사말을 반환합니다.',
        code: `function Hello() {\n  return <div>안녕하세요!</div>;\n}`
      },
      {
        id: 'props-conditional',
        title: 'props와 조건부 렌더링 (Props & Conditional Rendering)',
        description: 'props로 받은 값에 따라 다른 결과를 보여주는 조건부 렌더링 예제입니다. name이 있으면 인사말, 없으면 안내 메시지를 출력합니다.',
        code: `function Greeting({ name }) {\n  return <h2>{name ? \`안녕하세요, \\${name}님!\` : '이름을 입력하세요.'}</h2>;\n}`
      },
      {
        id: 'state-event',
        title: '상태와 이벤트 활용 (State & Event)',
        description: 'useState로 상태를 관리하고, 버튼 클릭 이벤트로 값을 증감시키는 카운터 예제입니다. React의 상태 관리와 이벤트 처리의 기본을 보여줍니다.',
        code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <span style={{margin: '0 1em'}}>{count}</span>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}`
      },
      {
        id: 'list-filtering',
        title: '리스트 필터링 & 동적 렌더링 (List Filtering & Dynamic Rendering)',
        description: '입력값에 따라 리스트를 실시간으로 필터링하는 예제입니다. useState로 filter 상태를 관리하고, 배열의 filter 메서드를 활용합니다.',
        code: `import { useState } from 'react';\n\nfunction UserList() {\n  const [filter, setFilter] = useState('');\n  const users = ['Alice', 'Bob', 'Charlie', 'David'];\n  const filtered = users.filter(u => u.toLowerCase().includes(filter.toLowerCase()));\n  return (\n    <div>\n      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder=\"이름 검색\" />\n      <ul>\n        {filtered.map(u => <li key={u}>{u}</li>)}\n      </ul>\n    </div>\n  );\n}`
      }
    ],
    content: (
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 함수형 컴포넌트 (Function Component)</Typography>
        <ExampleTab
            example={<Welcome name="React" />}
            code={`function Welcome(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}`}
            desc={`함수형 컴포넌트는 가장 기본적인 React 컴포넌트 작성 방식입니다.\nprops를 받아서 JSX를 반환하며, 재사용성과 테스트가 용이합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. JSX</Typography>
          <ExampleTab
            example={<div>{'<Welcome name="React" />'}</div>}
            code={`<Welcome name=\"React\" />`}
            desc={`JSX는 JavaScript에서 XML처럼 태그를 작성할 수 있게 해주는 문법입니다.\n컴포넌트를 HTML 태그처럼 사용할 수 있어 가독성이 높아집니다.`}
          />
      </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. 간단한 인사 컴포넌트 (Simple Greeting)</Typography>
        <ExampleTab
            example={<div>안녕하세요!</div>}
            code={`function Hello() {\n  return <div>안녕하세요!<\/div>;\n}`}
            desc={`간단한 함수형 컴포넌트 예제입니다.\nHello 컴포넌트는 항상 동일한 인사말을 반환합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. props와 조건부 렌더링 (Props & Conditional Rendering)</Typography>
          <ExampleTab
            example={<Greeting name="홍길동" />}
            code={`function Greeting({ name }) {\n  return <h2>{name ? \`안녕하세요, \${name}님!\` : '이름을 입력하세요.'}<\/h2>;\n}`}
            desc={`props로 받은 값에 따라 다른 결과를 보여주는 조건부 렌더링 예제입니다.\nname이 있으면 인사말, 없으면 안내 메시지를 출력합니다.`}
          />
      </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>5. 상태와 이벤트 활용 (State & Event)</Typography>
        <ExampleTab
            example={<CounterButtonsDemo />}
            code={`import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <span style={{margin: '0 1em'}}>{count}</span>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}`}
            desc={`useState로 상태를 관리하고, 버튼 클릭 이벤트로 값을 증감시키는 카운터 예제입니다.\nReact의 상태 관리와 이벤트 처리의 기본을 보여줍니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>6. 리스트 필터링 & 동적 렌더링 (List Filtering & Dynamic Rendering)</Typography>
          <ExampleTab
            example={<UserListDemo />}
            code={`import { useState } from 'react';\n\nfunction UserList() {\n  const [filter, setFilter] = useState('');\n  const users = ['Alice', 'Bob', 'Charlie', 'David'];\n  const filtered = users.filter(u => u.toLowerCase().includes(filter.toLowerCase()));\n  return (\n    <div>\n      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="이름 검색" />\n      <ul>\n        {filtered.map(u => <li key={u}>{u}</li>)}\n      </ul>\n    </div>\n  );\n}`}
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
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 Props 전달 (Basic Props)</Typography>
        <ExampleTab
            example={<ProfileCard name="홍길동" age={30} job="개발자" />}
            code={`function ProfileCard({ name, age, job }) {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>나이: {age}</p>\n      <p>직업: {job}</p>\n    </div>\n  );\n}`}
            desc={`이 예제는 React에서 \"props\"(속성)를 사용해 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방법을 보여줍니다.\n- ProfileCard 컴포넌트는 name, age, job이라는 props를 받아 화면에 표시합니다.\n- props는 함수의 인자처럼, 컴포넌트에 원하는 값을 외부에서 주입할 수 있게 해줍니다.\n- 자식 컴포넌트는 props를 읽기만 할 수 있고, 직접 변경할 수 없습니다.\n- props를 활용하면 컴포넌트를 재사용하고, 다양한 데이터를 유연하게 전달할 수 있습니다.\n이처럼 props는 React 컴포넌트 간 데이터 흐름의 핵심 도구입니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. 커스텀 버튼 컴포넌트 (Custom Button)</Typography>
          <ExampleTab
            example={<div style={{ display: 'flex', gap: 16 }}><CustomButton color="#3498db" label="저장" /><CustomButton color="#e74c3c" label="삭제" /></div>}
            code={`function CustomButton({ color, label }) {\n  return <button style={{ background: color }}>{label}</button>;\n}`}
            desc={`이 예제는 props를 활용해 다양한 스타일의 버튼을 만드는 방법을 보여줍니다.\n- CustomButton 컴포넌트는 color와 label이라는 props를 받아, 각각 버튼의 배경색과 표시 텍스트를 결정합니다.\n- 부모 컴포넌트가 각 버튼에 원하는 색상과 라벨을 전달할 수 있습니다.\n- props를 사용하면 하나의 컴포넌트로 여러 종류의 버튼을 쉽게 만들 수 있습니다.\n이처럼 props는 컴포넌트의 재사용성과 확장성을 높여줍니다.`}
          />
      </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. 리스트 데이터 전달 (List Data)</Typography>
        <ExampleTab
            example={<ItemList items={['사과', '바나나', '오렌지']} />}
            code={`function ItemList({ items }) {
  const icons = {
    '사과': '🍎',
    '바나나': '🍌',
    '오렌지': '🍊',
    '포도': '🍇',
    '수박': '🍉',
    '딸기': '🍓',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map(item => (
        <span key={item} style={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label={item}>{icons[item] || '🔹'}</span>
          {item}
        </span>
      ))}
    </div>
  );
}`}
            desc={`이 예제는 배열 형태의 데이터를 props로 전달하여 리스트를 아이콘과 함께 렌더링하는 방법을 보여줍니다.\n- 각 항목 앞에 과일에 맞는 이모지 아이콘이 표시됩니다.\n- <ul>/<li> 대신 <div>와 <span>을 사용해 커스텀 스타일로 렌더링합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 상태와 Props 연동 (State & Props)</Typography>
          <ExampleTab
            example={<ModalDemo />}
            code={`function ModalDemo() {\n  const [open, setOpen] = React.useState(false);\n  const [value, setValue] = React.useState('Hello from parent!');\n  return (\n    <div>\n      <input value={value} onChange={e => setValue(e.target.value)} />\n      <button onClick={() => setOpen(true)}>Open Modal</button>\n      <Modal open={open} onClose={() => setOpen(false)} message={value} />\n    </div>\n  );\n}`}
            desc={`이 예제는 부모 컴포넌트의 상태(state)를 자식 컴포넌트의 props로 전달하는 방법을 보여줍니다.\n- ModalDemo 컴포넌트는 open, onClose, message 등의 값을 자식 Modal 컴포넌트에 props로 전달합니다.\n- 부모의 상태가 바뀌면, 자식 컴포넌트도 그에 맞게 동작(모달 열림/닫힘, 메시지 변경 등)합니다.\n- props를 통해 부모-자식 간 데이터 흐름과 제어가 가능합니다.\n이처럼 props는 상태 관리와 컴포넌트 간 상호작용의 핵심 역할을 합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>5. 토글 스위치 컴포넌트 (Toggle Switch)</Typography>
          <ExampleTab
            example={<Toggle label="알림" initial={true} />}
            code={`function Toggle({ label, initial }) {\n  const [on, setOn] = React.useState(initial);\n  return <label><input type="checkbox" checked={on} onChange={() => setOn(!on)} />{label}</label>;\n}`}
            desc={`이 예제는 props로 초기값과 라벨을 받아 재사용 가능한 토글 스위치를 만드는 방법을 보여줍니다.\n- Toggle 컴포넌트는 label(라벨)과 initial(초기 상태) props를 받아, 체크박스와 텍스트를 렌더링합니다.\n- 부모 컴포넌트가 원하는 초기값과 라벨을 자유롭게 전달할 수 있습니다.\n- props를 활용하면 다양한 상황에 맞는 토글 스위치를 쉽게 만들 수 있습니다.\n이처럼 props는 컴포넌트의 동작과 표시를 유연하게 제어할 수 있게 해줍니다.`}
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
    content: <UseStateExample />,
  },
  useEffect: {
    id: 'useEffect',
    title: 'useEffect',
    description: '컴포넌트의 side effect를 처리하는 Hook',
    category: 'hooks',
    icon: '⚡',
    prev: 'useState',
    next: 'useRef',
    content: <UseEffectExample />,
  },
  useRef: {
    id: 'useRef',
    title: 'useRef',
    description: 'DOM 참조와 값 저장',
    category: 'hooks',
    icon: '📌',
    prev: 'useEffect',
    next: 'useMemo',
    content: <UseRefExample />,
  },
  useMemo: {
    id: 'useMemo',
    title: 'useMemo',
    description: '값을 메모이제이션하는 Hook',
    category: 'hooks',
    icon: '🧠',
    prev: 'useRef',
    next: 'useCallback',
    content: <UseMemoExample />,
  },
  useCallback: {
    id: 'useCallback',
    title: 'useCallback',
    description: '함수를 메모이제이션할 때 사용하는 Hook',
    category: 'hooks',
    icon: '🔁',
    prev: 'useMemo',
    next: 'useReducer',
    content: <UseCallbackExample />,
  },
  useReducer: {
    id: 'useReducer',
    title: 'useReducer',
    description: '복잡한 상태 로직을 관리할 때 사용하는 Hook',
    category: 'hooks',
    icon: '🗂️',
    prev: 'useCallback',
    next: 'useContext',
    content: <UseReducerExample />,
  },
  useContext: {
    id: 'useContext',
    title: 'useContext',
    description: '컴포넌트 트리 전체에 데이터를 전달할 때 사용하는 Hook',
    category: 'hooks',
    icon: '🌐',
    prev: 'useReducer',
    next: null,
    content: <UseContextExample />,
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
    prev: null,
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
    content: (
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 버튼 클릭 이벤트 (Button Click)</Typography>
          <ExampleTab
            example={<Button type="primary" onClick={() => alert('버튼이 클릭되었습니다!')}>클릭</Button>}
            code={`function ButtonClick() {\n  return <Button type=\"primary\" onClick={() => alert('버튼이 클릭되었습니다!')}>클릭</Button>;\n}`}
            desc={`가장 기본적인 이벤트 처리 예제입니다.\n- onClick 속성에 함수를 전달하면 버튼 클릭 시 해당 함수가 실행됩니다.\n- 이벤트 객체를 인자로 받을 수도 있습니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. 입력값 변경 이벤트 (Input Change)</Typography>
          <ExampleTab
            example={<InputChangeDemo />}
            code={`import { Input } from 'antd';\nfunction InputChangeDemo() {\n  const [value, setValue] = React.useState('');\n  return (\n    <div>\n      <Input value={value} onChange={e => setValue(e.target.value)} placeholder=\"입력하세요\" style={{ width: 200, marginRight: 8 }} />\n      <p>입력값: {value}</p>\n    </div>\n  );\n}`}
            desc={`input의 onChange 이벤트로 입력값을 실시간으로 상태에 반영하는 예제입니다.\n- e.target.value로 입력값을 읽어 setState로 저장합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. 폼 제출 이벤트 (Form Submit)</Typography>
          <ExampleTab
            example={<FormSubmitDemo />}
            code={`import { Input, Button } from 'antd';\nfunction FormSubmitDemo() {\n  const [msg, setMsg] = React.useState('');\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    setMsg('폼이 제출되었습니다!');\n  };\n  return (\n    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>\n      <Input placeholder=\"아무거나 입력\" style={{ width: 200 }} />\n      <Button type=\"primary\" htmlType=\"submit\">제출</Button>\n      <p style={{ margin: 0 }}>{msg}</p>\n    </form>\n  );\n}`}
            desc={`form의 onSubmit 이벤트로 폼 제출을 제어하는 예제입니다.\n- e.preventDefault()로 새로고침 방지\n- 입력값 검증, 서버 전송 등 다양한 로직에 활용됩니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 커스텀 이벤트 & 버블링 (Custom Event & Bubbling)</Typography>
          <ExampleTab
            example={<CustomEventDemo />}
            code={`function CustomEventDemo() {\n  return (\n    <div onClick={() => alert('부모 div 클릭!')} style={{ padding: 16, background: '#333' }}>\n      <button onClick={e => { e.stopPropagation(); alert('버튼만 클릭!'); }}>버튼</button>\n    </div>\n  );\n}`}
            desc={`이벤트 버블링과 stopPropagation의 활용 예제입니다.\n- 부모 div에 onClick, 자식 버튼에도 onClick\n- 버튼 클릭 시 e.stopPropagation()으로 부모 이벤트 전파 차단`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>5. 고급: 이벤트 위임 & 컴포넌트 합성 (Delegation & Composition)</Typography>
          <ExampleTab
            example={<EventDelegationDemo />}
            code={`function EventDelegationDemo() {\n  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {\n    const target = e.target as HTMLElement;\n    if (target.tagName === 'BUTTON') {\n      alert(target.textContent + ' 클릭!');\n    }\n  };\n  return (\n    <div onClick={handleClick}>\n      <button>버튼1</button>\n      <button>버튼2</button>\n      <button>버튼3</button>\n    </div>\n  );\n}`}
            desc={`여러 자식 버튼의 클릭을 부모에서 한 번에 처리하는 이벤트 위임 패턴입니다.\n- 성능 최적화, 동적 컴포넌트 관리에 유용\n- 컴포넌트 합성/동적 렌더링과 함께 자주 사용`}
          />
        </div>
      </div>
    ),
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
    next: null,
    content: (
      <div>
        <ServerDnDExample />
        <DropRestrictionDnDExample />
        <CustomPreviewDnDExample />
        <KeyboardA11yDnDExample />
        <TrashDnDExample />
        <MultiSelectDnDExample />
        <MobileTouchDnDExample />
        <VirtualizedDnDExample />
        {/* 필요시 다른 practical 예제도 추가 가능 */}
      </div>
    ),
  },

  
  antdesign: {
    id: 'antdesign',
    title: 'Ant Design',
    description: 'Ant Design(antd) 컴포넌트 라이브러리 예제',
    category: 'opensource',
    icon: '🟦',
    prev: null,
    next: 'mui',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install antd @ant-design/icons`}
        </MacCmd>
        {/* 버튼 */}
         <div style={stateExampleBlockStyle}>
         <Typography variant="h6" sx={{ mb: 2 }}>1. Button (버튼)</Typography>
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
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. Input (입력)</Typography>
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
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. Select (셀렉트)</Typography>
          <ExampleTab
            example={<AntdSelect defaultValue="Apple" style={{ width: 120 }}><AntdSelect.Option value="Apple">Apple</AntdSelect.Option><AntdSelect.Option value="Banana">Banana</AntdSelect.Option></AntdSelect>}
            code={`import { Select } from 'antd';\n\nfunction Demo() {\n  return (<Select defaultValue=\"Apple\"><Select.Option value=\"Apple\">Apple</Select.Option><Select.Option value=\"Banana\">Banana</Select.Option></Select>);\n}`}
            desc="기본 Select"
          />
        </div>
        {/* 체크박스/스위치 */}
        
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. Checkbox & Switch</Typography>
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
        
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. DatePicker (날짜 선택)</Typography>
          <ExampleTab
            example={<DatePicker />}
            code={`import { DatePicker } from 'antd';\n\nfunction Demo() {\n  return <DatePicker />;\n}`}
            desc="DatePicker"
          />
        </div>
        {/* 모달 */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. Modal (모달)</Typography>
          <ExampleTab
            example={<AntdModalDemo />}
            code={`import { Modal, Button } from 'antd';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>모달 열기</Button><AntdModal open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>모달 내용입니다.</AntdModal></>);\n}`}
            desc="Modal"
          />
        </div>
        {/* 테이블 */}
        
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>7. Table (테이블)</Typography>
          <ExampleTab
            example={<AntdTableDemo />}
            code={`import { Table } from 'antd';\n\nconst columns = [\n  { title: '이름', dataIndex: 'name', sorter: (a: any, b: any) => a.name.localeCompare(b.name) },\n  { title: '나이', dataIndex: 'age', filters: [ { text: '20대', value: 2 }, { text: '30대', value: 3 } ], onFilter: (value: any, record: any) => String(record.age).startsWith(value) },\n];\nconst data = [\n  { key: 1, name: '홍길동', age: 28 },\n  { key: 2, name: '김철수', age: 34 },\n];\n\nfunction Demo() {\n  return <Table columns={columns} dataSource={data} />;\n}`}
            desc="정렬/필터가 있는 Table"
          />
        </div>
        {/* 알림 */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>8. Dialog (다이얼로그)</Typography>
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
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>9. Tabs</Typography>
          <ExampleTab
            example={<Tabs defaultActiveKey="1"><Tabs.TabPane tab="Tab1" key="1">내용1</Tabs.TabPane><Tabs.TabPane tab="Tab2" key="2">내용2</Tabs.TabPane></Tabs>}
            code={`import { Tabs } from 'antd';\n\nfunction Demo() {\n  return (<Tabs defaultActiveKey=\"1\"><Tabs.TabPane tab=\"Tab1\" key=\"1\">내용1</Tabs.TabPane><Tabs.TabPane tab=\"Tab2\" key=\"2\">내용2</Tabs.TabPane></Tabs>);\n}`}
            desc="Tabs"
          />
        </div>
        {/* Dropdown */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>10. Dropdown</Typography>
          <ExampleTab
            example={<AntdDropdownDemo />}
            code={`import { Dropdown, Menu, Button } from 'antd';\n\nconst menu = (<Menu><Menu.Item key=\"1\">메뉴1</Menu.Item><Menu.Item key=\"2\">메뉴2</Menu.Item></Menu>);\n\nfunction Demo() {\n  return (<Dropdown overlay={menu}><Button>메뉴</Button></Dropdown>);\n}`}
            desc="Dropdown"
          />
        </div>
        {/* Pagination */}
        
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>11. Pagination</Typography>
          <ExampleTab
            example={<Pagination defaultCurrent={1} total={50} />}
            code={`import { Pagination } from 'antd';\n\nfunction Demo() {\n  return <Pagination defaultCurrent={1} total={50} />;\n}`}
            desc="Pagination"
          />
        </div>
        {/* Progress */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>12. Progress</Typography>
          <ExampleTab
            example={<Progress percent={60} />}
            code={`import { Progress } from 'antd';\n\nfunction Demo() {\n  return <Progress percent={60} />;\n}`}
            desc="Progress"
          />
        </div>
        {/* Avatar */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>13. Avatar</Typography>
          <ExampleTab
            example={<Avatar>A</Avatar>}
            code={`import { Avatar } from 'antd';\n\nfunction Demo() {\n  return <Avatar>A</Avatar>;\n}`}
            desc="Avatar"
          />
        </div>
        {/* Badge */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>14. Badge</Typography>
          <ExampleTab
            example={<Badge count={5}><Avatar>B</Avatar></Badge>}
            code={`import { Badge, Avatar } from 'antd';\n\nfunction Demo() {\n  return <Badge count={5}><Avatar>B</Avatar></Badge>;\n}`}
            desc="Badge"
          />
        </div>
        {/* Tag */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>15. Tag</Typography>
          <ExampleTab
            example={<Tag color="blue">Tag</Tag>}
            code={`import { Tag } from 'antd';\n\nfunction Demo() {\n  return <Tag color=\"blue\">Tag</Tag>;\n}`}
            desc="Tag"
          />
        </div>
        {/* Collapse */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>16. Collapse</Typography>
          <ExampleTab
            example={<Collapse defaultActiveKey={['1']}><Collapse.Panel header="패널1" key="1">내용1</Collapse.Panel><Collapse.Panel header="패널2" key="2">내용2</Collapse.Panel></Collapse>}
            code={`import { Collapse } from 'antd';\n\nfunction Demo() {\n  return (<Collapse defaultActiveKey={['1']}><Collapse.Panel header=\"패널1\" key=\"1\">내용1</Collapse.Panel><Collapse.Panel header=\"패널2\" key=\"2\">내용2</Collapse.Panel></Collapse>);\n}`}
            desc="Collapse(아코디언)"
          />
        </div>
        {/* Tooltip */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>17. Tooltip</Typography>
          <ExampleTab
            example={<MuiTooltip title="툴팁 내용"><span>툴팁</span></MuiTooltip>}
            code={`import Tooltip from '@mui/material/Tooltip';\n\nfunction Demo() {\n  return <Tooltip title=\"툴팁 내용\"><span>툴팁</span></Tooltip>;\n}`}
            desc="Tooltip"
          />
        </div>
        {/* Popconfirm */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>18. Popconfirm</Typography>
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
    title: 'MUI (Material UI)',
    description: 'Material UI 컴포넌트 라이브러리 예제',
    category: 'opensource',
    icon: '🔷',
    prev: 'antdesign',
    next: 'recharts',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @mui/material @emotion/react @emotion/styled`}
        </MacCmd>
        {/* 버튼 */}
         <div style={stateExampleBlockStyle}>
         <Typography variant="h6" sx={{ mb: 2 }}>1. Button (버튼)</Typography>
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
            example={<MuiButton variant="contained" startIcon={<ExpandMoreIcon />}>Icon</MuiButton>}
            code={`import Button from '@mui/material/Button';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nfunction Demo() {\n  return <Button variant=\"contained\" startIcon={<ExpandMoreIcon />}>Icon</Button>;\n}`}
            desc="아이콘 버튼"
          />
          <ExampleTab
            example={<MuiButton variant="contained" disabled>Disabled</MuiButton>}
            code={`import Button from '@mui/material/Button';\n\nfunction Demo() {\n  return <Button variant=\"contained\" disabled>Disabled</Button>;\n}`}
            desc="Disabled 버튼"
          />
        </div>
        {/* 입력폼 */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. TextField (입력)</Typography>
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
            example={<MuiTextField label="검색" variant="outlined" size="small" InputProps={{ endAdornment: <ExpandMoreIcon /> }} />}
            code={`import TextField from '@mui/material/TextField';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nfunction Demo() {\n  return <TextField label=\"검색\" variant=\"outlined\" size=\"small\" InputProps={{ endAdornment: <ExpandMoreIcon /> }} />;\n}`}
            desc="Search TextField"
          />
        </div>
        {/* 셀렉트 */}
        <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. Select (셀렉트)</Typography>
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
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. Checkbox & Switch</Typography>
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
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>5. DatePicker (날짜 선택)</Typography>
          <ExampleTab
            example={<MuiTextField type="date" label="날짜" InputLabelProps={{ shrink: true }} size="small" />}
            code={`import TextField from '@mui/material/TextField';\n\nfunction Demo() {\n  return <TextField type=\"date\" label=\"날짜\" InputLabelProps={{ shrink: true }} size=\"small\" />;\n}`}
            desc="DatePicker (MUI 기본)"
          />
          </div>
        {/* 다이얼로그 */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>6. Dialog (다이얼로그)</Typography>
          <ExampleTab
            example={<MuiDialogDemo />}
            code={`import Dialog from '@mui/material/Dialog';\nimport Button from '@mui/material/Button';\nimport DialogTitle from '@mui/material/DialogTitle';\nimport DialogActions from '@mui/material/DialogActions';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>다이얼로그 열기</Button><Dialog open={open} onClose={() => setOpen(false)}><DialogTitle>다이얼로그 내용</DialogTitle><DialogActions><Button onClick={() => setOpen(false)}>닫기</Button></DialogActions></Dialog></>);\n}`}
            desc="Dialog"
          />
        </div>
        {/* 테이블 */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>7. Table (테이블)</Typography>
          <ExampleTab
            example={<MuiTableDemo />}
            code={`import Table from '@mui/material/Table';\nimport TableBody from '@mui/material/TableBody';\nimport TableCell from '@mui/material/TableCell';\nimport TableContainer from '@mui/material/TableContainer';\nimport TableHead from '@mui/material/TableHead';\nimport TableRow from '@mui/material/TableRow';\nimport Paper from '@mui/material/Paper';\n\nconst rows = [\n  { name: '홍길동', age: 28 },\n  { name: '김철수', age: 34 },\n];\n\nfunction Demo() {\n  return (<TableContainer component={Paper}><Table><TableHead><TableRow><TableCell>이름</TableCell><TableCell>나이</TableCell></TableRow></TableHead><TableBody>{rows.map((row, i) => (<TableRow key={i}><TableCell>{row.name}</TableCell><TableCell>{row.age}</TableCell></TableRow>))}</TableBody></Table></TableContainer>);\n}`}
            desc="기본 Table"
          />
          </div>
        {/* 스낵바 */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>8. Snackbar (스낵바)</Typography>
          <ExampleTab
            example={<MuiSnackbarDemo />}
            code={`import Snackbar from '@mui/material/Snackbar';\nimport Button from '@mui/material/Button';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>스낵바 열기</Button><Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} message=\"저장되었습니다!\" /></>);\n}`}
            desc="Snackbar"
          />
        </div>
        {/* Tabs */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>9. Tabs</Typography>
          <ExampleTab
            example={<MuiTabsDemo />}
            code={`import Tabs from '@mui/material/Tabs';\nimport Tab from '@mui/material/Tab';\nimport React from 'react';\n\nfunction Demo() {\n  const [value, setValue] = React.useState(0);\n  return (<Tabs value={value} onChange={(_, v) => setValue(v)}><Tab label=\"Tab1\" /><Tab label=\"Tab2\" /></Tabs>);\n}`}
            desc="Tabs"
          />
          </div>
        {/* Menu (Dropdown) */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>10. Menu (Dropdown)</Typography>
          <ExampleTab
            example={<MuiMenuDemo />}
            code={`import Menu from '@mui/material/Menu';\nimport MenuItem from '@mui/material/MenuItem';\nimport Button from '@mui/material/Button';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [anchorEl, setAnchorEl] = useState(null);\n  const open = Boolean(anchorEl);\n  return (<><Button onClick={e => setAnchorEl(e.currentTarget)}>메뉴 열기</Button><Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}><MenuItem onClick={() => setAnchorEl(null)}>메뉴1</MenuItem><MenuItem onClick={() => setAnchorEl(null)}>메뉴2</MenuItem></Menu></>);\n}`}
            desc="Dropdown"
          />
        </div>
        {/* Pagination */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>11. Pagination</Typography>
          <ExampleTab
            example={<MuiPagination count={10} page={1} />}
            code={`import Pagination from '@mui/material/Pagination';\n\nfunction Demo() {\n  return <Pagination count={10} page={1} />;\n}`}
            desc="Pagination"
          />
          </div>
        {/* Progress */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>12. Progress</Typography>
          <ExampleTab
            example={<MuiLinearProgress variant="determinate" value={60} />}
            code={`import LinearProgress from '@mui/material/LinearProgress';\n\nfunction Demo() {\n  return <LinearProgress variant=\"determinate\" value={60} />;\n}`}
            desc="LinearProgress"
          />
        </div>
        {/* Avatar */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>13. Avatar</Typography>
          <ExampleTab
            example={<MuiAvatar>A</MuiAvatar>}
            code={`import Avatar from '@mui/material/Avatar';\n\nfunction Demo() {\n  return <Avatar>A</Avatar>;\n}`}
            desc="Avatar"
          />
        </div>
        {/* Badge */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>14. Badge</Typography>
          <ExampleTab
            example={<MuiBadge badgeContent={5} color="primary"><MuiAvatar>B</MuiAvatar></MuiBadge>}
            code={`import Badge from '@mui/material/Badge';\nimport Avatar from '@mui/material/Avatar';\n\nfunction Demo() {\n  return <Badge badgeContent={5} color=\"primary\"><Avatar>B</Avatar></Badge>;\n}`}
            desc="Badge"
          />
        </div>
        {/* Chip (Tag) */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>15. Chip (Tag)</Typography>
          <ExampleTab
            example={<MuiChip label="Tag" color="primary" />}
            code={`import Chip from '@mui/material/Chip';\n\nfunction Demo() {\n  return <Chip label=\"Tag\" color=\"primary\" />;\n}`}
            desc="Chip"
          />
        </div>
        {/* Accordion */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>16. Accordion</Typography>
          <ExampleTab
            example={<MuiAccordionDemo />}
            code={`import Accordion from '@mui/material/Accordion';\nimport AccordionSummary from '@mui/material/AccordionSummary';\nimport AccordionDetails from '@mui/material/AccordionDetails';\nimport Typography from '@mui/material/Typography';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\n\nfunction Demo() {\n  return (<Accordion><AccordionSummary expandIcon={<ExpandMoreIcon />}><Typography>패널 제목</Typography></AccordionSummary><AccordionDetails><Typography>패널 내용</Typography></AccordionDetails></Accordion>);\n}`}
            desc="Accordion"
          />
        </div>
        {/* Tooltip */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>17. Tooltip</Typography>
          <ExampleTab
            example={<MuiTooltip title="툴팁 내용"><span>툴팁</span></MuiTooltip>}
            code={`import Tooltip from '@mui/material/Tooltip';\n\nfunction Demo() {\n  return <Tooltip title=\"툴팁 내용\"><span>툴팁</span></Tooltip>;\n}`}
            desc="Tooltip"
          />
        </div>
        {/* Dialog (확인 다이얼로그) */}
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>18. Dialog (확인 다이얼로그)</Typography>
          <ExampleTab
            example={<MuiConfirmDialogDemo />}
            code={`import Dialog from '@mui/material/Dialog';\nimport DialogTitle from '@mui/material/DialogTitle';\nimport DialogActions from '@mui/material/DialogActions';\nimport Button from '@mui/material/Button';\nimport React, { useState } from 'react';\n\nfunction Demo() {\n  const [open, setOpen] = useState(false);\n  return (<><Button onClick={() => setOpen(true)}>확인</Button><Dialog open={open} onClose={() => setOpen(false)}><DialogTitle>정말 삭제할까요?</DialogTitle><DialogActions><Button onClick={() => setOpen(false)}>아니오</Button><Button onClick={() => setOpen(false)} color=\"primary\">네</Button></DialogActions></Dialog></>);\n}`}
            desc="확인 다이얼로그"
          />
        </div>
      </div>
    ),
  },
  recharts: {
    id: 'recharts',
    title: 'Recharts',
    description: 'Recharts 차트 라이브러리 예제',
    category: 'opensource',
    icon: '📊',
    prev: 'mui',
    next: 'victory',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install recharts`}
        </MacCmd>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm run dev
yarn dev
pnpm dev
npm start`}
        </MacCmd>
        <RechartsExample />
      </div>
    ),
  },
  victory: {
    id: 'victory',
    title: 'Victory',
    description: 'Victory 차트 라이브러리 예제',
    category: 'opensource',
    icon: '🏆',
    prev: 'recharts',
    next: 'chartjs',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install victory`}
        </MacCmd>
        <VictoryExample />
      </div>
    ),
  },
  chartjs: {
    id: 'chartjs',
    title: 'Chart.js',
    description: 'Chart.js + react-chartjs-2 차트 예제',
    category: 'opensource',
    icon: '📈',
    prev: 'victory',
    next: 'reactrouter',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install chart.js react-chartjs-2`}
        </MacCmd>
        <ChartjsExample />
      </div>
    ),
  },
  reactrouter: {
    id: 'reactrouter',
    title: 'React Router',
    description: 'react-router로 라우팅 구현 예제',
    category: 'opensource',
    icon: '🛣️',
    prev: 'chartjs',
    next: 'styledcomponents',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install react-router-dom`}
        </MacCmd>
        <ReactRouterExample />
      </div>
    ),
  },
  styledcomponents: {
    id: 'styledcomponents',
    title: 'styled-components',
    description: 'styled-components로 스타일링 예제',
    category: 'opensource',
    icon: '💅',
    prev: 'reactrouter',
    next: 'emotion',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install styled-components`}
        </MacCmd>
        <StyledComponentsExample />
      </div>
    ),
  },
  emotion: {
    id: 'emotion',
    title: 'Emotion',
    description: 'Emotion(@emotion/react, @emotion/styled) 기반 실전 스타일링 예제 18선',
    category: 'opensource',
    icon: '🎨',
    prev: 'styledcomponents',
    next: 'tailwind',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @emotion/react @emotion/styled`}
        </MacCmd>
        <EmotionExample />
      </div>
    ),
  },
  tailwind: {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description: 'Tailwind CSS 유틸리티 기반 실전 스타일링 예제 18선',
    category: 'opensource',
    icon: '🌬️',
    prev: 'emotion',
    next: 'recoil',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install tailwindcss`}
        </MacCmd>
        <TailwindExample />
      </div>
    ),
  },
  recoil: {
    id: 'recoil',
    title: 'Recoil',
    description: 'Recoil을 사용한 상태 관리 예제',
    category: 'opensource',
    icon: '🐻',
    prev: 'zustand',
    next: 'jotai',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install recoil`}
        </MacCmd>
        <RecoilExample />
      </div>
    ),
  },
  jotai: {
    id: 'jotai',
    title: 'Jotai',
    description: 'Jotai 상태 관리 예제',
    category: 'opensource',
    icon: '🧪',
    prev: 'zustand',
    next: 'reacthookform',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install jotai`}
        </MacCmd>
        <JotaiExample />
      </div>
    ),
  },
  reacthookform: {
    id: 'reacthookform',
    title: 'React Hook Form',
    description: 'React Hook Form을 활용한 폼 예제',
    category: 'opensource',
    icon: '📝',
    prev: 'jotai',
    next: 'formik',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install react-hook-form`}
        </MacCmd>
        <ReactHookFormExample />
      </div>
    ),
  },
  formik: {
    id: 'formik',
    title: 'Formik',
    description: 'Formik을 활용한 폼 예제',
    category: 'opensource',
    icon: '📝',
    prev: 'reacthookform',
    next: 'recoil',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install formik`}
        </MacCmd>
        <FormikExample />
      </div>
    ),
  },
 
  fetchapi: {
    id: 'fetchapi',
    title: 'Fetch API',
    description: '브라우저 내장 Fetch API를 사용한 데이터 요청',
    category: 'Api',
    icon: '📡',
    prev: null,
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
    next: 'reactquery',
    content: <AxiosExample />
  },
  reactquery: {
    id: 'reactquery',
    title: 'React Query',
    description: 'React Query로 서버 상태 관리 예제',
    category: 'Api',
    icon: '🔗',
    prev: 'jotai',
    next: 'tanstackquery',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @tanstack/react-query`}
        </MacCmd>
        <ReactQueryExample />
      </div>
    ),
  },
  tanstackquery: {
    id: 'tanstackquery',
    title: 'TanStack Query',
    description: 'TanStack Query를 사용한 데이터 관리',
    category: 'Api',
    icon: '🔄',
    prev: 'reactquery',
    next: null,
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @tanstack/react-query`}
        </MacCmd>
        <TanStackQueryExample />
      </div>
    ),
  },
 
  jsx: {
    id: 'jsx',
    title: 'JSX',
    description: 'JSX 문법과 사용법에 대해 알아봅니다.',
    category: 'basics',
    icon: 'code',
    prev: 'setup',
    next: 'components',
    content: (
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. JSX 기본 사용 (JSX Basic)</Typography>
          <ExampleTab
            example={<div>Hello, <b>JSX!</b></div>}
            code={`const element = <div>Hello, <b>JSX!</b></div>;`}
            desc={`JSX는 JavaScript에서 XML/HTML처럼 태그를 작성할 수 있게 해주는 문법입니다.\n- 중괄호({}) 없이 태그를 바로 쓸 수 있습니다.\n- 여러 요소를 중첩해 표현할 수 있습니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. JSX에서 JS 표현식 (JSX Expression)</Typography>
          <ExampleTab
            example={<JSXExpressionDemo />}
            code={`function JSXExpressionDemo() {\n  const name = 'React';\n  return <h2>안녕하세요, {name}!</h2>;\n}`}
            desc={`JSX 내부에서는 중괄호({})로 JavaScript 표현식을 사용할 수 있습니다.\n- 변수, 연산, 함수 호출 등\n- 단, if/for문 등 문(statement)은 직접 쓸 수 없습니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. 조건부 렌더링 (Conditional Rendering)</Typography>
          <ExampleTab
            example={<JSXConditionalDemo />}
            code={`function JSXConditionalDemo() {\n  const isLoggedIn = true;\n  return (\n    <div>\n      {isLoggedIn ? <span>환영합니다!</span> : <span>로그인 해주세요.</span>}\n    </div>\n  );\n}`}
            desc={`JSX에서 조건부로 다른 요소를 렌더링할 때 삼항 연산자(조건 ? A : B)를 자주 사용합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 리스트 렌더링 (List Rendering)</Typography>
          <ExampleTab
            example={<JSXListDemo />}
            code={`function JSXListDemo() {
  const fruits = ['사과', '바나나', '오렌지'];
  const icons: Record<string, string> = {
    '사과': '🍎',
    '바나나': '🍌',
    '오렌지': '🍊',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {fruits.map(fruit => (
        <span key={fruit} style={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label={fruit}>{icons[fruit] || '🔹'}</span>
          {fruit}
        </span>
      ))}
    </div>
  );
}`}
            desc={`배열의 map 메서드를 활용해 JSX에서 리스트를 동적으로 렌더링할 수 있습니다.\n- 각 항목에는 고유한 key 속성을 부여해야 합니다.`}
          />
          </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>5. JSX에서 props와 컴포넌트 합성 (Props & Composition)</Typography>
          <ExampleTab
            example={<JSXCompositionDemo />}
            code={`function Welcome(props: { name: string }) {\n  return <h3>안녕하세요, {props.name}님!</h3>;\n}\nfunction JSXCompositionDemo() {\n  return (\n    <div>\n      <Welcome name=\"홍길동\" />\n      <Welcome name=\"React\" />\n    </div>\n  );\n}`}
            desc={`JSX에서는 컴포넌트를 태그처럼 사용하고, props로 데이터를 전달할 수 있습니다.\n- 컴포넌트 합성, 재사용, 동적 렌더링의 핵심 패턴입니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>6. 논리 AND 조건부 렌더링 (Logical AND)</Typography>
          <ExampleTab
            example={<JSXAndDemo />}
            code={`function JSXAndDemo() {
  const hasMessage = true;
  return (
    <div>
      {hasMessage && <span>새로운 메시지가 있습니다!</span>}
    </div>
  );
}`}
            desc={`JSX에서 &&(AND) 연산자를 사용하면 조건이 true일 때만 요소를 렌더링할 수 있습니다.\n- false일 경우 아무것도 렌더링되지 않습니다.`}
          />
          </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>7. 조건부로 null 반환 (Return null)</Typography>
          <ExampleTab
            example={<JSXNullDemo />}
            code={`function JSXNullDemo() {
  const visible = false;
  if (!visible) return null;
  return <div>이 내용은 visible이 true일 때만 보입니다.</div>;
}`}
            desc={`컴포넌트에서 null을 반환하면 아무것도 렌더링되지 않습니다.\n- 조건에 따라 UI 자체를 숨길 때 유용합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>8. 중첩 리스트 렌더링 (Nested List)</Typography>
          <ExampleTab
            example={<JSXNestedListDemo />}
            code={`function JSXNestedListDemo() {
  const categories = [
    { name: '과일', items: ['사과', '바나나'] },
    { name: '채소', items: ['당근', '오이'] },
  ];
  const icons: Record<string, string> = {
    '사과': '🍎', '바나나': '🍌', '당근': '🥕', '오이': '🥒',
  };
  return (
    <div>
      {categories.map(cat => (
        <div key={cat.name} style={{ marginBottom: 8 }}>
          <b>{cat.name}</b>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginLeft: 12 }}>
            {cat.items.map(item => (
              <span key={item} style={{ fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span role="img" aria-label={item}>{icons[item] || '🔹'}</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}`}
            desc={`리스트 안에 또 다른 리스트를 중첩해 렌더링할 수 있습니다.\n- 각 map의 key 속성에 주의하세요.`}
          />
          </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>9. key 속성 주의 (Key Warning)</Typography>
          <ExampleTab
            example={<JSXKeyWarningDemo />}
            code={`function JSXKeyWarningDemo() {
  const list: string[] = ['A', 'B', 'C'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {list.map((item: string, idx: number) => (
        <span key={idx} style={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label={item}>🔹</span>
          {item}
        </span>
      ))}
        </div>
  );
}`}
            desc={`key는 리스트 항목의 고유성을 보장해야 합니다.\n- index를 key로 쓰면 항목 순서 변경 시 React가 제대로 감지하지 못할 수 있습니다.`}
          />
        </div>
      </div>
    ),
  },
  customhooks: {
    id: 'customhooks',
    title: 'Custom Hooks',
    description: '커스텀 훅 작성과 활용 방법을 알아봅니다.',
    category: 'advanced',
    icon: 'hook',
    prev: null,
    next: 'fetchapi',
    content: <div>Custom Hooks 예제 준비 중...</div>
  },
  vdom: {
    id: 'vdom',
    title: 'Virtual DOM',
    description: 'React의 Virtual DOM 개념과 동작 원리, 실습 예제',
    category: 'basics',
    icon: '🪞',
    prev: 'jsx',
    next: 'components',
    content: (
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. Virtual DOM이란?</Typography>
          <ExampleTab
            example={<div><b>Virtual DOM</b>은 실제 DOM을 직접 조작하지 않고, 메모리 상의 가상 트리(객체)로 UI 상태를 관리한 뒤, 변경점만 실제 DOM에 최소 반영하는 React의 핵심 기술입니다.</div>}
            code={`// 실제 DOM 조작 예시
const el = document.getElementById('root');
el.innerHTML = '<h1>Hello</h1>';

// React의 Virtual DOM
ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
`}
            desc={`- Virtual DOM은 실제 DOM보다 훨씬 빠른 연산이 가능
- 변경 전/후 트리를 비교(diff)해 필요한 부분만 실제 DOM에 반영
- 성능 최적화, 선언적 UI, 컴포넌트 기반 개발의 핵심`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. DOM 직접 조작 vs Virtual DOM</Typography>
          <ExampleTab
            example={<VDomDirectDemo />}
            code={`function VDomDirectDemo() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.getElementById('direct-dom')!.textContent = 'Count: ' + count;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>증가</button>
      <span id="direct-dom">Count: 0</span>
    </div>
  );
}`}
            desc={`- 직접 DOM을 조작하면 React의 상태/렌더링 흐름과 어긋날 수 있음
- Virtual DOM은 상태 변화 → 가상 트리 → diff → 실제 DOM 반영의 흐름을 자동화`}
          />
          </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. Virtual DOM diffing 실습</Typography>
          <ExampleTab
            example={<VDomDiffDemo />}
            code={`function VDomDiffDemo() {
  const [list, setList] = React.useState(['A', 'B', 'C']);
  return (
    <div>
      <Button type="primary" onClick={() => setList(['A', 'C', 'B'])} style={{ marginBottom: 12 }}>순서 바꾸기</Button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {list.map(item => (
          <span key={item} style={{ fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span role="img" aria-label={item}>🔄</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}`}
            desc={`- key 속성을 활용해 React가 리스트의 변경(순서, 추가/삭제 등)을 효율적으로 감지
- Virtual DOM diffing의 실제 효과를 체험`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 실용 예제: 불필요한 렌더링 방지 (React.memo)</Typography>
          <ExampleTab
            example={<VDomMemoDemo />}
            code={`const ListItem = React.memo(function ListItem({ value }: { value: number }) {
  console.log('렌더:', value);
  return <span style={{ marginRight: 12 }}>{value}</span>;
});
function VDomMemoDemo() {
  const [list, setList] = React.useState([1, 2, 3]);
  const shuffle = () => setList(l => [l[2], l[0], l[1]]);
  const increment = (idx: number) => setList(l => l.map((v, i) => i === idx ? v + 1 : v));
  return (
    <div>
      <Button type="primary" onClick={shuffle} style={{ marginRight: 12 }}>순서 바꾸기</Button>
      {list.map((v, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <ListItem value={v} />
          <Button size="small" onClick={() => increment(i)}>+1</Button>
        </span>
      ))}
      <div style={{ color: '#aaa', fontSize: 13, marginTop: 8 }}>
        값이 바뀐 항목만 콘솔에 '렌더:'가 출력됩니다.
      </div>
    </div>
  );
}`}
            desc={`React.memo를 활용하면 리스트에서 값이 바뀌지 않은 항목은 리렌더링되지 않습니다. 콘솔을 열고, +1 버튼과 순서 바꾸기를 눌러보세요.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>7. 실무 예제: 대량 데이터 가상 스크롤 (react-window)</Typography>
          <ExampleTab
            example={<VDomWindowDemo />}
            code={`// npm install react-window 필요
import { FixedSizeList as List } from 'react-window';

function VDomWindowDemo() {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    no: i + 1,
    title: "게시글 제목 " + (i + 1),
    author: "user" + ((i % 10) + 1),
    date: "2024-06-" + String((i % 30) + 1).padStart(2, '0')
  }));
  return (
    <div style={{ width: 600 }}>
      <div style={{ display: 'flex', background: '#222', color: '#fff', fontWeight: 600, padding: '8px 0', borderRadius: '8px 8px 0 0' }}>
        <div style={{ width: 60, textAlign: 'center' }}>번호</div>
        <div style={{ flex: 1 }}>제목</div>
        <div style={{ width: 100, textAlign: 'center' }}>작성자</div>
        <div style={{ width: 120, textAlign: 'center' }}>날짜</div>
      </div>
      <List
        height={300}
        itemCount={items.length}
        itemSize={40}
        width={600}
        style={{ background: '#232323', color: '#eaeaea', borderRadius: '0 0 8px 8px' }}
      >
        {({ index, style }: { index: number; style: React.CSSProperties }) => (
          <div style={{ ...style, display: 'flex', alignItems: 'center', borderBottom: '1px solid #333', padding: '0 0.5em' }}>
            <div style={{ width: 60, textAlign: 'center', color: '#aaa' }}>{items[index].no}</div>
            <div style={{ flex: 1 }}>{items[index].title}</div>
            <div style={{ width: 100, textAlign: 'center', color: '#8fd' }}>{items[index].author}</div>
            <div style={{ width: 120, textAlign: 'center', color: '#ccc' }}>{items[index].date}</div>
          </div>
        )}
      </List>
    </div>
  );
}`}
            desc={`react-window로 1000개 이상의 게시글 목록도 부드럽게 가상 스크롤 처리할 수 있습니다.\n- 번호, 제목, 작성자, 날짜 컬럼이 있는 게시판 스타일\n- 헤더는 고정, 데이터만 가상화되어 렌더링됩니다.`}
          />
        </div>
      </div>
    ),
  },
  bundlers: {
    id: 'bundlers',
    title: '번들러란?',
    description: '프론트엔드 번들러 개념, 종류, 벤치마크',
    category: 'getting_started',
    icon: '📦',
    prev: 'setup',
    next: 'jsx',
    content: (
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 번들러란?</Typography>
          <p><b>번들러(Bundler)</b>는 여러 개의 JS/TS/CSS/이미지 등 프론트엔드 리소스를 하나(또는 여러 개)의 파일로 합쳐주는 도구입니다.<br/>
          - 모듈 시스템(ESM, CommonJS 등)을 지원해 의존성 관리<br/>
          - 코드 스플리팅, 트리쉐이킹, 압축 등 최적화 기능 제공<br/>
          - 개발/배포 환경에서 빠른 빌드와 핫리로드 지원</p>
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. 주요 번들러 종류</Typography>
          <ul style={{ lineHeight: 2 }}>
            <li><b>Webpack</b>: 가장 널리 쓰이는 전통적 번들러, 플러그인/로더 생태계 풍부</li>
            <li><b>Vite</b>: ESBuild 기반 초고속 번들러, 개발 서버 속도/경량성 강점</li>
            <li><b>Parcel</b>: 설정 없는 zero-config 번들러, 빠른 빌드와 HMR 지원</li>
            <li><b>esbuild</b>: Go로 작성된 초고속 번들러, CLI/라이브러리로 활용</li>
            <li><b>Rollup</b>: 라이브러리 번들에 강점, 트리쉐이킹 최적화</li>
          </ul>
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. 번들러별 벤치마크 (2024)</Typography>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', minWidth: 480, background: '#232323', color: '#eaeaea', borderRadius: 8 }}>
              <thead>
                <tr style={{ background: '#333' }}>
                  <th style={{ padding: 8, border: '1px solid #444' }}>번들러</th>
                  <th style={{ padding: 8, border: '1px solid #444' }}>빌드 속도<br/>(ms)</th>
                  <th style={{ padding: 8, border: '1px solid #444' }}>번들 크기<br/>(KB)</th>
                  <th style={{ padding: 8, border: '1px solid #444' }}>개발 서버 시작<br/>(ms)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #444' }}>Vite</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~400</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>45</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~300</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #444' }}>esbuild</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~120</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>44</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~100</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #444' }}>Parcel</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~900</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>47</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~800</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #444' }}>Webpack</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~1800</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>48</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~1500</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, border: '1px solid #444' }}>Rollup</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~700</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>44</td>
                  <td style={{ padding: 8, border: '1px solid #444' }}>~600</td>
                </tr>
              </tbody>
            </table>
            <div style={{ fontSize: 12, color: '#aaa', marginTop: 4 }}>
              * 벤치마크 출처: <a href="https://github.com/evanw/esbuild#benchmarks" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd' }}>esbuild 공식 벤치마크</a>, <a href="https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd' }}>Vite 공식</a>, <a href="https://parceljs.org/features/benchmarking/" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd' }}>Parcel 공식</a> 등(2024.06 기준, 실제 환경/옵션에 따라 다를 수 있음)
            </div>
          </div>
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 실무 선택 가이드</Typography>
          <ul style={{ lineHeight: 2 }}>
            <li>빠른 개발 서버, 최신 생태계: <b>Vite</b> 추천</li>
            <li>대규모/복잡한 설정, 레거시 호환: <b>Webpack</b> 여전히 강력</li>
            <li>라이브러리 번들, 트리쉐이킹: <b>Rollup</b> 적합</li>
            <li>초고속 빌드/테스트: <b>esbuild</b> 활용</li>
            <li>설정 없이 빠른 시작: <b>Parcel</b>도 실무에 적합</li>
          </ul>
        </div>
      </div>
    ),
  },
  conditionalRendering: {
    id: 'conditionalRendering',
    title: '조건부 렌더링 실전',
    description: '실무에서 자주 쓰는 다양한 조건부 렌더링 패턴 예제',
    category: 'basics',
    icon: '🔀',
    prev: 'jsx',
    next: 'vdom',
    content: (
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 삼항 연산자 패턴</Typography>
          <ExampleTab
            example={<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{true ? '참입니다' : '거짓입니다'}</div>}
            code={`<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{isLoggedIn ? '환영합니다!' : '로그인 해주세요.'}</div>`}
            desc={`삼항 연산자는 가장 많이 쓰는 조건부 렌더링 패턴입니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. AND(&&) 패턴</Typography>
          <ExampleTab
            example={<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{true && <span>조건이 참일 때만 보임</span>}</div>}
            code={`<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{hasMessage && <span>새 메시지!</span>}</div>`}
            desc={`&& 연산자는 true일 때만 요소를 렌더링합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. null 반환 패턴</Typography>
          <ExampleTab
            example={<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{false ? <div>보임</div> : null}</div>}
            code={`<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{!visible && <div>이 내용은 visible이 true일 때만 보입니다.</div>}</div>`}
            desc={`컴포넌트에서 null을 반환하면 아무것도 렌더링되지 않습니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. switch-case 패턴</Typography>
          <ExampleTab
            example={<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{(() => {
              const status: any = 'loading';
              switch (status) {
                case 'loading': return '로딩중';
                case 'error': return '에러';
                default: return '완료';
              }
            })()}</div>}
            code={`<div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, background: '#fafbfc', minHeight: 32 }}>{(() => {
              const status: any = 'loading';
              switch (status) {
                case 'loading': return '로딩중';
                case 'error': return '에러';
                default: return '완료';
              }
            })()}</div>`}
            desc={`복잡한 조건에는 switch-case를 활용할 수 있습니다.`}
          />
          </div>
      </div>
    ),
  },

  


  stylingBasics: {
    id: 'stylingBasics',
    title: '스타일링 기초',
    description: 'React에서 CSS 적용의 다양한 방법(직접, 모듈, styled-components 등) 실전 예제',
    category: 'basics',
    icon: '🎨',
    prev: 'conditionalRendering',
    next: 'vdom',
    content: (
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 인라인 스타일</Typography>
          <ExampleTab
            example={<div style={{ color: 'tomato', fontWeight: 'bold', padding: 8 }}>인라인 스타일 적용</div>}
            code={`<div style={{ color: 'tomato', fontWeight: 'bold', padding: 8 }}>인라인 스타일 적용</div>`}
            desc={`JSX의 style 속성에 객체 형태로 직접 스타일을 지정합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. CSS 파일 import</Typography>
          <ExampleTab
            example={<div className="css-file-demo">CSS 파일 import 예시</div>}
            code={`// App.css 또는 MyComponent.css
.css-file-demo { color: #1976d2; font-weight: bold; padding: 8px; }

// 컴포넌트 파일에서
import './App.css';

<div className="css-file-demo">CSS 파일 import 예시</div>`}
            desc={`일반 CSS 파일을 import해서 className으로 스타일을 적용합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. CSS 모듈</Typography>
          <ExampleTab
            example={<div className={"cssModuleDemo"}>CSS 모듈 예시</div>}
            code={`// MyComponent.module.css
.cssModuleDemo { color: #43a047; font-weight: bold; padding: 8px; }

// MyComponent.tsx
import styles from './MyComponent.module.css';

<div className={styles.cssModuleDemo}>CSS 모듈 예시</div>`}
            desc={`CSS 모듈을 import하면 클래스명이 충돌하지 않고, 객체 형태로 사용합니다.`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. styled-components</Typography>
          <ExampleTab
            example={<StyledButton>스타일드 버튼</StyledButton>}
            code={`// styled-components 설치 필요: npm install styled-components
import styled from 'styled-components';

const StyledButton = styled.button\`
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
\`;

<StyledButton>스타일드 버튼</StyledButton>`}
            desc={`styled-components는 JS 파일 내에서 CSS-in-JS 방식으로 스타일을 작성할 수 있습니다.`}
          />
        </div>
      </div>
    ),
  },
  api: {
    id: 'api',
    title: 'API 예제',
    description: 'REST API 호출과 Recoil을 사용한 상태 관리 예제들',
    category: 'Api',
    icon: '🌐',
    content: <ApiExamples />,
    prev: 'useContext',
    next: 'recoil'
  },
  swr: {
    id: 'swr',
    title: 'SWR',
    description: 'Vercel의 데이터 페칭 라이브러리',
    category: 'example',
    icon: '🔄',
    prev: 'api',
    next: null,
    content: <SWRExample />,
  },
  redux: {
    id: 'redux',
    title: 'Redux (리덕스)',
    description: '가장 널리 쓰이는 전역 상태 관리 라이브러리. Redux Toolkit 기반 실전 예제와 실무 팁 제공.',
    category: 'opensource',
    icon: '🟥',
    prev: 'jotai',
    next: 'zustand',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @reduxjs/toolkit react-redux`}
        </MacCmd>
        <ReduxExample />
      </div>
    ),
  },
  zustand: {
    id: 'zustand',
    title: 'Zustand',
    description: 'Zustand를 사용한 상태 관리 예제',
    category: 'opensource',
    icon: '🦦',
    prev: 'redux',
    next: 'jotai',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install zustand`}
        </MacCmd>
        <ZustandExample />
      </div>
    ),
  },
  sass: {
    id: 'sass',
    title: 'Sass/SCSS',
    description: 'Sass/SCSS 스타일링 실전 예제와 활용법',
    category: 'opensource',
    icon: 'palette',
    prev: 'tailwind',
    next: null,
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install sass`}
        </MacCmd>
        <SassExample />
      </div>
    ),
  },
  radixui: {
    id: 'radixui',
    title: 'Radix UI',
    description: 'Radix UI 실전 예제와 활용법',
    category: 'opensource',
    icon: 'widgets',
    prev: 'sass',
    next: null,
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @radix-ui/react-avatar @radix-ui/react-badge @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip`}
        </MacCmd>
        <RadixUIExample />
      </div>
    ),
  },
  zod: {
    id: 'zod',
    title: 'Zod',
    description: 'Zod를 활용한 스키마/검증 예제',
    category: 'opensource',
    icon: '🧩',
    prev: 'yup',
    next: 'jest',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install zod`}
        </MacCmd>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npx jest\nnpx vitest\nnpx react-scripts test`}
        </MacCmd>
        <ZodExample />
      </div>
    ),
  },
  yup: {
    id: 'yup',
    title: 'Yup',
    description: 'Yup을 활용한 스키마/검증 예제',
    category: 'opensource',
    icon: '✅',
    prev: 'zustand',
    next: 'zod',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install yup`}
        </MacCmd>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npx jest\nnpx vitest\nnpx react-scripts test`}
        </MacCmd>
        <YupExample />
      </div>
    ),
  },
  jest: {
    id: 'jest',
    title: 'Jest',
    description: 'Jest 단위 테스트 예제',
    category: 'opensource',
    icon: '🧪',
    prev: 'zod',
    next: 'reacttestinglibrary',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install jest`}
        </MacCmd>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npx jest\nnpx vitest\nnpx react-scripts test`}
        </MacCmd>
        <JestExample />
      </div>
    ),
  },
  reacttestinglibrary: {
    id: 'reacttestinglibrary',
    title: 'React Testing Library',
    description: 'React Testing Library 주요 사용법 예제',
    category: 'opensource',
    icon: '🧪',
    prev: 'jest',
    next: 'cypress',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @testing-library/react`}
        </MacCmd>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npx jest\nnpx vitest\nnpx react-scripts test`}
        </MacCmd>
        <ReactTestingLibraryExample />
      </div>
    ),
  },
  cypress: {
    id: 'cypress',
    title: 'Cypress',
    description: 'Cypress E2E 테스트 예제',
    category: 'opensource',
    icon: '🧪',
    prev: 'reacttestinglibrary',
    next: null,
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npx cypress open\nnpx cypress run`}
        </MacCmd>
        <CypressExample />
      </div>
    ),
  },
  aggrid: {
    id: 'aggrid',
    title: 'AG Grid',
    description: 'AG Grid 고성능 데이터 그리드 예제',
    category: 'opensource',
    icon: '🗂️',
    prev: 'cypress',
    next: null,
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install ag-grid-react ag-grid-community`}
        </MacCmd>
        <AGGridExample />
      </div>
    ),
  },
  reactdatagrid: {
    id: 'reactdatagrid',
    title: 'React Data Grid',
    description: 'react-data-grid 라이브러리 기본 예제',
    category: 'opensource',
    icon: '🗃️',
    prev: 'aggrid',
    next: null,
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install react-data-grid`}
        </MacCmd>
        <ReactDataGridExample />
      </div>
    ),
  },
  reacttable: {
    id: 'reacttable',
    title: 'React Table (TanStack Table)',
    description: 'React Table(TanStack Table) 기본/고급 예제',
    category: 'opensource',
    icon: '📋',
    prev: 'reactdatagrid',
    next: null,
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @tanstack/react-table`}
        </MacCmd>
        <ReactTableExample />
      </div>
    ),
  },
  materialuidatagrid: {
    id: 'materialuidatagrid',
    title: 'Material-UI Data Grid',
    description: 'Material-UI(MUI X) Data Grid 기본/고급 예제',
    category: 'opensource',
    icon: '🟦',
    prev: 'reacttable',
    next: 'framermotion',
    content: (
      <div>
        <MacCmd showCaret={false} style={{marginBottom: '1.2em'}} desc={null}>
          {`npm install @mui/x-data-grid`}
        </MacCmd>
        <MaterialUIDataGridExample />
      </div>
    ),
  },
  framermotion: {
    id: 'framermotion',
    title: 'Framer Motion',
    description: 'Framer Motion의 기본/드래그/레이아웃/제스처/AnimatePresence 등 단계별 예제와 설명',
    category: 'opensource',
    icon: '🎞️',
    prev: 'materialuidatagrid',
    next: 'dayjs',
    content: <FramerMotionExample />,
  },
  dayjs: {
    id: 'dayjs',
    title: 'Day.js',
    description: 'Day.js 날짜/시간 라이브러리 예제',
    category: 'opensource',
    icon: '📅',
    prev: 'framermotion',
    next: 'datefns',
    content: <DayjsExample />,
  },
  datefns: {
    id: 'datefns',
    title: 'date-fns',
    description: 'date-fns 날짜/시간 라이브러리 예제',
    category: 'opensource',
    icon: '📆',
    prev: 'dayjs',
    next: 'recoil',
    content: <DateFnsExample />,
  },
  dndkit: {
    id: 'dndkit',
    title: 'dnd-kit (드래그앤드롭)',
    description: 'dnd-kit을 활용한 다양한 드래그앤드롭 예제',
    category: 'opensource',
    icon: '🖱️',
    prev: 'datefns',
    next: 'recoil',
    content: <DndKitExample />,
  },
  serverDnD: {
    id: 'serverDnD',
    title: '서버 연동 DnD',
    description: '서버(REST API 등)와 연동되는 드래그앤드롭 실전 예제',
    category: 'example',
    icon: '🔗',
    prev: 'dndkit',
    next: 'serverDnD2',
    content: <ServerDnDExample />,
  },
  serverDnD2: {
    id: 'serverDnD2',
    title: '서버 연동 DnD(REST/axios)',
    description: 'REST API/axios 기반, Optimistic UI, 실전 UX 개선 등 고급 서버 연동 DnD 예제',
    category: 'example',
    icon: '🔗',
    prev: 'serverDnD',
    next: 'dropRestrictionDnD',
    content: <ServerDnDExample2 />,
  },
  dropRestrictionDnD: {
    id: 'dropRestrictionDnD',
    title: '드롭 제한 DnD',
    description: '특정 영역/조건에서만 드롭이 허용되는 DnD 실전 예제',
    category: 'example',
    icon: '🚫',
    prev: 'serverDnD2',
    next: 'customPreviewDnD',
    content: <DropRestrictionDnDExample />,
  },
  customPreviewDnD: {
    id: 'customPreviewDnD',
    title: '커스텀 드래그 프리뷰 DnD',
    description: '드래그 중 커스텀 미리보기 UI를 제공하는 DnD 실전 예제',
    category: 'example',
    icon: '👁️',
    prev: 'dropRestrictionDnD',
    next: 'keyboardA11yDnD',
    content: <CustomPreviewDnDExample />,
  },
  keyboardA11yDnD: {
    id: 'keyboardA11yDnD',
    title: '키보드 접근성 DnD',
    description: '키보드 내비게이션/스크린리더 등 접근성을 강화한 DnD 실전 예제',
    category: 'example',
    icon: '⌨️',
    prev: 'customPreviewDnD',
    next: 'trashDnD',
    content: <KeyboardA11yDnDExample />,
  },
  trashDnD: {
    id: 'trashDnD',
    title: '휴지통/삭제 DnD',
    description: '드래그로 휴지통/삭제 영역에 아이템을 옮기는 DnD 실전 예제',
    category: 'example',
    icon: '🗑️',
    prev: 'keyboardA11yDnD',
    next: 'multiSelectDnD',
    content: <TrashDnDExample />,
  },
  multiSelectDnD: {
    id: 'multiSelectDnD',
    title: '다중 선택/다중 드래그 DnD',
    description: '여러 아이템을 동시에 선택/드래그하는 DnD 실전 예제',
    category: 'example',
    icon: '🧩',
    prev: 'trashDnD',
    next: 'mobileTouchDnD',
    content: <MultiSelectDnDExample />,
  },
  mobileTouchDnD: {
    id: 'mobileTouchDnD',
    title: '모바일/터치 지원 DnD',
    description: '모바일/터치 환경에서 동작하는 DnD 실전 예제',
    category: 'example',
    icon: '📱',
    prev: 'multiSelectDnD',
    next: 'virtualizedDnD',
    content: <MobileTouchDnDExample />,
  },
  virtualizedDnD: {
    id: 'virtualizedDnD',
    title: '자동 스크롤/가상화 DnD',
    description: '자동 스크롤/가상화 리스트와 결합된 DnD 실전 예제',
    category: 'example',
    icon: '🖱️',
    prev: 'mobileTouchDnD',
    next: 'dynamicForm',
    content: <VirtualizedDnDExample />,
  },
  dynamicForm: {
    id: 'dynamicForm',
    title: '동적 폼(필드 추가/삭제)',
    description: '입력 필드를 동적으로 추가/삭제하는 폼 실전 예제',
    category: 'example',
    icon: '➕',
    prev: 'virtualizedDnD',
    next: 'fileUpload',
    content: <DynamicFormExample />,
  },
  fileUpload: {
    id: 'fileUpload',
    title: '파일 업로드/미리보기',
    description: '파일 업로드 및 미리보기를 제공하는 실전 예제',
    category: 'example',
    icon: '📤',
    prev: 'dynamicForm',
    next: 'asyncValidationForm',
    content: <FileUploadExample />,
  },
  asyncValidationForm: {
    id: 'asyncValidationForm',
    title: '서버 검증/비동기 유효성',
    description: '서버와 연동된 비동기 유효성 검증 폼 실전 예제',
    category: 'example',
    icon: '⏳',
    prev: 'fileUpload',
    next: 'serverSideTable',
    content: <AsyncValidationFormExample />,
  },
  serverSideTable: {
    id: 'serverSideTable',
    title: '서버 사이드 테이블(페이징/정렬/필터)',
    description: '서버와 연동된 테이블(페이징/정렬/필터) 실전 예제',
    category: 'example',
    icon: '🗄️',
    prev: 'asyncValidationForm',
    next: 'virtualizedTable',
    content: <ServerSideTableExample />,
  },
  virtualizedTable: {
    id: 'virtualizedTable',
    title: '대용량/가상화 테이블',
    description: '대용량 데이터/가상화 테이블 실전 예제',
    category: 'example',
    icon: '📊',
    prev: 'serverSideTable',
    next: 'realtimeChart',
    content: <VirtualizedTableExample />, 
  },
  realtimeChart: {
    id: 'realtimeChart',
    title: '실시간 차트',
    description: '실시간 데이터 차트 예제',
    category: 'example',
    icon: '📈',
    prev: 'virtualizedTable',
    next: 'pageTransition',
    content: <RealtimeChartExample />,
  },
  pageTransition: {
    id: 'pageTransition',
    title: '페이지 전환 애니메이션',
    description: '페이지 전환 시 애니메이션 효과 예제',
    category: 'example',
    icon: '🔄',
    prev: 'realtimeChart',
    next: 'skeletonLoading',
    content: <PageTransitionExample />,
  },
  skeletonLoading: {
    id: 'skeletonLoading',
    title: 'Skeleton/로딩',
    description: 'Skeleton UI 및 로딩 상태 예제',
    category: 'example',
    icon: '💀',
    prev: 'pageTransition',
    next: 'keyboardFocusTrap',
    content: <SkeletonLoadingExample />,
  },
  keyboardFocusTrap: {
    id: 'keyboardFocusTrap',
    title: '키보드 포커스 트랩',
    description: '키보드 포커스 트랩/접근성 예제',
    category: 'example',
    icon: '⌨️',
    prev: 'skeletonLoading',
    next: 'i18n',
    content: <KeyboardFocusTrapExample />,
  },
  i18n: {
    id: 'i18n',
    title: 'i18n(다국어)',
    description: '다국어(i18n) 지원 예제',
    category: 'example',
    icon: '🌐',
    prev: 'keyboardFocusTrap',
    next: 'webSocketSync',
    content: <I18nExample />,
  },
  webSocketSync: {
    id: 'webSocketSync',
    title: 'WebSocket 동기화',
    description: 'WebSocket을 활용한 실시간 동기화 예제',
    category: 'example',
    icon: '🔗',
    prev: 'i18n',
    next: 'auth',
    content: <WebSocketSyncExample />,
  },
  auth: {
    id: 'auth',
    title: '인증/인가',
    description: '인증/인가(로그인 등) 실전 예제',
    category: 'example',
    icon: '🔒',
    prev: 'webSocketSync',
    next: null,
    content: <AuthExample />,
  },
  todo: {
    id: 'todo',
    title: 'ToDo 앱 실전 프로젝트',
    description: 'ToDo 앱을 처음부터 완성해가는 실전 프로젝트 강의',
    category: 'realproject',
    icon: '📝',
    prev: null,
    next: null,
    content: <TodoProjectExample />,
  }
};
  



// --- Ant Design Demo Components ---
function AntdModalDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        모달 열기
      </Button>
      <AntdModal open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
        <p>Ant Design Modal 예제입니다.</p>
      </AntdModal>
          </div>
  );
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

// (events 섹션 예제용 컴포넌트 정의)
function InputChangeDemo() {
  const [value, setValue] = React.useState('');
  return (
      <div>
      <Input value={value} onChange={e => setValue(e.target.value)} placeholder="입력하세요" style={{ width: 200, marginRight: 8 }} />
      <p>입력값: {value}</p>
        </div>
  );
}
function FormSubmitDemo() {
  const [msg, setMsg] = React.useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg('폼이 제출되었습니다!');
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Input placeholder="아무거나 입력" style={{ width: 200 }} />
      <Button type="primary" htmlType="submit">제출</Button>
      <p style={{ margin: 0 }}>{msg}</p>
    </form>
  );
}
function CustomEventDemo() {
  return (
    <div onClick={() => alert('부모 div 클릭!')} style={{ padding: 16, background: '#333' }}>
      <Button type="primary" onClick={e => { e.stopPropagation(); alert('버튼만 클릭!'); }}>버튼</Button>
          </div>
  );
}
function EventDelegationDemo() {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON') {
      alert(target.textContent + ' 클릭!');
    }
  };
  return (
    <div onClick={handleClick}>
      <Button type="primary">버튼1</Button>
      <Button type="primary">버튼2</Button>
      <Button type="primary">버튼3</Button>
        </div>
  );
}

// JSX 예제용 데모 컴포넌트 정의
function JSXExpressionDemo() {
  const name = 'React';
  return <h2>안녕하세요, {name}!</h2>;
}
function JSXConditionalDemo() {
  const isLoggedIn = true;
  return (
      <div>
      {isLoggedIn ? <span>환영합니다!</span> : <span>로그인 해주세요.</span>}\n    </div>
  );
}
function JSXListDemo() {
  const fruits = ['사과', '바나나', '오렌지'];
  const icons: Record<string, string> = {
    '사과': '🍎',
    '바나나': '🍌',
    '오렌지': '🍊',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {fruits.map(fruit => (
        <span key={fruit} style={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label={fruit}>{icons[fruit] || '🔹'}</span>
          {fruit}
        </span>
      ))}
    </div>
  );
}
function JSXCompositionDemo() {
  function Welcome(props: { name: string }) {
    return <h3>안녕하세요, {props.name}님!</h3>;
  }
  return (
    <div>
      <Welcome name="홍길동" />
      <Welcome name="React" />
        </div>
  );
}

// Virtual DOM 예제용 데모 컴포넌트 정의
function VDomDirectDemo() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    document.getElementById('direct-dom')!.textContent = 'Count: ' + count;
  }, [count]);
  return (
    <div>
      <Button type="primary" onClick={() => setCount(c => c + 1)} style={{ marginRight: 32 }}>증가</Button>
      <span id="direct-dom">Count: 0</span>
          </div>
  );
}
function VDomDiffDemo() {
  const [list, setList] = React.useState(['A', 'B', 'C']);
  return (
    <div>
      <Button type="primary" onClick={() => setList(['A', 'C', 'B'])} style={{ marginBottom: 12 }}>순서 바꾸기</Button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {list.map(item => (
          <span key={item} style={{ fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span role="img" aria-label={item}>🔄</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// JSX 추가 예제용 데모 컴포넌트 정의
function JSXAndDemo() {
  const hasMessage = true;
  return (
    <div>
      {hasMessage && <span>새로운 메시지가 있습니다!</span>}
        </div>
  );
}
function JSXNullDemo() {
  const visible = false;
  if (!visible) return null;
  return <div>이 내용은 visible이 true일 때만 보입니다.</div>;
}
function JSXNestedListDemo() {
  const categories = [
    { name: '과일', items: ['사과', '바나나'] },
    { name: '채소', items: ['당근', '오이'] },
  ];
  const icons: Record<string, string> = {
    '사과': '🍎', '바나나': '🍌', '당근': '🥕', '오이': '🥒',
  };
  return (
    <div>
      {categories.map(cat => (
        <div key={cat.name} style={{ marginBottom: 8 }}>
          <b>{cat.name}</b>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginLeft: 12 }}>
            {cat.items.map(item => (
              <span key={item} style={{ fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span role="img" aria-label={item}>{icons[item] || '🔹'}</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
          </div>
  );
}
function JSXKeyWarningDemo() {
  const list: string[] = ['A', 'B', 'C'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {list.map((item: string, idx: number) => (
        <span key={idx} style={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label={item}>🔹</span>
          {item}
        </span>
      ))}
        </div>
  );
}

const ListItem = React.memo(function ListItem({ value }: { value: number }) {
  console.log('렌더:', value);
  return <span style={{ marginRight: 12 }}>{value}</span>;
});
function VDomMemoDemo() {
  const [list, setList] = React.useState([1, 2, 3]);
  const shuffle = () => setList(l => [l[2], l[0], l[1]]);
  const increment = (idx: number) => setList(l => l.map((v, i) => i === idx ? v + 1 : v));
  return (
    <div>
      <Button type="primary" onClick={shuffle} style={{ marginRight: 12 }}>순서 바꾸기</Button>
      {list.map((v, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <ListItem value={v} />
          <Button size="small" onClick={() => increment(i)}>+1</Button>
        </span>
      ))}
      <div style={{ color: '#aaa', fontSize: 13, marginTop: 8 }}>
        값이 바뀐 항목만 콘솔에 '렌더:'가 출력됩니다.
      </div>
    </div>
  );
}

function VDomWindowDemo() {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    no: i + 1,
    title: "게시글 제목 " + (i + 1),
    author: "user" + ((i % 10) + 1),
    date: "2024-06-" + String((i % 30) + 1).padStart(2, '0')
  }));
  return (
    <div style={{ width: 600 }}>
      <div style={{ display: 'flex', background: '#222', color: '#fff', fontWeight: 600, padding: '8px 0', borderRadius: '8px 8px 0 0' }}>
        <div style={{ width: 60, textAlign: 'center' }}>번호</div>
        <div style={{ flex: 1 }}>제목</div>
        <div style={{ width: 100, textAlign: 'center' }}>작성자</div>
        <div style={{ width: 120, textAlign: 'center' }}>날짜</div>
      </div>
      <List
        height={300}
        itemCount={items.length}
        itemSize={40}
        width={600}
        style={{ background: '#232323', color: '#eaeaea', borderRadius: '0 0 8px 8px' }}
      >
        {({ index, style }: { index: number; style: React.CSSProperties }) => (
          <div style={{ ...style, display: 'flex', alignItems: 'center', borderBottom: '1px solid #333', padding: '0 0.5em' }}>
            <div style={{ width: 60, textAlign: 'center', color: '#aaa' }}>{items[index].no}</div>
            <div style={{ flex: 1 }}>{items[index].title}</div>
            <div style={{ width: 100, textAlign: 'center', color: '#8fd' }}>{items[index].author}</div>
            <div style={{ width: 120, textAlign: 'center', color: '#ccc' }}>{items[index].date}</div>
          </div>
        )}
      </List>
    </div>
  );
}

// MUI 예제용 컴포넌트 복구
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


