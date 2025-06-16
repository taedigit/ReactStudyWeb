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
  Treemap,
  FunnelChart, Funnel, LabelList, Sankey
} from 'recharts';
import { MLBStandings2025Chart } from './MLBStandings2025Chart';

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

// FunnelChart용 데이터
const funnelData = [
  { value: 300, name: '방문' },
  { value: 200, name: '회원가입' },
  { value: 120, name: '장바구니' },
  { value: 80, name: '구매' },
];

// SankeyChart용 데이터
const sankeyData = {
  nodes: [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
  ],
  links: [
    { source: 0, target: 1, value: 10 },
    { source: 1, target: 2, value: 15 },
    { source: 0, target: 3, value: 5 },
    { source: 3, target: 4, value: 10 },
    { source: 2, target: 4, value: 5 },
  ],
};

// Gauge(게이지) 차트용 데이터 (RadialBarChart 활용)
const gaugeData = [
  { name: '진행률', value: 68, fill: '#8884d8' },
];

// 커스텀 Bar 렌더러 예제
const customBarData = [
  { name: 'A', value: 12 },
  { name: 'B', value: 18 },
  { name: 'C', value: 8 },
  { name: 'D', value: 15 },
];
const renderCustomBar = (props: any) => {
  const { x, y, width, height, value } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#ffb300" rx={6} />
      <text x={x + width / 2} y={y - 8} fill="#ffb300" textAnchor="middle" fontSize={22}>
        ★
      </text>
      <text x={x + width / 2} y={y + height / 2} fill="#232323" textAnchor="middle" fontSize={14} dy={4} fontWeight="bold">
        {value}
      </text>
    </g>
  );
};

// 실전 데이터 예제 (월별 매출)
const salesData = [
  { month: '1월', sales: 1200 },
  { month: '2월', sales: 2100 },
  { month: '3월', sales: 800 },
  { month: '4월', sales: 1600 },
  { month: '5월', sales: 900 },
  { month: '6월', sales: 1700 },
  { month: '7월', sales: 2500 },
  { month: '8월', sales: 2200 },
  { month: '9월', sales: 1800 },
  { month: '10월', sales: 2100 },
  { month: '11월', sales: 2300 },
  { month: '12월', sales: 2700 },
];

