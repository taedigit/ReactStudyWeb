import React, { useState } from 'react';
import { Typography, Button, TextField, Stack } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

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

const descriptions = {
  basicCounter: `useState의 기본 사용법을 보여줍니다.\n- 컴포넌트에 상태를 추가하고, setState로 값을 변경하면 자동으로 리렌더링됩니다.\n- setState는 비동기적으로 동작하며, 이전 상태 기반 업데이트도 가능합니다.\n- 상태는 컴포넌트 최상위에서만 선언해야 하며, 조건문/반복문 내부에서는 사용할 수 없습니다.`,
  multipleStates: `여러 개의 상태를 각각 독립적으로 선언할 수 있습니다.\n- 각 상태는 별도의 setter 함수로 관리합니다.\n- 연관된 상태는 객체로, 독립적인 상태는 분리해서 관리하는 것이 성능에 유리합니다.`,
  objectState: `객체 상태를 관리할 때는 반드시 불변성을 지켜야 합니다.\n- 스프레드 연산자나 Object.assign으로 복사 후 수정합니다.\n- 중첩 객체는 깊은 복사가 필요할 수 있습니다.`,
  arrayState: `배열 상태도 불변성을 유지해야 하며, map/filter/concat 등 불변 메서드를 사용합니다.\n- 요소 추가, 제거, 수정 시 각각의 패턴을 익혀두면 좋습니다.`,
  formState: `폼 입력값을 상태로 관리하는 패턴입니다.\n- 개별 상태 또는 객체로 통합 관리할 수 있습니다.\n- 실시간 유효성 검사, 에러 상태, 동적 필드 등 다양한 폼 기능 구현이 가능합니다.`
};

const BasicCounterDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(prev => prev + 1)} variant="contained" sx={{ mt: 1 }}>
        Increment
      </Button>
    </div>
  );
};

const MultipleStatesDemo: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  return (
    <Stack spacing={2} direction="column" alignItems="flex-start">
      <Stack direction="row" spacing={2}>
        <TextField value={firstName} onChange={e => setFirstName(e.target.value)} label="First Name" variant="outlined" size="small" />
        <TextField value={lastName} onChange={e => setLastName(e.target.value)} label="Last Name" variant="outlined" size="small" />
        <TextField value={age} onChange={e => setAge(e.target.value)} type="number" label="Age" variant="outlined" size="small" />
      </Stack>
      <Typography variant="body2">Full Name: {firstName} {lastName}</Typography>
      <Typography variant="body2">Age: {age}</Typography>
    </Stack>
  );
};

const ObjectStateDemo: React.FC = () => {
  const [user, setUser] = useState({ name: '', email: '', age: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  return (
    <Stack spacing={2} direction="column" alignItems="flex-start">
      <Stack direction="row" spacing={2}>
        <TextField name="name" value={user.name} onChange={handleChange} label="Name" variant="outlined" size="small" />
        <TextField name="email" value={user.email} onChange={handleChange} label="Email" variant="outlined" size="small" />
        <TextField name="age" value={user.age} onChange={handleChange} type="number" label="Age" variant="outlined" size="small" />
      </Stack>
      <Typography variant="body2">User Data: {JSON.stringify(user, null, 2)}</Typography>
    </Stack>
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
    <Stack spacing={2} direction="column" alignItems="flex-start">
      <Stack direction="row" spacing={2}>
        <TextField value={newItem} onChange={e => setNewItem(e.target.value)} label="New Item" variant="outlined" size="small" />
        <Button onClick={addItem} variant="contained">Add Item</Button>
      </Stack>
      <ul style={{ paddingLeft: 20 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: 4 }}>
            {item}
            <Button onClick={() => removeItem(index)} size="small" color="error" variant="outlined" sx={{ ml: 1, minWidth: 32, p: 0.5 }}>Remove</Button>
          </li>
        ))}
      </ul>
    </Stack>
  );
};

const FormStateDemo: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ username: '', password: '', confirmPassword: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <TextField name="username" value={formData.username} onChange={handleChange} label="Username" variant="outlined" size="small" error={!!errors.username} helperText={errors.username} />
        <TextField name="password" type="password" value={formData.password} onChange={handleChange} label="Password" variant="outlined" size="small" error={!!errors.password} helperText={errors.password} />
        <TextField name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} label="Confirm Password" variant="outlined" size="small" error={!!errors.confirmPassword} helperText={errors.confirmPassword} />
        <Button type="submit" variant="contained">Submit</Button>
      </Stack>
    </form>
  );
};

const basicCounterCode = `const BasicCounterDemo: React.FC = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(prev => prev + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n};`;

