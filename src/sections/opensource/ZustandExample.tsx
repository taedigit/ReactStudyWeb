import React from 'react';
import { create } from 'zustand';
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

// 1. 기본 카운터 예제
interface CounterState {
  count: number;
  inc: () => void;
  dec: () => void;
}
const useCounterStore = create<CounterState>((set: (fn: (state: CounterState) => CounterState) => void) => ({
  count: 0,
  inc: () => set((state: CounterState) => ({ ...state, count: state.count + 1 })),
  dec: () => set((state: CounterState) => ({ ...state, count: state.count - 1 })),
}));
const CounterDemo = () => {
  const { count, inc, dec } = useCounterStore();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Button onClick={dec} variant="outlined">-</Button>
      <Typography variant="h6" sx={{ minWidth: 40, textAlign: 'center' }}>{count}</Typography>
      <Button onClick={inc} variant="contained">+</Button>
    </div>
  );
};

// 2. 여러 상태/함수 조합
interface UserState {
  name: string;
  age: number;
  setName: (name: string) => void;
  setAge: (age: number) => void;
}
const useUserStore = create<UserState>((set: (partial: Partial<UserState>) => void) => ({
  name: '홍길동',
  age: 20,
  setName: (name: string) => set({ name }),
  setAge: (age: number) => set({ age }),
}));
const UserDemo = () => {
  const { name, age, setName, setAge } = useUserStore();
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <TextField label="이름" value={name} onChange={e => setName(e.target.value)} size="small" />
      <TextField label="나이" type="number" value={age} onChange={e => setAge(Number(e.target.value))} size="small" />
      <Typography>이름: {name}, 나이: {age}</Typography>
    </div>
  );
};

// 3. selector/middleware 예제
interface SelectorState {
  a: number;
  b: number;
  setA: (a: number) => void;
  setB: (b: number) => void;
}
const useSelectorStore = create<SelectorState>((set: (partial: Partial<SelectorState>) => void) => ({
  a: 1,
  b: 2,
  setA: (a: number) => set({ a }),
  setB: (b: number) => set({ b }),
}));
const SelectorDemo = () => {
  const a = useSelectorStore((s: SelectorState) => s.a);
  const b = useSelectorStore((s: SelectorState) => s.b);
  const setA = useSelectorStore((s: SelectorState) => s.setA);
  const setB = useSelectorStore((s: SelectorState) => s.setB);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <TextField label="A" type="number" value={a} onChange={e => setA(Number(e.target.value))} size="small" />
      <TextField label="B" type="number" value={b} onChange={e => setB(Number(e.target.value))} size="small" />
      <Typography>합계: {a + b}</Typography>
    </div>
  );
};

