import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ExampleTab } from '../../components/ExampleTab';
import axios from 'axios';
import React from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

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
    onSuccess: (newTodo) => {
      // Optimistic update: 새 Todo를 목록에 바로 추가
      queryClient.setQueryData(['todos'], (old: Todo[] = []) => [newTodo, ...old]);
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

function TodoExampleVanilla() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [adding, setAdding] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => res.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  const handleAddTodo = () => {
    setAdding(true);
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: `새로운 Todo ${Date.now()}`, completed: false })
    })
      .then(res => res.json())
      .then(newTodo => {
        setTodos(prev => [newTodo, ...prev]);
        setAdding(false);
      })
      .catch(e => {
        setError(e.message);
        setAdding(false);
      });
  };

  if (loading) return <Typography sx={{ color: '#eaeaea' }}>데이터를 불러오는 중...</Typography>;
  if (error) return <Typography sx={{ color: '#ff6b6b' }}>에러 발생: {error}</Typography>;

  return (
    <div style={{ color: '#eaeaea' }}>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Todo 목록 (useState/useEffect)</Typography>
          <Button
            variant="contained"
            onClick={handleAddTodo}
            sx={buttonStyle}
            disabled={adding}
          >
            {adding ? '추가 중...' : 'Todo 추가'}
          </Button>
        </Box>
        {todos.map((todo) => (
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
        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>useState/useEffect로 동일한 예제</Typography>
        <ExampleTab
          example={<TodoExampleVanilla />}
          code={`// useState/useEffect로 데이터 관리
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => res.json())
    .then(data => {
      setTodos(data);
      setLoading(false);
    })
    .catch(e => {
      setError(e.message);
      setLoading(false);
    });
}, []);

const handleAddTodo = () => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: '새로운 Todo', completed: false })
  })
    .then(res => res.json())
    .then(newTodo => setTodos(prev => [newTodo, ...prev]));
};`}
          desc={`[useState/useEffect 특징]
- 네트워크 요청, 상태 관리, 에러/로딩 처리 모두 직접 구현해야 함
- 코드가 더 장황하고, 재사용/테스트/확장성이 떨어짐
- React Query와 비교해보세요!`}
        />
      </div>
      {/* 비교 도표 및 요약 */}
      <div style={{ background: '#2a2d34', border: '1px solid #444', borderRadius: 12, padding: '2em 2em 1.5em 2em', marginTop: 40, marginBottom: 40, maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', boxShadow: '0 2px 16px 0 #0002' }}>
        <Typography variant="h6" sx={{ mt: 0, mb: 2, color: '#b5e853', fontWeight: 700 }}>React Query vs useState/useEffect 비교</Typography>
        <Box sx={{ overflowX: 'auto', mb: 3 }}>
          <table style={{ borderCollapse: 'collapse', minWidth: 600, background: '#232323', color: '#eaeaea', border: '1px solid #444', borderRadius: 8, width: '100%' }}>
            <thead>
              <tr style={{ background: '#333' }}>
                <th style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontWeight: 600, width: 180 }}></th>
                <th style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontWeight: 600, width: 400 }}>React Query</th>
                <th style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontWeight: 600, width: 400 }}>useState/useEffect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>데이터 패칭</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>useQuery로 선언적, 자동 관리</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>직접 fetch/axios, useEffect로 수동 관리</td>
              </tr>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>로딩/에러 처리</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>isLoading, isError 등 내장 상태 제공</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>직접 상태 변수 선언/관리 필요</td>
              </tr>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>데이터 동기화</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>자동 캐싱, refetch, invalidate 지원</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>직접 fetch 호출/상태 갱신 필요</td>
              </tr>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>코드량/가독성</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>짧고 선언적, 재사용성 높음</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>장황, 중복 많음, 재사용 어려움</td>
              </tr>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>실무 확장성</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>서버 상태 관리, 실시간, 무한스크롤 등 확장 용이</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444' }}>복잡한 요구사항 대응 어려움</td>
              </tr>
            </tbody>
          </table>
        </Box>
        {/* 주요 코드 비교 도표 */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#b5e853', mb: 1, mt: 4 }}>주요 코드 비교</Typography>
        <Box sx={{ overflowX: 'auto', mb: 3 }}>
          <table style={{ borderCollapse: 'collapse', minWidth: 600, background: '#232323', color: '#eaeaea', border: '1px solid #444', borderRadius: 8, width: '100%' }}>
            <thead>
              <tr style={{ background: '#333' }}>
                <th style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontWeight: 600, width: 180 }}>구분</th>
                <th style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontWeight: 600, width: 400 }}>React Query</th>
                <th style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontWeight: 600, width: 400 }}>useState/useEffect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', verticalAlign: 'top' }}>데이터 패칭</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontFamily: 'monospace', fontSize: '0.98em', background: '#23272f' }}>
{`const { data, isLoading, isError } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos
});`}
                </td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontFamily: 'monospace', fontSize: '0.98em', background: '#23272f' }}>
{`const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch('https://.../todos')
    .then(res => res.json())
    .then(data => {
      setTodos(data);
      setLoading(false);
    })
    .catch(e => {
      setError(e.message);
      setLoading(false);
    });
}, []);`}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', verticalAlign: 'top' }}>데이터 추가</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontFamily: 'monospace', fontSize: '0.98em', background: '#23272f' }}>
{`const { mutate } = useMutation({
  mutationFn: addTodo,
  onSuccess: (newTodo) => {
    queryClient.setQueryData(['todos'], (old = []) => [newTodo, ...old]);
  }
});

// 사용: mutate('새로운 Todo')`}
                </td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontFamily: 'monospace', fontSize: '0.98em', background: '#23272f' }}>
{`fetch('https://.../todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: '새로운 Todo', completed: false })
})
  .then(res => res.json())
  .then(newTodo => setTodos(prev => [newTodo, ...prev]));`}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', verticalAlign: 'top' }}>로딩/에러 처리</td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontFamily: 'monospace', fontSize: '0.98em', background: '#23272f' }}>
{`if (isLoading) return <Loading />;
if (isError) return <Error />;`}
                </td>
                <td style={{ padding: '0.7em 1.2em', border: '1px solid #444', fontFamily: 'monospace', fontSize: '0.98em', background: '#23272f' }}>
{`if (loading) return <Loading />;
if (error) return <Error />;`}
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </div>
    </div>
  );
};

export default ReactQueryExample; 