import React from 'react';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const stateExampleBlockStyle: React.CSSProperties = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

// 1. Button
const ButtonDemo = () => <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tailwind 버튼</button>;
// 2. Input
const InputDemo = () => <input className="border border-gray-400 rounded px-3 py-2 text-base focus:outline-none focus:border-blue-600" placeholder="Tailwind Input" />;
// 3. Checkbox
const CheckboxDemo = () => <label className="flex items-center gap-2"><input type="checkbox" className="accent-blue-600 w-5 h-5" /> 체크박스</label>;
// 4. Switch
const SwitchDemo = () => <label className="inline-flex items-center cursor-pointer"><input type="checkbox" className="sr-only peer" /><div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all relative"><div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5" /></div><span className="ml-3 text-gray-200">스위치</span></label>;
// 5. Select
const SelectDemo = () => (
  <select className="border border-gray-400 rounded px-3 py-2 text-base focus:outline-none focus:border-blue-600">
    <option>옵션 1</option>
    <option>옵션 2</option>
    <option>옵션 3</option>
  </select>
);
// 6. Dialog
const DialogDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setOpen(true)}>다이얼로그 열기</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-lg p-8 min-w-[300px]" onClick={e => e.stopPropagation()}>
            <div className="text-lg font-bold mb-4">Tailwind Dialog</div>
            <div className="text-right"><button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setOpen(false)}>닫기</button></div>
          </div>
        </div>
      )}
    </>
  );
};
// 7. Snackbar
const SnackbarDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setOpen(true)}>스낵바 띄우기</button>
      {open && <div className="fixed left-1/2 bottom-10 -translate-x-1/2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold z-50 flex items-center">Tailwind Snackbar!<button className="ml-4 text-white underline" onClick={() => setOpen(false)}>닫기</button></div>}
    </>
  );
};
// 8. Progress
const ProgressDemo = () => {
  const [value, setValue] = React.useState(40);
  return (
    <div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-2" onClick={() => setValue(v => (v >= 100 ? 0 : v + 20))}>증가</button>
      <div className="w-full h-3 bg-gray-200 rounded"><div className="h-3 bg-blue-600 rounded transition-all" style={{ width: `${value}%` }} /></div>
    </div>
  );
};
// 9. Avatar
const AvatarDemo = () => <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">AB</div>;
// 10. Badge
const BadgeDemo = () => (
  <div className="relative inline-block">
    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">CD</div>
    <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 border-2 border-white rounded-full" />
  </div>
);
// 11. Chip
const ChipDemo = () => <span className="inline-block bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-sm font-medium mr-2">Tailwind Chip</span>;
// 12. Tabs
const TabsDemo = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <div>
      <div className="flex border-b-2 border-blue-600">
        {[0,1,2].map(i => (
          <button key={i} className={`px-6 py-2 font-bold text-base border-b-4 transition-colors ${tab===i ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-300 bg-transparent'}`} onClick={() => setTab(i)}>
            탭{i+1}
          </button>
        ))}
      </div>
      <div className="p-4">선택된 탭: {tab+1}</div>
    </div>
  );
};
// 13. Dropdown
const DropdownDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative inline-block">
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setOpen(o => !o)}>드롭다운</button>
      {open && (
        <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg min-w-[120px] z-10">
          <div className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setOpen(false)}>메뉴1</div>
          <div className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setOpen(false)}>메뉴2</div>
        </div>
      )}
    </div>
  );
};
// 14. Menu
const MenuDemo = () => (
  <div className="flex gap-2">
    <button className="bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 font-bold hover:bg-blue-600 hover:text-white">메뉴1</button>
    <button className="bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 font-bold hover:bg-blue-600 hover:text-white">메뉴2</button>
    <button className="bg-white text-blue-600 border border-blue-600 rounded px-4 py-2 font-bold hover:bg-blue-600 hover:text-white">메뉴3</button>
  </div>
);
// 15. Pagination
const PaginationDemo = () => {
  const [page, setPage] = React.useState(1);
  return (
    <div className="flex gap-2 items-center">
      {[1,2,3].map(i => (
        <button key={i} className={`px-3 py-1 rounded border font-bold ${page===i ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-600'}`} onClick={() => setPage(i)}>{i}</button>
      ))}
      <span>페이지: {page}</span>
    </div>
  );
};
// 16. Popconfirm
const PopconfirmDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="inline-block relative">
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setOpen(true)}>삭제</button>
      {open && (
        <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg p-4 z-20">
          <div className="mb-3">정말 삭제할까요?</div>
          <button className="bg-gray-300 text-gray-800 px-3 py-1 rounded mr-2" onClick={() => setOpen(false)}>아니오</button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => setOpen(false)}>네</button>
        </div>
      )}
    </div>
  );
};
// 17. LinearProgress
const LinearProgressDemo = () => {
  const [value, setValue] = React.useState(60);
  return (
    <div>
      <button className="bg-green-600 text-white px-4 py-2 rounded mb-2" onClick={() => setValue(v => (v >= 100 ? 0 : v + 20))}>증가</button>
      <div className="w-full h-2 bg-gray-200 rounded"><div className="h-2 bg-green-600 rounded transition-all" style={{ width: `${value}%` }} /></div>
    </div>
  );
};
// 18. Tag
const TagDemo = () => <span className="inline-block bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium mr-2">Tailwind Tag</span>;

