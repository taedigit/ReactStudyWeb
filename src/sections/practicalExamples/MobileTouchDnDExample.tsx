import React from 'react';
import { Typography } from '@mui/material';

const MobileTouchDnDExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>모바일/터치 지원 DnD (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      모바일/터치 환경에서 동작하는 DnD 예제입니다.<br/>
      - 예: 터치 드래그, 모바일 UI 최적화<br/>
      - 실전 팁: 터치 이벤트, 반응형, 모바일 UX 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default MobileTouchDnDExample; 