// MLB 2024 AL 동부지구 순위 샘플 데이터
const alEastStandings = [
  { team: '뉴욕 양키스', wins: 55, losses: 36, pct: 0.604, gb: 0 },
  { team: '볼티모어 오리올스', wins: 54, losses: 36, pct: 0.600, gb: 0.5 },
  { team: '보스턴 레드삭스', wins: 49, losses: 41, pct: 0.544, gb: 5.5 },
  { team: '토론토 블루제이스', wins: 41, losses: 49, pct: 0.456, gb: 13.5 },
  { team: '탬파베이 레이스', wins: 40, losses: 50, pct: 0.444, gb: 14.5 },
];
// AL 중부지구
const alCentralStandings = [
  { team: '클리블랜드 가디언스', wins: 53, losses: 35, pct: 0.602, gb: 0 },
  { team: '미네소타 트윈스', wins: 48, losses: 40, pct: 0.545, gb: 5 },
  { team: '캔자스시티 로열스', wins: 45, losses: 44, pct: 0.506, gb: 8.5 },
  { team: '디트로이트 타이거스', wins: 41, losses: 48, pct: 0.461, gb: 12.5 },
  { team: '시카고 화이트삭스', wins: 26, losses: 63, pct: 0.292, gb: 27.5 },
];
// AL 서부지구
const alWestStandings = [
  { team: '시애틀 매리너스', wins: 49, losses: 42, pct: 0.538, gb: 0 },
  { team: '휴스턴 애스트로스', wins: 46, losses: 44, pct: 0.511, gb: 2.5 },
  { team: '텍사스 레인저스', wins: 44, losses: 46, pct: 0.489, gb: 4.5 },
  { team: 'LA 에인절스', wins: 37, losses: 53, pct: 0.411, gb: 11.5 },
  { team: '오클랜드 애슬레틱스', wins: 34, losses: 57, pct: 0.374, gb: 15 },
];
// NL 동부지구
const nlEastStandings = [
  { team: '필라델피아 필리스', wins: 58, losses: 32, pct: 0.644, gb: 0 },
  { team: '애틀랜타 브레이브스', wins: 49, losses: 39, pct: 0.557, gb: 8 },
  { team: '뉴욕 메츠', wins: 44, losses: 44, pct: 0.500, gb: 13 },
  { team: '워싱턴 내셔널스', wins: 41, losses: 48, pct: 0.461, gb: 16.5 },
  { team: '마이애미 말린스', wins: 32, losses: 58, pct: 0.356, gb: 26 },
];
// NL 중부지구
const nlCentralStandings = [
  { team: '밀워키 브루어스', wins: 52, losses: 38, pct: 0.578, gb: 0 },
  { team: '세인트루이스 카디널스', wins: 47, losses: 42, pct: 0.528, gb: 4.5 },
  { team: '시카고 컵스', wins: 44, losses: 47, pct: 0.484, gb: 8.5 },
  { team: '신시내티 레즈', wins: 42, losses: 48, pct: 0.467, gb: 10 },
  { team: '피츠버그 파이리츠', wins: 41, losses: 49, pct: 0.456, gb: 11 },
];
// NL 서부지구
const nlWestStandings = [
  { team: 'LA 다저스', wins: 55, losses: 37, pct: 0.598, gb: 0 },
  { team: '샌디에이고 파드리스', wins: 49, losses: 43, pct: 0.533, gb: 6 },
  { team: '애리조나 다이아몬드백스', wins: 45, losses: 46, pct: 0.495, gb: 9.5 },
  { team: '샌프란시스코 자이언츠', wins: 44, losses: 47, pct: 0.484, gb: 10.5 },
  { team: '콜로라도 로키스', wins: 32, losses: 60, pct: 0.348, gb: 23 },
];

// MLB 팀 순위 차트 공통 옵션
const mlbBarChartCommon = {
  layout: 'vertical',
  margin: { left: 40, right: 20, top: 20, bottom: 20 },
  barSize: 24,
};

