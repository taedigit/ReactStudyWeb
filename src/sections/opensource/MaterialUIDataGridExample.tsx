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

const basicCode = `import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, name: 'John', age: 28 },
  { id: 2, name: 'Jane', age: 32 },
  { id: 3, name: 'Alice', age: 24 },
  { id: 4, name: 'Bob', age: 40 },
];
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', width: 110, editable: true },
];

function BasicDataGrid() {
  return (
    <div style={{ height: 320, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}`;

const sortFilterCode = `import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const rows = [ ... ];
const columns = [ ... ];

function SortFilterDataGrid() {
  return (
    <div style={{ height: 340, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}`;

const paginationCode = `import { DataGrid } from '@mui/x-data-grid';

const rows = [ ... ];
const columns = [ ... ];

function PaginationDataGrid() {
  return (
    <div style={{ height: 340, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[2, 4, 10]}
        initialState={{ pagination: { paginationModel: { pageSize: 2, page: 0 } } }}
      />
    </div>
  );
}`;

const addDeleteCode = `import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';

const initialRows = [ ... ];
const columns = [ ... ];

function AddDeleteDataGrid() {
  const [rows, setRows] = useState(initialRows);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const handleAdd = () => {
    if (!name || !age) return;
    setRows(r => [...r, { id: Date.now(), name, age: Number(age) }]);
    setName('');
    setAge('');
  };
  const handleDelete = (id) => {
    setRows(r => r.filter(row => row.id !== id));
  };
  const actionCol = {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    renderCell: params => (
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
        <TextField size="small" value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
        <TextField size="small" value={age} onChange={e => setAge(e.target.value)} placeholder="나이" />
        <Button variant="contained" size="small" onClick={handleAdd}>추가</Button>
      </div>
      <div style={{ height: 340, width: '100%' }}>
        <DataGrid rows={rows} columns={[...columns, actionCol]} />
      </div>
    </div>
  );
}`;

const customCellCode = `import { DataGrid } from '@mui/x-data-grid';

const rows = [ ... ];
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true,
    renderCell: params => <b style={{ color: '#b5e853' }}>{params.value}</b>,
  },
  { field: 'age', headerName: 'Age', width: 110, editable: true,
    renderCell: params => <span>{params.value}세</span>,
  },
];

function CustomCellDataGrid() {
  return (
    <div style={{ height: 320, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}`;

const MaterialUIDataGridExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 Data Grid</Typography>
      <ExampleTab
        example={<BasicDataGrid />}
        code={basicCode}
        desc={`Material-UI Data Grid의 가장 기본적인 사용법입니다.\n\n- columns(컬럼 정의)와 rows(행 데이터)를 선언합니다.\n- DataGrid 컴포넌트에 rows/columns를 전달하면 표가 자동 렌더링됩니다.\n- 각 컬럼의 width, editable 등 다양한 속성을 지정할 수 있습니다.\n\n실전 팁:\n- MUI DataGrid는 기본적으로 정렬, 편집, 선택 등 다양한 기능을 내장하고 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 정렬/필터/툴바</Typography>
      <ExampleTab
        example={<SortFilterDataGrid />}
        code={sortFilterCode}
        desc={`툴바(Toolbar)와 함께 정렬/필터/컬럼 숨김 등 다양한 기능을 사용하는 예제입니다.\n\n- slots={{ toolbar: GridToolbar }}로 툴바를 활성화합니다.\n- 툴바에서 컬럼 정렬, 필터, 컬럼 보이기/숨기기, CSV 내보내기 등 다양한 기능을 제공합니다.\n- 컬럼 헤더 클릭 시 정렬, 필터 아이콘 클릭 시 필터링이 가능합니다.\n\n실전 팁:\n- 툴바는 커스텀 컴포넌트로 교체하거나, 필요한 기능만 선택적으로 노출할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 페이지네이션</Typography>
      <ExampleTab
        example={<PaginationDataGrid />}
        code={paginationCode}
        desc={`페이지네이션(페이지 이동) 기능 예제입니다.\n\n- pageSizeOptions로 페이지 크기 선택을 지원합니다.\n- initialState로 기본 페이지 크기/페이지를 지정할 수 있습니다.\n- 페이지 이동 버튼, 페이지 번호 등은 DataGrid에서 자동으로 제공됩니다.\n\n실전 팁:\n- 서버 사이드 페이지네이션, 커스텀 페이지네이션 UI도 쉽게 구현할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 행 추가/삭제</Typography>
      <ExampleTab
        example={<AddDeleteDataGrid />}
        code={addDeleteCode}
        desc={`행 추가/삭제 기능 예제입니다.\n\n- useState로 rows(행 배열), name/age(입력값) 상태를 관리합니다.\n- 입력창에 값 입력 후 추가 버튼을 누르면 새 행이 추가됩니다.\n- 각 행의 삭제 버튼을 누르면 해당 행이 삭제됩니다.\n- columns에 actions 컬럼을 추가해 삭제 버튼을 렌더링합니다.\n\n실전 팁:\n- 행 편집, 중복 체크, 서버 연동 등 실무에 맞게 확장 가능합니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. 커스텀 셀</Typography>
      <ExampleTab
        example={<CustomCellDataGrid />}
        code={customCellCode}
        desc={`커스텀 셀 렌더링 예제입니다.\n\n- columns 정의에서 renderCell 속성에 함수를 지정해 셀을 자유롭게 렌더링합니다.\n- 이름 컬럼은 강조색(bold, lime), 나이 컬럼은 '세' 단위로 표시합니다.\n- 버튼, 아이콘, 입력창 등 다양한 UI를 셀에 삽입할 수 있습니다.\n\n실전 팁:\n- renderCell에서 행 데이터(params.row)를 활용해 조건부 렌더링, 복합 UI도 쉽게 구현할 수 있습니다.`}
      />
    </div>
  </div>
);

export default MaterialUIDataGridExample; 