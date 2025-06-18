import React from 'react';
import { Typography } from '@mui/material';

const FileUploadExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>파일 업로드/미리보기 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      파일 업로드 및 미리보기를 제공하는 예제입니다.<br/>
      - 예: 이미지/문서 업로드, 썸네일<br/>
      - 실전 팁: input, FileReader, drag&drop 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default FileUploadExample; 