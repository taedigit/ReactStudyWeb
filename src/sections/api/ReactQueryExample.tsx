import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ExampleTab } from '../../components/ExampleTab';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5분
    },
  },
});

const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
  return data;
};

const addTodo = async (title: string): Promise<Todo> => {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false,
  });
  return data;
};

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

function TodoExample() {
  const queryClient = useQueryClient();

  // Todos 조회 쿼리
  const { data: todos, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  // Todo 추가 뮤테이션
  const { mutate: addTodoMutation } = useMutation({
    mutationFn: (title: string) => addTodo(title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleAddTodo = () => {
    const title = `새로운 Todo ${Date.now()}`;
    addTodoMutation(title);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
        <CircularProgress sx={{ color: '#eaeaea' }} />
        <Typography sx={{ color: '#eaeaea' }}>데이터를 불러오는 중...</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography sx={{ color: '#ff6b6b' }}>
        에러 발생: {error instanceof Error ? error.message : '알 수 없는 에러'}
      </Typography>
    );
  }

  return (
    <div style={{ color: '#eaeaea' }}>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Todo 목록</Typography>
          <Button
            variant="contained"
            onClick={handleAddTodo}
            sx={buttonStyle}
          >
            Todo 추가
          </Button>
        </Box>

        {todos?.map((todo) => (
          <Card key={todo.id} sx={cardStyle}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography>{todo.title}</Typography>
                <Typography
                  sx={{
                    background: todo.completed ? '#2ea043' : '#6e7681',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.875rem',
                  }}
                >
                  {todo.completed ? '완료' : '미완료'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

const ReactQueryExample: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>React Query를 사용한 데이터 관리</Typography>
          <ExampleTab
            example={<TodoExample />}
            code={`// React Query 훅 사용
const { data, isLoading } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos
});

// 데이터 변경
const { mutate } = useMutation({
  mutationFn: addTodo,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  }
});`}
            desc={`[React Query 특징]
- 서버 상태 관리를 위한 강력한 라이브러리입니다.
- 자동 캐싱과 백그라운드 업데이트를 지원합니다.
- 로딩/에러 상태를 쉽게 처리할 수 있습니다.
- 데이터 동기화와 실시간 업데이트가 간편합니다.

[실무 팁]
- queryKey를 잘 설계하여 캐시를 효율적으로 관리하세요.
- invalidateQueries로 관련 데이터를 자동으로 갱신할 수 있습니다.
- staleTime과 cacheTime 설정으로 성능을 최적화할 수 있습니다.
- devtools를 활용하여 쿼리 상태를 모니터링하세요.`}
          />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default ReactQueryExample; 