import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Typography, Button, TextField, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

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

// 1. 기본 카운터 slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    inc: state => { state.count += 1; },
    dec: state => { state.count -= 1; },
  },
});
const { inc, dec } = counterSlice.actions;
const CounterDemo = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Button onClick={() => dispatch(dec())} variant="outlined">-</Button>
      <Typography variant="h6" sx={{ minWidth: 40, textAlign: 'center' }}>{count}</Typography>
      <Button onClick={() => dispatch(inc())} variant="contained">+</Button>
    </div>
  );
};

// 2. 여러 slice 조합
const userSlice = createSlice({
  name: 'user',
  initialState: { name: '홍길동', age: 20 },
  reducers: {
    setName: (state, action: PayloadAction<string>) => { state.name = action.payload; },
    setAge: (state, action: PayloadAction<number>) => { state.age = action.payload; },
  },
});
const { setName, setAge } = userSlice.actions;
const UserDemo = () => {
  const { name, age } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <TextField label="이름" value={name} onChange={e => dispatch(setName(e.target.value))} size="small" />
      <TextField label="나이" type="number" value={age} onChange={e => dispatch(setAge(Number(e.target.value)))} size="small" />
      <Typography>이름: {name}, 나이: {age}</Typography>
    </div>
  );
};

// 3. selector/middleware 예제
const abSlice = createSlice({
  name: 'ab',
  initialState: { a: 1, b: 2 },
  reducers: {
    setA: (state, action: PayloadAction<number>) => { state.a = action.payload; },
    setB: (state, action: PayloadAction<number>) => { state.b = action.payload; },
  },
});
const { setA, setB } = abSlice.actions;
const sumSelector = (state: any) => state.ab.a + state.ab.b;
const SelectorDemo = () => {
  const a = useSelector((state: any) => state.ab.a);
  const b = useSelector((state: any) => state.ab.b);
  const sum = useSelector(sumSelector);
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <TextField label="A" type="number" value={a} onChange={e => dispatch(setA(Number(e.target.value)))} size="small" />
      <TextField label="B" type="number" value={b} onChange={e => dispatch(setB(Number(e.target.value)))} size="small" />
      <Typography>합계: {sum}</Typography>
    </div>
  );
};

// 4. 실전 Todo 예제
interface Todo { id: number; text: string; done: boolean; }
const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as Todo[],
  reducers: {
    add: (state, action: PayloadAction<string>) => { state.push({ id: Date.now(), text: action.payload, done: false }); },
    toggle: (state, action: PayloadAction<number>) => {
      const t = state.find(t => t.id === action.payload);
      if (t) t.done = !t.done;
    },
    remove: (state, action: PayloadAction<number>) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});
