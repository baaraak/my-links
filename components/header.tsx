import { Center, Heading } from '@chakra-ui/react';
import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useUser } from 'hooks/useUser';
import { useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  const { user, loading } = useUser();

  if (loading) return null;
  return (
    <Center
      height={{ md: 20, base: 50 }}
      bg={useColorModeValue('gray.900', 'gray.200')}
      color={useColorModeValue('gray.100', 'gray.800')}
    >
      this is header
      {user ? (
        <Heading as="h3" fontSize="2xl">
          Hello, {user.name}!
        </Heading>
      ) : (
        <NextLink passHref href="/api/auth/signin">
          <Button as={Link} colorScheme="blue">
            Signin
          </Button>
        </NextLink>
      )}
    </Center>
  );
};

export default Header;
