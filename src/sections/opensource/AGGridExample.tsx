import React, { useRef, useState } from 'react';
import { Typography, Button, Box, Stack } from '@mui/material';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// AG Grid v28+ 모듈 등록 (필수)
ModuleRegistry.registerModules([AllCommunityModule]);

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
  { headerName: '', checkboxSelection: true, width: 40 },
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
    <Stack spacing={5}>
      {/* 1. 기본 표 */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>1. AG Grid 기본 표</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>가장 단순한 AG Grid 표 예제입니다.</Typography>
        <div className="ag-theme-alpine" style={{ height: 220, width: '100%', maxWidth: 600 }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
      </Box>

      {/* 2. 정렬/필터 */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>2. 정렬/필터</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>컬럼별 정렬 및 필터 기능이 활성화된 표입니다.</Typography>
        <div className="ag-theme-alpine" style={{ height: 220, width: '100%', maxWidth: 600 }}>
          <AgGridReact rowData={rowData} columnDefs={sortFilterColumnDefs} />
        </div>
      </Box>

      {/* 3. 체크박스 선택 */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>3. 체크박스 선택</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>행을 체크박스로 선택할 수 있습니다.</Typography>
        <div className="ag-theme-alpine" style={{ height: 220, width: '100%', maxWidth: 600 }}>
          <AgGridReact rowData={rowData} columnDefs={checkboxColumnDefs} rowSelection="multiple" />
        </div>
      </Box>

      {/* 4. 숫자 포맷팅 */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>4. 숫자 포맷팅</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>가격 컬럼에 천 단위 구분 및 '원' 단위가 붙습니다.</Typography>
        <div className="ag-theme-alpine" style={{ height: 220, width: '100%', maxWidth: 600 }}>
          <AgGridReact rowData={rowData} columnDefs={numberFormatColumnDefs} />
        </div>
      </Box>

      {/* 5. 행 추가/삭제 */}
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>5. 행 추가/삭제</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>버튼으로 행을 추가하거나 삭제할 수 있습니다.</Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button variant="contained" size="small" onClick={handleAddRow}>행 추가</Button>
          <Button variant="outlined" size="small" onClick={handleRemoveRow} disabled={editRows.length === 0}>행 삭제</Button>
        </Stack>
        <div className="ag-theme-alpine" style={{ height: 220, width: '100%', maxWidth: 600 }}>
          <AgGridReact ref={gridRef} rowData={editRows} columnDefs={columnDefs} />
        </div>
      </Box>
    </Stack>
  );
};

export default AGGridExample; 