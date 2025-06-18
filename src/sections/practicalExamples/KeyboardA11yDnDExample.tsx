import React from 'react';
import { Typography } from '@mui/material';

const KeyboardA11yDnDExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>키보드 접근성 DnD (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      키보드 내비게이션/스크린리더 등 접근성을 강화한 DnD 예제입니다.<br/>
      - 예: Tab/Space/Enter로 이동 및 드롭<br/>
      - 실전 팁: ARIA, 포커스 관리, 키보드 이벤트 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default KeyboardA11yDnDExample; 