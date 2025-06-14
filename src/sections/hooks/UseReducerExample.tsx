import React, { useReducer, useState } from 'react';
import { Box, Button, TextField, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

// 1. Basic Counter Example
type BasicCounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const basicCounterReducer = (state: number, action: BasicCounterAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const BasicCounter: React.FC = () => {
  const [count, dispatch] = useReducer(basicCounterReducer, 0);

  return (
    <Box>
      <Typography variant="h6">Count: {count}</Typography>
      <Button 
        variant="contained" 
        onClick={() => dispatch({ type: 'INCREMENT' })}
        sx={{ mr: 1 }}
      >
        증가
      </Button>
      <Button 
        variant="contained" 
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        감소
      </Button>
    </Box>
  );
};

// 2. Counter with Payload
type PayloadCounterAction = 
  | { type: 'ADD'; payload: number }
  | { type: 'SUBTRACT'; payload: number }
  | { type: 'RESET' };

const payloadCounterReducer = (state: number, action: PayloadCounterAction): number => {
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUBTRACT':
      return state - action.payload;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const PayloadCounter: React.FC = () => {
  const [count, dispatch] = useReducer(payloadCounterReducer, 0);
  const [inputValue, setInputValue] = useState('');

  const handleOperation = (type: 'ADD' | 'SUBTRACT') => {
    const value = parseInt(inputValue) || 0;
    dispatch({ type, payload: value });
    setInputValue('');
  };

  return (
    <Box>
      <Typography variant="h6">Count: {count}</Typography>
      <TextField
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        size="small"
        sx={{ mr: 1 }}
      />
      <Button 
        variant="contained" 
        onClick={() => handleOperation('ADD')}
        sx={{ mr: 1 }}
      >
        더하기
      </Button>
      <Button 
        variant="contained" 
        onClick={() => handleOperation('SUBTRACT')}
        sx={{ mr: 1 }}
      >
        빼기
      </Button>
      <Button 
        variant="outlined" 
        onClick={() => dispatch({ type: 'RESET' })}
      >
        초기화
      </Button>
    </Box>
  );
};

// 3. Object State Example
interface TodoState {
  todos: { id: number; text: string; completed: boolean }[];
  filter: 'all' | 'active' | 'completed';
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'SET_FILTER'; payload: TodoState['filter'] };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

const TodoList: React.FC = () => {
  const [{ todos, filter }, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all'
  });
  const [newTodo, setNewTodo] = useState('');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
          size="small"
          fullWidth
          sx={{ mb: 2 }}
        />
      </form>

      <Box sx={{ mb: 2 }}>
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          sx={{ mr: 1 }}
        >
          전체
        </Button>
        <Button
          variant={filter === 'active' ? 'contained' : 'outlined'}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
          sx={{ mr: 1 }}
        >
          진행중
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
        >
          완료
        </Button>
      </Box>

      <List>
        {filteredTodos.map(todo => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <Button
                color="error"
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              >
                삭제
              </Button>
            }
          >
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            />
            <Checkbox
              edge="start"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// 4. Complex Form State
interface FormState {
  values: {
    username: string;
    email: string;
    password: string;
  };
  errors: {
    username?: string;
    email?: string;
    password?: string;
  };
  isSubmitting: boolean;
}

type FormAction =
  | { type: 'SET_FIELD'; field: keyof FormState['values']; value: string }
  | { type: 'SET_ERROR'; field: keyof FormState['errors']; error: string }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'SET_SUBMITTING'; value: boolean };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        }
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    case 'CLEAR_ERRORS':
      return {
        ...state,
        errors: {}
      };
    case 'SET_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.value
      };
    default:
      return state;
  }
};

