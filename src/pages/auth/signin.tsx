import Login from '@/components/auth/Login';
import Head from 'next/head';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>회원가입</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="나의 포트폴리오" />
        <meta name="keywords" content="portfolio, my portfolio, 포트폴리오, 포트폴리오 공유, 나의 포트폴리오" />
        <meta name="description" content="나의 포트폴리오의 로그인 페이지 입니다. " />
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
