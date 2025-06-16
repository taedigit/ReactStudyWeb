import React from 'react';
import { atom, useAtom } from 'jotai';
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
const countAtom = atom(0);
const CounterDemo = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <Button onClick={() => setCount(c => c - 1)} variant="outlined">-</Button>
      <Typography variant="h6" sx={{ minWidth: 40, textAlign: 'center' }}>{count}</Typography>
      <Button onClick={() => setCount(c => c + 1)} variant="contained">+</Button>
    </div>
  );
};

// 2. 여러 atom 조합
const nameAtom = atom('홍길동');
const ageAtom = atom(20);
const UserDemo = () => {
  const [name, setName] = useAtom(nameAtom);
  const [age, setAge] = useAtom(ageAtom);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <TextField label="이름" value={name} onChange={e => setName(e.target.value)} size="small" />
      <TextField label="나이" type="number" value={age} onChange={e => setAge(Number(e.target.value))} size="small" />
      <Typography>이름: {name}, 나이: {age}</Typography>
    </div>
  );
};

// 3. derived atom 예제
const aAtom = atom(1);
const bAtom = atom(2);
const sumAtom = atom((get) => get(aAtom) + get(bAtom));
const SelectorDemo = () => {
  const [a, setA] = useAtom(aAtom);
  const [b, setB] = useAtom(bAtom);
  const [sum] = useAtom(sumAtom);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <TextField label="A" type="number" value={a} onChange={e => setA(Number(e.target.value))} size="small" />
      <TextField label="B" type="number" value={b} onChange={e => setB(Number(e.target.value))} size="small" />
      <Typography>합계: {sum}</Typography>
    </div>
  );
};

// 4. 실전 Todo 예제
const todosAtom = atom<{ id: number; text: string; done: boolean }[]>([]);
const TodoDemo = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [input, setInput] = React.useState('');
  const add = (text: string) => setTodos(tds => [...tds, { id: Date.now(), text, done: false }]);
  const toggle = (id: number) => setTodos(tds => tds.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const remove = (id: number) => setTodos(tds => tds.filter(t => t.id !== id));
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <TextField value={input} onChange={e => setInput(e.target.value)} size="small" label="할 일" onKeyDown={e => { if (e.key === 'Enter' && input) { add(input); setInput(''); } }} />
        <Button onClick={() => { if (input) { add(input); setInput(''); } }} variant="contained">추가</Button>
      </div>
      <List dense>
        {todos.map(todo => (
          <ListItem key={todo.id} secondaryAction={<Button onClick={() => remove(todo.id)} size="small">삭제</Button>}>
            <Checkbox checked={todo.done} onChange={() => toggle(todo.id)} />
            <ListItemText primary={todo.text} sx={{ textDecoration: todo.done ? 'line-through' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const JotaiExample: React.FC = () => {
  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h4" gutterBottom>Jotai 주요 예제</Typography>
        <Typography variant="body1" gutterBottom>
          Jotai는 <b>원자(atom) 단위의 심플한 상태 관리</b>를 지향하는 React 라이브러리입니다.<br/>
          <ul style={{margin: '1em 0 0 1.2em', color: '#b2dfdb', fontSize: 16}}>
            <li>Context 기반, 러닝커브가 매우 낮음</li>
            <li>atom 단위로 상태를 분리, 조합, 파생 가능</li>
            <li>Redux/Context 대비 코드량이 적고, 타입스크립트와 궁합이 좋음</li>
            <li>비동기, 파생 상태, 외부 상태 연동 등 실무 기능 지원</li>
          </ul>
          <span style={{color:'#ffd600'}}>실전에서 자주 쓰는 패턴과 실무 팁, 베스트 프랙티스도 함께 소개합니다.</span>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 카운터 atom</Typography>
        <ExampleTab
          example={<CounterDemo />}
          code={`const countAtom = atom(0);

const CounterDemo = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
};`}
          desc={`가장 기본적인 atom 상태 관리 예제입니다.\n\n- 실전 활용: 카운터, 토글, 단일 값 관리\n- Tip: 여러 컴포넌트에서 동일 atom을 공유할 때 매우 간단\n- Best Practice: atom을 별도 파일로 분리, 재사용성↑`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 여러 atom 조합</Typography>
        <ExampleTab
          example={<UserDemo />}
          code={`const nameAtom = atom('홍길동');
const ageAtom = atom(20);

const UserDemo = () => {
  const [name, setName] = useAtom(nameAtom);
  const [age, setAge] = useAtom(ageAtom);
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={age} type="number" onChange={e => setAge(Number(e.target.value))} />
      <span>이름: {name}, 나이: {age}</span>
    </div>
  );
};`}
          desc={`여러 atom을 조합해 상태를 분리/관리하는 패턴입니다.\n\n- 실전 활용: 사용자 정보, 폼 상태 등\n- Tip: atom을 작은 단위로 쪼개고, 필요에 따라 조합\n- Best Practice: atom 간 의존성/파생 atom 적극 활용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 파생(derived) atom</Typography>
        <ExampleTab
          example={<SelectorDemo />}
          code={`const aAtom = atom(1);
const bAtom = atom(2);
const sumAtom = atom((get) => get(aAtom) + get(bAtom));

const SelectorDemo = () => {
  const [a, setA] = useAtom(aAtom);
  const [b, setB] = useAtom(bAtom);
  const [sum] = useAtom(sumAtom);
  return (
    <div>
      <input value={a} onChange={e => setA(Number(e.target.value))} />
      <input value={b} onChange={e => setB(Number(e.target.value))} />
      <span>합계: {sum}</span>
    </div>
  );
};`}
          desc={`파생 atom을 활용해 여러 atom의 값을 조합/계산할 수 있습니다.\n\n- 실전 활용: 합계, 평균, 파생 상태 등\n- Tip: get/set으로 동적 파생 atom 구현 가능\n- Best Practice: atom 간 의존성 명확히 관리`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 실전 Todo 예제</Typography>
        <ExampleTab
          example={<TodoDemo />}
          code={`const todosAtom = atom([]);

const TodoDemo = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [input, setInput] = React.useState('');
  const add = text => setTodos(tds => [...tds, { id: Date.now(), text, done: false }]);
  const toggle = id => setTodos(tds => tds.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const remove = id => setTodos(tds => tds.filter(t => t.id !== id));
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
          desc={`실전 Todo 관리 예제입니다.\n\n- 실전 활용: 할 일, 메모, 북마크 등 리스트 관리\n- Tip: atom/파생 atom, useAtomValue, useSetAtom 등 다양한 hook 조합\n- Best Practice: atom을 여러 파일로 분리, 타입 명확히 관리`}
        />
      </div>
    </div>
  );
};

export default JotaiExample; 