import React, { useEffect, useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TablePagination, TextField, Box } from '@mui/material';
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

const serverTableCode =
  "import React, { useEffect, useState } from 'react';\n" +
  "import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TablePagination, TextField, Box } from '@mui/material';\n" +
  "\n" +
  "const mockFetch = (page, rowsPerPage, order, orderBy, filter) => {\n" +
  "  // 더미 데이터 생성\n" +
  "  let data = Array.from({ length: 57 }, (_, i) => ({\n" +
  "    id: i + 1,\n" +
  "    name: 'User ' + (i + 1),\n" +
  "    age: 20 + (i % 30),\n" +
  "    email: 'user' + (i + 1) + '@test.com'\n" +
  "  }));\n" +
  "  if (filter) {\n" +
  "    data = data.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()));\n" +
  "  }\n" +
  "  data = data.sort((a, b) => {\n" +
  "    if (orderBy && a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;\n" +
  "    if (orderBy && a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;\n" +
  "    return 0;\n" +
  "  });\n" +
  "  const total = data.length;\n" +
  "  const paged = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);\n" +
  "  return new Promise(resolve => setTimeout(() => resolve({ rows: paged, total }), 500));\n" +
  "};\n" +
  "\n" +
  "const ServerSideTableExample = () => {\n" +
  "  const [rows, setRows] = useState([]);\n" +
  "  const [total, setTotal] = useState(0);\n" +
  "  const [page, setPage] = useState(0);\n" +
  "  const [rowsPerPage, setRowsPerPage] = useState(5);\n" +
  "  const [order, setOrder] = useState('asc');\n" +
  "  const [orderBy, setOrderBy] = useState('id');\n" +
  "  const [filter, setFilter] = useState('');\n" +
  "  const [loading, setLoading] = useState(false);\n" +
  "\n" +
  "  const fetchData = () => {\n" +
  "    setLoading(true);\n" +
  "    mockFetch(page, rowsPerPage, order, orderBy, filter).then((res) => {\n" +
  "      setRows(res.rows);\n" +
  "      setTotal(res.total);\n" +
  "      setLoading(false);\n" +
  "    });\n" +
  "  };\n" +
  "\n" +
  "  useEffect(() => {\n" +
  "    fetchData();\n" +
  "    // eslint-disable-next-line\n" +
  "  }, [page, rowsPerPage, order, orderBy, filter]);\n" +
  "\n" +
  "  const handleSort = (property) => {\n" +
  "    const isAsc = orderBy === property && order === 'asc';\n" +
  "    setOrder(isAsc ? 'desc' : 'asc');\n" +
  "    setOrderBy(property);\n" +
  "  };\n" +
  "\n" +
  "  return (\n" +
  "    <Box>\n" +
  "      <TextField\n" +
  "        label=\"이름 검색\"\n" +
  "        value={filter}\n" +
  "        onChange={e => setFilter(e.target.value)}\n" +
  "        size=\"small\"\n" +
  "        sx={{ mb: 2, background: '#fff', borderRadius: 1 }}\n" +
  "      />\n" +
  "      <TableContainer component={Paper} sx={{ background: '#232323', color: '#eaeaea', borderRadius: 2 }}>\n" +
  "        <Table>\n" +
  "          <TableHead>\n" +
  "            <TableRow>\n" +
  "              <TableCell>\n" +
  "                <TableSortLabel\n" +
  "                  active={orderBy === 'id'}\n" +
  "                  direction={orderBy === 'id' ? order : 'asc'}\n" +
  "                  onClick={() => handleSort('id')}\n" +
  "                >ID</TableSortLabel>\n" +
  "              </TableCell>\n" +
  "              <TableCell>\n" +
  "                <TableSortLabel\n" +
  "                  active={orderBy === 'name'}\n" +
  "                  direction={orderBy === 'name' ? order : 'asc'}\n" +
  "                  onClick={() => handleSort('name')}\n" +
  "                >이름</TableSortLabel>\n" +
  "              </TableCell>\n" +
  "              <TableCell>\n" +
  "                <TableSortLabel\n" +
  "                  active={orderBy === 'age'}\n" +
  "                  direction={orderBy === 'age' ? order : 'asc'}\n" +
  "                  onClick={() => handleSort('age')}\n" +
  "                >나이</TableSortLabel>\n" +
  "              </TableCell>\n" +
  "              <TableCell>Email</TableCell>\n" +
  "            </TableRow>\n" +
  "          </TableHead>\n" +
  "          <TableBody>\n" +
  "            {loading ? (\n" +
  "              <TableRow><TableCell colSpan={4} align=\"center\">로딩 중...</TableCell></TableRow>\n" +
  "            ) : rows.length === 0 ? (\n" +
  "              <TableRow><TableCell colSpan={4} align=\"center\">데이터 없음</TableCell></TableRow>\n" +
  "            ) : (\n" +
  "              rows.map(row => (\n" +
  "                <TableRow key={row.id}>\n" +
  "                  <TableCell>{row.id}</TableCell>\n" +
  "                  <TableCell>{row.name}</TableCell>\n" +
  "                  <TableCell>{row.age}</TableCell>\n" +
  "                  <TableCell>{row.email}</TableCell>\n" +
  "                </TableRow>\n" +
  "              ))\n" +
  "            )}\n" +
  "          </TableBody>\n" +
  "        </Table>\n" +
  "      </TableContainer>\n" +
  "      <TablePagination\n" +
  "        component=\"div\"\n" +
  "        count={total}\n" +
  "        page={page}\n" +
  "        onPageChange={(_, newPage) => setPage(newPage)}\n" +
  "        rowsPerPage={rowsPerPage}\n" +
  "        onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}\n" +
  "        rowsPerPageOptions={[5, 10, 20]}\n" +
  "      />\n" +
  "    </Box>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "export default ServerSideTableExample;";

