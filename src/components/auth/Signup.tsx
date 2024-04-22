import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { useAuth } from '@/hooks/auth/useAuth';

const ESSENTIAL_MESSAGE = '필수 입력 사항입니다.';
const PASSWORD_MATCH_MESSAGE = '비밀번호가 일치하지 않습니다.';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { clickSignupHandler } = useAuth();
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const isPasswordMatch = password === confirmPassword;

  return (
    <section>
      <h1>나의 포트폴리오</h1>
      <form onSubmit={handleSubmit(clickSignupHandler)}>
        <FormInput label="이메일" name="email" type="email" register={register} required={true} />
        {errors.email && <p>{ESSENTIAL_MESSAGE}</p>}
        <FormInput label="비밀번호" name="password" type="password" register={register} required={true} />
        {errors.password && <p>{ESSENTIAL_MESSAGE}</p>}
        <FormInput
          label="비밀번호 확인"
          name="confirmPassword"
          type="password"
          register={register}
          required={true}
          pattern={new RegExp(watch('password'))}
        />
        {isPasswordMatch || <p>{PASSWORD_MATCH_MESSAGE}</p>}
        <FormInput label="닉네임" name="username" type="text" register={register} required={true} />
        {errors.username && <p>{ESSENTIAL_MESSAGE}</p>}
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
