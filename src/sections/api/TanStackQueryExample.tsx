import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress, Card, CardContent, Stack, TextField } from '@mui/material';
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

const buttonStyle = {
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
  '&:hover': {
    background: '#333',
  }
};

const cardStyle = {
  background: '#232323',
  color: '#eaeaea',
  border: '1px solid #444',
  borderRadius: '8px',
  marginBottom: '1em',
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
      borderColor: '#b5e853',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#999',
    '&.Mui-focused': {
      color: '#b5e853',
    },
  },
};

const TanStackQueryExample: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 쿼리</Typography>
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
            desc="TanStack Query를 사용한 기본적인 데이터 페칭 예제입니다. 자동 캐싱과 재시도 기능을 제공합니다."
          />
        </div>

        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. 쿼리 무효화</Typography>
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
            desc="데이터 변경 후 캐시를 무효화하고 새로운 데이터를 가져오는 예제입니다."
          />
        </div>

        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. 병렬 쿼리</Typography>
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
            desc="여러 데이터를 동시에 가져오는 병렬 쿼리 예제입니다."
          />
        </div>

        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 무한 스크롤</Typography>
          <ExampleTab
            example={<InfiniteScrollExample />}
            code={`const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: ({ pageParam = 1 }) => fetchPostPage(pageParam),
  getNextPageParam: (lastPage) => lastPage.nextPage,
});`}
            desc="무한 스크롤을 구현하는 예제입니다. 페이지 단위로 데이터를 자동으로 관리합니다."
          />
        </div>

        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>5. 낙관적 업데이트</Typography>
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
            desc="서버 응답을 기다리지 않고 UI를 즉시 업데이트하는 예제입니다."
          />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default TanStackQueryExample; 