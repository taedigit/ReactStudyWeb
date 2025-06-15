import React, { useState } from 'react';
import { Typography, Box, Button, CircularProgress, TextField } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const apiExampleBlockStyle = {
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
  basicApi: `REST API를 사용한 기본적인 데이터 가져오기 예제입니다.
- fetch API를 사용하여 서버로부터 데이터를 가져옵니다.
- try-catch 구문으로 에러를 처리합니다.
- async/await를 사용하여 비동기 처리를 합니다.`,

  postRequest: `서버에 데이터를 전송하는 POST 요청 예제입니다.
- method, headers, body를 설정하여 요청을 보냅니다.
- Content-Type 헤더로 JSON 데이터 전송을 명시합니다.
- 응답 데이터를 처리하고 에러를 핸들링합니다.`,

  authToken: `보안된 API 엔드포인트에 접근하기 위한 인증 토큰 사용 예제입니다.
- Authorization 헤더에 Bearer 토큰을 포함시킵니다.
- 인증이 필요한 API 요청을 처리합니다.
- 토큰 관리와 보안을 고려합니다.`,

  fileUpload: `FormData를 사용하여 파일을 업로드하는 예제입니다.
- FormData 객체로 파일 데이터를 전송합니다.
- 멀티파트 폼 데이터 형식을 자동으로 처리합니다.
- 파일 업로드 진행 상태를 모니터링할 수 있습니다.`,

  concurrentRequests: `Promise.all을 사용하여 여러 API 요청을 동시에 처리하는 예제입니다.
- 여러 요청을 병렬로 처리하여 성능을 최적화합니다.
- Promise.all로 모든 응답을 한번에 처리합니다.
- 에러 처리와 타임아웃 설정이 중요합니다.`,

  timeout: `AbortController를 사용하여 API 요청에 타임아웃을 설정하는 예제입니다.
- 요청 시간 제한을 설정하여 무한 대기를 방지합니다.
- AbortController로 요청을 수동으로 취소할 수 있습니다.
- 네트워크 상태에 따른 예외 처리가 가능합니다.`,

  putDelete: `PUT과 DELETE 메서드를 사용한 API 요청 예제입니다.
- 데이터 수정과 삭제 작업을 처리합니다.
- RESTful API의 기본 메서드를 활용합니다.
- 응답 상태 코드에 따른 처리를 구현합니다.`
};

// 기본 API 호출 예제 컴포넌트
const BasicApiDemo = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError('데이터 가져오기 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={fetchData} disabled={loading}>
        데이터 가져오기
      </Button>
      {loading && <CircularProgress size={24} sx={{ ml: 2 }} />}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {data && (
        <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px', marginTop: '1em' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Box>
  );
};

// POST 요청 예제 컴포넌트
const PostRequestDemo = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body, userId: 1 }),
      });
      const result = await response.json();
      setResponse(result);
    } catch (err) {
      setError('데이터 전송 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <TextField
        label="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="내용"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={3}
      />
      <Button variant="contained" onClick={handleSubmit} disabled={loading} sx={{ mt: 2 }}>
        전송
      </Button>
      {loading && <CircularProgress size={24} sx={{ ml: 2 }} />}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {response && (
        <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px', marginTop: '1em' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </Box>
  );
};

// 파일 업로드 예제 컴포넌트
const FileUploadDemo = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      // 이미지 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="file-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          파일 선택
        </Button>
      </label>
      {file && <Typography sx={{ mt: 2 }}>선택된 파일: {file.name}</Typography>}
      {preview && (
        <Box sx={{ mt: 2 }}>
          <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </Box>
      )}
    </Box>
  );
};

