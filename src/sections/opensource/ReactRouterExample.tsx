import React from 'react';
import { ExampleTab } from '../../components/ExampleTab';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

// 예제용 컴포넌트들
const Home = () => <div>홈 페이지</div>;
const About = () => <div>소개 페이지</div>;
const Contact = () => <div>연락처 페이지</div>;
const Electronics = () => <div>전자제품 페이지</div>;
const Clothing = () => <div>의류 페이지</div>;
const Products = () => (
  <div>
    <h2>제품 목록</h2>
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="electronics" style={{ marginRight: '1rem' }}>전자제품</Link>
      <Link to="clothing">의류</Link>
    </nav>
    <Outlet />
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>제품 상세 정보 (ID: {id})</h2>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

const Dashboard = () => <div>대시보드 페이지</div>;

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

// 보호된 라우트 컴포넌트
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = false; // 실제로는 인증 상태를 확인
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
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

const ReactRouterExample: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 라우팅 (Basic Routing)</Typography>
          <ExampleTab
            example={
              <div>
                <nav style={{ marginBottom: '1rem' }}>
                  <Link to="/basic" style={{ marginRight: '1rem' }}>홈</Link>
                  <Link to="/basic/about" style={{ marginRight: '1rem' }}>소개</Link>
                  <Link to="/basic/contact">연락처</Link>
                </nav>

                <Routes>
                  <Route path="/basic" element={<Home />} />
                  <Route path="/basic/about" element={<About />} />
                  <Route path="/basic/contact" element={<Contact />} />
                </Routes>
              </div>
            }
            code={basicRoutingCode}
            desc="React Router의 기본적인 라우팅 설정 방법입니다. BrowserRouter, Routes, Route 컴포넌트를 사용하여 페이지 라우팅을 구현합니다."
          />
        </div>

        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. 중첩 라우팅 (Nested Routing)</Typography>
          <ExampleTab
            example={
              <div>
                <Routes>
                  <Route path="/nested" element={<Products />}>
                    <Route path="electronics" element={<Electronics />} />
                    <Route path="clothing" element={<Clothing />} />
                  </Route>
                </Routes>
              </div>
            }
            code={nestedRoutingCode}
            desc="Outlet 컴포넌트를 사용하여 중첩된 라우트를 구현하는 방법입니다. 부모 라우트 내에서 자식 라우트를 렌더링할 수 있습니다."
          />
        </div>

        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. 라우트 파라미터 (Route Parameters)</Typography>
          <ExampleTab
            example={
              <div>
                <nav style={{ marginBottom: '1rem' }}>
                  <Link to="/params/123">제품 123 보기</Link>
                </nav>
                <Routes>
                  <Route path="/params/:id" element={<ProductDetail />} />
                </Routes>
              </div>
            }
            code={routeParamsCode}
            desc="useParams와 useNavigate 훅을 사용하여 동적 라우팅과 프로그래밍 방식의 네비게이션을 구현하는 방법입니다."
          />
        </div>

        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 보호된 라우트 (Protected Route)</Typography>
          <ExampleTab
            example={
              <div>
                <nav style={{ marginBottom: '1rem' }}>
                  <Link to="/protected/dashboard">대시보드로 이동</Link>
                </nav>
                <Routes>
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
            }
            code={protectedRouteCode}
            desc="인증이 필요한 페이지에 대한 접근을 제어하는 방법입니다. Navigate 컴포넌트를 사용하여 인증되지 않은 사용자를 리다이렉트합니다."
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default ReactRouterExample; 