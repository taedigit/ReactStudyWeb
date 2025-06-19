import React, { useRef, useState } from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
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

const fileUploadCode = `import React, { useRef, useState } from 'react';
import { Button, Box, Paper } from '@mui/material';

const FileUploadExample = () => {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setPreview(ev.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleClick = () => {
    inputRef.current && inputRef.current.click();
  };

  return (
    <Box>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
      />
      <Button variant="contained" onClick={handleClick} sx={{ mb: 2 }}>
        이미지 업로드
      </Button>
      {preview && (
        <Paper sx={{ p: 2, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 400 }}>
          <img src={preview} alt="미리보기" style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }} />
        </Paper>
      )}
    </Box>
  );
};

export default FileUploadExample;`;

const fileUploadDesc = `파일 업로드 및 미리보기 예제입니다.\n\n- input[type=file]로 파일을 선택합니다.\n- FileReader로 이미지를 읽어 미리보기로 표시합니다.\n- 이미지 외에도 다양한 파일(문서, PDF 등) 미리보기에 응용할 수 있습니다.\n- 드래그&드롭, 여러 파일, 서버 업로드 등으로 확장 가능합니다.`;

const FileUploadExample: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleClick = () => {
    inputRef.current && inputRef.current.click();
  };

  const example = (
    <Box>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
      />
      <Button variant="contained" onClick={handleClick} sx={{ mb: 2 }}>
        이미지 업로드
      </Button>
      {preview && (
        <Paper sx={{ p: 2, background: '#232323', color: '#eaeaea', borderRadius: 2, maxWidth: 400 }}>
          <img src={preview} alt="미리보기" style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }} />
        </Paper>
      )}
    </Box>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>파일 업로드/미리보기</Typography>
      <ExampleTab
        example={example}
        code={fileUploadCode}
        desc={fileUploadDesc}
      />
    </div>
  );
};

export default FileUploadExample; 