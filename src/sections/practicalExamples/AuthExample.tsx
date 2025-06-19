import React, { useState } from 'react';
import { Typography, Button, Box, Stack, MenuItem, Select, FormControl, InputLabel, Alert } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import { MacCmd } from '../../components/MacCmd';

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

const authExampleCode =
  "import React, { useState } from 'react';\n" +
  "import { Button, Stack, MenuItem, Select, FormControl, InputLabel, Alert } from '@mui/material';\n" +
  "\n" +
  "const AuthDemo = () => {\n" +
  "  const [isLoggedIn, setIsLoggedIn] = useState(false);\n" +
  "  const [role, setRole] = useState('user');\n" +
  "  const login = () => setIsLoggedIn(true);\n" +
  "  const logout = () => setIsLoggedIn(false);\n" +
  "  return (\n" +
  "    <Stack spacing={2}>\n" +
  "      {!isLoggedIn ? (\n" +
  "        <>\n" +
  "          <FormControl size=\"small\">\n" +
  "            <InputLabel>권한</InputLabel>\n" +
  "            <Select value={role} label=\"권한\" onChange={e => setRole(e.target.value)}>\n" +
  "              <MenuItem value=\"user\">사용자</MenuItem>\n" +
  "              <MenuItem value=\"admin\">관리자</MenuItem>\n" +
  "            </Select>\n" +
  "          </FormControl>\n" +
  "          <Button variant=\"contained\" onClick={login}>로그인</Button>\n" +
  "        </>\n" +
  "      ) : (\n" +
  "        <>\n" +
  "          <Alert severity=\"success\">{role === 'admin' ? '관리자' : '사용자'}로 로그인됨</Alert>\n" +
  "          <Stack direction=\"row\" spacing={2}>\n" +
  "            <Button variant=\"outlined\" onClick={logout}>로그아웃</Button>\n" +
  "            {role === 'admin' && <Button color=\"secondary\" variant=\"contained\">관리자 메뉴</Button>}\n" +
  "            <Button color=\"primary\" variant=\"contained\">공통 메뉴</Button>\n" +
  "          </Stack>\n" +
  "          {role === 'admin' ? (\n" +
  "            <div style={{color:'#b5e853'}}>관리자만 볼 수 있는 정보/기능</div>\n" +
  "          ) : (\n" +
  "            <div style={{color:'#53a6e8'}}>일반 사용자 전용 안내</div>\n" +
  "          )}\n" +
  "        </>\n" +
  "      )}\n" +
  "    </Stack>\n" +
  "  );\n" +
  "};\n" +
  "export default AuthDemo;";

const authExampleDesc =
  '실제 로그인/로그아웃, 권한별 UI(관리자/사용자), 인증 상태 관리, 권한별 버튼/메뉴/메시지 등 실전 인증/인가 예제입니다.\n- 로그인 시 권한 선택, 로그인 후 권한별로 다른 UI가 노출됩니다.\n- 실제 서비스에서는 토큰 관리, 라우트 가드, 서버 연동 등을 추가로 구현합니다.';

const AuthExample: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const example = (
    <Stack spacing={2}>
      {!isLoggedIn ? (
        <>
          <FormControl size="small">
            <InputLabel>권한</InputLabel>
            <Select value={role} label="권한" onChange={e => setRole(e.target.value as 'user' | 'admin')}>
              <MenuItem value="user">사용자</MenuItem>
              <MenuItem value="admin">관리자</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={login}>로그인</Button>
        </>
      ) : (
        <>
          <Alert severity="success">{role === 'admin' ? '관리자' : '사용자'}로 로그인됨</Alert>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={logout}>로그아웃</Button>
            {role === 'admin' && <Button color="secondary" variant="contained">관리자 메뉴</Button>}
            <Button color="primary" variant="contained">공통 메뉴</Button>
          </Stack>
          {role === 'admin' ? (
            <div style={{color:'#b5e853'}}>관리자만 볼 수 있는 정보/기능</div>
          ) : (
            <div style={{color:'#53a6e8'}}>일반 사용자 전용 안내</div>
          )}
        </>
      )}
    </Stack>
  );

  return (
    <>
      <MacCmd>npm install @mui/material</MacCmd>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>인증/인가(권한별 UI) 예제</Typography>
        <ExampleTab
          example={example}
          code={authExampleCode}
          desc={authExampleDesc}
        />
      </div>
    </>
  );
};

export default AuthExample; 