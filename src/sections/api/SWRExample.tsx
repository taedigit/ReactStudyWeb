import React from 'react';
import useSWR, { SWRConfig, useSWRConfig } from 'swr';
import { Box, Typography, Button, CircularProgress, TextField } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const swrExampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

const descriptions = {
  basicFetching: `SWR의 기본적인 데이터 페칭 방법을 보여줍니다.
- useSWR 훅을 사용하여 데이터를 가져옵니다.
- 자동으로 로딩과 에러 상태를 처리합니다.
- 캐시된 데이터를 즉시 보여주고, 백그라운드에서 갱신합니다.`,
  
  conditionalFetching: `조건부 데이터 페칭 예제입니다.
- 특정 조건에 따라 데이터를 페칭할 수 있습니다.
- null을 반환하면 요청이 시작되지 않습니다.
- 사용자 입력이나 상태에 따라 동적으로 페칭할 수 있습니다.`,
  
  mutationAndRevalidation: `데이터 변경과 재검증 예제입니다.
- mutate 함수를 사용하여 로컬 데이터를 업데이트합니다.
- 낙관적 업데이트로 즉각적인 UI 반응을 제공합니다.
- 자동으로 데이터를 재검증하여 최신 상태를 유지합니다.`,
  
  globalConfiguration: `전역 설정과 에러 처리 예제입니다.
- SWRConfig를 사용하여 전역 설정을 관리합니다.
- 공통 fetcher 함수를 설정할 수 있습니다.
- 재시도, 에러 처리 등의 동작을 커스터마이즈할 수 있습니다.`,
  
  pagination: `페이지네이션과 무한 스크롤 예제입니다.
- useSWR을 사용한 페이지네이션 구현
- 다음 페이지 프리페칭으로 UX 개선
- 무한 스크롤 구현 방법`
};

// 기본 fetcher 함수
const fetcher = (url: string) => fetch(url).then(res => res.json());

// 기본 데이터 페칭 예제
const BasicFetchingDemo = () => {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/users/1',
    fetcher
  );

  if (error) return <div>데이터 로딩 중 에러가 발생했습니다.</div>;
  if (isLoading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="body1" gutterBottom>사용자 정보:</Typography>
      <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </Box>
  );
};

