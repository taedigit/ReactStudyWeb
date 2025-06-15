import { 
  Box, 
  Typography, 
  Button, 
  CircularProgress, 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox,
  IconButton, 
  Card, 
  CardContent, 
  Stack, 
  Avatar,
  LinearProgress
} from '@mui/material';
import { atom, selector, atomFamily, useRecoilState, useRecoilValue } from 'recoil';
import React, { Suspense } from 'react';
import { Delete, Add, Remove, PushPin, PushPinOutlined, Close } from '@mui/icons-material';
import { ExampleTab } from '../../components/ExampleTab';

// 불필요한 컴포넌트와 변수 제거



// 1. 기본 atom 예제
const counterState = atom<number>({
  key: 'counterState',
  default: 0,
});

const BasicAtomDemo = () => {
  const [count, setCount] = useRecoilState(counterState);

  const handleIncrement = () => setCount(c => c + 1);
  const handleDecrement = () => setCount(c => c - 1);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        카운트: {count}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button 
          variant="contained" 
          onClick={handleIncrement}
          startIcon={<Add />}
        >
          증가
        </Button>
        <Button 
          variant="outlined" 
          onClick={handleDecrement}
          startIcon={<Remove />}
        >
          감소
        </Button>
      </Stack>
    </Box>
  );
};

// 2. Selector 예제
const doubleCountState = selector<number>({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(counterState);
    return count * 2;
  },
});

const evenOddState = selector<string>({
  key: 'evenOddState',
  get: ({get}) => {
    const count = get(counterState);
    return count % 2 === 0 ? '짝수' : '홀수';
  },
});

const countStatsState = selector<{ double: number; evenOdd: string }>({
  key: 'countStatsState',
  get: ({get}) => ({
    double: get(doubleCountState),
    evenOdd: get(evenOddState),
  }),
});

const SelectorDemo = () => {
  const [count, setCount] = useRecoilState(counterState);
  const stats = useRecoilValue(countStatsState);

  return (
    <Box>
      <Stack spacing={2}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">원래 값</Typography>
          <Typography variant="h6">{count}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">2배 값</Typography>
          <Typography variant="h6">{stats.double}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">홀짝</Typography>
          <Typography variant="h6">{stats.evenOdd}</Typography>
        </Box>
        <Button 
          variant="contained" 
          onClick={() => setCount(c => c + 1)}
          startIcon={<Add />}
        >
          값 변경
        </Button>
      </Stack>
    </Box>
  );
};

// Todo 리스트 타입 정의
interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

// Todo 리스트 atom
const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

// 필터 상태
const todoListFilterState = atom<'Show All' | 'Show Completed' | 'Show Uncompleted'>({
  key: 'todoListFilterState',
  default: 'Show All',
});

// 필터링된 Todo 리스트
const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// Todo 리스트 통계
const todoListStatsState = selector<{
  total: number;
  totalCompleted: number;
  totalUncompleted: number;
  percentCompleted: number;
}>({
  key: 'todoListStatsState',
  get: ({get}) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const totalCompleted = todoList.filter((item) => item.isComplete).length;
    const totalUncompleted = total - totalCompleted;
    const percentCompleted = total === 0 ? 0 : (totalCompleted / total) * 100;

    return {
      total,
      totalCompleted,
      totalUncompleted,
      percentCompleted,
    };
  },
});

