import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Typography, Button, Box, Modal } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

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

const focusTrapCode = `import React, { useRef, useEffect, useCallback, useState } from 'react';
import { Button, Box, Modal, Typography } from '@mui/material';

function FocusTrapModal({ open, onClose }) {
  const firstRef = useRef();
  const lastRef = useRef();

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstRef.current) {
          e.preventDefault();
          lastRef.current.focus();
        }
      } else {
        if (document.activeElement === lastRef.current) {
          e.preventDefault();
          firstRef.current.focus();
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (open) {
      firstRef.current && firstRef.current.focus();
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="focus-trap-modal" >
      <Box sx={{
        p: 3,
        background: '#23272f',
        color: '#eaeaea',
        borderRadius: 3,
        minWidth: 280,
        maxWidth: 340,
        mx: 'auto',
        mt: '18vh',
        outline: 'none',
        boxShadow: '0 8px 32px 0 rgba(40,60,120,0.18)',
        border: '1.5px solid #3b4252',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
        tabIndex={-1} onKeyDown={handleKeyDown}>
        <Typography variant="h6" sx={{ mb: 1, color: '#b5e853', fontWeight: 700 }}>Focus Trap Modal</Typography>
        <Button ref={firstRef} variant="contained" sx={{ mb: 1, minWidth: 120, borderRadius: 2, fontWeight: 600 }}>첫 번째 버튼</Button>
        <Button variant="contained" sx={{ mb: 1, minWidth: 120, borderRadius: 2, background: '#484f54', color: '#b5e853', fontWeight: 600, '&:hover': { background: '#23272f' } }}>중간 버튼</Button>
        <Button ref={lastRef} variant="contained" color="secondary" onClick={onClose} sx={{ minWidth: 120, borderRadius: 2, fontWeight: 600 }}>닫기</Button>
        <Typography sx={{ mt: 2, color: '#b5e853', fontSize: 14, textAlign: 'center' }}>
          Tab/Shift+Tab으로 포커스가<br/>모달 내부에서만 순환합니다.<br/>ESC로 닫기 가능
        </Typography>
      </Box>
    </Modal>
  );
}

export default function KeyboardFocusTrapExample() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>포커스 트랩 모달 열기</Button>
      <FocusTrapModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}`;

const focusTrapDesc = `키보드 포커스 트랩(모달 내 Tab 이동 제한) 예제입니다.\n\n- Tab/Shift+Tab으로 포커스가 모달 내부 버튼에서만 순환합니다.\n- ESC 키로 모달을 닫을 수 있습니다.\n- 접근성(ARIA), 키보드 내비게이션, 실전 모달 UX에 필수 패턴입니다.`;

function FocusTrapModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const firstRef = useRef<HTMLButtonElement>(null);
  const lastRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstRef.current) {
          e.preventDefault();
          lastRef.current?.focus();
        }
      } else {
        if (document.activeElement === lastRef.current) {
          e.preventDefault();
          firstRef.current?.focus();
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (open) {
      firstRef.current && firstRef.current.focus();
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="focus-trap-modal" >
      <Box sx={{
        p: 3,
        background: '#23272f',
        color: '#eaeaea',
        borderRadius: 3,
        minWidth: 280,
        maxWidth: 340,
        mx: 'auto',
        mt: '18vh',
        outline: 'none',
        boxShadow: '0 8px 32px 0 rgba(40,60,120,0.18)',
        border: '1.5px solid #3b4252',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
        tabIndex={-1} onKeyDown={handleKeyDown}>
        <Typography variant="h6" sx={{ mb: 1, color: '#b5e853', fontWeight: 700 }}>Focus Trap Modal</Typography>
        <Button ref={firstRef} variant="contained" sx={{ mb: 1, minWidth: 120, borderRadius: 2, fontWeight: 600 }}>첫 번째 버튼</Button>
        <Button variant="contained" sx={{ mb: 1, minWidth: 120, borderRadius: 2, background: '#484f54', color: '#b5e853', fontWeight: 600, '&:hover': { background: '#23272f' } }}>중간 버튼</Button>
        <Button ref={lastRef} variant="contained" color="secondary" onClick={onClose} sx={{ minWidth: 120, borderRadius: 2, fontWeight: 600 }}>닫기</Button>
        <Typography sx={{ mt: 2, color: '#b5e853', fontSize: 14, textAlign: 'center' }}>
          Tab/Shift+Tab으로 포커스가<br/>모달 내부에서만 순환합니다.<br/>ESC로 닫기 가능
        </Typography>
      </Box>
    </Modal>
  );
}

const KeyboardFocusTrapExample: React.FC = () => {
  const [open, setOpen] = useState(false);
  const example = (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>포커스 트랩 모달 열기</Button>
      <FocusTrapModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>키보드 포커스 트랩 (모달 내 Tab 이동 제한)</Typography>
      <ExampleTab
        example={example}
        code={focusTrapCode}
        desc={focusTrapDesc}
      />
    </div>
  );
};

export default KeyboardFocusTrapExample; 