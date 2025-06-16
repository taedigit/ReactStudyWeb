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

export const VictoryExample: React.FC = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h4" gutterBottom>Victory 주요 차트 예제</Typography>
        <Typography variant="body1" gutterBottom>
          <b>Victory</b>는 React를 위한 강력한 차트 라이브러리로, <b>SVG 기반의 선언적 차트</b>를 쉽고 유연하게 만들 수 있습니다.<br/>
          <ul style={{margin: '1em 0 0 1.2em', color: '#b2dfdb', fontSize: 16}}>
            <li>디자인 시스템과 일관된 스타일링, 커스터마이징이 매우 뛰어남</li>
            <li>애니메이션, 접근성(ARIA), 반응형 지원</li>
            <li>대규모 데이터 시각화보다는 <b>대시보드, 통계, BI, 리포트</b> 등 실무 UI에 적합</li>
            <li>Recharts보다 더 세밀한 제어와 조합이 필요할 때 추천</li>
          </ul>
          <span style={{color:'#ffd600'}}>실전에서 자주 쓰는 차트와 실무 팁, 베스트 프랙티스도 함께 소개합니다.</span>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. Bar(막대) 차트</Typography>
        <ExampleTab
          example={
            <VictoryBar data={barData} style={{ data: { fill: '#1976d2' } }} animate />
          }
          code={`<VictoryBar data={${JSON.stringify(barData)}} style={{ data: { fill: '#1976d2' } }} animate />`}
          desc={`막대 차트는 카테고리별 값 비교에 가장 널리 쓰입니다.\n\n- 실전 활용: 매출/방문자/점수/순위 등 범주별 데이터 시각화\n- Tip: VictoryGroup, VictoryStack과 조합해 그룹/누적형도 쉽게 구현\n- Best Practice: 축/툴팁/애니메이션을 함께 사용하면 가독성↑\n- 한계: 항목이 너무 많으면 가로 스크롤/축 생략 등 추가 UX 고려 필요`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. Line(선) 차트</Typography>
        <ExampleTab
          example={
            <VictoryLine data={lineData} style={{ data: { stroke: '#43a047' } }} animate />
          }
          code={`<VictoryLine data={${JSON.stringify(lineData)}} style={{ data: { stroke: '#43a047' } }} animate />`}
          desc={`선 차트는 시간/순서에 따른 변화를 시각화할 때 최적입니다.\n\n- 실전 활용: 월별 매출, 트래픽, 온도, 환율 등 시계열 데이터\n- Tip: 여러 시리즈를 겹쳐서 비교할 때 색상/범례/툴팁을 명확히\n- Best Practice: 데이터 포인트 강조(마커), 부드러운 곡선(spline) 옵션 활용\n- 한계: 값이 겹치면 해석이 어려우니 구분 색상/패턴 사용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. Pie(원형) 차트</Typography>
        <ExampleTab
          example={
            <VictoryPie data={pieData} colorScale={["#ff7043", "#ffd600", "#66bb6a"]} animate />
          }
          code={`<VictoryPie data={${JSON.stringify(pieData)}} colorScale={["#ff7043", "#ffd600", "#66bb6a"]} animate />`}
          desc={`원형 차트는 전체 대비 각 부분의 비율을 한눈에 보여줍니다.\n\n- 실전 활용: 시장 점유율, 예산 분포, 설문 결과 등\n- Tip: 5개 이하 항목에만 사용, 색상 대비를 명확히\n- Best Practice: 중앙 라벨, 외부 범례, hover 강조 효과 추가\n- 한계: 항목이 많거나 값 차이가 적으면 해석이 어려움`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. Area(면적) 차트</Typography>
        <ExampleTab
          example={
            <VictoryArea data={areaData} style={{ data: { fill: '#1976d2', stroke: '#1976d2', fillOpacity: 0.3 } }} animate />
          }
          code={`<VictoryArea data={${JSON.stringify(areaData)}} style={{ data: { fill: '#1976d2', stroke: '#1976d2', fillOpacity: 0.3 } }} animate />`}
          desc={`면적 차트는 누적값, 합계, 변화량을 강조할 때 적합합니다.\n\n- 실전 활용: 누적 매출, 트래픽, 자원 사용량 등\n- Tip: 여러 시리즈 겹칠 때 투명도 조절, 색상 구분 필수\n- Best Practice: 툴팁/범례로 각 영역 설명, 부드러운 곡선 옵션 활용\n- 한계: 3개 이상 시리즈는 stacked area로, 겹침 최소화`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. Scatter(산점도) 차트</Typography>
        <ExampleTab
          example={
            <VictoryScatter data={scatterData} size={6} style={{ data: { fill: '#d84315' } }} animate />
          }
          code={`<VictoryScatter data={${JSON.stringify(scatterData)}} size={6} style={{ data: { fill: '#d84315' } }} animate />`}
          desc={`산점도는 두 변수 간의 상관관계, 분포, 이상치 탐지에 유용합니다.\n\n- 실전 활용: 키-몸무게, 가격-판매량, 시험점수-공부시간 등\n- Tip: 점 크기/색상으로 추가 변수 표현 가능 (bubble chart)\n- Best Practice: 툴팁/줌/드래그 등 인터랙션 추가\n- 한계: 데이터가 많으면 겹침, 투명도/클러스터링 활용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. Stack(스택) 차트</Typography>
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
          desc={`스택 차트는 여러 시리즈의 합계와 기여도를 한눈에 보여줍니다.\n\n- 실전 활용: 부서별 매출, 연도별 카테고리별 합계 등\n- Tip: 누적값이 중요한 데이터에 적합, 색상/범례로 구분\n- Best Practice: 합계 라벨, hover 강조, 툴팁 활용\n- 한계: 항목이 많으면 해석이 어려우니 3~5개 권장`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>7. Group(그룹) 차트</Typography>
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
          desc={`그룹 차트는 여러 시리즈를 나란히 비교할 때 사용합니다.\n\n- 실전 활용: 연도별/분기별 부서별 실적, 남녀/연령별 비교 등\n- Tip: 막대 간격(offset) 조절로 가독성↑\n- Best Practice: 범례, 색상, 툴팁으로 그룹 구분 명확히\n- 한계: 항목이 많으면 복잡, 2~4개 그룹 권장`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>8. VictoryChart(통합/복합)</Typography>
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
          desc={`VictoryChart는 여러 차트 요소를 조합해 복합/대시보드형 차트를 만들 때 사용합니다.\n\n- 실전 활용: 막대+선, 영역+점 등 다양한 조합\n- Tip: 축/범례/툴팁/애니메이션 등 모든 Victory 컴포넌트와 조합 가능\n- Best Practice: 반응형(Responsive), ARIA 접근성, 커스텀 테마 적용\n- 한계: 복잡한 레이아웃은 레이아웃 컴포넌트와 함께 사용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>9. 실전 예제: 월별 매출 추이</Typography>
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
          desc={`실제 월별 매출 데이터를 Victory로 시각화한 예시입니다.\n\n- 실전 활용: 매출, 방문자, 생산량 등 시계열 데이터 대시보드\n- Tip: VictoryTooltip, 축 포맷, 애니메이션 등 실무에서 자주 쓰는 기능 포함\n- Best Practice: 데이터 포인트별 라벨, 반응형, 접근성(ARIA) 적용\n- 확장: API 연동, 여러 시리즈 동시 표시, 커스텀 테마 적용 등`}
        />
      </div>
    </div>
  );
};

export default VictoryExample; 