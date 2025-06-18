import React from 'react';
import { Typography } from '@mui/material';

const MultiSelectDnDExample: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom>다중 선택/다중 드래그 DnD (실전 예제)</Typography>
    <Typography variant="body1" gutterBottom>
      여러 아이템을 동시에 선택/드래그하는 DnD 예제입니다.<br/>
      - 예: Shift/Ctrl+클릭, 그룹 이동<br/>
      - 실전 팁: 선택 UI, 그룹 드래그, 상태 동기화 등
    </Typography>
    <div style={{marginTop: 32, color: '#aaa'}}>예제 코드 구현 예정</div>
  </div>
);

export default MultiSelectDnDExample; 