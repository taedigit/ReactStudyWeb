import React from 'react';
import { Typography } from '@mui/material';

const VirtualizedDnDExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>자동 스크롤/가상화 DnD (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      자동 스크롤/가상화 리스트와 결합된 DnD 예제입니다.<br/>
      - 예: 긴 리스트, 대용량 데이터에서의 DnD<br/>
      - 실전 팁: react-window, react-virtualized, 성능 최적화 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default VirtualizedDnDExample; 