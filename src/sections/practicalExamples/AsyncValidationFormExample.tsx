import React from 'react';
import { Typography } from '@mui/material';

const AsyncValidationFormExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>서버 검증/비동기 유효성 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      서버와 연동된 비동기 유효성 검증 폼 예제입니다.<br/>
      - 예: 아이디 중복 체크, 이메일 인증<br/>
      - 실전 팁: debounce, 에러 처리, UX 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default AsyncValidationFormExample; 