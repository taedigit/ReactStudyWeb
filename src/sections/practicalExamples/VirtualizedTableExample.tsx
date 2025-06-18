import React from 'react';
import { Typography } from '@mui/material';

const VirtualizedTableExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>대용량/가상화 테이블 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      대용량 데이터/가상화 테이블 예제입니다.<br/>
      - 예: react-window, react-virtualized<br/>
      - 실전 팁: 성능 최적화, 무한 스크롤 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default VirtualizedTableExample; 