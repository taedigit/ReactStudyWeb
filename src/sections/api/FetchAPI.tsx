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
      borderColor: '#b5e853',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#999',
    '&.Mui-focused': {
      color: '#b5e853',
    },
  },
};

const FetchAPI: React.FC = () => {
  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. GET 요청</Typography>
        <ExampleTab
          example={<GetExample />}
          code={`const fetchPosts = async () => {
  try {
    const response = await fetch('https://api.example.com/posts');
    if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
    const data = await response.json();
    setPosts(data);
  } catch (err) {
    setError(err.message);
  }
};`}
          desc="fetch를 사용한 기본적인 GET 요청 예제입니다. 응답 상태를 확인하고 JSON 데이터를 파싱합니다."
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. POST 요청</Typography>
        <ExampleTab
          example={<PostExample />}
          code={`const createPost = async () => {
  try {
    const response = await fetch('https://api.example.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      },
    });
    if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
    const result = await response.json();
    setResult(result);
  } catch (err) {
    setError(err.message);
  }
};`}
          desc="POST 요청으로 새로운 리소스를 생성하는 예제입니다. 요청 본문과 헤더를 설정하는 방법을 보여줍니다."
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. PUT 요청</Typography>
        <ExampleTab
          example={<PutExample />}
          code={`const updatePost = async () => {
  try {
    const response = await fetch('https://api.example.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      },
    });
    if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
    const result = await response.json();
    setResult(result);
  } catch (err) {
    setError(err.message);
  }
};`}
          desc="PUT 요청으로 기존 리소스를 수정하는 예제입니다. 전체 리소스를 새로운 데이터로 교체합니다."
        />
      </div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. DELETE 요청</Typography>
        <ExampleTab
          example={<DeleteExample />}
          code={`const deletePost = async () => {
  try {
    const response = await fetch('https://api.example.com/posts/1', {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
    setResult('삭제 성공');
  } catch (err) {
    setError(err.message);
  }
};`}
          desc="DELETE 요청으로 리소스를 삭제하는 예제입니다. 성공 시 일반적으로 204 No Content를 반환합니다."
        />
      </div>
    </div>
  );
};

export default FetchAPI; 