const multipleStatesCode = `const MultipleStatesDemo: React.FC = () => {\n  const [firstName, setFirstName] = useState('');\n  const [lastName, setLastName] = useState('');\n  const [age, setAge] = useState('');\n\n  return (\n    <div>\n      <input\n        value={firstName}\n        onChange={(e) => setFirstName(e.target.value)}\n        placeholder="First Name"\n      />\n      <input\n        value={lastName}\n        onChange={(e) => setLastName(e.target.value)}\n        placeholder="Last Name"\n      />\n      <input\n        value={age}\n        onChange={(e) => setAge(e.target.value)}\n        type="number"\n        placeholder="Age"\n      />\n      <p>Full Name: {firstName} {lastName}</p>\n      <p>Age: {age}</p>\n    </div>\n  );\n};`;

const objectStateCode = `const ObjectStateDemo: React.FC = () => {\n  const [user, setUser] = useState({\n    name: '',\n    email: '',\n    age: '',\n  });\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const { name, value } = e.target;\n    setUser(prev => ({\n      ...prev,\n      [name]: value,\n    }));\n  };\n\n  return (\n    <div>\n      <input\n        name="name"\n        value={user.name}\n        onChange={handleChange}\n        placeholder="Name"\n      />\n      <input\n        name="email"\n        value={user.email}\n        onChange={handleChange}\n        placeholder="Email"\n      />\n      <input\n        name="age"\n        value={user.age}\n        onChange={handleChange}\n        type="number"\n        placeholder="Age"\n      />\n      <p>User Data: {JSON.stringify(user, null, 2)}</p>\n    </div>\n  );\n};`;

const arrayStateCode = `const ArrayStateDemo: React.FC = () => {\n  const [items, setItems] = useState<string[]>([]);\n  const [newItem, setNewItem] = useState('');\n\n  const addItem = () => {\n    if (newItem.trim()) {\n      setItems(prev => [...prev, newItem.trim()]);\n      setNewItem('');\n    }\n  };\n\n  const removeItem = (index: number) => {\n    setItems(prev => prev.filter((_, i) => i !== index));\n  };\n\n  return (\n    <div>\n      <div>\n        <input\n          value={newItem}\n          onChange={(e) => setNewItem(e.target.value)}\n          placeholder="New Item"\n        />\n        <button onClick={addItem}>Add Item</button>\n      </div>\n      <ul>\n        {items.map((item, index) => (\n          <li key={index}>\n            {item}\n            <button onClick={() => removeItem(index)}>Remove</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};`;

const formStateCode = `const FormStateDemo: React.FC = () => {\n  const [formData, setFormData] = useState({\n    username: '',\n    password: '',\n    confirmPassword: '',\n  });\n  const [errors, setErrors] = useState({\n    username: '',\n    password: '',\n    confirmPassword: '',\n  });\n\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value,\n    }));\n  };\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    const newErrors = {\n      username: formData.username.length < 3 ? 'Username must be at least 3 characters' : '',\n      password: formData.password.length < 6 ? 'Password must be at least 6 characters' : '',\n      confirmPassword: formData.password !== formData.confirmPassword ? 'Passwords do not match' : '',\n    };\n    setErrors(newErrors);\n    if (!Object.values(newErrors).some(error => error)) {\n      console.log('Form submitted:', formData);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <div>\n        <input\n          name="username"\n          value={formData.username}\n          onChange={handleChange}\n          placeholder="Username"\n        />\n        {errors.username && <p>{errors.username}</p>}\n      </div>\n      <div>\n        <input\n          name="password"\n          type="password"\n          value={formData.password}\n          onChange={handleChange}\n          placeholder="Password"\n        />\n        {errors.password && <p>{errors.password}</p>}\n      </div>\n      <div>\n        <input\n          name="confirmPassword"\n          type="password"\n          value={formData.confirmPassword}\n          onChange={handleChange}\n          placeholder="Confirm Password"\n        />\n        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}\n      </div>\n      <button type="submit">Submit</button>\n    </form>\n  );\n};`;

export const UseStateExample = () => {
  return (
    <div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 카운터 (Basic Counter)</Typography>
        <ExampleTab
          example={<BasicCounterDemo />}
          code={basicCounterCode}
          desc={descriptions.basicCounter}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 여러 상태 관리 (Multiple States)</Typography>
        <ExampleTab
          example={<MultipleStatesDemo />}
          code={multipleStatesCode}
          desc={descriptions.multipleStates}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 객체 상태 (Object State)</Typography>
        <ExampleTab
          example={<ObjectStateDemo />}
          code={objectStateCode}
          desc={descriptions.objectState}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 배열 상태 (Array State)</Typography>
        <ExampleTab
          example={<ArrayStateDemo />}
          code={arrayStateCode}
          desc={descriptions.arrayState}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 폼 상태 (Form State)</Typography>
        <ExampleTab
          example={<FormStateDemo />}
          code={formStateCode}
          desc={descriptions.formState}
        />
      </div>
    </div>
  );
}; 