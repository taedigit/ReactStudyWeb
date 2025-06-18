import { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Typography, Button } from '@mui/material';
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

// 1. 기본 애니메이션
function BasicMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ width: 120, height: 60, background: '#b5e853', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}
    >
      Hello Motion
    </motion.div>
  );
}

// 2. 드래그
function DragMotion() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 200, top: 0, bottom: 80 }}
      whileDrag={{ scale: 1.1, background: '#eaeaea' }}
      style={{ width: 120, height: 60, background: '#53b5e8', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, cursor: 'grab' }}
    >
      Drag me
    </motion.div>
  );
}

// 3. 레이아웃 전환
function LayoutMotion() {
  const [big, setBig] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
      <Button variant="contained" onClick={() => setBig(b => !b)} sx={{ mb: 1 }}>
        크기 전환
      </Button>
      <motion.div
        layout
        style={{ width: big ? 220 : 120, height: 60, background: '#e853b5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, transition: 'width 0.3s' }}
      >
        Layout
      </motion.div>
    </div>
  );
}

// 4. 제스처(hover/tap)
function GestureMotion() {
  return (
    <motion.button
      whileHover={{ scale: 1.1, background: '#b5e853', color: '#232323' }}
      whileTap={{ scale: 0.95, background: '#232323', color: '#b5e853' }}
      style={{ width: 120, height: 48, background: '#232323', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}
    >
      Hover/Tap
    </motion.button>
  );
}

// 5. AnimatePresence (입장/퇴장)
function PresenceMotion() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Button variant="contained" onClick={() => setShow(s => !s)} sx={{ mb: 1 }}>
        {show ? '숨기기' : '보이기'}
      </Button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            style={{ width: 120, height: 60, background: '#e8b553', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}
          >
            Bye!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 6. Variants(상태별 애니메이션)
const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.1, background: '#b5e853', color: '#232323' },
};
function VariantsMotion() {
  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ width: 120, height: 60, background: '#232323', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, cursor: 'pointer' }}
    >
      Variants
    </motion.div>
  );
}

