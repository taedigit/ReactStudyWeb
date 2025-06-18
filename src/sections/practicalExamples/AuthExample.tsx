import React from 'react';
import { Typography } from '@mui/material';

const AuthExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>인증/인가(권한별 UI) (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      인증/인가(로그인, 권한별 UI) 예제입니다.<br/>
      - 예: 로그인/로그아웃, 관리자/사용자 권한<br/>
      - 실전 팁: 토큰 관리, 라우트 가드, 권한별 렌더링 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default AuthExample; 