import { Box, Typography, Button, CircularProgress, TextField, List, ListItem, ListItemText, Checkbox, IconButton, Switch, Card, CardContent, Slider, Alert, Stack, Chip, ListItemButton, Avatar } from '@mui/material';
import { atom, selector, atomFamily, useRecoilState, useRecoilValue, RecoilRoot, useResetRecoilState } from 'recoil';
import React, { Suspense } from 'react';
import { Delete, ShoppingCart } from '@mui/icons-material';
import { Laptop, Smartphone, Headphones, Keyboard } from '@mui/icons-material';
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
  basicAtom: `Recoil의 가장 기본적인 상태 관리 단위인 atom을 소개합니다.

특징:
• atom은 상태의 기본 단위이며, 고유한 key로 구분됩니다
• useRecoilState()로 읽기/쓰기가 가능합니다
• useRecoilValue()로 읽기만 할 수 있습니다
• useSetRecoilState()로 쓰기만 할 수 있습니다
• 여러 컴포넌트에서 같은 atom을 구독하면 상태가 동기화됩니다

사용 예시:
- 카운터 값
- 입력 폼 데이터
- 토글 상태`,

  selector: `atom에서 파생된 상태를 관리하는 selector를 소개합니다.

특징:
• 하나 이상의 atom이나 다른 selector를 기반으로 계산됩니다
• get 함수로 의존하는 상태들을 읽어올 수 있습니다
• set 함수로 다른 atom들을 업데이트할 수 있습니다
• 의존하는 상태가 변경되면 자동으로 재계산됩니다
• 순수 함수처럼 동작하여 예측 가능한 상태 관리가 가능합니다

활용 사례:
- 필터링된 목록
- 계산된 통계
- 데이터 변환`,

  todoList: `실제 애플리케이션과 유사한 Todo 리스트 예제입니다.

구현된 기능:
• Todo 항목 추가/삭제/수정
• 완료 여부 토글
• 필터링 (전체/완료/미완료)
• 실시간 통계 (전체/완료/미완료 개수, 진행률)

사용된 Recoil 기능:
- atom: Todo 목록과 필터 상태 관리
- selector: 필터링된 목록과 통계 계산
- 상태 업데이트 로직 구현

학습 포인트:
• 복잡한 상태 관리 패턴
• 컴포넌트 분리와 상태 공유
• 실시간 계산된 상태 활용`,

  async: `Recoil의 비동기 데이터 처리 방법을 소개합니다.

주요 기능:
• 비동기 selector를 통한 데이터 페칭
• Suspense를 활용한 로딩 상태 처리
• ErrorBoundary를 통한 에러 처리
• 자동 캐싱과 재검증

장점:
- 선언적인 데이터 페칭
- 로딩/에러 상태 자동 처리
- 컴포넌트 코드의 간결화
- 캐시 관리 자동화`,

  atomFamily: `동적으로 생성되는 상태를 관리하는 atomFamily를 소개합니다.

특징:
• ID나 매개변수에 따라 독립적인 atom을 생성
• 목록의 각 항목을 개별적으로 관리 가능
• 메모리 관리 자동화 (사용되지 않는 atom 정리)
• 매개변수 기반의 캐싱

활용 사례:
- 목록 아이템의 개별 상태 관리
- 동적 폼 필드
- 탭 별 상태 관리`,

  form: `Recoil을 사용한 폼 상태 관리 예제입니다.

구현된 기능:
• 복잡한 폼 상태를 단일 atom으로 관리
• selector를 사용한 실시간 유효성 검사
• 중첩된 객체 구조의 상태 관리
• 폼 초기화 및 제출 처리

특징:
- 선언적인 폼 상태 관리
- 실시간 유효성 검사
- 타입 안정성
- 재사용 가능한 패턴`,

  cart: `실제 쇼핑몰과 유사한 장바구니 기능을 구현한 예제입니다.

구현된 기능:
• 상품 목록 표시
• 장바구니 담기/수량 조절
• 실시간 총액 계산
• 상품별 재고 관리

사용된 Recoil 기능:
- atom: 상품 목록, 장바구니 상태 관리
- selector: 총액, 총 수량 계산
- atomFamily: 상품별 재고 관리

학습 포인트:
• 복잡한 상태 간의 동기화
• 실시간 계산된 값 활용
• 사용자 인터랙션 처리`,

  asyncSync: `비동기 데이터의 동기화와 캐싱을 다루는 고급 예제입니다.

구현된 기능:
• 게시글 목록과 상세 정보의 비동기 로딩
• 선택된 게시글의 실시간 동기화
• 로딩 상태의 세분화된 처리
• 에러 처리와 재시도

기술적 포인트:
- 비동기 selector를 통한 데이터 페칭
- Suspense를 활용한 로딩 UI
- 낙관적 업데이트 구현
- 데이터 동기화 패턴

사용 시나리오:
• 목록-상세 뷰 패턴
• 실시간 데이터 동기화
• 캐시된 데이터 활용`
};

