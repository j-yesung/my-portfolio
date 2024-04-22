import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { useAuth } from '@/hooks/auth/useAuth';

const ESSENTIAL_MESSAGE = '필수 입력 사항입니다.';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { clickSignupHandler } = useAuth();

  return (
    <section>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(clickSignupHandler)}>
        <FormInput
          label="이메일"
          name="email"
          type="email"
          register={register}
          required={true}
          errorMessage={errors.email && ESSENTIAL_MESSAGE}
        />
        <FormInput
          label="비밀번호"
          name="password"
          type="password"
          register={register}
          required={true}
          errorMessage={errors.password && ESSENTIAL_MESSAGE}
        />
        <FormInput
          label="비밀번호 확인"
          name="confirmPassword"
          type="password"
          register={register}
          required={true}
          pattern={new RegExp(watch('password'))}
          errorMessage={errors.confirmPassword && '비밀번호가 일치하지 않습니다.'}
        />
        <FormInput
          label="닉네임"
          name="username"
          type="text"
          register={register}
          required={true}
          errorMessage={errors.username && ESSENTIAL_MESSAGE}
        />
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
