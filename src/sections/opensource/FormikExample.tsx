import React from 'react';
import { Formik, Form, Field } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ExampleTab } from '../../components/ExampleTab';

interface FormValues {
  email: string;
  password: string;
  rememberMe?: boolean;
  plan?: string;
}

// Basic Formik Example
const BasicFormikExample = () => {
  return (
    <Formik<FormValues>
      initialValues={{ email: '', password: '' }}
      onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: 300 }}>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="email"
              name="email"
              placeholder="이메일"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
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
            제출
          </button>
        </Form>
      )}
    </Formik>
  );
};

// Validation Example
const ValidationFormikExample = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바른 이메일 주소를 입력해주세요')
      .required('이메일을 입력해주세요'),
    password: Yup.string()
      .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
      .required('비밀번호를 입력해주세요'),
  });

  return (
    <Formik<FormValues>
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{ maxWidth: 300 }}>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="email"
              name="email"
              placeholder="이메일"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.email && touched.email && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.email}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.password && touched.password && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.password}
              </div>
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
        </Form>
      )}
    </Formik>
  );
};

// Advanced Example
const AdvancedFormikExample = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바른 이메일 주소를 입력해주세요')
      .required('이메일을 입력해주세요'),
    password: Yup.string()
      .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
      .required('비밀번호를 입력해주세요'),
    rememberMe: Yup.boolean(),
    plan: Yup.string().required('플랜을 선택해주세요')
  });

  return (
    <Formik<FormValues>
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        plan: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form style={{ maxWidth: 300 }}>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="email"
              name="email"
              placeholder="이메일"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.email && touched.email && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.email}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.password && touched.password && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.password}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Field type="checkbox" name="rememberMe" />
              로그인 상태 유지
            </label>
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              as="select"
              name="plan"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <option value="">플랜 선택</option>
              <option value="free">무료</option>
              <option value="pro">프로</option>
              <option value="enterprise">기업</option>
            </Field>
            {errors.plan && touched.plan && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.plan}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
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
        </Form>
      )}
    </Formik>
  );
};

const FormikExample: React.FC = () => {
  return (
    <div>
      <h3>Basic Example</h3>
      <ExampleTab
        example={<BasicFormikExample />}
        code={`import { Formik, Form, Field } from 'formik';

const BasicFormikExample = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: 300 }}>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="email"
              name="email"
              placeholder="이메일"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
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
        </Form>
      )}
    </Formik>
  );
};`}
      />

      <h3>Validation Example</h3>
      <ExampleTab
        example={<ValidationFormikExample />}
        code={`import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ValidationFormikExample = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바른 이메일 주소를 입력해주세요')
      .required('이메일을 입력해주세요'),
    password: Yup.string()
      .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
      .required('비밀번호를 입력해주세요'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{ maxWidth: 300 }}>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="email"
              name="email"
              placeholder="이메일"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.email && touched.email && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.email}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.password && touched.password && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.password}
              </div>
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
        </Form>
      )}
    </Formik>
  );
};`}
      />

      <h3>Advanced Example</h3>
      <ExampleTab
        example={<AdvancedFormikExample />}
        code={`import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const AdvancedFormikExample = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('올바른 이메일 주소를 입력해주세요')
      .required('이메일을 입력해주세요'),
    password: Yup.string()
      .min(6, '비밀번호는 최소 6자 이상이어야 합니다')
      .required('비밀번호를 입력해주세요'),
    rememberMe: Yup.boolean(),
    plan: Yup.string().required('플랜을 선택해주세요')
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        plan: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form style={{ maxWidth: 300 }}>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="email"
              name="email"
              placeholder="이메일"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.email && touched.email && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.email}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              type="password"
              name="password"
              placeholder="비밀번호"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.password && touched.password && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.password}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Field type="checkbox" name="rememberMe" />
              로그인 상태 유지
            </label>
          </div>
          <div style={{ marginBottom: 16 }}>
            <Field
              as="select"
              name="plan"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              <option value="">플랜 선택</option>
              <option value="free">무료</option>
              <option value="pro">프로</option>
              <option value="enterprise">기업</option>
            </Field>
            {errors.plan && touched.plan && (
              <div style={{ color: 'red', margin: '4px 0 0', fontSize: 14 }}>
                {errors.plan}
              </div>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
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
        </Form>
      )}
    </Formik>
  );
};`}
      />
    </div>
  );
};

export default FormikExample; 