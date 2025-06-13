import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress, Card, CardContent, Stack, TextField } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

interface User {
  name: string;
  email: string;
  age: number;
}

// GET 요청 예제 컴포넌트
function GetExample() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '데이터를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ color: '#eaeaea' }}>
      <Button 
        variant="contained" 
        onClick={fetchPosts}
        disabled={loading}
        sx={buttonStyle}
      >
        게시물 불러오기 (GET)
      </Button>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <CircularProgress sx={{ color: '#eaeaea' }} />
        </Box>
      )}

      {error && (
        <Typography sx={{ my: 2, color: '#ff6b6b' }}>
          에러: {error}
        </Typography>
      )}

      <Box sx={{ mt: 2 }}>
        {posts.map(post => (
          <Card key={post.id} sx={cardStyle}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{post.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

// POST 요청 예제 컴포넌트
function PostExample() {
  const [result, setResult] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    age: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value
    }));
  };

  const createPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: '새 게시물',
          body: '게시물 내용',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '게시물 생성에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      alert('사용자 생성 성공!\n' + JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : '사용자 생성에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ color: '#eaeaea' }}>
      <Stack spacing={3}>
        <div>
          <Typography variant="h6" gutterBottom>기본 POST 요청</Typography>
          <Button
            variant="contained"
            onClick={createPost}
            disabled={loading}
            sx={buttonStyle}
          >
            새 게시물 작성 (POST)
          </Button>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress sx={{ color: '#eaeaea' }} />
            </Box>
          )}

          {error && (
            <Typography sx={{ my: 2, color: '#ff6b6b' }}>
              에러: {error}
            </Typography>
          )}

          {result && (
            <Card sx={{ ...cardStyle, mt: 2 }}>
              <CardContent>
                <Typography variant="h6">생성된 게시물</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>ID: {result.id}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>제목: {result.title}</Typography>
                <Typography variant="body2">내용: {result.body}</Typography>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Typography variant="h6" gutterBottom>객체를 사용한 POST 요청</Typography>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <TextField
              name="name"
              label="이름"
              value={formData.name}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
            <TextField
              name="email"
              label="이메일"
              value={formData.email}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
            <TextField
              name="age"
              label="나이"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={createUser}
            disabled={loading}
            sx={buttonStyle}
          >
            사용자 생성 (POST)
          </Button>
        </div>
      </Stack>
    </div>
  );
}

// PUT 요청 예제 컴포넌트
function PutExample() {
  const [result, setResult] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [postData, setPostData] = useState<Partial<Post>>({
    title: '',
    body: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const updatePost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          title: '수정된 게시물',
          body: '수정된 내용',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '게시물 수정에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const updatePostWithObject = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      alert('게시물 수정 성공!\n' + JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : '게시물 수정에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ color: '#eaeaea' }}>
      <Stack spacing={3}>
        <div>
          <Typography variant="h6" gutterBottom>기본 PUT 요청</Typography>
          <Button
            variant="contained"
            onClick={updatePost}
            disabled={loading}
            sx={buttonStyle}
          >
            게시물 수정 (PUT)
          </Button>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress sx={{ color: '#eaeaea' }} />
            </Box>
          )}

          {error && (
            <Typography sx={{ my: 2, color: '#ff6b6b' }}>
              에러: {error}
            </Typography>
          )}

          {result && (
            <Card sx={{ ...cardStyle, mt: 2 }}>
              <CardContent>
                <Typography variant="h6">수정된 게시물</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>ID: {result.id}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>제목: {result.title}</Typography>
                <Typography variant="body2">내용: {result.body}</Typography>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Typography variant="h6" gutterBottom>객체를 사용한 PUT 요청</Typography>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <TextField
              name="title"
              label="제목"
              value={postData.title}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
            <TextField
              name="body"
              label="내용"
              multiline
              rows={3}
              value={postData.body}
              onChange={handleInputChange}
              sx={textFieldStyle}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={updatePostWithObject}
            disabled={loading}
            sx={buttonStyle}
          >
            게시물 수정 (PUT with Object)
          </Button>
        </div>
      </Stack>
    </div>
  );
}

// DELETE 요청 예제 컴포넌트
function DeleteExample() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deletePost = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '게시물 삭제에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ color: '#eaeaea' }}>
      <Button
        variant="contained"
        onClick={deletePost}
        disabled={loading}
        sx={{
          ...buttonStyle,
          backgroundColor: '#dc3545',
          '&:hover': {
            backgroundColor: '#c82333',
          },
        }}
      >
        게시물 삭제 (DELETE)
      </Button>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <CircularProgress sx={{ color: '#eaeaea' }} />
        </Box>
      )}

      {error && (
        <Typography sx={{ my: 2, color: '#ff6b6b' }}>
          에러: {error}
        </Typography>
      )}

      {success && (
        <Typography sx={{ my: 2, color: '#28a745' }}>
          게시물이 성공적으로 삭제되었습니다.
        </Typography>
      )}
    </div>
  );
}

// 스타일 정의
const exampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: '-2em',
  marginRight: '-2em',
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

