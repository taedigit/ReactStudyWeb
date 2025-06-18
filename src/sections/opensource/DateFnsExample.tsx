import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import { format, parse, addDays, subHours, isBefore, formatDistance } from 'date-fns';

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
  const now = new Date();
  return <div>{format(now, 'yyyy-MM-dd HH:mm:ss')}</div>;
}
function ParseExample() {
  const d = parse('2024-06-01 15:30', 'yyyy-MM-dd HH:mm', new Date());
  return <div>{format(d, 'EEEE, MMMM d, yyyy h:mm a')}</div>;
}
function AddSubtractExample() {
  const d = subHours(addDays(new Date(), 7), 2);
  return <div>{format(d, 'yyyy-MM-dd HH:mm')}</div>;
}
function CompareExample() {
  const a = new Date('2024-06-01');
  const b = new Date('2024-06-10');
  return <div>{isBefore(a, b) ? 'a < b' : 'a >= b'}</div>;
}
function RelativeExample() {
  const d = new Date();
  const past = new Date(d.getTime() - 3 * 24 * 60 * 60 * 1000);
  return <div>{formatDistance(past, d, { addSuffix: true })}</div>;
}

const DateFnsExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 날짜 포맷</Typography>
      <ExampleTab
        example={<FormatExample />}
        code={`import { format } from 'date-fns';\nconst now = new Date();\nformat(now, 'yyyy-MM-dd HH:mm:ss');`}
        desc={`format()으로 원하는 날짜/시간 포맷을 지정할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 파싱</Typography>
      <ExampleTab
        example={<ParseExample />}
        code={`import { parse, format } from 'date-fns';\nconst d = parse('2024-06-01 15:30', 'yyyy-MM-dd HH:mm', new Date());\nformat(d, 'EEEE, MMMM d, yyyy h:mm a');`}
        desc={`parse()로 문자열을 날짜로 변환, format()으로 다양한 형태로 출력할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 날짜 연산</Typography>
      <ExampleTab
        example={<AddSubtractExample />}
        code={`import { addDays, subHours, format } from 'date-fns';\nconst d = subHours(addDays(new Date(), 7), 2);\nformat(d, 'yyyy-MM-dd HH:mm');`}
        desc={`addDays, subHours 등으로 날짜/시간을 더하거나 뺄 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 날짜 비교</Typography>
      <ExampleTab
        example={<CompareExample />}
        code={`import { isBefore } from 'date-fns';\nconst a = new Date('2024-06-01');\nconst b = new Date('2024-06-10');\nisBefore(a, b);`}
        desc={`isBefore, isAfter, isEqual 등으로 날짜 비교가 가능합니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. 상대적 시간</Typography>
      <ExampleTab
        example={<RelativeExample />}
        code={`import { formatDistance } from 'date-fns';\nconst d = new Date();\nconst past = new Date(d.getTime() - 3 * 24 * 60 * 60 * 1000);\nformatDistance(past, d, { addSuffix: true });`}
        desc={`formatDistance로 '3 days ago', 'in 2 hours' 등 상대적 시간 표현이 가능합니다.`}
      />
    </div>
  </div>
);

export default DateFnsExample; 