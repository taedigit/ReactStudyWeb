import React from 'react';
import { Typography } from '@mui/material';

const CustomPreviewDnDExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>커스텀 드래그 프리뷰 DnD (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      드래그 중 커스텀 미리보기 UI를 제공하는 DnD 예제입니다.<br/>
      - 예: 카드/아이템의 스타일, 정보, 애니메이션 등<br/>
      - 실전 팁: 프리뷰 컴포넌트 분리, 성능 최적화 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default CustomPreviewDnDExample; 