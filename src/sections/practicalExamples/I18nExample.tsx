import React from 'react';
import { Typography } from '@mui/material';

const I18nExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>다국어(i18n) 적용 (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      다국어(i18n) 적용 예제입니다.<br/>
      - 예: react-i18next, 번역 파일, 언어 전환<br/>
      - 실전 팁: 번역 키 관리, fallback, 다국어 UX 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default I18nExample; 