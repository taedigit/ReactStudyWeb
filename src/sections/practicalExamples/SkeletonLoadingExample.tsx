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
  "            {loading ? <Skeleton variant=\"circular\" width={40} height={40} sx={{ bgcolor: 'grey.700' }} /> : <Avatar alt=\"User\" src=\"/avatar.png\" />}\n" +
  "            <div>\n" +
  "              {loading ? <Skeleton width={120} height={24} sx={{ bgcolor: 'grey.700' }} /> : <span style={{fontWeight:'bold'}}>홍길동</span>}\n" +
  "              <br />\n" +
  "              {loading ? <Skeleton width={80} height={18} sx={{ bgcolor: 'grey.700' }} /> : <span style={{color:'#aaa'}}>Front-end</span>}\n" +
  "            </div>\n" +
  "          </Stack>\n" +
  "        </CardContent>\n" +
  "      </Card>\n" +
  "      <Box>\n" +
  "        {loading ? (\n" +
  "          <div>\n" +
  "            <Skeleton width={350} height={28} sx={{ bgcolor: 'grey.700' }} />\n" +
  "            <Skeleton width={300} height={20} sx={{ bgcolor: 'grey.700' }} />\n" +
  "            <Skeleton width={200} height={20} sx={{ bgcolor: 'grey.700' }} />\n" +
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
  const [secondsLeft, setSecondsLeft] = useState(5);
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => setLoading(false), 5000);
    const interval = setInterval(() => {
      setSecondsLeft(sec => (sec > 1 ? sec - 1 : 0));
    }, 1000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [loading]);

  // 카드 6개(3개씩 2줄) 데이터
  const cardData = [
    { name: '홍길동', role: 'Front-end', img: '/avatar.png' },
    { name: '김철수', role: 'Back-end', img: '/avatar.png' },
    { name: '이영희', role: 'Designer', img: '/avatar.png' },
    { name: '박민수', role: 'DevOps', img: '/avatar.png' },
    { name: '최지우', role: 'PM', img: '/avatar.png' },
    { name: '정수빈', role: 'QA', img: '/avatar.png' },
  ];

  const skeletonCard = (
    <Card sx={{ maxWidth: 320, minWidth: 220, m: 1 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="circular" width={40} height={40} sx={{ bgcolor: 'grey.700' }} />
          <div style={{ flex: 1 }}>
            <Skeleton width={90} height={24} sx={{ bgcolor: 'grey.700' }} />
            <br />
            <Skeleton width={60} height={18} sx={{ bgcolor: 'grey.700' }} />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );

  const handleRefresh = () => {
    setLoading(true);
    setSecondsLeft(5);
  };

  const example = (
    <Stack spacing={3}>
      {/* 타이머 */}
      {loading && (
        <Box textAlign="center" mb={-2}>
          <Typography variant="subtitle1" color="#fff" sx={{ fontWeight: 500, letterSpacing: 1 }}>
            로딩 중... <span style={{ color: '#ffd600', fontWeight: 700 }}>{secondsLeft}</span>초 남음
          </Typography>
        </Box>
      )}
      {/* 3개씩 2줄 Skeleton 카드 */}
      <Box display="flex" flexWrap="wrap" justifyContent="center" mb={2}>
        {loading
          ? Array.from({ length: 6 }).map(() => skeletonCard)
          : cardData.map(user => (
              <Card key={user.name} sx={{ maxWidth: 320, minWidth: 220, m: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar alt={user.name} src={user.img} />
                    <div style={{ flex: 1 }}>
                      <span style={{ fontWeight: 'bold' }}>{user.name}</span>
                      <br />
                      <span style={{ color: '#aaa' }}>{user.role}</span>
                    </div>
                  </Stack>
                </CardContent>
              </Card>
            ))}
      </Box>
      {/* 아래 텍스트 Skeleton/실제 데이터 */}
      <Box>
        {loading ? (
          <div>
            <Skeleton width={350} height={28} sx={{ bgcolor: 'grey.700' }} />
            <Skeleton width={300} height={20} sx={{ bgcolor: 'grey.700' }} />
            <Skeleton width={200} height={20} sx={{ bgcolor: 'grey.700' }} />
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>로딩이 완료되었습니다!</div>
            <div>실제 데이터가 여기에 표시됩니다.</div>
          </div>
        )}
      </Box>
      {/* 예제 블록 안쪽 오른쪽 아래 갱신 버튼 */}
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <button
          onClick={handleRefresh}
          style={{
            background: '#ffd600',
            color: '#232323',
            border: 'none',
            borderRadius: 24,
            padding: '10px 24px',
            fontWeight: 700,
            fontSize: 16,
            boxShadow: '0 2px 8px #23232322',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          화면 갱신
        </button>
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