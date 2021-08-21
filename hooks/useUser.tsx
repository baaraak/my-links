import { useSession } from 'next-auth/client';

export const useUser = () => {
  const [session, loading] = useSession();

  return { user: session?.user, loading };
};
