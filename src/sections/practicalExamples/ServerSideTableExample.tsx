import React from 'react';
import { Typography } from '@mui/material';

const ServerSideTableExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>서버 사이드 테이블 (페이징/정렬/필터) (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      서버와 연동된 테이블(페이징/정렬/필터) 예제입니다.<br/>
      - 예: 대용량 데이터, REST API 연동<br/>
      - 실전 팁: useEffect, 쿼리 파라미터, 상태 동기화 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default ServerSideTableExample; 