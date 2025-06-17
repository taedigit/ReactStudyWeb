import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
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

interface FormValues {
  email: string;
  password: string;
}

const ReactHookFormDemo: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // 실제 API 호출을 시뮬레이션하기 위한 지연
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 300 }}>
      <div style={{ marginBottom: 16 }}>
        <input
          type="email"
          placeholder="이메일"
          {...register('email', {
            required: '이메일은 필수 입력 항목입니다',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '유효한 이메일 주소를 입력해주세요'
            }
          })}
          style={{
            width: '100%',
            padding: '8px',
            border: errors.email ? '1px solid #ff4d4f' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.email && (
          <div style={{ color: '#ff4d4f', fontSize: 12, marginTop: 4 }}>
            {errors.email.message}
          </div>
        )}
      </div>

      <div style={{ marginBottom: 16 }}>
        <input
          type="password"
          placeholder="비밀번호"
          {...register('password', {
            required: '비밀번호는 필수 입력 항목입니다',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다'
            }
          })}
          style={{
            width: '100%',
            padding: '8px',
            border: errors.password ? '1px solid #ff4d4f' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.password && (
          <div style={{ color: '#ff4d4f', fontSize: 12, marginTop: 4 }}>
            {errors.password.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: '100%',
          padding: '8px',
          backgroundColor: isSubmitting ? '#ccc' : '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? '제출 중...' : '제출'}
      </button>
    </form>
  );
};

export const ReactHookFormExample: FC = () => {
  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>React Hook Form Example</Typography>
      <ExampleTab
        example={<ReactHookFormDemo />}
        code={`import { useForm } from 'react-hook-form';

const Demo = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 300 }}>
      <div style={{ marginBottom: 16 }}>
        <input
          type="email"
          placeholder="이메일"
          {...register('email', {
            required: '이메일은 필수 입력 항목입니다',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: '유효한 이메일 주소를 입력해주세요'
            }
          })}
          style={{
            width: '100%',
            padding: '8px',
            border: errors.email ? '1px solid #ff4d4f' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.email && (
          <div style={{ color: '#ff4d4f', fontSize: 12, marginTop: 4 }}>
            {errors.email.message}
          </div>
        )}
      </div>
      <div style={{ marginBottom: 16 }}>
        <input
          type="password"
          placeholder="비밀번호"
          {...register('password', {
            required: '비밀번호는 필수 입력 항목입니다',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다'
            }
          })}
          style={{
            width: '100%',
            padding: '8px',
            border: errors.password ? '1px solid #ff4d4f' : '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.password && (
          <div style={{ color: '#ff4d4f', fontSize: 12, marginTop: 4 }}>
            {errors.password.message}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: '100%',
          padding: '8px',
          backgroundColor: isSubmitting ? '#ccc' : '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isSubmitting ? 'not-allowed' : 'pointer'
        }}
      >
        {isSubmitting ? '제출 중...' : '제출'}
      </button>
    </form>
  );
};`}
        desc={`react-hook-form의 기본 사용법을 보여주는 예제입니다.\n- 필수 입력, 패턴, 최소 길이 등 다양한 유효성 검증\n- isSubmitting으로 제출 중 상태 표시\n- 실전에서 가장 많이 쓰는 폼 패턴`} 
      />
    </div>
  );
};
 