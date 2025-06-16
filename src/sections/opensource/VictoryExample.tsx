import React from 'react';
import { VictoryBar, VictoryLine, VictoryPie, VictoryArea, VictoryScatter, VictoryStack, VictoryGroup, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const barData = [
  { x: 'A', y: 30 },
  { x: 'B', y: 80 },
  { x: 'C', y: 45 },
];

const lineData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

const pieData = [
  { x: '사과', y: 35 },
  { x: '바나나', y: 40 },
  { x: '체리', y: 25 },
];

const areaData = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
  { x: 5, y: 5 },
];

const scatterData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

const stackDataA = [
  { x: '1분기', y: 40 },
  { x: '2분기', y: 55 },
  { x: '3분기', y: 75 },
];
const stackDataB = [
  { x: '1분기', y: 20 },
  { x: '2분기', y: 35 },
  { x: '3분기', y: 45 },
];

const groupDataA = [
  { x: '2019', y: 30 },
  { x: '2020', y: 50 },
  { x: '2021', y: 40 },
];
const groupDataB = [
  { x: '2019', y: 20 },
  { x: '2020', y: 35 },
  { x: '2021', y: 55 },
];

const salesData = [
  { month: '1월', sales: 1200 },
  { month: '2월', sales: 2100 },
  { month: '3월', sales: 800 },
  { month: '4월', sales: 1600 },
  { month: '5월', sales: 900 },
  { month: '6월', sales: 1700 },
];