export const TailwindExample: React.FC = () => {
  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h4" gutterBottom>Tailwind CSS 주요 예제</Typography>
        <Typography variant="body1" gutterBottom>
          Tailwind CSS는 <b>유틸리티 퍼스트(utility-first) CSS 프레임워크</b>로, <b>클래스 조합만으로 빠르고 일관된 UI</b>를 만들 수 있습니다.<br/>
          <ul style={{margin: '1em 0 0 1.2em', color: '#b2dfdb', fontSize: 16}}>
            <li>미리 정의된 수백 개의 유틸리티 클래스</li>
            <li>반응형, 다크모드, 커스텀 테마, 플러그인 등 강력한 확장성</li>
            <li>CSS-in-JS, 전통적 CSS, 프레임워크와 모두 호환</li>
            <li>실무에서 MUI, Ant, Emotion 등과 함께 혼용 가능</li>
          </ul>
          <span style={{color:'#ffd600'}}>실전에서 자주 쓰는 패턴과 실무 팁, 베스트 프랙티스도 함께 소개합니다.</span>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>1. Button</Typography><ExampleTab example={<ButtonDemo />} code={`<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tailwind 버튼</button>`} desc={`Tailwind의 유틸리티 클래스로 버튼을 커스텀합니다.\n- 실전 활용: 테마, 상태별 스타일, 재사용 컴포넌트\n- Tip: hover, focus, disabled 등 상태별 클래스 조합`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>2. Input</Typography><ExampleTab example={<InputDemo />} code={`<input className="border border-gray-400 rounded px-3 py-2 text-base focus:outline-none focus:border-blue-600" placeholder="Tailwind Input" />`} desc={`Tailwind로 input 스타일을 지정합니다.\n- 실전 활용: 폼, 검색창, 필터\n- Tip: focus, placeholder 등 상태별 클래스`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>3. Checkbox</Typography><ExampleTab example={<CheckboxDemo />} code={`<input type="checkbox" className="accent-blue-600 w-5 h-5" />`} desc={`Tailwind로 체크박스 스타일을 지정합니다.\n- 실전 활용: 동의, 선택, 필터\n- Tip: accent-color, 크기 조절`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>4. Switch</Typography><ExampleTab example={<SwitchDemo />} code={`// Switch 구현 예시 (peer, transition, bg 등 활용)`} desc={`Tailwind로 스위치(토글) 스타일을 지정합니다.\n- 실전 활용: 설정, ON/OFF, 다크모드\n- Tip: peer, transition, bg, translate-x 등 조합`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>5. Select</Typography><ExampleTab example={<SelectDemo />} code={`<select className="border border-gray-400 rounded px-3 py-2 text-base focus:outline-none focus:border-blue-600">...</select>`} desc={`Tailwind로 select(드롭다운) 스타일을 지정합니다.\n- 실전 활용: 옵션 선택, 필터\n- Tip: option, focus 등 상태별 클래스`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>6. Dialog</Typography><ExampleTab example={<DialogDemo />} code={`// Dialog 구현 예시 (fixed, inset-0, bg-opacity, z-50 등 활용)`} desc={`Tailwind로 모달/다이얼로그를 직접 구현합니다.\n- 실전 활용: 알림, 확인, 폼\n- Tip: position, z-index, 배경 클릭 닫기`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>7. Snackbar</Typography><ExampleTab example={<SnackbarDemo />} code={`// Snackbar 구현 예시 (fixed, left-1/2, bottom-10, translate-x 등 활용)`} desc={`Tailwind로 스낵바(알림)를 직접 구현합니다.\n- 실전 활용: 저장, 에러, 안내\n- Tip: position, transition, 버튼 조합`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>8. Progress</Typography><ExampleTab example={<ProgressDemo />} code={`<div className=\"w-full h-3 bg-gray-200 rounded\"><div className=\"h-3 bg-blue-600 rounded transition-all\" style={{ width: '40%' }} /></div>`} desc={`Tailwind로 프로그레스바를 구현합니다.\n- 실전 활용: 진행률, 로딩\n- Tip: width, transition 등 동적 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>9. Avatar</Typography><ExampleTab example={<AvatarDemo />} code={`<div className=\"w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold\">AB</div>`} desc={`Tailwind로 아바타(프로필)를 구현합니다.\n- 실전 활용: 사용자, 팀, 아이콘\n- Tip: 색상, 크기, 폰트`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>10. Badge</Typography><ExampleTab example={<BadgeDemo />} code={`// Badge 구현 예시 (relative, absolute, bg-red-600 등 활용)`} desc={`Tailwind로 뱃지(알림점)를 구현합니다.\n- 실전 활용: 알림, 상태 표시\n- Tip: position, z-index`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>11. Chip</Typography><ExampleTab example={<ChipDemo />} code={`<span className=\"inline-block bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-sm font-medium mr-2\">Tailwind Chip</span>`} desc={`Tailwind로 칩(태그)을 구현합니다.\n- 실전 활용: 태그, 상태, 필터\n- Tip: 색상, 아이콘 조합`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>12. Tabs</Typography><ExampleTab example={<TabsDemo />} code={`// Tabs 구현 예시 (flex, border-b, border-blue-600 등 활용)`} desc={`Tailwind로 탭 UI를 구현합니다.\n- 실전 활용: 네비게이션, 필터\n- Tip: active, hover 등 동적 클래스`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>13. Dropdown</Typography><ExampleTab example={<DropdownDemo />} code={`// Dropdown 구현 예시 (relative, absolute, z-10 등 활용)`} desc={`Tailwind로 드롭다운 메뉴를 구현합니다.\n- 실전 활용: 옵션, 메뉴, 필터\n- Tip: position, z-index, 클릭 외부 닫기`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>14. Menu</Typography><ExampleTab example={<MenuDemo />} code={`// Menu 구현 예시 (flex, gap, hover 등 활용)`} desc={`Tailwind로 메뉴 버튼 그룹을 구현합니다.\n- 실전 활용: 네비게이션, 액션\n- Tip: hover, active 등 상태별 클래스`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>15. Pagination</Typography><ExampleTab example={<PaginationDemo />} code={`// Pagination 구현 예시 (flex, gap, active 등 활용)`} desc={`Tailwind로 페이지네이션을 구현합니다.\n- 실전 활용: 리스트, 테이블, 페이지 이동\n- Tip: active, hover 등 동적 클래스`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>16. Popconfirm</Typography><ExampleTab example={<PopconfirmDemo />} code={`// Popconfirm 구현 예시 (relative, absolute, z-20 등 활용)`} desc={`Tailwind로 확인/취소 팝업을 구현합니다.\n- 실전 활용: 삭제, 경고, 안내\n- Tip: position, z-index, 배경 클릭 닫기`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>17. LinearProgress</Typography><ExampleTab example={<LinearProgressDemo />} code={`// LinearProgress 구현 예시 (width, transition 등 활용)`} desc={`Tailwind로 선형 프로그레스바를 구현합니다.\n- 실전 활용: 로딩, 진행률\n- Tip: width, transition 등 동적 스타일`} /></div>
      <div style={stateExampleBlockStyle}><Typography variant="h6" sx={{ mb: 2 }}>18. Tag</Typography><ExampleTab example={<TagDemo />} code={`<span className=\"inline-block bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium mr-2\">Tailwind Tag</span>`} desc={`Tailwind로 태그를 구현합니다.\n- 실전 활용: 상태, 분류, 필터\n- Tip: 색상, 아이콘 조합`} /></div>
    </div>
  );
};

export default TailwindExample; 