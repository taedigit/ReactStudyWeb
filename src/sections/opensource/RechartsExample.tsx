import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import {
  AreaChart, Area,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  RadialBarChart, RadialBar,
  ComposedChart,
  ScatterChart, Scatter,
  Treemap
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// AreaChart용 데이터
const areaData = [
  { name: 'A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'C', uv: 200, pv: 9800, amt: 2290 },
  { name: 'D', uv: 278, pv: 3908, amt: 2000 },
  { name: 'E', uv: 189, pv: 4800, amt: 2181 },
  { name: 'F', uv: 239, pv: 3800, amt: 2500 },
  { name: 'G', uv: 349, pv: 4300, amt: 2100 },
];

// PieChart용 데이터
const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// RadarChart용 데이터
const radarData = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

// RadialBarChart용 데이터
const radialData = [
  { name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8' },
  { name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed' },
  { name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1' },
  { name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d' },
  { name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c' },
  { name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57' },
  { name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658' },
];

// ComposedChart용 데이터
const composedData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// ScatterChart용 데이터
const scatterData = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
  { x: 150, y: 400 },
  { x: 110, y: 280 },
];

// Treemap용 데이터
const treemapData = [
  { name: 'A1', size: 1000 },
  { name: 'A2', size: 2000 },
  { name: 'B1', size: 400 },
  { name: 'B2', size: 800 },
  { name: 'C1', size: 1500 },
  { name: 'C2', size: 1000 },
];

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

const RechartsExample: React.FC = () => (
  <div>
    <Typography variant="h4" sx={{ mb: 2 }}>Recharts 기본 예제</Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      <a href="https://recharts.org/en-US/" target="_blank" rel="noopener noreferrer">Recharts</a>는 React를 위한 간단하고 직관적인 차트 라이브러리입니다.<br/>
      아래는 BarChart, LineChart의 기본 사용 예시입니다.
    </Typography>
    <div style={stateExampleBlockStyle}>
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
        desc={`BarChart(막대 차트)는 범주형 데이터의 크기 비교에 가장 널리 쓰이는 차트입니다.
각 막대의 길이로 값을 직관적으로 비교할 수 있어, 매출, 인구, 점수 등 다양한 실무 데이터 시각화에 적합합니다.
수평/수직, 그룹/스택 등 다양한 변형이 가능합니다.
항목이 많아도 가독성이 좋고, 색상/애니메이션 등으로 강조 효과를 줄 수 있습니다.
단, 연속형 데이터(시간 흐름 등)에는 적합하지 않습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
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
        desc={`LineChart(선 차트)는 시간에 따른 변화나 추세를 시각화할 때 주로 사용합니다.
데이터 포인트를 선으로 연결해 흐름을 한눈에 파악할 수 있어, 매출 추이, 온도 변화, 주가 등 시계열 데이터에 적합합니다.
여러 계열을 한 그래프에 겹쳐 비교할 수 있고, 마우스 오버 시 상세값을 쉽게 확인할 수 있습니다.
단, 데이터가 불규칙하거나 항목이 너무 많으면 해석이 어려울 수 있습니다.`}
      />
    </div>
    {/* AreaChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. AreaChart (면적 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        }
        code={`import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <AreaChart data={data}>\n    <CartesianGrid strokeDasharray="3 3" />\n    <XAxis dataKey="name" />\n    <YAxis />\n    <Tooltip />\n    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />\n  </AreaChart>\n</ResponsiveContainer>`}
        desc={`AreaChart(면적 차트)는 선 차트와 유사하지만, 선 아래 영역을 색으로 채워 누적값이나 전체 규모를 강조합니다.
누적 면적, 누적 비율 등 여러 계열의 합계나 부분별 기여도를 시각화할 때 유용합니다.
트렌드와 전체 규모를 동시에 보여주고 싶을 때 적합하며, 색상 투명도를 조절해 겹침도 표현할 수 있습니다.
단, 계열이 많으면 겹침으로 인해 해석이 어려워질 수 있습니다.`}
      />
    </div>
    {/* PieChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. PieChart (원형 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {pieData.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        }
        code={`import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\nconst COLORS = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <PieChart>\n    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>\n      {data.map((_, idx) => (<Cell key={\`cell-IDX\`} fill={COLORS[idx % COLORS.length]} />))}\n    </Pie>\n    <Tooltip />\n  </PieChart>\n</ResponsiveContainer>`}
        desc={`PieChart(원형 차트)는 전체 대비 각 항목의 비율을 시각적으로 보여줍니다.
각 섹터의 크기가 비율을 직관적으로 표현해, 시장 점유율, 예산 분포 등 비중 비교에 적합합니다.
항목이 5~6개 이하일 때 가장 효과적이며, 색상으로 구분이 명확합니다.
단, 항목이 많거나 값 차이가 작으면 해석이 어려워지고, 정확한 수치 비교에는 부적합할 수 있습니다.`}
      />
    </div>
    {/* RadarChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. RadarChart (레이더 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        }
        code={`import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <RadarChart data={data}>\n    <PolarGrid />\n    <PolarAngleAxis dataKey="subject" />\n    <PolarRadiusAxis />\n    <Radar name="A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />\n    <Radar name="B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />\n    <Legend />\n  </RadarChart>\n</ResponsiveContainer>`}
        desc={`RadarChart(레이더 차트)는 여러 항목의 상대적 강점/약점을 한눈에 비교할 때 사용합니다.
각 축이 항목을 나타내며, 다차원 성과(예: 역량 평가, 스포츠 능력 등)를 시각화하는 데 적합합니다.
여러 그룹의 특성을 겹쳐 비교할 수 있어, 인재 역량, 제품 성능, 팀별 비교 등에 자주 활용됩니다.
단, 축이 많아지면 해석이 어려워지고, 절대값보다는 패턴 비교에 더 적합합니다.`}
      />
    </div>
    {/* RadialBarChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>6. RadialBarChart (방사형 막대 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart
              innerRadius="20%"
              outerRadius="90%"
              data={radialData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar dataKey="uv" label />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        }
        code={`import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <RadialBarChart innerRadius="20%" outerRadius="90%" data={data} startAngle={180} endAngle={0}>\n    <RadialBar dataKey="uv" label />\n    <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />\n    <Tooltip />\n  </RadialBarChart>\n</ResponsiveContainer>`}
        desc={`RadialBarChart(방사형 막대 차트)는 원형으로 분포된 값의 크기를 비교할 때 사용합니다.
연령대별 분포, 카테고리별 점유율 등 원형 레이아웃이 강조되는 데이터에 적합합니다.
막대의 길이와 각도로 값을 표현해 시각적 임팩트가 크며, 대시보드 등에서 포인트 지표로 자주 활용됩니다.
단, 항목이 많거나 값 차이가 작으면 해석이 어려울 수 있습니다.`}
      />
    </div>
    {/* ComposedChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>7. ComposedChart (복합 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={composedData}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        }
        code={`import { ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <ComposedChart data={data}>\n    <CartesianGrid stroke="#f5f5f5" />\n    <XAxis dataKey="name" />\n    <YAxis />\n    <Tooltip />\n    <Legend />\n    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />\n    <Bar dataKey="pv" barSize={20} fill="#413ea0" />\n    <Line type="monotone" dataKey="uv" stroke="#ff7300" />\n  </ComposedChart>\n</ResponsiveContainer>`}
        desc={`ComposedChart(복합 차트)는 여러 차트 유형(선, 막대, 면적 등)을 한 그래프에 결합해 다양한 관점에서 데이터를 분석할 수 있습니다.
매출, 성장률, 누적값 등 복합 지표를 한눈에 비교할 때 유용합니다.
실무 대시보드, 경영 리포트 등에서 다양한 지표를 한 화면에 보여주고 싶을 때 적합합니다.
단, 너무 많은 계열을 한 그래프에 넣으면 오히려 가독성이 떨어질 수 있습니다.`}
      />
    </div>
    {/* ScatterChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>8. ScatterChart (산점도 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X" />
              <YAxis type="number" dataKey="y" name="Y" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="A" data={scatterData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        }
        code={`import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <ScatterChart>\n    <CartesianGrid />\n    <XAxis type="number" dataKey="x" name="X" />\n    <YAxis type="number" dataKey="y" name="Y" />\n    <Tooltip cursor={{ strokeDasharray: '3 3' }} />\n    <Scatter name="A" data={data} fill="#8884d8" />\n  </ScatterChart>\n</ResponsiveContainer>`}
        desc={`ScatterChart(산점도 차트)는 두 변수 간의 관계나 분포를 시각화할 때 사용합니다.
실험 결과, 상관관계, 이상치 탐지 등 데이터의 패턴을 직관적으로 파악할 수 있습니다.
점의 색상, 크기, 모양 등으로 추가 정보를 표현할 수 있어, 통계 분석, 과학 데이터, 머신러닝 등에서 자주 활용됩니다.
단, 데이터가 너무 많으면 점이 겹쳐 해석이 어려울 수 있습니다.`}
      />
    </div>
    {/* Treemap 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>9. Treemap (트리맵 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <Treemap data={treemapData} dataKey="size" nameKey="name" stroke="#fff" fill="#8884d8" />
          </ResponsiveContainer>
        }
        code={`import { Treemap, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <Treemap data={data} dataKey="size" nameKey="name" stroke="#fff" fill="#8884d8" />\n</ResponsiveContainer>`}
        desc={`Treemap(트리맵 차트)는 계층적 데이터나 부분-전체 관계를 사각형 면적으로 표현합니다.
디렉터리 용량, 예산 분포 등 전체 대비 각 항목의 비중을 직관적으로 파악할 때 유용합니다.
계층 구조(부서-팀-개인 등)나 그룹별 비중을 한눈에 보여주고 싶을 때 적합합니다.
단, 항목이 너무 많거나 값 차이가 작으면 작은 사각형이 잘 보이지 않을 수 있습니다.`}
      />
    </div>
  </div>
);

export default RechartsExample; 