const TodoListDemo = () => {
  const [, setTodoList] = useRecoilState(todoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);
  const stats = useRecoilValue(todoListStatsState);
  const [newTodoText, setNewTodoText] = React.useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      setTodoList(oldTodoList => [
        ...oldTodoList,
        {
          id: Date.now(),
          text: newTodoText.trim(),
          isComplete: false,
        },
      ]);
      setNewTodoText('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodoList(oldTodoList =>
      oldTodoList.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodoList(oldTodoList => oldTodoList.filter(todo => todo.id !== id));
  };

  return (
    <Box>
      <form onSubmit={addTodo}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <TextField
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="할 일 입력"
            size="small"
            fullWidth
          />
          <Button type="submit" variant="contained">추가</Button>
        </Stack>
      </form>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Button
          variant={filter === 'Show All' ? 'contained' : 'outlined'}
          onClick={() => setFilter('Show All')}
        >
          전체 ({stats.total})
        </Button>
        <Button
          variant={filter === 'Show Completed' ? 'contained' : 'outlined'}
          onClick={() => setFilter('Show Completed')}
        >
          완료 ({stats.totalCompleted})
        </Button>
        <Button
          variant={filter === 'Show Uncompleted' ? 'contained' : 'outlined'}
          onClick={() => setFilter('Show Uncompleted')}
        >
          미완료 ({stats.totalUncompleted})
        </Button>
      </Stack>

      <List>
        {filteredTodoList.map(todo => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                <Delete />
              </IconButton>
            }
          >
            <Checkbox
              edge="start"
              checked={todo.isComplete}
              onChange={() => toggleTodo(todo.id)}
            />
            <ListItemText 
              primary={todo.text}
              sx={todo.isComplete ? { 
                textDecoration: 'line-through',
                color: 'text.secondary'
              } : undefined}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 2 }}>
        <LinearProgress 
          variant="determinate" 
          value={stats.percentCompleted} 
          sx={{ mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          진행률: {Math.round(stats.percentCompleted)}%
        </Typography>
      </Box>
    </Box>
  );
};

// 비동기 데이터 타입 정의
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

// 비동기 데이터 로딩 상태를 위한 atom
const userIdState = atom<number>({
  key: 'userIdState',
  default: 1,
});

// 비동기 데이터를 가져오는 selector
const userState = selector<User>({
  key: 'userState',
  get: async ({get}) => {
    const id = get(userIdState);
    
    // 일부러 지연시간 추가
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const user = await response.json();
    
    // Avatar URL 생성 (실제 API는 avatar를 제공하지 않으므로 임의로 생성)
    return {
      ...user,
      avatar: `https://i.pravatar.cc/150?u=${user.email}`,
    };
  },
});

const AsyncDemo = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        비동기 데이터 로딩 예제
      </Typography>
      
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        {[1, 2, 3, 4, 5].map((id) => (
          <Button
            key={id}
            variant={userId === id ? 'contained' : 'outlined'}
            onClick={() => setUserId(id)}
          >
            User {id}
          </Button>
        ))}
      </Stack>

      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <CircularProgress />
        </Box>
      }>
        <UserInfo />
      </Suspense>
    </Box>
  );
};

const UserInfo = () => {
  const user = useRecoilValue(userState);
  
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 64, height: 64 }}
          />
          <Box>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </Box>
        </Stack>
        
        <Stack spacing={1}>
          <Typography variant="subtitle2" color="text.secondary">
            User ID: {user.id}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

// 노트 타입 정의
interface Note {
  id: number;
  title: string;
  content: string;
  color: string;
  isPinned: boolean;
  lastModified: number;
}

// 노트 목록을 위한 atom
const notesState = atom<number[]>({
  key: 'notesState',
  default: [1, 2], // 기본적으로 2개의 노트 표시
});

// 개별 노트를 위한 atomFamily
const noteState = atomFamily<Note, number>({
  key: 'noteState',
  default: (id) => ({
    id,
    title: `노트 ${id}`,
    content: '내용을 입력하세요...',
    color: ['#fff3e0', '#e3f2fd', '#f3e5f5', '#e8f5e9'][id % 4],
    isPinned: false,
    lastModified: Date.now(),
  }),
});