export const VictoryExample: React.FC = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <Typography variant="h4" gutterBottom>Victory 주요 차트 예제</Typography>
      <Typography variant="body1" gutterBottom>
        Victory는 React를 위한 강력한 차트 라이브러리로, 다양한 차트 타입과 커스터마이징 기능을 제공합니다. 아래는 주요 차트 예제와 실전 활용 예시입니다.
      </Typography>
      <ExampleTab
        example={
          <VictoryBar data={barData} style={{ data: { fill: '#1976d2' } }} animate />
        }
        code={`<VictoryBar data={${JSON.stringify(barData)}} style={{ data: { fill: '#1976d2' } }} animate />`}
        desc={`Bar(막대) 차트\n\n범주별 값을 비교할 때 사용합니다.\n장점: 직관적, 그룹/스택 등 다양한 변형 지원\n단점: 데이터가 많으면 복잡해질 수 있음`}
      />
      <ExampleTab
        example={
          <VictoryLine data={lineData} style={{ data: { stroke: '#43a047' } }} animate />
        }
        code={`<VictoryLine data={${JSON.stringify(lineData)}} style={{ data: { stroke: '#43a047' } }} animate />`}
        desc={`Line(선) 차트\n\n시간에 따른 변화, 추세를 볼 때 적합합니다.\n장점: 변화 추적에 용이\n단점: 데이터가 겹치면 해석이 어려울 수 있음`}
      />
      <ExampleTab
        example={
          <VictoryPie data={pieData} colorScale={["#ff7043", "#ffd600", "#66bb6a"]} animate />
        }
        code={`<VictoryPie data={${JSON.stringify(pieData)}} colorScale={["#ff7043", "#ffd600", "#66bb6a"]} animate />`}
        desc={`Pie(원형) 차트\n\n전체 대비 각 부분의 비율을 시각화할 때 사용합니다.\n장점: 비율 파악에 직관적\n단점: 항목이 많으면 비효율적`}
      />
      <ExampleTab
        example={
          <VictoryArea data={areaData} style={{ data: { fill: '#1976d2', stroke: '#1976d2', fillOpacity: 0.3 } }} animate />
        }
        code={`<VictoryArea data={${JSON.stringify(areaData)}} style={{ data: { fill: '#1976d2', stroke: '#1976d2', fillOpacity: 0.3 } }} animate />`}
        desc={`Area(면적) 차트\n\n누적값, 변화량을 강조할 때 사용합니다.\n장점: 누적/합계 시각화에 적합\n단점: 여러 시리즈 겹치면 해석이 어려움`}
      />
      <ExampleTab
        example={
          <VictoryScatter data={scatterData} size={6} style={{ data: { fill: '#d84315' } }} animate />
        }
        code={`<VictoryScatter data={${JSON.stringify(scatterData)}} size={6} style={{ data: { fill: '#d84315' } }} animate />`}
        desc={`Scatter(산점도) 차트\n\n두 변수 간의 관계, 분포를 볼 때 사용합니다.\n장점: 상관관계, 이상치 탐지에 유용\n단점: 데이터가 많으면 겹침 현상 발생`}
      />
      <ExampleTab
        example={
          <VictoryStack colorScale={["#1976d2", "#ffb300"]}>
            <VictoryBar data={stackDataA} animate />
            <VictoryBar data={stackDataB} animate />
          </VictoryStack>
        }
        code={`<VictoryStack colorScale={["#1976d2", "#ffb300"]}>
  <VictoryBar data={${JSON.stringify(stackDataA)}} animate />
  <VictoryBar data={${JSON.stringify(stackDataB)}} animate />
</VictoryStack>`}
        desc={`Stack(스택) 차트\n\n여러 시리즈의 합계를 누적해서 보여줍니다.\n장점: 전체 합계와 각 항목 기여도 파악\n단점: 항목이 많으면 해석이 어려움`}
      />
      <ExampleTab
        example={
          <VictoryGroup offset={20} colorScale={["#1976d2", "#ffb300"]}>
            <VictoryBar data={groupDataA} animate />
            <VictoryBar data={groupDataB} animate />
          </VictoryGroup>
        }
        code={`<VictoryGroup offset={20} colorScale={["#1976d2", "#ffb300"]}>
  <VictoryBar data={${JSON.stringify(groupDataA)}} animate />
  <VictoryBar data={${JSON.stringify(groupDataB)}} animate />
</VictoryGroup>`}
        desc={`Group(그룹) 차트\n\n여러 시리즈를 나란히 비교할 때 사용합니다.\n장점: 그룹별 비교에 용이\n단점: 항목이 많으면 복잡해질 수 있음`}
      />
      <ExampleTab
        example={
          <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
            <VictoryAxis dependentAxis tickFormat={t => `${t}`}/>
            <VictoryAxis tickFormat={t => `${t}`} />
            <VictoryBar data={barData} style={{ data: { fill: '#1976d2' } }} animate />
          </VictoryChart>
        }
        code={`<VictoryChart theme={VictoryTheme.material} domainPadding={20}>
  <VictoryAxis dependentAxis tickFormat={function(t) { return t; }} />
  <VictoryAxis tickFormat={function(t) { return t; }} />
  <VictoryBar data={[{ x: 'A', y: 30 }, { x: 'B', y: 80 }, { x: 'C', y: 45 }]} style={{ data: { fill: '#1976d2' } }} animate />
</VictoryChart>`}
        desc={`VictoryChart(통합)\n\n여러 차트 요소를 조합해 복합 차트를 만들 수 있습니다.\n장점: 다양한 차트 조합 가능\n단점: 복잡한 레이아웃은 추가 설정 필요`}
      />
      <ExampleTab
        example={
          <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
            <VictoryAxis tickFormat={d => d} />
            <VictoryAxis dependentAxis tickFormat={t => `${t}만원`} />
            <VictoryLine
              data={salesData}
              x="month"
              y="sales"
              style={{ data: { stroke: '#43a047', strokeWidth: 3 } }}
              labels={({ datum }) => `${datum.sales}만원`}
              labelComponent={<VictoryTooltip style={{ fontSize: 14 }} />}
              animate
            />
          </VictoryChart>
        }
        code={`<VictoryChart theme={VictoryTheme.material} domainPadding={20}>
  <VictoryAxis tickFormat={function(d) { return d; }} />
  <VictoryAxis dependentAxis tickFormat={function(t) { return t + '만원'; }} />
  <VictoryLine
    data={[{ month: '1월', sales: 1200 }, { month: '2월', sales: 2100 }, { month: '3월', sales: 800 }, { month: '4월', sales: 1600 }, { month: '5월', sales: 900 }, { month: '6월', sales: 1700 }]}
    x="month"
    y="sales"
    style={{ data: { stroke: '#43a047', strokeWidth: 3 } }}
    labels={function({ datum }) { return datum.sales + '만원'; }}
    labelComponent={<VictoryTooltip style={{ fontSize: 14 }} />}
    animate
  />
</VictoryChart>`}
        desc={`실전 예제: 월별 매출 추이\n\n실제 데이터를 활용한 라인 차트 예시입니다.\n툴팁, 축 포맷 등 실무에서 자주 쓰는 기능을 포함합니다.`}
      />
    </div>
  );
};

export default VictoryExample; 