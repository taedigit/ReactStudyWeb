import React, { Suspense } from 'react';
import { Box, Typography, Button, CircularProgress, TextField } from '@mui/material';
import { atom, selector, atomFamily, selectorFamily, useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import ErrorBoundary from '../../components/ErrorBoundary';
import { ExampleTab } from '../../components/ExampleTab';

const recoilExampleBlockStyle = {
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
  basicCounter: `Recoil의 기본적인 atom과 selector를 사용한 카운터 예제입니다.
- atom은 상태의 단위이며, selector는 atom의 상태를 기반으로 파생된 상태를 만듭니다.
- useRecoilState로 atom을 읽고 쓸 수 있으며, useRecoilValue로 읽기 전용으로 사용할 수 있습니다.
- selector는 atom이나 다른 selector를 기반으로 파생된 상태를 계산합니다.`,
  todoList: `Recoil을 사용한 Todo 리스트 구현 예제입니다.
- atom과 selector를 함께 사용하여 상태를 관리하고, Todo 목록의 통계 정보를 파생 상태로 계산합니다.
- 상태 변경은 항상 setter 함수를 통해 이루어져야 합니다.
- selector를 통해 파생 데이터를 자동으로 계산할 수 있습니다.`,
  asyncData: `Recoil의 selector를 사용하여 비동기 데이터를 처리하는 예제입니다.
- selector에서 비동기 함수를 사용할 수 있습니다.
- Suspense와 함께 사용하여 로딩 상태를 자동으로 처리합니다.
- 에러 처리도 자동으로 이루어집니다.`,
  atomFamily: `atomFamily와 selectorFamily를 사용하여 동적으로 상태를 생성하고 관리하는 예제입니다.
- 각 항목마다 독립적인 상태를 가질 수 있습니다.
- ID나 키값을 기반으로 동적으로 상태를 생성합니다.
- selectorFamily를 통해 동적 파생 상태도 만들 수 있습니다.`
};

// Basic counter example atoms and selectors
const recoilExampleCounterState = atom<number>({
  key: 'recoilExampleCounterState',
  default: 0,
});

const recoilExampleDoubleCountState = selector<number>({
  key: 'recoilExampleDoubleCountState',
  get: ({get}) => {
    const count = get(recoilExampleCounterState);
    return count * 2;
  },
});

// Todo list example atoms and selectors
const recoilExampleTodoListState = atom<string[]>({
  key: 'recoilExampleTodoListState',
  default: [],
});

const recoilExampleTodoStatsState = selector({
  key: 'recoilExampleTodoStatsState',
  get: ({get}) => {
    const todoList = get(recoilExampleTodoListState);
    return {
      total: todoList.length,
      empty: todoList.length === 0,
    };
  },
});

// Async data example
const userIdState = atom<number>({
  key: 'userIdState',
  default: 1,
});

const userDataState = selector({
  key: 'userDataState',
  get: async ({get}) => {
    const userId = get(userIdState);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
  },
});

// AtomFamily example
const todoItemState = atomFamily<string, number>({
  key: 'todoItemState',
  default: '',
});

const todoItemUppercaseState = selectorFamily<string, number>({
  key: 'todoItemUppercaseState',
  get: (id) => ({get}) => {
    const text = get(todoItemState(id));
    return text.toUpperCase();
  },
});

// Components
const Counter: React.FC = () => {
  const [count, setCount] = useRecoilState(recoilExampleCounterState);
  const doubleCount = useRecoilValue(recoilExampleDoubleCountState);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1" gutterBottom>카운트: {count}</Typography>
      <Typography variant="body1" gutterBottom>2배 값: {doubleCount}</Typography>
      <Button 
        variant="contained" 
        sx={{ mr: 1 }}
        onClick={() => setCount((c) => c + 1)}
      >
        증가
      </Button>
      <Button 
        variant="outlined"
        onClick={() => setCount((c) => c - 1)}
      >
        감소
      </Button>
    </Box>
  );
};

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(recoilExampleTodoListState);
  const stats = useRecoilValue(recoilExampleTodoStatsState);
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodoList(prev => [...prev, newTodo.trim()]);
      setNewTodo('');
    }
  };

  const removeTodo = (index: number) => {
    setTodoList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
        <TextField
          size="small"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="할 일 입력"
        />
        <Button variant="contained" onClick={addTodo}>
          추가
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mb: 1 }}>
        총 {stats.total}개의 할 일
      </Typography>
      {stats.empty ? (
        <Typography variant="body2" color="text.secondary">
          할 일이 없습니다.
        </Typography>
      ) : (
        <Box component="ul" sx={{ pl: 2 }}>
          {todoList.map((todo, index) => (
            <Box component="li" key={index} sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography>{todo}</Typography>
              <Button 
                size="small" 
                color="error" 
                variant="outlined"
                onClick={() => removeTodo(index)}
              >
                삭제
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

const AsyncUserData: React.FC = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const userData = useRecoilValue(userDataState);

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ mb: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
        <TextField
          type="number"
          size="small"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          label="사용자 ID"
        />
      </Box>
      <Typography variant="body1" component="pre" sx={{ 
        p: 2, 
        bgcolor: 'grey.100', 
        borderRadius: 1,
        overflow: 'auto',
        maxHeight: 200
      }}>
        {JSON.stringify(userData, null, 2)}
      </Typography>
    </Box>
  );
};

const TodoItemFamily: React.FC = () => {
  const [items, setItems] = React.useState<number[]>([]);
  const [nextId, setNextId] = React.useState(1);

  const addItem = () => {
    setItems(prev => [...prev, nextId]);
    setNextId(prev => prev + 1);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button variant="contained" onClick={addItem}>
        새 항목 추가
      </Button>
      <Box sx={{ mt: 2 }}>
        {items.map(id => (
          <TodoItemInput key={id} id={id} />
        ))}
      </Box>
    </Box>
  );
};

const TodoItemInput: React.FC<{ id: number }> = ({ id }) => {
  const [text, setText] = useRecoilState(todoItemState(id));
  const upperText = useRecoilValue(todoItemUppercaseState(id));

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
        label={`항목 ${id}`}
        fullWidth
      />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        대문자: {upperText}
      </Typography>
    </Box>
  );
};

const RecoilExampleContent: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Recoil 예제
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Recoil은 Facebook에서 개발한 React 전용 상태 관리 라이브러리입니다. 
        React의 작동 방식과 유사한 방식으로 상태를 관리할 수 있으며, 
        비동기 데이터 처리, 파생 상태 계산, 상태 공유 등을 쉽게 구현할 수 있습니다.
      </Typography>

      <div style={recoilExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 카운터 예제</Typography>
        <ExampleTab
          example={<ErrorBoundary><Counter /></ErrorBoundary>}
          code={`const counterState = atom<number>({
  key: 'counterState',
  default: 0,
});

const doubleCountState = selector<number>({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(counterState);
    return count * 2;
  },
});

const Counter: React.FC = () => {
  const [count, setCount] = useRecoilState(counterState);
  const doubleCount = useRecoilValue(doubleCountState);

  return (
    <div>
      <p>카운트: {count}</p>
      <p>2배 값: {doubleCount}</p>
      <button onClick={() => setCount(c => c + 1)}>증가</button>
      <button onClick={() => setCount(c => c - 1)}>감소</button>
    </div>
  );
};`}
          desc={descriptions.basicCounter}
        />
      </div>

      <div style={recoilExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. Todo 리스트 예제</Typography>
        <ExampleTab
          example={<ErrorBoundary><TodoList /></ErrorBoundary>}
          code={`const todoListState = atom<string[]>({
  key: 'todoListState',
  default: [],
});

const todoStatsState = selector({
  key: 'todoStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    return {
      total: todoList.length,
      empty: todoList.length === 0,
    };
  },
});

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const stats = useRecoilValue(todoStatsState);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodoList(prev => [...prev, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>추가</button>
      <p>총 {stats.total}개의 할 일</p>
      {/* Todo 목록 렌더링 */}
    </div>
  );
};`}
          desc={descriptions.todoList}
        />
      </div>

      <div style={recoilExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 비동기 데이터 처리</Typography>
        <ExampleTab
          example={
            <ErrorBoundary>
              <Suspense fallback={<CircularProgress />}>
                <AsyncUserData />
              </Suspense>
            </ErrorBoundary>
          }
          code={`const userIdState = atom<number>({
  key: 'userIdState',
  default: 1,
});

const userDataState = selector({
  key: 'userDataState',
  get: async ({get}) => {
    const userId = get(userIdState);
    const response = await fetch(
      \`https://jsonplaceholder.typicode.com/users/\${userId}\`
    );
    return response.json();
  },
});

const AsyncUserData: React.FC = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const userData = useRecoilValue(userDataState);

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};`}
          desc={descriptions.asyncData}
        />
      </div>

      <div style={recoilExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. Atom Family 예제</Typography>
        <ExampleTab
          example={<ErrorBoundary><TodoItemFamily /></ErrorBoundary>}
          code={`const todoItemState = atomFamily<string, number>({
  key: 'todoItemState',
  default: '',
});

const todoItemUppercaseState = selectorFamily<string, number>({
  key: 'todoItemUppercaseState',
  get: (id) => ({get}) => {
    const text = get(todoItemState(id));
    return text.toUpperCase();
  },
});

const TodoItemFamily: React.FC = () => {
  const [items, setItems] = useState<number[]>([]);
  const [nextId, setNextId] = useState(1);

  const addItem = () => {
    setItems(prev => [...prev, nextId]);
    setNextId(prev => prev + 1);
  };

  return (
    <div>
      <button onClick={addItem}>새 항목 추가</button>
      {items.map(id => (
        <TodoItemInput key={id} id={id} />
      ))}
    </div>
  );
};

const TodoItemInput: React.FC<{ id: number }> = ({ id }) => {
  const [text, setText] = useRecoilState(todoItemState(id));
  const upperText = useRecoilValue(todoItemUppercaseState(id));

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"항목 " + id}
      />
      <p>대문자: {upperText}</p>
    </div>
  );
};`}
          desc={descriptions.atomFamily}
        />
      </div>
    </Box>
  );
};

const RecoilExample: React.FC = () => {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <RecoilExampleContent />
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export default RecoilExample; 