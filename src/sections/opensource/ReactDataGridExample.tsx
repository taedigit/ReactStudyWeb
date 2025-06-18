import React, { useState } from 'react';
import { Typography, Button, Stack } from '@mui/material';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
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

// 1. 기본 데이터
const columns = [
  { name: 'id', header: 'ID', minWidth: 50, defaultFlex: 1 },
  { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 2 },
  { name: 'age', header: 'Age', minWidth: 60, defaultFlex: 1 },
];
const dataSource = [
  { id: 1, name: 'John McQueen', age: 35 },
  { id: 2, name: 'Mary Stones', age: 25 },
  { id: 3, name: 'Robert Fil', age: 27 },
  { id: 4, name: 'Roger Robson', age: 81 },
  { id: 5, name: 'Billary Konwik', age: 18 },
];
const gridStyle = { minHeight: 300 };

// 2. 정렬/필터 예제
const sortFilterColumns = [
  { name: 'id', header: 'ID', minWidth: 50, defaultFlex: 1, sortable: true, filterable: true },
  { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 2, sortable: true, filterable: true },
  { name: 'age', header: 'Age', minWidth: 60, defaultFlex: 1, sortable: true, filterable: true },
];

// 3. 체크박스 선택 예제
const checkboxColumns = [
  { name: 'id', header: 'ID', minWidth: 50, defaultFlex: 1 },
  { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 2 },
  { name: 'age', header: 'Age', minWidth: 60, defaultFlex: 1 },
];
const checkboxDataSource = dataSource;

// 4. 셀 편집 예제
const editableColumns = [
  { name: 'id', header: 'ID', minWidth: 50, defaultFlex: 1, editable: false },
  { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 2, editable: true },
  { name: 'age', header: 'Age', minWidth: 60, defaultFlex: 1, editable: true },
];

const ReactDataGridExample: React.FC = () => {
  // 5. 행 추가/삭제 예제
  const [rows, setRows] = useState([
    { id: 1, name: 'John McQueen', age: 35 },
    { id: 2, name: 'Mary Stones', age: 25 },
  ]);
  const handleAddRow = () => {
    setRows(prev => [
      ...prev,
      { id: prev.length + 1, name: 'New User', age: 0 },
    ]);
  };
  const handleRemoveRow = () => {
    setRows(prev => prev.slice(0, -1));
  };

  return (
    <div>
      {/* 1. 기본 표 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. React Data Grid 기본 표</Typography>
        <ExampleTab
          example={<ReactDataGrid idProperty="id" columns={columns} dataSource={dataSource} style={gridStyle} />}
          code={`import ReactDataGrid from '@inovua/reactdatagrid-community';\nimport '@inovua/reactdatagrid-community/index.css';\n\nconst columns = [\n  { name: 'id', header: 'ID', minWidth: 50, defaultFlex: 1 },\n  { name: 'name', header: 'Name', minWidth: 100, defaultFlex: 2 },\n  { name: 'age', header: 'Age', minWidth: 60, defaultFlex: 1 },\n];\nconst dataSource = [\n  { id: 1, name: 'John McQueen', age: 35 },\n  ...\n];\n<ReactDataGrid idProperty="id" columns={columns} dataSource={dataSource} style={{ minHeight: 300 }} />;`}
          desc="가장 단순한 React Data Grid 표 예제입니다."
        />
      </div>

      {/* 2. 정렬/필터 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 정렬/필터</Typography>
        <ExampleTab
          example={<ReactDataGrid idProperty="id" columns={sortFilterColumns} dataSource={dataSource} style={gridStyle} />}
          code={`const sortFilterColumns = [\n  { name: 'id', header: 'ID', sortable: true, filterable: true },\n  { name: 'name', header: 'Name', sortable: true, filterable: true },\n  { name: 'age', header: 'Age', sortable: true, filterable: true },\n];\n<ReactDataGrid idProperty="id" columns={sortFilterColumns} dataSource={dataSource} />;`}
          desc="컬럼별 정렬 및 필터 기능이 활성화된 표입니다."
        />
      </div>

      {/* 3. 체크박스 선택 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 체크박스 선택</Typography>
        <ExampleTab
          example={<ReactDataGrid idProperty="id" columns={checkboxColumns} dataSource={checkboxDataSource} style={gridStyle} />}
          code={`<ReactDataGrid idProperty=\"id\" columns={checkboxColumns} dataSource={checkboxDataSource} />;`}
          desc="행을 체크박스로 선택할 수 있습니다."
        />
      </div>

      {/* 4. 셀 편집 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 셀 편집</Typography>
        <ExampleTab
          example={<ReactDataGrid idProperty="id" columns={editableColumns} dataSource={dataSource} style={gridStyle} editable />}
          code={`const editableColumns = [\n  { name: 'id', header: 'ID', editable: false },\n  { name: 'name', header: 'Name', editable: true },\n  { name: 'age', header: 'Age', editable: true },\n];\n<ReactDataGrid idProperty=\"id\" columns={editableColumns} dataSource={dataSource} editable />;`}
          desc="셀을 직접 편집할 수 있습니다."
        />
      </div>

      {/* 5. 행 추가/삭제 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 행 추가/삭제</Typography>
        <ExampleTab
          example={
            <>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Button variant="contained" size="small" onClick={handleAddRow}>행 추가</Button>
                <Button variant="outlined" size="small" onClick={handleRemoveRow} disabled={rows.length === 0}>행 삭제</Button>
              </Stack>
              <ReactDataGrid idProperty="id" columns={editableColumns} dataSource={rows} style={gridStyle} editable />
            </>
          }
          code={`const [rows, setRows] = useState([\n  { id: 1, name: 'John McQueen', age: 35 },\n  { id: 2, name: 'Mary Stones', age: 25 },\n]);\nconst handleAddRow = () => setRows(prev => [...prev, { id: prev.length + 1, name: 'New User', age: 0 }]);\nconst handleRemoveRow = () => setRows(prev => prev.slice(0, -1));\n<ReactDataGrid idProperty=\"id\" columns={editableColumns} dataSource={rows} editable />;`}
          desc="버튼으로 행을 추가하거나 삭제할 수 있습니다."
        />
      </div>
    </div>
  );
};

export default ReactDataGridExample; 