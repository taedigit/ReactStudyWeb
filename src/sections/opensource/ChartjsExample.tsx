import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, RadialLinearScale, Tooltip, Legend);

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

const barData = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    { label: '점수', data: [65, 59, 80, 81], backgroundColor: '#1976d2' },
  ],
};
const lineData = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  datasets: [
    { label: '매출', data: [1200, 2100, 800, 1600, 900, 1700], borderColor: '#43a047', backgroundColor: 'rgba(67,160,71,0.2)', tension: 0.4 },
  ],
};
const pieData = {
  labels: ['사과', '바나나', '체리'],
  datasets: [
    { data: [35, 40, 25], backgroundColor: ['#ff7043', '#ffd600', '#66bb6a'] },
  ],
};
const doughnutData = {
  labels: ['Chrome', 'Safari', 'Edge', '기타'],
  datasets: [
    { data: [60, 25, 10, 5], backgroundColor: ['#1976d2', '#43a047', '#ffb300', '#bdbdbd'] },
  ],
};
const radarData = {
  labels: ['HTML', 'CSS', 'JS', 'React', 'TS'],
  datasets: [
    { label: '스킬', data: [90, 80, 85, 70, 60], backgroundColor: 'rgba(25,118,210,0.2)', borderColor: '#1976d2', pointBackgroundColor: '#1976d2' },
  ],
};
const polarData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    { data: [11, 16, 7, 14, 10], backgroundColor: ['#e57373', '#64b5f6', '#fff176', '#81c784', '#ba68c8'] },
  ],
};
const salesData = {
  labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  datasets: [
    { label: '2023', data: [1200, 2100, 800, 1600, 900, 1700], borderColor: '#1976d2', backgroundColor: 'rgba(25,118,210,0.2)', tension: 0.4 },
    { label: '2024', data: [1500, 1800, 1100, 1400, 1300, 2000], borderColor: '#ff7043', backgroundColor: 'rgba(255,112,67,0.2)', tension: 0.4 },
  ],
};

