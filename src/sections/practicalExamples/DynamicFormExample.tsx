import React, { useState } from 'react';
import { Typography, Button, TextField, IconButton, Box, Stack, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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

// 예제 코드 문자열
const dynamicFormCode = `import React, { useState } from 'react';
import { Button, TextField, IconButton, Box, Stack, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicFormExample = () => {
  const [fields, setFields] = useState([
    { name: '', email: '' }
  ]);
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (idx, key, value) => {
    setFields(f => f.map((item, i) => i === idx ? { ...item, [key]: value } : item));
  };

  const handleAdd = () => {
    setFields(f => [...f, { name: '', email: '' }]);
  };

  const handleRemove = (idx) => {
    setFields(f => f.length === 1 ? f : f.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (!f.name.trim() || !f.email.trim()) {
        setError(i + 1 + '번째 항목의 이름/이메일을 모두 입력하세요.');
        setSubmitted(null);
        return;
      }
    }
    setError('');
    setSubmitted(fields);
  };

  return (
    <Box>
      <Paper sx={{ p: 3, mt: 3, mb: 2, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 500 }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={2}>
            {fields.map((field, idx) => (
              <Box key={idx} display="flex" alignItems="center" gap={1}>
                <TextField
                  label="이름"
                  value={field.name}
                  onChange={e => handleChange(idx, 'name', e.target.value)}
                  size="small"
                  sx={{ flex: 1, input: { color: '#eaeaea' }, label: { color: '#aaa' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#444' } } }}
                />
                <TextField
                  label="이메일"
                  value={field.email}
                  onChange={e => handleChange(idx, 'email', e.target.value)}
                  size="small"
                  sx={{ flex: 2, input: { color: '#eaeaea' }, label: { color: '#aaa' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#444' } } }}
                />
                <IconButton aria-label="삭제" onClick={() => handleRemove(idx)} disabled={fields.length === 1} size="small" sx={{ color: '#e57373' }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button variant="outlined" onClick={handleAdd} sx={{ color: '#b5e853', borderColor: '#b5e853', '&:hover': { borderColor: '#eaeaea', background: '#333' } }}>+ 필드 추가</Button>
            {error && <Typography color="error" fontSize={15}>{error}</Typography>}
            <Button type="submit" variant="contained" sx={{ background: '#b5e853', color: '#232323', fontWeight: 700, '&:hover': { background: '#eaeaea', color: '#232323' } }}>제출</Button>
          </Stack>
        </form>
      </Paper>
      {submitted && (
        <Paper sx={{ p: 2, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 500 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>제출 결과</Typography>
          <ul style={{ paddingLeft: 18 }}>
            {submitted.map((f, i) => (
              <li key={i}>{f.name} ({f.email})</li>
            ))}
          </ul>
        </Paper>
      )}
    </Box>
  );
};

export default DynamicFormExample;`;

const dynamicFormDesc = `입력 필드를 동적으로 추가/삭제하는 폼 예제입니다.\n\n- useState로 배열 상태를 관리합니다.\n- +필드 추가 버튼으로 입력 필드를 동적으로 늘릴 수 있습니다.\n- 각 행의 삭제 버튼으로 해당 필드를 제거할 수 있습니다.\n- 제출 시 전체 값을 배열로 출력하며, 빈 값이 있으면 에러 메시지를 표시합니다.\n- 반복 입력, 설문, 항목 추가 등 다양한 실무 폼에 활용할 수 있습니다.`;

const DynamicFormExample: React.FC = () => {
  const [fields, setFields] = useState([
    { name: '', email: '' }
  ]);
  const [submitted, setSubmitted] = useState<null | typeof fields>(null);
  const [error, setError] = useState('');

  const handleChange = (idx: number, key: 'name' | 'email', value: string) => {
    setFields(f => f.map((item, i) => i === idx ? { ...item, [key]: value } : item));
  };

  const handleAdd = () => {
    setFields(f => [...f, { name: '', email: '' }]);
  };

  const handleRemove = (idx: number) => {
    setFields(f => f.length === 1 ? f : f.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    for (var i = 0; i < fields.length; i++) {
      var f = fields[i];
      if (!f.name.trim() || !f.email.trim()) {
        setError(i + 1 + '번째 항목의 이름/이메일을 모두 입력하세요.');
        setSubmitted(null);
        return;
      }
    }
    setError('');
    setSubmitted(fields);
  };

  const example = (
    <Box>
      <Paper sx={{ p: 3, mt: 3, mb: 2, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 500 }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Stack spacing={2}>
            {fields.map((field, idx) => (
              <Box key={idx} display="flex" alignItems="center" gap={1}>
                <TextField
                  label="이름"
                  value={field.name}
                  onChange={e => handleChange(idx, 'name', e.target.value)}
                  size="small"
                  sx={{ flex: 1, input: { color: '#eaeaea' }, label: { color: '#aaa' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#444' } } }}
                />
                <TextField
                  label="이메일"
                  value={field.email}
                  onChange={e => handleChange(idx, 'email', e.target.value)}
                  size="small"
                  sx={{ flex: 2, input: { color: '#eaeaea' }, label: { color: '#aaa' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#444' } } }}
                />
                <IconButton aria-label="삭제" onClick={() => handleRemove(idx)} disabled={fields.length === 1} size="small" sx={{ color: '#e57373' }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Button variant="outlined" onClick={handleAdd} sx={{ color: '#b5e853', borderColor: '#b5e853', '&:hover': { borderColor: '#eaeaea', background: '#333' } }}>+ 필드 추가</Button>
            {error && <Typography color="error" fontSize={15}>{error}</Typography>}
            <Button type="submit" variant="contained" sx={{ background: '#b5e853', color: '#232323', fontWeight: 700, '&:hover': { background: '#eaeaea', color: '#232323' } }}>제출</Button>
          </Stack>
        </form>
      </Paper>
      {submitted && (
        <Paper sx={{ p: 2, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 500 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>제출 결과</Typography>
          <ul style={{ paddingLeft: 18 }}>
            {submitted.map((f, i) => (
              <li key={i}>{f.name} ({f.email})</li>
            ))}
          </ul>
        </Paper>
      )}
    </Box>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>동적 폼 (필드 추가/삭제)</Typography>
      <ExampleTab
        example={example}
        code={dynamicFormCode}
        desc={dynamicFormDesc}
      />
    </div>
  );
};

export default DynamicFormExample; 