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
    <section className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="mb-5 text-center text-2xl">My Portfloio</h1>
        <form onSubmit={handleSubmit(clickSignupHandler)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <FormInput label="이메일" name="email" type="email" register={register} required={true} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{ESSENTIAL_MESSAGE}</p>}
          <FormInput label="비밀번호" name="password" type="password" register={register} required={true} />
          {errors.password && <p className="text-red-500 text-xs mt-1">{ESSENTIAL_MESSAGE}</p>}
          <FormInput
            label="비밀번호 확인"
            name="confirmPassword"
            type="password"
            register={register}
            required={true}
            pattern={new RegExp(watch('password'))}
          />
          {isPasswordMatch || <p className="text-red-500 text-xs mt-1">{PASSWORD_MATCH_MESSAGE}</p>}
          <FormInput label="닉네임" name="username" type="text" register={register} required={true} />
          {errors.username && <p className="text-red-500 text-xs mt-1">{ESSENTIAL_MESSAGE}</p>}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