// 기본 atom 예제
const counterState = atom({
  key: 'counterState',
  default: 0,
});

const BasicAtomDemo = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>카운트: {count}</Typography>
      <Button variant="contained" onClick={() => setCount(c => c + 1)} sx={{ mr: 1 }}>증가</Button>
      <Button variant="outlined" onClick={() => setCount(c => c - 1)}>감소</Button>
    </Box>
  );
};

// Selector 예제
const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(counterState);
    return count * 2;
  },
});

const evenOddState = selector({
  key: 'evenOddState',
  get: ({get}) => {
    const count = get(counterState);
    return count % 2 === 0 ? '짝수' : '홀수';
  },
});

const SelectorDemo = () => {
  const [count, setCount] = useRecoilState(counterState);
  const doubleCount = useRecoilValue(doubleCountState);
  const evenOdd = useRecoilValue(evenOddState);

  return (
    <Box>
      <Typography variant="body1" gutterBottom>원래 값: {count}</Typography>
      <Typography variant="body1" gutterBottom>2배 값: {doubleCount}</Typography>
      <Typography variant="body1" gutterBottom>홀짝: {evenOdd}</Typography>
      <Button variant="contained" onClick={() => setCount(c => c + 1)}>값 변경</Button>
    </Box>
  );
};

// Todo 리스트 예제
const todoListState = atom({
  key: 'todoListState',
  default: [] as Array<{ id: number; text: string; isComplete: boolean }>,
});

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All' as 'Show All' | 'Show Completed' | 'Show Uncompleted',
});

