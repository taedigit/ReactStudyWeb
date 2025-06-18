import React from 'react';
import { Typography } from '@mui/material';

const TrashDnDExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>휴지통/삭제 DnD (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      드래그로 휴지통/삭제 영역에 아이템을 옮기는 DnD 예제입니다.<br/>
      - 예: 카드/파일/리스트 삭제<br/>
      - 실전 팁: 삭제 확인, Undo, 피드백 UI 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default TrashDnDExample; 