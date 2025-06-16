import React from 'react';
import * as Yup from 'yup';
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
const yupBasicDesc = 'object, string, number 등 기본 스키마와 min/max, required 등 제약조건을 지정할 수 있습니다.';
const yupBasicCode = `const schema = Yup.object({
  name: Yup.string().required('이름은 필수입니다'),
  age: Yup.number().min(0, '0 이상 입력').required('나이는 필수입니다'),
});
schema.validate({ name: '', age: -1 });`;
const YupBasicDemo = () => {
  const schema = Yup.object({
    name: Yup.string().required('이름은 필수입니다'),
    age: Yup.number().min(0, '0 이상 입력').required('나이는 필수입니다'),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = async () => {
    try {
      await schema.validate({ name: '', age: -1 });
    } catch (e: any) {
      setResult(e.message);
      return;
    }
    setResult('통과!');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>기본 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 2. 커스텀 메시지/조건부
const yupCustomDesc = 'oneOf, when, test 등으로 커스텀 조건/메시지를 추가할 수 있습니다.';
const yupCustomCode = `const schema = Yup.object({
  password: Yup.string().min(8, '8자 이상 입력').required('비밀번호 필수'),
  confirm: Yup.string().oneOf([Yup.ref('password')], '비밀번호가 일치해야 합니다'),
});
schema.validate({ password: '123', confirm: '456' });`;
const YupCustomDemo = () => {
  const schema = Yup.object({
    password: Yup.string().min(8, '8자 이상 입력').required('비밀번호 필수'),
    confirm: Yup.string().oneOf([Yup.ref('password')], '비밀번호가 일치해야 합니다'),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = async () => {
    try {
      await schema.validate({ password: '123', confirm: '456' });
    } catch (e: any) {
      setResult(e.message);
      return;
    }
    setResult('통과!');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>커스텀 메시지/조건부 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 3. 중첩/배열
const yupNestedDesc = 'array, object를 중첩해 복잡한 구조도 검증할 수 있습니다.';
const yupNestedCode = `const schema = Yup.object({
  users: Yup.array().of(
    Yup.object({
      id: Yup.number().required(),
      email: Yup.string().email().required(),
    })
  ),
});
schema.validate({ users: [{ id: 1, email: 'bademail' }] });`;
const YupNestedDemo = () => {
  const schema = Yup.object({
    users: Yup.array().of(
      Yup.object({
        id: Yup.number().required(),
        email: Yup.string().email().required(),
      })
    ),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = async () => {
    try {
      await schema.validate({ users: [{ id: 1, email: 'bademail' }] });
    } catch (e: any) {
      setResult(e.message);
      return;
    }
    setResult('통과!');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>중첩/배열 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 4. 조건부 검증
const yupConditionalDesc = 'when, test 등으로 조건부 필드 검증이 가능합니다.';
const yupConditionalCode = `const schema = Yup.object({
  isCompany: Yup.boolean(),
  companyName: Yup.string().when('isCompany', {
    is: true,
    then: s => s.required('회사명 필수'),
    otherwise: s => s.notRequired(),
  }),
});
schema.validate({ isCompany: true, companyName: '' });`;
const YupConditionalDemo = () => {
  const schema = Yup.object({
    isCompany: Yup.boolean(),
    companyName: Yup.string().when('isCompany', {
      is: true,
      then: s => s.required('회사명 필수'),
      otherwise: s => s.notRequired(),
    }),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = async () => {
    try {
      await schema.validate({ isCompany: true, companyName: '' });
    } catch (e: any) {
      setResult(e.message);
      return;
    }
    setResult('통과!');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>조건부 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 5. ENUM
const yupEnumDesc = 'oneOf으로 enum(지정된 값)만 허용할 수 있습니다.';
const yupEnumCode = `const schema = Yup.object({
  role: Yup.string().oneOf(['admin', 'user', 'guest'], '허용된 값만 입력'),
});
schema.validate({ role: 'manager' });`;
const YupEnumDemo = () => {
  const schema = Yup.object({
    role: Yup.string().oneOf(['admin', 'user', 'guest'], '허용된 값만 입력'),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = async () => {
    try {
      await schema.validate({ role: 'manager' });
    } catch (e: any) {
      setResult(e.message);
      return;
    }
    setResult('통과!');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>ENUM 검증 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 6. transform
const yupTransformDesc = 'transform으로 입력값을 변환할 수 있습니다.';
const yupTransformCode = `const schema = Yup.object({
  age: Yup.string().transform(val => Number(val)),
});
schema.validate({ age: '42' }); // { age: 42 }`;
const YupTransformDemo = () => {
  const schema = Yup.object({
    age: Yup.string().transform(val => Number(val)),
  });
  const [result, setResult] = React.useState<string>('');
  const handleCheck = async () => {
    try {
      const res = await schema.validate({ age: '42' });
      setResult(typeof res.age === 'number' ? '변환 성공: ' + res.age : '실패');
    } catch (e: any) {
      setResult(e.message);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>transform 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

// 7. custom validation
const yupCustomValDesc = 'test로 복잡한 커스텀 검증도 가능합니다.';
const yupCustomValCode = `const schema = Yup.string().test('startA', 'A로 시작해야 함', val => val?.startsWith('A'));
schema.validate('Btest');`;
const YupCustomValDemo = () => {
  const schema = Yup.string().test('startA', 'A로 시작해야 함', val => val?.startsWith('A'));
  const [result, setResult] = React.useState<string>('');
  const handleCheck = async () => {
    try {
      await schema.validate('Btest');
    } catch (e: any) {
      setResult(e.message);
      return;
    }
    setResult('통과!');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <Button variant="contained" color="primary" size="small" onClick={handleCheck}>custom validation 실행</Button>
      <MuiTypography variant="body2" sx={{ mt: 1, color: result==='통과!'?'#43a047':'#ff5252' }}>{result}</MuiTypography>
    </div>
  );
};

export const YupExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>1. 기본 스키마 검증</MuiTypography>
      <ExampleTab example={<YupBasicDemo />} code={yupBasicCode} desc={yupBasicDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>2. 커스텀 메시지/조건부</MuiTypography>
      <ExampleTab example={<YupCustomDemo />} code={yupCustomCode} desc={yupCustomDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>3. 중첩/배열</MuiTypography>
      <ExampleTab example={<YupNestedDemo />} code={yupNestedCode} desc={yupNestedDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>4. 조건부 검증</MuiTypography>
      <ExampleTab example={<YupConditionalDemo />} code={yupConditionalCode} desc={yupConditionalDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>5. ENUM</MuiTypography>
      <ExampleTab example={<YupEnumDemo />} code={yupEnumCode} desc={yupEnumDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>6. transform</MuiTypography>
      <ExampleTab example={<YupTransformDemo />} code={yupTransformCode} desc={yupTransformDesc} />
    </div>
    <div style={stateExampleBlockStyle}>
      <MuiTypography variant="h6" sx={{ mb: 2 }}>7. custom validation</MuiTypography>
      <ExampleTab example={<YupCustomValDemo />} code={yupCustomValCode} desc={yupCustomValDesc} />
    </div>
  </div>
); 