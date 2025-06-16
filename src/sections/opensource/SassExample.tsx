import React from 'react';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import styles from './SassExample.module.scss';

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
const ButtonDemo = () => <button className={styles.sassButton}>Sass 버튼</button>;
// 2. Input
const InputDemo = () => <input className={styles.sassInput} placeholder="Sass Input" />;
// 3. Checkbox
const CheckboxDemo = () => <label><input type="checkbox" className={styles.sassCheckbox} /> 체크박스</label>;
// 4. Switch
const SwitchDemo = () => <label className={styles.sassSwitchWrap}><input type="checkbox" className={styles.sassSwitch} /> 스위치</label>;
// 5. Select
const SelectDemo = () => (
  <select className={styles.sassSelect}>
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
      <button className={styles.sassButton} onClick={() => setOpen(true)}>다이얼로그 열기</button>
      {open && (
        <div className={styles.sassDialogBg} onClick={() => setOpen(false)}>
          <div className={styles.sassDialogBox} onClick={e => e.stopPropagation()}>
            <Typography variant="h6">Sass Dialog</Typography>
            <div style={{ marginTop: 16, textAlign: 'right' }}>
              <button className={styles.sassButton} onClick={() => setOpen(false)}>닫기</button>
            </div>
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
      <button className={styles.sassButton} onClick={() => setOpen(true)}>스낵바 띄우기</button>
      {open && <div className={styles.sassSnackbar}>Sass Snackbar! <button className={styles.sassButton} style={{ marginLeft: 16 }} onClick={() => setOpen(false)}>닫기</button></div>}
    </>
  );
};
// 8. Progress
const ProgressDemo = () => {
  const [value, setValue] = React.useState(40);
  return (
    <div>
      <button className={styles.sassButton} onClick={() => setValue(v => (v >= 100 ? 0 : v + 20))}>증가</button>
      <div className={styles.sassProgressBar}>
        <div className={styles.sassProgress} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};
// 9. Avatar
const AvatarDemo = () => <div className={styles.sassAvatar}>AB</div>;
// 10. Badge
const BadgeDemo = () => (
  <div className={styles.sassBadgeWrap}>
    <div className={styles.sassAvatar}>CD</div>
    <div className={styles.sassBadgeDot} />
  </div>
);
// 11. Chip
const ChipDemo = () => <span className={styles.sassChip}>Sass Chip</span>;
// 12. Tabs
const TabsDemo = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <div>
      <div className={styles.sassTabsWrap}>
        {[0, 1, 2].map(i => (
          <button key={i} className={tab === i ? styles.sassTabActive : styles.sassTabBtn} onClick={() => setTab(i)}>{`탭${i + 1}`}</button>
        ))}
      </div>
      <div style={{ padding: 16 }}>선택된 탭: {tab + 1}</div>
    </div>
  );
};
// 13. Dropdown
const DropdownDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.sassDropdownWrap}>
      <button className={styles.sassButton} onClick={() => setOpen(o => !o)}>드롭다운</button>
      {open && (
        <div className={styles.sassDropdownMenu}>
          <div className={styles.sassDropdownItem}>메뉴 1</div>
          <div className={styles.sassDropdownItem}>메뉴 2</div>
          <div className={styles.sassDropdownItem}>메뉴 3</div>
        </div>
      )}
    </div>
  );
};
// 14. Menu
const MenuDemo = () => (
  <div className={styles.sassMenuWrap}>
    <div className={styles.sassMenuItem}>메뉴 1</div>
    <div className={styles.sassMenuItem}>메뉴 2</div>
    <div className={styles.sassMenuItem}>메뉴 3</div>
  </div>
);
// 15. Pagination
const PaginationDemo = () => {
  const [page, setPage] = React.useState(1);
  return (
    <div className={styles.sassPaginationWrap}>
      {[1, 2, 3].map(i => (
        <button key={i} className={page === i ? styles.sassPageActive : styles.sassPageBtn} onClick={() => setPage(i)}>{i}</button>
      ))}
      <span>페이지: {page}</span>
    </div>
  );
};
// 16. Popconfirm
const PopconfirmDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.sassPopconfirmWrap}>
      <button className={styles.sassButton} onClick={() => setOpen(true)}>삭제</button>
      {open && (
        <div className={styles.sassPopconfirmBox}>
          <div style={{ marginBottom: 12 }}>정말 삭제할까요?</div>
          <button className={styles.sassButton} onClick={() => setOpen(false)} style={{ marginRight: 8 }}>아니오</button>
          <button className={styles.sassButton} onClick={() => setOpen(false)}>네</button>
        </div>
      )}
    </div>
  );
};
// 17. LinearProgress
const LinearProgressDemo = () => {
  const [value, setValue] = React.useState(30);
  React.useEffect(() => {
    const timer = setInterval(() => setValue(v => (v >= 100 ? 0 : v + 10)), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className={styles.sassLinearProgressBar}>
      <div className={styles.sassLinearProgress} style={{ width: `${value}%` }} />
    </div>
  );
};
// 18. Tag
const TagDemo = () => <span className={styles.sassTag}>Sass Tag</span>;

export const SassExample: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Sass/SCSS 실전 예제</Typography>
      <div style={stateExampleBlockStyle}>
        <Typography variant="body1" gutterBottom>
          <b>Sass/SCSS</b>는 CSS 전처리기로, 변수, 중첩, 믹스인, 함수 등 강력한 기능을 제공하여 대규모 스타일 관리에 적합합니다.<br />
          <ul style={{ margin: '1em 0 0 1.2em', fontSize: 15 }}>
            <li>유지보수성과 재사용성↑ (변수, 믹스인, 분리된 파일 구조)</li>
            <li>실무에서 널리 사용, CSS-in-JS와 병행도 가능</li>
            <li>단점: 빌드 필요, JS 동적 스타일링은 불가</li>
            <li>추천: 디자인 시스템, 대규모 프로젝트, 복잡한 스타일 구조</li>
          </ul>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 버튼 (Button)</Typography>
        <ExampleTab example={<ButtonDemo />} code={`// Sass 버튼\n<button className=\"sassButton\">Sass 버튼</button>\n// .sassButton { ... }`} desc={`Sass/SCSS로 커스텀 버튼을 만듭니다.\n- 실전: 색상, 크기, 상태별 스타일 쉽게 관리\n- Tip: 변수/믹스인으로 일관성 유지\n- Best Practice: 공통 버튼 스타일 분리, 재사용`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 인풋 (Input)</Typography>
        <ExampleTab example={<InputDemo />} code={`// Sass Input\n<input className=\"sassInput\" placeholder=\"Sass Input\" />\n// .sassInput { ... }`} desc={`Sass/SCSS로 인풋 필드를 꾸밉니다.\n- 실전: 폼, 검색창 등\n- Tip: placeholder, focus 상태 커스텀\n- Best Practice: 폼 컴포넌트별 스타일 분리`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 체크박스 (Checkbox)</Typography>
        <ExampleTab example={<CheckboxDemo />} code={`// Sass Checkbox\n<input type=\"checkbox\" className=\"sassCheckbox\" />\n// .sassCheckbox { ... }`} desc={`Sass/SCSS로 체크박스를 꾸밉니다.\n- 실전: 동의, 선택 등\n- Tip: accent-color, 커스텀 체크박스\n- Best Practice: 접근성 고려`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 스위치 (Switch)</Typography>
        <ExampleTab example={<SwitchDemo />} code={`// Sass Switch\n<input type=\"checkbox\" className=\"sassSwitch\" />\n// .sassSwitch { ... }`} desc={`Sass/SCSS로 토글 스위치를 만듭니다.\n- 실전: 설정, ON/OFF\n- Tip: before/after, transition 활용\n- Best Practice: 크기/색상 변수화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 셀렉트 (Select)</Typography>
        <ExampleTab example={<SelectDemo />} code={`// Sass Select\n<select className=\"sassSelect\">...\n// .sassSelect { ... }`} desc={`Sass/SCSS로 셀렉트 박스를 만듭니다.\n- 실전: 옵션 선택, 필터\n- Tip: option 스타일링, 반응형\n- Best Practice: 공통 셀렉트 스타일 분리`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. 다이얼로그 (Dialog)</Typography>
        <ExampleTab example={<DialogDemo />} code={`// Sass Dialog\n// .sassDialogBg, .sassDialogBox { ... }`} desc={`Sass/SCSS로 모달/다이얼로그를 만듭니다.\n- 실전: 알림, 확인창\n- Tip: z-index, fixed/absolute 활용\n- Best Practice: 재사용 가능한 모달 컴포넌트`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>7. 스낵바 (Snackbar)</Typography>
        <ExampleTab example={<SnackbarDemo />} code={`// Sass Snackbar\n// .sassSnackbar { ... }`} desc={`Sass/SCSS로 스낵바(알림)를 만듭니다.\n- 실전: 알림, 피드백\n- Tip: position, animation 활용\n- Best Practice: 전역 알림 스타일 분리`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>8. 프로그레스바 (Progress)</Typography>
        <ExampleTab example={<ProgressDemo />} code={`// Sass ProgressBar\n// .sassProgressBar, .sassProgress { ... }`} desc={`Sass/SCSS로 프로그레스 바를 만듭니다.\n- 실전: 로딩, 진행률 표시\n- Tip: width, transition 활용\n- Best Practice: 색상/크기 변수화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>9. 아바타 (Avatar)</Typography>
        <ExampleTab example={<AvatarDemo />} code={`// Sass Avatar\n// .sassAvatar { ... }`} desc={`Sass/SCSS로 아바타(프로필)를 만듭니다.\n- 실전: 사용자, 멤버 표시\n- Tip: 배경색, 이니셜\n- Best Practice: 크기/색상 변수화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>10. 뱃지 (Badge)</Typography>
        <ExampleTab example={<BadgeDemo />} code={`// Sass Badge\n// .sassBadgeWrap, .sassBadgeDot { ... }`} desc={`Sass/SCSS로 뱃지(알림 점)를 만듭니다.\n- 실전: 알림, 상태 표시\n- Tip: position, border 활용\n- Best Practice: 뱃지 컴포넌트화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>11. 칩 (Chip)</Typography>
        <ExampleTab example={<ChipDemo />} code={`// Sass Chip\n// .sassChip { ... }`} desc={`Sass/SCSS로 칩(태그)을 만듭니다.\n- 실전: 필터, 태그\n- Tip: border-radius, 색상\n- Best Practice: 칩 스타일 분리`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>12. 탭 (Tabs)</Typography>
        <ExampleTab example={<TabsDemo />} code={`// Sass Tabs\n// .sassTabsWrap, .sassTabBtn, .sassTabActive { ... }`} desc={`Sass/SCSS로 탭 UI를 만듭니다.\n- 실전: 뷰 전환, 설정\n- Tip: active 상태, border 활용\n- Best Practice: 탭 컴포넌트화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>13. 드롭다운 (Dropdown)</Typography>
        <ExampleTab example={<DropdownDemo />} code={`// Sass Dropdown\n// .sassDropdownWrap, .sassDropdownMenu, .sassDropdownItem { ... }`} desc={`Sass/SCSS로 드롭다운 메뉴를 만듭니다.\n- 실전: 옵션, 메뉴\n- Tip: hover, position 활용\n- Best Practice: 드롭다운 컴포넌트화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>14. 메뉴 (Menu)</Typography>
        <ExampleTab example={<MenuDemo />} code={`// Sass Menu\n// .sassMenuWrap, .sassMenuItem { ... }`} desc={`Sass/SCSS로 메뉴 리스트를 만듭니다.\n- 실전: 내비게이션, 리스트\n- Tip: gap, border 활용\n- Best Practice: 메뉴 스타일 분리`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>15. 페이지네이션 (Pagination)</Typography>
        <ExampleTab example={<PaginationDemo />} code={`// Sass Pagination\n// .sassPaginationWrap, .sassPageBtn, .sassPageActive { ... }`} desc={`Sass/SCSS로 페이지네이션을 만듭니다.\n- 실전: 목록, 페이지 이동\n- Tip: active, border-radius\n- Best Practice: 페이지네이션 컴포넌트화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>16. 팝업 확인 (Popconfirm)</Typography>
        <ExampleTab example={<PopconfirmDemo />} code={`// Sass Popconfirm\n// .sassPopconfirmWrap, .sassPopconfirmBox { ... }`} desc={`Sass/SCSS로 팝업 확인창을 만듭니다.\n- 실전: 삭제, 경고\n- Tip: position, z-index\n- Best Practice: 팝업 컴포넌트화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>17. 선형 프로그레스 (LinearProgress)</Typography>
        <ExampleTab example={<LinearProgressDemo />} code={`// Sass LinearProgress\n// .sassLinearProgressBar, .sassLinearProgress { ... }`} desc={`Sass/SCSS로 선형 프로그레스 바를 만듭니다.\n- 실전: 로딩, 진행률\n- Tip: width, animation\n- Best Practice: 색상/크기 변수화`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>18. 태그 (Tag)</Typography>
        <ExampleTab example={<TagDemo />} code={`// Sass Tag\n// .sassTag { ... }`} desc={`Sass/SCSS로 태그를 만듭니다.\n- 실전: 분류, 상태 표시\n- Tip: 색상, border-radius\n- Best Practice: 태그 스타일 분리`} />
      </div>
    </div>
  );
};

export default SassExample; 