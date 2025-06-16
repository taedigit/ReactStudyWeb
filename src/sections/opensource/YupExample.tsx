import React from 'react';
import * as Yup from 'yup';

// 1. 기본 스키마 검증
export const YupBasicExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>기본 검증 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 2. 커스텀 메시지/조건부
export const YupCustomMessageExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>커스텀 메시지/조건부 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 3. 중첩/배열
export const YupNestedArrayExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>중첩/배열 검증 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 4. 조건부 검증
export const YupConditionalExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>조건부 검증 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 전체 예제 모음
export const YupExample = () => (
  <div>
    <h2>Yup 기본</h2>
    <YupBasicExample />
    <h2>커스텀 메시지/조건부</h2>
    <YupCustomMessageExample />
    <h2>중첩/배열</h2>
    <YupNestedArrayExample />
    <h2>조건부 검증</h2>
    <YupConditionalExample />
  </div>
); 