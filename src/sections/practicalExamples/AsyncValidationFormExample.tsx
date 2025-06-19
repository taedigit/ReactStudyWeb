import React, { useState } from 'react';
import { Typography, TextField, CircularProgress, Box, Paper } from '@mui/material';
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

const asyncValidationCode = `import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Box, Paper } from '@mui/material';

const AsyncValidationFormExample = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 서버 중복 체크 모킹
  const checkUsername = (name) => {
    setLoading(true);
    setError('');
    setSuccess(false);
    setTimeout(() => {
      if (['admin', 'test', 'user'].includes(name.toLowerCase())) {
        setError('이미 사용 중인 아이디입니다.');
        setSuccess(false);
      } else {
        setError('');
        setSuccess(true);
      }
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
    setError('');
    setSuccess(false);
  };

  const handleBlur = () => {
    if (username.trim().length < 3) {
      setError('아이디는 3자 이상 입력하세요.');
      setSuccess(false);
      return;
    }
    checkUsername(username.trim());
  };

  return (
    <Box>
      <Paper sx={{ p: 3, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 400 }}>
        <TextField
          label="아이디"
          value={username}
          onChange={handleChange}
          onBlur={handleBlur}
          size="small"
          fullWidth
          sx={{ mb: 2, input: { color: '#eaeaea' }, label: { color: '#aaa' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#444' } } }}
          disabled={loading}
        />
        {loading && <CircularProgress size={22} sx={{ color: '#b5e853', ml: 1, verticalAlign: 'middle' }} />}
        {error && <Typography color="error" fontSize={15} sx={{ mt: 1 }}>{error}</Typography>}
        {success && !error && <Typography color="#b5e853" fontSize={15} sx={{ mt: 1 }}>사용 가능한 아이디입니다!</Typography>}
      </Paper>
    </Box>
  );
};

export default AsyncValidationFormExample;`;

const asyncValidationDesc = `서버와 연동된 비동기 유효성 검증 폼 예제입니다.\n\n- 아이디 입력 후 포커스 아웃(blur) 시 서버에 중복 체크를 요청합니다.\n- 이미 사용 중인 아이디(admin, test, user)는 에러 메시지를, 사용 가능하면 성공 메시지를 표시합니다.\n- setTimeout으로 서버 응답을 모킹했으며, 실제로는 fetch/axios 등으로 API를 호출하면 됩니다.\n- UX: 로딩 스피너, 에러/성공 메시지, 입력 길이 제한 등 실전에서 자주 쓰이는 패턴입니다.`;

const AsyncValidationFormExample: React.FC = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 서버 중복 체크 모킹
  const checkUsername = (name: string) => {
    setLoading(true);
    setError('');
    setSuccess(false);
    setTimeout(() => {
      if (['admin', 'test', 'user'].includes(name.toLowerCase())) {
        setError('이미 사용 중인 아이디입니다.');
        setSuccess(false);
      } else {
        setError('');
        setSuccess(true);
      }
      setLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setError('');
    setSuccess(false);
  };

  const handleBlur = () => {
    if (username.trim().length < 3) {
      setError('아이디는 3자 이상 입력하세요.');
      setSuccess(false);
      return;
    }
    checkUsername(username.trim());
  };

  const example = (
    <Box>
      <Paper sx={{ p: 3, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 400 }}>
        <TextField
          label="아이디"
          value={username}
          onChange={handleChange}
          onBlur={handleBlur}
          size="small"
          fullWidth
          sx={{ mb: 2, input: { color: '#eaeaea' }, label: { color: '#aaa' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#444' } } }}
          disabled={loading}
        />
        {loading && <CircularProgress size={22} sx={{ color: '#b5e853', ml: 1, verticalAlign: 'middle' }} />}
        {error && <Typography color="error" fontSize={15} sx={{ mt: 1 }}>{error}</Typography>}
        {success && !error && <Typography color="#b5e853" fontSize={15} sx={{ mt: 1 }}>사용 가능한 아이디입니다!</Typography>}
      </Paper>
    </Box>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>서버 검증/비동기 유효성</Typography>
      <ExampleTab
        example={example}
        code={asyncValidationCode}
        desc={asyncValidationDesc}
      />
    </div>
  );
};

export default AsyncValidationFormExample; 