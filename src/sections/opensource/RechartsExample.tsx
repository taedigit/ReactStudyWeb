import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const RechartsExample: React.FC = () => (
  <div>
    <Typography variant="h4" sx={{ mb: 2 }}>Recharts 기본 예제</Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      <a href="https://recharts.org/en-US/" target="_blank" rel="noopener noreferrer">Recharts</a>는 React를 위한 간단하고 직관적인 차트 라이브러리입니다.<br/>
      아래는 BarChart, LineChart의 기본 사용 예시입니다.
    </Typography>
    <div style={{ marginBottom: 32 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. BarChart (막대 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';\n\nconst data = [\n  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },\n  ...\n];\n\n<ResponsiveContainer width="100%" height={300}>\n  <BarChart data={data}>\n    <CartesianGrid strokeDasharray="3 3" />\n    <XAxis dataKey="name" />\n    <YAxis />\n    <Tooltip />\n    <Legend />\n    <Bar dataKey="pv" fill="#8884d8" />\n    <Bar dataKey="uv" fill="#82ca9d" />\n  </BarChart>\n</ResponsiveContainer>`}
        desc="기본 BarChart 예제"
      />
    </div>
    <div>
      <Typography variant="h6" sx={{ mb: 2 }}>2. LineChart (선 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        }
        code={`import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';\n\nconst data = [\n  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },\n  ...\n];\n\n<ResponsiveContainer width="100%" height={300}>\n  <LineChart data={data}>\n    <CartesianGrid strokeDasharray="3 3" />\n    <XAxis dataKey="name" />\n    <YAxis />\n    <Tooltip />\n    <Legend />\n    <Line type="monotone" dataKey="pv" stroke="#8884d8" />\n    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />\n  </LineChart>\n</ResponsiveContainer>`}
        desc="기본 LineChart 예제"
      />
    </div>
  </div>
);

export default RechartsExample; 