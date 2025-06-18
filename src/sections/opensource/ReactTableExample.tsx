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

const basicTableCode = `import { useReactTable, getCoreRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';

type Person = { id: number; name: string; age: number };

const data: Person[] = [
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

function BasicTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}`;

const sortingTableCode = `import { useState } from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender, type ColumnDef, type SortingState } from '@tanstack/react-table';

type Person = { id: number; name: string; age: number };
const data: Person[] = [ ... ];
const columns: ColumnDef<Person>[] = [ ... ];

function SortingTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} onClick={header.column.getToggleSortingHandler()} style={{ cursor: header.column.getCanSort() ? 'pointer' : undefined }}>
                {flexRender(header.column.columnDef.header, header.getContext())}
                {header.column.getIsSorted() === 'asc' ? ' ▲' : header.column.getIsSorted() === 'desc' ? ' ▼' : ''}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}`;

const filterTableCode = `import { useState } from 'react';
import { useReactTable, getCoreRowModel, getFilteredRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';

type Person = { id: number; name: string; age: number };
const data: Person[] = [ ... ];
const columns: ColumnDef<Person>[] = [ ... ];

function FilterTable() {
  const [filter, setFilter] = useState('');
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter: filter },
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <>
      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="이름으로 필터..." />
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}`;

const paginationTableCode = `import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';

type Person = { id: number; name: string; age: number };
const data: Person[] = [ ... ];
const columns: ColumnDef<Person>[] = [ ... ];

function PaginationTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>이전</button>
      <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>다음</button>
      <span>{table.getState().pagination.pageIndex + 1} / {table.getPageCount()}</span>
    </>
  );
}`;

const addDeleteTableCode = `import { useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';
import { Button } from '@mui/material';

type Person = { id: number; name: string; age: number };
const initialData: Person[] = [ ... ];
const columns: ColumnDef<Person>[] = [ ... ];

function AddDeleteTable() {
  const [data, setData] = useState<Person[]>(initialData);
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
          <Button onClick={() => setData(d => d.filter(r => r.id !== row.original.id))}>삭제</Button>
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
    <>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="나이" />
      <button onClick={handleAdd}>추가</button>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}`;

const customCellTableCode = `import { useReactTable, getCoreRowModel, flexRender, type ColumnDef } from '@tanstack/react-table';

type Person = { id: number; name: string; age: number };
const data: Person[] = [ ... ];
const customColumns: ColumnDef<Person>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name', cell: ({ getValue }) => <b style={{ color: '#b5e853' }}>{getValue<string>()}</b> },
  { accessorKey: 'age', header: 'Age', cell: ({ getValue }) => <span>{getValue<number>()}세</span> },
];

function CustomCellTable() {
  const table = useReactTable({
    data,
    columns: customColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}`;

const ReactTableExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 테이블 (Basic Table)</Typography>
      <ExampleTab
        example={<BasicTable />}
        code={basicTableCode}
        desc={`TanStack Table의 가장 기본적인 사용법입니다.\n\n- columns(컬럼 정의)와 data(행 데이터)를 선언합니다.\n- useReactTable 훅으로 테이블 인스턴스를 생성합니다.\n- getCoreRowModel()을 통해 모든 행을 단순히 렌더링합니다.\n- flexRender로 헤더/셀을 JSX로 변환합니다.\n\n실전 팁:\n- 가장 단순한 표 구조로, 커스텀 렌더링/기능 확장에 최적화되어 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 정렬 (Sorting)</Typography>
      <ExampleTab
        example={<SortingTable />}
        code={sortingTableCode}
        desc={`정렬 기능을 추가한 예제입니다.\n\n- useState로 sorting 상태를 관리합니다.\n- getSortedRowModel()을 추가해 정렬된 행을 반환합니다.\n- 헤더 셀 클릭 시 onSortingChange로 정렬 상태가 변경됩니다.\n- header.column.getCanSort(), getToggleSortingHandler()로 정렬 토글 구현.\n- 정렬 방향(▲▼↕)을 UI에 표시합니다.\n\n실전 팁:\n- 여러 컬럼 동시 정렬, 서버 사이드 정렬 등도 쉽게 확장 가능합니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 필터 (Filter)</Typography>
      <ExampleTab
        example={<FilterTable />}
        code={filterTableCode}
        desc={`글로벌 필터(검색) 기능 예제입니다.\n\n- useState로 filter(검색어) 상태를 관리합니다.\n- getFilteredRowModel()을 추가해 필터링된 행만 반환합니다.\n- onGlobalFilterChange로 입력값이 바뀔 때마다 필터링이 적용됩니다.\n- 입력창에 이름 일부만 입력해도 해당 행만 표시됩니다.\n\n실전 팁:\n- 컬럼별 개별 필터, 커스텀 필터 함수 등도 쉽게 확장할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 페이지네이션 (Pagination)</Typography>
      <ExampleTab
        example={<PaginationTable />}
        code={paginationTableCode}
        desc={`페이지네이션(페이지 이동) 기능 예제입니다.\n\n- getPaginationRowModel()을 추가해 페이지 단위로 행을 반환합니다.\n- table.previousPage(), table.nextPage()로 페이지 이동이 가능합니다.\n- pageIndex, pageCount 등으로 현재 페이지/전체 페이지를 표시합니다.\n\n실전 팁:\n- 페이지 크기 변경, 서버 사이드 페이지네이션 등도 쉽게 구현할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. 행 추가/삭제 (Add/Delete Row)</Typography>
      <ExampleTab
        example={<AddDeleteTable />}
        code={addDeleteTableCode}
        desc={`행 추가/삭제 기능 예제입니다.\n\n- useState로 data(행 배열), name/age(입력값) 상태를 관리합니다.\n- 입력창에 값 입력 후 추가 버튼을 누르면 새 행이 추가됩니다.\n- 각 행의 삭제 버튼을 누르면 해당 행이 삭제됩니다.\n- columns에 actions 컬럼을 추가해 삭제 버튼을 렌더링합니다.\n\n실전 팁:\n- 행 편집, 중복 체크, 서버 연동 등 실무에 맞게 확장 가능합니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>6. 커스텀 셀 (Custom Cell Render)</Typography>
      <ExampleTab
        example={<CustomCellTable />}
        code={customCellTableCode}
        desc={`커스텀 셀 렌더링 예제입니다.\n\n- columns 정의에서 cell 속성에 함수를 지정해 셀을 자유롭게 렌더링합니다.\n- 이름 컬럼은 강조색(bold, lime), 나이 컬럼은 '세' 단위로 표시합니다.\n- flexRender가 cell 함수의 반환값(JSX)을 그대로 렌더링합니다.\n\n실전 팁:\n- 버튼, 아이콘, 입력창 등 다양한 UI를 셀에 삽입할 수 있습니다.`}
      />
    </div>
  </div>
);

export default ReactTableExample; 