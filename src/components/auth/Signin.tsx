import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import { useAuth } from '@/hooks/auth/useAuth';

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const { clickLoginHandler } = useAuth();

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="mb-5 text-center text-2xl">My Portfloio</h1>
        <form onSubmit={handleSubmit(clickLoginHandler)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <FormInput label="이메일" name="email" type="email" register={register} required={true} />
          <FormInput label="비밀번호" name="password" type="password" register={register} required={true} />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signin;
