import React from 'react';
import { z } from 'zod';
import { ExampleTab } from '../../components/ExampleTab';
import { Button, Typography as MuiTypography } from '@mui/material';

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

// 1. 기본 스키마 검증
const zodBasicDesc = 'object, string, number 등 기본 스키마와 min/max, required 등 제약조건을 지정할 수 있습니다.';
const zodBasicCode = `const schema = z.object({
  name: z.string().min(1, '이름은 필수입니다'),
  age: z.number().min(0, '0 이상 입력'),
});
schema.safeParse({ name: '', age: -1 });`;
const ZodBasicDemo = () => {
  const schema = z.object({
    name: z.string().min(1, '이름은 필수입니다'),
    age: z.number().min(0, '0 이상 입력'),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = () => {
    const res = schema.safeParse({ name: '', age: -1 });
    setResult(res.success ? '통과!' : res.error.errors[0].message);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>기본 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 2. 커스텀 메시지/조건부
const zodCustomDesc = 'refine을 사용해 커스텀 조건/메시지를 추가할 수 있습니다.';
const zodCustomCode = `const schema = z.object({
  password: z.string().min(8, '8자 이상 입력'),
  confirm: z.string(),
}).refine(data => data.password === data.confirm, {
  message: '비밀번호가 일치해야 합니다',
  path: ['confirm'],
});
schema.safeParse({ password: '123', confirm: '456' });`;
const ZodCustomDemo = () => {
  const schema = z.object({
    password: z.string().min(8, '8자 이상 입력'),
    confirm: z.string(),
  }).refine((data: { password: string; confirm: string }) => data.password === data.confirm, {
    message: '비밀번호가 일치해야 합니다',
    path: ['confirm'],
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = () => {
    const res = schema.safeParse({ password: '123', confirm: '456' });
    setResult(res.success ? '통과!' : res.error.errors[0].message);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>커스텀 메시지/조건부 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 3. 중첩/배열
const zodNestedDesc = 'array, object를 중첩해 복잡한 구조도 검증할 수 있습니다.';
const zodNestedCode = `const schema = z.object({
  users: z.array(z.object({
    id: z.number(),
    email: z.string().email(),
  })),
});
schema.safeParse({ users: [{ id: 1, email: 'bademail' }] });`;
const ZodNestedDemo = () => {
  const schema = z.object({
    users: z.array(z.object({
      id: z.number(),
      email: z.string().email(),
    })),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = () => {
    const res = schema.safeParse({ users: [{ id: 1, email: 'bademail' }] });
    setResult(res.success ? '통과!' : res.error.errors[0].message);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>중첩/배열 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 4. 조건부 검증
const zodConditionalDesc = 'refine, .optional() 등으로 조건부 필드 검증이 가능합니다.';
const zodConditionalCode = `const schema = z.object({
  isCompany: z.boolean(),
  companyName: z.string().optional(),
}).refine(data => !data.isCompany || !!data.companyName, {
  message: '회사명 필수',
  path: ['companyName'],
});
schema.safeParse({ isCompany: true, companyName: '' });`;
const ZodConditionalDemo = () => {
  const schema = z.object({
    isCompany: z.boolean(),
    companyName: z.string().optional(),
  }).refine((data: { isCompany: boolean; companyName?: string }) => !data.isCompany || !!data.companyName, {
    message: '회사명 필수',
    path: ['companyName'],
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = () => {
    const res = schema.safeParse({ isCompany: true, companyName: '' });
    setResult(res.success ? '통과!' : res.error.errors[0].message);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>조건부 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 5. ENUM
const zodEnumDesc = 'enum으로 지정된 값만 허용할 수 있습니다.';
const zodEnumCode = `const schema = z.object({
  role: z.enum(['admin', 'user', 'guest']),
});
schema.safeParse({ role: 'manager' });`;
const ZodEnumDemo = () => {
  const schema = z.object({
    role: z.enum(['admin', 'user', 'guest']),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = () => {
    const res = schema.safeParse({ role: 'manager' });
    setResult(res.success ? '통과!' : res.error.errors[0].message);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>ENUM 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 6. transform
const zodTransformDesc = 'transform으로 입력값을 변환할 수 있습니다.';
const zodTransformCode = `const schema = z.object({
  age: z.string().transform(val => Number(val)),
});
schema.parse({ age: '42' }); // { age: 42 }`;
const ZodTransformDemo = () => {
  const schema = z.object({
    age: z.string().transform(val => Number(val)),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = () => {
    const res = schema.parse({ age: '42' });
    setResult(typeof res.age === 'number' ? '변환 성공: ' + res.age : '실패');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>transform 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 7. custom validation
const zodCustomValDesc = 'superRefine 등으로 복잡한 커스텀 검증도 가능합니다.';
const zodCustomValCode = `const schema = z.string().superRefine((val, ctx) => {
  if (!val.startsWith('A')) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'A로 시작해야 함' });
  }
});
schema.safeParse('Btest');`;
const ZodCustomValDemo = () => {
  const schema = z.string().superRefine((val, ctx) => {
    if (!val.startsWith('A')) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'A로 시작해야 함' });
    }
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = () => {
    const res = schema.safeParse('Btest');
    setResult(res.success ? '통과!' : res.error.errors[0].message);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>custom validation 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

export const ZodExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>1. 기본 스키마 검증</MuiTypography>
      <ExampleTab example={<ZodBasicDemo />} code={zodBasicCode} desc={zodBasicDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>2. 커스텀 메시지/조건부</MuiTypography>
      <ExampleTab example={<ZodCustomDemo />} code={zodCustomCode} desc={zodCustomDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>3. 중첩/배열</MuiTypography>
      <ExampleTab example={<ZodNestedDemo />} code={zodNestedCode} desc={zodNestedDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>4. 조건부 검증</MuiTypography>
      <ExampleTab example={<ZodConditionalDemo />} code={zodConditionalCode} desc={zodConditionalDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>5. ENUM</MuiTypography>
      <ExampleTab example={<ZodEnumDemo />} code={zodEnumCode} desc={zodEnumDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>6. transform</MuiTypography>
      <ExampleTab example={<ZodTransformDemo />} code={zodTransformCode} desc={zodTransformDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>7. custom validation</MuiTypography>
      <ExampleTab example={<ZodCustomValDemo />} code={zodCustomValCode} desc={zodCustomValDesc} />
    </div>
  </div>
); 