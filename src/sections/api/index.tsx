import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

interface Example {
  title: string;
  description: string;
  code: string;
  explanation: string;
  demo?: React.ReactNode;
}

// Recoil atoms and selectors
const apiExampleCounterState = atom<number>({
  key: 'apiExampleCounterState',
  default: 0,
});

const apiExampleDoubleCountState = selector<number>({
  key: 'apiExampleDoubleCountState',
  get: ({get}) => {
    const count = get(apiExampleCounterState);
    return count * 2;
  },
});

const Counter: React.FC = () => {
  const [count, setCount] = useRecoilState(apiExampleCounterState);
  const doubleCount = useRecoilValue(apiExampleDoubleCountState);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1">카운트: {count}</Typography>
      <Typography variant="body1">2배 값: {doubleCount}</Typography>
      <Button 
        variant="contained" 
        sx={{ mr: 1 }}
        onClick={() => setCount((c: number) => c + 1)}
      >
        증가
      </Button>
      <Button 
        variant="outlined"
        onClick={() => setCount((c: number) => c - 1)}
      >
        감소
      </Button>
    </Box>
  );
};

const examples: Example[] = [
  {
    title: '기본 API 호출',
    description: 'REST API를 사용한 기본적인 데이터 가져오기 예제입니다.',
    code: `
// GET 요청 예제
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
}`,
    explanation: '위 예제는 기본적인 fetch API를 사용하여 서버로부터 데이터를 가져오는 방법을 보여줍니다. try-catch 구문을 사용하여 에러 처리도 포함되어 있습니다.'
  },
  {
    title: 'POST 요청 보내기',
    description: '서버에 데이터를 전송하는 POST 요청 예제입니다.',
    code: `
// POST 요청 예제
const sendData = async (data) => {
  try {
    const response = await fetch('https://api.example.com/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('데이터 전송 실패:', error);
  }
}`,
    explanation: 'POST 요청을 보낼 때는 method, headers, body를 설정해야 합니다. Content-Type 헤더는 JSON 데이터를 전송한다는 것을 서버에 알려줍니다.'
  },
  {
    title: '인증 토큰 사용하기',
    description: '보안된 API 엔드포인트에 접근하기 위한 인증 토큰 사용 예제입니다.',
    code: `
// 인증 토큰을 사용한 요청 예제
const fetchProtectedData = async (token) => {
  try {
    const response = await fetch('https://api.example.com/protected', {
      headers: {
        'Authorization': \`Bearer \${token}\`,
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('보호된 데이터 가져오기 실패:', error);
  }
}`,
    explanation: '많은 API는 보안을 위해 인증 토큰을 요구합니다. Authorization 헤더에 Bearer 토큰을 포함시켜 인증된 요청을 보낼 수 있습니다.'
  },
  {
    title: '파일 업로드하기',
    description: 'FormData를 사용하여 파일을 업로드하는 예제입니다.',
    code: `
// 파일 업로드 예제
const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.example.com/upload', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('파일 업로드 실패:', error);
  }
}`,
    explanation: 'FormData 객체를 사용하면 파일을 쉽게 업로드할 수 있습니다. Content-Type 헤더를 설정하지 않아도 브라우저가 자동으로 처리합니다.'
  },
  {
    title: '동시 요청 처리하기',
    description: 'Promise.all을 사용하여 여러 API 요청을 동시에 처리하는 예제입니다.',
    code: `
// 동시 요청 처리 예제
const fetchMultipleData = async (urls) => {
  try {
    const promises = urls.map(url => 
      fetch(url).then(response => response.json())
    );
    
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error('동시 요청 처리 실패:', error);
  }
}`,
    explanation: 'Promise.all을 사용하면 여러 API 요청을 병렬로 처리할 수 있어 전체 응답 시간을 줄일 수 있습니다. 단, 하나의 요청이라도 실패하면 전체가 실패합니다.'
  },
  {
    title: '요청 타임아웃 설정하기',
    description: 'AbortController를 사용하여 API 요청에 타임아웃을 설정하는 예제입니다.',
    code: `
// 타임아웃 설정 예제
const fetchWithTimeout = async (url, timeout = 5000) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('요청 시간이 초과되었습니다.');
    }
    throw error;
  }
}`,
    explanation: 'AbortController를 사용하면 요청에 타임아웃을 설정할 수 있습니다. 지정된 시간 내에 응답이 오지 않으면 요청이 자동으로 중단됩니다.'
  },
  {
    title: 'PUT/DELETE 요청 예제',
    description: 'PUT과 DELETE 메서드를 사용한 API 요청 예제입니다.',
    code: `
// PUT 요청 예제
const updateData = async (id, data) => {
  try {
    const response = await fetch(\`https://api.example.com/items/\${id}\`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    console.error('데이터 수정 실패:', error);
  }
};

// DELETE 요청 예제
const deleteData = async (id) => {
  try {
    const response = await fetch(\`https://api.example.com/items/\${id}\`, {
      method: 'DELETE'
    });
    return response.ok;
  } catch (error) {
    console.error('데이터 삭제 실패:', error);
  }
}`,
    explanation: 'PUT 요청은 리소스를 수정할 때, DELETE 요청은 리소스를 삭제할 때 사용됩니다. PUT 요청은 POST와 비슷하게 body를 포함할 수 있습니다.'
  },
  {
    title: '상세 에러 처리',
    description: '다양한 HTTP 상태 코드와 에러 상황에 대한 처리 예제입니다.',
    code: `
// 상세 에러 처리 예제
const fetchWithErrorHandling = async (url) => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('잘못된 요청입니다.');
        case 401:
          throw new Error('인증이 필요합니다.');
        case 403:
          throw new Error('접근 권한이 없습니다.');
        case 404:
          throw new Error('리소스를 찾을 수 없습니다.');
        case 500:
          throw new Error('서버 내부 오류가 발생했습니다.');
        default:
          throw new Error('알 수 없는 오류가 발생했습니다.');
      }
    }

    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('네트워크 오류:', error);
    } else {
      console.error('API 오류:', error.message);
    }
    throw error;
  }
}`,
    explanation: '상태 코드별로 적절한 에러 메시지를 제공하고, 네트워크 오류와 API 오류를 구분하여 처리합니다.'
  },
  {
    title: 'Recoil 기본 사용법',
    description: 'Recoil을 사용한 상태 관리 기본 예제입니다.',
    code: `
// 상태 정의
const counterState = atom({
  key: 'counterState',
  default: 0,
});

// 파생 상태 정의
const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(counterState);
    return count * 2;
  },
});

// 컴포넌트에서 사용
const Counter = () => {
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
};`,
    explanation: 'Recoil의 기본적인 사용법을 보여줍니다. atom으로 상태를 정의하고, selector로 파생 상태를 만들며, useRecoilState와 useRecoilValue로 상태를 사용합니다.',
    demo: <Counter />
  },
  {
    title: 'Recoil 비동기 셀렉터',
    description: 'Recoil의 비동기 셀렉터를 사용한 데이터 페칭 예제입니다.',
    code: `
// 비동기 셀렉터 정의
const userDataState = selector({
  key: 'userDataState',
  get: async () => {
    const response = await fetch('https://api.example.com/user');
    return response.json();
  },
});

// 컴포넌트에서 사용
const UserProfile = () => {
  const userData = useRecoilValue(userDataState);
  
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
    </div>
  );
};`,
    explanation: 'Recoil의 selector를 사용하여 비동기 데이터를 처리하는 방법을 보여줍니다. Suspense와 함께 사용하면 로딩 상태를 자동으로 처리할 수 있습니다.'
  },
  {
    title: 'Recoil 패밀리',
    description: 'Recoil의 atomFamily와 selectorFamily를 사용한 예제입니다.',
    code: `
// atom 패밀리 정의
const todoState = atomFamily({
  key: 'todoState',
  default: (id: number) => ({
    id,
    text: '',
    completed: false,
  }),
});

// selector 패밀리 정의
const todoStatsState = selectorFamily({
  key: 'todoStatsState',
  get: (id: number) => ({get}) => {
    const todo = get(todoState(id));
    return {
      ...todo,
      uppercase: todo.text.toUpperCase(),
    };
  },
});

// 컴포넌트에서 사용
const TodoItem = ({id}: {id: number}) => {
  const [todo, setTodo] = useRecoilState(todoState(id));
  const stats = useRecoilValue(todoStatsState(id));

  return (
    <div>
      <input
        value={todo.text}
        onChange={e => setTodo({...todo, text: e.target.value})}
      />
      <p>대문자: {stats.uppercase}</p>
    </div>
  );
};`,
    explanation: 'atomFamily와 selectorFamily를 사용하면 동적으로 상태를 생성하고 관리할 수 있습니다. ID나 다른 매개변수를 기반으로 여러 상태를 효율적으로 관리할 수 있습니다.'
  },
  {
    title: '업로드 진행률 모니터링',
    description: 'XMLHttpRequest를 사용하여 파일 업로드 진행률을 모니터링하는 예제입니다.',
    code: `
// 진행률 모니터링 예제
const uploadWithProgress = (file, onProgress) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        onProgress(progress);
      }
    });

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error('업로드 실패'));
      }
    });

    xhr.addEventListener('error', () => {
      reject(new Error('네트워크 오류'));
    });

    const formData = new FormData();
    formData.append('file', file);

    xhr.open('POST', 'https://api.example.com/upload');
    xhr.send(formData);
  });
}`,
    explanation: 'XMLHttpRequest의 progress 이벤트를 사용하여 파일 업로드의 진행 상황을 실시간으로 모니터링할 수 있습니다.'
  },
  {
    title: '캐시 처리',
    description: '브라우저 캐시와 메모리 캐시를 활용한 API 요청 최적화 예제입니다.',
    code: `
// 캐시 처리 예제
const cache = new Map();

const fetchWithCache = async (url, options = {}) => {
  const cacheKey = \`\${url}-\${JSON.stringify(options)}\`;
  
  // 메모리 캐시 확인
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey);
    const cacheAge = Date.now() - timestamp;
    
    // 캐시 유효 시간 (5분)
    if (cacheAge < 5 * 60 * 1000) {
      return data;
    }
    cache.delete(cacheKey);
  }

  // 새로운 요청
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Cache-Control': 'max-age=300' // 브라우저 캐시 5분
    }
  });
  
  const data = await response.json();
  
  // 메모리 캐시 저장
  cache.set(cacheKey, {
    data,
    timestamp: Date.now()
  });
  
  return data;
}`,
    explanation: '메모리 캐시와 HTTP 캐시를 함께 사용하여 중복 요청을 방지하고 성능을 최적화할 수 있습니다.'
  },
  {
    title: '재시도 로직',
    description: '일시적인 오류 발생 시 자동으로 재시도하는 예제입니다.',
    code: `
// 재시도 로직 예제
const fetchWithRetry = async (
  url,
  options = {},
  maxRetries = 3,
  delayMs = 1000
) => {
  let lastError;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
      return await response.json();
    } catch (error) {
      lastError = error;
      console.warn(\`시도 \${attempt + 1}/\${maxRetries} 실패:, \${error.message}\`);
      
      if (attempt < maxRetries - 1) {
        // 지수 백오프: 재시도마다 대기 시간 증가
        const waitTime = delayMs * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }
  
  throw new Error(\`\${maxRetries}번의 시도 후 실패: \${lastError.message}\`);
}`,
    explanation: '네트워크 오류나 일시적인 서버 오류 발생 시 지수 백오프 방식으로 자동 재시도합니다.'
  },
  {
    title: '웹소켓 연결',
    description: 'WebSocket을 사용한 실시간 데이터 통신 예제입니다.',
    code: `
// 웹소켓 연결 예제
class WebSocketClient {
  constructor(url) {
    this.url = url;
    this.ws = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
  }

  connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log('웹소켓 연결됨');
      this.reconnectAttempts = 0;
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('메시지 수신:', data);
    };

    this.ws.onclose = () => {
      console.log('웹소켓 연결 끊김');
      this.reconnect();
    };

    this.ws.onerror = (error) => {
      console.error('웹소켓 에러:', error);
    };
  }

  reconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 10000);
      
      console.log(\`\${delay}ms 후 재연결 시도 (\${this.reconnectAttempts}/\${this.maxReconnectAttempts})\`);
      
      setTimeout(() => this.connect(), delay);
    }
  }

  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
      console.error('웹소켓이 연결되어 있지 않습니다.');
    }
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}`,
    explanation: 'WebSocket을 사용하여 서버와 실시간 양방향 통신을 구현합니다. 연결 끊김 시 자동 재연결 로직도 포함되어 있습니다.'
  },
  {
    title: 'Recoil 기본 사용법',
    description: 'Recoil을 사용한 상태 관리 기본 예제입니다.',
    code: `
// 상태 정의
const counterState = atom({
  key: 'counterState',
  default: 0,
});

// 파생 상태 정의
const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({get}) => {
    const count = get(counterState);
    return count * 2;
  },
});

// 컴포넌트에서 사용
const Counter = () => {
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
};`,
    explanation: 'Recoil의 기본적인 사용법을 보여줍니다. atom으로 상태를 정의하고, selector로 파생 상태를 만들며, useRecoilState와 useRecoilValue로 상태를 사용합니다.',
    demo: <Counter />
  },
  {
    title: 'Recoil 비동기 셀렉터',
    description: 'Recoil의 비동기 셀렉터를 사용한 데이터 페칭 예제입니다.',
    code: `
// 비동기 셀렉터 정의
const userDataState = selector({
  key: 'userDataState',
  get: async () => {
    const response = await fetch('https://api.example.com/user');
    return response.json();
  },
});

// 컴포넌트에서 사용
const UserProfile = () => {
  const userData = useRecoilValue(userDataState);
  
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
    </div>
  );
};`,
    explanation: 'Recoil의 selector를 사용하여 비동기 데이터를 처리하는 방법을 보여줍니다. Suspense와 함께 사용하면 로딩 상태를 자동으로 처리할 수 있습니다.'
  },
  {
    title: 'Recoil 패밀리',
    description: 'Recoil의 atomFamily와 selectorFamily를 사용한 예제입니다.',
    code: `
// atom 패밀리 정의
const todoState = atomFamily({
  key: 'todoState',
  default: (id: number) => ({
    id,
    text: '',
    completed: false,
  }),
});

// selector 패밀리 정의
const todoStatsState = selectorFamily({
  key: 'todoStatsState',
  get: (id: number) => ({get}) => {
    const todo = get(todoState(id));
    return {
      ...todo,
      uppercase: todo.text.toUpperCase(),
    };
  },
});

// 컴포넌트에서 사용
const TodoItem = ({id}: {id: number}) => {
  const [todo, setTodo] = useRecoilState(todoState(id));
  const stats = useRecoilValue(todoStatsState(id));

  return (
    <div>
      <input
        value={todo.text}
        onChange={e => setTodo({...todo, text: e.target.value})}
      />
      <p>대문자: {stats.uppercase}</p>
    </div>
  );
};`,
    explanation: 'atomFamily와 selectorFamily를 사용하면 동적으로 상태를 생성하고 관리할 수 있습니다. ID나 다른 매개변수를 기반으로 여러 상태를 효율적으로 관리할 수 있습니다.'
  }
];

const ApiExamples: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        API 사용 예제
      </Typography>
      {examples.map((example, index) => (
        <Paper key={index} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            {example.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {example.description}
          </Typography>
          <Box
            component="pre"
            sx={{
              bgcolor: 'grey.100',
              p: 2,
              borderRadius: 1,
              overflow: 'auto'
            }}
          >
            <code>{example.code}</code>
          </Box>
          <Typography variant="body2" sx={{ mt: 2, mb: example.demo ? 2 : 0 }}>
            {example.explanation}
          </Typography>
          {example.demo && (
            <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              {example.demo}
            </Box>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default ApiExamples; 