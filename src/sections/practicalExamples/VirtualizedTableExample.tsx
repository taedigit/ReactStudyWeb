import React from 'react';
import { FixedSizeList as List } from 'react-window';
import type { ListChildComponentProps } from 'react-window';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@mui/material';
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

// 1만건 더미 데이터 생성
const rowCount = 10000;
const columns = [
  { label: 'ID', dataKey: 'id', width: 80 },
  { label: 'Name', dataKey: 'name', width: 180 },
  { label: 'Email', dataKey: 'email', width: 260 },
];
const data = Array.from({ length: rowCount }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

function VirtualizedRow({ index, style }: ListChildComponentProps) {
  const row = data[index];
  return (
    <TableRow style={style} key={row.id}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.email}</TableCell>
    </TableRow>
  );
}

const example = (
  <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth: 700, margin: '0 auto' }}>
    <Table stickyHeader size="small">
      <TableHead>
        <TableRow>
          {columns.map(col => (
            <TableCell key={col.dataKey}>{col.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <List
          height={400}
          itemCount={data.length}
          itemSize={38}
          width={700}
        >
          {VirtualizedRow}
        </List>
      </TableBody>
    </Table>
  </Paper>
);

const code = String.raw`import React from 'react';
import { FixedSizeList as List } from 'react-window';
import type { ListChildComponentProps } from 'react-window';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const rowCount = 10000;
const columns = [
  { label: 'ID', dataKey: 'id', width: 80 },
  { label: 'Name', dataKey: 'name', width: 180 },
  { label: 'Email', dataKey: 'email', width: 260 },
];
const data = Array.from({ length: rowCount }, (_, i) => ({
  id: i + 1,
  name: \`User \${i + 1}\`,
  email: \`user\${i + 1}@example.com\`,
}));

function VirtualizedRow({ index, style }: ListChildComponentProps) {
  const row = data[index];
  return (
    <TableRow style={style} key={row.id}>
      <TableCell>{row.id}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.email}</TableCell>
    </TableRow>
  );
}

export default function VirtualizedTableExample() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth: 700, margin: '0 auto' }}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.dataKey}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <List
            height={400}
            itemCount={data.length}
            itemSize={38}
            width={700}
          >
            {VirtualizedRow}
          </List>
        </TableBody>
      </Table>
    </Paper>
  );
}
`;

const desc = `10,000건 이상의 대용량 데이터도 부드럽게 스크롤되는 가상화 테이블 예제입니다.
- react-window + MUI Table 조합
- 실제 렌더링은 화면에 보이는 행만
- 1만건 이상도 렉 없이 스크롤

실전 팁:
- 대용량 테이블은 반드시 가상화(virtualization) 적용
- react-window, react-virtualized, mui-data-grid, ag-grid 등 다양한 라이브러리 활용 가능
- 컬럼/행 고정, 정렬, 필터 등도 확장 가능
`;

const VirtualizedTableExample: React.FC = () => (
  <div style={stateExampleBlockStyle}>
    <Typography variant="h6" sx={{ mb: 2 }}>대용량/가상화 테이블 (Virtualized Table)</Typography>
    <ExampleTab
      example={example}
      code={code}
      desc={desc}
      labels={['Example', 'Sources', 'Description']}
    />
  </div>
);

export default VirtualizedTableExample; 