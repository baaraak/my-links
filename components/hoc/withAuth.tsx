import * as React from 'react';
import { Spinner, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useUser } from 'hooks/useUser';

export function withAuth(Page: NextPage) {
  function AuthComponent(props: any) {
    const { user, loading } = useUser();
    const router = useRouter();

    React.useEffect(() => {
      if (loading) return;
      if (!user) {
        // If not logged in
        let url = '/api/auth/signin';
        // if (router.asPath !== '/') url += `?${REDIRECT_PATH}=${router.asPath}`;
        router.replace(url);
        return;
      }
    }, [loading, user, router]);

    if (loading || !user) {
      return (
        <Center minH="100vh">
          <Spinner />
        </Center>
      );
    }
    return <Page {...props} user={user} />;
  }
  return AuthComponent;
}
