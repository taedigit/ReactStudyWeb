import React from 'react';
import { Typography, Button } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import * as Switch from '@radix-ui/react-switch';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Slider from '@radix-ui/react-slider';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Popover from '@radix-ui/react-popover';
import * as Tabs from '@radix-ui/react-tabs';
import * as Toast from '@radix-ui/react-toast';
import * as Toggle from '@radix-ui/react-toggle';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Select from '@radix-ui/react-select';
import * as ContextMenu from '@radix-ui/react-context-menu';
import * as Label from '@radix-ui/react-label';
import * as Avatar from '@radix-ui/react-avatar';
import * as Progress from '@radix-ui/react-progress';

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

// 1. Switch
const RadixSwitchDemo = () => (
  <Switch.Root defaultChecked style={{ width: 42, height: 24, background: '#ccc', borderRadius: 12, position: 'relative', outline: 'none' }}>
    <Switch.Thumb style={{ display: 'block', width: 20, height: 20, background: '#1976d2', borderRadius: '50%', transition: 'transform 0.2s', transform: 'translateX(0)' }} />
  </Switch.Root>
);
// 2. Checkbox
const RadixCheckboxDemo = () => (
  <Checkbox.Root style={{ width: 24, height: 24, border: '2px solid #1976d2', borderRadius: 4, background: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
    <Checkbox.Indicator style={{ color: '#1976d2', fontSize: 20 }}>✔</Checkbox.Indicator>
  </Checkbox.Root>
);
// 3. RadioGroup
const RadixRadioDemo = () => (
  <RadioGroup.Root defaultValue="1" style={{ display: 'flex', gap: 16 }}>
    <RadioGroup.Item value="1" style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid #1976d2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <RadioGroup.Indicator style={{ width: 12, height: 12, borderRadius: '50%', background: '#1976d2' }} />
    </RadioGroup.Item>
    <RadioGroup.Item value="2" style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid #1976d2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <RadioGroup.Indicator style={{ width: 12, height: 12, borderRadius: '50%', background: '#1976d2' }} />
    </RadioGroup.Item>
  </RadioGroup.Root>
);
// 4. Slider
const RadixSliderDemo = () => (
  <Slider.Root defaultValue={[50]} max={100} step={1} style={{ width: 200, height: 24, display: 'flex', alignItems: 'center' }}>
    <Slider.Track style={{ background: '#eee', height: 6, borderRadius: 3, flex: 1 }}>
      <Slider.Range style={{ background: '#1976d2', height: 6, borderRadius: 3 }} />
    </Slider.Track>
    <Slider.Thumb style={{ width: 20, height: 20, background: '#1976d2', borderRadius: '50%', border: '2px solid #fff' }} />
  </Slider.Root>
);
// 5. Tooltip
const RadixTooltipDemo = () => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button variant="contained">툴팁 버튼</Button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content sideOffset={5} style={{ background: '#222', color: '#fff', padding: '8px 16px', borderRadius: 6, fontSize: 15 }}>
          Radix Tooltip!<Tooltip.Arrow style={{ fill: '#222' }} />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);
// 6. Dialog
const RadixDialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button variant="contained">다이얼로그 열기</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay style={{ background: 'rgba(0,0,0,0.3)', position: 'fixed', inset: 0 }} />
      <Dialog.Content style={{ background: '#fff', borderRadius: 8, padding: 24, minWidth: 300, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <Dialog.Title>Radix Dialog</Dialog.Title>
        <Dialog.Description>Radix UI 다이얼로그 예제입니다.</Dialog.Description>
        <Dialog.Close asChild>
          <Button variant="outlined" style={{ marginTop: 16 }}>닫기</Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
// 7. DropdownMenu
const RadixDropdownMenuDemo = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <Button variant="contained">드롭다운</Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content sideOffset={5} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, minWidth: 160, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 8 }}>
        <DropdownMenu.Item style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>메뉴 1</DropdownMenu.Item>
        <DropdownMenu.Item style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>메뉴 2</DropdownMenu.Item>
        <DropdownMenu.Item style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>메뉴 3</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);
// 8. Popover
const RadixPopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button variant="contained">팝오버</Button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content sideOffset={5} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, minWidth: 180, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 16 }}>
        Radix Popover!<Popover.Arrow style={{ fill: '#eee' }} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
