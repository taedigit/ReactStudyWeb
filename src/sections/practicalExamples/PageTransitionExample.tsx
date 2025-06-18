import React from 'react';
import { Typography } from '@mui/material';

const PageTransitionExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>페이지 전환 애니메이션 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      페이지/라우트 전환 시 애니메이션 효과 예제입니다.<br/>
      - 예: Framer Motion, React Transition Group<br/>
      - 실전 팁: 애니메이션 타이밍, UX, 라우터 연동 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default PageTransitionExample; 