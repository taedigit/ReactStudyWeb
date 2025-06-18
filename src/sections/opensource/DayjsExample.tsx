import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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

function FormatExample() {
  const now = dayjs();
  return <div>{now.format('YYYY-MM-DD HH:mm:ss')}</div>;
}
function ParseExample() {
  const d = dayjs('2024-06-01 15:30', 'YYYY-MM-DD HH:mm');
  return <div>{d.format('dddd, MMMM D, YYYY h:mm A')}</div>;
}
function AddSubtractExample() {
  const d = dayjs().add(7, 'day').subtract(2, 'hour');
  return <div>{d.format('YYYY-MM-DD HH:mm')}</div>;
}
function CompareExample() {
  const a = dayjs('2024-06-01');
  const b = dayjs('2024-06-10');
  return <div>{a.isBefore(b) ? 'a < b' : 'a >= b'}</div>;
}
function RelativeExample() {
  const d = dayjs().subtract(3, 'day');
  return <div>{d.fromNow()}</div>;
}

const DayjsExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 날짜 포맷</Typography>
      <ExampleTab
        example={<FormatExample />}
        code={`import dayjs from 'dayjs';\nconst now = dayjs();\nnow.format('YYYY-MM-DD HH:mm:ss');`}
        desc={`dayjs().format()으로 원하는 날짜/시간 포맷을 지정할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 파싱</Typography>
      <ExampleTab
        example={<ParseExample />}
        code={`dayjs('2024-06-01 15:30', 'YYYY-MM-DD HH:mm').format('dddd, MMMM D, YYYY h:mm A');`}
        desc={`문자열을 원하는 포맷으로 파싱하여 다양한 형태로 변환할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 날짜 연산</Typography>
      <ExampleTab
        example={<AddSubtractExample />}
        code={`dayjs().add(7, 'day').subtract(2, 'hour').format('YYYY-MM-DD HH:mm');`}
        desc={`add, subtract로 날짜/시간을 더하거나 뺄 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 날짜 비교</Typography>
      <ExampleTab
        example={<CompareExample />}
        code={`const a = dayjs('2024-06-01');\nconst b = dayjs('2024-06-10');\na.isBefore(b);`}
        desc={`isBefore, isAfter, isSame 등으로 날짜 비교가 가능합니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. 상대적 시간</Typography>
      <ExampleTab
        example={<RelativeExample />}
        code={`import relativeTime from 'dayjs/plugin/relativeTime';\ndayjs.extend(relativeTime);\ndayjs().subtract(3, 'day').fromNow();`}
        desc={`relativeTime 플러그인으로 '3일 전', '방금 전' 등 상대적 시간 표현이 가능합니다.`}
      />
    </div>
  </div>
);

export default DayjsExample; 