// 9. Tabs
const RadixTabsDemo = () => (
  <Tabs.Root defaultValue="tab1">
    <Tabs.List style={{ display: 'flex', borderBottom: '2px solid #1976d2' }}>
      <Tabs.Trigger value="tab1" style={{ padding: '12px 24px', border: 'none', background: 'none', color: '#1976d2', fontWeight: 'bold', borderBottom: '3px solid #1976d2', cursor: 'pointer' }}>탭1</Tabs.Trigger>
      <Tabs.Trigger value="tab2" style={{ padding: '12px 24px', border: 'none', background: 'none', color: '#333', fontWeight: 'bold', borderBottom: '3px solid transparent', cursor: 'pointer' }}>탭2</Tabs.Trigger>
      <Tabs.Trigger value="tab3" style={{ padding: '12px 24px', border: 'none', background: 'none', color: '#333', fontWeight: 'bold', borderBottom: '3px solid transparent', cursor: 'pointer' }}>탭3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">Radix Tab 1 내용</Tabs.Content>
    <Tabs.Content value="tab2">Radix Tab 2 내용</Tabs.Content>
    <Tabs.Content value="tab3">Radix Tab 3 내용</Tabs.Content>
  </Tabs.Root>
);
// 10. Toast
const RadixToastDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Toast.Provider swipeDirection="right">
      <Button variant="contained" onClick={() => setOpen(true)}>토스트 띄우기</Button>
      <Toast.Root open={open} onOpenChange={setOpen} style={{ background: '#222', color: '#fff', borderRadius: 8, padding: '12px 32px', position: 'fixed', bottom: 40, left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>
        Radix Toast! <Toast.Close asChild><Button style={{ marginLeft: 16 }} size="small">닫기</Button></Toast.Close>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
};
// 11. Toggle
const RadixToggleDemo = () => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Toggle.Root pressed={pressed} onPressedChange={setPressed} style={{ background: pressed ? '#1976d2' : '#eee', color: pressed ? '#fff' : '#1976d2', border: '1px solid #1976d2', borderRadius: 4, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}>
      {pressed ? 'ON' : 'OFF'}
    </Toggle.Root>
  );
};
// 12. ToggleGroup
const RadixToggleGroupDemo = () => {
  const [value, setValue] = React.useState(['bold']);
  return (
    <ToggleGroup.Root type="multiple" value={value} onValueChange={setValue} style={{ display: 'flex', gap: 8 }}>
      <ToggleGroup.Item value="bold" style={{ background: value.includes('bold') ? '#1976d2' : '#eee', color: value.includes('bold') ? '#fff' : '#1976d2', border: '1px solid #1976d2', borderRadius: 4, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}>Bold</ToggleGroup.Item>
      <ToggleGroup.Item value="italic" style={{ background: value.includes('italic') ? '#1976d2' : '#eee', color: value.includes('italic') ? '#fff' : '#1976d2', border: '1px solid #1976d2', borderRadius: 4, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}>Italic</ToggleGroup.Item>
      <ToggleGroup.Item value="underline" style={{ background: value.includes('underline') ? '#1976d2' : '#eee', color: value.includes('underline') ? '#fff' : '#1976d2', border: '1px solid #1976d2', borderRadius: 4, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}>Underline</ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
// 13. ScrollArea
const RadixScrollAreaDemo = () => (
  <ScrollArea.Root style={{ width: 240, height: 120, border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
    <ScrollArea.Viewport style={{ width: '100%', height: '100%' }}>
      <div style={{ padding: 16 }}>
        {[...Array(20)].map((_, i) => <div key={i}>항목 {i + 1}</div>)}
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical" style={{ width: 8, background: '#f5f5f5', borderRadius: 4 }}>
      <ScrollArea.Thumb style={{ background: '#1976d2', borderRadius: 4 }} />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
);
// 14. Collapsible
const RadixCollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger asChild>
        <Button variant="contained">{open ? '닫기' : '열기'}</Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ marginTop: 16, background: '#f5f5f5', padding: 16, borderRadius: 8 }}>Radix Collapsible 내용</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
// 15. Select
const RadixSelectDemo = () => (
  <Select.Root defaultValue="apple">
    <Select.Trigger style={{ padding: '8px 16px', border: '1px solid #1976d2', borderRadius: 4, background: '#fff', color: '#1976d2', fontWeight: 'bold', cursor: 'pointer' }}>
      <Select.Value />
    </Select.Trigger>
    <Select.Portal>
      <Select.Content style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, minWidth: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 8 }}>
        <Select.Item value="apple" style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>사과</Select.Item>
        <Select.Item value="banana" style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>바나나</Select.Item>
        <Select.Item value="orange" style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>오렌지</Select.Item>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
// 16. ContextMenu
const RadixContextMenuDemo = () => (
  <ContextMenu.Root>
    <ContextMenu.Trigger asChild>
      <Button variant="contained">우클릭 메뉴</Button>
    </ContextMenu.Trigger>
    <ContextMenu.Portal>
      <ContextMenu.Content style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, minWidth: 160, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 8 }}>
        <ContextMenu.Item style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>복사</ContextMenu.Item>
        <ContextMenu.Item style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>붙여넣기</ContextMenu.Item>
        <ContextMenu.Item style={{ padding: '8px 16px', borderRadius: 4, cursor: 'pointer' }}>삭제</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  </ContextMenu.Root>
);
// 17. Label & Avatar
const RadixLabelAvatarDemo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <Label.Root htmlFor="avatar-demo">아바타</Label.Root>
    <Avatar.Root>
      <Avatar.Image src="https://i.pravatar.cc/48?img=3" alt="avatar" style={{ width: 48, height: 48, borderRadius: '50%' }} />
      <Avatar.Fallback delayMs={600}>AB</Avatar.Fallback>
    </Avatar.Root>
  </div>
);
// 18. Progress
const RadixProgressDemo = () => {
  const [value, setValue] = React.useState(40);
  return (
    <div>
      <Button variant="contained" onClick={() => setValue(v => (v >= 100 ? 0 : v + 20))}>증가</Button>
      <Progress.Root value={value} style={{ width: 200, height: 12, background: '#eee', borderRadius: 6, overflow: 'hidden', marginTop: 8 }}>
        <Progress.Indicator style={{ width: `${value}%`, height: '100%', background: '#1976d2', transition: 'width 0.3s' }} />
      </Progress.Root>
    </div>
  );
};

export const RadixUIExample: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Radix UI 실전 예제</Typography>
      <div style={stateExampleBlockStyle}>
        <Typography variant="body1" gutterBottom>
          <b>Radix UI</b>는 접근성, UX, 커스터마이즈에 강한 React UI 프리미티브 라이브러리입니다.<br />
          <ul style={{ margin: '1em 0 0 1.2em', fontSize: 15 }}>
            <li>접근성(A11y) 기본 내장, 디자인 시스템/커스텀 UI에 최적</li>
            <li>실무에서 널리 사용, Headless 방식(스타일 자유)</li>
            <li>단점: 스타일 직접 구현 필요, 러닝커브</li>
            <li>추천: 디자인 시스템, 커스텀 UI, 접근성 필수 프로젝트</li>
          </ul>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. Switch (스위치)</Typography>
        <ExampleTab example={<RadixSwitchDemo />} code={`// Radix Switch 예제`} desc={`Radix UI의 Switch 컴포넌트입니다.\n- 실전: 설정 ON/OFF\n- Tip: 접근성, 키보드 지원\n- Best Practice: 스타일 커스텀`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. Checkbox (체크박스)</Typography>
        <ExampleTab example={<RadixCheckboxDemo />} code={`// Radix Checkbox 예제`} desc={`Radix UI의 Checkbox 컴포넌트입니다.\n- 실전: 동의, 선택 등\n- Tip: 키보드/마우스 모두 지원\n- Best Practice: 커스텀 체크박스`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. RadioGroup (라디오)</Typography>
        <ExampleTab example={<RadixRadioDemo />} code={`// Radix RadioGroup 예제`} desc={`Radix UI의 RadioGroup 컴포넌트입니다.\n- 실전: 옵션 선택\n- Tip: 그룹화, 접근성\n- Best Practice: 커스텀 라디오`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. Slider (슬라이더)</Typography>
        <ExampleTab example={<RadixSliderDemo />} code={`// Radix Slider 예제`} desc={`Radix UI의 Slider 컴포넌트입니다.\n- 실전: 값 조절, 볼륨 등\n- Tip: 키보드/마우스 드래그\n- Best Practice: 스타일 커스텀`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. Tooltip (툴팁)</Typography>
        <ExampleTab example={<RadixTooltipDemo />} code={`// Radix Tooltip 예제`} desc={`Radix UI의 Tooltip 컴포넌트입니다.\n- 실전: 설명, 안내\n- Tip: 포커스/마우스 모두 지원\n- Best Practice: 커스텀 스타일`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. Dialog (다이얼로그)</Typography>
        <ExampleTab example={<RadixDialogDemo />} code={`// Radix Dialog 예제`} desc={`Radix UI의 Dialog 컴포넌트입니다.\n- 실전: 모달, 알림\n- Tip: 포커스 트랩, 접근성\n- Best Practice: 커스텀 모달`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>7. DropdownMenu (드롭다운)</Typography>
        <ExampleTab example={<RadixDropdownMenuDemo />} code={`// Radix DropdownMenu 예제`} desc={`Radix UI의 DropdownMenu 컴포넌트입니다.\n- 실전: 옵션, 메뉴\n- Tip: 키보드 내비게이션\n- Best Practice: 커스텀 메뉴`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>8. Popover (팝오버)</Typography>
        <ExampleTab example={<RadixPopoverDemo />} code={`// Radix Popover 예제`} desc={`Radix UI의 Popover 컴포넌트입니다.\n- 실전: 상세 정보, 툴팁\n- Tip: 포커스 관리\n- Best Practice: 커스텀 팝오버`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>9. Tabs (탭)</Typography>
        <ExampleTab example={<RadixTabsDemo />} code={`// Radix Tabs 예제`} desc={`Radix UI의 Tabs 컴포넌트입니다.\n- 실전: 뷰 전환, 설정\n- Tip: 키보드 내비게이션\n- Best Practice: 커스텀 탭`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>10. Toast (토스트)</Typography>
        <ExampleTab example={<RadixToastDemo />} code={`// Radix Toast 예제`} desc={`Radix UI의 Toast 컴포넌트입니다.\n- 실전: 알림, 피드백\n- Tip: 자동 닫힘, 위치 지정\n- Best Practice: 커스텀 토스트`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>11. Toggle (토글)</Typography>
        <ExampleTab example={<RadixToggleDemo />} code={`// Radix Toggle 예제`} desc={`Radix UI의 Toggle 컴포넌트입니다.\n- 실전: ON/OFF 버튼\n- Tip: 상태 표시\n- Best Practice: 커스텀 토글`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>12. ToggleGroup (토글그룹)</Typography>
        <ExampleTab example={<RadixToggleGroupDemo />} code={`// Radix ToggleGroup 예제`} desc={`Radix UI의 ToggleGroup 컴포넌트입니다.\n- 실전: 다중 선택\n- Tip: 그룹화, 상태 관리\n- Best Practice: 커스텀 토글그룹`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>13. ScrollArea (스크롤영역)</Typography>
        <ExampleTab example={<RadixScrollAreaDemo />} code={`// Radix ScrollArea 예제`} desc={`Radix UI의 ScrollArea 컴포넌트입니다.\n- 실전: 긴 목록, 스크롤\n- Tip: 커스텀 스크롤바\n- Best Practice: 반응형 레이아웃`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>14. Collapsible (콜랩스)</Typography>
        <ExampleTab example={<RadixCollapsibleDemo />} code={`// Radix Collapsible 예제`} desc={`Radix UI의 Collapsible 컴포넌트입니다.\n- 실전: 아코디언, 상세정보\n- Tip: 상태 관리\n- Best Practice: 커스텀 콜랩스`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>15. Select (셀렉트)</Typography>
        <ExampleTab example={<RadixSelectDemo />} code={`// Radix Select 예제`} desc={`Radix UI의 Select 컴포넌트입니다.\n- 실전: 옵션 선택\n- Tip: 키보드 내비게이션\n- Best Practice: 커스텀 셀렉트`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>16. ContextMenu (컨텍스트메뉴)</Typography>
        <ExampleTab example={<RadixContextMenuDemo />} code={`// Radix ContextMenu 예제`} desc={`Radix UI의 ContextMenu 컴포넌트입니다.\n- 실전: 우클릭 메뉴\n- Tip: 키보드/마우스 모두 지원\n- Best Practice: 커스텀 컨텍스트메뉴`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>17. Label & Avatar (라벨 & 아바타)</Typography>
        <ExampleTab example={<RadixLabelAvatarDemo />} code={`// Radix Label & Avatar 예제`} desc={`Radix UI의 Label, Avatar 컴포넌트입니다.\n- 실전: 프로필, 사용자 정보\n- Tip: 이미지 fallback\n- Best Practice: 커스텀 아바타`} />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>18. Progress (프로그레스)</Typography>
        <ExampleTab example={<RadixProgressDemo />} code={`// Radix Progress 예제`} desc={`Radix UI의 Progress 컴포넌트입니다.\n- 실전: 진행률 표시\n- Tip: 애니메이션, 상태 표시\n- Best Practice: 커스텀 프로그레스`} />
      </div>
    </div>
  );
};

export default RadixUIExample; 