// 조건부 페칭 예제
const ConditionalFetchingDemo = () => {
  const [userId, setUserId] = React.useState('');
  const { data, error, isLoading } = useSWR(
    userId ? `https://jsonplaceholder.typicode.com/users/${userId}` : null,
    fetcher
  );

  return (
    <Box>
      <TextField
        type="number"
        label="사용자 ID 입력"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        size="small"
        sx={{ mb: 2 }}
      />
      {isLoading && <CircularProgress />}
      {error && <Typography color="error">에러가 발생했습니다.</Typography>}
      {data && (
        <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Box>
  );
};

// 데이터 변경과 재검증 예제
const MutationDemo = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR('/api/user', fetcher);

  const updateUser = async () => {
    try {
      // 낙관적 업데이트
      mutate('/api/user', { ...data, name: '새로운 이름' }, false);
      
      // 실제 API 호출 (예시)
      // await fetch('/api/user', {
      //   method: 'PUT',
      //   body: JSON.stringify({ name: '새로운 이름' })
      // });

      // 데이터 재검증
      mutate('/api/user');
    } catch (error) {
      console.error('업데이트 실패:', error);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={updateUser} sx={{ mb: 2 }}>
        사용자 이름 업데이트
      </Button>
      {data && (
        <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Box>
  );
};

// 전역 설정 예제
const GlobalConfigDemo = () => {
  return (
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
        onError: (error) => {
          console.error('SWR 에러:', error);
        }
      }}
    >
      <Box>
        <Typography variant="body1" gutterBottom>3초마다 자동으로 데이터를 갱신합니다.</Typography>
        <BasicFetchingDemo />
      </Box>
    </SWRConfig>
  );
};

// 페이지네이션 예제
const PaginationDemo = () => {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`,
    fetcher
  );

  return (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
        <Button
          variant="outlined"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          이전
        </Button>
        <Button
          variant="outlined"
          onClick={() => setPage(p => p + 1)}
          disabled={!data || data.length < 5}
        >
          다음
        </Button>
      </Box>

      {isLoading && <CircularProgress />}
      {error && <Typography color="error">에러가 발생했습니다.</Typography>}
      {data && data.map((post: any) => (
        <Box key={post.id} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: '4px' }}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">{post.body}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export const SWRExample = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        SWR 예제
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        SWR은 React Hooks를 위한 데이터 페칭 라이브러리입니다.
        "stale-while-revalidate"라는 HTTP 캐시 무효화 전략에서 이름을 따왔으며,
        캐시된 데이터를 먼저 반환한 후 백그라운드에서 데이터를 재검증하는 방식으로 동작합니다.
      </Typography>

      <div style={swrExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 데이터 페칭</Typography>
        <ExampleTab
          example={<BasicFetchingDemo />}
          code={`const BasicFetchingDemo = () => {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/users/1',
    fetcher
  );

  if (error) return <div>데이터 로딩 중 에러가 발생했습니다.</div>;
  if (isLoading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="body1" gutterBottom>사용자 정보:</Typography>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </Box>
  );
};`}
          desc={descriptions.basicFetching}
        />
      </div>

      <div style={swrExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 조건부 데이터 페칭</Typography>
        <ExampleTab
          example={<ConditionalFetchingDemo />}
          code={`const ConditionalFetchingDemo = () => {
  const [userId, setUserId] = React.useState('');
  const { data, error, isLoading } = useSWR(
    userId ? \`https://jsonplaceholder.typicode.com/users/\${userId}\` : null,
    fetcher
  );

  return (
    <Box>
      <TextField
        type="number"
        label="사용자 ID 입력"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      {isLoading && <CircularProgress />}
      {error && <Typography color="error">에러가 발생했습니다.</Typography>}
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </Box>
  );
};`}
          desc={descriptions.conditionalFetching}
        />
      </div>

      <div style={swrExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 데이터 변경과 재검증</Typography>
        <ExampleTab
          example={<MutationDemo />}
          code={`const MutationDemo = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR('/api/user', fetcher);

  const updateUser = async () => {
    try {
      // 낙관적 업데이트
      mutate('/api/user', { ...data, name: '새로운 이름' }, false);
      
      // 실제 API 호출 (예시)
      // await fetch('/api/user', {
      //   method: 'PUT',
      //   body: JSON.stringify({ name: '새로운 이름' })
      // });

      // 데이터 재검증
      mutate('/api/user');
    } catch (error) {
      console.error('업데이트 실패:', error);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={updateUser}>
        사용자 이름 업데이트
      </Button>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </Box>
  );
};`}
          desc={descriptions.mutationAndRevalidation}
        />
      </div>

      <div style={swrExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 전역 설정</Typography>
        <ExampleTab
          example={<GlobalConfigDemo />}
          code={`const GlobalConfigDemo = () => {
  return (
    <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => 
          fetch(resource, init).then(res => res.json()),
        onError: (error) => {
          console.error('SWR 에러:', error);
        }
      }}
    >
      <Box>
        <Typography>3초마다 자동으로 데이터를 갱신합니다.</Typography>
        <BasicFetchingDemo />
      </Box>
    </SWRConfig>
  );
};`}
          desc={descriptions.globalConfiguration}
        />
      </div>

      <div style={swrExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 페이지네이션</Typography>
        <ExampleTab
          example={<PaginationDemo />}
          code={`const PaginationDemo = () => {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useSWR(
    \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=5\`,
    fetcher
  );

  return (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
        <Button
          variant="outlined"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          이전
        </Button>
        <Button
          variant="outlined"
          onClick={() => setPage(p => p + 1)}
          disabled={!data || data.length < 5}
        >
          다음
        </Button>
      </Box>

      {isLoading && <CircularProgress />}
      {error && <Typography color="error">에러가 발생했습니다.</Typography>}
      {data && data.map((post) => (
        <Box key={post.id} sx={{ mb: 2, p: 2, border: '1px solid #ddd' }}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2">{post.body}</Typography>
        </Box>
      ))}
    </Box>
  );
};`}
          desc={descriptions.pagination}
        />
      </div>
    </Box>
  );
};

export default SWRExample; 