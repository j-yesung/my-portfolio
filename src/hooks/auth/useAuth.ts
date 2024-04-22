import { singupHandler } from '@/server/supabase/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';

type FormValues = Record<string, string>;

const enum QUERY_KEY {
  SIGNUP = 'signup',
}

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  // 회원가입 처리 로직
  const signupMutation = useMutation({
    mutationFn: singupHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIGNUP] });
      router.push('/auth/login');
    },
    onError: error => {
      console.error(error);
    },
  });

  // 회원가입 버튼 클릭
  const clickSignupHandler: SubmitHandler<FormValues> = data => {
    signupMutation.mutate(data);
  };

  return {
    clickSignupHandler,
  };
};
