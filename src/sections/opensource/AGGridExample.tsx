import React, { useRef, useState } from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { ExampleTab } from '../../components/ExampleTab';

// AG Grid v28+ 모듈 등록 (필수)
ModuleRegistry.registerModules([AllCommunityModule]);

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
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
];
const columnDefs = [
  { headerName: 'Make', field: 'make' as const },
  { headerName: 'Model', field: 'model' as const },
  { headerName: 'Price', field: 'price' as const },
];

// 2. 정렬/필터 예제
const sortFilterColumnDefs = [
  { headerName: 'Make', field: 'make' as const, sortable: true, filter: true },
  { headerName: 'Model', field: 'model' as const, sortable: true, filter: true },
  { headerName: 'Price', field: 'price' as const, sortable: true, filter: 'agNumberColumnFilter' },
];

// 3. 체크박스 선택 예제
const checkboxColumnDefs = [
  { headerName: '', width: 40 },
  { headerName: 'Make', field: 'make' as const },
  { headerName: 'Model', field: 'model' as const },
  { headerName: 'Price', field: 'price' as const },
];

// 4. 숫자 포맷팅 예제
const numberFormatColumnDefs = [
  { headerName: 'Make', field: 'make' as const },
  { headerName: 'Model', field: 'model' as const },
  { headerName: 'Price', field: 'price' as const, valueFormatter: (p: { value: number }) => p.value.toLocaleString() + '원' },
];

const pinnedColumnDefs = [
  { headerName: 'Make', field: 'make' as const, pinned: 'left' as const },
  { headerName: 'Model', field: 'model' as const },
  { headerName: 'Price', field: 'price' as const },
];

const editableColumnDefs = [
  { headerName: 'Make', field: 'make' as const, editable: true },
  { headerName: 'Model', field: 'model' as const, editable: true },
  { headerName: 'Price', field: 'price' as const, editable: true },
];

const AGGridExample: React.FC = () => {
  // 5. 행 추가/삭제 예제
  const [editRows, setEditRows] = useState([
    { make: 'Hyundai', model: 'Avante', price: 21000 },
    { make: 'Kia', model: 'K5', price: 25000 },
  ]);
  const gridRef = useRef<any>(null);

  const handleAddRow = () => {
    setEditRows(rows => [...rows, { make: 'New', model: 'Model', price: 0 }]);
  };
  const handleRemoveRow = () => {
    setEditRows(rows => rows.slice(0, -1));
  };

  return (
    <div>
      {/* 1. 기본 표 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. AG Grid 기본 표</Typography>
        <ExampleTab
          example={<div className="ag-theme-alpine" style={{ height: 220, width: '100%' }}><AgGridReact rowData={rowData} columnDefs={columnDefs} /></div>}
          code={`const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxster', price: 72000 },
];
const columnDefs = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' },
];
<AgGridReact rowData={rowData} columnDefs={columnDefs} />;`}
          desc="가장 단순한 AG Grid 표 예제입니다."
        />
      </div>

      {/* 2. 정렬/필터 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 정렬/필터</Typography>
        <ExampleTab
          example={<div className="ag-theme-alpine" style={{ height: 220, width: '100%' }}><AgGridReact rowData={rowData} columnDefs={sortFilterColumnDefs} /></div>}
          code={`const sortFilterColumnDefs = [
  { headerName: 'Make', field: 'make', sortable: true, filter: true },
  { headerName: 'Model', field: 'model', sortable: true, filter: true },
  { headerName: 'Price', field: 'price', sortable: true, filter: 'agNumberColumnFilter' },
];
<AgGridReact rowData={rowData} columnDefs={sortFilterColumnDefs} />;`}
          desc="컬럼별 정렬 및 필터 기능이 활성화된 표입니다."
        />
      </div>

      {/* 3. 체크박스 선택 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 체크박스 선택</Typography>
        <ExampleTab
          example={<div className="ag-theme-alpine" style={{ height: 220, width: '100%' }}><AgGridReact rowData={rowData} columnDefs={checkboxColumnDefs} gridOptions={{ rowSelection: { mode: 'multiRow', checkboxes: true } }} /></div>}
          code={`const checkboxColumnDefs = [
  { headerName: '', width: 40 },
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' },
];
const gridOptions = { rowSelection: { mode: 'multiRow', checkboxes: true } };
<AgGridReact rowData={rowData} columnDefs={checkboxColumnDefs} gridOptions={gridOptions} />;`}
          desc="행을 체크박스로 선택할 수 있습니다."
        />
      </div>

      {/* 4. 숫자 포맷팅 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 숫자 포맷팅</Typography>
        <ExampleTab
          example={<div className="ag-theme-alpine" style={{ height: 220, width: '100%' }}><AgGridReact rowData={rowData} columnDefs={numberFormatColumnDefs} /></div>}
          code={`const numberFormatColumnDefs = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price', valueFormatter: p => p.value.toLocaleString() + '원' },
];
<AgGridReact rowData={rowData} columnDefs={numberFormatColumnDefs} />;`}
          desc="가격 컬럼에 천 단위 구분 및 '원' 단위가 붙습니다."
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
                <Button variant="outlined" size="small" onClick={handleRemoveRow} disabled={editRows.length === 0}>행 삭제</Button>
              </Stack>
              <div className="ag-theme-alpine" style={{ height: 220, width: '100%' }}>
                <AgGridReact ref={gridRef} rowData={editRows} columnDefs={columnDefs} />
              </div>
            </>
          }
          code={`const [editRows, setEditRows] = useState([
  { make: 'Hyundai', model: 'Avante', price: 21000 },
  { make: 'Kia', model: 'K5', price: 25000 },
]);
const handleAddRow = () => setEditRows(rows => [...rows, { make: 'New', model: 'Model', price: 0 }]);
const handleRemoveRow = () => setEditRows(rows => rows.slice(0, -1));
<AgGridReact rowData={editRows} columnDefs={columnDefs} />;`}
          desc="버튼으로 행을 추가하거나 삭제할 수 있습니다."
        />
      </div>

      {/* 6. 컬럼 고정 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. 컬럼 고정</Typography>
        <ExampleTab
          example={<div className="ag-theme-alpine" style={{ height: 220, width: '100%' }}><AgGridReact rowData={rowData} columnDefs={pinnedColumnDefs} /></div>}
          code={`const pinnedColumnDefs = [
  { headerName: 'Make', field: 'make', pinned: 'left' as const },
  { headerName: 'Model', field: 'model' as const },
  { headerName: 'Price', field: 'price' as const },
];
<AgGridReact rowData={rowData} columnDefs={pinnedColumnDefs} />;`}
          desc="Make 컬럼이 왼쪽에 고정됩니다."
        />
      </div>

      {/* 7. 셀 편집 */}
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>7. 셀 편집</Typography>
        <ExampleTab
          example={<div className="ag-theme-alpine" style={{ height: 220, width: '100%' }}><AgGridReact rowData={rowData} columnDefs={editableColumnDefs} /></div>}
          code={`const editableColumnDefs = [
  { headerName: 'Make', field: 'make', editable: true },
  { headerName: 'Model', field: 'model', editable: true },
  { headerName: 'Price', field: 'price', editable: true },
];
<AgGridReact rowData={rowData} columnDefs={editableColumnDefs} />;`}
          desc="모든 셀을 직접 편집할 수 있습니다."
        />
      </div>
    </div>
  );
};

export default AGGridExample; 