import React from 'react';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import styled from '@emotion/styled';

const stateExampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

// 1. 버튼
const EmotionButton = styled.button`
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover { background: #1565c0; }
`;
const ButtonDemo = () => <EmotionButton>Emotion 버튼</EmotionButton>;

// 2. Input
const EmotionInput = styled.input`
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 16px;
  &:focus { border-color: #1976d2; outline: none; }
`;
const InputDemo = () => <EmotionInput placeholder="Emotion Input" />;

// 3. Checkbox
const EmotionCheckbox = styled.input`
  accent-color: #1976d2;
  width: 20px;
  height: 20px;
`;
const CheckboxDemo = () => <label><EmotionCheckbox type="checkbox" /> 체크박스</label>;

// 4. Switch
const EmotionSwitch = styled.input`
  width: 40px;
  height: 20px;
  appearance: none;
  background: #ccc;
  border-radius: 20px;
  position: relative;
  outline: none;
  transition: background 0.2s;
  &:checked { background: #1976d2; }
  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: transform 0.2s;
    transform: translateX(0);
  }
  &:checked::before {
    transform: translateX(20px);
  }
`;
const SwitchDemo = () => <label><EmotionSwitch type="checkbox" /> 스위치</label>;

// 5. Select
const EmotionSelect = styled.select`
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 16px;
`;
const SelectDemo = () => (
  <EmotionSelect>
    <option>옵션 1</option>
    <option>옵션 2</option>
    <option>옵션 3</option>
  </EmotionSelect>
);

// 6. Dialog
const DialogBg = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DialogBox = styled.div`
  background: white;
  padding: 2em;
  border-radius: 8px;
  min-width: 300px;
`;
const DialogDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <EmotionButton onClick={() => setOpen(true)}>다이얼로그 열기</EmotionButton>
      {open && (
        <DialogBg onClick={() => setOpen(false)}>
          <DialogBox onClick={e => e.stopPropagation()}>
            <Typography variant="h6">Emotion Dialog</Typography>
            <div style={{ marginTop: 16, textAlign: 'right' }}>
              <EmotionButton onClick={() => setOpen(false)}>닫기</EmotionButton>
            </div>
          </DialogBox>
        </DialogBg>
      )}
    </>
  );
};

// 7. Snackbar
const SnackbarBox = styled.div`
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  background: #1976d2;
  color: white;
  padding: 12px 32px;
  border-radius: 24px;
  font-weight: bold;
`;
const SnackbarDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <EmotionButton onClick={() => setOpen(true)}>스낵바 띄우기</EmotionButton>
      {open && <SnackbarBox>Emotion Snackbar! <EmotionButton style={{ marginLeft: 16 }} onClick={() => setOpen(false)}>닫기</EmotionButton></SnackbarBox>}
    </>
  );
};

// 8. Progress
const ProgressBar = styled.div<{ value: number }>`
  width: 100%;
  height: 12px;
  background: #eee;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 8px;
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${function(props: { value: number }) { return props.value; }}%;
    background: #1976d2;
    transition: width 0.3s;
  }
`;
const ProgressDemo = () => {
  const [value, setValue] = React.useState(40);
  return (
    <div>
      <EmotionButton onClick={() => setValue(v => (v >= 100 ? 0 : v + 20))}>증가</EmotionButton>
      <ProgressBar value={value} />
    </div>
  );
};