const ComplexForm: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, {
    values: {
      username: '',
      email: '',
      password: ''
    },
    errors: {},
    isSubmitting: false
  });

  const validateField = (field: keyof FormState['values']) => {
    const value = state.values[field];
    
    switch (field) {
      case 'username':
        if (value.length < 3) {
          dispatch({
            type: 'SET_ERROR',
            field,
            error: '사용자 이름은 3자 이상이어야 합니다.'
          });
          return false;
        }
        break;
      case 'email':
        if (!value.includes('@')) {
          dispatch({
            type: 'SET_ERROR',
            field,
            error: '유효한 이메일 주소를 입력해주세요.'
          });
          return false;
        }
        break;
      case 'password':
        if (value.length < 6) {
          dispatch({
            type: 'SET_ERROR',
            field,
            error: '비밀번호는 6자 이상이어야 합니다.'
          });
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_ERRORS' });

    const isValid = Object.keys(state.values).every(
      field => validateField(field as keyof FormState['values'])
    );

    if (!isValid) return;

    dispatch({ type: 'SET_SUBMITTING', value: true });
    
    // 가상의 API 호출을 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    dispatch({ type: 'SET_SUBMITTING', value: false });
    alert('폼이 성공적으로 제출되었습니다!');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="사용자 이름"
        value={state.values.username}
        onChange={(e) => dispatch({
          type: 'SET_FIELD',
          field: 'username',
          value: e.target.value
        })}
        error={!!state.errors.username}
        helperText={state.errors.username}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="이메일"
        type="email"
        value={state.values.email}
        onChange={(e) => dispatch({
          type: 'SET_FIELD',
          field: 'email',
          value: e.target.value
        })}
        error={!!state.errors.email}
        helperText={state.errors.email}
        sx={{ mb: 2 }}
      />
      
      <TextField
        fullWidth
        label="비밀번호"
        type="password"
        value={state.values.password}
        onChange={(e) => dispatch({
          type: 'SET_FIELD',
          field: 'password',
          value: e.target.value
        })}
        error={!!state.errors.password}
        helperText={state.errors.password}
        sx={{ mb: 2 }}
      />
      
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={state.isSubmitting}
      >
        {state.isSubmitting ? '제출 중...' : '제출하기'}
      </Button>
    </Box>
  );
};

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

const UseReducerExample: React.FC = () => {
  return (
    <Box>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 카운터 (Basic Counter)</Typography>
        <ExampleTab
          example={<BasicCounter />}
          code={`type BasicCounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const basicCounterReducer = (state: number, action: BasicCounterAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const BasicCounter: React.FC = () => {
  const [count, dispatch] = useReducer(basicCounterReducer, 0);

  return (
    <Box>
      <Typography variant="h6">Count: {count}</Typography>
      <Button 
        variant="contained" 
        onClick={() => dispatch({ type: 'INCREMENT' })}
        sx={{ mr: 1 }}
      >
        증가
      </Button>
      <Button 
        variant="contained" 
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        감소
      </Button>
    </Box>
  );
};`}
          desc={`useReducer의 가장 기본적인 사용 예제입니다.\n\n의의: 상태와 상태 변경 로직을 분리하여 관리할 수 있습니다.\n활용: 단순한 증가/감소 기능, useState보다 reducer 패턴을 익히는 데 적합합니다.\n실전 팁: 상태 변경이 단순할 때도 reducer 패턴을 익혀두면 복잡한 상태 관리에 도움이 됩니다.`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 페이로드가 있는 카운터 (Counter with Payload)</Typography>
        <ExampleTab
          example={<PayloadCounter />}
          code={`type PayloadCounterAction = \n  | { type: 'ADD'; payload: number }\n  | { type: 'SUBTRACT'; payload: number }\n  | { type: 'RESET' };\n\nconst payloadCounterReducer = (state: number, action: PayloadCounterAction): number => {\n  switch (action.type) {\n    case 'ADD':\n      return state + action.payload;\n    case 'SUBTRACT':\n      return state - action.payload;\n    case 'RESET':\n      return 0;\n    default:\n      return state;\n  }\n};\n\nconst PayloadCounter: React.FC = () => {\n  const [count, dispatch] = useReducer(payloadCounterReducer, 0);\n  const [inputValue, setInputValue] = useState('');\n\n  const handleOperation = (type: 'ADD' | 'SUBTRACT') => {\n    const value = parseInt(inputValue) || 0;\n    dispatch({ type, payload: value });\n    setInputValue('');\n  };\n\n  return (\n    <Box>\n      <Typography variant="h6">Count: {count}</Typography>\n      <TextField\n        type="number"\n        value={inputValue}\n        onChange={(e) => setInputValue(e.target.value)}\n        size="small"\n        sx={{ mr: 1 }}\n      />\n      <Button \n        variant="contained" \n        onClick={() => handleOperation('ADD')}\n        sx={{ mr: 1 }}\n      >\n        더하기\n      </Button>\n      <Button \n        variant="contained" \n        onClick={() => handleOperation('SUBTRACT')}\n        sx={{ mr: 1 }}\n      >\n        빼기\n      </Button>\n      <Button \n        variant="outlined" \n        onClick={() => dispatch({ type: 'RESET' })}\n      >\n        초기화\n      </Button>\n    </Box>\n  );\n};`}
          desc={`액션에 payload를 추가하여 다양한 상태 변경을 구현한 예제입니다.\n\n의의: 단순한 증감이 아닌, 입력값만큼 더하고 빼는 등 다양한 연산이 가능합니다.\n활용: 폼 입력, 계산기, 수치 조작 등 다양한 상황에서 활용할 수 있습니다.\n실전 팁: 액션 객체에 payload를 추가하면, 다양한 상태 변경을 유연하게 처리할 수 있습니다.`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 객체 상태 관리 (Object State Management)</Typography>
        <ExampleTab
          example={<TodoList />}
          code={`interface TodoState {\n  todos: { id: number; text: string; completed: boolean }[];\n  filter: 'all' | 'active' | 'completed';\n}\n\ntype TodoAction =\n  | { type: 'ADD_TODO'; payload: string }\n  | { type: 'TOGGLE_TODO'; payload: number }\n  | { type: 'DELETE_TODO'; payload: number }\n  | { type: 'SET_FILTER'; payload: TodoState['filter'] };\n\nconst todoReducer = (state: TodoState, action: TodoAction): TodoState => {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return {\n        ...state,\n        todos: [\n          ...state.todos,\n          {\n            id: Date.now(),\n            text: action.payload,\n            completed: false\n          }\n        ]\n      };\n    case 'TOGGLE_TODO':\n      return {\n        ...state,\n        todos: state.todos.map(todo =>\n          todo.id === action.payload\n            ? { ...todo, completed: !todo.completed }\n            : todo\n        )\n      };\n    case 'DELETE_TODO':\n      return {\n        ...state,\n        todos: state.todos.filter(todo => todo.id !== action.payload)\n      };\n    case 'SET_FILTER':\n      return {\n        ...state,\n        filter: action.payload\n      };\n    default:\n      return state;\n  }\n};\n\nconst TodoList: React.FC = () => {\n  const [{ todos, filter }, dispatch] = useReducer(todoReducer, {\n    todos: [],\n    filter: 'all'\n  });\n  const [newTodo, setNewTodo] = useState('');\n\n  const filteredTodos = todos.filter(todo => {\n    if (filter === 'active') return !todo.completed;\n    if (filter === 'completed') return todo.completed;\n    return true;\n  });\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    if (!newTodo.trim()) return;\n    dispatch({ type: 'ADD_TODO', payload: newTodo });\n    setNewTodo('');\n  };\n\n  return (\n    <Box>\n      <form onSubmit={handleSubmit}>\n        <TextField\n          value={newTodo}\n          onChange={(e) => setNewTodo(e.target.value)}\n          placeholder="할 일을 입력하세요"\n          size="small"\n          fullWidth\n          sx={{ mb: 2 }}\n        />\n      </form>\n\n      <Box sx={{ mb: 2 }}>\n        <Button\n          variant={filter === 'all' ? 'contained' : 'outlined'}\n          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}\n          sx={{ mr: 1 }}\n        >\n          전체\n        </Button>\n        <Button\n          variant={filter === 'active' ? 'contained' : 'outlined'}\n          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}\n          sx={{ mr: 1 }}\n        >\n          진행중\n        </Button>\n        <Button\n          variant={filter === 'completed' ? 'contained' : 'outlined'}\n          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}\n        >\n          완료\n        </Button>\n      </Box>\n\n      <List>\n        {filteredTodos.map(todo => (\n          <ListItem\n            key={todo.id}\n            secondaryAction={\n              <Button\n                color="error"\n                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}\n              >\n                삭제\n              </Button>\n            }\n          >\n            <ListItemText\n              primary={todo.text}\n              sx={{\n                textDecoration: todo.completed ? 'line-through' : 'none'\n              }}\n            />\n            <Checkbox\n              edge="start"\n              checked={todo.completed}\n              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}\n            />\n          </ListItem>\n        ))}\n      </List>\n    </Box>\n  );\n};`}
          desc={`할 일 목록을 통해 복잡한 객체 상태 관리와 필터링 기능을 구현한 예제입니다.\n\n의의: 배열, 객체 등 복합 상태를 reducer로 체계적으로 관리할 수 있습니다.\n활용: Todo 리스트, 쇼핑카트, 필터링 등 다양한 UI 상태 관리에 적합합니다.\n실전 팁: 상태가 복잡해질수록 useReducer의 장점이 커집니다. 불변성 유지에 유의하세요.`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 복잡한 폼 상태 관리 (Complex Form State)</Typography>
        <ExampleTab
          example={<ComplexForm />}
          code={`interface FormState {\n  values: {\n    username: string;\n    email: string;\n    password: string;\n  };\n  errors: {\n    username?: string;\n    email?: string;\n    password?: string;\n  };\n  isSubmitting: boolean;\n}\n\ntype FormAction =\n  | { type: 'SET_FIELD'; field: keyof FormState['values']; value: string }\n  | { type: 'SET_ERROR'; field: keyof FormState['errors']; error: string }\n  | { type: 'CLEAR_ERRORS' }\n  | { type: 'SET_SUBMITTING'; value: boolean };\n\nconst formReducer = (state: FormState, action: FormAction): FormState => {\n  switch (action.type) {\n    case 'SET_FIELD':\n      return {\n        ...state,\n        values: {\n          ...state.values,\n          [action.field]: action.value\n        }\n      };\n    case 'SET_ERROR':\n      return {\n        ...state,\n        errors: {\n          ...state.errors,\n          [action.field]: action.error\n        }\n      };\n    case 'CLEAR_ERRORS':\n      return {\n        ...state,\n        errors: {}\n      };\n    case 'SET_SUBMITTING':\n      return {\n        ...state,\n        isSubmitting: action.value\n      };\n    default:\n      return state;\n  }\n};\n\nconst ComplexForm: React.FC = () => {\n  const [state, dispatch] = useReducer(formReducer, {\n    values: {\n      username: '',\n      email: '',\n      password: ''\n    },\n    errors: {},\n    isSubmitting: false\n  });\n\n  const validateField = (field: keyof FormState['values']) => {\n    const value = state.values[field];\n    \n    switch (field) {\n      case 'username':\n        if (value.length < 3) {\n          dispatch({\n            type: 'SET_ERROR',\n            field,\n            error: '사용자 이름은 3자 이상이어야 합니다.'\n          });\n          return false;\n        }\n        break;\n      case 'email':\n        if (!value.includes('@')) {\n          dispatch({\n            type: 'SET_ERROR',\n            field,\n            error: '유효한 이메일 주소를 입력해주세요.'\n          });\n          return false;\n        }\n        break;\n      case 'password':\n        if (value.length < 6) {\n          dispatch({\n            type: 'SET_ERROR',\n            field,\n            error: '비밀번호는 6자 이상이어야 합니다.'\n          });\n          return false;\n        }\n        break;\n    }\n    return true;\n  };\n\n  const handleSubmit = async (e: React.FormEvent) => {\n    e.preventDefault();\n    dispatch({ type: 'CLEAR_ERRORS' });\n\n    const isValid = Object.keys(state.values).every(\n      field => validateField(field as keyof FormState['values'])\n    );\n\n    if (!isValid) return;\n\n    dispatch({ type: 'SET_SUBMITTING', value: true });\n    \n    // 가상의 API 호출을 시뮬레이션\n    await new Promise(resolve => setTimeout(resolve, 1000));\n    \n    dispatch({ type: 'SET_SUBMITTING', value: false });\n    alert('폼이 성공적으로 제출되었습니다!');\n  };\n\n  return (\n    <Box component="form" onSubmit={handleSubmit}>\n      <TextField\n        fullWidth\n        label="사용자 이름"\n        value={state.values.username}\n        onChange={(e) => dispatch({\n          type: 'SET_FIELD',\n          field: 'username',\n          value: e.target.value\n        })}\n        error={!!state.errors.username}\n        helperText={state.errors.username}\n        sx={{ mb: 2 }}\n      />\n      \n      <TextField\n        fullWidth\n        label="이메일"\n        type="email"\n        value={state.values.email}\n        onChange={(e) => dispatch({\n          type: 'SET_FIELD',\n          field: 'email',\n          value: e.target.value\n        })}\n        error={!!state.errors.email}\n        helperText={state.errors.email}\n        sx={{ mb: 2 }}\n      />\n      \n      <TextField\n        fullWidth\n        label="비밀번호"\n        type="password"\n        value={state.values.password}\n        onChange={(e) => dispatch({\n          type: 'SET_FIELD',\n          field: 'password',\n          value: e.target.value\n        })}\n        error={!!state.errors.password}\n        helperText={state.errors.password}\n        sx={{ mb: 2 }}\n      />\n      \n      <Button\n        type="submit"\n        variant="contained"\n        fullWidth\n        disabled={state.isSubmitting}\n      >\n        {state.isSubmitting ? '제출 중...' : '제출하기'}\n      </Button>\n    </Box>\n  );\n};`}
          desc={`폼 상태, 유효성 검사, 제출 상태 등 복잡한 상태 관리를 구현한 고급 예제입니다.\n\n의의: 여러 필드와 에러, 제출 상태 등 다양한 상태를 하나의 reducer로 관리할 수 있습니다.\n활용: 회원가입, 로그인, 대형 폼 등에서 유효성 검사와 상태 관리를 쉽게 할 수 있습니다.\n실전 팁: 상태가 많고, 필드별로 다양한 검증/에러 처리가 필요할 때 useReducer가 매우 유용합니다.`}
        />
      </div>
    </Box>
  );
};

export default UseReducerExample; 