// 동시 요청 처리 예제 컴포넌트
const ConcurrentRequestsDemo = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMultipleData = async () => {
    setLoading(true);
    setError(null);
    try {
      const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
      ];
      const promises = urls.map(url => fetch(url).then(res => res.json()));
      const results = await Promise.all(promises);
      setData(results);
    } catch (err) {
      setError('동시 요청 처리 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={fetchMultipleData} disabled={loading}>
        여러 데이터 가져오기
      </Button>
      {loading && <CircularProgress size={24} sx={{ ml: 2 }} />}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {data.length > 0 && (
        <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px', marginTop: '1em' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Box>
  );
};

// 타임아웃 설정 예제 컴포넌트
const TimeoutDemo = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWithTimeout = async () => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      const result = await response.json();
      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.name === 'AbortError' ? '요청 시간 초과' : '요청 실패');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Button variant="contained" onClick={fetchWithTimeout} disabled={loading}>
        5초 타임아웃으로 요청
      </Button>
      {loading && <CircularProgress size={24} sx={{ ml: 2 }} />}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {data && (
        <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px', marginTop: '1em' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </Box>
  );
};

// PUT/DELETE 요청 예제 컴포넌트
const PutDeleteDemo = () => {
  const [postId, setPostId] = useState('1');
  const [title, setTitle] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updatePost = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body: 'body', userId: 1 }),
      });
      const result = await response.json();
      setResponse(result);
    } catch (err) {
      setError('업데이트 실패');
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setResponse({ message: '삭제 성공' });
      } else {
        throw new Error('삭제 실패');
      }
    } catch (err) {
      setError('삭제 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <TextField
        label="게시물 ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        type="number"
        margin="normal"
        sx={{ mr: 2 }}
      />
      <TextField
        label="새 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={updatePost} disabled={loading} sx={{ mr: 2 }}>
          수정
        </Button>
        <Button variant="outlined" color="error" onClick={deletePost} disabled={loading}>
          삭제
        </Button>
      </Box>
      {loading && <CircularProgress size={24} sx={{ ml: 2 }} />}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {response && (
        <pre style={{ background: '#f5f5f5', padding: '1em', borderRadius: '4px', marginTop: '1em' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </Box>
  );
};

const basicApiCode = `// GET 요청 예제
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
}`;

const postRequestCode = `// POST 요청 예제
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
}`;

const authTokenCode = `// 인증 토큰을 사용한 요청 예제
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
}`;

const fileUploadCode = `// 파일 업로드 예제
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
}`;

const concurrentRequestsCode = `// 동시 요청 처리 예제
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
}`;

const timeoutCode = `// 타임아웃 설정 예제
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
}`;

const putDeleteCode = `// PUT 요청 예제
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
}`;

const ApiExamples: React.FC = () => {
  return (
    <div>
      <div style={apiExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 API 호출</Typography>
        <ExampleTab
          example={<BasicApiDemo />}
          code={basicApiCode}
          desc={descriptions.basicApi}
        />
      </div>

      <div style={apiExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. POST 요청 보내기</Typography>
        <ExampleTab
          example={<PostRequestDemo />}
          code={postRequestCode}
          desc={descriptions.postRequest}
        />
      </div>

      <div style={apiExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 인증 토큰 사용하기</Typography>
        <ExampleTab
          example={null}
          code={authTokenCode}
          desc={descriptions.authToken}
        />
      </div>

      <div style={apiExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 파일 업로드하기</Typography>
        <ExampleTab
          example={<FileUploadDemo />}
          code={fileUploadCode}
          desc={descriptions.fileUpload}
        />
      </div>

      <div style={apiExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 동시 요청 처리하기</Typography>
        <ExampleTab
          example={<ConcurrentRequestsDemo />}
          code={concurrentRequestsCode}
          desc={descriptions.concurrentRequests}
        />
      </div>

      <div style={apiExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. 요청 타임아웃 설정하기</Typography>
        <ExampleTab
          example={<TimeoutDemo />}
          code={timeoutCode}
          desc={descriptions.timeout}
        />
      </div>

      <div style={apiExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>7. PUT/DELETE 요청 예제</Typography>
        <ExampleTab
          example={<PutDeleteDemo />}
          code={putDeleteCode}
          desc={descriptions.putDelete}
        />
      </div>
    </div>
  );
};

export default ApiExamples; 