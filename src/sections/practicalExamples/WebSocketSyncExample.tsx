import React from 'react';
import { Typography } from '@mui/material';

const WebSocketSyncExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>WebSocket/실시간 상태 동기화 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      WebSocket 등으로 실시간 상태를 동기화하는 예제입니다.<br/>
      - 예: 채팅, 알림, 실시간 협업<br/>
      - 실전 팁: useEffect, 소켓 연결/해제, 상태 관리 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default WebSocketSyncExample; 