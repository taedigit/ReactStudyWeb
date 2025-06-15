import { useForm } from 'react-hook-form';

export function ReactHookFormExample() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 300 }}>
      <div style={{ marginBottom: 16 }}>
        <input 
          {...register("email", { 
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "올바른 이메일 주소를 입력해주세요"
            }
          })}
          placeholder="이메일"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.email && (
          <p style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
            {errors.email.message as string}
          </p>
        )}
      </div>
      <div style={{ marginBottom: 16 }}>
        <input 
          type="password"
          {...register("password", { 
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 6,
              message: "비밀번호는 최소 6자 이상이어야 합니다"
            }
          })}
          placeholder="비밀번호"
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        {errors.password && (
          <p style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
            {errors.password.message as string}
          </p>
        )}
      </div>
      <button 
        type="submit"
        style={{
          width: '100%',
          padding: '8px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        제출
      </button>
    </form>
  );
} 