export const ChartjsExample: React.FC = () => {
  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h4" gutterBottom>Chart.js + react-chartjs-2 주요 차트 예제</Typography>
        <Typography variant="body1" gutterBottom>
          Chart.js는 <b>가장 널리 쓰이는 JS 차트 라이브러리</b> 중 하나로, <b>react-chartjs-2</b>를 통해 React에서도 손쉽게 사용할 수 있습니다.<br/>
          <ul style={{margin: '1em 0 0 1.2em', color: '#b2dfdb', fontSize: 16}}>
            <li>빠른 렌더링, 다양한 차트 타입, 커스터마이징, 플러그인 지원</li>
            <li>대시보드, 통계, 실시간 모니터링 등 실무에서 폭넓게 활용</li>
            <li>Victory/Recharts보다 <b>더 많은 차트 타입</b>과 <b>애니메이션/툴팁/반응형</b> 지원</li>
          </ul>
          <span style={{color:'#ffd600'}}>실전에서 자주 쓰는 차트와 실무 팁, 베스트 프랙티스도 함께 소개합니다.</span>
        </Typography>
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. Bar(막대) 차트</Typography>
        <ExampleTab
          example={<Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />}
          code={`<Bar data={${JSON.stringify(barData)}} options={{ responsive: true, plugins: { legend: { display: false } } }} />`}
          desc={`막대 차트는 카테고리별 값 비교에 가장 널리 쓰입니다.\n\n- 실전 활용: 매출, 방문자, 점수, 순위 등\n- Tip: 데이터셋 여러 개로 그룹/누적형도 구현 가능\n- Best Practice: 축/툴팁/애니메이션 활용, 반응형 옵션 필수`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. Line(선) 차트</Typography>
        <ExampleTab
          example={<Line data={lineData} options={{ responsive: true, plugins: { legend: { display: true } } }} />}
          code={`<Line data={${JSON.stringify(lineData)}} options={{ responsive: true, plugins: { legend: { display: true } } }} />`}
          desc={`선 차트는 시간/순서에 따른 변화, 추세를 시각화할 때 적합합니다.\n\n- 실전 활용: 월별 매출, 트래픽, 온도, 환율 등\n- Tip: 여러 시리즈를 겹쳐서 비교할 때 색상/범례/툴팁을 명확히\n- Best Practice: 곡선(tension), 포인트 강조, 반응형 옵션 활용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. Pie(원형) 차트</Typography>
        <ExampleTab
          example={<Pie data={pieData} options={{ responsive: true }} />}
          code={`<Pie data={${JSON.stringify(pieData)}} options={{ responsive: true }} />`}
          desc={`원형 차트는 전체 대비 각 부분의 비율을 한눈에 보여줍니다.\n\n- 실전 활용: 시장 점유율, 예산 분포, 설문 결과 등\n- Tip: 5개 이하 항목에만 사용, 색상 대비를 명확히\n- Best Practice: 중앙 라벨, 외부 범례, hover 강조 효과 추가`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. Doughnut(도넛) 차트</Typography>
        <ExampleTab
          example={<Doughnut data={doughnutData} options={{ responsive: true }} />}
          code={`<Doughnut data={${JSON.stringify(doughnutData)}} options={{ responsive: true }} />`}
          desc={`도넛 차트는 Pie와 유사하지만 중앙이 비어 있어 추가 정보(합계, 아이콘 등) 표시 가능.\n\n- 실전 활용: 점유율, 분포, 진행률 등\n- Tip: 중앙에 텍스트/아이콘 커스텀 가능\n- Best Practice: Pie와 동일, hover/애니메이션 활용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. Radar(레이더) 차트</Typography>
        <ExampleTab
          example={<Radar data={radarData} options={{ responsive: true, scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 100 } } }} />}
          code={`<Radar data={${JSON.stringify(radarData)}} options={{ responsive: true, scales: { r: { angleLines: { display: true }, suggestedMin: 0, suggestedMax: 100 } } }} />`}
          desc={`레이더 차트는 여러 항목의 상대적 강점/약점을 한눈에 비교할 때 사용.\n\n- 실전 활용: 스킬 매트릭스, 성과 평가, 설문 결과 등\n- Tip: 2~3개 데이터셋 비교에 적합\n- Best Practice: 색상/투명도 조절, 툴팁/범례 활용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>6. PolarArea(극좌표) 차트</Typography>
        <ExampleTab
          example={<PolarArea data={polarData} options={{ responsive: true }} />}
          code={`<PolarArea data={${JSON.stringify(polarData)}} options={{ responsive: true }} />`}
          desc={`PolarArea는 각 항목의 크기를 각도와 반지름으로 동시에 표현.\n\n- 실전 활용: 카테고리별 비중, 분포 등\n- Tip: Pie/Pie와 비교해 시각적 임팩트↑\n- Best Practice: 색상/툴팁/애니메이션 활용`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>7. 실전 예제: 연도별 매출 비교</Typography>
        <ExampleTab
          example={<Line data={salesData} options={{ responsive: true, plugins: { legend: { display: true } }, scales: { y: { beginAtZero: true } } }} />}
          code={`<Line data={${JSON.stringify(salesData)}} options={{ responsive: true, plugins: { legend: { display: true } }, scales: { y: { beginAtZero: true } } }} />`}
          desc={`실제 연도별 매출 데이터를 Chart.js로 시각화한 예시입니다.\n\n- 실전 활용: 매출, 방문자, 생산량 등 시계열 데이터 대시보드\n- Tip: 여러 데이터셋, 범례, 툴팁, 반응형 옵션 적극 활용\n- Best Practice: API 연동, 커스텀 테마, 애니메이션 등 실무 기능 적용`}
        />
      </div>
    </div>
  );
};

export default ChartjsExample; 