import React from 'react';
import { Typography } from '@mui/material';

const KeyboardFocusTrapExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>키보드 내비게이션/포커스 트랩 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      키보드 내비게이션/포커스 트랩(모달 등) 예제입니다.<br/>
      - 예: Tab 이동, 포커스 제한, 접근성 강화<br/>
      - 실전 팁: focus trap, ARIA, 키보드 이벤트 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default KeyboardFocusTrapExample; 