const filteredTodoListState = selector({
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

const todoListStatsState = selector({
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

  const addTodo = () => {
    if (newTodoText.trim()) {
      setTodoList(oldTodoList => [
        ...oldTodoList,
        {
          id: Date.now(),
          text: newTodoText,
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
      <Box sx={{ mb: 2 }}>
        <TextField
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="할 일 입력"
          size="small"
          sx={{ mr: 1 }}
        />
        <Button variant="contained" onClick={addTodo}>추가</Button>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Button
          variant={filter === 'Show All' ? 'contained' : 'outlined'}
          onClick={() => setFilter('Show All')}
          sx={{ mr: 1 }}
        >
          전체
        </Button>
        <Button
          variant={filter === 'Show Completed' ? 'contained' : 'outlined'}
          onClick={() => setFilter('Show Completed')}
          sx={{ mr: 1 }}
        >
          완료
        </Button>
        <Button
          variant={filter === 'Show Uncompleted' ? 'contained' : 'outlined'}
          onClick={() => setFilter('Show Uncompleted')}
        >
          미완료
        </Button>
      </Box>

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
              sx={todo.isComplete ? { textDecoration: 'line-through' } : {}}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">전체: {stats.total}</Typography>
        <Typography variant="body2">완료: {stats.totalCompleted}</Typography>
        <Typography variant="body2">미완료: {stats.totalUncompleted}</Typography>
        <Typography variant="body2">
          진행률: {Math.round(stats.percentCompleted)}%
        </Typography>
      </Box>
    </Box>
  );
};

// 비동기 데이터 예제
const userIdState = atom({
  key: 'userIdState',
  default: '1',
});

const userState = selector({
  key: 'userState',
  get: async ({get}) => {
    const userId = get(userIdState);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.json();
  },
});

const AsyncDemo = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  const user = useRecoilValue(userState);

  return (
    <Box>
      <TextField
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        label="사용자 ID"
        size="small"
        sx={{ mb: 2 }}
      />
      <Typography variant="body1">이름: {user.name}</Typography>
      <Typography variant="body1">이메일: {user.email}</Typography>
      <Typography variant="body1">전화번호: {user.phone}</Typography>
    </Box>
  );
};

// AtomFamily 예제
const todoItemState = atomFamily({
  key: 'todoItemState',
  default: (id: number) => ({
    id,
    text: '',
    isComplete: false,
  }),
});

const AtomFamilyDemo = () => {
  const [items, setItems] = React.useState([1, 2, 3]);
  
  const addItem = () => {
    setItems(prev => [...prev, Math.max(...prev) + 1]);
  };

  return (
    <Box>
      <Button variant="contained" onClick={addItem} sx={{ mb: 2 }}>
        항목 추가
      </Button>
      {items.map(id => (
        <TodoItemComponent key={id} id={id} />
      ))}
    </Box>
  );
};

const TodoItemComponent = ({ id }: { id: number }) => {
  const [item, setItem] = useRecoilState(todoItemState(id));

  return (
    <Box sx={{ mb: 1 }}>
      <TextField
        size="small"
        value={item.text}
        onChange={(e) => setItem({ ...item, text: e.target.value })}
        sx={{ mr: 1 }}
      />
      <Switch
        checked={item.isComplete}
        onChange={(e) => setItem({ ...item, isComplete: e.target.checked })}
      />
    </Box>
  );
};

// 6. 폼 상태 관리 예제
const formState = atom({
  key: 'formState',
  default: {
    username: '',
    email: '',
    age: 20,
    preferences: {
      newsletter: false,
      notifications: true
    }
  }
});

const formErrorState = selector({
  key: 'formErrorState',
  get: ({get}) => {
    const form = get(formState);
    const errors: Record<string, string> = {};
    
    if (!form.username) {
      errors.username = '사용자 이름을 입력해주세요';
    }
    
    if (!form.email) {
      errors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다';
    }
    
    if (form.age < 14) {
      errors.age = '14세 이상만 가입 가능합니다';
    }
    
    return errors;
  }
});

const FormDemo = () => {
  const [form, setForm] = useRecoilState(formState);
  const errors = useRecoilValue(formErrorState);
  const resetForm = useResetRecoilState(formState);

  const handleChange = (field: string, value: any) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePreferenceChange = (field: string, value: boolean) => {
    setForm(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(errors).length === 0) {
      alert('폼 제출 성공!');
      resetForm();
    }
  };

  return (
    <Box component="form" sx={{ maxWidth: 400 }}>
      <Stack spacing={2}>
        <TextField
          label="사용자 이름"
          value={form.username}
          onChange={(e) => handleChange('username', e.target.value)}
          error={!!errors.username}
          helperText={errors.username}
        />
        
        <TextField
          label="이메일"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
        
        <Box>
          <Typography gutterBottom>나이: {form.age}</Typography>
          <Slider
            value={form.age}
            onChange={(_, value: number | number[]) => handleChange('age', Array.isArray(value) ? value[0] : value)}
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
          {errors.age && (
            <Typography color="error" variant="caption">
              {errors.age}
            </Typography>
          )}
        </Box>
        
        <Box>
          <Typography gutterBottom>환경 설정</Typography>
          <Stack direction="row" spacing={2}>
            <Checkbox
              checked={form.preferences.newsletter}
              onChange={(e) => handlePreferenceChange('newsletter', e.target.checked)}
            /> 뉴스레터 구독
            
            <Checkbox
              checked={form.preferences.notifications}
              onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
            /> 알림 받기
          </Stack>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={Object.keys(errors).length > 0}
          >
            제출
          </Button>
          <Button variant="outlined" onClick={resetForm}>
            초기화
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

// 7. 쇼핑카트 예제
interface Product {
  id: number;
  name: string;
  price: number;
  icon: React.ReactNode;
  color: string;
}

const productsState = atom<Product[]>({
  key: 'productsState',
  default: [
    { 
      id: 1, 
      name: '노트북', 
      price: 1200000,
      icon: <Laptop />,
      color: '#2196f3'
    },
    { 
      id: 2, 
      name: '스마트폰', 
      price: 800000,
      icon: <Smartphone />,
      color: '#f50057'
    },
    { 
      id: 3, 
      name: '헤드폰', 
      price: 300000,
      icon: <Headphones />,
      color: '#9c27b0'
    },
    { 
      id: 4, 
      name: '키보드', 
      price: 150000,
      icon: <Keyboard />,
      color: '#4caf50'
    },
  ]
});

const cartState = atom<Record<number, number>>({
  key: 'cartState',
  default: {}
});

const cartStatsState = selector({
  key: 'cartStatsState',
  get: ({get}) => {
    const cart = get(cartState);
    const products = get(productsState);
    
    const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
    const totalPrice = Object.entries(cart).reduce((sum, [productId, quantity]) => {
      const product = products.find(p => p.id === Number(productId));
      return sum + (product?.price ?? 0) * quantity;
    }, 0);
    
    return { totalItems, totalPrice };
  }
});

const ShoppingCartDemo = () => {
  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);
  const { totalItems, totalPrice } = useRecoilValue(cartStatsState);

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  return (
    <Box>
      <Box display="grid" gridTemplateColumns="2fr 1fr" gap={2}>
        <Box>
          <Typography variant="h6" gutterBottom>상품 목록</Typography>
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
            {products.map(product => (
              <Card key={product.id}>
                <CardContent>
                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <Avatar sx={{ bgcolor: product.color }}>
                      {product.icon}
                    </Avatar>
                    <Typography variant="h6">{product.name}</Typography>
                  </Stack>
                  <Typography color="text.secondary" variant="h6" sx={{ fontWeight: 'bold' }}>
                    {product.price.toLocaleString()}원
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => addToCart(product.id)}
                    startIcon={<ShoppingCart />}
                    sx={{ mt: 1, bgcolor: product.color }}
                  >
                    담기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        
        <Card>
          <CardContent>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <ShoppingCart />
              <Typography variant="h6">
                장바구니
              </Typography>
              <Chip 
                label={totalItems} 
                size="small" 
                color="primary"
                sx={{ ml: 1 }}
              />
            </Stack>
            
            {Object.entries(cart).map(([productId, quantity]) => {
              const product = products.find(p => p.id === Number(productId));
              if (!product) return null;
              
              return (
                <Box 
                  key={productId} 
                  sx={{ 
                    mb: 1, 
                    p: 1,
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    borderRadius: 1,
                    bgcolor: product.color + '10'
                  }}
                >
                  <Avatar 
                    sx={{ 
                      width: 30, 
                      height: 30, 
                      bgcolor: product.color 
                    }}
                  >
                    {product.icon}
                  </Avatar>
                  <Typography flex={1}>{product.name}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => removeFromCart(product.id)}
                      sx={{ 
                        minWidth: '32px',
                        p: 0,
                        borderColor: product.color,
                        color: product.color
                      }}
                    >
                      -
                    </Button>
                    <Typography sx={{ minWidth: '20px', textAlign: 'center' }}>
                      {quantity}
                    </Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => addToCart(product.id)}
                      sx={{ 
                        minWidth: '32px',
                        p: 0,
                        borderColor: product.color,
                        color: product.color
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              );
            })}
            
            <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
              <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>총 금액</span>
                <span>{totalPrice.toLocaleString()}원</span>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

// Post 타입 정의
interface Post {
  id: number;
  title: string;
  body: string;
}

// 게시글 목록을 위한 atom
const postsState = atom<Post[]>({
  key: 'postsState',
  default: [],
});

// 선택된 게시글 ID를 위한 atom
const selectedPostIdState = atom<number | null>({
  key: 'selectedPostIdState',
  default: null,
});

// 선택된 게시글의 상세 정보를 가져오는 selector
const selectedPostState = selector<Post | null>({
  key: 'selectedPostState',
  get: async ({get}) => {
    const postId = get(selectedPostIdState);
    if (!postId) return null;
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
    return response.json();
  },
});

// 비동기 데이터 동기화 데모 컴포넌트
const AsyncSyncDemo = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const [selectedId, setSelectedId] = useRecoilState(selectedPostIdState);
  const selectedPost = useRecoilValue(selectedPostState);
  const [isLoading, setIsLoading] = React.useState(false);

  // 컴포넌트 마운트 시 게시글 목록 가져오기
  React.useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data.slice(0, 5)); // 처음 5개만 표시
      } catch (error) {
        console.error('게시글을 불러오는데 실패했습니다:', error);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [setPosts]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        <Box>
          <Typography variant="h6" gutterBottom>게시글 목록</Typography>
          <List>
            {posts.map(post => (
              <ListItemButton
                key={post.id}
                selected={selectedId === post.id}
                onClick={() => setSelectedId(post.id)}
              >
                <ListItemText primary={post.title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        
        <Box>
          <Typography variant="h6" gutterBottom>선택된 게시글</Typography>
          {selectedId ? (
            <Suspense fallback={<CircularProgress />}>
              {selectedPost && (
                <Box>
                  <Typography variant="h6">{selectedPost.title}</Typography>
                  <Typography color="text.secondary">{selectedPost.body}</Typography>
                </Box>
              )}
            </Suspense>
          ) : (
            <Alert severity="info">게시글을 선택해주세요</Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export const RecoilExample = () => {
  return (
    <RecoilRoot>
      <Box>
        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 Atom</Typography>
          <ExampleTab
            example={<BasicAtomDemo />}
            code={`const counterState = atom({
  key: 'counterState',
  default: 0,
});

const BasicAtomDemo = () => {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>카운트: {count}</Typography>
      <Button variant="contained" onClick={() => setCount(c => c + 1)} sx={{ mr: 1 }}>증가</Button>
      <Button variant="outlined" onClick={() => setCount(c => c - 1)}>감소</Button>
    </Box>
  );
};`}
            desc={descriptions.basicAtom}
          />
        </div>

        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>2. Selector</Typography>
          <ExampleTab
            example={<SelectorDemo />}
            code={`const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(counterState);
    return count * 2;
  },
});

const evenOddState = selector({
  key: 'evenOddState',
  get: ({get}) => {
    const count = get(counterState);
    return count % 2 === 0 ? '짝수' : '홀수';
  },
});`}
            desc={descriptions.selector}
          />
        </div>

        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>3. Todo 리스트</Typography>
          <ExampleTab
            example={<TodoListDemo />}
            code={`const todoListState = atom({
  key: 'todoListState',
  default: [],
});

const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

const filteredTodoListState = selector({
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
});`}
            desc={descriptions.todoList}
          />
        </div>

        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>4. 비동기 데이터</Typography>
          <ExampleTab
            example={<AsyncDemo />}
            code={`const userState = selector({
  key: 'userState',
  get: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
  },
});`}
            desc={descriptions.async}
          />
        </div>

        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>5. Atom Family</Typography>
          <ExampleTab
            example={<AtomFamilyDemo />}
            code={`const itemState = atomFamily({
  key: 'itemState',
  default: (id: number) => ({
    id,
    text: '',
    isComplete: false,
  }),
});`}
            desc={descriptions.atomFamily}
          />
        </div>

        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>6. 폼 상태 관리</Typography>
          <ExampleTab
            example={<FormDemo />}
            code={`const formState = atom({
  key: 'formState',
  default: {
    username: '',
    email: '',
    age: 20,
    preferences: {
      newsletter: false,
      notifications: true,
    },
  },
});`}
            desc={descriptions.form}
          />
        </div>

        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>7. 쇼핑 카트 구현</Typography>
          <ExampleTab
            example={<ShoppingCartDemo />}
            code={`const productsState = atom({
  key: 'productsState',
  default: [
    { id: 1, name: '노트북', price: 1200000, icon: <Laptop />, color: '#2196f3' },
    { id: 2, name: '스마트폰', price: 800000, icon: <Smartphone />, color: '#f50057' },
    { id: 3, name: '헤드폰', price: 300000, icon: <Headphones />, color: '#9c27b0' },
    { id: 4, name: '키보드', price: 150000, icon: <Keyboard />, color: '#4caf50' },
  ],
});`}
            desc={descriptions.cart}
          />
        </div>

        <div style={recoilExampleBlockStyle}>
          <Typography variant="h6" sx={{ mb: 2 }}>8. 비동기 데이터 동기화</Typography>
          <ExampleTab
            example={
              <Suspense fallback={<CircularProgress />}>
                <AsyncSyncDemo />
              </Suspense>
            }
            code={`// 게시글 목록을 위한 atom
const postsState = atom({
  key: 'postsState',
  default: [],
});

// 선택된 게시글 ID를 위한 atom
const selectedPostIdState = atom({
  key: 'selectedPostIdState',
  default: null,
});

// 선택된 게시글의 상세 정보를 가져오는 selector
const selectedPostState = selector({
  key: 'selectedPostState',
  get: async ({get}) => {
    const postId = get(selectedPostIdState);
    if (!postId) return null;
    
    // 선택된 게시글의 상세 정보를 API에서 가져오기
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
    return response.json();
  },
});

// 비동기 데이터 동기화 데모 컴포넌트
const AsyncSyncDemo = () => {
  const [posts, setPosts] = useRecoilState(postsState);
  const [selectedId, setSelectedId] = useRecoilState(selectedPostIdState);
  const selectedPost = useRecoilValue(selectedPostState);
  const [isLoading, setIsLoading] = React.useState(false);

  // 컴포넌트 마운트 시 게시글 목록 가져오기
  React.useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data.slice(0, 5)); // 처음 5개만 표시
      } catch (error) {
        console.error('게시글을 불러오는데 실패했습니다:', error);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, [setPosts]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
        <Box>
          <Typography variant="h6" gutterBottom>게시글 목록</Typography>
          <List>
            {posts.map(post => (
              <ListItemButton
                key={post.id}
                selected={selectedId === post.id}
                onClick={() => setSelectedId(post.id)}
              >
                <ListItemText primary={post.title} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        
        <Box>
          <Typography variant="h6" gutterBottom>선택된 게시글</Typography>
          {selectedId ? (
            <Suspense fallback={<CircularProgress />}>
              {selectedPost && (
                <Box>
                  <Typography variant="h6">{selectedPost.title}</Typography>
                  <Typography color="text.secondary">{selectedPost.body}</Typography>
                </Box>
              )}
            </Suspense>
          ) : (
            <Alert severity="info">게시글을 선택해주세요</Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
};`}
            desc={descriptions.asyncSync}
          />
        </div>
      </Box>
    </RecoilRoot>
  );
};

export default RecoilExample;