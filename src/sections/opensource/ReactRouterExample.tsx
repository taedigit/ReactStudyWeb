import React, { useState, createContext, useContext } from 'react';
import { ExampleTab } from '../../components/ExampleTab';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

// 예제용 컴포넌트들
const Home = () => <div>홈 페이지</div>;
const About = () => <div>소개 페이지</div>;
const Contact = () => <div>연락처 페이지</div>;
const Electronics = () => (
  <div style={{ color: '#fff' }}>
    <h3 style={{ margin: '0 0 1rem 0' }}>전자제품 카테고리</h3>
    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
      <li>스마트폰</li>
      <li>노트북</li>
      <li>태블릿</li>
    </ul>
  </div>
);
const Clothing = () => (
  <div style={{ color: '#fff' }}>
    <h3 style={{ margin: '0 0 1rem 0' }}>의류 카테고리</h3>
    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
      <li>티셔츠</li>
      <li>바지</li>
      <li>자켓</li>
    </ul>
  </div>
);
const Products = () => (
  <div style={{ padding: '1rem', background: '#2a2d2e', borderRadius: '4px' }}>
    <h2 style={{ color: '#fff', marginTop: 0 }}>제품 목록</h2>
    <nav style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
      <Button
        component={Link}
        to="electronics"
        variant="contained"
        color="primary"
        size="small"
      >
        전자제품
      </Button>
      <Button
        component={Link}
        to="clothing"
        variant="contained"
        color="primary"
        size="small"
      >
        의류
      </Button>
    </nav>
    <div style={{ background: '#1e2122', padding: '1rem', borderRadius: '4px' }}>
      <Outlet />
    </div>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>제품 상세 정보 (ID: {id})</h2>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => navigate(-1)}
      >
        뒤로 가기
      </Button>
    </div>
  );
};

const Dashboard = () => (
  <div style={{ padding: '1rem', background: '#2a2d2e', borderRadius: '4px', color: '#fff' }}>
    <h2 style={{ margin: '0 0 1rem 0' }}>대시보드 (보호된 페이지)</h2>
    <p>이 페이지는 로그인한 사용자만 볼 수 있습니다.</p>
  </div>
);

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

// 인증 컨텍스트 생성
const AuthContext = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuthenticated } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate(from, { replace: true });
  };

  return (
    <div style={{ padding: '1rem', background: '#2a2d2e', borderRadius: '4px', color: '#fff' }}>
      <h2 style={{ margin: '0 0 1rem 0' }}>로그인</h2>
      <p>보호된 페이지에 접근하기 위해 로그인이 필요합니다.</p>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleLogin}
      >
        로그인하기
      </Button>
    </div>
  );
};

// 보호된 라우트 컴포넌트
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/protected/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

// 예제 코드 문자열
const basicRoutingCode = `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/contact">연락처</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`;

const nestedRoutingCode = `import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h2>제품 목록</h2>
      <nav>
        <Link to="electronics">전자제품</Link>
        <Link to="clothing">의류</Link>
      </nav>

      <Outlet /> {/* 중첩된 라우트가 렌더링되는 위치 */}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="products" element={<Products />}>
        <Route path="electronics" element={<Electronics />} />
        <Route path="clothing" element={<Clothing />} />
      </Route>
    </Routes>
  );
}`;

const routeParamsCode = `import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); // URL 파라미터 가져오기
  const navigate = useNavigate(); // 프로그래밍 방식의 네비게이션

  return (
    <div>
      <h2>제품 상세 정보 (ID: {id})</h2>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="product/:id" element={<ProductDetail />} />
    </Routes>
  );
}`;

const protectedRouteCode = `import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = useAuth(); // 인증 상태 확인
  const location = useLocation();

  if (!isAuthenticated) {
    // 로그인 페이지로 리다이렉트하면서 이전 위치 저장
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}`;

const AuthExample = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/protected/login');
  };

  return (
    <div>
      <nav style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <Button
          component={Link}
          to="/protected/dashboard"
          variant="contained"
          color="primary"
          size="small"
        >
          대시보드
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleLogout}
        >
          로그아웃
        </Button>
      </nav>
      <Routes>
        <Route path="/protected/login" element={<Login />} />
        <Route
          path="/protected/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

