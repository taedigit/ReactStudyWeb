import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { ExampleSection } from '../../components/ExampleSection';

const descriptions = {
  basicCounter: `• useState 기본 개념
  - 컴포넌트에 상태 추가
  - 상태 변경 시 자동 리렌더링
  - const [state, setState] = useState(초기값)

• setState 함수 특징
  - 비동기적으로 실행
  - 배치(batch) 처리로 성능 최적화
  - 이전 상태 기반 업데이트 가능

• 사용 시 주의사항
  - 렌더링마다 동일한 순서로 호출
  - 조건문/반복문 내부 사용 금지
  - 컴포넌트 최상위에서만 호출`,

  multipleStates: `• 여러 상태 관리
  - 독립적인 여러 상태 선언 가능
  - 각 상태별로 별도의 setter 함수
  - 상태 타입은 모든 JavaScript 값 가능
    (숫자, 문자열, 배열, 객체 등)

• 상태 구조화 전략
  - 연관된 상태는 객체로 그룹화
  - 독립적인 상태는 분리
  - 불필요한 리렌더링 방지

• 성능 최적화
  - 상태 분할로 리렌더링 최소화
  - 큰 객체는 여러 상태로 분리
  - 불변성 유지 중요`,

  objectState: `• 객체 상태 관리
  - 객체의 불변성 유지 필수
  - 스프레드 연산자로 복사 후 수정
  - 중첩 객체 주의

• 객체 상태 업데이트 방법
  1. 스프레드 연산자 사용
     - {...state, key: newValue}
  2. 객체 복사 후 수정
     - Object.assign({}, state, {key: newValue})
  3. 중첩 객체 업데이트
     - 깊은 복사 필요
     - 모든 레벨 불변성 유지

• 주의사항
  - 직접 수정 금지 (state.key = value ❌)
  - 얕은 복사의 한계 이해
  - 복잡한 객체는 단순화 고려`,

  arrayState: `• 배열 상태 관리
  - 배열의 불변성 유지 필수
  - 배열 메서드 활용
  - map, filter, concat 선호

• 배열 업데이트 패턴
  1. 요소 추가
     - spread: [...array, newItem]
     - concat: array.concat(newItem)
  2. 요소 제거
     - filter: array.filter(조건)
  3. 요소 수정
     - map: array.map(변환함수)

• 최적화 전략
  - key prop 올바르게 사용
  - 불필요한 배열 복사 방지
  - 큰 배열은 가상화 고려`,

  formState: `• 폼 상태 관리
  - 제어 컴포넌트 패턴
  - 실시간 유효성 검사
  - 폼 제출 처리

• 구현 방식
  1. 개별 상태 관리
     - 각 입력마다 별도 상태
     - 간단한 폼에 적합
  2. 객체로 통합 관리
     - 하나의 객체로 모든 입력값 관리
     - 복잡한 폼에 적합

• 고급 기능
  - 실시간 유효성 검사
  - 에러 상태 관리
  - 폼 초기화
  - 조건부 필드
  - 동적 필드 추가/제거`
};

const BasicCounterDemo: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
};

const MultipleStatesDemo: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
        placeholder="Age"
      />
      <p>Full Name: {firstName} {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const ObjectStateDemo: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="age"
        value={user.age}
        onChange={handleChange}
        type="number"
        placeholder="Age"
      />
      <p>User Data: {JSON.stringify(user, null, 2)}</p>
    </div>
  );
};

const ArrayStateDemo: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems(prev => [...prev, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New Item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FormStateDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      username: formData.username.length < 3 ? 'Username must be at least 3 characters' : '',
      password: formData.password.length < 6 ? 'Password must be at least 6 characters' : '',
      confirmPassword: formData.password !== formData.confirmPassword ? 'Passwords do not match' : '',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const UseStateExample: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        useState Examples
      </Typography>
      <ExampleSection
        title="Basic Counter"
        description="Demonstrates basic usage of useState with a counter."
        example={<BasicCounterDemo />}
        code={basicCounterCode}
        tooltip={descriptions.basicCounter}
      />
      <ExampleSection
        title="Multiple States"
        description="Shows how to manage multiple state variables."
        example={<MultipleStatesDemo />}
        code={multipleStatesCode}
        tooltip={descriptions.multipleStates}
      />
      <ExampleSection
        title="Object State"
        description="Demonstrates managing state with objects."
        example={<ObjectStateDemo />}
        code={objectStateCode}
        tooltip={descriptions.objectState}
      />
      <ExampleSection
        title="Array State"
        description="Shows how to manage arrays in state."
        example={<ArrayStateDemo />}
        code={arrayStateCode}
        tooltip={descriptions.arrayState}
      />
      <ExampleSection
        title="Form State"
        description="Demonstrates form handling with state."
        example={<FormStateDemo />}
        code={formStateCode}
        tooltip={descriptions.formState}
      />
    </div>
  );
};

const basicCounterCode = `const BasicCounterDemo: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
};`;

const multipleStatesCode = `const MultipleStatesDemo: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
        placeholder="Age"
      />
      <p>Full Name: {firstName} {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
};`;

const objectStateCode = `const ObjectStateDemo: React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="age"
        value={user.age}
        onChange={handleChange}
        type="number"
        placeholder="Age"
      />
      <p>User Data: {JSON.stringify(user, null, 2)}</p>
    </div>
  );
};`;

const arrayStateCode = `const ArrayStateDemo: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems(prev => [...prev, newItem.trim()]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New Item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`;

const formStateCode = `const FormStateDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      username: formData.username.length < 3 ? 'Username must be at least 3 characters' : '',
      password: formData.password.length < 6 ? 'Password must be at least 6 characters' : '',
      confirmPassword: formData.password !== formData.confirmPassword ? 'Passwords do not match' : '',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};`;

export default UseStateExample; 