// 선수 순위 링크
const playerStatsLinks = [
  { label: 'MLB 공식 타자 순위', url: 'https://www.mlb.com/stats/' },
  { label: 'ESPN MLB Player Stats', url: 'https://www.espn.com/mlb/stats' },
  { label: 'Baseball Reference', url: 'https://www.baseball-reference.com/leagues/majors/2024-batting-leaders.shtml' },
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
    {/* FunnelChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>10. FunnelChart (퍼널 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey="value" data={funnelData} isAnimationActive>
                <LabelList position="right" fill="#fff" stroke="none" dataKey="name" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        }
        code={`import { FunnelChart, Funnel, LabelList, Tooltip, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={300}>\n  <FunnelChart>\n    <Tooltip />\n    <Funnel dataKey="value" data={data} isAnimationActive>\n      <LabelList position="right" fill="#fff" stroke="none" dataKey="name" />\n    </Funnel>\n  </FunnelChart>\n</ResponsiveContainer>`}
        desc={`FunnelChart(퍼널 차트)는 단계별 이탈률, 전환율을 시각화할 때 사용합니다.\n마케팅 퍼널, 회원가입, 구매 전환 등 단계별 분석에 적합하며, 각 단계의 크기 차이로 이탈 구간을 한눈에 파악할 수 있습니다.\n단계가 많아지면 해석이 어려울 수 있고, 각 단계의 명확한 정의가 중요합니다.`}
      />
    </div>
    {/* SankeyChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>11. SankeyChart (생키 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <Sankey
              data={sankeyData}
              nodePadding={30}
              margin={{ left: 50, right: 50, top: 20, bottom: 20 }}
              linkCurvature={0.5}
              node={{ stroke: '#333', strokeWidth: 1 }}
              link={{ stroke: '#8884d8', strokeWidth: 2 }}
            />
          </ResponsiveContainer>
        }
        code={`import { Sankey, ResponsiveContainer } from 'recharts';\n\nconst data = { nodes: [...], links: [...] };\n\n<ResponsiveContainer width="100%" height={300}>\n  <Sankey\n    data={data}\n    nodePadding={30}\n    margin={{ left: 50, right: 50, top: 20, bottom: 20 }}\n    linkCurvature={0.5}\n    node={{ stroke: '#333', strokeWidth: 1 }}\n    link={{ stroke: '#8884d8', strokeWidth: 2 }}\n  />\n</ResponsiveContainer>`}
        desc={`SankeyChart(생키 차트)는 흐름(Flow)과 분기, 합류를 시각화하는 차트입니다.\n에너지 흐름, 사용자 이동 경로, 자원 분배 등 복잡한 흐름 분석에 적합합니다.\n노드와 링크의 두께로 흐름의 크기를 직관적으로 표현할 수 있습니다.\n구조가 복잡할수록 해석이 어려울 수 있으니, 주요 흐름 위주로 시각화하는 것이 좋습니다.`}
      />
    </div>
    {/* Gauge(게이지) 차트 예제 (RadialBarChart 활용) */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>12. Gauge (게이지 차트)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={220}>
            <RadialBarChart
              cx="50%"
              cy="100%"
              innerRadius="90%"
              outerRadius="100%"
              startAngle={180}
              endAngle={0}
              data={gaugeData}
            >
              <RadialBar dataKey="value" />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        }
        code={`import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';\n\nconst data = [ ... ];\n\n<ResponsiveContainer width="100%" height={220}>\n  <RadialBarChart\n    cx="50%" cy="100%" innerRadius="90%" outerRadius="100%"\n    startAngle={180} endAngle={0} data={data}>\n    <RadialBar dataKey="value" />\n    <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />\n    <Tooltip />\n  </RadialBarChart>\n</ResponsiveContainer>`}
        desc={`Gauge(게이지) 차트는 속도계, 점수, 진행률 등 단일 값을 원형 게이지로 표현합니다.\n대시보드의 KPI, 점수, 퍼센트 등 단일 지표 강조에 적합하며, 시각적 임팩트가 큽니다.\nRadialBarChart를 활용해 쉽게 구현할 수 있습니다.\n단, 여러 값을 동시에 비교하는 용도에는 적합하지 않습니다.`}
      />
    </div>
    {/* 커스텀 BarChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>13. Custom BarChart (커스텀 렌더링)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={customBarData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#ffb300" shape={renderCustomBar} />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`const renderCustomBar = (props) => {
  const { x, y, width, height, value } = props;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#ffb300" rx={6} />
      <text x={x + width / 2} y={y - 8} fill="#ffb300" textAnchor="middle" fontSize={22}>★</text>
      <text x={x + width / 2} y={y + height / 2} fill="#232323" textAnchor="middle" fontSize={14} dy={4} fontWeight="bold">{value}</text>
    </g>
  );
};

<BarChart data={data}>
  ...
  <Bar dataKey="value" fill="#ffb300" shape={renderCustomBar} />
</BarChart>`}
        desc={`BarChart의 shape 속성을 활용해 각 Bar를 커스텀 SVG(별, 이모지 등)와 색상, 텍스트로 자유롭게 꾸밀 수 있습니다.\n실무에서는 브랜드 아이콘, 강조 효과, 특수한 시각화 등 다양한 커스텀 차트에 활용됩니다.\n툴팁, 애니메이션, 조건부 스타일 등도 함께 적용할 수 있습니다.`}
      />
    </div>
    {/* 실전 데이터 LineChart 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>14. 실전 데이터 LineChart (월별 매출)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={v => v.toLocaleString() + '만원'} />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#1976d2" strokeWidth={3} dot={{ r: 6, fill: '#fff', stroke: '#1976d2', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        }
        code={`const salesData = [
  { month: '1월', sales: 1200 },
  ...
];

<LineChart data={salesData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip formatter={v => v.toLocaleString() + '만원'} />
  <Legend />
  <Line type="monotone" dataKey="sales" stroke="#1976d2" strokeWidth={3} dot={{ r: 6, fill: '#fff', stroke: '#1976d2', strokeWidth: 2 }} />
</LineChart>`}
        desc={`실제 비즈니스에서 자주 쓰는 월별 매출 데이터를 LineChart로 시각화한 예제입니다.\n실제 API 응답 데이터, DB 쿼리 결과 등과 연동해 실시간 대시보드, 경영 리포트 등에 활용할 수 있습니다.\n툴팁, 포맷터, 강조 스타일 등 실전에서 필요한 다양한 옵션을 적용할 수 있습니다.`}
      />
    </div>
    {/* MLB AL 동부지구 순위 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>15. MLB AL 동부지구 팀 순위 (2024)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={alEastStandings} layout="vertical" margin={mlbBarChartCommon.margin} barSize={mlbBarChartCommon.barSize}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 60]} />
              <YAxis dataKey="team" type="category" width={120} />
              <Tooltip formatter={v => v + '승'} />
              <Bar dataKey="wins" fill="#1976d2" name="승리" />
              <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`const alEastStandings = [ ... ];
<BarChart data={alEastStandings} layout="vertical">
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="number" />
  <YAxis dataKey="team" type="category" />
  <Tooltip />
  <Bar dataKey="wins" fill="#1976d2" name="승리" />
  <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
</BarChart>`}
        desc={`2024년 MLB 아메리칸리그(AL) 동부지구 팀 순위를 BarChart로 시각화한 예제입니다.\n승/패, 승률, 게임차 등 주요 지표를 한눈에 비교할 수 있습니다.\n실제 MLB 공식 데이터를 기반으로 하며, 실시간 데이터 연동도 가능합니다.`}
      />
    </div>
    {/* MLB AL 중부지구 순위 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>16. MLB AL 중부지구 팀 순위 (2024)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={alCentralStandings} layout="vertical" margin={mlbBarChartCommon.margin} barSize={mlbBarChartCommon.barSize}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 60]} />
              <YAxis dataKey="team" type="category" width={120} />
              <Tooltip formatter={v => v + '승'} />
              <Bar dataKey="wins" fill="#1976d2" name="승리" />
              <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`const alCentralStandings = [ ... ];
<BarChart data={alCentralStandings} layout="vertical">
  ...
</BarChart>`}
        desc={`2024년 MLB AL 중부지구 팀 순위입니다.\n지구별 경쟁 구도, 승/패, 게임차를 직관적으로 비교할 수 있습니다.`}
      />
    </div>
    {/* MLB AL 서부지구 순위 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>17. MLB AL 서부지구 팀 순위 (2024)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={alWestStandings} layout="vertical" margin={mlbBarChartCommon.margin} barSize={mlbBarChartCommon.barSize}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 60]} />
              <YAxis dataKey="team" type="category" width={120} />
              <Tooltip formatter={v => v + '승'} />
              <Bar dataKey="wins" fill="#1976d2" name="승리" />
              <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`const alWestStandings = [ ... ];
<BarChart data={alWestStandings} layout="vertical">
  ...
</BarChart>`}
        desc={`2024년 MLB AL 서부지구 팀 순위입니다.\n지구별 경쟁 구도, 승/패, 게임차를 직관적으로 비교할 수 있습니다.`}
      />
    </div>
    {/* MLB NL 동부지구 순위 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>18. MLB NL 동부지구 팀 순위 (2024)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={nlEastStandings} layout="vertical" margin={mlbBarChartCommon.margin} barSize={mlbBarChartCommon.barSize}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 65]} />
              <YAxis dataKey="team" type="category" width={120} />
              <Tooltip formatter={v => v + '승'} />
              <Bar dataKey="wins" fill="#388e3c" name="승리" />
              <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`const nlEastStandings = [ ... ];
<BarChart data={nlEastStandings} layout="vertical">
  ...
</BarChart>`}
        desc={`2024년 MLB 내셔널리그(NL) 동부지구 팀 순위입니다.\n지구별 경쟁 구도, 승/패, 게임차를 직관적으로 비교할 수 있습니다.`}
      />
    </div>
    {/* MLB NL 중부지구 순위 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>19. MLB NL 중부지구 팀 순위 (2024)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={nlCentralStandings} layout="vertical" margin={mlbBarChartCommon.margin} barSize={mlbBarChartCommon.barSize}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 60]} />
              <YAxis dataKey="team" type="category" width={120} />
              <Tooltip formatter={v => v + '승'} />
              <Bar dataKey="wins" fill="#388e3c" name="승리" />
              <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`const nlCentralStandings = [ ... ];
<BarChart data={nlCentralStandings} layout="vertical">
  ...
</BarChart>`}
        desc={`2024년 MLB NL 중부지구 팀 순위입니다.\n지구별 경쟁 구도, 승/패, 게임차를 직관적으로 비교할 수 있습니다.`}
      />
    </div>
    {/* MLB NL 서부지구 순위 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>20. MLB NL 서부지구 팀 순위 (2024)</Typography>
      <ExampleTab
        example={
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={nlWestStandings} layout="vertical" margin={mlbBarChartCommon.margin} barSize={mlbBarChartCommon.barSize}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 60]} />
              <YAxis dataKey="team" type="category" width={120} />
              <Tooltip formatter={v => v + '승'} />
              <Bar dataKey="wins" fill="#388e3c" name="승리" />
              <Bar dataKey="losses" fill="#bdbdbd" name="패배" />
            </BarChart>
          </ResponsiveContainer>
        }
        code={`const nlWestStandings = [ ... ];
<BarChart data={nlWestStandings} layout="vertical">
  ...
</BarChart>`}
        desc={`2024년 MLB NL 서부지구 팀 순위입니다.\n지구별 경쟁 구도, 승/패, 게임차를 직관적으로 비교할 수 있습니다.`}
      />
    </div>
    {/* MLB 선수 순위 안내 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>21. MLB 선수 순위/기록 (외부 링크)</Typography>
      <ExampleTab
        example={
          <ul style={{ fontSize: 18, lineHeight: 2 }}>
            {playerStatsLinks.map(link => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>{link.label}</a>
              </li>
            ))}
          </ul>
        }
        code={`// 선수 순위/기록은 공식 MLB, ESPN, Baseball Reference 등에서 확인하세요.
const playerStatsLinks = [
  { label: 'MLB 공식 타자 순위', url: 'https://www.mlb.com/stats/' },
  { label: 'ESPN MLB Player Stats', url: 'https://www.espn.com/mlb/stats' },
  { label: 'Baseball Reference', url: 'https://www.baseball-reference.com/leagues/majors/2024-batting-leaders.shtml' },
];`}
        desc={`MLB 선수별 타율, 홈런, 타점, 투수 기록 등은 아래 공식 통계 사이트에서 실시간으로 확인할 수 있습니다.\n- MLB 공식: https://www.mlb.com/stats/\n- ESPN: https://www.espn.com/mlb/stats\n- Baseball Reference: https://www.baseball-reference.com/leagues/majors/2024-batting-leaders.shtml\n차트로 직접 시각화하려면 API 연동 또는 CSV 데이터 활용이 필요합니다.`}
      />
    </div>
    {/* MLB 2025년 팀 순위 (REST API, 실시간) 예제 */}
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>22. MLB 2025년 팀 순위 (REST API, 실시간)</Typography>
      <ExampleTab
        example={<MLBStandings2025Chart />}
        code={`import { MLBStandings2025Chart } from './MLBStandings2025Chart';

<MLBStandings2025Chart />`}
        desc={`MLB 2025년 팀 순위를 REST API(statsapi.mlb.com)로 실시간 불러와 지구별 탭으로 시각화합니다.\nAL/NL, 동/중/서부 등 원하는 지구별로 팀 순위를 바로 확인할 수 있습니다.\n실제 MLB 공식 데이터를 활용하며, 실시간 대시보드, 스포츠 분석 등에 바로 적용 가능합니다.`}
      />
    </div>
  </div>
);

export default RechartsExample; 