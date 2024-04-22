import { SigninHandler, singupHandler } from '@/server/supabase/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { SubmitHandler } from 'react-hook-form';
import { useToast } from '../toast/useToast';

type FormValues = Record<string, string>;

const enum QUERY_KEY {
  SIGNUP = 'signup',
  SIGNIN = 'signin',
}

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { notify } = useToast();

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

  // 로그인 처리 로직
  const loginMutation = useMutation({
    mutationFn: SigninHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.SIGNIN] });
      notify({ type: 'success', text: '로그인 완료!' });
      router.push('/');
    },
    onError: error => {
      notify({ type: 'error', text: '이메일 또는 비밀번호가 일치하지 않습니다.' });
    },
  });

  const clickSignupHandler: SubmitHandler<FormValues> = data => signupMutation.mutate(data);
  const clickLoginHandler: SubmitHandler<FormValues> = data => loginMutation.mutate(data);

  return {
    clickSignupHandler,
    clickLoginHandler,
  };
};