// 4. 실전 Todo 예제
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
interface TodoStore {
  todos: Todo[];
  add: (text: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
}
const useTodoStore = create<TodoStore>((set: (fn: (state: TodoStore) => TodoStore) => void) => ({
  todos: [],
  add: (text: string) => set((state: TodoStore) => ({ ...state, todos: [...state.todos, { id: Date.now(), text, done: false }] })),
  toggle: (id: number) => set((state: TodoStore) => ({ ...state, todos: state.todos.map((t: Todo) => t.id === id ? { ...t, done: !t.done } : t) })),
  remove: (id: number) => set((state: TodoStore) => ({ ...state, todos: state.todos.filter((t: Todo) => t.id !== id) })),
}));
const TodoDemo = () => {
  const { todos, add, toggle, remove } = useTodoStore();
  const [input, setInput] = React.useState('');
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <TextField value={input} onChange={e => setInput(e.target.value)} size="small" label="할 일" onKeyDown={e => { if (e.key === 'Enter' && input) { add(input); setInput(''); } }} />
        <Button onClick={() => { if (input) { add(input); setInput(''); } }} variant="contained">추가</Button>
      </div>
      <List dense>
        {todos.map((todo: Todo) => (
          <ListItem key={todo.id} secondaryAction={<Button onClick={() => remove(todo.id)} size="small">삭제</Button>}>
            <Checkbox checked={todo.done} onChange={() => toggle(todo.id)} />
            <ListItemText primary={todo.text} sx={{ textDecoration: todo.done ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const ZustandExample: React.FC = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h4" gutterBottom>Zustand 주요 예제</Typography>
        <Typography variant="body1" gutterBottom>
          Zustand는 <b>가볍고 직관적인 React 상태 관리 라이브러리</b>로, <b>Context/Redux의 복잡함 없이</b> 전역 상태를 쉽게 관리할 수 있습니다.<br/>
          <ul style={{margin: '1em 0 0 1.2em', color: '#b2dfdb', fontSize: 16}}>
            <li>코드량이 매우 적고, 러닝커브가 낮음</li>
            <li>Redux, Context 대비 보일러플레이트/성능 부담이 적음</li>
            <li>selector, middleware, persist 등 실무 기능 지원</li>
            <li>대규모 앱, SSR, React Native 등 다양한 환경에서 사용 가능</li>
          </ul>
          <span style={{color:'#ffd600'}}>실전에서 자주 쓰는 패턴과 실무 팁, 베스트 프랙티스도 함께 소개합니다.</span>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 카운터 상태 관리</Typography>
        <ExampleTab
          example={<CounterDemo />}
          code={`const useCounterStore = create(set => ({ count: 0, inc: () => set(state => ({ ...state, count: state.count + 1 })), dec: () => set(state => ({ ...state, count: state.count - 1 })) }));

const CounterDemo = () => {
  const { count, inc, dec } = useCounterStore();
  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button onClick={inc}>+</button>
    </div>
  );
};`}
          desc={`가장 기본적인 전역 상태 관리 예제입니다.\n\n- 실전 활용: 카운터, 토글, 단일 값 관리\n- Tip: 여러 컴포넌트에서 동일 상태를 공유할 때 매우 간단\n- Best Practice: 함수/상태를 store에 함께 정의`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 여러 상태/함수 조합</Typography>
        <ExampleTab
          example={<UserDemo />}
          code={`const useUserStore = create(set => ({ name: '홍길동', age: 20, setName: (name) => set({ name }), setAge: (age) => set({ age }) }));

const UserDemo = () => {
  const { name, age, setName, setAge } = useUserStore();
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={age} type="number" onChange={e => setAge(Number(e.target.value))} />
      <span>이름: {name}, 나이: {age}</span>
    </div>
  );
};`}
          desc={`여러 상태와 setter 함수를 store에 함께 정의하는 패턴입니다.\n\n- 실전 활용: 사용자 정보, 폼 상태 등\n- Tip: setter 함수로 상태 변경을 일관되게 관리\n- Best Practice: store 분리/모듈화로 대규모 앱에도 적용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. selector/middleware 활용</Typography>
        <ExampleTab
          example={<SelectorDemo />}
          code={`const useSelectorStore = create(set => ({ a: 1, b: 2, setA: (a) => set({ a }), setB: (b) => set({ b }) }));

const SelectorDemo = () => {
  const a = useSelectorStore(s => s.a);
  const b = useSelectorStore(s => s.b);
  const setA = useSelectorStore(s => s.setA);
  const setB = useSelectorStore(s => s.setB);
  return (
    <div>
      <input value={a} onChange={e => setA(Number(e.target.value))} />
      <input value={b} onChange={e => setB(Number(e.target.value))} />
      <span>합계: {a + b}</span>
    </div>
  );
};`}
          desc={`selector를 활용해 필요한 상태만 구독하거나, 미들웨어(persist 등)로 기능 확장 가능.\n\n- 실전 활용: 파생 상태, 성능 최적화, 로컬스토리지 연동 등\n- Tip: subscribe, persist, devtools 등 미들웨어 적극 활용\n- Best Practice: selector로 불필요한 리렌더 최소화`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 실전 Todo 예제</Typography>
        <ExampleTab
          example={<TodoDemo />}
          code={`const useTodoStore = create(set => ({
  todos: [],
  add: text => set(state => ({ ...state, todos: [...state.todos, { id: Date.now(), text, done: false }] })),
  toggle: id => set(state => ({ ...state, todos: state.todos.map(t => t.id === id ? { ...t, done: !t.done } : t) })),
  remove: id => set(state => ({ ...state, todos: state.todos.filter(t => t.id !== id) })),
}));

const TodoDemo = () => {
  const { todos, add, toggle, remove } = useTodoStore();
  const [input, setInput] = React.useState('');
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => { if (input) { add(input); setInput(''); } }}>추가</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} onChange={() => toggle(todo.id)} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => remove(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`}
          desc={`실전 Todo 관리 예제입니다.\n\n- 실전 활용: 할 일, 메모, 북마크 등 리스트 관리\n- Tip: 상태/함수 분리, selector, 미들웨어로 확장 가능\n- Best Practice: store를 여러 모듈로 분리, 타입 명확히 관리`}
        />
      </div>
    </div>
  );
};

export default ZustandExample; 