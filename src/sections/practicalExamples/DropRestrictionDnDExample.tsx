import React from 'react';
import { Typography } from '@mui/material';

const DropRestrictionDnDExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>드롭 제한 DnD (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      특정 영역/조건에서만 드롭이 허용되는 DnD 예제입니다.<br/>
      - 예: 특정 컬럼/카드/리스트에만 드롭 가능<br/>
      - 실전 팁: 조건부 드롭, 피드백 UI, 에러 방지 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default DropRestrictionDnDExample; 