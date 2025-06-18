import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import type { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Typography, Button, TextField } from '@mui/material';
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

const initialRows: GridRowsProp = [
  { id: 1, name: 'John', age: 28 },
  { id: 2, name: 'Jane', age: 32 },
  { id: 3, name: 'Alice', age: 24 },
  { id: 4, name: 'Bob', age: 40 },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', width: 110, editable: true },
];

// 1. 기본 예제
function BasicDataGrid() {
  return (
    <div style={{ height: 320, width: '100%', background: '#232323', borderRadius: 8 }}>
      <DataGrid
        rows={initialRows}
        columns={columns}
        disableRowSelectionOnClick
        sx={{ color: '#fff', border: 'none', background: '#232323' }}
      />
    </div>
  );
}

// 2. 정렬/필터/툴바
function SortFilterDataGrid() {
  return (
    <div style={{ height: 340, width: '100%', background: '#232323', borderRadius: 8 }}>
      <DataGrid
        rows={initialRows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        disableRowSelectionOnClick
        sx={{ color: '#fff', border: 'none', background: '#232323' }}
      />
    </div>
  );
}

// 3. 페이지네이션
function PaginationDataGrid() {
  return (
    <div style={{ height: 340, width: '100%', background: '#232323', borderRadius: 8 }}>
      <DataGrid
        rows={initialRows}
        columns={columns}
        pageSizeOptions={[2, 4, 10]}
        initialState={{ pagination: { paginationModel: { pageSize: 2, page: 0 } } }}
        disableRowSelectionOnClick
        sx={{ color: '#fff', border: 'none', background: '#232323' }}
      />
    </div>
  );
}

// 4. 행 추가/삭제
function AddDeleteDataGrid() {
  const [rows, setRows] = useState(initialRows);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const handleAdd = () => {
    if (!name || !age) return;
    setRows((r: any) => [...r, { id: Date.now(), name, age: Number(age) }]);
    setName('');
    setAge('');
  };
  const handleDelete = (id: number) => {
    setRows((r: any) => r.filter((row: any) => row.id !== id));
  };
  const actionCol: GridColDef = {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: (params: any) => (
      <Button size="small" color="error" variant="outlined" onClick={() => handleDelete(params.row.id)}>
        삭제
      </Button>
    ),
    sortable: false,
    filterable: false,
  };
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <TextField
          size="small"
          variant="outlined"
          placeholder="이름"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ background: '#fff', borderRadius: 1 }}
        />
        <TextField
          size="small"
          variant="outlined"
          placeholder="나이"
          value={age}
          onChange={e => setAge(e.target.value)}
          sx={{ background: '#fff', borderRadius: 1 }}
        />
        <Button variant="contained" size="small" onClick={handleAdd}>
          추가
        </Button>
      </div>
      <div style={{ height: 340, width: '100%', background: '#232323', borderRadius: 8 }}>
        <DataGrid
          rows={rows}
          columns={[...columns, actionCol]}
          disableRowSelectionOnClick
          sx={{ color: '#fff', border: 'none', background: '#232323' }}
        />
      </div>
    </div>
  );
}

// 5. 커스텀 셀
const customColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true,
    renderCell: (params: any) => <b style={{ color: '#b5e853' }}>{params.value}</b>,
  },
  { field: 'age', headerName: 'Age', width: 110, editable: true,
    renderCell: (params: any) => <span>{params.value}세</span>,
  },
];
function CustomCellDataGrid() {
  return (
    <div style={{ height: 320, width: '100%', background: '#232323', borderRadius: 8 }}>
      <DataGrid
        rows={initialRows}
        columns={customColumns}
        disableRowSelectionOnClick
        sx={{ color: '#fff', border: 'none', background: '#232323' }}
      />
    </div>
  );
}

const MaterialUIDataGridExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 Data Grid</Typography>
      <ExampleTab
        example={<BasicDataGrid />}
        code={`// MUI DataGrid 기본 예제 코드 ...`}
        desc={`가장 기본적인 Material-UI Data Grid 사용법입니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 정렬/필터/툴바</Typography>
      <ExampleTab
        example={<SortFilterDataGrid />}
        code={`// 정렬/필터/툴바 예제 코드 ...`}
        desc={`툴바를 통해 정렬, 필터, 컬럼 숨김 등 다양한 기능을 사용할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 페이지네이션</Typography>
      <ExampleTab
        example={<PaginationDataGrid />}
        code={`// 페이지네이션 예제 코드 ...`}
        desc={`페이지 크기와 이동을 조절할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 행 추가/삭제</Typography>
      <ExampleTab
        example={<AddDeleteDataGrid />}
        code={`// 행 추가/삭제 예제 코드 ...`}
        desc={`입력창에 이름과 나이를 입력 후 추가 버튼을 누르면 행이 추가되고, 삭제 버튼으로 행을 삭제할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. 커스텀 셀</Typography>
      <ExampleTab
        example={<CustomCellDataGrid />}
        code={`// 커스텀 셀 예제 코드 ...`}
        desc={`이름 컬럼은 강조색, 나이 컬럼은 '세' 단위로 표시하는 등 셀을 자유롭게 커스텀할 수 있습니다.`}
      />
    </div>
  </div>
);

export default MaterialUIDataGridExample; 