const { add, toggle, remove } = todoSlice.actions;
const TodoDemo = () => {
  const todos = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <TextField value={input} onChange={e => setInput(e.target.value)} size="small" label="할 일" onKeyDown={e => { if (e.key === 'Enter' && input) { dispatch(add(input)); setInput(''); } }} />
        <Button onClick={() => { if (input) { dispatch(add(input)); setInput(''); } }} variant="contained">추가</Button>
      </div>
      <List dense>
        {todos.map((todo: Todo) => (
          <ListItem key={todo.id} secondaryAction={<Button onClick={() => dispatch(remove(todo.id))} size="small">삭제</Button>}>
            <Checkbox checked={todo.done} onChange={() => dispatch(toggle(todo.id))} />
            <ListItemText primary={todo.text} sx={{ textDecoration: todo.done ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

// Local Redux store for demo
const demoStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
    ab: abSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export const ReduxExample: React.FC = () => {
  return (
    <Provider store={demoStore}>
      <div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h4" gutterBottom>Redux 주요 예제</Typography>
          <Typography variant="body1" gutterBottom>
            Redux는 <b>가장 널리 쓰이는 전역 상태 관리 라이브러리</b>로, <b>예측 가능한 상태 관리</b>와 미들웨어, DevTools 등 강력한 생태계를 자랑합니다.<br/>
            <ul style={{margin: '1em 0 0 1.2em', color: '#b2dfdb', fontSize: 16}}>
              <li>Redux Toolkit으로 코드량/러닝커브 대폭 감소</li>
              <li>미들웨어, DevTools, SSR, 대규모 앱에 최적</li>
              <li>Context/Provider 기반, useSelector/useDispatch로 React와 완벽 연동</li>
              <li>Jotai/Zustand 대비 보일러플레이트는 많지만, 실무에서 여전히 표준</li>
            </ul>
            <span style={{color:'#ffd600'}}>실전에서 자주 쓰는 패턴과 실무 팁, 베스트 프랙티스도 함께 소개합니다.</span>
          </Typography>
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 카운터 slice</Typography>
          <ExampleTab
            example={<CounterDemo />}
            code={`const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    inc: state => { state.count += 1 },
    dec: state => { state.count -= 1 },
  }
});

const CounterDemo = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(dec())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(inc())}>+</button>
    </div>
  );
};`}
            desc={`가장 기본적인 Redux slice 예제입니다.\n\n- 실전 활용: 카운터, 토글, 단일 값 관리\n- Tip: Redux Toolkit의 createSlice로 코드량 최소화\n- Best Practice: slice/selector를 별도 파일로 분리, DevTools 적극 활용`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. 여러 slice 조합</Typography>
          <ExampleTab
            example={<UserDemo />}
            code={`const userSlice = createSlice({
  name: 'user',
  initialState: { name: '홍길동', age: 20 },
  reducers: {
    setName: (state, action) => { state.name = action.payload },
    setAge: (state, action) => { state.age = action.payload },
  }
});

const UserDemo = () => {
  const { name, age } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <input value={name} onChange={e => dispatch(setName(e.target.value))} />
      <input value={age} type="number" onChange={e => dispatch(setAge(Number(e.target.value)))} />
      <span>이름: {name}, 나이: {age}</span>
    </div>
  );
};`}
            desc={`여러 slice를 조합해 상태를 분리/관리하는 패턴입니다.\n\n- 실전 활용: 사용자 정보, 폼 상태 등\n- Tip: slice/selector를 작은 단위로 쪼개고, 필요에 따라 조합\n- Best Practice: slice 간 의존성/selector 적극 활용`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. selector/middleware 활용</Typography>
          <ExampleTab
            example={<SelectorDemo />}
            code={`const abSlice = createSlice({
  name: 'ab',
  initialState: { a: 1, b: 2 },
  reducers: {
    setA: (state, action) => { state.a = action.payload },
    setB: (state, action) => { state.b = action.payload },
  }
});
const sumSelector = state => state.ab.a + state.ab.b;

const SelectorDemo = () => {
  const a = useSelector(state => state.ab.a);
  const b = useSelector(state => state.ab.b);
  const sum = useSelector(sumSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <input value={a} onChange={e => dispatch(setA(Number(e.target.value)))} />
      <input value={b} onChange={e => dispatch(setB(Number(e.target.value)))} />
      <span>합계: {sum}</span>
    </div>
  );
};`}
            desc={`selector를 활용해 파생 상태/계산값을 효율적으로 관리할 수 있습니다.\n\n- 실전 활용: 합계, 평균, 파생 상태 등\n- Tip: useSelector로 필요한 값만 구독, 미들웨어로 기능 확장\n- Best Practice: selector/미들웨어/DevTools 적극 활용`}
          />
        </div>
        <div style={stateExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 실전 Todo 예제</Typography>
          <ExampleTab
            example={<TodoDemo />}
            code={`const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, action) => { state.push({ id: Date.now(), text: action.payload, done: false }) },
    toggle: (state, action) => {
      const t = state.find(t => t.id === action.payload);
      if (t) t.done = !t.done;
    },
    remove: (state, action) => state.filter(t => t.id !== action.payload),
  }
});

const TodoDemo = () => {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => { if (input) { dispatch(add(input)); setInput(''); } }}>추가</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={() => dispatch(toggle(todo.id))} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => dispatch(remove(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`}
            desc={`실전 Todo 관리 예제입니다.\n\n- 실전 활용: 할 일, 메모, 북마크 등 리스트 관리\n- Tip: slice/selector, 미들웨어, DevTools 등 다양한 기능 조합\n- Best Practice: slice/selector를 여러 파일로 분리, 타입 명확히 관리`}
          />
        </div>
      </div>
    </Provider>
  );
};

export default ReduxExample; 