const textFieldStyle = {
  '& .MuiOutlinedInput-root': {
    color: '#eaeaea',
    '& fieldset': {
      borderColor: '#444',
    },
    '&:hover fieldset': {
      borderColor: '#666',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#888',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#888',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#aaa',
  },
};

const FetchAPI: React.FC = () => {
  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto', p: 3, color: '#eaeaea' }}>

     <h4>1. GET</h4>
      <div style={exampleBlockStyle}>
   
        <ExampleTab
          example={<GetExample />}
          code={`const fetchPosts = async () => {
  const response = await fetch('https://api.example.com/posts');
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  const data = await response.json();
  return data;
};`}
          showCaret={false}
          desc={`[GET 요청]
- 서버에서 데이터를 조회(가져오기)할 때 사용합니다.
- 주로 목록, 상세 정보, 검색 결과 등 읽기 전용 데이터를 불러올 때 활용합니다.
- fetch 함수의 첫 번째 인자로 URL을 전달하면, 해당 주소로 GET 요청이 전송됩니다.
- 성공 시 JSON 데이터를 반환하며, 실패 시 에러 처리가 필요합니다.

[실무 팁]
- 쿼리 파라미터를 통해 필터링/페이징이 가능합니다.
- CORS 정책에 주의해야 하며, 서버가 CORS를 허용해야 정상 동작합니다.
- 데이터가 많을 경우 로딩 상태와 에러 처리를 반드시 구현하세요.
- fetch는 기본적으로 캐시를 사용하지 않으므로, 필요시 캐시 정책을 직접 관리해야 합니다.`}
        />
      </div>

      <h4>2. POST</h4>
      <div style={exampleBlockStyle}>
        
        <ExampleTab
          example={<PostExample />}
          code={`const createPost = async (post) => {
  const response = await fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  const data = await response.json();
  return data;
};`}
          showCaret={false}
          desc={`[POST 요청]
- 서버에 새로운 데이터를 생성(등록)할 때 사용합니다.
- 회원가입, 글 작성, 주문 생성 등 사용자가 입력한 정보를 서버에 저장할 때 활용합니다.
- fetch의 method를 'POST'로 지정하고, body에 JSON.stringify로 직렬화한 데이터를 전달합니다.
- Content-Type 헤더를 반드시 'application/json'으로 설정해야 합니다.

[실무 팁]
- POST 요청 후 서버에서 생성된 리소스의 ID나 전체 객체를 반환하는 경우가 많으니, 응답값을 잘 활용하세요.
- 입력값 검증(Validation)과 에러 처리를 꼼꼼히 구현해야 합니다.
- 보안상 CSRF, XSS 등 공격에 대비해 서버와 클라이언트 모두 방어 로직이 필요합니다.`}
        />
      </div>

      <h4>3. PUT</h4>
      <div style={exampleBlockStyle}>
        
        <ExampleTab
          example={<PutExample />}
          code={`const updatePost = async (id, post) => {
  const response = await fetch(\`https://api.example.com/posts/\${id}\`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  const data = await response.json();
  return data;
};`}
          showCaret={false}
          desc={`[PUT 요청]
- 서버의 기존 데이터를 전체 수정(덮어쓰기)할 때 사용합니다.
- 게시글 수정, 회원 정보 변경 등 기존 리소스를 완전히 교체할 때 활용합니다.
- fetch의 method를 'PUT'으로 지정하고, body에 전체 객체를 전달합니다.
- 부분 수정은 PATCH를 사용하지만, PUT은 전체 필드를 모두 보내야 합니다.

[실무 팁]
- PUT 요청 시 누락된 필드는 null/undefined로 처리될 수 있으니, 전체 데이터를 항상 포함하세요.
- 서버에서 수정 성공 시 변경된 객체를 반환하는 경우가 많으니, 응답값을 활용하세요.
- 실수로 기존 데이터를 덮어쓰지 않도록, 수정 전 데이터를 미리 불러와서 폼에 반영하는 것이 좋습니다.`}
        />
      </div>

      <h4>4. DELETE</h4>
      <div style={exampleBlockStyle}>
        
        <ExampleTab
          example={<DeleteExample />}
          code={`const deletePost = async (id) => {
  const response = await fetch(\`https://api.example.com/posts/\${id}\`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  return true;
};`}
          showCaret={false}
          desc={`[DELETE 요청]
- 서버의 데이터를 삭제할 때 사용합니다.
- 게시글 삭제, 회원 탈퇴, 상품 제거 등 리소스를 완전히 없앨 때 활용합니다.
- fetch의 method를 'DELETE'로 지정하면 해당 리소스가 삭제됩니다.

[실무 팁]
- 삭제 전 사용자에게 반드시 확인(Confirm) 모달을 띄워 실수로 삭제되는 것을 방지하세요.
- 삭제 성공 시 UI에서 즉시 반영(리스트 갱신 등)하는 것이 중요합니다.
- 삭제 요청은 되돌릴 수 없으므로, 신중하게 처리해야 합니다.`}
        />
      </div>
    </Box>
  );
};

export default FetchAPI; 