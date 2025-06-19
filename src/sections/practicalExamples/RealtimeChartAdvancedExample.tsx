import React, { useEffect, useRef, useState } from 'react';
import { Typography, Button, Stack, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
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

const chartAdvancedCode =
  "import React, { useEffect, useRef, useState } from 'react';\n" +
  "import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';\n" +
  "\n" +
  "const COLORS = ['#b5e853', '#53a6e8', '#e85353'];\n" +
  "const SERIES = ['A', 'B', 'C'];\n" +
  "\n" +
  "const RealtimeChartAdvanced = () => {\n" +
  "  const [data, setData] = useState([{ time: 0, A: 50, B: 60, C: 40 }]);\n" +
  "  const [running, setRunning] = useState(true);\n" +
  "  const [selected, setSelected] = useState(null);\n" +
  "  const timeRef = useRef(1);\n" +
  "\n" +
  "  useEffect(() => {\n" +
  "    if (!running) return;\n" +
  "    const interval = setInterval(() => {\n" +
  "      setData(prev => {\n" +
  "        const next = prev.length > 29 ? prev.slice(1) : prev;\n" +
  "        return [...next, {\n" +
  "          time: timeRef.current++,\n" +
  "          A: Math.max(0, Math.min(100, next[next.length-1].A + (Math.random()*10-5))),\n" +
  "          B: Math.max(0, Math.min(100, next[next.length-1].B + (Math.random()*10-5))),\n" +
  "          C: Math.max(0, Math.min(100, next[next.length-1].C + (Math.random()*10-5)))\n" +
  "        }];\n" +
  "      });\n" +
  "    }, 1000);\n" +
  "    return () => clearInterval(interval);\n" +
  "  }, [running]);\n" +
  "\n" +
  "  const handlePointClick = (e) => {\n" +
  "    if (e && e.activePayload) setSelected(e.activePayload[0].payload);\n" +
  "  };\n" +
  "\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <button onClick={() => setRunning(r => !r)}>{running ? '일시정지' : '재시작'}</button>\n" +
  "      <LineChart width={600} height={320} data={data} onClick={handlePointClick}>\n" +
  "        <CartesianGrid strokeDasharray=\"3 3\" />\n" +
  "        <XAxis dataKey=\"time\" />\n" +
  "        <YAxis domain={[0, 100]} />\n" +
  "        <Tooltip />\n" +
  "        <Legend />\n" +
  "        {SERIES.map((s, i) => (\n" +
  "          <Line key={s} type=\"monotone\" dataKey={s} stroke={COLORS[i]} dot={true} isAnimationActive={false} />\n" +
  "        ))}\n" +
  "      </LineChart>\n" +
  "      {selected && (\n" +
  "        <div style={{marginTop:10, color:'#fff', background:'#222', padding:'1em', borderRadius:8}}>\n" +
  "          <b>상세 정보</b><br/>\n" +
  "          시간: {selected.time}<br/>\n" +
  "          A: {selected.A}, B: {selected.B}, C: {selected.C}\n" +
  "        </div>\n" +
  "      )}\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "export default RealtimeChartAdvanced;";

const chartAdvancedDesc =
  '여러 시리즈(라인) 동시 표시, 일시정지/재시작, 범례, 데이터 포인트 클릭 상세, 동적 Y축 등 실전 복합 예제입니다.\n- 3개 시리즈(A, B, C)가 1초마다 갱신됩니다.\n- 차트 클릭 시 해당 시점의 상세 정보가 표시됩니다.\n- 실제 서비스에서는 WebSocket, polling, 수동 데이터 추가 등과 결합해 활용할 수 있습니다.';

const COLORS = ['#b5e853', '#53a6e8', '#e85353'];
const SERIES = ['A', 'B', 'C'];

const RealtimeChartAdvancedExample: React.FC = () => {
  const [data, setData] = useState<{ time: number; A: number; B: number; C: number }[]>([
    { time: 0, A: 50, B: 60, C: 40 }
  ]);
  const [running, setRunning] = useState(true);
  const [selected, setSelected] = useState<any>(null);
  const timeRef = useRef(1);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setData(prev => {
        const next = prev.length > 29 ? prev.slice(1) : prev;
        return [
          ...next,
          {
            time: timeRef.current++,
            A: Math.max(0, Math.min(100, next[next.length-1].A + (Math.random()*10-5))),
            B: Math.max(0, Math.min(100, next[next.length-1].B + (Math.random()*10-5))),
            C: Math.max(0, Math.min(100, next[next.length-1].C + (Math.random()*10-5)))
          }
        ];
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  const handlePointClick = (e: any) => {
    if (e && e.activePayload) setSelected(e.activePayload[0].payload);
  };

  const example = (
    <>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Button variant={running ? 'outlined' : 'contained'} onClick={() => setRunning(r => !r)}>
          {running ? '일시정지' : '재시작'}
        </Button>
        <Typography color="#aaa">차트 클릭 시 상세 정보 표시</Typography>
      </Stack>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} onClick={handlePointClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          {SERIES.map((s, i) => (
            <Line key={s} type="monotone" dataKey={s} stroke={COLORS[i]} dot isAnimationActive={false} />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <Dialog open={!!selected} onClose={() => setSelected(null)}>
        <DialogTitle>상세 정보</DialogTitle>
        <DialogContent>
          {selected && (
            <div>
              <div>시간: {selected.time}</div>
              <div>A: {selected.A}</div>
              <div>B: {selected.B}</div>
              <div>C: {selected.C}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );

  return (
    <>
      <MacCmd>npm install recharts</MacCmd>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>실시간 차트 심화 예제</Typography>
        <ExampleTab
          example={example}
          code={chartAdvancedCode}
          desc={chartAdvancedDesc}
        />
      </div>
    </>
  );
};

export default RealtimeChartAdvancedExample; 