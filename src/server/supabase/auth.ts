import { supabase } from '@/share/supabase';

type values = Record<string, string>;

/**
 * 회원가입 처리 함수
 * @param values 이메일, 비밀번호, 닉네임
 * @returns
 */
export const singupHandler = async (values: values) => {
  const { email, password, username } = values;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (data)
    await supabase
      .from('user')
      .insert([{ email: data.session?.user.email, username }])
      .select('*');
  if (error) throw error;

  return data;
};

/**
 * 로그인 처리 함수
 * @param values 이메일, 비밀번호
 * @returns
 */
export const loginHandler = async (values: values) => {
  const { email, password } = values;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
};
