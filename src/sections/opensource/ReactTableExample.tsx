import { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';
import type { SortingState } from '@tanstack/react-table';
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

type Person = { id: number; name: string; age: number };

const initialData: Person[] = [
  { id: 1, name: 'John', age: 28 },
  { id: 2, name: 'Jane', age: 32 },
  { id: 3, name: 'Alice', age: 24 },
  { id: 4, name: 'Bob', age: 40 },
];

const columns: ColumnDef<Person>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'age', header: 'Age' },
];

// 1. 기본 테이블
function BasicTable() {
  const table = useReactTable({
    data: initialData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div style={{ overflowX: 'auto' }}>
      <TableUI table={table} />
    </div>
  );
}

// 2. 정렬(Sorting)
function SortingTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: initialData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <div style={{ overflowX: 'auto' }}>
      <TableUI table={table} enableSort />
    </div>
  );
}

// 3. 필터(Filter)
function FilterTable() {
  const [filter, setFilter] = useState('');
  const table = useReactTable({
    data: initialData,
    columns,
    state: { globalFilter: filter },
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <div style={{ overflowX: 'auto' }}>
      <TextField
        size="small"
        variant="outlined"
        placeholder="이름으로 필터..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
      />
      <TableUI table={table} />
    </div>
  );
}

// 4. 페이지네이션(Pagination)
function PaginationTable() {
  const table = useReactTable({
    data: initialData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div style={{ overflowX: 'auto' }}>
      <TableUI table={table} />
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          이전
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          다음
        </Button>
        <span style={{ color: '#fff', marginLeft: 8 }}>
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </span>
      </div>
    </div>
  );
}

// 5. 행 추가/삭제(Add/Delete Row)
function AddDeleteTable() {
  const [data, setData] = useState<Person[]>([...initialData]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const table = useReactTable({
    data,
    columns: [
      ...columns,
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Button
            size="small"
            color="error"
            variant="outlined"
            onClick={() => setData(d => d.filter(r => r.id !== row.original.id))}
          >
            삭제
          </Button>
        ),
      },
    ],
    getCoreRowModel: getCoreRowModel(),
  });
  const handleAdd = () => {
    if (!name || !age) return;
    setData(d => [
      ...d,
      { id: Date.now(), name, age: Number(age) },
    ]);
    setName('');
    setAge('');
  };
  return (
    <div style={{ overflowX: 'auto' }}>
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
      <TableUI table={table} />
    </div>
  );
}

// 6. 커스텀 셀(Custom Cell Render)
const customColumns: ColumnDef<Person>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name',
    cell: ({ getValue }) => <b style={{ color: '#b5e853' }}>{getValue<string>()}</b>,
  },
  { accessorKey: 'age', header: 'Age',
    cell: ({ getValue }) => <span>{getValue<number>()}세</span>,
  },
];
function CustomCellTable() {
  const table = useReactTable({
    data: initialData,
    columns: customColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div style={{ overflowX: 'auto' }}>
      <TableUI table={table} />
    </div>
  );
}

// 공통 테이블 UI
function TableUI({ table, enableSort }: { table: any; enableSort?: boolean }) {
  return (
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      background: '#232323',
      color: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
    }}>
      <thead>
        {table.getHeaderGroups().map((headerGroup: any) => (
          <tr key={headerGroup.id} style={{ background: '#181818' }}>
            {headerGroup.headers.map((header: any) => (
              <th
                key={header.id}
                style={{
                  padding: '12px 10px',
                  borderBottom: '2px solid #333',
                  fontWeight: 700,
                  fontSize: 15,
                  textAlign: 'left',
                  cursor: enableSort && header.column.getCanSort() ? 'pointer' : undefined,
                  userSelect: 'none',
                }}
                onClick={enableSort && header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                {enableSort && header.column.getCanSort() && (
                  <span style={{ marginLeft: 4, fontSize: 13 }}>
                    {header.column.getIsSorted() === 'asc' ? '▲' : header.column.getIsSorted() === 'desc' ? '▼' : '↕'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row: any) => (
          <tr
            key={row.id}
            style={{
              background: row.index % 2 === 0 ? '#232323' : '#202020',
              transition: 'background 0.2s',
            }}
          >
            {row.getVisibleCells().map((cell: any) => (
              <td
                key={cell.id}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #333',
                  fontSize: 14,
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const ReactTableExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 테이블 (Basic Table)</Typography>
      <ExampleTab
        example={<BasicTable />}
        code={`// TanStack Table v8 기본 예제 코드 ...`}
        desc={`TanStack Table의 가장 기본적인 사용법을 보여줍니다.\n- columns와 data를 정의하고 useReactTable로 테이블 인스턴스를 생성합니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 정렬 (Sorting)</Typography>
      <ExampleTab
        example={<SortingTable />}
        code={`// 정렬 예제 코드 ...`}
        desc={`각 컬럼 헤더를 클릭하면 오름차순/내림차순 정렬이 토글됩니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 필터 (Filter)</Typography>
      <ExampleTab
        example={<FilterTable />}
        code={`// 필터 예제 코드 ...`}
        desc={`상단 입력창에 이름을 입력하면 해당 이름이 포함된 행만 표시됩니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 페이지네이션 (Pagination)</Typography>
      <ExampleTab
        example={<PaginationTable />}
        code={`// 페이지네이션 예제 코드 ...`}
        desc={`이전/다음 버튼으로 페이지를 이동할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. 행 추가/삭제 (Add/Delete Row)</Typography>
      <ExampleTab
        example={<AddDeleteTable />}
        code={`// 행 추가/삭제 예제 코드 ...`}
        desc={`입력창에 이름과 나이를 입력 후 추가 버튼을 누르면 행이 추가되고, 삭제 버튼으로 행을 삭제할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>6. 커스텀 셀 (Custom Cell Render)</Typography>
      <ExampleTab
        example={<CustomCellTable />}
        code={`// 커스텀 셀 예제 코드 ...`}
        desc={`이름 컬럼은 강조색, 나이 컬럼은 '세' 단위로 표시하는 등 셀을 자유롭게 커스텀할 수 있습니다.`}
      />
    </div>
  </div>
);

export default ReactTableExample; 