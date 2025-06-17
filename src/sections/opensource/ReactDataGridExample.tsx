import React from 'react';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import { DataGrid } from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' },
];

const rows = [
  { id: 0, title: 'Example 1', count: 20 },
  { id: 1, title: 'Example 2', count: 40 },
  { id: 2, title: 'Example 3', count: 60 },
];

const code = `import { DataGrid } from 'react-data-grid';
import 'react-data-grid/lib/styles.css';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' },
];

const rows = [
  { id: 0, title: 'Example 1', count: 20 },
  { id: 1, title: 'Example 2', count: 40 },
  { id: 2, title: 'Example 3', count: 60 },
];

<DataGrid columns={columns} rows={rows} />;`;

const desc = 'react-data-grid의 기본 사용법 예제입니다. 3컬럼, 3행의 표를 렌더링합니다.';

const ReactDataGridExample: React.FC = () => (
  <div style={{ background: '#484f54', padding: '1.5em 2em', borderRadius: 8, border: '1px solid #eee', margin: '1.2em 0 2em 0' }}>
    <Typography variant="h6" sx={{ mb: 2 }}>React Data Grid 기본 예제</Typography>
    <ExampleTab
      example={<div style={{ width: '100%' }}><DataGrid columns={columns} rows={rows} style={{ minHeight: 220, width: '100%' }} /></div>}
      code={code}
      desc={desc}
    />
  </div>
);

export default ReactDataGridExample; 