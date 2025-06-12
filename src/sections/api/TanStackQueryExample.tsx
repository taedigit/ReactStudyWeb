import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress, Card, CardContent, Stack, TextField, IconButton, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { ExampleTab } from '../../components/ExampleTab';
import { useQuery, useQueryClient, useMutation, useInfiniteQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface PageData {
  posts: Post[];
  nextPage: number;
  hasMore: boolean;
}

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// 기본 쿼리 예제 컴포넌트
function BasicQueryExample() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=3');
      return data;
    },
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <CircularProgress sx={{ color: '#eaeaea' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography sx={{ color: '#ff6b6b' }}>
        에러가 발생했습니다: {error instanceof Error ? error.message : '알 수 없는 에러'}
      </Typography>
    );
  }

  return (
    <div>
      <Button onClick={() => refetch()} sx={buttonStyle}>
        데이터 새로고침
      </Button>
      <Stack spacing={2} sx={{ mt: 2 }}>
        {data?.map(post => (
          <Card key={post.id} sx={cardStyle}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

// 쿼리 무효화 예제 컴포넌트
function InvalidationExample() {
  const queryClient = useQueryClient();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=3');
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (newPost: Partial<Post>) => {
      const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      setPostTitle('');
      setPostBody('');
    },
  });

  return (
    <div>
      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="제목"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          sx={textFieldStyle}
        />
        <TextField
          label="내용"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          multiline
          rows={3}
          sx={textFieldStyle}
        />
        <Button
          onClick={() => mutation.mutate({ title: postTitle, body: postBody })}
          disabled={mutation.isPending}
          sx={buttonStyle}
        >
          게시물 추가
        </Button>
      </Stack>

      <Typography variant="h6" sx={{ mb: 2 }}>현재 게시물</Typography>
      <Stack spacing={2}>
        {posts?.map(post => (
          <Card key={post.id} sx={cardStyle}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

// 병렬 쿼리 예제 컴포넌트
function ParallelQueriesExample() {
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=2');
      return data;
    },
  });

  const comments = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const { data } = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?_limit=3');
      return data;
    },
  });

  if (posts.isLoading || comments.isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <CircularProgress sx={{ color: '#eaeaea' }} />
      </Box>
    );
  }

  if (posts.error || comments.error) {
    return (
      <Typography sx={{ color: '#ff6b6b' }}>
        에러가 발생했습니다
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant="h6" sx={{ mb: 2 }}>게시물</Typography>
      <Stack spacing={2} sx={{ mb: 4 }}>
        {posts.data?.map(post => (
          <Card key={post.id} sx={cardStyle}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Typography variant="h6" sx={{ mb: 2 }}>댓글</Typography>
      <Stack spacing={2}>
        {comments.data?.map(comment => (
          <Card key={comment.id} sx={cardStyle}>
            <CardContent>
              <Typography variant="subtitle1">{comment.name}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>{comment.email}</Typography>
              <Typography variant="body2">{comment.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

// 무한 스크롤 예제 컴포넌트
function InfiniteScrollExample() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error
  } = useInfiniteQuery<PageData, Error>({
    queryKey: ['infinitePosts'],
    queryFn: async ({ pageParam }) => {
      const { data } = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=3`
      );
      return { 
        posts: data, 
        nextPage: (pageParam as number) + 1, 
        hasMore: (pageParam as number) < 4 
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: PageData) => lastPage.hasMore ? lastPage.nextPage : undefined,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <CircularProgress sx={{ color: '#eaeaea' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography sx={{ color: '#ff6b6b' }}>
        에러가 발생했습니다: {error instanceof Error ? error.message : '알 수 없는 에러'}
      </Typography>
    );
  }

  return (
    <div>
      <Stack spacing={2}>
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.posts.map(post => (
              <Card key={post.id} sx={cardStyle}>
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2">{post.body}</Typography>
                </CardContent>
              </Card>
            ))}
          </React.Fragment>
        ))}
      </Stack>
      
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          sx={{ ...buttonStyle, mt: 2 }}
        >
          {isFetchingNextPage ? '로딩 중...' : '더 보기'}
        </Button>
      )}
    </div>
  );
}

// 낙관적 업데이트 예제 컴포넌트
function OptimisticUpdateExample() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');

  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=3');
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (newTitle: string) => {
      const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/1`, {
        title: newTitle,
      });
      return data;
    },
    onMutate: async (newTitle) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      const previousPosts = queryClient.getQueryData<Post[]>(['posts']);
      
      if (previousPosts) {
        queryClient.setQueryData<Post[]>(['posts'], old => 
          old?.map(post => 
            post.id === 1 ? { ...post, title: newTitle } : post
          )
        );
      }

      return { previousPosts };
    },
    onError: (_err, _newTitle, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(['posts'], context.previousPosts);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return (
    <div>
      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="새 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={textFieldStyle}
        />
        <Button
          onClick={() => {
            mutation.mutate(title);
            setTitle('');
          }}
          disabled={mutation.isPending}
          sx={buttonStyle}
        >
          첫 번째 게시물 제목 수정
        </Button>
      </Stack>

      <Stack spacing={2}>
        {posts?.map(post => (
          <Card key={post.id} sx={cardStyle}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

const exampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: '-2em',
  marginRight: '-2em',
};

const buttonStyle = {
  background: '#232323',
  color: '#eaeaea',
  border: '1px solid #444',
  borderRadius: '6px',
  padding: '0.5em 1.2em',
  fontSize: '1em',
  outline: 'none',
  cursor: 'pointer',
  transition: 'background 0.15s',
  '&:hover': {
    background: '#333',
  }
};

const cardStyle = {
  background: '#232323',
  color: '#eaeaea',
  border: '1px solid #444',
  borderRadius: '8px',
  '& .MuiCardContent-root': {
    padding: '1.2em',
  },
  '& .MuiTypography-root': {
    color: '#eaeaea',
  },
  '& .MuiTypography-body2': {
    color: '#b5e853',
  }
};

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#eaeaea',
    '& fieldset': {
      borderColor: '#444',
    },
    '&:hover fieldset': {
      borderColor: '#666',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#888',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#888',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#aaa',
  },
};

const tooltipStyle = {
  tooltip: {
    backgroundColor: '#2d2d2d',
    color: '#eaeaea',
    maxWidth: 'none',
    padding: '12px 16px',
    fontSize: '14px',
    border: '1px solid #444',
    '& .MuiTooltip-arrow': {
      color: '#2d2d2d'
    }
  }
};

const TanStackQueryExample: React.FC = () => {
  const descriptions = {
    basicQuery: `• useQuery 훅
  - 서버 데이터를 가져오고 캐싱하는 핵심 기능
  - 자동 백그라운드 리프레시로 데이터를 최신으로 유지
  - 중복 요청 자동 제거 (Deduplication)

• queryKey ['posts']
  - 캐시 키로 사용되어 데이터를 고유하게 식별
  - 배열 형태로 동적 값 포함 가능 (예: ['posts', postId])
  - 같은 키를 사용하는 컴포넌트 간 데이터 공유

• queryFn
  - 실제 데이터를 가져오는 비동기 함수
  - Promise를 반환해야 함
  - axios, fetch 등 원하는 방식으로 구현 가능

• 반환값
  - data: 가져온 데이터
  - isLoading: 초기 로딩 상태
  - isFetching: 백그라운드 리프레시 상태
  - error: 에러 객체
  - refetch: 수동 재요청 함수

• 자동 기능
  - 컴포넌트 마운트 시 자동 요청
  - 윈도우 포커스 시 자동 재검증
  - 네트워크 재연결 시 자동 재시도
  - 에러 발생 시 자동 재시도 (기본 3회)`,

    invalidation: `• useMutation 훅
  - 서버 데이터를 변경하는 작업 처리 (POST, PUT, DELETE 등)
  - 낙관적 업데이트와 롤백 지원
  - 여러 변이 요청 자동 직렬화

• mutationFn
  - 실제 서버에 데이터를 전송하는 함수
  - 변경할 데이터를 매개변수로 받음
  - Promise를 반환해야 함

• Mutation 생명주기
  1. onMutate: 변이 시작 전 실행
     - 낙관적 업데이트 구현
     - 이전 상태 저장
  2. onSuccess: 변이 성공 시 실행
     - 캐시 무효화
     - 성공 메시지 표시
  3. onError: 변이 실패 시 실행
     - 이전 상태로 롤백
     - 에러 처리
  4. onSettled: 성공/실패 상관없이 실행
     - 클린업 작업

• invalidateQueries
  - 특정 쿼리의 캐시를 무효화
  - 관련된 모든 쿼리 자동 재요청
  - exact, refetchType 등 옵션 지원

• 실시간 동기화
  - 여러 컴포넌트 간 상태 자동 동기화
  - 낙관적 업데이트로 즉각적인 UI 반응
  - 에러 시 자동 롤백으로 안정성 확보`,

    parallelQueries: `• 병렬 쿼리의 장점
  - 여러 데이터를 동시에 효율적으로 로딩
  - 각 쿼리의 독립적인 상태 관리
  - 네트워크 요청 최적화

• 구현 방식
  1. 개별 useQuery 사용
     - 각각의 데이터에 대해 별도의 useQuery 호출
     - 간단하고 직관적인 구현
  2. useQueries 사용
     - 동적인 수의 쿼리를 배열로 처리
     - 모든 쿼리의 상태를 배열로 반환

• 캐시 관리
  - 각 쿼리별 독립적인 캐시
  - queryKey 기반의 세분화된 캐시 제어
  - 선택적 리프레시 가능

• 에러 처리
  - 각 쿼리별 독립적인 에러 처리
  - 일부 실패 시에도 다른 쿼리는 정상 동작
  - 재시도 정책 개별 설정 가능

• 성능 최적화
  - 자동 요청 중복 제거
  - 불필요한 리렌더링 방지
  - 메모리 사용 최적화

• 사용 시나리오
  - 서로 독립적인 여러 API 호출
  - 대시보드의 여러 위젯 데이터 로딩
  - 상세 페이지의 관련 데이터 로딩`,

    infiniteScroll: `• useInfiniteQuery 특징
  - 페이지네이션된 데이터의 효율적인 관리
  - 무한 스크롤/더보기 UI 구현에 최적화
  - 자동 캐시 관리 및 상태 추적

• 주요 매개변수
  1. queryFn
     - pageParam을 받아 해당 페이지 데이터 요청
     - 페이지 메타데이터 포함하여 반환
  2. getNextPageParam
     - 다음 페이지 존재 여부 확인
     - 다음 pageParam 값 결정
  3. initialPageParam
     - 첫 페이지 요청 시 사용할 값

• 반환값
  - data.pages: 모든 페이지 데이터 배열
  - data.pageParams: 각 페이지의 매개변수
  - hasNextPage: 추가 페이지 존재 여부
  - fetchNextPage: 다음 페이지 로드 함수
  - isFetchingNextPage: 추가 페이지 로딩 상태

• 최적화 기능
  - 이전 페이지 캐시 유지
  - 스크롤 위치 보존
  - 중복 요청 방지
  - 백그라운드 업데이트

• 고급 기능
  - 양방향 무한 스크롤 지원
  - 페이지 데이터 선택적 업데이트
  - 커스텀 로딩 UI 구현
  - 에러 바운더리 통합`,

    optimisticUpdate: `• 낙관적 업데이트 개념
  - 서버 응답 전 UI 즉시 업데이트
  - 사용자 경험 극대화
  - 에러 시 자동 롤백

• 구현 단계
  1. onMutate (변이 시작 전)
     - 진행 중인 쿼리 취소
     - 현재 캐시 데이터 백업
     - 낙관적으로 캐시 업데이트
     - 컨텍스트 객체 반환

  2. mutationFn (실제 서버 요청)
     - API 호출 수행
     - 응답 데이터 반환

  3. onError (에러 발생 시)
     - 백업된 데이터로 롤백
     - 에러 메시지 표시
     - 재시도 로직 구현

  4. onSuccess (성공 시)
     - 캐시 최종 업데이트
     - 관련 쿼리 무효화
     - 성공 메시지 표시

  5. onSettled (완료 시)
     - 최종 정리 작업
     - 리소스 해제
     - 상태 리셋

• 고려사항
  - 동시성 제어
  - 네트워크 지연 처리
  - 에러 복구 전략
  - 사용자 피드백

• 장점
  - 즉각적인 UI 응답성
  - 향상된 사용자 경험
  - 안정적인 에러 처리
  - 자동화된 상태 관리`
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ maxWidth: '100%', mx: 'auto', p: 3, color: '#eaeaea' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <h4 style={{ margin: 0 }}>1. 기본 쿼리</h4>
          <Tooltip 
            title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.basicQuery}</pre>}
            placement="right-start"
            arrow
            componentsProps={{
              tooltip: {
                sx: tooltipStyle.tooltip
              }
            }}
          >
            <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <div style={exampleBlockStyle}>
          <ExampleTab
            example={<BasicQueryExample />}
            code={`import { useQuery } from '@tanstack/react-query'

const { data, isLoading, error } = useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    const { data } = await axios.get('https://api.example.com/posts');
    return data;
  },
});`}
            showCaret={false}
            desc="TanStack Query를 사용한 기본적인 데이터 페칭 예제입니다."
          />
        </div>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
          <h4 style={{ margin: 0 }}>2. 쿼리 무효화</h4>
          <Tooltip 
            title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.invalidation}</pre>}
            placement="right-start"
            arrow
            componentsProps={{
              tooltip: {
                sx: tooltipStyle.tooltip
              }
            }}
          >
            <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <div style={exampleBlockStyle}>
          <ExampleTab
            example={<InvalidationExample />}
            code={`const queryClient = useQueryClient();

const mutation = useMutation({
  mutationFn: async (newPost) => {
    const { data } = await axios.post('/api/posts', newPost);
    return data;
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});`}
            showCaret={false}
            desc="데이터 변경 후 캐시를 무효화하고 새로운 데이터를 가져오는 예제입니다."
          />
        </div>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
          <h4 style={{ margin: 0 }}>3. 병렬 쿼리</h4>
          <Tooltip 
            title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.parallelQueries}</pre>}
            placement="right-start"
            arrow
            componentsProps={{
              tooltip: {
                sx: tooltipStyle.tooltip
              }
            }}
          >
            <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <div style={exampleBlockStyle}>
          <ExampleTab
            example={<ParallelQueriesExample />}
            code={`// 여러 쿼리 동시 실행
const posts = useQuery({
  queryKey: ['posts'],
  queryFn: () => fetchPosts(),
});

const comments = useQuery({
  queryKey: ['comments'],
  queryFn: () => fetchComments(),
});`}
            showCaret={false}
            desc="여러 데이터를 동시에 가져오는 병렬 쿼리 예제입니다."
          />
        </div>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
          <h4 style={{ margin: 0 }}>4. 무한 스크롤</h4>
          <Tooltip 
            title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.infiniteScroll}</pre>}
            placement="right-start"
            arrow
            componentsProps={{
              tooltip: {
                sx: tooltipStyle.tooltip
              }
            }}
          >
            <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <div style={exampleBlockStyle}>
          <ExampleTab
            example={<InfiniteScrollExample />}
            code={`const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery({
  queryKey: ['infinitePosts'],
  queryFn: ({ pageParam = 1 }) => 
    fetchPostPage(pageParam),
  getNextPageParam: (lastPage) => 
    lastPage.hasMore ? lastPage.nextPage : undefined,
});`}
            showCaret={false}
            desc="페이지네이션된 데이터를 무한 스크롤로 불러오는 예제입니다."
          />
        </div>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
          <h4 style={{ margin: 0 }}>5. 낙관적 업데이트</h4>
          <Tooltip 
            title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.optimisticUpdate}</pre>}
            placement="right-start"
            arrow
            componentsProps={{
              tooltip: {
                sx: tooltipStyle.tooltip
              }
            }}
          >
            <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <div style={exampleBlockStyle}>
          <ExampleTab
            example={<OptimisticUpdateExample />}
            code={`const mutation = useMutation({
  mutationFn: updatePost,
  onMutate: async (newPost) => {
    await queryClient.cancelQueries({ queryKey: ['posts'] });
    const previousPosts = queryClient.getQueryData(['posts']);
    
    queryClient.setQueryData(['posts'], (old) => [...old, newPost]);
    
    return { previousPosts };
  },
  onError: (err, newPost, context) => {
    queryClient.setQueryData(['posts'], context.previousPosts);
  },
});`}
            showCaret={false}
            desc="서버 응답을 기다리지 않고 UI를 즉시 업데이트하는 예제입니다."
          />
        </div>
      </Box>
    </QueryClientProvider>
  );
};

export default TanStackQueryExample; 