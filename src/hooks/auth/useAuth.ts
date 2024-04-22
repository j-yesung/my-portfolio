import { SubmitHandler } from 'react-hook-form';

type FormValues = Record<string, string>;

export const useAuth = () => {
  const clickSignupHandler: SubmitHandler<FormValues> = data => {
    console.log(data);
    // supabase API 호출
  };

  return {
    clickSignupHandler,
  };
};
