import React from 'react';
import { Typography } from '@mui/material';

const RealtimeChartExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>실시간 데이터 차트 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      실시간 데이터(예: WebSocket, polling) 차트 예제입니다.<br/>
      - 예: 실시간 주가, 센서 데이터, 대시보드<br/>
      - 실전 팁: useEffect, setInterval, 차트 라이브러리 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default RealtimeChartExample; 