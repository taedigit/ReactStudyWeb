import React from 'react';
import { z } from 'zod';

// 1. 기본 스키마 검증
export const ZodBasicExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>기본 검증 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 2. 커스텀 메시지/조건부
export const ZodCustomMessageExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>커스텀 메시지/조건부 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 3. 중첩/배열
export const ZodNestedArrayExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>중첩/배열 검증 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 4. 조건부 검증
export const ZodConditionalExample = () => {
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
    <div style={{marginBottom:16}}>
      <button onClick={handleCheck}>조건부 검증 실행</button>
      <div>결과: {result}</div>
    </div>
  );
};

// 전체 예제 모음
export const ZodExample = () => (
  <div>
    <h2>Zod 기본</h2>
    <ZodBasicExample />
    <h2>커스텀 메시지/조건부</h2>
    <ZodCustomMessageExample />
    <h2>중첩/배열</h2>
    <ZodNestedArrayExample />
    <h2>조건부 검증</h2>
    <ZodConditionalExample />
  </div>
); 