const serverTableDesc = `서버와 연동된 테이블(페이징/정렬/필터) 예제입니다.\n\n- mockFetch 함수로 서버 데이터를 모킹합니다.\n- 이름 검색, 정렬, 페이지네이션이 모두 서버(모킹)에서 처리됩니다.\n- 실제 서비스에서는 fetch/axios 등으로 API를 호출하면 됩니다.\n- 대용량 데이터, REST API 연동, 상태 동기화 등 실전에서 자주 쓰이는 패턴입니다.`;

const mockFetch = (
  page: number,
  rowsPerPage: number,
  order: 'asc' | 'desc',
  orderBy: 'id' | 'name' | 'age' | 'email',
  filter: string
): Promise<{ rows: { id: number; name: string; age: number; email: string }[]; total: number }> => {
  let data = Array.from({ length: 57 }, (_, i) => ({
    id: i + 1,
    name: 'User ' + (i + 1),
    age: 20 + (i % 30),
    email: 'user' + (i + 1) + '@test.com'
  }));
  if (filter) {
    data = data.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()));
  }
  data = data.sort((a, b) => {
    if (orderBy && a[orderBy as keyof typeof a] < b[orderBy as keyof typeof b]) return order === 'asc' ? -1 : 1;
    if (orderBy && a[orderBy as keyof typeof a] > b[orderBy as keyof typeof b]) return order === 'asc' ? 1 : -1;
    return 0;
  });
  const total = data.length;
  const paged = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  return new Promise(resolve => setTimeout(() => resolve({ rows: paged, total }), 500));
};

const ServerSideTableExample: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<'id' | 'name' | 'age' | 'email'>('id');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    mockFetch(page, rowsPerPage, order, orderBy, filter).then((res: any) => {
      setRows(res.rows);
      setTotal(res.total);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [page, rowsPerPage, order, orderBy, filter]);

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property as 'id' | 'name' | 'age' | 'email');
  };

  const example = (
    <Box>
      <TextField
        label="이름 검색"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        size="small"
        sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
      />
      <TableContainer component={Paper} sx={{ background: '#232323', color: '#eaeaea', borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleSort('id')}
                >ID</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleSort('name')}
                >이름</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'age'}
                  direction={orderBy === 'age' ? order : 'asc'}
                  onClick={() => handleSort('age')}
                >나이</TableSortLabel>
              </TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={4} align="center">로딩 중...</TableCell></TableRow>
            ) : rows.length === 0 ? (
              <TableRow><TableCell colSpan={4} align="center">데이터 없음</TableCell></TableRow>
            ) : (
              rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={total}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </Box>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>서버 사이드 테이블 (페이징/정렬/필터)</Typography>
      <ExampleTab
        example={example}
        code={serverTableCode}
        desc={serverTableDesc}
      />
    </div>
  );
};

export default ServerSideTableExample; 