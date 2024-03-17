'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AuthProvidersOptions } from '../../../config/auth';

export const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated' && session) {
    router.push('/');
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn(AuthProvidersOptions.GITHUB)}>
        Sign in with GitHub
      </button>
    </div>
  );
};

export default LoginPage;