// 9. Avatar
const AvatarCircle = styled.div<{ color?: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${function(props: { color?: string }) { return props.color || '#1976d2'; }};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;
const AvatarDemo = () => <AvatarCircle>AB</AvatarCircle>;

// 10. Badge
const BadgeWrap = styled.div`
  position: relative;
  display: inline-block;
`;
const BadgeDot = styled.div`
  position: absolute;
  top: 0; right: 0;
  width: 16px; height: 16px;
  background: #ff1744;
  border-radius: 50%;
  border: 2px solid white;
`;
const BadgeDemo = () => (
  <BadgeWrap>
    <AvatarCircle>CD</AvatarCircle>
    <BadgeDot />
  </BadgeWrap>
);

// 11. Chip
const ChipBox = styled.span`
  display: inline-block;
  background: #e0e0e0;
  color: #333;
  border-radius: 16px;
  padding: 4px 16px;
  font-size: 15px;
  font-weight: 500;
  margin-right: 8px;
`;
const ChipDemo = () => <ChipBox>Emotion Chip</ChipBox>;

// 12. Tabs
const TabsWrap = styled.div`
  display: flex;
  border-bottom: 2px solid #1976d2;
`;
const TabBtn = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  color: ${props => (props.active ? '#1976d2' : '#333')};
  font-weight: bold;
  font-size: 16px;
  padding: 12px 24px;
  border-bottom: 3px solid ${props => (props.active ? '#1976d2' : 'transparent')};
  cursor: pointer;
`;
const TabsDemo = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <div>
      <TabsWrap>
        <TabBtn active={tab === 0} onClick={() => setTab(0)}>탭1</TabBtn>
        <TabBtn active={tab === 1} onClick={() => setTab(1)}>탭2</TabBtn>
        <TabBtn active={tab === 2} onClick={() => setTab(2)}>탭3</TabBtn>
      </TabsWrap>
      <div style={{ padding: 16 }}>선택된 탭: {tab + 1}</div>
    </div>
  );
};

// 13. Dropdown
const DropdownWrap = styled.div`
  position: relative;
  display: inline-block;
`;
const DropdownBtn = styled.button`
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  min-width: 120px;
  z-index: 10;
`;
const DropdownDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownWrap>
      <DropdownBtn onClick={() => setOpen(o => !o)}>드롭다운</DropdownBtn>
      {open && (
        <DropdownMenu>
          <div style={{ padding: 12, cursor: 'pointer' }} onClick={() => setOpen(false)}>메뉴1</div>
          <div style={{ padding: 12, cursor: 'pointer' }} onClick={() => setOpen(false)}>메뉴2</div>
        </DropdownMenu>
      )}
    </DropdownWrap>
  );
};

// 14. Menu
const MenuWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const MenuBtn = styled.button`
  background: #fff;
  color: #1976d2;
  border: 1px solid #1976d2;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover { background: #1976d2; color: #fff; }
`;
const MenuDemo = () => (
  <MenuWrap>
    <MenuBtn>메뉴1</MenuBtn>
    <MenuBtn>메뉴2</MenuBtn>
    <MenuBtn>메뉴3</MenuBtn>
  </MenuWrap>
);

// 15. Pagination
const PaginationWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const PageBtn = styled.button<{ active?: boolean }>`
  background: ${props => (props.active ? '#1976d2' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#1976d2')};
  border: 1px solid #1976d2;
  border-radius: 4px;
  padding: 6px 14px;
  font-weight: bold;
  cursor: pointer;
`;
const PaginationDemo = () => {
  const [page, setPage] = React.useState(1);
  return (
    <PaginationWrap>
      <PageBtn active={page === 1} onClick={() => setPage(1)}>1</PageBtn>
      <PageBtn active={page === 2} onClick={() => setPage(2)}>2</PageBtn>
      <PageBtn active={page === 3} onClick={() => setPage(3)}>3</PageBtn>
      <span>페이지: {page}</span>
    </PaginationWrap>
  );
};

// 16. Popconfirm
const PopconfirmWrap = styled.div`
  display: inline-block;
  position: relative;
`;
const PopconfirmBox = styled.div`
  position: absolute;
  top: 120%;
  left: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 16px;
  z-index: 20;
`;
const PopconfirmDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <PopconfirmWrap>
      <EmotionButton onClick={() => setOpen(true)}>삭제</EmotionButton>
      {open && (
        <PopconfirmBox>
          <div style={{ marginBottom: 12 }}>정말 삭제할까요?</div>
          <EmotionButton onClick={() => setOpen(false)} style={{ marginRight: 8 }}>아니오</EmotionButton>
          <EmotionButton onClick={() => setOpen(false)}>네</EmotionButton>
        </PopconfirmBox>
      )}
    </PopconfirmWrap>
  );
};

// 17. LinearProgress
const LinearBar = styled.div<{ value: number }>`
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${(props: { value: number }) => props.value}%;
    background: #43a047;
    transition: width 0.3s;
  }
`;
const LinearProgressDemo = () => {
  const [value, setValue] = React.useState(60);
  return (
    <div>
      <EmotionButton onClick={() => setValue(v => (v >= 100 ? 0 : v + 20))}>증가</EmotionButton>
      <LinearBar value={value} />
    </div>
  );
};

// 18. Tag
const TagBox = styled.span`
  display: inline-block;
  background: #1976d2;
  color: white;
  border-radius: 12px;
  padding: 4px 14px;
  font-size: 15px;
  font-weight: 500;
  margin-right: 8px;
`;
const TagDemo = () => <TagBox>Emotion Tag</TagBox>;

export const EmotionExample: React.FC = () => {
  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h4" gutterBottom>Emotion 주요 예제</Typography>
        <Typography variant="body1" gutterBottom>
          Emotion은 <b>CSS-in-JS 기반의 스타일링 라이브러리</b>로, <b>강력한 타입 지원</b>과 <b>동적 스타일</b>, <b>컴포넌트 단위 재사용</b>에 최적화되어 있습니다.<br/>
          <ul style={{margin: '1em 0 0 1.2em', color: '#b2dfdb', fontSize: 16}}>
            <li>styled, css, keyframes 등 다양한 API 제공</li>
            <li>props/상태 기반 동적 스타일, 테마 연동, SSR 지원</li>
            <li>컴포넌트 단위 스타일 재사용, 타입스크립트와 궁합↑</li>
            <li>실무에서 MUI, Ant, Chakra 등과 함께 자주 사용</li>
          </ul>
          <span style={{color:'#ffd600'}}>실전에서 자주 쓰는 패턴과 실무 팁, 베스트 프랙티스도 함께 소개합니다.</span>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>1. Button</Typography><ExampleTab example={<ButtonDemo />} code={`const EmotionButton = styled.button\`
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover { background: #1565c0; }
\`;
`} desc={`Emotion의 styled API로 버튼을 커스텀합니다.\n- 실전 활용: 테마, 상태별 스타일, 재사용 컴포넌트\n- Tip: props로 동적 스타일, css/hover 등 조합`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>2. Input</Typography><ExampleTab example={<InputDemo />} code={`const EmotionInput = styled.input\`
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 16px;
  &:focus { border-color: #1976d2; outline: none; }
\`;
`} desc={`Emotion으로 input 스타일을 지정합니다.\n- 실전 활용: 폼, 검색창, 필터\n- Tip: focus, placeholder 등 상태별 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>3. Checkbox</Typography><ExampleTab example={<CheckboxDemo />} code={`const EmotionCheckbox = styled.input\`
  accent-color: #1976d2;
  width: 20px;
  height: 20px;
\`;
`} desc={`Emotion으로 체크박스 스타일을 지정합니다.\n- 실전 활용: 동의, 선택, 필터\n- Tip: accent-color로 색상 지정`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>4. Switch</Typography><ExampleTab example={<SwitchDemo />} code={`const EmotionSwitch = styled.input\`
  width: 40px;
  height: 20px;
  appearance: none;
  background: #ccc;
  border-radius: 20px;
  position: relative;
  outline: none;
  transition: background 0.2s;
  &:checked { background: #1976d2; }
  &::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: transform 0.2s;
    transform: translateX(0);
  }
  &:checked::before {
    transform: translateX(20px);
  }
\`;
`} desc={`Emotion으로 스위치(토글) 스타일을 지정합니다.\n- 실전 활용: 설정, ON/OFF, 다크모드\n- Tip: appearance, ::before로 커스텀`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>5. Select</Typography><ExampleTab example={<SelectDemo />} code={`const EmotionSelect = styled.select\`
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 16px;
\`;
`} desc={`Emotion으로 select(드롭다운) 스타일을 지정합니다.\n- 실전 활용: 옵션 선택, 필터\n- Tip: option, focus 등 상태별 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>6. Dialog</Typography><ExampleTab example={<DialogDemo />} code={`// DialogBg, DialogBox styled 정의 후 사용
`} desc={`Emotion으로 모달/다이얼로그를 직접 구현합니다.\n- 실전 활용: 알림, 확인, 폼\n- Tip: position, z-index, 배경 클릭 닫기`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>7. Snackbar</Typography><ExampleTab example={<SnackbarDemo />} code={`// SnackbarBox styled 정의 후 사용
`} desc={`Emotion으로 스낵바(알림)를 직접 구현합니다.\n- 실전 활용: 저장, 에러, 안내\n- Tip: position, transition, 버튼 조합`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>8. Progress</Typography><ExampleTab example={<ProgressDemo />} code={`const ProgressBar = styled.div<{ value: number }>\`
  width: 100%;
  height: 12px;
  background: #eee;
  border-radius: 6px;
  overflow: hidden;
  margin-top: 8px;
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: \\${function(props: { value: number }) { return props.value; }}%;
    background: #1976d2;
    transition: width 0.3s;
  }
\`;
`} desc={`Emotion으로 프로그레스바를 구현합니다.\n- 실전 활용: 진행률, 로딩\n- Tip: props로 동적 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>9. Avatar</Typography><ExampleTab example={<AvatarDemo />} code={`const AvatarCircle = styled.div<{ color?: string }>\`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: \\${function(props: { color?: string }) { return props.color || '#1976d2'; }}
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
\`;
`} desc={`Emotion으로 아바타(프로필)를 구현합니다.\n- 실전 활용: 사용자, 팀, 아이콘\n- Tip: props로 색상 지정`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>10. Badge</Typography><ExampleTab example={<BadgeDemo />} code={`// BadgeWrap, BadgeDot styled 정의 후 사용
`} desc={`Emotion으로 뱃지(알림점)를 구현합니다.\n- 실전 활용: 알림, 상태 표시\n- Tip: position, z-index`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>11. Chip</Typography><ExampleTab example={<ChipDemo />} code={`const ChipBox = styled.span\`
  display: inline-block;
  background: #e0e0e0;
  color: #333;
  border-radius: 16px;
  padding: 4px 16px;
  font-size: 15px;
  font-weight: 500;
  margin-right: 8px;
\`;
`} desc={`Emotion으로 칩(태그)을 구현합니다.\n- 실전 활용: 태그, 상태, 필터\n- Tip: 색상, 아이콘 조합`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>12. Tabs</Typography><ExampleTab example={<TabsDemo />} code={`// TabsWrap, TabBtn styled 정의 후 사용
`} desc={`Emotion으로 탭 UI를 구현합니다.\n- 실전 활용: 네비게이션, 필터\n- Tip: active, hover 등 동적 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>13. Dropdown</Typography><ExampleTab example={<DropdownDemo />} code={`// DropdownWrap, DropdownBtn, DropdownMenu styled 정의 후 사용
`} desc={`Emotion으로 드롭다운 메뉴를 구현합니다.\n- 실전 활용: 옵션, 메뉴, 필터\n- Tip: position, z-index, 클릭 외부 닫기`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>14. Menu</Typography><ExampleTab example={<MenuDemo />} code={`// MenuWrap, MenuBtn styled 정의 후 사용
`} desc={`Emotion으로 메뉴 버튼 그룹을 구현합니다.\n- 실전 활용: 네비게이션, 액션\n- Tip: hover, active 등 상태별 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>15. Pagination</Typography><ExampleTab example={<PaginationDemo />} code={`// PaginationWrap, PageBtn styled 정의 후 사용
`} desc={`Emotion으로 페이지네이션을 구현합니다.\n- 실전 활용: 리스트, 테이블, 페이지 이동\n- Tip: active, hover 등 동적 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>16. Popconfirm</Typography><ExampleTab example={<PopconfirmDemo />} code={`// PopconfirmWrap, PopconfirmBox styled 정의 후 사용
`} desc={`Emotion으로 확인/취소 팝업을 구현합니다.\n- 실전 활용: 삭제, 경고, 안내\n- Tip: position, z-index, 배경 클릭 닫기`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>17. LinearProgress</Typography><ExampleTab example={<LinearProgressDemo />} code={`// LinearBar styled 정의 후 사용
`} desc={`Emotion으로 선형 프로그레스바를 구현합니다.\n- 실전 활용: 로딩, 진행률\n- Tip: props로 동적 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>18. Tag</Typography><ExampleTab example={<TagDemo />} code={`const TagBox = styled.span\`
  display: inline-block;
  background: #1976d2;
  color: white;
  border-radius: 12px;
  padding: 4px 14px;
  font-size: 15px;
  font-weight: 500;
  margin-right: 8px;
\`;
`} desc={`Emotion으로 태그를 구현합니다.\n- 실전 활용: 상태, 분류, 필터\n- Tip: 색상, 아이콘 조합`} /></div>
    </div>
  );
};

export default EmotionExample; 