// 7. Keyframes(연속 애니메이션)
function KeyframesMotion() {
  return (
    <motion.div
      animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 0.8, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      style={{ width: 120, height: 60, background: '#e85353', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}
    >
      Keyframes
    </motion.div>
  );
}

// 8. SVG Path 애니메이션
function SvgMotion() {
  return (
    <motion.svg width="120" height="60" viewBox="0 0 120 60">
      <motion.circle
        cx="60"
        cy="30"
        r="20"
        stroke="#53e8b5"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
    </motion.svg>
  );
}

// 9. useAnimation(프로그래밍 방식 제어)
function UseAnimationMotion() {
  const controls = useAnimation();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button variant="contained" onClick={() => controls.start({ x: 200, opacity: 1 })}>오른쪽 이동</Button>
      <Button variant="outlined" onClick={() => controls.start({ x: 0, opacity: 1 })}>원위치</Button>
      <motion.div
        animate={controls}
        initial={{ x: 0, opacity: 0.5 }}
        style={{ width: 120, height: 60, background: '#53e8b5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}
      >
        useAnimation
      </motion.div>
    </div>
  );
}

// 10. 물리 기반(Spring, Bounce 등) 애니메이션
function PhysicsMotion() {
  const [flip, setFlip] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button variant="contained" onClick={() => setFlip(f => !f)}>
        {flip ? '원위치' : '이동'}
      </Button>
      <motion.div
        animate={{ x: flip ? 180 : 0, rotate: flip ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        style={{ width: 120, height: 60, background: '#e8b553', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}
      >
        Spring
      </motion.div>
      <motion.div
        animate={{ y: flip ? -60 : 0 }}
        transition={{ type: 'spring', bounce: 0.6, duration: 0.8 }}
        style={{ width: 120, height: 60, background: '#53b5e8', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}
      >
        Bounce
      </motion.div>
    </div>
  );
}

const FramerMotionExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 애니메이션</Typography>
      <ExampleTab
        example={<BasicMotion />}
        code={`function BasicMotion() {\n  return (\n    <motion.div\n      initial={{ opacity: 0, y: 40 }}\n      animate={{ opacity: 1, y: 0 }}\n      transition={{ duration: 0.7 }}\n      style={{ width: 120, height: 60, background: '#b5e853', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}\n    >\n      Hello Motion\n    </motion.div>\n  );\n}`}
        desc={`Framer Motion의 가장 기본적인 애니메이션 사용법입니다.\n- initial/animate/transition props로 진입 애니메이션을 구현합니다.\n- CSS-in-JS 스타일로 배경, 색상, 정렬 등도 함께 지정.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 드래그</Typography>
      <ExampleTab
        example={<DragMotion />}
        code={`function DragMotion() {\n  return (\n    <motion.div\n      drag\n      dragConstraints={{ left: 0, right: 200, top: 0, bottom: 80 }}\n      whileDrag={{ scale: 1.1, background: '#eaeaea' }}\n      style={{ width: 120, height: 60, background: '#53b5e8', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, cursor: 'grab' }}\n    >\n      Drag me\n    </motion.div>\n  );\n}`}
        desc={`드래그 가능한 motion.div 예제입니다.\n- drag, dragConstraints로 이동 범위 제한\n- whileDrag로 드래그 중 스타일 변화`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 레이아웃 전환</Typography>
      <ExampleTab
        example={<LayoutMotion />}
        code={`function LayoutMotion() {\n  const [big, setBig] = useState(false);\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>\n      <Button variant=\"contained\" onClick={() => setBig(b => !b)} sx={{ mb: 1 }}>\n        크기 전환\n      </Button>\n      <motion.div\n        layout\n        style={{ width: big ? 220 : 120, height: 60, background: '#e853b5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, transition: 'width 0.3s' }}\n      >\n        Layout\n      </motion.div>\n    </div>\n  );\n}`}
        desc={`layout prop을 활용한 크기/위치 전환 애니메이션 예제입니다.\n- layout prop을 사용하면 크기/위치 변화가 자연스럽게 애니메이션 처리됨`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 제스처(Hover/Tap)</Typography>
      <ExampleTab
        example={<GestureMotion />}
        code={`function GestureMotion() {\n  return (\n    <motion.button\n      whileHover={{ scale: 1.1, background: '#b5e853', color: '#232323' }}\n      whileTap={{ scale: 0.95, background: '#232323', color: '#b5e853' }}\n      style={{ width: 120, height: 48, background: '#232323', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}\n    >\n      Hover/Tap\n    </motion.button>\n  );\n}`}
        desc={`whileHover, whileTap을 활용한 제스처 애니메이션 예제입니다.\n- 마우스 오버/클릭 시 스타일과 크기 변화\n- 버튼 등 인터랙티브 UI에 자주 사용`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. AnimatePresence (입장/퇴장)</Typography>
      <ExampleTab
        example={<PresenceMotion />}
        code={`function PresenceMotion() {\n  const [show, setShow] = useState(true);\n  return (\n    <div>\n      <Button variant=\"contained\" onClick={() => setShow(s => !s)} sx={{ mb: 1 }}>\n        {show ? '숨기기' : '보이기'}\n      </Button>\n      <AnimatePresence>\n        {show && (\n          <motion.div\n            initial={{ opacity: 0, y: 40 }}\n            animate={{ opacity: 1, y: 0 }}\n            exit={{ opacity: 0, y: -40 }}\n            transition={{ duration: 0.5 }}\n            style={{ width: 120, height: 60, background: '#e8b553', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}\n          >\n            Bye!\n          </motion.div>\n        )}\n      </AnimatePresence>\n    </div>\n  );\n}`}
        desc={`AnimatePresence로 컴포넌트 입장/퇴장 애니메이션을 구현한 예제입니다.\n- 조건부 렌더링과 함께 사용\n- exit prop으로 퇴장 애니메이션 지정`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>6. Variants(상태별 애니메이션)</Typography>
      <ExampleTab
        example={<VariantsMotion />}
        code={`const boxVariants = {\n  hidden: { opacity: 0, x: -100 },\n  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },\n  hover: { scale: 1.1, background: '#b5e853', color: '#232323' },\n};\nfunction VariantsMotion() {\n  return (\n    <motion.div\n      variants={boxVariants}\n      initial=\"hidden\"\n      animate=\"visible\"\n      whileHover=\"hover\"\n      style={{ width: 120, height: 60, background: '#232323', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, cursor: 'pointer' }}\n    >\n      Variants\n    </motion.div>\n  );\n}`}
        desc={`variants 객체로 여러 상태별 애니메이션을 선언적으로 관리할 수 있습니다.\n- initial/animate/whileHover에 상태명 문자열을 지정\n- 복잡한 상태 전환을 깔끔하게 구현`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>7. Keyframes(연속 애니메이션)</Typography>
      <ExampleTab
        example={<KeyframesMotion />}
        code={`function KeyframesMotion() {\n  return (\n    <motion.div\n      animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 0.8, 1] }}\n      transition={{ duration: 1.2, repeat: Infinity }}\n      style={{ width: 120, height: 60, background: '#e85353', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}\n    >\n      Keyframes\n    </motion.div>\n  );\n}`}
        desc={`배열 형태의 값으로 keyframes 애니메이션을 구현할 수 있습니다.\n- rotate, scale 등 여러 속성을 동시에 애니메이션\n- transition의 repeat로 무한 반복`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>8. SVG Path 애니메이션</Typography>
      <ExampleTab
        example={<SvgMotion />}
        code={`function SvgMotion() {\n  return (\n    <motion.svg width=\"120\" height=\"60\" viewBox=\"0 0 120 60\">\n      <motion.circle\n        cx=\"60\"\n        cy=\"30\"\n        r=\"20\"\n        stroke=\"#53e8b5\"\n        strokeWidth=\"4\"\n        fill=\"none\"\n        initial={{ pathLength: 0 }}\n        animate={{ pathLength: 1 }}\n        transition={{ duration: 1.2 }}\n      />\n    </motion.svg>\n  );\n}`}
        desc={`SVG 요소에도 motion.*를 적용해 pathLength 등 SVG 속성 애니메이션이 가능합니다.\n- 로딩, 진행률, 아이콘 등 다양한 SVG 애니메이션에 활용`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>9. useAnimation(프로그래밍 방식 제어)</Typography>
      <ExampleTab
        example={<UseAnimationMotion />}
        code={`function UseAnimationMotion() {\n  const controls = useAnimation();\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>\n      <Button variant=\"contained\" onClick={() => controls.start({ x: 200, opacity: 1 })}>오른쪽 이동</Button>\n      <Button variant=\"outlined\" onClick={() => controls.start({ x: 0, opacity: 1 })}>원위치</Button>\n      <motion.div\n        animate={controls}\n        initial={{ x: 0, opacity: 0.5 }}\n        style={{ width: 120, height: 60, background: '#53e8b5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}\n      >\n        useAnimation\n      </motion.div>\n    </div>\n  );\n}`}
        desc={`useAnimation 훅을 사용하면 버튼 클릭 등 이벤트로 애니메이션을 직접 제어할 수 있습니다.\n- 복잡한 시나리오, 순차 애니메이션, 사용자 상호작용에 유용`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>10. 물리 기반(Spring, Bounce 등) 애니메이션</Typography>
      <ExampleTab
        example={<PhysicsMotion />}
        code={`function PhysicsMotion() {\n  const [flip, setFlip] = useState(false);\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>\n      <Button variant=\"contained\" onClick={() => setFlip(f => !f)}>\n        {flip ? '원위치' : '이동'}\n      </Button>\n      <motion.div\n        animate={{ x: flip ? 180 : 0, rotate: flip ? 180 : 0 }}\n        transition={{ type: 'spring', stiffness: 200, damping: 12 }}\n        style={{ width: 120, height: 60, background: '#e8b553', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#232323', fontWeight: 700 }}\n      >\n        Spring\n      </motion.div>\n      <motion.div\n        animate={{ y: flip ? -60 : 0 }}\n        transition={{ type: 'spring', bounce: 0.6, duration: 0.8 }}\n        style={{ width: 120, height: 60, background: '#53b5e8', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}\n      >\n        Bounce\n      </motion.div>\n    </div>\n  );\n}`}
        desc={`Framer Motion은 자연스러운 물리 기반(Spring, Bounce 등) 애니메이션을 지원합니다.\n- transition의 type: 'spring'으로 스프링 효과, stiffness/damping으로 강도/감쇠 조절\n- bounce 옵션으로 튕김 효과도 구현 가능\n- 실전 UI에서 드래그, 토글, 이동 등 다양한 곳에 활용`}
      />
    </div>
  </div>
);

export default FramerMotionExample; 