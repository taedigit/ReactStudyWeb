import React, { useMemo, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Box, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { FixedSizeList as List } from 'react-window';
import type { ListChildComponentProps } from 'react-window';
import { ExampleTab } from '../../components/ExampleTab';
import { MacCmd } from '../../components/MacCmd';

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

const tableAdvancedCode =
  "import React, { useMemo, useState } from 'react';\n" +
  "import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox, TableContainer, Paper, Button, Box, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';\n" +
  "import { FixedSizeList as List } from 'react-window';\n" +
  "\n" +
  "function createData(idx) {\n" +
  "  return {\n" +
  "    id: idx,\n" +
  "    name: `User ${idx}`,\n" +
  "    age: 20 + (idx % 50),\n" +
  "    score: Math.round(Math.random() * 100),\n" +
  "    active: idx % 2 === 0\n" +
  "  };\n" +
  "}\n" +
  "const rows = Array.from({ length: 10000 }, (_, i) => createData(i));\n" +
  "\n" +
  "const VirtualizedTableAdvanced = () => {\n" +
  "  const [selected, setSelected] = useState([]);\n" +
  "  const [filter, setFilter] = useState('');\n" +
  "  const [detail, setDetail] = useState(null);\n" +
  "  const filtered = useMemo(() => rows.filter(r => r.name.includes(filter)), [filter]);\n" +
  "  const toggleSelect = id => setSelected(sel => sel.includes(id) ? sel.filter(i => i!==id) : [...sel, id]);\n" +
  "  const Row = ({ index, style }) => {\n" +
  "    const row = filtered[index];\n" +
  "    return (\n" +
  "      <TableRow hover style={style} key={row.id} onClick={() => setDetail(row)} selected={selected.includes(row.id)}>\n" +
  "        <TableCell padding=\"checkbox\"><Checkbox checked={selected.includes(row.id)} onClick={e => {e.stopPropagation();toggleSelect(row.id);}} /></TableCell>\n" +
  "        <TableCell>{row.name}</TableCell>\n" +
  "        <TableCell>{row.age}</TableCell>\n" +
  "        <TableCell style={{color: row.score > 80 ? '#b5e853' : row.score < 40 ? '#e85353' : undefined}}>{row.score}</TableCell>\n" +
  "        <TableCell>{row.active ? '활성' : '비활성'}</TableCell>\n" +
  "      </TableRow>\n" +
  "    );\n" +
  "  };\n" +
  "  return (\n" +
  "    <Box>\n" +
  "      <TextField label=\"이름 필터\" value={filter} onChange={e => setFilter(e.target.value)} size=\"small\" sx={{ mb: 2 }} />\n" +
  "      <TableContainer component={Paper} style={{height: 400}}>\n" +
  "        <Table stickyHeader size=\"small\">\n" +
  "          <TableHead>\n" +
  "            <TableRow>\n" +
  "              <TableCell padding=\"checkbox\"></TableCell>\n" +
  "              <TableCell>이름</TableCell>\n" +
  "              <TableCell>나이</TableCell>\n" +
  "              <TableCell>점수</TableCell>\n" +
  "              <TableCell>상태</TableCell>\n" +
  "            </TableRow>\n" +
  "          </TableHead>\n" +
  "          <List height={340} itemCount={filtered.length} itemSize={38} width={700} outerElementType={TableBody}>\n" +
  "            {Row as any} \n" +
  "          </List>\n" +
  "        </Table>\n" +
  "      </TableContainer>\n" +
  "      <Dialog open={!!detail} onClose={() => setDetail(null)}>\n" +
  "        <DialogTitle>상세 정보</DialogTitle>\n" +
  "        <DialogContent>\n" +
  "          {detail && (<div>\n" +
  "            <div>이름: {detail.name}</div>\n" +
  "            <div>나이: {detail.age}</div>\n" +
  "            <div>점수: {detail.score}</div>\n" +
  "            <div>상태: {detail.active ? '활성' : '비활성'}</div>\n" +
  "          </div>)}\n" +
  "        </DialogContent>\n" +
  "      </Dialog>\n" +
  "    </Box>\n" +
  "  );\n" +
  "};\n" +
  "export default VirtualizedTableAdvanced;";

const tableAdvancedDesc =
  'react-window + MUI Table로 대용량(1만건) 가상화, 필터, 선택, 행 클릭 상세, 조건부 스타일 등 복합 예제입니다.\n- 이름 필터, 점수 색상, 행 선택, 상세 다이얼로그 등 실전 기능을 포함합니다.\n- 실제 서비스에서는 서버 페이징, 드래그&드롭, 다중 정렬 등과 결합해 확장할 수 있습니다.';

function createData(idx: number) {
  return {
    id: idx,
    name: `User ${idx}`,
    age: 20 + (idx % 50),
    score: Math.round(Math.random() * 100),
    active: idx % 2 === 0
  };
}
const rows = Array.from({ length: 10000 }, (_, i) => createData(i));

const VirtualizedTableAdvancedExample: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [filter, setFilter] = useState('');
  const [detail, setDetail] = useState<any>(null);
  const filtered = useMemo(() => rows.filter(r => r.name.includes(filter)), [filter]);
  const toggleSelect = (id: number) => setSelected(sel => sel.includes(id) ? sel.filter(i => i!==id) : [...sel, id]);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const row = filtered[index];
    return (
      <TableRow hover style={style} key={row.id} onClick={() => setDetail(row)} selected={selected.includes(row.id)}>
        <TableCell padding="checkbox"><Checkbox checked={selected.includes(row.id)} onClick={e => {e.stopPropagation();toggleSelect(row.id);}} /></TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.age}</TableCell>
        <TableCell style={{color: row.score > 80 ? '#b5e853' : row.score < 40 ? '#e85353' : undefined}}>{row.score}</TableCell>
        <TableCell>{row.active ? '활성' : '비활성'}</TableCell>
      </TableRow>
    );
  };

  const example = (
    <Box>
      <TextField label="이름 필터" value={filter} onChange={e => setFilter(e.target.value)} size="small" sx={{ mb: 2 }} />
      <TableContainer component={Paper} style={{height: 400}}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell>이름</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>점수</TableCell>
              <TableCell>상태</TableCell>
            </TableRow>
          </TableHead>
          <List height={340} itemCount={filtered.length} itemSize={38} width={700} outerElementType={TableBody}>
            {Row as any}
          </List>
        </Table>
      </TableContainer>
      <Dialog open={!!detail} onClose={() => setDetail(null)}>
        <DialogTitle>상세 정보</DialogTitle>
        <DialogContent>
          {detail && (<div>
            <div>이름: {detail.name}</div>
            <div>나이: {detail.age}</div>
            <div>점수: {detail.score}</div>
            <div>상태: {detail.active ? '활성' : '비활성'}</div>
          </div>)}
        </DialogContent>
      </Dialog>
    </Box>
  );

  return (
    <>
      <MacCmd>npm install react-window</MacCmd>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>대용량/가상화 테이블 심화 예제</Typography>
        <ExampleTab
          example={example}
          code={tableAdvancedCode}
          desc={tableAdvancedDesc}
        />
      </div>
    </>
  );
};

export default VirtualizedTableAdvancedExample; 