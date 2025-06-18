import React from 'react';
import { Typography } from '@mui/material';

const DynamicFormExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>동적 폼 (필드 추가/삭제) (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      입력 필드를 동적으로 추가/삭제하는 폼 예제입니다.<br/>
      - 예: 설문, 항목 추가, 반복 입력<br/>
      - 실전 팁: 배열 상태 관리, key, 유효성 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default DynamicFormExample; 