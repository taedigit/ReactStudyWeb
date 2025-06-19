import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Button, Box } from '@mui/material';
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

const pageTransitionCode = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Box } from '@mui/material';

const pageVariants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

function PageA() {
  return <Box sx={{ p: 4, background: '#b5e853', borderRadius: 3, color: '#232323', fontWeight: 700, fontSize: 22 }}>Page A</Box>;
}
function PageB() {
  return <Box sx={{ p: 4, background: '#53b5e8', borderRadius: 3, color: '#fff', fontWeight: 700, fontSize: 22 }}>Page B</Box>;
}
function PageC() {
  return <Box sx={{ p: 4, background: '#e853b5', borderRadius: 3, color: '#fff', fontWeight: 700, fontSize: 22 }}>Page C</Box>;
}

export default function PageTransitionExample() {
  const [page, setPage] = useState('A');
  return (
    <div>
      <Button variant={page==='A'?'contained':'outlined'} onClick={()=>setPage('A')} sx={{mr:1}}>Page A</Button>
      <Button variant={page==='B'?'contained':'outlined'} onClick={()=>setPage('B')} sx={{mr:1}}>Page B</Button>
      <Button variant={page==='C'?'contained':'outlined'} onClick={()=>setPage('C')}>Page C</Button>
      <div style={{ minHeight: 120, marginTop: 32 }}>
        <AnimatePresence mode="wait">
          {page === 'A' && (
            <motion.div key="A" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <PageA />
            </motion.div>
          )}
          {page === 'B' && (
            <motion.div key="B" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <PageB />
            </motion.div>
          )}
          {page === 'C' && (
            <motion.div key="C" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <PageC />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}`;

const pageTransitionDesc = `페이지(뷰) 전환 시 슬라이드/페이드 애니메이션을 적용하는 예제입니다.\n\n- Framer Motion의 AnimatePresence, motion을 활용해 페이지가 바뀔 때 자연스럽게 전환됩니다.\n- 실제 라우터(react-router-dom 등)와 연동하면 라우트 전환 애니메이션도 쉽게 구현할 수 있습니다.`;

const pageVariants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

function PageA() {
  return <Box sx={{ p: 4, background: '#b5e853', borderRadius: 3, color: '#232323', fontWeight: 700, fontSize: 22 }}>Page A</Box>;
}
function PageB() {
  return <Box sx={{ p: 4, background: '#53b5e8', borderRadius: 3, color: '#fff', fontWeight: 700, fontSize: 22 }}>Page B</Box>;
}
function PageC() {
  return <Box sx={{ p: 4, background: '#e853b5', borderRadius: 3, color: '#fff', fontWeight: 700, fontSize: 22 }}>Page C</Box>;
}

const PageTransitionExample: React.FC = () => {
  const [page, setPage] = useState<'A'|'B'|'C'>('A');
  const example = (
    <div>
      <Button variant={page==='A'?'contained':'outlined'} onClick={()=>setPage('A')} sx={{mr:1}}>Page A</Button>
      <Button variant={page==='B'?'contained':'outlined'} onClick={()=>setPage('B')} sx={{mr:1}}>Page B</Button>
      <Button variant={page==='C'?'contained':'outlined'} onClick={()=>setPage('C')}>Page C</Button>
      <div style={{ minHeight: 120, marginTop: 32 }}>
        <AnimatePresence mode="wait">
          {page === 'A' && (
            <motion.div key="A" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <PageA />
            </motion.div>
          )}
          {page === 'B' && (
            <motion.div key="B" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <PageB />
            </motion.div>
          )}
          {page === 'C' && (
            <motion.div key="C" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
              <PageC />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>페이지 전환 애니메이션</Typography>
      <ExampleTab
        example={example}
        code={pageTransitionCode}
        desc={pageTransitionDesc}
      />
    </div>
  );
};

export default PageTransitionExample; 