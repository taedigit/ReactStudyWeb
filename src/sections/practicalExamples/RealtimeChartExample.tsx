import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

const realtimeChartCode =
  "import React, { useEffect, useRef, useState } from 'react';\n" +
  "import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';\n" +
  "\n" +
  "const RealtimeChartExample = () => {\n" +
  "  const [data, setData] = useState([{ time: 0, value: 50 }]);\n" +
  "  const timeRef = useRef(1);\n" +
  "\n" +
  "  useEffect(() => {\n" +
  "    const interval = setInterval(() => {\n" +
  "      setData(prev => {\n" +
  "        const next = prev.length > 19 ? prev.slice(1) : prev;\n" +
  "        return [...next, { time: timeRef.current++, value: Math.max(0, Math.min(100, next[next.length-1].value + (Math.random() * 20 - 10))) }];\n" +
  "      });\n" +
  "    }, 1000);\n" +
  "    return () => clearInterval(interval);\n" +
  "  }, []);\n" +
  "\n" +
  "  return (\n" +
  "    <ResponsiveContainer width=\"100%\" height={300}>\n" +
  "      <LineChart data={data}>\n" +
  "        <CartesianGrid strokeDasharray=\"3 3\" />\n" +
  "        <XAxis dataKey=\"time\" />\n" +
  "        <YAxis domain={[0, 100]} />\n" +
  "        <Tooltip />\n" +
  "        <Line type=\"monotone\" dataKey=\"value\" stroke=\"#b5e853\" dot={false} isAnimationActive={false} />\n" +
  "      </LineChart>\n" +
  "    </ResponsiveContainer>\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "export default RealtimeChartExample;";

const realtimeChartDesc =
  "실시간 데이터(예: WebSocket, polling) 차트 예제입니다.\n\n" +
  "- 1초마다 데이터가 갱신되어 라인 차트에 실시간으로 반영됩니다.\n" +
  "- recharts의 LineChart를 사용합니다.\n" +
  "- 실제 서비스에서는 WebSocket, 서버 polling 등으로 데이터를 받아와 setData로 갱신하면 됩니다.\n" +
  "- 최근 20개 데이터만 표시합니다.";

const RealtimeChartExample: React.FC = () => {
  const [data, setData] = useState<{ time: number; value: number }[]>([{ time: 0, value: 50 }]);
  const timeRef = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const next = prev.length > 19 ? prev.slice(1) : prev;
        return [
          ...next,
          {
            time: timeRef.current++,
            value: Math.max(0, Math.min(100, next[next.length - 1].value + (Math.random() * 20 - 10)))
          }
        ];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const example = (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#b5e853" dot={false} isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>실시간 데이터 차트</Typography>
      <ExampleTab
        example={example}
        code={realtimeChartCode}
        desc={realtimeChartDesc}
      />
    </div>
  );
};

export default RealtimeChartExample; 