const AtomFamilyDemo = () => {
  const [notes, setNotes] = useRecoilState(notesState);
  const [selectedNote, setSelectedNote] = React.useState<number | null>(null);

  const addNote = () => {
    const newId = Math.max(...notes, 0) + 1;
    setNotes(prev => [...prev, newId]);
  };

  const deleteNote = (id: number) => {
    setNotes(prev => prev.filter(noteId => noteId !== id));
    if (selectedNote === id) {
      setSelectedNote(null);
    }
  };

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h6">
          노트 목록
        </Typography>
        <Button 
          variant="contained" 
          onClick={addNote}
          startIcon={<Add />}
        >
          새 노트
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Box sx={{ flex: selectedNote ? '0 0 66.666667%' : '0 0 100%' }}>
          <Stack spacing={2}>
            {notes.map((id) => (
              <NoteCard
                key={id}
                id={id}
                onDelete={() => deleteNote(id)}
                onClick={() => setSelectedNote(id)}
                selected={selectedNote === id}
              />
            ))}
          </Stack>
        </Box>
        
        {selectedNote && (
          <Box sx={{ flex: '0 0 33.333333%' }}>
            <NoteEditor
              id={selectedNote}
              onClose={() => setSelectedNote(null)}
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

const NoteCard = ({ 
  id, 
  onDelete, 
  onClick,
  selected 
}: { 
  id: number; 
  onDelete: () => void;
  onClick: () => void;
  selected: boolean;
}) => {
  const [note, setNote] = useRecoilState(noteState(id));

  const togglePin = (e: React.MouseEvent) => {
    e.stopPropagation();
    setNote(prev => ({
      ...prev,
      isPinned: !prev.isPinned,
      lastModified: Date.now(),
    }));
  };

  return (
    <Card 
      sx={{ 
        bgcolor: note.color,
        cursor: 'pointer',
        outline: selected ? '2px solid #1976d2' : 'none',
      }}
      onClick={onClick}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="h6" noWrap sx={{ flex: 1 }}>
            {note.title || '제목 없음'}
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton size="small" onClick={togglePin}>
              {note.isPinned ? <PushPin /> : <PushPinOutlined />}
            </IconButton>
            <IconButton size="small" onClick={(e) => { e.stopPropagation(); onDelete(); }}>
              <Delete />
            </IconButton>
          </Stack>
        </Stack>
        
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {note.content || '내용 없음'}
        </Typography>
        
        <Typography 
          variant="caption" 
          color="text.secondary"
          sx={{ mt: 1, display: 'block' }}
        >
          마지막 수정: {new Date(note.lastModified).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

const NoteEditor = ({ 
  id,
  onClose 
}: { 
  id: number;
  onClose: () => void;
}) => {
  const [note, setNote] = useRecoilState(noteState(id));
  const colors = ['#fff3e0', '#e3f2fd', '#f3e5f5', '#e8f5e9'];

  const handleChange = (field: keyof Note, value: string | boolean) => {
    setNote(prev => ({
      ...prev,
      [field]: value,
      lastModified: Date.now(),
    }));
  };

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">노트 편집</Typography>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Stack>

          <TextField
            label="제목"
            value={note.title}
            onChange={(e) => handleChange('title', e.target.value)}
            fullWidth
          />
          
          <TextField
            label="내용"
            value={note.content}
            onChange={(e) => handleChange('content', e.target.value)}
            multiline
            rows={4}
            fullWidth
          />
          
          <Box>
            <Typography gutterBottom>배경색</Typography>
            <Stack direction="row" spacing={1}>
              {colors.map((color) => (
                <Box
                  key={color}
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: color,
                    borderRadius: 1,
                    cursor: 'pointer',
                    outline: note.color === color ? '2px solid #1976d2' : 'none',
                  }}
                  onClick={() => handleChange('color', color)}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

// 7. 쇼핑카트 예제








export const RecoilExample = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Recoil 예제
      </Typography>

      {[
        {
          desc: '기본적인 Atom 사용 예제입니다. 카운터를 통해 상태 관리의 기본을 보여줍니다.',
          example: <BasicAtomDemo />,
          code: `const counterState = atom<number>({
  key: 'counterState',
  default: 0,
});`,
        },
        {
          desc: 'Selector를 사용하여 파생된 상태를 계산하는 예제입니다.',
          example: <SelectorDemo />,
          code: `const doubleCountState = selector<number>({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(counterState);
    return count * 2;
  },
});`,
        },
        {
          desc: 'Todo 리스트를 통해 복잡한 상태 관리와 필터링을 구현한 예제입니다.',
          example: <TodoListDemo />,
          code: `const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});`,
        },
        {
          desc: '비동기 데이터를 Selector로 관리하는 예제입니다. 사용자 정보를 API로 불러옵니다.',
          example: <AsyncDemo />,
          code: `const userState = selector<User>({
  key: 'userState',
  get: async ({get}) => {
    const id = get(userIdState);
    const response = await fetch(
      \`https://jsonplaceholder.typicode.com/users/\${id}\`
    );
    return response.json();
  },
});`,
        },
        {
          desc: 'Atom Family를 사용하여 동적인 상태 집합을 관리하는 예제입니다. 노트 앱을 구현했습니다.',
          example: <AtomFamilyDemo />,
          code: `const notesState = atom<number[]>({
  key: 'notesState',
  default: [1, 2], // 기본적으로 2개의 노트 표시
});

const noteState = atomFamily<Note, number>({
  key: 'noteState',
  default: (id) => ({
    id,
    title: \`노트 \${id}\`,
    content: '내용을 입력하세요...',
    color: ['#fff3e0', '#e3f2fd', '#f3e5f5', '#e8f5e9'][id % 4],
    isPinned: false,
    lastModified: Date.now(),
  }),
});`,
        },
      ].map((example, index) => (
        <ExampleTab
          key={index}
          example={example.example}
          code={example.code}
          desc={example.desc}
        />
      ))}
    </Box>
  );
};

export default RecoilExample;