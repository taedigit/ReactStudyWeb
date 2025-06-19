import React, { useState, useEffect } from 'react';
import { Typography, Box, Skeleton, Avatar, Card, CardContent, Stack } from '@mui/material';
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

const skeletonLoadingCode =
  "import React, { useState, useEffect } from 'react';\n" +
  "import { Skeleton, Avatar, Card, CardContent, Stack } from '@mui/material';\n" +
  "\n" +
  "const Example = () => {\n" +
  "  const [loading, setLoading] = useState(true);\n" +
  "  useEffect(() => {\n" +
  "    const timer = setTimeout(() => setLoading(false), 2000);\n" +
  "    return () => clearTimeout(timer);\n" +
  "  }, []);\n" +
  "  return (\n" +
  "    <Stack spacing={3}>\n" +
  "      <Card sx={{ maxWidth: 400 }}>\n" +
  "        <CardContent>\n" +
  "          <Stack direction=\"row\" spacing={2} alignItems=\"center\">\n" +
  "            {loading ? <Skeleton variant=\"circular\" width={40} height={40} /> : <Avatar alt=\"User\" src=\"/avatar.png\" />}\n" +
  "            <div>\n" +
  "              {loading ? <Skeleton width={120} height={24} /> : <span style={{fontWeight:'bold'}}>홍길동</span>}\n" +
  "              <br />\n" +
  "              {loading ? <Skeleton width={80} height={18} /> : <span style={{color:'#aaa'}}>Front-end</span>}\n" +
  "            </div>\n" +
  "          </Stack>\n" +
  "        </CardContent>\n" +
  "      </Card>\n" +
  "      <Box>\n" +
  "        {loading ? (\n" +
  "          <div>\n" +
  "            <Skeleton width={350} height={28} />\n" +
  "            <Skeleton width={300} height={20} />\n" +
  "            <Skeleton width={200} height={20} />\n" +
  "          </div>\n" +
  "        ) : (\n" +
  "          <div>\n" +
  "            <div style={{fontSize:'1.2em',fontWeight:'bold'}}>로딩이 완료되었습니다!</div>\n" +
  "            <div>실제 데이터가 여기에 표시됩니다.</div>\n" +
  "          </div>\n" +
  "        )}\n" +
  "      </Box>\n" +
  "    </Stack>\n" +
  "  );\n" +
  "};\n" +
  "export default Example;";

const skeletonLoadingDesc =
  "MUI의 Skeleton 컴포넌트로 로딩 상태를 시각적으로 표시합니다.\n" +
  "- 2초 후 실제 데이터가 나타나는 예시입니다.\n" +
  "- variant(텍스트, 원형, 사각형 등)와 width/height로 다양한 플레이스홀더를 만들 수 있습니다.\n" +
  "- 실제 서비스에서는 fetch, axios 등 비동기 데이터 로딩 시 활용합니다.";

const SkeletonLoadingExample: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const example = (
    <Stack spacing={3}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            {loading ? <Skeleton variant="circular" width={40} height={40} /> : <Avatar alt="User" src="/avatar.png" />}
            <div>
              {loading ? <Skeleton width={120} height={24} /> : <span style={{fontWeight:'bold'}}>홍길동</span>}
              <br />
              {loading ? <Skeleton width={80} height={18} /> : <span style={{color:'#aaa'}}>Front-end</span>}
            </div>
          </Stack>
        </CardContent>
      </Card>
      <Box>
        {loading ? (
          <div>
            <Skeleton width={350} height={28} />
            <Skeleton width={300} height={20} />
            <Skeleton width={200} height={20} />
          </div>
        ) : (
          <div>
            <div style={{fontSize:'1.2em',fontWeight:'bold'}}>로딩이 완료되었습니다!</div>
            <div>실제 데이터가 여기에 표시됩니다.</div>
          </div>
        )}
      </Box>
    </Stack>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>Skeleton/로딩 플레이스홀더</Typography>
      <ExampleTab
        example={example}
        code={skeletonLoadingCode}
        desc={skeletonLoadingDesc}
      />
    </div>
  );
};

export default SkeletonLoadingExample; 