const ReactRouterExample: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <div>
          <div style={stateExampleBlockStyle}>
            <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 라우팅 (Basic Routing)</Typography>
            <ExampleTab
              example={
                <div>
                  <nav style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                    <Button
                      component={Link}
                      to="/basic"
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      홈
                    </Button>
                    <Button
                      component={Link}
                      to="/basic/about"
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      소개
                    </Button>
                    <Button
                      component={Link}
                      to="/basic/contact"
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      연락처
                    </Button>
                  </nav>

                  <Routes>
                    <Route path="/basic" element={<Home />} />
                    <Route path="/basic/about" element={<About />} />
                    <Route path="/basic/contact" element={<Contact />} />
                  </Routes>
                </div>
              }
              code={basicRoutingCode}
              desc={`React Router의 기본적인 라우팅 설정 방법입니다.

주요 컴포넌트:
• BrowserRouter: 라우팅 기능을 활성화하는 최상위 컴포넌트
• Routes: 여러 Route를 그룹화하고 관리하는 컨테이너
• Route: 특정 경로(path)에 대한 컴포넌트를 매핑
• Link: 클릭 시 다른 경로로 이동하는 네비게이션 컴포넌트

사용 예시:
• <Route path="/" element={<Home />} /> → 홈 페이지 경로 설정
• <Link to="/about"> → '/about' 경로로 이동하는 링크 생성

장점:
• 새로고침 없는 페이지 전환 (SPA)
• 브라우저 히스토리 관리 자동화
• 북마크 가능한 URL 구조`}
            />
          </div>

          <div style={stateExampleBlockStyle}>
            <Typography variant="h6" sx={{ mb: 2 }}>2. 중첩 라우팅 (Nested Routing)</Typography>
            <ExampleTab
              example={
                <div>
                  <nav style={{ marginBottom: '1rem' }}>
                    <Button
                      component={Link}
                      to="/nested"
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      제품 목록 보기
                    </Button>
                  </nav>
                  <Routes>
                    <Route path="/nested" element={<Products />}>
                      <Route path="electronics" element={<Electronics />} />
                      <Route path="clothing" element={<Clothing />} />
                    </Route>
                  </Routes>
                </div>
              }
              code={nestedRoutingCode}
              desc={`하나의 라우트 안에 여러 자식 라우트를 중첩하여 구현하는 방법입니다.

핵심 요소:
• Outlet: 부모 라우트 내에서 자식 라우트가 렌더링될 위치를 지정
• 중첩된 Route: 부모 Route 내부에 정의된 자식 Route들
• 상대 경로: 자식 라우트에서는 부모 경로를 기준으로 상대 경로 사용

구현 예시:
• 부모: /products → 제품 목록 페이지
• 자식: /products/electronics → 전자제품 카테고리
• 자식: /products/clothing → 의류 카테고리

활용 사례:
• 카테고리/서브카테고리 구조
• 사이드바가 있는 대시보드
• 탭 기반 인터페이스`}
            />
          </div>

          <div style={stateExampleBlockStyle}>
            <Typography variant="h6" sx={{ mb: 2 }}>3. 라우트 파라미터 (Route Parameters)</Typography>
            <ExampleTab
              example={
                <div>
                  <nav style={{ marginBottom: '1rem' }}>
                    <Button
                      component={Link}
                      to="/params/123"
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      제품 123 보기
                    </Button>
                  </nav>
                  <Routes>
                    <Route path="/params/:id" element={<ProductDetail />} />
                  </Routes>
                </div>
              }
              code={routeParamsCode}
              desc={`URL을 통해 동적 데이터를 전달하고 활용하는 방법입니다.

주요 Hook과 기능:
• useParams(): URL 파라미터를 객체로 반환
• useNavigate(): 프로그래밍 방식의 페이지 이동 제공
• 동적 세그먼트: ':id'와 같은 형식으로 동적 경로 정의

사용 예시:
• /product/:id → /product/123 형태로 접근
• const { id } = useParams(); → URL의 id 값 추출
• navigate(-1) → 이전 페이지로 이동

실제 활용:
• 상품 상세 페이지
• 사용자 프로필 페이지
• 게시글 상세 보기`}
            />
          </div>

          <div style={stateExampleBlockStyle}>
            <Typography variant="h6" sx={{ mb: 2 }}>4. 보호된 라우트 (Protected Route)</Typography>
            <ExampleTab
              example={<AuthExample />}
              code={protectedRouteCode}
              desc={`인증이 필요한 페이지에 대한 접근을 제어하는 방법입니다.

핵심 컴포넌트와 Hook:
• Navigate: 조건에 따라 다른 경로로 리다이렉트
• useLocation: 현재 위치 정보 접근
• 커스텀 PrivateRoute: 인증 여부를 확인하고 라우팅 제어

동작 방식:
1. 사용자가 보호된 경로 접근 시도
2. 인증 상태 확인
3. 미인증 시 로그인 페이지로 리다이렉트
4. 인증 시 요청한 페이지 표시

구현 특징:
• 이전 위치 기억 (state.from)
• 자동 리다이렉션
• 조건부 렌더링

활용 사례:
• 관리자 대시보드
• 개인정보 설정 페이지
• 결제 프로세스`}
            />
          </div>
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default ReactRouterExample; 